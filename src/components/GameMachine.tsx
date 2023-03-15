import GameController from "./GameController"
import GameScreen from "./GameScreen"
import styled from "styled-components"
import machineImg from "../assets/machine.png"

const PageContainer = styled.div`
position: absolute;
width: 100%;
height: 100vh;
overflow: hidden;
max-width: 375px;
min-width: 375px;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
margin: 0 auto;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`

const MachineContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 0;
    padding-top: 187.33333333333334%;
    background: url(${machineImg});
    background-size: cover;
    background-position: 50%;
`

const GameMachine = () => {
    return <PageContainer>
            <MachineContainer>
            <GameScreen />
            <GameController />
        </MachineContainer>
    </PageContainer>
    
}

export default GameMachine