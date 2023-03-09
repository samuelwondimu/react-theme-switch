import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as SunIcon } from "./sun.svg";
import { ReactComponent as MoonIcon } from "./moon.svg";

interface Props {
  defaultMode?: "light" | "dark";
  onChange?: (mode: "light" | "dark") => void;
}

const ThemeSwitch: React.FC<Props> = ({ defaultMode = "light", onChange }: Props) => {
  const [mode, setMode] = useState<"light" | "dark">(defaultMode);

  const handleToggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    if (onChange) {
      onChange(newMode);
    }
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={mode === "dark"}
        onChange={handleToggle}
      />
      <span className="slider round">
        {mode === "dark" ? (
          <MoonIcon className="icon" />
        ) : (
          <SunIcon className="icon" />
        )}
      </span>
    </label>
  );
};

export default ThemeSwitch;
