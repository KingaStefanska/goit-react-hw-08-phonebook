import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
      <p className={css.title}>Redux Phonebook</p>
    </div>
  );
};

export default Navigation;
