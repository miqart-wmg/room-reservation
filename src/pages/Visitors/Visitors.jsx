import React from 'react';
import loading from '../../images/loading.svg';
import DataTable from '../../components/DataTable/DataTable';
import VisitorForm from '../../components/VisitorForm/VisitorForm';

const tableNames = ['#',	'Person Name', 'Person ID',	'Date',	'Card Number'];

const Visitors = (props) => {
    return (
        <div className="container">
          <div className="leftSide">
            <VisitorForm />
          </div>
          <div className="list">
            {""
              ?
              <img src={loading} alt="loading" style={{marginTop: "31vh"}} />
              :
              <DataTable tableNames={tableNames} remove={() => {}} update={() => {}} items={[]} />}
          </div>
        </div>
      );
}

export default Visitors;

