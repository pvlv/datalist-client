import React, { useState, useEffect } from 'react';
import { Fade, Button } from 'react-bootstrap';

import { Cytoscape } from '../../components';
import data from './data.json';

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

export function GraphTab() {
  const [isShowTab, setTabShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
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
          <Button>На весь экран</Button>
          <Cytoscape data={data} roots="#a" />
        </div>
      </Fade>
    </>
  );
}
