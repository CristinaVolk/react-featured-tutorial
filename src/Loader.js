import React from "react";

export default function Loader() {
  const styles = {
    heart: {
      flex: "display",
      justifyContent: "center",
      margin: ".5rem",
    },
  };

  return (
    <div className='lds-heart' style={styles.heart}>
      <div></div>
    </div>
  );
}
