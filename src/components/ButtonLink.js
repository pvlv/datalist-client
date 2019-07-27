import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function ButtonLink({ ...props }) {
  return <Button as={Link} href={props.to} {...props} />;
}
