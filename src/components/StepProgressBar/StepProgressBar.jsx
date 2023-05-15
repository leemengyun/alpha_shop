import React from 'react';

//import img
// import iconPgComplete from '../../assets/icons/pg-complete.svg';
import NewStep from './NewStep';
// import iconPgComplete from '../../assets/icons/pg-complete.svg';

export default function ProgressBar({ orderStep }) {
  return (
    <>
      {/* <!-- register-title --> */}
      <h2 className='register-title col col-12'>結帳</h2>

      {/* <!-- register-progress --> */}
      <section className='progress-container col col-12'>
        <NewStep
          orderStep={orderStep}
          // iconPgComplete={iconPgComplete}
          progressSteps={{
            num: 1,
            label: '寄送地址',
          }}
        />

        <NewStep
          orderStep={orderStep}
          // iconPgComplete={iconPgComplete}
          progressSteps={{
            num: 2,
            label: '運送方式',
          }}
        />

        <NewStep
          orderStep={orderStep}
          isLastStep={true}
          // iconPgComplete={iconPgComplete}
          progressSteps={{
            num: 3,
            label: '付款資訊',
          }}
        />
      </section>
    </>
  );
}
