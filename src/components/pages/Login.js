import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../img/Yatch-House.png';

const Login = () => {
  const [credential, setCredential] = useState({
    email: undefined,
    password: undefined,
  });

  const {
    loading, error, dispatch,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:3001/users/sign_in',
        { user: credential });
      console.log(res);
      if (res.data.data.id != null) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        navigate('/houses');
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: res.data });
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
    }
  };

  return (
    <div className="user_auth_container">
      <div className="login_header">
        <img src={logo} alt="logo" />
        <h3> Sign in </h3>
      </div>
      <div className="col-md-5 login_registration_form">
        {error && (<span className="text-danger">Password or email is incorrect</span>)}
        <hr />
        <form style={{ marginBottom: '20px' }}>
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
                  id="password"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <button
            disabled={loading}
            onClick={handleClick}
            className=" btn btn-sm btn-primary"
            type="submit"
          >
            Login
          </button>
        </form>
        <Link to="/registration">
          Sign up
        </Link>
      </div>
      <div className="login_footer">
        <p>© 2022 Yatch House</p>
      </div>
    </div>
  );
};

export default Login;
