import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../../assets/images/train-facing-right2-white.svg";
import cssModules from "../../assets/css/Ticketsaya.module.css";

function ticketSaya() {
  return (
    <>
      <Container fluid className="mt-5 ms-5 mb-5">
        <h1>Ticket Saya</h1>
      </Container>

      <Container className={`border border-3 px-0 rounded`}>
        <div className={`ps-3 ${cssModules.logo}`}>
          <p>
            LandTick
            <img src={logo} alt="" />
          </p>
        </div>
        <div className="pe-3" style={{ marginTop: "-25px" }}>
          <h1 className={`text-end`}>
            Kereta Api <br />
            <p className={`fs-6`}>
              <strong>Saturday</strong>, 21 February 2020
            </p>
          </h1>
          <p className="text-end" style={{ marginBottom: "-50px" }}>
            qrcode
            <p>TCK101</p>
          </p>
        </div>
        <Row>
          <Col xs={3}>
            <div className="ms-4">
              <h4>Argo Wilis</h4>
              <p>eksekutif</p>
              <p>Pending</p>
            </div>
          </Col>
          <Col xs={1}>
            <div className={`${cssModules.buletAtas} mt-3`}></div>
            <span
              className={`${cssModules.garisKebawah} border border-1`}
            ></span>
            <div className={``}>a</div>
          </Col>
          <Col xs={2}>
            <p>
              05.00
              <p>21 February 2020</p>
            </p>
            <br />
            <p>
              06.00
              <p>21 February 2020</p>
            </p>
          </Col>
          <Col>
            <p>
              Jakarta (GMR)
              <p>Stasiun Gambir</p>
            </p>
            <br />
            <p>
              Surabaya (SBY)
              <p>Stasiun Surabaya</p>
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>No. Tanda Pengenal</p>
          </Col>
          <Col>
            <p>Nama Pemesanan</p>
          </Col>
          <Col>
            <p>No. Handphone</p>
          </Col>
          <Col>
            <p>Email</p>
          </Col>
          <Col></Col>
        </Row>
        <hr style={{ marginTop: "-10px", width: "80%" }}></hr>
        <Row className="text-center mb-2">
          <Col>
            <p>31175033003970001</p>
          </Col>
          <Col>
            <p>Anto</p>
          </Col>
          <Col>
            <p>080808080808</p>
          </Col>
          <Col>
            <p>anto@bapakmu.com</p>
          </Col>
          <Col>
            <Button>Cetak Ticket</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ticketSaya;
