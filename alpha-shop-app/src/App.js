import './styles/main.scss';

// custom component
import Header from './components/Header/Header';
import RegisterContainer from './components/RegisterContainer/RegisterContainer';
import CartContainer from './components/CarContainer/CartContainer';
import ProgressBar from './components/StepProgressBar/StepProgressBar';
import StepContent from './components/StepContent/StepContent';
import StepControl from './components/StepControl/StepControl';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='site-main'>
        <div className='main-container d-flex flex-row '>
          <RegisterContainer>
            <ProgressBar />
            <StepContent />
          </RegisterContainer>
          <CartContainer />
          <StepControl />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
