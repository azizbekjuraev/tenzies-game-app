import React from "react";
function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#5af542" : "",
    color: props.isHeld ? "white" : "",
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

export default Die;
