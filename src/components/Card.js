import React from 'react';
import { Card as BSCard } from 'react-bootstrap';
import { ButtonLink } from './ButtonLink';

const textPlaceHolder =
  'Some quick example text to build on the card title ancontent.';

export function Card({
  title = 'title',
  imgSrc,
  text = textPlaceHolder,
  buttonContent = 'Далее',
  linkTo
}) {
  return (
    <BSCard>
      {imgSrc && <BSCard.Img variant="top" src={imgSrc} />}
      <BSCard.Body>
        <BSCard.Title>{title}</BSCard.Title>
        <BSCard.Text>{text}</BSCard.Text>
        <ButtonLink to={linkTo} size="lg" variant="info">
          {buttonContent}
        </ButtonLink>
      </BSCard.Body>
    </BSCard>
  );
}
