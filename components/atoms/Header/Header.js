import HeaderProfile from "./HeaderProfile";
import HeaderLogin from "./HeaderLogin";

import HeaderLogo from "./HeaderLogo";

const Header = () => (
    <header className="flex items-center justify-between py-5">
        <HeaderLogo />
        <HeaderLogin />
    </header>
);

export default Header;
