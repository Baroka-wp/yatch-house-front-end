import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './registration.css';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';
import logo from '../../img/Yatch-House.png';

const Registration = () => {
  const [userInfo, setUserInfo] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setUserInfo((prev) => ({ ...prev, telephone: phoneNumber }));

    try {
      axios.post('http://localhost:3001/users', { user: userInfo });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="user_auth_container">
      <div className="login_header">
        <img src={logo} alt="logo" />
        <h3> Sign up </h3>
      </div>
      <div className="col-md-5 login_registration_form">
        <Form style={{ marginBottom: '20px' }}>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="Nom">Numéro de téléphone</Label>
                <PhoneInput
                  country="fr"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  inputProps={{
                    name: 'Télephone',
                    required: true,
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  type="name"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Password confirmation
                </Label>
                <Input
                  id="password confirmation"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <button
            onClick={handleClick}
            className=" btn btn-sm btn-primary"
            type="submit"
          >
            Sign up
          </button>
        </Form>
        <Link to="/login">
          Sign in
        </Link>
      </div>
      <div className="login_footer">
        <p>© 2022 Yatch House</p>
      </div>
    </div>
  );
};

export default Registration;
