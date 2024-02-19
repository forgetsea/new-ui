import React from 'react';

import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const IssueList = ({ issueList }) => (
  <>
  {issueList.map(issue => (
    <React.Fragment key={issue.id}>
      <tr class='issue-lit'>
        <td>{issue.title}</td>
        <td>{issue.description}</td>
        <td>{issue.costsum}</td>
        <td>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="success">Success</Button>
        </td>
      </tr>
      <tr>
        <td colSpan={4}>{issue.costAll.map((costItem, index)=> (
          <span key={index}>{costItem.title}: ${costItem.cost}</span>)
        )}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </React.Fragment>
    )
  )}
  </>
)

IssueList.propTypes = {
  Issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    costSum: PropTypes.number.isRequired,
    costAll: PropTypes.array.isRequired,
  })).isRequired,
}

export default IssueList;