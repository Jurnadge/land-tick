import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import cssModules from "../assets/css/Home.module.css";
import iklan from "../assets/images/Iklan.png";
import trainIcon from "../assets/images/icons-train.png";
import switchAboard from "../assets/images/switch-aboard.png";

// import component here
import TicketLp from "../component/TicketLandingPage";

//import Modal popup
import LoginModal from "../component/Login";
import SignupModal from "../component/Signup";
import { UserContext } from "../context/userContext";

function Home() {
  const [state, dispatch] = useContext(UserContext);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      {/* Section Ad */}
      <Container fluid className={`${cssModules.container}`}>
        <Row>
          <Col className="ms-5 pt-5">
            <p className={cssModules.h1Text}>Selamat Pagi, Ticket Seekers.</p>
            <div className="ms-3 fs-4">
              <p className={cssModules.pText}>
                Ingin Pulkam dengan Good Deal? <br />
                Masuk atau Daftar Sekarang
              </p>
            </div>
          </Col>

          <Col className="mb-5">
            <div>
              <img alt="" src={iklan} className="mx-auto d-block mt-5" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section Find Ticket */}
      <Container className={`border ${cssModules.containerFindTicket}`}>
        <Form>
          <Row className={``}>
            <Col sm={3} className={`border pt-3 px-0 ${cssModules.train}`}>
              <div className={`border-start border-5 border-warning bg-light`}>
                <p className={`${cssModules.fontAvenir}`}>
                  <img src={trainIcon} alt="" /> Tiket Kereta Api
                </p>
              </div>
            </Col>
            <Col sm={8} className="ms-5 mb-3">
              <h4 className={`mt-2`}>Tiket Kereta Api</h4>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Asal</Form.Label>
                    <Form.Select>
                      <option hidden>From</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col xs={6} className="mt-3">
                      <Form.Group>
                        <Form.Label>Tanggal Berangkat</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Check
                        label="Pulang Pergi"
                        inline
                        className={`mt-3`}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm={1} className="ps-2">
                  <img className={`mt-4`} src={switchAboard} alt="" />
                </Col>
                <Col>
                  <Form.Label>Tujuan</Form.Label>
                  <Form.Select>
                    <option>To</option>
                  </Form.Select>
                  <Row className="mt-3">
                    {" "}
                    <Col>
                      <Form.Label>Dewasa</Form.Label>
                      <Form.Select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Label>Bayi</Form.Label>
                      <Form.Select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Button className={`${cssModules.btnFindTicket}`}>
                        Cari tiket
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Ticket table */}
      <Container className={`mt-5 my-auto d-block`}>
        <Row className="text-center">
          <Col xs={2}>Nama Kereta</Col>
          <Col xs={2}>Berangkat</Col>
          <Col xs={1}></Col>
          <Col xs={2}>Tiba</Col>
          <Col xs={2}>Durasi</Col>
          <Col xs={3}>Harga Per Orang</Col>
        </Row>
      </Container>

      {/* Ticket */}
      <TicketLp
        train="Argo Wilis"
        trainType="Eksekutif(H)"
        departTime="05.00"
        from="Gambir"
        tiba="06.00"
        to="Surabaya"
        hours="1j"
        price="Rp. 250.000"
      />
      <TicketLp
        train="Wilis Argo"
        trainType="Ekonomi(Q)"
        departTime="07.00"
        from="Jakarta"
        tiba="08.00"
        to="Bandung"
        hours="1j"
        price="Rp. 150.000"
      />
      <TicketLp
        train="Anjay Moro"
        trainType="Ekonomi(Q)"
        departTime="08.00"
        from="Bogor"
        tiba="09.00"
        to="Gombong"
        hours="1j"
        price="Rp. 100.000"
      />
    </>
  );
}

export default Home;
