import './Header.scss';
import Logo from './logo.webp'

export default function Header() {

    return (
        <header>
            <img src={Logo} alt='Logo de la radio associative Gascogne FM' />
        </header>
    )
}