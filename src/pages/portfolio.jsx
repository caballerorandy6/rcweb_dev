import Layout from "../../components/Layout";
import PortfolioHeader from "../../components/PortfolioHeader";
import PortfolioGrid from "../../components/PortfolioGrid";

const Portfolio = () => {
  return (
    <Layout
      title={"Portfolio"}
      description={"Portfolio page, personal portfolio, rcweb"}
    >
      <PortfolioHeader />
      <PortfolioGrid />
    </Layout>
  );
};

export default Portfolio;
