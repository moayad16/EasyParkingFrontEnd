import React from "react";
import "../css/topBar.css";
import { useEffect } from "react";
import 'animate.css'

export default function TopBar() {


    useEffect(() => {
        window.addEventListener("scroll", () => {
            const topBar = document.querySelector(".topBar");
            if(window.scrollY > 0 ) {
                topBar.classList.add(
                  "animate__slideOutUp"
                );

            } else {
                topBar.classList.remove("animate__slideOutUp");
                topBar.classList.add("animate__slideInDown");
            }
        }
        )
    })



    return(
        <div className="topBar animate__animated">
            <h1>EasyParking</h1>
            <span>The best car park finder</span>
        </div>
    )
}