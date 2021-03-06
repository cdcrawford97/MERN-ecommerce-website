import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobileM, mobileS} from '../Responsive/responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobileM({ fontSize: "45px" })};
`
const Desc = styled.div`
    font-style: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobileM({ width: "80%" })};
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite brand.</Desc>
            <InputContainer>
                <Input placeholder="Your E-mail"/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
