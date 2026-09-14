import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: '#090a14',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10b981',
          fontWeight: 900,
          borderRadius: 7,
          border: '1.2px solid #272b42',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        ST
      </div>
    ),
    {
      ...size,
    }
  );
}
