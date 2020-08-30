import React from 'react'
import useNavBarShowModal from '../../../hooks/useNavBarShowModal'

export default function NavItemSearchDropDown() {
  const [handleShow, showValue, ariaExpanded] = useNavBarShowModal();
    return (
        <>
            {/*<!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
          <li className={`nav-item dropdown no-arrow d-sm-none`}
          onClick={handleShow}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={ariaExpanded}
            >
              <i className="fas fa-search fa-fw"></i>
            </a>
            {/*<!-- Dropdown - Messages -->*/}
            <div
              className={`dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in ${showValue}`}
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
        </>
    )
}
