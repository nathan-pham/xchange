import useAuth from "hooks/useAuth";
import Button from "components/atoms/Button";

const HeaderLogin = () => {
    const { onClick } = useAuth();

    return (
        <div className="h-14 grid place-items-center">
            <Button onClick={onClick}>Login with Replit</Button>
        </div>
    );
};

export default HeaderLogin;
