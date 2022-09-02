import React, { Children } from "react";
import './style'

export function Button (Children) {
    return (
        <button>{Children}</button>
    );
}