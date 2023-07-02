import { Container, Row, Col } from "react-bootstrap";
import arrow from "../assets/images/Arrow 5.svg";
import LoginModal from "./Login";
import SignupModal from "./Signup";
import { UserContext } from "../context/userContext";
import NotifAddTicket from "./NotificationAddTicket";

import { useState, useContext } from "react";

// import PropTypes from "prop-types";

const TicketLp = (props) => {
  const [state, dispatch] = useContext(UserContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [showModalNotif, setShowModalNotif] = useState(false);

  // onClick={() => setShowModalNotif(true)}
  // onClick={() => setShowLogin(true)}
  return (
    <>
      <Container
        onClick={
          !state.isLogin
            ? () => setShowLogin(true)
            : () => setShowModalNotif(true)
        }
        className={`mt-3 my-auto d-block border border-3 border-radius pt-3 mb-3`}
      >
        <Row className="text-center">
          <Col xs={2}>
            <p>
              {props.train} <br />
              <p>{props.trainType}</p>
            </p>
          </Col>
          <Col xs={2}>
            <p>
              {props.departTime} <br />
              <p>{props.from}</p>
            </p>
          </Col>
          <Col xs={1} className="p-0">
            <img src={arrow} alt="" />
          </Col>
          <Col xs={2}>
            <p>
              {props.tiba} <br />
              <p>{props.to}</p>
            </p>
          </Col>
          <Col xs={2}>{props.hours}</Col>
          <Col xs={3}>{props.price}</Col>
        </Row>
      </Container>
      <LoginModal
        show={showLogin}
        showLogin={setShowLogin}
        showSignup={setShowSignup}
      />
      <SignupModal
        show={showSignup}
        showLogin={setShowLogin}
        showSignup={setShowSignup}
      />
      <NotifAddTicket
        showNotif={showModalNotif}
        showModalNotif={setShowModalNotif}
      />
    </>
  );
};

// TicketLp.propTypes = {
//   train: PropTypes.string,
//   trainType: PropTypes.string,
//   departTime: PropTypes.string,
//   from: PropTypes.string,
//   tiba: PropTypes.string,
//   to: PropTypes.string,
//   hours: PropTypes.string,
//   price: PropTypes.string

// }

export default TicketLp;
