function Login({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
}) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>InnoXR Labs</h1>
        <p>HoloInteract Device Management</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;