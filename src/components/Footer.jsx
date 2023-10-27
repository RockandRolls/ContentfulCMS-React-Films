// login and register pg
// import Login from '../pages/Login';

import { Link, NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/trending");
      };

  return (
    <>
        <div className='p-8 text-center bg-black text-white'>
          <h2 className='text-3xl p-7 font-bold text-red-700'>More Movies at cheaper rates !!!</h2>         
          <ul className='text-yellow-500 flex gap-6 pr-10 justify-center text-lg font-semibold'>
              <li>
                <button onClick={handleClick}>Trending</button>
              </li>
              <li>
              <Link to='login'>Login</Link>
              </li>
              <li>
              <NavLink to='signup'
                  style={({ isActive }) => ({ color: isActive && 'red' })}
              >
                  Sign Up
              </NavLink>
              </li>
          </ul>      
          </div>
    </>
  );
};

export default Footer;