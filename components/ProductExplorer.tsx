"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

type ComponentId = "system" | "housing" | "blower" | "nozzle";
type NozzleSubPart = "all" | "convergent" | "throat" | "divergent";

const componentDetails: Record<ComponentId, { label: string; tag: string; description: string; aerodynamicPrinciple: string }> = {
  system: {
    label: "CoolJet Complete System",
    tag: "AEROSPACE-INSPIRED INDOOR UNIT",
    description: "Full conceptual assembly uniting the ambient air intake, high-velocity blower impeller, and convergent-divergent nozzle. Operates with zero chemical refrigerants or compressors.",
    aerodynamicPrinciple: "Continuous single-phase air cycle: induction → kinetic acceleration → C-D nozzle expansion.",
  },
  housing: {
    label: "Indoor-Unit Housing",
    tag: "TRANSLUCENT ENCLOSURE",
    description: "Lightweight architectural chassis enclosing the blower wheel and nozzle geometry with integrated intake and discharge grilles.",
    aerodynamicPrinciple: "Maintains positive static pressure and directs laminar airflow toward the nozzle inlet.",
  },
  blower: {
    label: "Blower Fan Assembly",
    tag: "CENTRIFUGAL DRIVE",
    description: "The primary motive driver of the CoolJet architecture. It accelerates incoming ambient room air into the nozzle throat without mechanical compressor pistons.",
    aerodynamicPrinciple: "Rotational energy induction supplying continuous flow velocity to the convergent nozzle.",
  },
  nozzle: {
    label: "C-D Nozzle (de Laval)",
    tag: "STATIONARY EXPANSION DUCT",
    description: "Aerospace de Laval geometry with zero moving internal parts. Guides air through convergent compression, throat static pressure drop, and adiabatic expansion.",
    aerodynamicPrinciple: "Pressure reduction and temperature decrease at the throat restriction resulting in cooled discharge.",
  },
};

const nozzleSubDetails: Record<NozzleSubPart, { label: string; desc: string }> = {
  all: {
    label: "Full C-D Nozzle Channel",
    desc: "Seamless contoured passage containing convergent intake, throat restriction, and divergent expansion bell.",
  },
  convergent: {
    label: "Convergent Section",
    desc: "Contracts incoming airflow area, ramping up streamline velocity before the throat.",
  },
  throat: {
    label: "Throat (Minimum Area)",
    desc: "Point of maximum flow contraction where static pressure and temperature drop occur.",
  },
  divergent: {
    label: "Divergent Section",
    desc: "Gradually widening bell facilitating controlled adiabatic expansion into cooled room air.",
  },
};

function PartMaterial({ active, color }: { active: boolean; color: string }) {
  return (
    <meshStandardMaterial
      color={color}
      metalness={0.45}
      roughness={0.33}
      emissive={active ? "#1855dd" : "#000000"}
      emissiveIntensity={active ? 0.35 : 0}
    />
  );
}

