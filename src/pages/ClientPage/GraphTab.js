import React, { useState, useEffect, useRef } from 'react';
import { Fade, Button, Form } from 'react-bootstrap';

import { DataTree } from '../../components';
import { useService } from '../../hooks';
import defaultData from './data.json';

function getItemByCodeMock(code) {
  return new Promise(resolve => setTimeout(resolve(defaultData), 1000));
}

const delay = (ms = 2000) => new Promise(res => setTimeout(res, ms));

export function GraphTab() {
  const inputCodeRef = useRef(null);
  const { api } = useService();
  const [isShowTab, setTabShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState(defaultData);

  // api.getItemByCode = getItemByCodeMock;

  const getItemByCode = async code => {
    try {
      const res = await api.getItemByCode(code);
      await delay(1000);
      setItems(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isLoading) {
      getItemByCode(inputCodeRef.current.value).then(() => {
        setLoading(false);
        setTabShow(!isShowTab);
      });
    }
  }, [isLoading]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <h1>Title</h1>
      <p>
        огие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор
        слов, но это не совсем так. Его корни уходят в один фрагмент
        классической латыни 45 года н.э., то есть более двух тысячелетий назад.
        Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupCode">
          <Form.Control
            ref={inputCodeRef}
            type="number"
            placeholder="введите код товара"
          />
          <br />
          <Button
            variant="info"
            type="submit"
            aria-expanded={isShowTab}
            aria-controls="example-fade-text"
            style={{ marginBottom: '1rem' }}
          >
            {isLoading ? 'Загрузка…' : 'Загрузить'}
          </Button>
        </Form.Group>
      </Form>
      <Fade in={isShowTab}>
        <div id="example-fade-text">
          <DataTree data={items} />
        </div>
      </Fade>
    </>
  );
}
