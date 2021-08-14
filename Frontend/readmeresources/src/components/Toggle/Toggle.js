import React from "react"
import { func, string } from "prop-types"

import { ToggleContainer } from "./styled"
import MoonIcon from "../../icons/moon.svg"
import SunIcon from "../../icons/sun.svg"

function ToggleMode({ theme, toggleTheme }) {
  const isLight = theme === "light"
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img
        src={SunIcon}
        width="224"
        height="224"
        alt="Sun free icon"
        title="Sun free icon"
      />
      <img
        src={MoonIcon}
        width="224"
        height="224"
        alt="Moon free icon"
        title="Moon free icon"
      />
    </ToggleContainer>
  )
}

ToggleMode.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ToggleMode
