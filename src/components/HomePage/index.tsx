import styled from "styled-components"

//components
import Box from "../Box"
import HeroSection from "./hero-section"
import FeaturedBlog from "./featured-blog"

const HomePage = () => (
  <StyleHomeContainer>
    <HeroSection />
    <FeaturedBlog />
  </StyleHomeContainer>
)

export default HomePage

const StyleHomeContainer = styled(Box)`
  width: 100%;
  padding: 70px 0;
`
