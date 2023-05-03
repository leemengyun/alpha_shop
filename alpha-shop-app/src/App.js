//
import { useState } from 'react';

// css
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
  const [orderStep, setOrderStep] = useState(1);
  const prevStepFunc = () => {
    setOrderStep(orderStep - 1);
  };
  const nextStepFunc = () => {
    if (orderStep === 3) {
      return;
    }
    setOrderStep(orderStep + 1);
  };

  return (
    <>
      <Header />
      <main className='site-main'>
        <div className='main-container d-flex flex-row '>
          <RegisterContainer>
            <ProgressBar orderStep={orderStep} />
            <StepContent
              orderStep={orderStep}
              // isOneDone={isOneDone}
              // isSecDone={isSecDone}
              // isThirdDone={isThirdDone}
            />
          </RegisterContainer>
          <CartContainer />
          <StepControl
            orderStep={orderStep}
            setOrderStep={setOrderStep}
            prevStepFunc={prevStepFunc}
            nextStepFunc={nextStepFunc}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
