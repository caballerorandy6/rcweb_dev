import Layout from "../../components/Layout";
import AboutHeader from "../../components/AboutHeader";
import AboutPersonalInfo from "../../components/AboutPersonalInfo";
import AboutSkills from "../../components/AboutSkills";

const About = () => {
  return (
    <Layout
      title={"About Me"}
      description={"About page, personal portfolio, rcweb"}
    >
      <AboutHeader />
      <AboutPersonalInfo />
      <AboutSkills />
    </Layout>
  );
};

export default About;
