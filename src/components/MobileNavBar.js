import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '25%',
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
      text: 'RESERVATIONS',
    },
    {
      id: 3,
      path: '/contact',
      text: 'CONTACT',
    },
  ];

  return (
    <>
      <nav className="navBar">
        <button type="button" onClick={openModal} aria-label={<FontAwesomeIcon icon={faBars} />}><FontAwesomeIcon icon={faBars} /></button>
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
                <span onClick={closeModal}>{links[0].text}</span>
              </NavLink>
            </li>
            <li key={links[1].id}>
              <NavLink to={links[1].path} className="active-link">
                <span onClick={closeModal}>{links[1].text}</span>
              </NavLink>
            </li>
            <li key={links[2].id}>
              <NavLink to={links[2].path} className="active-link">
                <span onClick={closeModal}>{links[2].text}</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navList logout">
            <li key={4}>
              <NavLink to="logout" className="active-link">
                Sign Out
              </NavLink>
            </li>
          </ul>
        </Modal>
      </nav>
    </>
  );
};
export default MobileNavbar;
