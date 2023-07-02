import { Container, Form, Button } from "react-bootstrap";

export default function TambahTicketAdmin() {
  return (
    <>
      <Container>
        <h1 className="mb-5 mt-5">Tambah Ticket</h1>
        <Form>
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Nama Kereta"
          />
          <Form.Select className="mb-4">
            <option hidden>Jenis Kereta</option>
            <option>bla bla</option>
          </Form.Select>
          <Form.Control
            className="mb-4"
            type="date"
            placeholder="Tanggal Keberangkatan"
          />
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Stasiun Keberangkatan"
          />
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Jam Keberangkatan"
          />
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Stasiun Tujuan"
          />
          <Form.Control className="mb-4" type="text" placeholder="Jam Tiba" />
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Harga Ticket"
          />
          <Form.Control className="mb-4" type="number" placeholder="Qty" />
          <div>
            <Button>Save</Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
