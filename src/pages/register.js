import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !password) {
      setError('Sva polja su obavezna.');
      return;
    }

    // Pozivamo onRegister funkciju koju smo dobili iz App.js
    const success = onRegister(name, username, password);

    if (success) {
      alert('Uspešno ste se registrovali! Sada se možete prijaviti.');
      navigate('/login'); // Preusmeravamo korisnika na stranicu za prijavu
    } else {
      setError('Korisničko ime već postoji. Molimo izaberite drugo.');
    }
  };

  return (
    <div className="page-content">
      <h2>Registracija</h2>
      <form onSubmit={handleRegisterSubmit} className="login-form">
        <label>
          Korisničko ime:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Lozinka:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <a className='hline'></a>
        <label>
          Ime i prezime:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="button-link">Registruj se</button>
      </form>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Već imate nalog? <Link to="/login">Prijavite se</Link>
      </p>
    </div>
  );
}

export default Register;
