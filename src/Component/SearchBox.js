import React, { useState } from 'react';
import { Form, Button, FormControl, Row, Col } from 'react-bootstrap';
import * as IssueServices from '../utils/Util';

function SearchBox({ updateData }) {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await IssueServices.fetchIssue(keyword);
      updateData(data);
    } catch (error) {
      console.error('Error fetching issue:', error);
    }
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <Row>
        <Col>
          <FormControl
            type="text"
            placeholder="Search"
            className="search"
            value={keyword}
            onChange={handleInputChange}
          />
        </Col>
        <Col><Button type="submit" variant="outline-success">Search</Button></Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
