import React, { useState } from 'react'
import './BodyMap.css'
import bodyImage from '../assets/body_anatomy.png'

/**
 * Pain point coordinates as % of the full image width/height.
 * Front figure ≈ x: 35%–65%, Back figure ≈ x: 55%–85%
 * (adjusted by viewing the actual rendered screenshot)
 */
const painPoints = [
  // ── FRONT (Center X ≈ 25%) ───────────────────────────────────
  { id: 'neck',        label: 'Neck Pain',        x: 25,    y: 20,  labelSide: 'right' },
  { id: 'shoulder-l',  label: 'Shoulder Pain',    x: 18,    y: 24,  labelSide: 'right' },
  { id: 'chest',       label: 'Chest Pain',       x: 25,    y: 30,  labelSide: 'right' },
  { id: 'elbow-l',     label: 'Elbow Pain',       x: 14,    y: 40,  labelSide: 'right' },
  { id: 'abdomen',     label: 'Abdomen Pain',     x: 25,    y: 44,  labelSide: 'right' },
  { id: 'wrist-l',     label: 'Wrist Pain',       x: 11,    y: 54,  labelSide: 'right' },
  { id: 'hip-l',       label: 'Hip Pain',         x: 21,    y: 53,  labelSide: 'right' },
  { id: 'knee-l',      label: 'Knee Pain',        x: 21,    y: 71,  labelSide: 'right' },
  { id: 'ankle-l',     label: 'Ankle Pain',       x: 21,    y: 90,  labelSide: 'right' },

  // ── BACK (Center X ≈ 75%) ──────────────────────────────────
  { id: 'upper-back',  label: 'Upper Back Pain',  x: 75,    y: 26,  labelSide: 'left'  },
  { id: 'lower-back',  label: 'Lower Back Pain',  x: 75,    y: 45,  labelSide: 'left'  },
  { id: 'shoulder-r',  label: 'Shoulder Pain',    x: 68,    y: 24,  labelSide: 'left'  },
  { id: 'elbow-r',     label: 'Elbow Pain',       x: 65,    y: 41,  labelSide: 'left'  },
  { id: 'glute',       label: 'Glute Pain',       x: 72,    y: 55,  labelSide: 'left'  },
  { id: 'hamstring',   label: 'Hamstring Pain',   x: 72,    y: 70,  labelSide: 'left'  },
  { id: 'calf',        label: 'Calf Pain',        x: 72,    y: 82,  labelSide: 'left'  },
  { id: 'heel',        label: 'Heel Pain',        x: 72,    y: 94,  labelSide: 'left'  },
]

const BodyMap = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="bodymap-section">
      <div className="container">
        <div className="section-header">
          <h2>Where Does It Hurt?</h2>
          <p>Hover over a highlighted point on the body to see the condition.</p>
        </div>

        {/* Wrapper: image + dots layered absolutely on top */}
        <div className="bodymap-image-wrapper">
          <img
            src={bodyImage}
            alt="Human body anatomy front and back"
            className="anatomy-img"
            draggable="false"
          />

          {painPoints.map(point => {
            const isActive = hoveredId === point.id
            return (
              <div
                key={point.id}
                className={`pain-dot-wrapper ${isActive ? 'active' : ''}`}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                onMouseEnter={() => setHoveredId(point.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span className="dot-glow" />
                <span className="dot-core" />
                <span className={`dot-label label-${point.labelSide} ${isActive ? 'label-visible' : ''}`}>
                  {point.label}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default BodyMap
