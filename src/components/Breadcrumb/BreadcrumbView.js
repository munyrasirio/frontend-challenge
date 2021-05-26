import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import { Breadcrumb } from './BreadcrumbStyle.js';
import { FaChevronRight } from 'react-icons/fa';
import Anchor from '../Anchor';
import { FaHome } from 'react-icons/fa';

export default function BreadcrumbView ({routes}) {
  return (    
    <Col sm={12}>
      <Breadcrumb>
        <FaHome className="mr-2" />
        <Anchor to="/" content="Home" />
        {routes.map((route, key) => {
          return(
            <Fragment key={key}>
              <FaChevronRight className="mx-2" />
              <Anchor to={route.to} content={route.label}>
                {route.label}
              </Anchor>
            </Fragment>
          )
        })}
      </Breadcrumb>
    </Col>
  )
}