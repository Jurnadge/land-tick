import { Container, Form, Button, Modal } from "react-bootstrap";
import cssModules from "../assets/css/LoginSignup.module.css";


export default function SignupModal({ show, showLogin, showSignup }) {
  const handleClose = () => showSignup(false);
  const changeModal = () => {
    handleClose();
    showLogin(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Container className={cssModules.modalSize}>
          <Modal.Title className="text-center pt-4 pb-5 fs-3">
            Signup
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Full Name" autofocus />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Select aria-label="Default select example">
                  <option hidden>Gender</option>
                  <option value="1">Man</option>
                  <option value="2">Women</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control as="textarea" rows={3} placeholder="Address" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button className={cssModules.btnModalLogSign}>Signup</Button>
              </div>
              <p className="text-center">
                Have an account?
                <b
                  variant="link"
                  onClick={changeModal}
                  style={{
                    cursor: "pointer"
                  }}
                >
                  Login
                </b>
              </p>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
}
