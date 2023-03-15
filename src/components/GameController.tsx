import styled from "styled-components"

const ADiv = styled.div`
right: 56px;
bottom: 97.5px;
position: absolute;
width: 50px;
height: 50px;
line-height: 50px;
`

const BDiv = styled.div`
right: 106px;
bottom: 147.5px;
position: absolute;
width: 50px;
height: 50px;
line-height: 50px;
`

const ArrowDiv = styled.div`
position: absolute;
    left: 36px;
    bottom: 83.5px;
    width: 122px;
    height: 122px;
    line-height: 122px;
`

const ZoomDiv = styled.div`
background-color: rgb(185, 185, 195);
position: absolute;
left: 16px;
bottom: 247.5px;
width: 335px;
height: 40px;
`

const GameController = () => {
    return <div>
        <ZoomDiv/>
        <ADiv>A</ADiv>
        <BDiv>B</BDiv>
        <ArrowDiv>Arrow</ArrowDiv>
    </div>
}

export default GameController