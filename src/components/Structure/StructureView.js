import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function StructureView({onEnter, ...props}) {
  return (
    <>
      <Header {...{onEnter}}/>      
        {props.children}
      <Footer />
    </>
  )
}