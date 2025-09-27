import LoginHeader from "../components/LoginHeader";
import LoginHero from "../components/LoginHero";
import LoginFooter from "../components/LoginFooter";
import "./LoginPage.css";
const LoginPage = () => {
    return (
      <div className="login-page">
        <LoginHeader />
        <LoginHero />
        <LoginFooter />
      </div>
    );
  };
  export default LoginPage;