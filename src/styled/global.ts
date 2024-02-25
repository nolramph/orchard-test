import styled from "styled-components"

//styled utils
import { media } from "./utils"

import Box from "../components/Box"

export const Container = styled(Box)`
  display: flex;

  ${media.tablet`
    flex-direction: column;
  `}
`
export const Row = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${media.laptop`
    flex-direction: row;
    justify-content: space-around;
  `}
`

export const Column = styled(Box)`
  width: 100%;

  ${media.tablet`
    width: 45%;
  `}
`
