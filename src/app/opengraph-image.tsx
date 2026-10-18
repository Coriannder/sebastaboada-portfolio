import { ImageResponse } from 'next/og';

export const alt = 'Sebastián Taboada — Biomedical Engineer & Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#090a14',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '20px',
              background: '#090a14',
              border: '3px solid #272b42',
              color: '#10b981',
              fontSize: '42px',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '-1px',
            }}
          >
            ST
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#a1a1aa',
              fontFamily: 'monospace',
            }}
          >
            sebastaboada.com.ar
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#f4f4f5',
              letterSpacing: '-2px',
              lineHeight: 1.05,
            }}
          >
            Sebastián Taboada
          </div>
          <div
            style={{
              fontSize: '34px',
              color: '#10b981',
              fontWeight: 600,
              fontFamily: 'monospace',
            }}
          >
            Biomedical Engineer & Full Stack Developer
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#a1a1aa',
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            HealthTech · Clean Architecture · TypeScript/Node.js · AI Agents & MCP
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '22px',
            color: '#10b981',
            fontFamily: 'monospace',
          }}
        >
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#10b981',
            }}
          />
          Available for Full Stack & HealthTech roles
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
