import React from "react";
import { Routes, Route } from "react-router-dom";
import { LeftSideBar, Navbar, Subjects, QuestionPost } from "../components";


export default function Foram(){
    return(
        <div>
            <Navbar/>
            <LeftSideBar/>
            <Subjects/>
            <QuestionPost/>
        </div>
    );
}