import React from 'react';
// import { useState } from 'react';
// import { cardDetails } from '../CarContainer/CartContext';

export default function PaymentForm({ submitHandler }) {
  return (
    <form className='col col-12' onSubmit={submitHandler}>
      <h3 className='form-title'>付款資訊</h3>
      <section className='form-body col col-12'>
        <div className='col col-12'>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>持卡人姓名</div>
            <input
              type='text'
              placeholder='John Doe'
              name='cardHolderName'
              value='Eva Lee'
            />
          </div>
        </div>
        <div className='col col-12'>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>卡號</div>
            <input
              type='text'
              placeholder='1111 2222 3333 4444'
              name='cardNum'
              value='1234 5678 9012 3456'
            />
          </div>
        </div>
        <div className='col col-12'>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>有效期限</div>
            <input
              type='text'
              placeholder='MM/YY'
              name='cardExpireDate'
              value='12/25'
            />
          </div>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>CVC / CCV</div>
            <input type='text' placeholder='123' name='cardCvc' value='333' />
          </div>
        </div>
      </section>
    </form>
  );
}
