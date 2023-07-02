import { Container, Row, Col, Button } from "react-bootstrap";
import peringatin from "../../assets/images/error.svg";
import qrcode from "../../assets/images/qr-codekecil.svg";
import train from "../../assets/images/train-facing-right2-white.svg";
import cssModules from "../../assets/css/Bills.module.css";

export default function BillsUser() {
  return (
    <>
      <Container className="mt-5">
        <h1>Invoice</h1>
        <Row>
          <Col>
            <Container>
              {/* Left */}
              <Row>
                <Col xs={7}>
                  <Container className="border rounded bg-body-secondary">
                    <Row>
                      <Col xs={2}>
                        <img className="mt-4 ms-4" src={peringatin} alt="" />
                      </Col>
                      <Col>
                        <p>
                          Silahkan melakukan pembayaran melalui M-Banking,
                          E-Banking, dan ATM ke No.rek yang Tertera
                        </p>
                        <p>No. rek : 09127831646</p>
                      </Col>
                    </Row>
                  </Container>
                  {/* info user */}
                  <Container className="border rounded mt-2">
                    <Row>
                      <Col>
                        <div className={`${cssModules.logo}`}>
                          <p className={`${cssModules.landtick} ms-2`}>
                            LandTick
                            <img src={train} alt="" />
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <p className={`${cssModules.fsp}`}>
                          No. Tanda Pengenal
                        </p>
                      </Col>
                      <Col>
                        <p className={cssModules.fsp}>Nama Pemesanan</p>
                      </Col>
                      <Col>
                        <p className={cssModules.fsp}>No. Handphone</p>
                      </Col>
                      <Col>
                        <p className={cssModules.fsp}>Email</p>
                      </Col>
                    </Row>
                    <Row className="border-top border-1">
                      <Col>
                        <p className={cssModules.fsp}>1231349712347</p>
                      </Col>
                      <Col>
                        <p className={cssModules.fsp}>Anto</p>
                      </Col>
                      <Col>
                        <p className={cssModules.fsp}>0808080808</p>
                      </Col>
                      <Col>
                        <p className={cssModules.fsp}>anto@bapakmu.com</p>
                      </Col>
                    </Row>
                  </Container>
                  <h3 className="mt-3">Rincian Harga</h3>
                  <Container>
                    <Row>
                      <Col xs={8} className="border rounded mt-2">
                        {" "}
                        <Row className="mt-2">
                          <Col>
                            <p>Argo Wilis (Dewasa)x1</p>
                          </Col>
                          <Col className="text-center">
                            <p>Rp. 250.000</p>
                          </Col>
                        </Row>
                        <Row className="bg-body-secondary">
                          <Col className="mt-2">
                            <h3>Total</h3>
                          </Col>
                          <Col className="text-center mt-2">
                            <h3>Rp. 250.000</h3>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                  <Button size="sm" className="mt-3">
                    Bayar
                  </Button>
                </Col>
                <Col>
                  {" "}
                  {/* Right */}
                  <Container className="border">
                    <Row className="bg-body-secondary">
                      <Col className="mt-2">
                        <h3 className="mt-3 ms-3">
                          Kereta Api
                          <p style={{ fontSize: "14px" }}>
                            Saturday, 21 February 2020
                          </p>
                        </h3>
                      </Col>
                      <Col className="text-end">
                        <img src={qrcode} alt="" className="mt-4 me-4" />
                        <p className="me-3">INV0101</p>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <h4>Argo Wilis</h4>
                        <p>Eksekutif (H)</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={1}>
                        <div></div>
                      </Col>
                      <Col>
                        <p>
                          05.00 <p>21 February 2020</p>
                        </p>
                        <br />
                        <br />
                        <p>
                          06.00<p>21 February 20202</p>
                        </p>
                      </Col>
                      <Col>
                        <p>
                          Jakarta (GMR)<p>Stasiun Gambir</p>
                        </p>
                        <br />
                        <br />
                        <p>
                          Surabaya (SBY)<p>Stasiun Surabaya</p>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
