import Avatar from "../../avatar/Avatar";
import Icon from "../../icon/Icon";

function Header() {
  return (
    <div className="flex justify-between p-4 ">
      <Icon name="logo" className="w-28" />
      <Avatar />
    </div>
  );
}

export default Header;
