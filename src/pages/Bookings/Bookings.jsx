import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBookingsThunk, createBookingThunk, removeBookingThunk, editBookingThunk } from '../../thunks';
import loading from '../../images/loading.svg';
import DataTable from '../../components/DataTable/DataTable';
import BookingForm from '../../components/BookingForm/BookingForm';

const tableNames = ['#', 'Person Name', 'Room ID', 'Booked', 'Person ID'];

const Bookings = (props) => {
console.log(props.bookings);
  const { gettingData, getBookings, createBooking, removeBooking, editBooking } = props;

  useEffect(() => {
    getBookings();
  }, []);

  console.log("LOG", props.bookings);

  return (
    <div className="container">
      <div className="leftSide">
        <BookingForm />
      </div>
      <div className="list">
        {gettingData
          ?
          <img src={loading} alt="loading" style={{ marginTop: "31vh" }} />
          :
          <DataTable tableNames={tableNames} remove={removeBooking} update={() => { }} items={props.bookings} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("STATEAAS", state);
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);


