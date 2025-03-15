import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn, username }) {
    const WelcomePrompt = <h1 className="Welcome-Class">Welcome {username}</h1>;
    const LoginPrompt = <h1 className="Login-Class">Please Login</h1>;
    return isLoggedIn ? WelcomePrompt : LoginPrompt;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
};

export default UserGreeting;
