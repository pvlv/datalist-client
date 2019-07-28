import React, { useState, useEffect } from 'react';
import { Fade, Button } from 'react-bootstrap';

import { DataTree } from '../../components';
import { useService } from '../../hooks';
import data from './data.json';

function getItemByCodeMock() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

const delay = (ms = 2000) => new Promise(res => setTimeout(res, ms));

export function GraphTab() {
  const { api } = useService();
  const [isShowTab, setTabShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

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
      getItemByCode().then(() => {
        setLoading(false);
        setTabShow(!isShowTab);
      });
    }
  }, [isLoading]);

  const handleModalClick = () => setLoading(true);

  return (
    <>
      <h1>Title</h1>
      <p>
        огие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор
        слов, но это не совсем так. Его корни уходят в один фрагмент
        классической латыни 45 года н.э., то есть более двух тысячелетий назад.
        Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
      </p>
      <Button
        variant="info"
        onClick={handleModalClick}
        aria-expanded={isShowTab}
        aria-controls="example-fade-text"
        style={{ marginBottom: '1rem' }}
      >
        {isLoading ? 'Loading…' : 'Загрузить'}
      </Button>
      <Fade in={isShowTab}>
        <div id="example-fade-text">
          <DataTree data={items} />
        </div>
      </Fade>
    </>
  );
}
