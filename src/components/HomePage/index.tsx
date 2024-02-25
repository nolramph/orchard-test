import styled from "styled-components"

//components
import Box from "../Box"
import HeroSection from "./hero-section"

const HomePage = () => (
  <StyleHomeContainer>
    <HeroSection />
  </StyleHomeContainer>
)

export default HomePage

const StyleHomeContainer = styled(Box)`
  width: 100%;
  padding-top: 90px;
`
