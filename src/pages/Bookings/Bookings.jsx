import React from 'react';
import loading from '../../images/loading.svg';
import DataTable from '../../components/DataTable/DataTable';
import BookingForm from '../../components/BookingForm/BookingForm';

const Bookings = (props) => {
    return (
        <div className="container">
          <div className="leftSide">
            <BookingForm />
          </div>
          <div className="list">
            {/* {""
              ?
              <img src={loading} alt="loading" style={{marginTop: "31vh"}} />
              :
              <DataTable remove={() => {}} update={() => {}} rooms={props.rooms} />} */}
          </div>
        </div>
      );
}

export default Bookings;

