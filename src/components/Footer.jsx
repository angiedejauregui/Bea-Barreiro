import React from 'react'
import styled from 'styled-components'
import AvisoLegal from './AvisoLegal'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterConetainer>
        <div>
            <p>Copyright © {new Date().getFullYear()} Bea Barreiro</p> 
             <Link className='link' to="/aviso-legal" target='_blank'>Aviso Legal</Link>
        </div>
    </FooterConetainer>
  )
}

export default Footer

const FooterConetainer = styled.footer`
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        gap: 1rem;

        .link {
          color: black;
          text-decoration: underline;
        }

    }
`