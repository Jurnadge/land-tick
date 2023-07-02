import { Container, Button, Form, Modal } from "react-bootstrap";
import cssModules from "../assets/css/LoginSignup.module.css";

import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ show, showLogin, showSignup }) {
  const handleClose = () => showLogin(false);
  const changeModal = () => {
    handleClose();
    showSignup(true);
  };

  const [login, setLogin] = useState({});

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    let status;
    if (username === "admin123", password === "admin123") {
      dispatch({
        type: "ADMIN_LOGIN_SUCCESS",
        status: true,
        payload: username,
      });
      alert("admin")
      navigate("/listtransaksiadmin");
    } else {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        status: false,
        payload: username,
      });
      alert("user")
      navigate("/");
    }


  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Container className={cssModules.modalSize}>
          <Modal.Title className="text-center pt-4 pb-5 fs-3">
            Login
          </Modal.Title>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2 pb-2">
                <Button
                  className={cssModules.btnModalLogSign}
                  type="submit"
                  onClick={handleClose}
                >
                  Login
                </Button>
              </div>
              <div>
                <p className="text-center">
                  Didnt have an account? Register{" "}
                  <b
                    variant="link"
                    onClick={changeModal}
                    style={{ cursor: "pointer" }}
                  >
                    here
                  </b>
                </p>
              </div>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
}
