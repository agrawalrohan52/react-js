import { PROFILE_URL } from "../utils/constants";
// Footer component for footer section
const Footer = () => {
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href={PROFILE_URL} target="_blank">
        Rohan Agrawal
      </a>
      <i className="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;
