import { Outlet } from "react-router-dom";

// import Footer from "../Footer";
import AdminHeader from "../AdminHeader";



const AdminLayout = () => {
  return (
    <>
<AdminHeader/>
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};

export default AdminLayout;
