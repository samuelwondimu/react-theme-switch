import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as SunIcon } from "./sun.svg";
import { ReactComponent as MoonIcon } from "./moon.svg";
var ThemeSwitch = function (_a) {
    var _b = _a.defaultMode, defaultMode = _b === void 0 ? "light" : _b, onChange = _a.onChange;
    var _c = useState(defaultMode), mode = _c[0], setMode = _c[1];
    var handleToggle = function () {
        var newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        if (onChange) {
            onChange(newMode);
        }
    };
    return (React.createElement("label", { className: "switch" },
        React.createElement("input", { type: "checkbox", checked: mode === "dark", onChange: handleToggle }),
        React.createElement("span", { className: "slider round" }, mode === "dark" ? (React.createElement(MoonIcon, { className: "icon" })) : (React.createElement(SunIcon, { className: "icon" })))));
};
export default ThemeSwitch;
