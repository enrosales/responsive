import React from "react";
import TopBarSearch from "../TopBarSearch/TopBarSearch";
import NavItemAlert from "../NavItems/NavItemAlert/NavItemAlert";
import NavItemSearchDropDown from "../NavItems/NavItemSearchDropDown/NavItemSearchDropDown";
import NavItemMessages from "../NavItems/NavItemMessages/NavItemMessages";
import TopBarDivider from "../TopBarDivider/TopBarDivider";
import NavItemUserInfo from "../NavItems/NavItemUserInfo/NavItemUserInfo";

export default function TopBar(props) {
  const { handleSidebarToggle } = props;

  return (
    <>
      {/*<!-- Topbar -->*/}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/*<!-- Sidebar Toggle (Topbar) -->*/}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={handleSidebarToggle}
        >
          <i className="fa fa-bars"></i>
        </button>

        {/*<!-- Topbar Search -->*/}
        <TopBarSearch />

        {/*<!-- Topbar Navbar -->*/}
        <ul className="navbar-nav ml-auto">
          <NavItemSearchDropDown />
          <NavItemAlert />
          <NavItemMessages />
          <TopBarDivider />
          <NavItemUserInfo />
        </ul>
      </nav>
      {/*<!-- End of Topbar -->*/}
    </>
  );
}
