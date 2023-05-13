// import { useRef } from 'react';
import { useEffect, useState } from 'react';

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
// import data
import { dataBaseDetails } from './components/CarContainer/CartContext';

function App() {
  //change Darkmode
  const [theme, setTheme] = useState('light');
  const [orderStep, setOrderStep] = useState(1);
  const [orderDataBase, setOrderDataBase] = useState(dataBaseDetails);

  const [paymentData, setPaymentData] = useState({
    cardHolderName: '',
    cardNum: '',
    cardExpireDate: '',
    cardCvc: '',
  });

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.dataset.theme = 'dark';
      setTheme('dark');
    } else {
      document.body.dataset.theme = 'light';
      setTheme('light');
    }
  };
  const prevStepFunc = () => {
    setOrderStep((prevState) => prevState - 1);
  };
  const nextStepFunc = () => {
    if (orderStep === 3) {
      return;
    }
    // setOrderStep(orderStep + 1);
    // 使用(prevState) => prevState + 1 這個prevState就會接到當下的state，也就是1
    setOrderStep((prevState) => prevState + 1);
  };

  // Payment form submit
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.elements);

    const cardHolderNameValue = e.target.cardHolderName.value;
    const cardNumValue = e.target.cardNum.value;
    const cardExpireDateValue = e.target.cardExpireDate.value;
    const cardCvcValue = e.target.cardCvc.value;

    // update setPaymentData
    setPaymentData({
      cardHolderName: cardHolderNameValue,
      cardNum: cardNumValue,
      cardExpireDate: cardExpireDateValue,
      cardCvc: cardCvcValue,
    });

    setOrderDataBase(paymentData);
    // clear form value
    e.target.cardHolderName.value = '';
    e.target.cardNum.value = '';
    e.target.cardExpireDate.value = '';
    e.target.cardCvc.value = '';

    console.log(orderDataBase);
  };

  return (
    <div className='app' data-theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <main className='site-main'>
        <div className='main-container d-flex flex-row '>
          <RegisterContainer submitHandler={submitHandler}>
            <ProgressBar orderStep={orderStep} />
            <StepContent
              orderStep={orderStep}
              submitHandler={submitHandler}
              paymentData={paymentData}
              setPaymentData={setPaymentData}
            />
          </RegisterContainer>
          <CartContainer paymentData={paymentData} />
          <StepControl
            orderStep={orderStep}
            prevStepFunc={prevStepFunc}
            nextStepFunc={nextStepFunc}
            submitHandler={submitHandler}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
