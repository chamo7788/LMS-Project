import React from "react";
import { Routes, Route } from "react-router-dom";
import { LeftSideBar, Navbar, QuestionPost, ParentComponent } from "../components";


export default function Foram(){
    return(
        <div>
            <Navbar/>
            <LeftSideBar/>
            <ParentComponent/>
            <QuestionPost/>
        </div>
    );
}