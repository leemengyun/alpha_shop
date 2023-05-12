import React from 'react';
// react-hook-form
import { useForm } from 'react-hook-form';

import { initialCardDetails } from '../CarContainer/CartContext';

export default function PaymentForm({ submitHandler }) {
  // react-hook-form
  const { register, handleSubmit } = useForm();

  return (
    // onSubmit={handleSubmit(onSubmit)}
    <form
      id='hook-form'
      className='col col-12'
      onSubmit={handleSubmit(submitHandler)}
    >
      <h3 className='form-title'>付款資訊</h3>
      <section className='form-body col col-12'>
        <div className='col col-12'>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>持卡人姓名</div>
            <input
              type='text'
              placeholder={initialCardDetails.cardHolderName}
              // name='cardHolderName'
              {...register('cardHolderName')}
              // value='Eva Lee'
            />
          </div>
        </div>
        <div className='col col-12'>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>卡號</div>
            <input
              type='text'
              placeholder={initialCardDetails.cardNum}
              {...register('cardNum')}
              // name='cardNum'
              // value='1234 5678 9012 3456'
            />
          </div>
        </div>
        <div className='col col-12'>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>有效期限</div>
            <input
              type='text'
              placeholder={initialCardDetails.cardExpireDate}
              {...register('cardExpireDate')}

              // name='cardExpireDate'
              // value='12/25'
            />
          </div>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>CVC / CCV</div>
            <input
              type='text'
              placeholder={initialCardDetails.cardCvc}
              {...register('cardCvc')}

              // name='cardCvc'
              // value='333'
            />
            {/* <input type='submit' /> */}
          </div>
        </div>
      </section>
    </form>
  );
}
