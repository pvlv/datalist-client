import React from 'react';
import { Spinner as BSSpinner } from 'react-bootstrap';
import { Center } from './Center';

export function Spinner() {
  return (
    <Center>
      <BSSpinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </BSSpinner>
    </Center>
  );
}
