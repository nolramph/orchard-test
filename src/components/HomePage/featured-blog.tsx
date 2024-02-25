import styled from "styled-components"

//components
import { Container } from "../../styled/global"
import Card from "../Card"

//styled utils
import { media } from "../../styled/utils"

const FeaturedBlog = () => {
  return (
    <StyledContainer id="featured-blog">
      <h2>All the latest from AEG</h2>
      <Card
        imageUrl="../../assets/images/component2/featured-image1.jpg"
        imageAlt="Add a sample alt here"
        title="Summer Lunch Menu By Mark Best"
        content="AEG ambassador Mark Best’s summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
        linkName="Read more"
        href="/"
      />
    </StyledContainer>
  )
}

export default FeaturedBlog

const StyledContainer = styled(Container)`
  h2 {
    font-size: 42px;
    font-weight: 300;
    line-height: 57px;
    margin-bottom: 60px;
    text-transform: uppercase;
    text-align: center;
  }
`
