import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getStatusThunk, getRoomsThunk, createRoomThunk, removeRoomThunk, editRoomThunk } from '../../thunks';
import './rooms.styles.css';
import loading from '../../images/loading.svg';
import RoomForm from '../../components/RoomForm/RoomForm';
import Status from '../../components/Status/Status';
import DataTable from '../../components/DataTable/DataTable';

const initialState = { floor: "", beds: "", balcony: false, roomId: "" };
const tableNames = ['#ID',	'Booked', 'Floor',	'Beds',	'Balcony',	'Number'];

const Rooms = (props) => {
  const [ data, setData ] = useState({initialState: initialState, editing: false})
  const { getStatus, getRooms, gettingStatus, gettingData, createRoom, removeRoom, editRoom } = props;

  const onHandleEdit = (data) => {
    setData({initialState: data, editing: true});
  }

  const onCancelEdit = () => {
    setData({initialState: initialState, editing: false})
  }

  useEffect(() => {
    getRooms();
    getStatus();
  }, []);
  
  return (
    <div className="container">
      <div className="leftSide">
        <Status status={props.status} gettingStatus={gettingStatus} />
        <RoomForm data={data} create={createRoom} edit={editRoom} cancelEdit={onCancelEdit}/>
      </div>
      <div className="list">
        {gettingData
          ?
          <img src={loading} alt="loading" style={{marginTop: "31vh"}} />
          :
          <DataTable tableNames={tableNames} remove={removeRoom} update={onHandleEdit} items={props.rooms} />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    rooms: { status, gettingStatus, rooms, gettingData }
  } = state;
  return {
    status,
    gettingStatus,
    rooms,
    gettingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStatus: () => {
      dispatch(getStatusThunk())
    },
    getRooms: () => {
      dispatch(getRoomsThunk())
    },
    createRoom: (data) => {
      dispatch(createRoomThunk(data))
    },
    removeRoom: (id) => {
      dispatch(removeRoomThunk(id))
    },
    editRoom: (data) => {
      dispatch(editRoomThunk(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
