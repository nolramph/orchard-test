import styled from "styled-components"

//components
import { Container } from "../../styled/global"
import Card from "../Card"

//constants
import { FEATURED_BLOG_ITEMS } from "../../constants"

//styled utils
import { media } from "../../styled/utils"

const FeaturedBlog = () => {
  return (
    <StyledContainer id="featured-blog">
      <h2>All the latest from AEG</h2>
      <CardContainer>
        {FEATURED_BLOG_ITEMS.map(post => (
          <Card
            imageUrl={post.imageUrl}
            imageAlt={post.imageAlt}
            title={post.title}
            content={post.content}
            linkName={post.ctaName}
            href={post.url}
          />
        ))}
      </CardContainer>
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`
