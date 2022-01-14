import styled from 'styled-components'
import { color } from '@/src/styles/variables'
export const Container = styled.div`
        font-size: 4em;
        position: fixed;
        bottom: .6em;
        right: 1em;

        :hover{
            cursor: pointer;
        }
    
        svg{
            fill: ${color.tertiary};
        }
`