import { useState } from 'react';

const validators = ['Akash', 'Gitopia', 'Q Blockchain', 'Avail'];

export default function ValidatorPage() {
  const [active, setActive] = useState(null);

  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Sora, sans-serif',
      color: 'white',
      background: 'radial-gradient(circle at top, #1a1a1a, #0f0f0f)',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>My Validators</h1>

      {validators.map((name, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            background: active === i ? '#333' : '#222',
            borderRadius: '0.75rem',
            border: active === i ? '1px solid #888' : '1px solid transparent',
            cursor: 'pointer',
            transform: active === i ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          {name}
        </div>
      ))}

      <button
        onClick={() => window.location.href = '/'}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          background: '#333',
          color: 'white',
          border: '1px solid #555',
          borderRadius: '0.5rem',
        }}
      >
        Back
      </button>
    </main>
  );
}
