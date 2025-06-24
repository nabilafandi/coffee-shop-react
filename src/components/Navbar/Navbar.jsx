export default function Navbar() {
  return (
    <header className="bg-transparent inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
      >
        <MobileNavbar />
        <DesktopNavbar />
      </nav>
    </header>
  );
}

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";