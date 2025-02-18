import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";

import { withTranslation } from "../../../i18n";
import { TechsContainer } from "./styles";

const TechsList = ({ t }: { t: any }) => {
  return (
    <TechsContainer id="technologies">
      <h3>{t("techs")}</h3>
      <div className="tech-list">
        <div className="tech-item">
          <h4>React</h4>
          <FaReact />
        </div>
        <div className="tech-item">
          <h4>HTML</h4>
          <AiFillHtml5 />
        </div>
        <div className="tech-item">
          <h4>CSS</h4>
          <FaCss3Alt />
        </div>
        <div className="tech-item">
          <h4>JavaScript</h4>
          <IoLogoJavascript />
        </div>
        <div className="tech-item">
          <h4>TypeScript</h4>
          <SiTypescript />
        </div>
        <div className="tech-item">
          <h4>Styled Components</h4>
          <SiStyledcomponents />
        </div>
      </div>
    </TechsContainer>
  );
};

TechsList.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(TechsList);
