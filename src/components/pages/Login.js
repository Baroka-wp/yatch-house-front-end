import { useContext, useState } from 'react';
import axios from 'axios';
import {
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [credential, setCredential] = useState({
    username: undefined,
    password: undefined,
  });

  const {
    user, loading, error, dispatch,
  } = useContext(AuthContext);

  console.log(user);
  console.log(loading);

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:3001/users/sign_in', credential);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
    }
  };

  return (
    <div className="col-md-5 login_registration_form">
      <h3> Login </h3>
      <hr />
      <form>
        <Row>
          <Col md={12}>
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
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="password">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button
          onClick={handleClick}
          color="primary"
          type="submit"
        >
          Login
        </Button>
        {error && <span className="text-danger">{error}</span>}
      </form>
    </div>
  );
};

export default Login;
