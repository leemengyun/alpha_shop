//
import { useState } from 'react';

// css
import './styles/main.scss';

//dark theme setting
import React from 'react';
// import useLocalStorage from 'use-local-storage';

// custom component
import Header from './components/Header/Header';
import RegisterContainer from './components/RegisterContainer/RegisterContainer';
import CartContainer from './components/CarContainer/CartContainer';
import ProgressBar from './components/StepProgressBar/StepProgressBar';
import StepContent from './components/StepContent/StepContent';
import StepControl from './components/StepControl/StepControl';
import Footer from './components/Footer/Footer';

function App() {
  //change Darkmode
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.dataset.theme = 'dark';
      setTheme('dark');
    } else {
      document.body.dataset.theme = 'light';
      setTheme('light');
    }
  };

  const [orderStep, setOrderStep] = useState(1);

  const prevStepFunc = () => {
    // setOrderStep(orderStep - 1);
    // 使用(prevState) => prevState + - 這個prevState就會接到當下的state，也就是1
    setOrderStep((prevState) => prevState - 1);
    // setOrderStep((prevState) => prevState - 1);
  };
  const nextStepFunc = () => {
    if (orderStep === 3) {
      return;
    }
    // setOrderStep(orderStep + 1);
    // 使用(prevState) => prevState + 1 這個prevState就會接到當下的state，也就是1
    setOrderStep((prevState) => prevState + 1);
    // 而這邊的prevState，就會是2
    // setOrderStep((prevState) => prevState + 1);
  };

  return (
    <div className='app' data-theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <main className='site-main'>
        <div className='main-container d-flex flex-row '>
          <RegisterContainer>
            <ProgressBar orderStep={orderStep} />
            <StepContent orderStep={orderStep} />
          </RegisterContainer>
          <CartContainer />
          <StepControl
            orderStep={orderStep}
            prevStepFunc={prevStepFunc}
            nextStepFunc={nextStepFunc}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
