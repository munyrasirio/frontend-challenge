import React from 'react';
import { 
  Card,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import Main from '../../components/Main';
import Breadcrumb from '../../components/Breadcrumb';
import CheckboxListFilter from '../../components/CheckboxListFilter';
import Pagination from '../../components/Pagination';
import SelectOrderer from '../../components/SelectOrderer';
import Text from '../../components/Text';
import Title from '../../components/Title';
import MemberCard from '../../components/MemberCard';

export default function MemberListView ({
  routes, 
  selectedStates, 
  setSelectedStates, 
  brStates, 
  members, 
  page, 
  limit, 
  totalResults, 
  setPage,
  order,
  setOrder
}) {
  return (
    <Main>
      <Container>        
        <Row>     
          <Breadcrumb routes={routes}/>
          <Title content="Lista de membros"/>
          <Col sm={12}>
            <Row>
              <Col sm={4} className="mb-3">
                <Card>
                  <Card.Body>
                    <Text as="h5" content="Por Estado" />
                    <CheckboxListFilter 
                      selectedItems={selectedStates} 
                      setSelectedItems={setSelectedStates}
                      filterItems={brStates} 
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={8}>
                <Row>
                  <Col sm={12} className="mb-3">
                    <Card>
                      <Card.Body>
                        <Row className="align-items-center">
                          <Col md={6}>
                            <Text className="mb-0" content={`Exibindo ${members.length} de ${totalResults} itens`} />
                          </Col>
                          <Col md={6}>
                            <SelectOrderer {...{order, setOrder}}/>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  {members.map((member, key) => <MemberCard key={key} memberData={member}/>)}              
                </Row>
                <Row className="mt-3">
                  <Col sm={12} className="d-flex justify-content-center">
                    <Pagination {...{page, limit, totalResults, setPage}}/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Main>
  )
}