// import { useState } from 'react';

//import img
import iconPgComplete from '../../assets/icons/pg-complete.svg';
// import iconPgComplete from '../../assets/icons/pg-complete.svg';

export default function ProgressBar({ orderStep }) {
  let isOneDone = false;
  let isSecDone = false;
  let isThirdDone = false;
  // const [isOneDone, setIsOneDone] = useState(false);
  // const [isSecDone, setIsSecDone] = useState(false);
  // const [isThirdDone, setIsThirdDone] = useState(false);

  if (orderStep === 2) {
    // setIsOneDone((current) => !current);
    isOneDone = true;
  } else if (orderStep === 3) {
    // setIsSecDone((current) => !current);
    isOneDone = true;
    isSecDone = true;
  } else if (orderStep === 4) {
    // setIsThirdDone((current) => !current);
    isSecDone = true;
    isThirdDone = true;
  }

  return (
    <>
      {/* <!-- register-title --> */}
      <h2 className='register-title col col-12'>結帳</h2>

      {/* <!-- register-progress --> */}
      <section className='progress-container col col-12'>
        <span className='progress-group active'>
          <span className='progress-icon'>
            {isOneDone ? (
              <img
                src={iconPgComplete}
                alt='icon of progress complete'
                className='icon cursor-point'
              />
            ) : (
              <span className='text'>1</span>
            )}
          </span>
          <span className='progress-label'>寄送地址</span>
          <span className='progress-bar'></span>
        </span>

        <span className='progress-group'>
          <span className='progress-icon'>
            {isSecDone ? (
              <img
                src={iconPgComplete}
                alt='icon of progress complete'
                className='icon cursor-point'
              />
            ) : (
              <span className='text'>2</span>
            )}
          </span>
          <span className='progress-label'>運送方式</span>
          <span className='progress-bar'></span>
        </span>

        <span className='progress-group'>
          <span className='progress-icon'>
            {isThirdDone ? (
              <img
                src={iconPgComplete}
                alt='icon of progress complete'
                className='icon cursor-point'
              />
            ) : (
              <span className='text'>3</span>
            )}
          </span>
          <span className='progress-label'>付款資訊</span>
        </span>
      </section>
    </>
  );
}
