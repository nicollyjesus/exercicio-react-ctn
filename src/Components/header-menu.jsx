import './header.css'
const Header = () => {
    return (
        <div>
            <header className="header">
                <nav>
                    <ul className="ul-header">
                        <li className="li-header">Página Inicial</li>
                        <li className="li-header">Sobre nós</li>
                        <li className="li-header">Gastronomia</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
