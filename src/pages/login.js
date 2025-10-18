import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';


function Login({ onLogin, currentUser, onLogout }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate();

	if(currentUser) {
		return (
			<div className='page-content'>
				<h2>Prijava</h2>
				<p> Prijavljeni ste kao {currentUser.name}.</p>
				<div className='login-actions'>
					<Link to="/profile" className="button-link">Poseti profil</Link>
          <button onClick={() => { onLogout(); }} className="button-link-alt">
            Odjavi se
          </button>
        </div>
			</div>
		)
	}



	const handleLoginSubmit = (e) => {
		e.preventDefault();
		setError('');
		const success = onLogin(username, password);
		if(success) {
			navigate('/');
		}
		else {
			setError("Netačni korisničko ime ili lozinka.")
		}
	}

  return (
    <div className="page-content">
      <h2>Prijava</h2>
      <form onSubmit={handleLoginSubmit} className="login-form">
        <label>
          Korisničko ime:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Lozinka:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
				{error && <p className="error-message">{error}</p>}
				<button type="submit" className='button-link-alt'>Prijavi se</button>	
      </form>
			<h2>I dalje nemaš nalog?</h2>
			<Link to='/register' className='button-link'>Registruj se</Link>
    </div>
  );
}

export default Login;