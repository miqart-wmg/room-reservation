import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatusThunk, getRoomsThunk } from '../../thunks';

class Rooms extends Component {

  componentDidMount() {
    const { rooms, getStatus, status } = this.props;
    getStatus();   
  }

  render() {
    return (
      <div>
        {this.props.status.rooms}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { 
    rooms: { status, getttingStatus, rooms, gettingRooms }
   } = state;
  return {
    status,
    getttingStatus,
    rooms,
    gettingRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStatus: () => {
      dispatch(getStatusThunk())
    },
    getRooms: () => {
      dispatch(getRoomsThunk())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
