import styled from 'styled-components'
import { color } from '@/src/styles/variables'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${color.secondary};
    padding: 5em;
    gap: 5em;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    gap:2em;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;

    img{
        width: 207px;
        height: 207px;
    }

    p{
        width: 400px;
        font-size: 1.2em;
    }
`