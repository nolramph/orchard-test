import styled from "styled-components"

type AnchorButtonType = {
  href: string
  children: React.ReactNode
}

const AnchorButton = ({ href, children }: AnchorButtonType) => (
  <StyledAnchorLink href={href}>{children}</StyledAnchorLink>
)

export default AnchorButton

const StyledAnchorLink = styled.a`
  display: inline-block;
  padding: 4px 0;
  text-decoration: none;
  color: #fff;
  border-bottom: 2px solid #cf1430;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 16px;

  &:hover {
    padding: 4px 0 2px;
    border-bottom: 4px solid #cf1430;
  }
`
