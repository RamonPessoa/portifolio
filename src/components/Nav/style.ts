import styled from 'styled-components'
import { color } from '@/src/styles/variables'

export const Nav = styled.nav`
    display: flex;
    justify-content: right;
    width: 70vw;
    margin-left: auto;
    margin-right: auto;

    ul{
        list-style: none;
        margin-top: 15px;

        li {
            font-size: 1.5em;
            display: inline;

            :hover{
                    cursor: pointer;
                }

            a{
                padding: 10px;
                text-decoration: none;
                color: white;
                display: inline-block;
            }
        }

        button{
            height: 50px;
            background-color: ${color.tertiary};
            border: none;
            border-radius: 5px;
            color: #eee;
            padding: 15px;
            font-size: 18px;
            color: #eee;

            :hover{
                cursor: pointer;
            }
        }
    }
`