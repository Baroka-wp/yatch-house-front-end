import { useContext, useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import {
  FormGroup, Label, Input, Row, Col,
} from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../img/Yatch-House.png';

const Login = () => {
  const [credential, setCredential] = useState({
    email: undefined,
    password: undefined,
  });

  const { error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [isLoading, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('https://my-yatch-house.herokuapp.com/users/sign_in',
        { user: credential });
      console.log(res);
      if (res.data.data.id != null) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        navigate('/houses');
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: res.data });
        setShow(false);
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
      setShow(false);
    }
  };

  return (
    <div className="user_auth_container">
      <div className="login_header">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <h3> Login </h3>
      </div>
      <div className="col-md-5 login_registration_form">
        {error && (
          <span className="text-danger">Password or email is incorrect</span>
        )}
        <hr />
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  onChange={handleChange}
                  aria-label="email-input"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  onChange={handleChange}
                  aria-label="password-input"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <button
            disabled={isLoading}
            className=" btn btn-sm btn-primary"
            type="submit"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <Link to="/registration">Sign up</Link>
      </div>
      <div className="login_footer">
        <p>
          ©
          {new Date().getFullYear()}
          {' '}
          Yatch House
        </p>
      </div>
    </div>
  );
};

export default Login;
