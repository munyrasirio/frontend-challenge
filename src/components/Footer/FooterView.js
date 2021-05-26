import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container,
  Row
} from 'react-bootstrap';
import { Footer } from './FooterStyle.js';
import SocialLink from '../SocialLink';
import Text from '../Text';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import logoWhite from '../../assets/logo_white.svg';

export default function FooterView({bgColor}) {
  return (
    <Footer bgColor={bgColor}>
      <Container>
        <Row className="flex-column align-items-center justify-content-center">
          <Link to="/" title="Juntos Somos +" className="mb-3">
            <img src={logoWhite} width="170" alt="Juntos Somos +" />
          </Link>
          <Text className="mb-4" color="#FFF" weight={500} content="Juntos Somos Mais Fidelização S.A." />
          <Text color="#FFF" size={14} content="Siga-nos nas redes sociais:" />
          <ul className="list-unstyled d-flex mt-2">
            <SocialLink 
              href="https://www.facebook.com/juntossomosmais/"
              target="_blank"
              title="Facebook"
              icon={<FaFacebookF />} 
            />
            <SocialLink 
              href="https://www.linkedin.com/company/juntos-somos-mais/"
              target="_blank"
              title="LinkedIn"
              icon={<FaInstagram />} 
            />
            <SocialLink 
              href="https://www.instagram.com/juntossomosmais/"
              target="_blank"
              title="Instagram"
              icon={<FaLinkedinIn />} 
            />
          </ul>
        </Row>
      </Container>
    </Footer>
  )
}