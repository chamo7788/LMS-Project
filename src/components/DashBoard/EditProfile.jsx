import React from "react";
import '../../assets/css/DashBoard/editProfile.css';
import { TodoList } from "./TodoList";
import { Profilecards } from "./Profilecards";

export function EditProfile() {
    return (
        <>
            <div className="Edit-Profiles">Edit Profile</div>
            <Profilecards />
            <TodoList/>
        </>
    );
}