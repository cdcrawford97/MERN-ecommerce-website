import styled from "styled-components";
import { popularProducts } from "../data";
import { mobileM } from "../Responsive/responsive";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobileM({ padding: "10px" })};
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
