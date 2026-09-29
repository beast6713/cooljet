"use client";

import { useEffect, useRef, useState } from "react";

interface VideoShowcaseProps {
  defaultVideoSrc?: string;
}

export function VideoShowcase({ defaultVideoSrc = "/cooljet_demo.mp4" }: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasCustomVideo, setHasCustomVideo] = useState(true);
  const [videoSrc, setVideoSrc] = useState(defaultVideoSrc);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showCenterPlayHint, setShowCenterPlayHint] = useState(false);

  useEffect(() => {
    // Attempt autoplay when video is loaded
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Browser prevented unprompted autoplay without user interaction
          setIsPlaying(false);
        });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowCenterPlayHint(true);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowCenterPlayHint(false);
        })
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setHasCustomVideo(true);
      setVideoError(false);
      setVideoLoaded(true);
    }
  };

  return (
    <section className="video-showcase-section" id="video" aria-labelledby="video-title">
      <div className="section-container">
        <div className="video-header">
          <div className="video-header-copy">
            <p className="eyebrow">04 / PROTOTYPE DEMONSTRATION</p>
            <h2 id="video-title">
              CoolJet in motion.<br />
              <em>Fluid dynamics demonstrated.</em>
            </h2>
            <p className="lead">
              Observe the continuous airflow behavior, nozzle intake velocity, and aerodynamic cooling cycle captured during prototype bench testing.
            </p>
          </div>
          <div className="video-telemetry-badge">
            <span className="telemetry-live-dot" aria-hidden="true" />
            <div className="telemetry-labels">
              <strong>AERO-THERMAL VIDEO DEMO</strong>
              <small>TRL 5 RELEVANT ENVIRONMENT RECORDING</small>
            </div>
          </div>
        </div>

        <div className="video-player-frame">
          <div className="video-hud-overlay">
            <span className="hud-corner hud-tl" />
            <span className="hud-corner hud-tr" />
            <span className="hud-corner hud-bl" />
            <span className="hud-corner hud-br" />
            <div className="hud-header">
              <span className="hud-tag">SOURCE: COOLJET_DEMO.MP4</span>
              <span className="hud-tag">FLOW: COMPRESSIBLE GAS DYNAMICS</span>
              <span className="hud-tag">STATUS: {hasCustomVideo && !videoError ? "PLAYBACK ACTIVE" : "AWAITING SOURCE"}</span>
            </div>
          </div>

          {/* Actual HTML5 Video element */}
          <video
            ref={videoRef}
            className={`video-element ${hasCustomVideo && !videoError ? "is-visible" : "is-hidden"}`}
            src={videoSrc}
            playsInline
            autoPlay
            loop
            muted={isMuted}
            onClick={togglePlay}
            onPlay={() => {
              setIsPlaying(true);
              setShowCenterPlayHint(false);
            }}
            onPause={() => {
              setIsPlaying(false);
              setShowCenterPlayHint(true);
            }}
            onError={() => {
              // Try fallback to /cooljet-video.mp4 if /cooljet_demo.mp4 fails
              if (videoSrc !== "/cooljet-video.mp4") {
                setVideoSrc("/cooljet-video.mp4");
              } else {
                setVideoError(true);
                setHasCustomVideo(false);
              }
            }}
            onLoadedData={() => {
              setVideoLoaded(true);
              setVideoError(false);
              setHasCustomVideo(true);
            }}
            controls={false}
          />

          {/* Center Play Overlay when Paused */}
          {hasCustomVideo && !videoError && !isPlaying && (
            <div className="video-center-overlay" onClick={togglePlay}>
              <div className="center-play-glyph">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span>CLICK TO RESUME PLAYBACK</span>
            </div>
          )}

          {/* Visual Fallback if video file cannot be loaded */}
          {(!hasCustomVideo || videoError) && (
            <div className="video-concept-stage">
              <div className="stage-grid-bg" />
              <div className="stage-glow" />

              <div className="stage-visual">
                <div className="stage-flow-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="stage-nozzle-silhouette">
                  <div className="silhouette-blower" />
                  <div className="silhouette-convergent" />
                  <div className="silhouette-throat" />
                  <div className="silhouette-divergent" />
                </div>
                <div className="stage-flow-particles">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="stage-prompt">
                <div className="stage-play-button" onClick={() => document.getElementById("video-file-picker")?.click()}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <h3>Concept Demonstration Video</h3>
                <p>
                  Video source not found. Place <code>cooljet_demo.mp4</code> into the <code>public/</code> folder or choose a file below.
                </p>
                <label htmlFor="video-file-picker" className="button button-primary stage-upload-btn">
                  <span>Browse Video File</span>
                  <input
                    id="video-file-picker"
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </div>
          )}

          {/* Video Control Bar when video is present */}
          {hasCustomVideo && !videoError && (
            <div className="video-control-bar">
              <button
                type="button"
                className="video-action-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                type="button"
                className="video-action-btn"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
                <span>{isMuted ? "MUTED" : "UNMUTE"}</span>
              </button>

              <button
                type="button"
                className="video-action-btn"
                onClick={toggleFullscreen}
                aria-label="View Fullscreen"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
                <span>FULLSCREEN</span>
              </button>

              <div className="video-status-text">
                <span>BENCH RECORDING · RELEVANT ENVIRONMENT</span>
              </div>

              <label htmlFor="replace-video-picker" className="video-replace-link">
                Replace video
                <input
                  id="replace-video-picker"
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          )}
        </div>

        <div className="video-caption-bar">
          <div className="caption-col">
            <strong>Aerodynamic Continuity</strong>
            <p>Verification that ambient air maintains laminar inlet suction through blower pressurization.</p>
          </div>
          <div className="caption-col">
            <strong>Throat Contraction</strong>
            <p>High-speed camera captures localized pressure drop at the minimum geometric cross-section.</p>
          </div>
          <div className="caption-col">
            <strong>Expansion Dispersion</strong>
            <p>Adiabatic divergent dispersion with zero liquid phase changes or chemical aerosol emissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
