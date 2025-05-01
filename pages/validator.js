export default function Validator() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Sora, sans-serif',
      color: 'white',
      backgroundColor: '#0f0f0f',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Validator Nodes</h1>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={cardStyle}>Akash – Cosmos SDK – Test on VPS</li>
        <li style={cardStyle}>Gitopia – Cosmos SDK – Termius CLI</li>
        <li style={cardStyle}>QBlockchain – EVM-based – VPS Testing</li>
        <li style={cardStyle}>Avail – EVM-based – Validator Light Client</li>
      </ul>
    </main>
  );
}

const cardStyle = {
  backgroundColor: '#1a1a1a',
  padding: '1rem',
  marginBottom: '1rem',
  borderRadius: '0.75rem',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
};
