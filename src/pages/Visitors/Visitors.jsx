import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getVisitorsThunk, createVisitorThunk, removeVisitorThunk, editVisitorThunk } from '../../thunks';
import loading from '../../images/loading.svg';
import DataTable from '../../components/DataTable/DataTable';
import VisitorForm from '../../components/VisitorForm/VisitorForm';
import { formatDate } from '../../API/customFunc';

const initialState = { personName: "", personId: "", cardNumber: "", createdDate: "" };
const tableNames = ['#', 'Person Name', 'Person ID', 'Date', 'Card Number'];

const Visitors = (props) => {
  const [data, setData] = useState({ initialState: initialState, editing: false });
  const { gettingData, getVisitors, createVisitor, removeVisitor, editVisitor, visitors } = props;

  const onHandleEdit = (data) => {
    setData({ initialState: { ...data, createdDate: formatDate(data.createdDate) }, editing: true });
  }

  const onCancelEdit = () => {
    setData({ initialState: initialState, editing: false })
  }

  useEffect(() => {
    getVisitors();
  }, []);

  return (
    <div className="container">
      <div className="leftSide">
        <VisitorForm data={data} create={createVisitor} edit={editVisitor} cancelEdit={onCancelEdit}/>
      </div>
      <div className="list">
        {gettingData
          ?
          <img src={loading} alt="loading" style={{ marginTop: "31vh" }} />
          :
          <DataTable type="visitors" tableNames={tableNames} remove={removeVisitor} update={onHandleEdit} items={visitors} />}
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


