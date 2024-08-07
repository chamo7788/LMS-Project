import React, { useState, useRef } from "react";
import "../../assets/css/DashBoard/EditProfile.css";
import { PiTextAlignLeft } from "react-icons/pi";

export function EditProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    role: "",
    email: "",
    username: "",
    password: "",
    contactNumber: "",
    gender: "",
    address: "",
    province: "",
  });
  const [avatar, setAvatar] = useState("avatar.jpg");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          avatar,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="containers">
      <div className="profiles">
        <div className="details">
          <center>
            <h2>Edit your profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="box">
                <label>Name in Full</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              </div>
              <div className="box">
                <label>Enter your age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
              </div>
              <div className="option">
                <label>Who are you</label><br /><br />
                <input className="lll" type="radio" name="role" value="Staff" onChange={handleChange}  />
                <label>Staff</label><br />
                <input type="radio" name="role" value="Student" onChange={handleChange} />
                <label>Student</label>
              </div>
              <div className="box">
                <label>Enter your E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="box">
                <label>Enter your Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
              </div>
              <div className="box">
                <label>Enter your password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <div className="box">
                <label>Contact Number</label>
                <input type="number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              </div>
              <div className="box">
                <label>Gender</label><br /><br />
                <input type="radio" name="gender" value="Male" onChange={handleChange} />
                <label>Male</label><br />
                <input type="radio" name="gender" value="Female" onChange={handleChange} />
                <label>Female</label>
              </div>
              <div className="box">
                <label>Enter your Address</label>
                <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
              </div>
              <div className="box">
                <label>Enter your Province</label>
                <select name="province" value={formData.province} onChange={handleChange}>
                  <option value=""></option>
                  <option>Southern</option>
                  <option>Western</option>
                  <option>Central</option>
                  <option>North</option>
                  <option>Eastern</option>
                </select>
              </div>
              <div className="buttons">
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
              </div>
            </form>
          </center>
        </div>

        <div className="preview">
          <center><img src={avatar} alt="avatar" className="avtr" /></center>
          <div className="editphoto">
            <center>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
                ref={fileInputRef}
                id="upload-avatar"
              />
              <label htmlFor="upload-avatar">
                <input type="button" value="Edit your photo" role="button" onClick={selectFiles} />
              </label>
            </center>
          </div><br />

          <div className="submitpreview">
            <h2><i>Preview</i></h2>
            <p><strong>Name in Full:</strong> {formData.fullName}</p><br /><br />
            <p><strong>Age:</strong> {formData.age}</p><br /><br />
            <p><strong>Role:</strong> {formData.role}</p><br /><br />
            <p><strong>Email:</strong> {formData.email}</p><br /><br />
            <p><strong>Username:</strong> {formData.username}</p><br /><br />
            <p><strong>Contact Number:</strong> {formData.contactNumber}</p><br /><br />
            <p><strong>Gender:</strong> {formData.gender}</p><br /><br />
            <p><strong>Address:</strong> {formData.address}</p><br /><br />
            <p><strong>Province:</strong> {formData.province}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
