import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobileM, tablet } from "../Responsive/responsive";

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobileM({ flexDirection: "column" })};
`

const Filter = styled.div`
    margin: 20px;
    display: flex;
    ${tablet({ flexDirection: "column", gap: "10px" })};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobileM({ marginRight: "0" })};
`

const SelectContainer = styled.div`
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${tablet({ marginTop: "10px" })};
`

const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <SelectContainer>
                        <Select>
                            <Option disabled selected>
                                Color
                            </Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                        </Select>
                        <Select>
                            <Option disabled selected>
                                Size
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </SelectContainer>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (Ascending)</Option>
                        <Option>Price (Descending)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
