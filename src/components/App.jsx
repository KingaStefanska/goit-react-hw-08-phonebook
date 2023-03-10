import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { refreshUser } from 'redux/operations';
import { getIsLogged } from 'redux/selectors';
import css from './App.module.css';

function App() {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <div>
        <section className={css.container}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                isLogged ? <Contacts /> : <Navigate replace to={'login'} />
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
