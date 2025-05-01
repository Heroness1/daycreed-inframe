import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'radial-gradient(circle at 30% 30%, #1a1a1a, #0f0f0f)'
    }}>
      <img src="/avatar.png" alt="avatar" style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '20px',
        border: '2px solid white'
      }} />
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>
        <Typewriter
          options={{
            strings: ['Daycreed', 'Validator Node Operator', 'Web3 Enthusiast'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </main>
  );
}
