import { useEffect } from 'react';
import { useOutletContext, Navigate } from 'react-router-dom';
import { Heading, Main, Table } from '../../../../components';
import './ConfirmedBooking.css';

export const ConfirmedBooking = () => {
  const { data, stage } = useOutletContext() ?? { data: {}, stage: '' };

  const columns = Object.entries(data).map(([key, val], i) => ({
    id: i + 1,
    name: key,
    label: key.toUpperCase(),
  }));

  /** Store in DB in production */
  useEffect(() => {
    if (stage === 'Thank You') {
      try {
        localStorage.setItem(data.booking_id, JSON.stringify(data));
        const response = localStorage.getItem(data.booking_id);
        if (response) {
          console.log('Successfully added to Local Storage');
        } else throw new Error('Could not add to Local Storage');
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [data, stage]);

  return stage === 'Thank You' ? (
    <Main>
      <section className="LL-BookingConfirmation">
        <Heading size="xl">Booking Confirmed</Heading>
        <p>
          We are pleased to inform you that your reservation request has been
          received and confirmed.
        </p>
      </section>

      <section id="LL-BookingDetails">
        <Heading size="lg">Booking Details</Heading>
        <Table rows={[data]} columns={columns} />
      </section>
    </Main>
  ) : (
    <Navigate to="/bookings" />
  );
};
