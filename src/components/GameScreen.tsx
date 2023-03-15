import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { selectAvatarState } from "../state/atom"

const ScreenContainer = styled.div`
position: absolute;
    top: 80px;
    left: 33px;
    width: 310px;
    height: 310px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: none;
`

const GameScreen = () => {
    const selectAvatar = useRecoilValue(selectAvatarState)

    return <ScreenContainer>
        <p>This is a Screen</p>
        <p>Waiting for more content</p>
        <p>eg:</p>
        <p>faith:{selectAvatar.faith}</p>
        <p>mana:{selectAvatar.mana}</p>
        <p>weapons:{selectAvatar.weapons}</p>
    </ScreenContainer>
}

export default GameScreen