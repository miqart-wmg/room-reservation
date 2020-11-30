import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBookingsThunk, createBookingThunk, removeBookingThunk, editBookingThunk, getVisitorsThunk, getRoomsThunk } from '../../thunks';
import loading from '../../images/loading.svg';
import DataTable from '../../components/DataTable/DataTable';
import BookingForm from '../../components/BookingForm/BookingForm';
import { formatDate } from '../../API/customFunc';

const initialState = { personName: "", roomNumber: "", personId: "", bookedAt: "" };
const tableNames = ['#', 'Person Name', 'Room ID', 'Booked', 'Person ID'];

const Bookings = (props) => {
  const [data, setData] = useState({ initialState: initialState, editing: false });
  const { gettingData, getBookings, createBooking, removeBooking, editBooking, getVisitors, getRooms, bookings } = props;

  const onHandleEdit = (data) => {
    setData({ initialState: { ...data, bookedAt: formatDate(data.bookedAt) }, editing: true });
  }

  const onCancelEdit = () => {
    setData({ initialState: initialState, editing: false })
  }

  useEffect(() => {
    getBookings();
    getVisitors();
    getRooms();
  }, []);

  return (
    <div className="container">
      <div className="leftSide">
        <BookingForm data={data} create={createBooking} edit={editBooking} cancelEdit={onCancelEdit} />
      </div>
      <div className="list">
        {gettingData
          ?
          <img src={loading} alt="loading" style={{ marginTop: "31vh" }} />
          :
          <DataTable type="bookings" tableNames={tableNames} remove={removeBooking} update={onHandleEdit} items={bookings} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    bookings: { bookings, gettingData }
  } = state;
  return {
    bookings,
    gettingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookings: () => {
      dispatch(getBookingsThunk())
    },
    createBooking: (data) => {
      dispatch(createBookingThunk(data))
    },
    removeBooking: (id) => {
      dispatch(removeBookingThunk(id))
    },
    editBooking: (data) => {
      dispatch(editBookingThunk(data))
    },
    getVisitors: () => {
      dispatch(getVisitorsThunk())
    },
    getRooms: () => {
      dispatch(getRoomsThunk())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);


