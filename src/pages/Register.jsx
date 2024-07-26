import { useRef, useState } from "react";
import "../assets/css/register.css";

export default function Register() {
  const emailRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const passRef = useRef();
  const rePassRef = useRef();
  const ageRef = useRef();
  const studentIdRef = useRef();
  const teacherIdRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("student"); // State variable to track selected user type

  const clearInputs = () => {
    if (emailRef?.current) emailRef.current.value = "";
    if (nameRef?.current) nameRef.current.value = "";
    if (lastNameRef?.current) lastNameRef.current.value = "";
    if (passRef?.current) passRef.current.value = "";
    if (rePassRef?.current) rePassRef.current.value = "";
    if (ageRef?.current) ageRef.current.value = "";
    if (studentIdRef?.current) studentIdRef.current.value = "";
    if (teacherIdRef?.current) teacherIdRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (passRef.current.value !== rePassRef.current.value) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    let creds = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    if (userType === "student") {
      creds = {
        ...creds,
        firstName: nameRef.current.value,
        lastName: lastNameRef.current.value,
        age: ageRef.current.value,
      };
    } else {
      creds = {
        ...creds,
        firstName: nameRef.current.value,
        lastName: lastNameRef.current.value,
        teacherId: teacherIdRef.current.value,
      };
    }

    console.log("register", creds);

    clearInputs();
    setLoading(false);
  };

  return (
    <div className="register">
      <div className="background-container"></div>
      <div className="wrapper">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          {error && <span className="error-msg">{error}</span>}
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
