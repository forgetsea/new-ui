import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as IssueServices from '../utils/Util';

const IssueTable = ({ issueList = [] }) => {

  return (
    <>
      <div className="panel">
        <div className="panel-p">Panel Name Issue</div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Issue Title</th>
                <th>Description</th>
                <th>Cost Sum</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {issueList.map(issue => (
                <React.Fragment key={issue.id}>
                  <tr className='issue-list'>
                    <td>{issue.title}</td>
                    <td>{issue.description}</td>
                    <td>{issue.costsum}</td>
                    <td>
                      <Button variant="success">Success</Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      {issue.costAll && issue.costAll.map((costItem, index) => (
                        <>
                        <span className="costTitle" key={`${issue.id}-${index}`}>{costItem.title}</span>: 
                        <span className="">${costItem.cost} |  </span>
                        </>
                      ))}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default IssueTable;
