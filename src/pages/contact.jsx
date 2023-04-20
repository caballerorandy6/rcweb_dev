import Layout from "../../components/Layout";
import ContactHeader from "../../components/ContactHeader";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <Layout
      title={"Contact"}
      description={"Contact page, personal portfolio, rcweb"}
    >
      <ContactHeader />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
