import './Header.css'

function Header() {
    return (
      <div className="header">
        <div className="header__container">
          <h1 className="header__title">Hoteles</h1>
          <label className="header__filters">En cualquier fecha</label>
          <label className="header__filters">En cualquier pais</label>
          <label className="header__filters">De cualquier precio</label>
          <label className="header__filters">De cualquier tamaño</label>
        </div>

      </div>  
    )
}

export default Header;