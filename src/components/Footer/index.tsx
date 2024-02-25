import styled from "styled-components"

const Footer = () => (
  <FooterContainer>
    <footer>
      <p>&copy; {new Date().getFullYear()} Orchard Assessment. All Rights Reserved.</p>
    </footer>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #f2f2f2;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  footer {
    padding: 0 15px;
  }

  p {
    color: #666;
    margin: 0;
    font-size: 14px;
  }
`
