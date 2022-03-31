import Header from "../Header";
import PresVideo from "../PresVideo";
import SocialNetwork from "../SocialNetwork";
import PlantsCounter from "../PlantsCounter";
import Quote from "../Quotes";
import Modal from "../Modal";
const HomeQuote = () => {
  return (
    <span>
      “Si tu veux des mangues,
      <br /> plante un manguier”
    </span>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <PresVideo />
        <Modal />
        <PlantsCounter />
        <Quote page="home" quote={<HomeQuote />} author="Proverbe créole" />
        <SocialNetwork />
      </main>
    </>
  );
};

export default Home;
