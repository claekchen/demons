import { useRecoilValue } from "recoil"
import { selectAvatarState } from "../state/atom"


const GameScreen = () => {
    const selectAvatar = useRecoilValue(selectAvatarState)

    return <>
    <p>This is a Screen</p>
    <p>{selectAvatar.faith}</p>
    </>
}

export default GameScreen