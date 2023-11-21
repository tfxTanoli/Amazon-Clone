import React, { useContext } from "react";
import { changeMode } from "./Context";

function ContextUser() {
  const { backgroundColor, handleModeChange } = useContext(changeMode);

  return (
    <div style={{ backgroundColor }}> 
      <button onClick={handleModeChange} style={{ backgroundColor: "backgroundColor"}}><i class="fa-solid fa-moon"></i></button>
 </div>
  );
}

export default ContextUser;