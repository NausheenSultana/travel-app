import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import "./styles.scss";
import Card from "./Card.js";
import ListViewCard from "./ListViewCard.js";
import SideNav from "./SideNav.js";

function TravelApp() {
  const [checkboxNum, setCheckboxNum] = useState(0);
  const [listView, setListView] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isMobile = screenWidth <= 500;
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  function checkboxSelect() {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    setCheckboxNum(checkboxes.length);
    if (checkboxes.length > 0)
      document.getElementById("cartBox").style.display = "flex";
    else document.getElementById("cartBox").style.display = "none";
  }

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/places.json")
      .then((res) => {
        setPlaces(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (places.length > 0 && !loading)
    return (
      <div className="wrapper">
        <SideNav isMobile={isMobile} />
        <div className="mainContent">
          <header className="project-allocations-search-heading">
            Discover great places to visit
          </header>
          <div className="mobileBG">
            <img src="images/logo.svg" alt="logo" />
            <img src="images/menu.svg" alt="menu" />
            <div className="rectangle">
              <button
                aria-label="grid view"
                onClick={(_) => setListView(false)}
                style={{ backgroundColor: !listView ? "#492dcf" : "" }}
              >
                <img src="images/grid-view-icon.svg" alt="grid view" />
              </button>
              <button
                aria-label="list view"
                onClick={(_) => setListView(true)}
                style={{ backgroundColor: listView ? "#492dcf" : "" }}
              >
                <img src="images/list-view-icon.svg" alt="list view" />
              </button>
            </div>
          </div>
          <div className="cardWrapper">
            {isMobile && listView ? (
              <>
                {places.map((place) => (
                  <ListViewCard imgSrc={place.imgSrc} title={place.title} />
                ))}
              </>
            ) : (
              <>
                <div className="listWrap">
                  {places.map((place) => (
                    <Card
                      checkboxSelect={checkboxSelect}
                      imgSrc={place.imgSrc}
                      title={place.title}
                      desc={place.desc}
                      capsuleList={place.capsuleList}
                    />
                  ))}
                </div>

                <div id="cartBox" className="cartBox">
                  <p className="topLine">
                    <img
                      src={"images/group.svg"}
                      className="icon"
                      alt="item added"
                    />
                    <span>{checkboxNum} item(s) selected</span>
                  </p>
                  <p className="iconBox">
                    <img src={"images/heart.svg"} className="icon" alt="like" />
                    <img
                      src={"images/download.svg"}
                      className="icon"
                      alt="download"
                    />
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  else return <p>Loading places...</p>;
}

export default TravelApp;
