import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Success = () => {
    return (
        <Container>
            Your order is being processed. Thanks for shopping with MiiO.
        </Container>
    )
}

export default Success
