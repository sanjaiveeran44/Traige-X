import RegisterHeader from "../components/RegisterHeader";
import RegisterHero from "../components/RegisterHero";
import RegisterFooter from "../components/RegisterFooter";
import "../pages/RegisterPage.css";
const RegisterPage = () => {
    return (
      <div className="register-page">
        <RegisterHeader />
        <RegisterHero />
        <RegisterFooter />
      </div>
    );
  };
  
  export default RegisterPage;