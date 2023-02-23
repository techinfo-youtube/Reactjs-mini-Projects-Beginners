import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
function App() {
  //satte
  const [uiprps, setUiporps] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    borderBottomColor: "#fff",
    showSearchIcon: true,
  });

  const body = document.body.style;
  //lifecycle
  useEffect(() => {
    body.background = uiprps.bg;
    body.boxShadow = uiprps.shadow;
    body.transition = uiprps.transition;
  }, [uiprps.shadow]);

  //show icons
  const showIcon = () => {
    setUiporps({
      opacity: 1,
      showSearchIcon: false,
    });
  };

  //focus
  const handleSearchFocus = () => {
    setUiporps({
      borderBottomColor: "green",
      shadow: "inset 0 -60vh 200px rgba(0,0,0,0.8)",
    });
  };

  //blur
  const handleBlur = (e) => {
    setUiporps({
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
    });
  };
  let InputStyles = {
    margin: "10vh 25vw",
    width: "25vh",
    height: "30px",
    padding: "1rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid ${uiprps.borderBottomColor}`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,0.7)",
    opacity: `${uiprps.opacity}`,
    transition: "all .3s ease",
  };
  let IconStyle = {
    color: "#fff",
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <input
        type="text"
        placeholder="search"
        style={InputStyles}
        onFocus={handleSearchFocus}
        onBlur={handleBlur}
      />
      {uiprps.showSearchIcon ? (
        <BsSearch style={IconStyle} onClick={showIcon} />
      ) : null}
    </div>
  );
}

export default App;
