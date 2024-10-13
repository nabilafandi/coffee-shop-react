// Layout.js
import { Outlet } from 'react-router-dom';
import StoreNavigation from '../components/StoreNavigation'; 

const ShopLayout = () => {
  return (
    <div className="flex">
      <StoreNavigation />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default ShopLayout;
