import styled, { keyframes, css } from "styled-components"

export const fadeInBottomToTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeInTopToBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeInLeftToRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInRightToLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
const getAnimation = (type: string) => {
  switch (type) {
    case "bottomToTop":
      return fadeInBottomToTop
    case "topToBottom":
      return fadeInTopToBottom
    case "leftToRight":
      return fadeInLeftToRight
    case "rightToLeft":
      return fadeInRightToLeft
    default:
      return fadeInBottomToTop
  }
}

export const AnimatedDiv = styled.div`
  ${({
    animationType,
    duration,
    delay,
  }: {
    animationType: string
    duration: string
    delay: string
  }) => css`
    opacity: 0;
    animation: ${getAnimation(animationType)} ${duration} ease-out ${delay} forwards;
  `}
`
