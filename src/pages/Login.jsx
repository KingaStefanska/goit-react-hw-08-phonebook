import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser, refreshUser } from 'redux/operations';
import { getIsLogged } from 'redux/selectors';
import Navigation from 'components/Navigation/Navigation';

const Login = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, dispatch, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(
      loginUser({
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
            <button className="buttonLogin" type="submit">
              Login
            </button>
          </div>
        </form>

        <p className="loginText">
          No account yet? <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </>
  );
};

export default Login;
