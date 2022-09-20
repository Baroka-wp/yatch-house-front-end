import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './registration.css';
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
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="user_auth_container">
      <div className="login_header">
        <img src={logo} alt="logo" />
        <h3> Add New User </h3>
      </div>
      <div className="col-md-5 login_registration_form">
        <Form>
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
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Password confirmation
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="login_footer">
        <p>© 2022 Yatch House</p>
      </div>
    </div>
  );
};

export default Registration;
