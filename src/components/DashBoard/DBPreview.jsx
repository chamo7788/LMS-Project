import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Profilecards } from "./Profilecards";
import { TimeChart } from "./TimeChart";
import { PieChart } from "./PieChart";
import { DBCourses } from "./DBCourses";
import { TodoList } from "./TodoList";

export function DBPreview() {
    return (
        <div>
            <Profilecards />
            <div className="charts">
                <TimeChart />
                <PieChart />
            </div>
            <DBCourses />
            <TodoList />
        </div>
    );
}