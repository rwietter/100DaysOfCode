import React from "react"

import ToggleMode from "../Toggle/Toggle"
import * as S from "./styled"
import badges from "./badges/badges"

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <S.Container>
        <S.Readme>README</S.Readme>
        <ToggleMode theme={theme} toggleTheme={toggleTheme} />
      </S.Container>
      <S.HeaderHr />
      <S.Badges>
        {badges.map(({ id, badge }) => (
          <S.Badge key={id}>
            <img
              src={badge}
              target="_blank"
              rel="noopener noreferrer"
              alt="badges github image"
            />
          </S.Badge>
        ))}
      </S.Badges>
      <S.HeaderHr />
      <S.HeaderTitle>
        A List of Useful Resources for Front End Developers
      </S.HeaderTitle>
    </>
  )
}
export default Header
