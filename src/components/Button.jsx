import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ButtonComponent({name, type, link}) {
  return (
    <>
      <Button variant="outline-primary" type={type}>{name}</Button>
    </>
  )
}
