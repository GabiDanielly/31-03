// components/Nav.tsx

import './Nav.css';
import { Link } from 'react-router-dom';
export function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Início</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/login">Login</Link>
      <Link to="/registro">Registro</Link>
    </nav>
  );
}
