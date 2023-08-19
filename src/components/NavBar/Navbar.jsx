import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuIocn = <i class="fa-solid fa-bars"></i>
    const barOnClick = () => {
        let x = document.getElementById("menuBar");
        if (x === "nav") {}
    }
    const change = () => {
        let colChange = document.body;
        colChange.classList.toggle("dark-mode");
    }
    return (
        <header>
            <div>
                <nav>
                    <div className='siteName'>Toon Historica</div>
                    <div className='menu_bar' id='menuBar' onClick={barOnClick}>
                        {menuIocn}
                    </div>
                    <div className='btn'>
                        <button className='modeChanger' onClick={change}>Click me</button>
                    </div>
                    <ul>
                        <li>
                            <NavLink to={"/"}><i class="fa-solid fa-house"></i> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}><i class="fa-solid fa-address-card"></i> About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"}><i class="fa-brands fa-usps"></i> Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}><i class="fa-regular fa-address-book"></i> Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/signUp"}>Sign Up</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;