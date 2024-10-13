// Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; 

const Layout = () => {
  return (
    <div >
      {/* This is your persistent StoreNavigation */}
      <Navbar /> 
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
