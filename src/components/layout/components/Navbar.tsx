import Icon from "../../icon/Icon";
import ProfileDropdown from "./navbar-login-components/ProfileDropdown";

function Header() {
  return (
    <div className="flex justify-between  ">
      <Icon name="logo" className="w-48" />
      <ProfileDropdown />
    </div>
  );
}

export default Header;
