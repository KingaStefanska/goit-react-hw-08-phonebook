import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser, refreshUser } from 'redux/operations';
import { getIsLogged } from 'redux/selectors';
import Navigation from 'components/Navigation/Navigation';

const Register = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged === true) {
      navigate('/');
    }
  }, [isLogged, dispatch, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
            />
          </div>
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div>
            <button className="buttonRegister" type="submit">
              Register
            </button>
          </div>
        </form>
        <p className="registerText">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </>
  );
};

export default Register;
