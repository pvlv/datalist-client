import React, { useEffect } from 'react';
import Form from 'react-jsonschema-form-bs4';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { schema, uiSchema, formData } from './formSchema';

const log = type => console.log.bind(console, type);
const onError = e => console.error(e);

const ProviderForm = ({ onSubmit }) => {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onChange={log('changed')}
      onSubmit={onSubmit}
      onError={onError}
    >
      <ButtonToolbar className="justify-content-between">
        <Button variant="secondary">Отменить</Button>{' '}
        <Button variant="info" type="submit">
          Отправить
        </Button>
      </ButtonToolbar>
    </Form>
  );
};

export default ProviderForm;
