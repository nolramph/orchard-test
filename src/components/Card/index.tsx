import styled from "styled-components"

//component
import AnchorButton from "../AnchorButton"

type CardType = {
  imageUrl: string
  imageAlt: string
  title: string
  content: string
  linkName: string
  href: string
}

const Card = ({ imageUrl, imageAlt, title, content, linkName, href }: CardType) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={imageAlt}></CardImage>
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
        <AnchorButton href={href}>{linkName}</AnchorButton>
      </CardContent>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  max-width: 340px;
`
const CardImage = styled.img`
  width: 100%;
  height: auto;
`
const CardContent = styled.div`
  h3 {
    font-size: 18px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    margin-bottom: 20px;
  }
`
