import Header from "./component/Header";
import Home from "./pages/Home";
import TicketSaya from "./pages/User/Ticketsaya";
import BillsUser from "./pages/User/Bills";
import ListTransaksi from "./pages/Admin/ListTransaksi";
import TambahTicket from "./pages/Admin/TambahTicket";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateroute/PrivateRoute";

function App() {
  return (
    // define <BrowserRouter> as parent element
    <>
      {/* Start of Routes */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/ticketsaya" element={<TicketSaya />} />
          <Route path="/bills" element={<BillsUser />} />
          <Route path="/listtransaksiadmin" element={<ListTransaksi />} />
          <Route path="/tambahticketadmin" element={<TambahTicket />} />
        </Route>
      </Routes>
      {/* {End of Routes} */}
    </>
  );
}

export default App;
