import styled from "styled-components"

//components
import { Container, Row } from "../../styled/global"
import Box from "../Box"

//styled utils
import { media } from "../../styled/utils"

const HeroSection = () => {
  return (
    <Container id="hero-section">
      <StyledRow>
        <ImageResponsiveBox order="2">
          <img
            src="../../assets/images/component1/hero-image1.jpg"
            alt="Image used for hero section 1"
            loading="lazy"
          />
          <Box display="flex">
            <img
              src="../../assets/images/component1/hero-image2.jpg"
              alt="Image used for hero section 2"
              loading="lazy"
            />
            <img
              src="../../assets/images/component1/hero-image3.jpg"
              alt="Image used for hero section 3"
              loading="lazy"
            />
          </Box>
        </ImageResponsiveBox>
        <ContentResponsiveBox>
          <article>
            <h2>Answer Your body's needs</h2>
            <p>
              The way ingredients are sourced affects the way we nourish our bodies. Author Mark
              Schatzer believes our body naturally devolops an appetite for the foods and nutrients
              it needs to be healthy, but that artificial flavourings are getting in the way. This
              can be reversed by focusing on high-quality ingredients and being mindful as your
              appetite guides you to consume according to your body's needs.
            </p>
            <h4>Be Mindful</h4>
            <p style={{ fontWeight: 600 }}>
              Sourcing local or organic food is a good way to start being more mindful about what
              you're cooking and eating.
            </p>
          </article>
        </ContentResponsiveBox>
      </StyledRow>
    </Container>
  )
}

export default HeroSection

const StyledRow = styled(Row)`
  gap: 24px;
`
const ResponsiveBox = styled(Box)`
  flex-direction: column;
  display: flex;
  gap: 24px;
  order: 2;

  ${media.laptop`
    width: 60%;
    flex-direction: row;
    justify-content: center;
  `};
`

const ImageResponsiveBox = styled(ResponsiveBox)`
  img {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
  div {
    gap: 24px;
    flex-direction: column;
  }

  ${media.tablet`
    flex-direction: row;
    justify-content: center;
    img{
      max-width: 384px;
      width: 100%;
      max-height: 600px;
      height: 100%;

      div {
        gap: 20px;
        img{
          max-height: 145px;
          height: 100%;

        }
      }
    }
  `};
  ${media.laptop`
    order: 1;
    img{
      max-width: 384px;
      max-height: 600;

      div {
        img{
          max-height: 290px;

        }
      }
    }
  `};
`

const ContentResponsiveBox = styled(ResponsiveBox)`
  text-align: left;
  order: 1;
  margin-bottom: 15px;
  h2,
  p {
    font-weight: 300;
    margin-bottom: 14px;
  }
  h2 {
    text-transform: uppercase;
    border-bottom: solid 1px #ffffff;
    padding-bottom: 10px;
    margin-bottom: 28px;
    font-size: 26px;
    line-height: 36px;
  }
  h4 {
    font-weight: 600;
    margin: 33px 0 11px;
    text-transform: uppercase;
    color: #cf1430;
    line-height: 24px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
  }

  ${media.laptop`
    order: 2;
    width: 40%;
  `};
`
