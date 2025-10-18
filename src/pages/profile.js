import React from 'react';
import { Link } from 'react-router-dom';

function Profile({ reservations, currentUser }) {
  if (!currentUser) {
		return (
			<div className='page-content'>
				<h2>Profil</h2>
				<p>Morate biti prijavljeni da biste videli profil. </p>
				<Link to="/login" className="button-link">Prijavite se</Link>
			</div>
		)
	}

	const userReservations = reservations.filter(res => res.name === currentUser.name);
  
	return (
    <div className="page-content">
      <h2>Korisnički Profil</h2>
      <p>Ime: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>

      <hr />

      <h3>Istorija Rezervacija</h3>
      {userReservations.length > 0 ? (
        <ul>
          {userReservations.map(res => (
            <li key={res.id}>
              Rezervacija na ime <strong>{res.name}</strong> za {res.numberOfPeople} osoba, dana {res.date} u {res.time}.
            </li>
          ))}
        </ul>
      ) : (
        <p>Nemate nijednu rezervaciju.</p>
      )}
    </div>
  );
}

export default Profile;