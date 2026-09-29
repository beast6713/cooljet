// Single source of truth for CoolJet Phase 5 Technology Explanations
// Grounded in PPT Pitch Deck (SRM Institute of Science & Technology)

export interface TechnologyStage {
  id: string;
  stepNumber: string;
  name: string;
  shortLabel: string;
  summary: string;
  detail: string;
  aerodynamicAction: string;
  qualitativePressure: "AMBIENT / BASELINE" | "POSITIVE ELEVATION" | "HIGH CONTRACTION" | "LOCALIZED MINIMUM (PRESSURE DROP)" | "EXPANSION REGION" | "STABILIZED OUTLET";
  qualitativeTemperature: "AMBIENT / BASELINE" | "BASELINE" | "BASELINE" | "TEMPERATURE DECREASE" | "ADIABATIC EXPANSION" | "COOLED ATMOSPHERIC AIR";
  deckClaim: string;
}

export const TECHNOLOGY_STAGES: TechnologyStage[] = [
  {
    id: "ambient-air",
    stepNumber: "01",
    name: "Ambient Air Intake",
    shortLabel: "Ambient Air",
    summary: "Ambient room air is drawn into the CoolJet system intake.",
    detail: "Atmospheric air enters directly through the intake grille at ambient temperature and pressure. The system uses natural room air as the sole working fluid—requiring zero chemical refrigerants.",
    aerodynamicAction: "Unconditioned atmospheric intake through louvers",
    qualitativePressure: "AMBIENT / BASELINE",
    qualitativeTemperature: "AMBIENT / BASELINE",
    deckClaim: "Refrigerant-less system using natural ambient air",
  },
  {
    id: "blower-fan",
    stepNumber: "02",
    name: "Blower Fan Acceleration",
    shortLabel: "Blower Fan",
    summary: "The blower fan drives and accelerates the airflow into the nozzle.",
    detail: "A high-efficiency centrifugal blower provides the motive kinetic force. It accelerates the intake air into a directed stream, feeding it toward the nozzle intake without reciprocating compressor components.",
    aerodynamicAction: "Rotational kinetic induction into nozzle entrance",
    qualitativePressure: "POSITIVE ELEVATION",
    qualitativeTemperature: "BASELINE",
    deckClaim: "Single moving assembly; replaces compressor with blower fan",
  },
  {
    id: "convergent-section",
    stepNumber: "03",
    name: "Convergent Section",
    shortLabel: "Convergent",
    summary: "Air enters the narrowing convergent duct of the C-D nozzle.",
    detail: "The cross-sectional area contracts progressively. As the channel narrows, the incoming airflow velocity increases while fluid streamlines are compressed toward the central axis.",
    aerodynamicAction: "Cross-sectional flow contraction and velocity ramp",
    qualitativePressure: "HIGH CONTRACTION",
    qualitativeTemperature: "BASELINE",
    deckClaim: "Aerospace-inspired convergent-divergent nozzle geometry",
  },
  {
    id: "throat",
    stepNumber: "04",
    name: "Throat (Minimum Area)",
    shortLabel: "Throat",
    summary: "At the throat, pressure drops and temperature decreases.",
    detail: "The throat represents the narrowest cross-sectional boundary in the C-D geometry. In accordance with fluid gas dynamics described in the project deck, static pressure drops and localized temperature decreases here.",
    aerodynamicAction: "Peak geometric constriction; localized static pressure drop",
    qualitativePressure: "LOCALIZED MINIMUM (PRESSURE DROP)",
    qualitativeTemperature: "TEMPERATURE DECREASE",
    deckClaim: "At the throat, pressure drops and temperature decreases",
  },
  {
    id: "divergent-section",
    stepNumber: "05",
    name: "Divergent Section",
    shortLabel: "Divergent",
    summary: "Air undergoes adiabatic expansion through the widening geometry.",
    detail: "Downstream of the throat, the channel walls diverge outward. The accelerated fluid stream undergoes adiabatic expansion across the widening contour, dissipating thermal energy without external heat exchanger coils.",
    aerodynamicAction: "Controlled geometric divergence; adiabatic expansion",
    qualitativePressure: "EXPANSION REGION",
    qualitativeTemperature: "ADIABATIC EXPANSION",
    deckClaim: "Adiabatic expansion through divergent section resulting in cooling",
  },
  {
    id: "cooled-air",
    stepNumber: "06",
    name: "Cooled Air Outlet",
    shortLabel: "Cooled Air",
    summary: "Conditioned, cooled air discharges into the space.",
    detail: "The air exits through the discharge diffuser as conditioned, cooled air. The entire cycle completes using only kinetic blower acceleration and nozzle fluid dynamics with zero phase-change chemicals.",
    aerodynamicAction: "Discharge of cooled stream into target room volume",
    qualitativePressure: "STABILIZED OUTLET",
    qualitativeTemperature: "COOLED ATMOSPHERIC AIR",
    deckClaim: "Delivers cool air at the outlet without any refrigerants or compressor",
  },
];

export interface NozzleSectionData {
  id: "overview" | "convergent" | "throat" | "divergent";
  title: string;
  tag: string;
  role: string;
  geometryDescription: string;
  qualitativePressureLevel: "HIGH" | "MEDIUM-HIGH" | "LOCALIZED DROP (LOW)" | "EXPANDED LOW";
  qualitativePressureBar: number; // 0 to 100 for qualitative UI gauge
  qualitativeTemperatureLevel: "AMBIENT" | "AMBIENT" | "TEMPERATURE DECREASE" | "COOLED STATE";
  qualitativeTemperatureBar: number; // 0 to 100 for qualitative UI gauge
  fluidBehavior: string;
}

