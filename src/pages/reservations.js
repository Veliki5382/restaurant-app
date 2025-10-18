import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Reservations({ currentUser, addReservation }) {
  const [name, setName] = useState(currentUser ? currentUser.name : '');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

	if(!currentUser) {
		return (
			<div className='page-content'>
				<h2>Rezervacija</h2>
				<p>Morate biti prijavljeni, da biste napravili rezervaciju. </p>
        <Link to="/login" className="button-link">Prijavite se</Link>
			</div>
		)
	}

  const handleSubmit = (e) => {
    e.preventDefault(); // Sprecava osvezavanje stranice
    if (!name || !date || !time) {
      alert('Molimo popunite sva polja.');
      return;
    }
    const newReservation = {
      id: Date.now(), // Jednostavan nacin za generisanje unikatnog ID-a
      name,
      numberOfPeople,
      date,
      time,
    };
    addReservation(newReservation);
    alert(`Uspešno ste rezervisali sto za ${name}.`);
    // Resetovanje forme
    setName('');
    setNumberOfPeople(1);
    setDate('');
    setTime('');
  };

  return (
    <div className="page-content">
      <h2>Napravite Rezervaciju</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Ime i prezime:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Broj osoba:
          <input type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} min="1" />
        </label>
        <label>
          Datum:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Vreme:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="submit">Rezerviši</button>
      </form>
    </div>
  );
}

export default Reservations;