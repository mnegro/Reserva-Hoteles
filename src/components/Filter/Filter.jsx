import './Filter.css'

function Filter () {
    return(
        <div className="filter_container">
          <input className="header__filter" type="text" />
          <input className="header__filter" type="text" />
          <input className="header__filter" type="text" />
          <input className="header__filter" type="text" />
          <input className="header__filter" type="text" />
          <button>Limpiar</button>  
        </div>
    )
}

export default Filter;

