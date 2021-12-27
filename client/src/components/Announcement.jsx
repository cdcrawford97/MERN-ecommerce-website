import styled from "styled-components";
import { mobileS } from "../Responsive/responsive";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobileS({ fontSize: "11px" })};
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over £50
        </Container>
    )
}

export default Announcement
