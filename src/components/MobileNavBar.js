import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  content: {
    top: '35%',
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

  const links = [
    {
      id: 1,
      path: '/',
      text: 'HOME',
    },
    {
      id: 2,
      path: '/reservation',
      text: 'RESERVATION',
    },
    {
      id: 3,
      path: '/admins/login',
      text: 'Sign In',
    },
    {
      id: 4,
      path: '/admins/registration',
      text: 'Register',
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

          <button type="button" className="close_modal" onClick={closeModal} aria-label="">×</button>
          <ul className="navList">
            <li key={links[0].id}>
              <NavLink to={links[0].path} className="active-link">
                <span onClick={closeModal} onKeyDown={closeModal} role="presentation">{links[0].text}</span>
              </NavLink>
            </li>
            <li key={links[1].id}>
              <NavLink to={links[1].path} className="active-link">
                <span onClick={closeModal} onKeyDown={closeModal} role="presentation">{links[1].text}</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navList user">
            <li key={links[2].id}>
              <NavLink to={links[2].path} className="active-link">
                <span onClick={closeModal} onKeyDown={closeModal} role="presentation">{links[2].text}</span>
              </NavLink>
            </li>
            <li key={links[3].id}>
              <NavLink to={links[3].path} className="active-link">
                <span onClick={closeModal} onKeyDown={closeModal} role="presentation">{links[3].text}</span>
              </NavLink>
            </li>
          </ul>
        </Modal>

        <button type="button" aria-label="">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </nav>
    </>
  );
};
export default MobileNavbar;
