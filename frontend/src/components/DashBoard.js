import React, { Component } from "react";

const Dashboard = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    }


    return (
        <div>
            <h1>WELCOME TO DASHBOARD</h1>
            <a href="/"
               onClick={handleLogout}
               className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <span style={{ color: "white" }}>Logout</span>
            </a>
        </div>
    );

}

export default Dashboard;