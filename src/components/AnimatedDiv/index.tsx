import { AnimatedDiv } from "./animation_utils"

type AnimatedComponentProps = {
  children: React.ReactNode
  duration?: string | undefined
  delay?: string
  animationType?: "bottomToTop" | "topToBottom" | "leftToRight" | "rightToLeft"
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  duration = "1s",
  delay = "0s",
  animationType = "bottomToTop",
}) => {
  return (
    <AnimatedDiv animationType={animationType} duration={duration} delay={delay}>
      {children}
    </AnimatedDiv>
  )
}

export default AnimatedComponent