export const NOZZLE_SECTIONS: Record<string, NozzleSectionData> = {
  overview: {
    id: "overview",
    title: "Complete C-D Nozzle Assembly",
    tag: "AEROSPACE DE LAVAL GEOMETRY",
    role: "Full aerodynamic duct combining convergent intake, throat restriction, and divergent expansion bell.",
    geometryDescription: "Continuous contoured solid-state channel with zero moving internal flaps, valves, or orifices.",
    qualitativePressureLevel: "HIGH",
    qualitativePressureBar: 80,
    qualitativeTemperatureLevel: "AMBIENT",
    qualitativeTemperatureBar: 85,
    fluidBehavior: "Fluid enters from blower, accelerates through contraction, achieves pressure drop at throat, and expands adiabatically.",
  },
  convergent: {
    id: "convergent",
    title: "Convergent Section",
    tag: "SECTION 01 · CONTRACTION",
    role: "Progressively constricts the incoming airflow from the blower fan.",
    geometryDescription: "Inlet diameter narrows smoothly toward the throat, forcing streamlines to converge.",
    qualitativePressureLevel: "MEDIUM-HIGH",
    qualitativePressureBar: 75,
    qualitativeTemperatureLevel: "AMBIENT",
    qualitativeTemperatureBar: 85,
    fluidBehavior: "Air accelerates into the narrowing channel; static pressure remains relatively high while fluid kinetic energy increases.",
  },
  throat: {
    id: "throat",
    title: "Throat (Narrowest Cross-Section)",
    tag: "SECTION 02 · MINIMUM AREA",
    role: "The critical geometric bottleneck where localized static pressure and temperature drop occur.",
    geometryDescription: "Minimum geometric area connecting convergent intake and divergent bell.",
    qualitativePressureLevel: "LOCALIZED DROP (LOW)",
    qualitativePressureBar: 25,
    qualitativeTemperatureLevel: "TEMPERATURE DECREASE",
    qualitativeTemperatureBar: 40,
    fluidBehavior: "Static pressure drops sharply at the minimum area restriction, initiating localized temperature decrease.",
  },
  divergent: {
    id: "divergent",
    title: "Divergent Section",
    tag: "SECTION 03 · EXPANSION",
    role: "Allows the accelerated air to undergo adiabatic expansion before room discharge.",
    geometryDescription: "Channel walls diverge gradually to prevent flow separation and guide expansion.",
    qualitativePressureLevel: "EXPANDED LOW",
    qualitativePressureBar: 35,
    qualitativeTemperatureLevel: "COOLED STATE",
    qualitativeTemperatureBar: 30,
    fluidBehavior: "Air expands into the widening cross-section; adiabatic expansion results in delivery of cooled atmospheric air at outlet.",
  },
};

export interface ConventionalComparisonItem {
  category: string;
  conventional: string;
  cooljet: string;
  sourceAnnotation: string;
}

export const CONVENTIONAL_COMPARISON: ConventionalComparisonItem[] = [
  {
    category: "Refrigerant & Chemicals",
    conventional: "Uses synthetic chemical refrigerants (e.g., R-410A, R-32, HFCs) subject to leakage and environmental phase-down regulations.",
    cooljet: "100% Refrigerant-less. Operates purely on ambient atmospheric air. Zero ODP (Ozone Depletion) & zero chemical GWP.",
    sourceAnnotation: "Slide 2 & Slide 5: 'Refrigerant-less Air Conditioner'",
  },
  {
    category: "Compressor Assembly",
    conventional: "Requires heavy mechanical compressor with reciprocating or scroll pistons, motor windings, and high electrical inrush current.",
    cooljet: "No compressor. Entire fluid circulation driven by an energy-efficient blower fan assembly.",
    sourceAnnotation: "Slide 3 & Slide 5: 'Without any refrigerants or compressors'",
  },
  {
    category: "Cooling Principle",
    conventional: "Vapor-compression cycle relying on phase change (liquid-to-gas in evaporator, gas-to-liquid in condenser).",
    cooljet: "Aerospace C-D nozzle fluid dynamics. Air accelerates through nozzle; pressure drop at throat causes temperature decrease (adiabatic expansion).",
    sourceAnnotation: "Slide 3 & Slide 5: 'C-D nozzles to cool air (adiabatic expansion)'",
  },
  {
    category: "Moving Parts in Nozzle",
    conventional: "Multiple internal expansion valves, reversing valves, solenoid switches, and capillary tubes.",
    cooljet: "Solid-state nozzle geometry. No moving parts inside the C-D nozzle channel; only 1 moving assembly (the blower).",
    sourceAnnotation: "Slide 3: 'uses only a blower fan, no moving parts in the nozzle'",
  },
  {
    category: "Maintenance Complexity",
    conventional: "Refrigerant leakage risk, gas refilling, oil clogging, brazed joint corrosion, and mandatory vacuum testing.",
    cooljet: "Simple, low-maintenance design. Routine air filter care and periodic blower bearing inspection.",
    sourceAnnotation: "Slide 2, 3 & 5: 'Simple & low maintenance, no leakage risk'",
  },
  {
    category: "Leakage & Environmental Risk",
    conventional: "High leakage hazard of greenhouse-gas fluorocarbons into the atmosphere over equipment lifespan.",
    cooljet: "Zero chemical leakage liability. Safe for sensitive residential, healthcare, and mission-critical indoor spaces.",
    sourceAnnotation: "Slide 2 & Slide 8: 'No Leakage Risk, Health & Safety'",
  },
];
