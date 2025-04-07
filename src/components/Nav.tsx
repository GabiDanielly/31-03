//pages/components/Nav.tsx
import { Link } from "react-router-dom"
export function Nav(){
    return(
        <nav className="nav">
            <Link to ="/">Inicio</Link>
            <Link to ="/about">Sobre</Link>
            <Link to ="/Login"> Login</Link>
        </nav>
    )
}