import { Button, Modal, Col, Row, Container } from "react-bootstrap";
import train from "../assets/images/train-facing-right2-white.svg";
import barcodeKecil from "../assets/images/qr-codekecil.svg";
import buktiTf from "../assets/images/bukti-transfer.png";
import cssModules from "../assets/css/ModalInvoiceAdmin.module.css";

export default function ModalInvoice({ showInvoice, showModalInvoice }) {
  const handleClose = () => showModalInvoice(false);

  return (
    <>
      <Modal show={showInvoice} onHide={handleClose} size="lg">
        <Modal.Header closeButton className="">
          <Modal.Title className="p-0">
            <div className={`${cssModules.logo}`}>
              <p className={`${cssModules.landtick}`}>
                LandTick <img src={train} alt="" />
              </p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="ms-2">
          <h1>Invoice</h1>
          <p>Kode Invoice: INV0101</p>
          <br />

          <Row>
            <Col>
              <h3>Kereta Api</h3>
              <p>Saturday, 21 February</p>
              <br />
              <br />
              <h4>Argo Wilis</h4>
              <p>Eksekutif (H)</p>
            </Col>
            <Col>
              <img src={barcodeKecil} alt="" />
              <p style={{ fontSize: "12px" }}>TCK0101</p>
            </Col>
            <Col>
              <img src={buktiTf} alt="" />
              <p className="ms-3">uploud payment proof</p>
            </Col>
          </Row>
          <Row>
            <Col xs={1}>
              <div></div>
            </Col>
            <Col xs={3}>
              <p>
                05.00 <p style={{ fontSize: "12px" }}>21 February 2020</p>
              </p>
              <br />
              <br />
              <p>
                06.00 <p style={{ fontSize: "12px" }}>21 February 2020</p>
              </p>
            </Col>
            <Col xs={3}>
              <p>
                Jakarta (GME)<p style={{ fontSize: "12px" }}>Stasiun Gambir</p>
              </p>
              <br />
              <br />
              <p>
                Surabaya <p style={{ fontSize: "12px" }}>Stasiun Surabaya</p>
              </p>
            </Col>
            <Container className="border-top border-bottom border-dark">
              <Row className="">
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
              </Row>
              <Row>
                <Col>
                  <p>31175033003970001l</p>
                </Col>
                <Col>
                  <p>Anto</p>
                </Col>
                <Col>
                  <p>083898127361</p>
                </Col>
                <Col>
                  <p>anto@bapakmu.com</p>
                </Col>
              </Row>
            </Container>

            <Container className="mt-3 bg-secondary">
                <Row>
                    <Col><h2>Total</h2></Col>
                    <Col><h2 className="text-end text-danger">Rp. 250.000</h2></Col>
                </Row>
            </Container>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
