import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <h1>Essa é a Navbar</h1>
      <Link to="/pesquisa">
        <button>Ir para Pesquisa</button>
      </Link>
    </>
  )
}

export default Navbar;