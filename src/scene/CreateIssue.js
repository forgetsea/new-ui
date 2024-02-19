import React, { useState, useEffect } from 'react';

import * as IssueServices from '../utils/util';
import { Form, Button, FormControl, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreateIssue() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [costs, setCosts] = useState({
    material: '',
    labor: '',
    inclusive: '',
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, costs });
    // IssueServices.createIssue({ title, description, costs })
    //   .then(() => {
          navigate('/'); // Navigate to home page after successful submission
    //   })
    //   .catch(error => {
    //     console.error('There was an error!', error);
    //   });

  };

  return (
    <>
    <div className="panel-body">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="issueTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Issue Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="issueDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" rows={2} />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-1">
              <Form.Label>Cost Title</Form.Label>
              <Form.Control type="text" value="material" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="number" placeholder="500.80 etc." />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-1">
              <Form.Label>Cost Title</Form.Label>
              <Form.Control type="text" value="labor" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="number" placeholder="500.80 etc." />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-1">
              <Form.Label>Cost Title</Form.Label>
              <Form.Control type="text" value="inclusive" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="number" placeholder="500.80 etc." />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

export default CreateIssue;