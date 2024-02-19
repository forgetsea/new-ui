import React, { useState, useEffect } from 'react';

import IssueTable from '../Component/IssueTable';
import SearchBox from '../Component/SearchBox';
import * as IssueServices from '../utils/util';

function IssueView() {
  const [issueList, setIssueList] = useState([])

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const fetchedIssues = await IssueServices.fetchIssues();
        setIssueList(fetchedIssues);
      } catch (error) {
        console.error('Failed to fetch issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <>
      <div className="panel-body">
        <SearchBox updateData={setIssueList} />
        <IssueTable issueList={issueList} />
      </div>
    </>
  )
}

export default IssueView;
