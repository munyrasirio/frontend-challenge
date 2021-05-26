import React from 'react';
import BreadcrumbView from './BreadcrumbView';

export default function Breadcrumb({routes}) {
  return <BreadcrumbView {...{routes}}/>
}