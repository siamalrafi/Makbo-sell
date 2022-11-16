import React from 'react';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option;

    return (
        <div>
            <div className="card mt-10 bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}available</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;