import "../../scss/components/_buttons.scss"
import Logo from "../../assets/masuno.png"

const Header = () => {

    return(
        <nav id="header" className="header">
            <section className="header__section">
                <img src={Logo} alt="Logo del Header" />
            </section>
        </nav>
    )
}

export default Header;