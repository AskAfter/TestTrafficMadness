import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
