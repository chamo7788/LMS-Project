import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "../assets/css/login.css";

export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Initialize navigate

  const clearInputs = () => {
    if (emailRef?.current) emailRef.current.value = "";
    if (passRef?.current) passRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const creds = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful", data);
        // Store token or session (if needed)
        clearInputs();
        navigate("/home");  // Redirect to Home page
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("Failed to login. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="background-container"></div>
      <div className="wrapper">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          {error && <span className="error-msg">{error}</span>}
          <input required ref={emailRef} type="email" placeholder="Email" />
          <input required ref={passRef} type="password" placeholder="Password" />
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Login"}
          </button>
          <span className="link">
            <a href="/register">No account? Register here.</a>
          </span>
        </form>
      </div>
    </div>
  );
}
