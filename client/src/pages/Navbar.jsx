import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/"><HiHome /></Link></li>
          <li><Link to="/pesquisa">Pesquisa</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li className="link-logout"><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;