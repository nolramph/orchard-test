import styled from "styled-components"

//components
import { Container } from "../../styled/global"
import AnchorButton from "../AnchorButton"

//styled utils
import { media } from "../../styled/utils"

const FeaturedBlog = () => {
  return (
    <Container id="featured-blog">
      FeaturedBlog
      <AnchorButton href="/">Read more</AnchorButton>
    </Container>
  )
}

export default FeaturedBlog
