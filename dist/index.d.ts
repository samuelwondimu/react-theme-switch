import React from "react";
import "./styles.css";
interface Props {
    defaultMode?: "light" | "dark";
    onChange?: (mode: "light" | "dark") => void;
}
declare const ThemeSwitch: React.FC<Props>;
export default ThemeSwitch;
