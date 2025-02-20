import AboutCompany from '../AboutCompany/AboutCompany';
import ClosedDeals from '../ClosedDeals/ClosedDeals';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Modal from '../Modal/Modal';
import Numbers from '../Numbers/Numbers';
import Tariffs from '../Tariffs/Tariffs';
import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Hero />
      <Numbers />
      <ClosedDeals />
      <AboutCompany />
      <Tariffs />
      <FAQ />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
