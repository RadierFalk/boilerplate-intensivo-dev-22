import MarcaOcean from "../../assets/brand.svg";
function Header() {
    return(
    <header>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <img src={MarcaOcean} alt="" style={{height: 50}}></img>
            </div>
            <div className='col-10'>
              <a>Link1</a>
              <a>Link2</a>
              <a>Link3</a>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;