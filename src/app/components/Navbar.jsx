import React, {  useRef, useEffect } from "react";
import anime from "animejs"

export default function Navbar()  {
  const textWrapper = useRef(null)
  console.log("textWrapper",textWrapper.current);
  useEffect(() => {
    textWrapper.current.innerHTML = textWrapper.current.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span className ='letter'>$&</span>"
    );

    anime
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml11 .line",
        translateX: [0,textWrapper.current.getBoundingClientRect().width + 10,],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
      })
      .add({
        targets: ".ml11",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  },[textWrapper])
  // render() {
    // Wrap every letter in a span
    // var textWrapper = document.querySelector(".ml11 .letters");
    
    return (
      <div className="Navbar">
        <ul className="nav nav-tabs" id="navId">
          <li className="nav-item">
            <a href="#tab1Id" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#tab178" className="nav-link active">
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a href="#tab5Id" className="nav-link">
              Curriculum
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link disabled">
              Disabled
            </a>
          </li>
          <li>
            <h1 ref = {textWrapper} className ="ml11">
              <span className ="text-wrapper">
                <span className ="line line1"></span>
                <span ref = {textWrapper} className ="letters">Hello Goodbye</span>
              </span>
            </h1>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="tab1Id"
            role="tabpanel"
          ></div>
          <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
          <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
          <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
          <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
        </div>
      </div>
    );
  // }
}
