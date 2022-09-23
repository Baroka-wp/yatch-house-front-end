import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Search from './SearchIcon';
import { AuthContext } from '../context/AuthContext';

const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    background: 'rgb(151 191 15 / 92%)',
  },
};

const MobileNavbar = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { user, dispatch } = useContext(AuthContext);

  const isAdmin = (user) => {
    if (user) {
      return user.data.admin;
    }
    return false;
  };

  const handleLogout = async () => {
    // try {
    //   await axios.delete('http://localhost:3001/users/sign_out');
    // } catch (err) {
    //   console.log(err);
    // }
    dispatch({ type: 'LOGOUT' });
  };

  const links = [
    {
      id: 1,
      path: '/my_reservation',
      text: 'My Reservations',
    },
    {
      id: 2,
      path: '/houses',
      text: 'Houses',
    },
    {
      id: 3,
      path: '/houses/:id/new',
      text: 'Add House',
    },
    {
      id: 4,
      path: '/houses/delete',
      text: 'Delete House',
    },
  ];

  return (
    <>
      <nav className="navBar_mobile">
        <button type="button" onClick={openModal} aria-label="">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button
            type="button"
            className="close_modal"
            onClick={closeModal}
            aria-label=""
          >
            ×
          </button>
          <ul className="navList">
            <li key={links[1].id}>
              <NavLink to={links[1].path} className="active-link">
                <span
                  onClick={closeModal}
                  onKeyDown={closeModal}
                  role="presentation"
                >
                  {links[1].text}
                </span>
              </NavLink>
            </li>
            {
              user && (
                <li key={links[0].id}>
                  <NavLink to={links[0].path} className="active-link">
                    <span
                      onClick={closeModal}
                      onKeyDown={closeModal}
                      role="presentation"
                    >
                      {links[0].text}
                    </span>
                  </NavLink>
                </li>
              )
            }
          </ul>
          <ul className="navList user">
            {isAdmin(user) && (
              <>
                <li key={links[2].id}>
                  <NavLink to={links[2].path} className="active-link">
                    <span
                      onClick={closeModal}
                      onKeyDown={closeModal}
                      role="presentation"
                    >
                      {links[2].text}
                    </span>
                  </NavLink>
                </li>
                <li key={links[3].id}>
                  <NavLink to={links[3].path} className="active-link">
                    <span
                      onClick={closeModal}
                      onKeyDown={closeModal}
                      role="presentation"
                    >
                      {links[3].text}
                    </span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          {
            user && (
              <button
                onClick={() => handleLogout()}
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: '10px', marginTop: '20px' }}
              >
                Log Out
              </button>
            )
          }
        </Modal>

        <button type="button" aria-label="">
          <Search />
        </button>
      </nav>
    </>
  );
};
export default MobileNavbar;
