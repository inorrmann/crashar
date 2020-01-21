import React from "react";

function InputPrepend(props) {
return (
<div className="input-group-prepend">
    <span className="input-group-text bg-white border-right-0">{props.prepend}</span>
</div>
)}

export default InputPrepend;