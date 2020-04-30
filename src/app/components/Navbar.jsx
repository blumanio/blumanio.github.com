import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
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
  }
}
