import { Modal, ModalBody } from "react-bootstrap";

export default function notifAddTicket({showNotif, showModalNotif}) {
  const handleClose = () => showModalNotif(false);
  
  return (
    <>
      <Modal show={showNotif} onHide={handleClose}>
        <ModalBody>
          <p className="text-center">
            Tiket anda berhasil di tambahkan silahkan segera melakukan
            pembayaran klik <b>disini</b>
          </p>
        </ModalBody>
      </Modal>
    </>
  );
}
