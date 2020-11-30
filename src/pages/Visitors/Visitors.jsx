import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVisitorsThunk, createVisitorThunk, removeVisitorThunk, editVisitorThunk } from '../../thunks';
import loading from '../../images/loading.svg';
import DataTable from '../../components/DataTable/DataTable';
import VisitorForm from '../../components/VisitorForm/VisitorForm';
import { formatDate } from '../../API/customFunc';

const tableNames = ['#', 'Person Name', 'Person ID', 'Date', 'Card Number'];

const Visitors = (props) => {
  const { gettingData, getVisitors, createVisitor, removeVisitor, editVisitor } = props;

  useEffect(() => {
    getVisitors();
  }, []);

  return (
    <div className="container">
      <div className="leftSide">
        <VisitorForm />
      </div>
      <div className="list">
        {""
          ?
          <img src={loading} alt="loading" style={{ marginTop: "31vh" }} />
          :
          <DataTable type="visitors" tableNames={tableNames} remove={() => { }} update={() => { }} items={props.visitors} />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    visitors: { visitors, gettingData }
  } = state;
  return {
    visitors,
    gettingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVisitors: () => {
      dispatch(getVisitorsThunk())
    },
    createVisitor: (data) => {
      dispatch(createVisitorThunk(data))
    },
    removeVisitor: (id) => {
      dispatch(removeVisitorThunk(id))
    },
    editVisitor: (data) => {
      dispatch(editVisitorThunk(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visitors);


