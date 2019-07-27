import React, { useEffect } from 'react';
import axios from 'axios';
import Form from 'react-jsonschema-form-bs4';
import { Button } from 'react-bootstrap';
import { schema, uiSchema, formData } from './formSchema';

const log = type => console.log.bind(console, type);
const onError = e => console.error(e);

const onSubmit = formFields => {
  axios
    .post('/item/create', formFields)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

const ProviderForm = props => {
  useEffect(() => {});

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onChange={log('changed')}
      onSubmit={onSubmit}
      onError={onError}
    >
      <div>
        <Button>Отменить</Button>
        <Button type="submit">Отправить</Button>
      </div>
    </Form>
  );
};

export default ProviderForm;
