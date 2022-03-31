const useAuth = () => {
    const onClick = () => {
        const h = 500;
        const w = 350;

        const left = screen.width / 2 - w / 2;
        const top = screen.height / 2 - h / 2;

        const loginWindow = window.open(
            `https://repl.it/auth_with_repl_site?domain=${location.hostname}`,
            "_blank",
            `modal=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
        );
    };

    return {
        onClick,
    };
};

export default useAuth;
