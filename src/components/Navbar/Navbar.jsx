import { getCompanyInfo } from "../../services/api";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCompanyInfo();
        setCompanyData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <header className="bg-transparent inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
      >
        <MobileNavbar company={companyData}/>
        <DesktopNavbar company={companyData}/>
      </nav>
    </header>
  );
}

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
