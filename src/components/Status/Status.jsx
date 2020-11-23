import React from 'react';
import loading from '../../images/loading.svg';

const Status = ({ gettingStatus, status }) => {
    const { rooms, booking, visitors } = status;
    return (
        <div className="status-bar">
          {gettingStatus
            ?
            <img src={loading} width="40px" alt="loading" />
            :
            [<div key="r-status">{`Rooms: ${rooms}`}</div>,
            <div key="b-status">{`Bookings: ${booking}`}</div>,
            <div key="v-status">{`Visitors: ${visitors}`}</div>]}
        </div>
    )
}

export default Status;
