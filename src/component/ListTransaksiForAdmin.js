import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import searchButton from "../assets/images/search.svg";
import editButton from "../assets/images/editbutton.svg";
import trashButton from "../assets/images/trash.svg";
import ModalEditStatus from "./ModalEditStatus";
import ModalInvoiceAdmin from "./ModalInvoiceAdmin";

export default function ListTransaksiAdmin() {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalInvoice, setShowModalInvoice] = useState(false);
  return (
    <>
      <hr style={{ width: "85%", margin: "auto" }} />
      <Container className="mt-3">
        <Row>
          <Col>
            <p>1.</p>
          </Col>
          <Col>
            <p>Anto</p>
          </Col>
          <Col>
            <p>Surabaya-Jakarta</p>
          </Col>
          <Col>
            <p>bca.jpg</p>
          </Col>
          <Col>
            <p>Pending</p>
          </Col>
          <Col>
            <img
              src={searchButton}
              alt=""
              className="me-4"
              onClick={() => setShowModalInvoice(true)}
              style={{ cursor: "pointer" }}
            />
            <img
              src={editButton}
              alt=""
              className="me-4"
              onClick={() => setShowModalEdit(true)}
              style={{ cursor: "pointer" }}
            />
            <img src={trashButton} alt="" />
          </Col>
        </Row>
      </Container>

      <ModalEditStatus
        showEdit={showModalEdit}
        showModalEdit={setShowModalEdit}
      />
      <ModalInvoiceAdmin
        showInvoice={showModalInvoice}
        showModalInvoice={setShowModalInvoice}
      />
    </>
  );
}
