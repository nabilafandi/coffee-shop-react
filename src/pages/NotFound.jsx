import { Link } from "react-router-dom";
import Navbar from "../components/Navbartw";

const NotFound = () => {
  return (
    
    <div>
      <Navbar />

      404 NotFound
      <br />
      <Link to="/">Home Link</Link>
    </div>
  );
};

export default NotFound;