function Fan({ active, exploded }: { active: boolean; exploded: boolean }) {
  const fan = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (fan.current) fan.current.rotation.x += delta * 0.65;
  });

  return (
    <group position={[-2.4 - (exploded ? 0.85 : 0), 0, 0]} ref={fan}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.2, 1.2, 0.52, 48]} />
        <PartMaterial active={active} color="#174f88" />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.58, 32]} />
        <meshStandardMaterial color="#d8eefb" metalness={0.65} roughness={0.22} />
      </mesh>
      {Array.from({ length: 8 }).map((_, index) => (
        <mesh key={index} position={[0, 0, 0]} rotation={[0, 0, (index * Math.PI) / 4]}>
          <boxGeometry args={[0.08, 1.54, 0.25]} />
          <meshStandardMaterial color="#86b3d7" metalness={0.45} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Nozzle({
  active,
  exploded,
  subPart,
}: {
  active: boolean;
  exploded: boolean;
  subPart: NozzleSubPart;
}) {
  const offset = exploded ? 0.72 : 0;

  const isConvActive = active && (subPart === "all" || subPart === "convergent");
  const isThroatActive = active && (subPart === "all" || subPart === "throat");
  const isDivActive = active && (subPart === "all" || subPart === "divergent");

  return (
    <group position={[0.4 + offset, 0, 0]}>
      {/* 01: Convergent Section (Cone narrowing toward center) */}
      <mesh position={[-0.88, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 1.05, 1.75, 48, 1, true]} />
        <PartMaterial active={isConvActive} color="#9ec6df" />
      </mesh>

      {/* 02: Throat Ring (Minimum Cross-Sectional Area) */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.22, 48]} />
        <meshStandardMaterial
          color={isThroatActive ? "#55c9f4" : "#dff4ff"}
          metalness={0.75}
          roughness={0.15}
          emissive={isThroatActive ? "#1866ff" : "#000000"}
          emissiveIntensity={isThroatActive ? 0.45 : 0}
        />
      </mesh>

      {/* 03: Divergent Section (Expanding Bell) */}
      <mesh position={[0.92, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.05, 0.42, 1.78, 48, 1, true]} />
        <PartMaterial active={isDivActive} color="#79a5c5" />
      </mesh>
    </group>
  );
}

function Housing({ active, exploded }: { active: boolean; exploded: boolean }) {
  return (
    <group position={[0, exploded ? 1.35 : 0, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[6.9, 3.05, 3.1]} />
        <meshPhysicalMaterial
          color="#76a7cc"
          metalness={0.16}
          roughness={0.25}
          transparent
          opacity={active ? 0.28 : 0.14}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, -1.52, 0]}>
        <boxGeometry args={[6.9, 0.12, 3.12]} />
        <PartMaterial active={active} color="#17456f" />
      </mesh>
      <mesh position={[-3.48, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[3.05, 2.95]} />
        <meshBasicMaterial color="#8fcaf0" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

function Assembly({
  selected,
  exploded,
  nozzleSubPart,
}: {
  selected: ComponentId;
  exploded: boolean;
  nozzleSubPart: NozzleSubPart;
}) {
  return (
    <group rotation={[0.22, -0.62, 0]}>
      <Housing active={selected === "housing"} exploded={exploded} />
      <Fan active={selected === "blower"} exploded={exploded} />
      <Nozzle active={selected === "nozzle"} exploded={exploded} subPart={nozzleSubPart} />
      <mesh position={[0, -2.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5.7, 64]} />
        <meshBasicMaterial color="#0b2848" transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

export function ProductExplorer() {
  const [selected, setSelected] = useState<ComponentId>("system");
  const [exploded, setExploded] = useState(false);
  const [nozzleSubPart, setNozzleSubPart] = useState<NozzleSubPart>("all");

  const current = componentDetails[selected];

  const handleSelectComponent = (id: ComponentId) => {
    setSelected(id);
    if (id !== "nozzle") {
      setNozzleSubPart("all");
    }
  };

  return (
    <section className="product-explorer" id="product" aria-labelledby="explorer-title">
      <div className="section-container">
        <div className="explorer-intro">
          <div>
            <p className="eyebrow">03 / INTERACTIVE PRODUCT ARCHITECTURE</p>
            <h2 id="explorer-title">
              Inspect the<br />
              <em>assembly.</em>
            </h2>
          </div>
          <p className="lead">
            Real-time 3D conceptual assembly based on the CoolJet indoor unit and C-D nozzle design from the project pitch deck. Select components to explore their engineering roles.
          </p>
        </div>

        <div className="explorer-workspace">
          {/* 3D WebGL Canvas */}
          <div
            className="canvas-shell"
            aria-label="Interactive 3D CoolJet model. Drag to orbit, scroll to zoom."
          >
            <Canvas camera={{ position: [7.4, 4.8, 8], fov: 34 }} dpr={[1, 1.75]}>
              <color attach="background" args={["#061a34"]} />
              <ambientLight intensity={1.7} />
              <directionalLight position={[4, 7, 5]} intensity={3.1} color="#d9f1ff" />
              <pointLight position={[-5, 1, 2]} intensity={15} color="#2a82ff" />
              <Assembly selected={selected} exploded={exploded} nozzleSubPart={nozzleSubPart} />
              <OrbitControls
                enablePan={false}
                minDistance={6.5}
                maxDistance={14}
                autoRotate={selected === "system" && !exploded}
                autoRotateSpeed={0.5}
              />
            </Canvas>
            <span className="canvas-note">DRAG TO ORBIT · SCROLL TO ZOOM · WEBGEL ACCELERATED</span>
          </div>

          {/* Interactive Inspection & Explanation Controls */}
          <div className="explorer-controls">
            <div className="controls-header">
              <span className="controls-meta-tag">FEATURE 05 / COMPONENT EXPLORER</span>
              <h4>Select System Element</h4>
            </div>

            {/* Primary Component Tabs */}
            <div className="component-tabs" role="group" aria-label="Choose CoolJet component">
              {(Object.keys(componentDetails) as ComponentId[]).map((id) => (
                <button
                  className={selected === id ? "is-selected" : ""}
                  key={id}
                  onClick={() => handleSelectComponent(id)}
                >
                  <span>{id === "system" ? "00" : id === "housing" ? "01" : id === "blower" ? "02" : "03"}</span>
                  {componentDetails[id].label}
                </button>
              ))}
            </div>

            {/* Sub-Tabs specifically when C-D Nozzle is Selected (Feature 5) */}
            {selected === "nozzle" && (
              <div className="nozzle-subtabs-group" role="group" aria-label="C-D Nozzle Subsection">
                <span className="subtabs-label">EMPHASIZE NOZZLE GEOMETRY:</span>
                <div className="subtabs-buttons">
                  {(["all", "convergent", "throat", "divergent"] as const).map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      className={`subtab-btn ${nozzleSubPart === sub ? "is-active" : ""}`}
                      onClick={() => setNozzleSubPart(sub)}
                    >
                      {sub.toUpperCase()}
                    </button>
                  ))}
                </div>
                <small className="subtab-annotation">
                  {nozzleSubDetails[nozzleSubPart].desc}
                </small>
              </div>
            )}

            {/* Component Detail & Linked Explanation */}
            <article className="component-detail" aria-live="polite">
              <div className="detail-header-row">
                <p className="detail-tag">{current.tag}</p>
                <span className="deck-grounded-pill">PPT Slide 3</span>
              </div>
              <h3>{current.label}</h3>
              <p className="detail-description">{current.description}</p>
              <div className="detail-principle-box">
                <strong>AERODYNAMIC ROLE:</strong>
                <span>{current.aerodynamicPrinciple}</span>
              </div>
            </article>

            {/* Exploded View Toggle */}
            <button
              type="button"
              className={`exploded-toggle ${exploded ? "is-on" : ""}`}
              onClick={() => setExploded((value) => !value)}
              aria-pressed={exploded}
            >
              <i aria-hidden="true" />
              <span>{exploded ? "Reset Assembly View" : "Exploded Structural View"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
