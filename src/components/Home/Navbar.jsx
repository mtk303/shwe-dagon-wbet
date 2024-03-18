import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Table,Button,Form } from 'react-bootstrap';
import logo from '../../assets/img/logo1.png';
import flag from '../../assets/img/myanmar_flag.png'
import axios from 'axios';
import { useForm } from "react-hook-form";
import BASE_URL from '../../hooks/baseURL';
import '../../assets/css/navbar.css';
import useFetch from '../../hooks/useFetch';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [wallets, setWallets] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [smallLoad, setSmallLoad] = useState(false);

  // for login
  const [showone, setShowone] = useState(false);

  const handleCloseone = () => setShowone(false);
  const handleShowone = () => setShowone(true);
  

  const navigate = useNavigate();

  // const [auth, setAuth] = useState();
  const auth = localStorage.getItem('authToken');
  const url = auth ? `${BASE_URL}/user` : '';
  const { data: authUser } = useFetch(url);

  const [user, setUser] = useState(authUser);
  // const user = authUser;

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

  // console.log(user);
  const balance = user?.balance;
  const formattedBalance =
    user && balance ? parseFloat(balance).toLocaleString() : '';

  const logout = () => {
    // Your logout logic here
    localStorage.removeItem('authToken');
    navigate('/');
  };


  // login
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  // const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  // let auth = localStorage.getItem("authToken");

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = (loginData) => {
    setLoading(true);
    //fetch api for login url
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Log In Failed");
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        if (responseData) {
          const userData = responseData.data.user;
          // console.log(userData);
          localStorage.setItem("authToken", responseData.data.token);
          localStorage.setItem(
            "authUser",
            JSON.stringify({
              userData,
            })
          );
        } else {
          throw new Error("Token not found in response");
        }
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        if (error) {
          setErrorMessage("Phone Or Password is incorrect!");
          setLoading(false);
        }
      });
  };

  

  return (
    <div className='border-bottom py-1 py-md-2 px-2 px-md-5 d-flex flex-wrap align-items-center   justify-content-between'>
      <NavLink
        className='text-decoration-none d-flex navLogo align-items-center '
        to={'/'}
      >
        <h2 className='logo mt-1  ' style={{ color: 'gold' }}>
          <img src={logo} width={45} alt='' />
        </h2>
        <h5 className=' logoTitle ms-2 text-light'>Max Win</h5>
      </NavLink>
      <div className='d-flex justify-content-start'>
        {window.location.pathname === '/' ? (
          <div className='logoIcon d-flex gap-2 gap-sm-4 align-items-center text-white pe-2 '>
            {auth && (
              <div>
                {/* <i class='fa-solid fa-user'></i> */}
                <NavLink to={'/profile'}>
                  <i className='fa-solid fa-user text-light'></i>
                </NavLink>
                <span className=' userText fw-bold ms-1 me-1 ms-sm-2 me-sm-2'>
                  ID :
                </span>
                <span className='userText'>{user?.user_name}</span>
              </div>
            )}
            {auth && (
              <div className='d-flex gap-1 gap-sm-2   align-items-center text-white'>
                {/* <button className="bg-transparent btn" style={{ outline: "none" }}> */}
                <i className='fa-solid fa-wallet text-light'></i>
                {/* </button> */}

                <div>
                  <span className='userText'>{formattedBalance} MMK</span>
                </div>
              </div>
            )}
            {auth && (
              <>
                {/* <NavLink to={'/profile'}>
                <i className='fa-solid fa-user text-light'></i>
              </NavLink> */}
                <button className='btn' onClick={logout}>
                  <i className='fa-solid fa-right-from-bracket text-light'></i>
                </button>
              </>
            )}
            {!auth && (
              <>
                
                  <Button variant="primary" onClick={handleShowone} style={{  border: '2px solid #FFD700',background: 'none', fontSize: '13px', color: '#FFD700', padding: '6px 30px'}}>
                    LOGIN
                  </Button>

                  {/* Modal */}
                  <Modal show={showone} onHide={handleCloseone}>
                    <Modal.Header closeButton >
                      <Modal.Title className='text-white fw-bold'>လော့ဂ်အင်</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {!auth && (
                        
                            <Form
                              noValidate
                              validated={validated}
                              className="w-75 mt-5 mx-auto"
                              onSubmit={handleSubmit(onSubmit)}
                            >
                              {errorMessage && (
                                <div
                                  className="alert alert-danger mt-2"
                                  role="alert"
                                  style={{ fontSize: "14px" }}
                                >
                                  {errorMessage}
                                </div>
                              )}

                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-warning fw-bolder">
                                  Player Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="ကျေးဇူးပြု၍ အသုံးပြုသူအမည်ကို ထည့်သွင်းပါ။"
                                  {...register("user_name", {
                                    required: "Name is Required.",
                                  })}
                                  className={`${errors.name && "border-2 border-danger"}`}
                                />
                                <div className="error text-danger">{errors.name?.message}</div>
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="text-warning fw-bolder">Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="စကားဝှက်ထည့်ပါ။"
                                  {...register("password", {
                                    required: "Password is Required.",
                                  })}
                                  className={`${errors.password && "border-2 border-danger"}`}
                                />
                                <div className="error text-danger">{errors.password?.message}</div>
                              </Form.Group>

                              <div className="text-center">
                                <Button variant="warning" className="w-100 mt-4" type="submit">
                                  Login
                                </Button>
                                {/* <span>အကောင့်မရိသေးပါ/ <Link onClick={handleShow} >မှတ်ပုံတင်</Link></span> */}
                              </div>
                            </Form>
                          

                    )}
                    </Modal.Body>
                  </Modal>

                  
              
              </>
            )}

            
          </div>
        ) : (
          ''
        )}

      <img src={flag} width={'30px'} height={'30px'}  style={{borderRadius:'50%'}} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
