export default function ValidatorPage() {
  const validators = [
    { name: 'Akash', link: 'https://akashnet.io' },
    { name: 'Gitopia', link: 'https://gitopia.com' },
    { name: 'Q Blockchain', link: 'https://q.org' },
    { name: 'Avail', link: 'https://availproject.org' },
  ];

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'radial-gradient(circle at 30% 30%, #1a1a1a, #0f0f0f)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>My Validators</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {validators.map((v, i) => (
          <li key={i} style={{ margin: '0.5rem 0' }}>
            <a href={v.link} target="_blank" rel="noopener noreferrer" style={{
              color: '#61dafb',
              textDecoration: 'none',
              fontSize: '1.2rem'
            }}>
              {v.name}
            </a>
          </li>
        ))}
      </ul>
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
