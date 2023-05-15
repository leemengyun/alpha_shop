import { useState } from 'react';

import { cardDetails } from './components/CarContainer/CartContext';
// react-hook-form
// import { useForm } from 'react-hook-form';

// css
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
  //change Darkmode
  const [theme, setTheme] = useState('light');
  const [orderStep, setOrderStep] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [originalData, setOriginalData] = useState(cardDetails);
  // const { reset, control } = useForm();
  // const methods = useForm();

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

  const submitHandler = (data) => {
    // alert('in submitHandler');
    // console.log(data);

    cardDetails.orderPrice = totalPrice;
    cardDetails.cardHolderName = data.cardHolderName;
    cardDetails.cardNum = data.cardNum;
    cardDetails.cardExpireDate = data.cardExpireDate;
    cardDetails.cardCvc = data.cardCvc;

    // **嘗試1 - 儲存資料 - 但結果要按第二次才會儲存前一次的資料
    // setOriginalData({
    //   ...originalData,
    //   orderPrice: totalPrice,
    //   cardHolderName: data.cardHolderName,
    //   cardNum: data.cardNum,
    //   cardExpireDate: data.cardExpireDate,
    //   cardCvc: data.cardCvc,
    // });

    //  **嘗試2 - 清空表單值 沒有成功
    // reset({
    //   orderPrice: '',
    //   cardHolderName: '',
    //   cardNum: '',
    //   cardExpireDate: '',
    //   cardCvc: '',
    // });

    console.log(cardDetails);
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
              // control={control}
              // paymentData={paymentData}
              // setPaymentData={setPaymentData}
            />
          </RegisterContainer>
          <CartContainer
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
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
