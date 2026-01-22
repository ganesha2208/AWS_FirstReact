function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React CI/CD Pipeline</h1>
      <h2>Deployed using Jenkins & Docker</h2>
      <p>Build Time: {new Date().toString()}</p>
    </div>
  );
}

export default App;
