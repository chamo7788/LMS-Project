import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/register.css";

export default function Register() {
  const emailRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const passRef = useRef();
  const rePassRef = useRef();
  const ageRef = useRef();
  const teacherIdRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("student");

  const navigate = useNavigate();

  const clearInputs = () => {
    if (emailRef?.current) emailRef.current.value = "";
    if (nameRef?.current) nameRef.current.value = "";
    if (lastNameRef?.current) lastNameRef.current.value = "";
    if (passRef?.current) passRef.current.value = "";
    if (rePassRef?.current) rePassRef.current.value = "";
    if (ageRef?.current) ageRef.current.value = "";
    if (teacherIdRef?.current) teacherIdRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (passRef.current.value !== rePassRef.current.value) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Generate a random avatar using DiceBear API based on user's name
    const avatarUrl = `https://avatars.dicebear.com/api/initials/${nameRef.current.value}.svg`;

    const creds = {
      firstName: nameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
      age: userType === "student" ? ageRef.current.value : null,
      teacherId: userType === "teacher" ? teacherIdRef.current.value : null,
      userType: userType,
      avatar: avatarUrl,  // Add avatar URL
    };

    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful", data);
        clearInputs();
        navigate("/login");  // Redirect to Login page
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Failed to register. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="background-container"></div>
      <div className="wrapper">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          {error && <span className="error-msg">{error}</span>}

          {/* Radio Buttons */}
          <label htmlFor="selectstudent" className="selectstudent">STUDENT</label>
          <input
            type="radio"
            className="studentbutton"
            name="options"
            value="student"
            checked={userType === "student"}
            onChange={() => setUserType("student")}
          />
          <label htmlFor="selectteacher" className="selectteacher">TEACHER</label>
          <input
            type="radio"
            className="teacherbutton"
            name="options"
            value="teacher"
            checked={userType === "teacher"}
            onChange={() => setUserType("teacher")}
          />

          {/* Student/Teacher Fields */}
          {userType === "student" ? (
            <>
              <input required ref={nameRef} type="text" placeholder="First Name" />
              <input required ref={lastNameRef} type="text" placeholder="Last Name" />
              <input required ref={ageRef} type="number" placeholder="Age" />
              <input required ref={emailRef} type="email" placeholder="Email" />
              <input required ref={passRef} type="password" placeholder="Create Password" />
              <input required ref={rePassRef} type="password" placeholder="Re-type Password" />
            </>
          ) : (
            <>
              <input required ref={nameRef} type="text" placeholder="First Name" />
              <input required ref={lastNameRef} type="text" placeholder="Last Name" />
              <input required ref={teacherIdRef} type="text" placeholder="Teacher ID" />
              <input required ref={emailRef} type="email" placeholder="Email" />
              <input required ref={passRef} type="password" placeholder="Create Password" />
              <input required ref={rePassRef} type="password" placeholder="Re-type Password" />
            </>
          )}

          {/* Submit Button */}
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Register"}
          </button>

          <span className="link">
            <a href="/login">Already have an account? Login here.</a>
          </span>
        </form>
      </div>
    </div>
  );
}
