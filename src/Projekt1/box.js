import React from "react";

function box(props){
    var styles={
        backgroundColor: props.glow ? "white" : "hsl(251, 67%, 5%)"
    }
    return(
<div className="box" style={styles} onClick={props.rec}>

</div>
    );
}
export default box;