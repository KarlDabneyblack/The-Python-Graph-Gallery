import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ChartImage from './ChartImage';

import './functionExploration.css';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function FunctionExploration({ funDetails }) {
  const [selectedParameter, setSelectedParameter] = useState(0);

  if (!funDetails) {
    return null;
  }

  const selectedParameterInfo = funDetails.parameters[selectedParameter];

  const argumentButtons = (
    <div>
      {funDetails.parameters.map((item, i) => (
        <Button
          key={i}
          value={item.name}
          size="sm"
          onClick={() => setSelectedParameter(i)}
          className={selectedParameter === i ? 'isButtonSelected' : ''}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );

  return (
    <div style={{ marginBottom: 70 }}>
      <h2 id={capitalize(funDetails.name + '()' + ' details')}>
        &#128270; <code>{funDetails.name}</code> function parameters
        <a
          style={{ marginLeft: '15px', fontSize: '14px' }}
          href={funDetails.docUrl}
        >
          &rarr; see full doc
        </a>
      </h2>

      <h3>&rarr; Description</h3>
      <p>{funDetails.description}</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          alignItems: 'baseline',
          gap: 14,
        }}
      >
        <h3 style={{ width: 'auto' }}>&rarr; Arguments</h3>
        {argumentButtons}
      </div>

      <Row>
        <Col md={8}>
          <div style={{ fontSize: 16 }}>
            <p className="argumentSectionTitle">Description</p>
            <p className="little-text">{selectedParameterInfo.description}</p>

            <p className="argumentSectionTitle">
              Possible values &rarr; {'  '}
              <span className="parameterTypePill">
                {selectedParameterInfo.type}
              </span>
            </p>
            <p className="little-text">{selectedParameterInfo.howToUse}</p>

            <p className="argumentSectionTitle">Code Example</p>
            <div style={{ fontSize: 12, backgroundColor: 'white' }}>
              {selectedParameterInfo.basicUsage}
            </div>
          </div>
        </Col>

        <Col md={4}>
          <br />
          <Link to={'/' + selectedParameterInfo.post}>
            <ChartImage
              imgName={selectedParameterInfo.img}
              caption={'More about the ' + funDetails.name + ' function.'}
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
}
