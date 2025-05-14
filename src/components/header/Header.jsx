import "./Header.css"
import img1 from "../../assets/IMAGE (20).png"
export default function Header() {
    return(
    <>
        <header>
            <nav className="navbar">
                <div className="navbardiv1">
                <img src={img1} alt="" />
                <ul>
                    <li> Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Pages</li>
                    <li>Contact</li>
                </ul>
                </div>
                
                <div className="navbardiv2">
                    <p>Cart(0)</p>
                    <button>Get a free quote</button>
                </div>
            </nav>
        </header>
        
    </>
    )
}