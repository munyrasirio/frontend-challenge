import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {Wrapper, Photo, PhotoContainer, NameWrapper } from './MemberStyle.js';
import Main from '../../components/Main';
import Text from '../../components/Text';

export default function MemberView ({member}) {
  const birthDate = new Date(member.dob.date).toLocaleDateString();
  const registerDate = new Date(member.registered.date).toLocaleDateString();
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
              <PhotoContainer>
                <Photo src={member.picture.large} />
              </PhotoContainer>
            </Col>
            <Col>
              <NameWrapper>
                <Col sm={6} lg={7}>
                  <Text as="h3" className="text-capitalize mb-4 mb-sm-0" content={`${member.name.title}. ${member.name.fullname}`} />
                </Col>
                <Col>
                  <span></span>
                </Col>
              </NameWrapper>
              <Text weight="bold" content="Telefone:"/>
              <Text className="mb-1" content={member.phone}/>
              <Text weight="bold" content="Celular:"/>
              <Text className="mb-1" content={member.cell}/>
              <Text weight="bold" content="E-mail:"/>
              <Text className="" content={member.email}/>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Main>
        <Container className="py-5">
          <Row>
            <Col xs={12}>
              <NameWrapper>
                <Col className="d-none d-sm-block">
                  <span></span>
                </Col>
                <Col sm={6} lg={7}>
                  <Text as="h2" className="text-center mb-3" content="Dados Pessoais do Membro" />
                </Col>
                <Col className="d-none d-sm-block">
                  <span></span>
                </Col>
              </NameWrapper>
            </Col>
            <Col md={6}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <Col xs={6} sm={3} md={4} lg={4}>
                      <Text weight="bold" content="Sexo:"/>
                    </Col>
                    <Col>
                      <Text className="text-capitalize" content={member.gender}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} sm={3} md={4} lg={4}>
                      <Text weight="bold" content="Idade:"/>
                    </Col>
                    <Col>
                      <Text className="text-capitalize" content={member.dob.age}/>
                    </Col>
                  </Row>      
                  <Row>
                    <Col xs={6} sm={3} md={4} lg={4}>
                      <Text weight="bold" content="Data de Nascimento:"/>
                    </Col>
                    <Col>
                      <Text className="text-capitalize" content={birthDate}/>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <Col xs={6} sm={3} md={4} lg={4}>
                      <Text weight="bold" content="Endereço:"/>
                    </Col>
                    <Col>
                      <Text className="text-capitalize" content={member.location.street}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} sm={3} md={4} lg={4}>
                      <Text weight="bold" content="Cidade:"/>
                    </Col>
                    <Col>
                      <Text className="text-capitalize" content={member.location.city}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} sm={3} md={4} lg={4}>
                      <Text weight="bold" content="Estado:"/>
                    </Col>
                    <Col>
                      <Text className="text-capitalize" content={member.location.state}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} sm={3} md={4} lg={4}>
                      <Text weight="bold" content="CEP:"/>
                    </Col>
                    <Col>
                      <Text className="text-capitalize" content={member.location.postcode}/>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="mt-3">
            <Card.Body className="d-flex align-items-center justify-content-center">
              <Text weight="bold" content="Data de Registro:"/>
              <Text className="pl-4 text-capitalize" content={registerDate}/>
            </Card.Body>
          </Card>
        </Container>
      </Main>            
    </>
  )
}