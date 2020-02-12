import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    margin: 25px 0;
    justify-content: center;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const BoxDay = styled.div`
    width: 100%;
    border: 1px solid black;
    text-align: center;
`

export const TitleDay = styled.h2`

`

export const TasksArea = styled.div`
    grid-row: 2;
    height: 600px;
    border: 1px solid black;
`