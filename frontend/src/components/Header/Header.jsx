import MarcaOcean from "../../assets/brand.svg";
import "./Header.css"
function Header() {
    return(
    <header className="cabecalho">
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <img src={MarcaOcean} alt="" style={{height: 50}}></img>
            </div>
            <div className='col-10'>
              <a className="link">Link1</a>
              <a className="link">Link2</a>
              <a className="link">Link3</a>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;