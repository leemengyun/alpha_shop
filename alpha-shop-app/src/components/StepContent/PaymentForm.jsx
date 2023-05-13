// import React, { useState } from 'react';
// import { useState } from 'react';
// import { cardDetails } from '../CarContainer/CartContext';

export default function PaymentForm({
  submitHandler,
  paymentData,
  setPaymentData,
}) {
  // 表單切換保留處理
  // const handleInputChange = (e) => {
  //   // let targetName = e.target.name;
  //   let targetValue = e.target.value;

  //   setUserData({
  //     ...userData,
  //     [targetName]: targetValue,
  //   });
  // };
  // console.log(paymentData);

  return (
    <form id='payment-form' className='col col-12' onSubmit={submitHandler}>
      <h3 className='form-title'>付款資訊</h3>
      <section className='form-body col col-12'>
        <div className='col col-12'>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>持卡人姓名</div>
            <input
              type='text'
              placeholder='John Doe'
              required
              name='cardHolderName'
              // value={paymentData.cardHolderName || ''}
              // onChange={(e) =>
              //   setPaymentData({
              //     ...paymentData,
              //     cardHolderName: e.target.value,
              //   })
              // }
            />
          </div>
        </div>
        <div className='col col-12'>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>卡號</div>
            <input
              type='text'
              placeholder='1111 2222 3333 4444'
              required
              name='cardNum'
              // value={paymentData.cardNum || ''}
              // onChange={(e) =>
              //   setPaymentData({
              //     ...paymentData,
              //     cardNum: e.target.value,
              //   })
              // }
            />
          </div>
        </div>
        <div className='col col-12'>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>有效期限</div>
            <input
              type='text'
              placeholder='MM/YY'
              required
              name='cardExpireDate'
              // value={paymentData.cardExpireDate || ''}
              // onChange={(e) =>
              //   setPaymentData({
              //     ...paymentData,
              //     cardExpireDate: e.target.value,
              //   })
              // }
            />
          </div>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>CVC / CCV</div>
            <input
              type='text'
              placeholder='123'
              required
              name='cardCvc'
              // value={paymentData.cardCvc || ''}
              // onChange={(e) =>
              //   setPaymentData({
              //     ...paymentData,
              //     cardCvc: e.target.value,
              //   })
              // }
            />
          </div>
        </div>
      </section>
    </form>
  );
}
