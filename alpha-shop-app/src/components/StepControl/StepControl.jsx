import React from 'react';
// import { useState } from 'react';
import iconLeftArrow from '../../assets/icons/left-arrow.svg';
import iconRightArrow from '../../assets/icons/right-arrow.svg';

export default function StepControl({
  orderStep,
  prevStepFunc,
  nextStepFunc,
  submitHandler,
}) {
  return (
    <section className='progress-control-container col col-lg-6 col-sm-12'>
      {/* <!-- shipping -->*/}
      <section className='button-group col col-12'>
        {orderStep === 1 ? null : (
          <button className='prev' onClick={prevStepFunc}>
            <img
              src={iconLeftArrow}
              alt='icon of left arrow'
              className='icon-left-arrow cursor-point'
            />
            上一步
          </button>
        )}
        {orderStep !== 3 && (
          <button className='next' onClick={nextStepFunc}>
            下一步
            <img
              src={iconRightArrow}
              alt='icon of right arrow'
              className='icon-right-arrow cursor-point'
            />
          </button>
        )}
        {orderStep === 3 && (
          <button
            className='next'
            form='payment-form'
            type='submit'
            // onClick={submitHandler}
          >
            確認下單
            <img
              src={iconRightArrow}
              alt='icon of right arrow'
              className='icon-right-arrow cursor-point'
            />
          </button>
        )}

        {/* 原本按鈕寫法 */}
        {/* <button className='next' onClick={nextStepFunc}>
          {orderStep === 3 ? '確認下單' : `下一步`}
          {orderStep !== 3 && (
            <img
              src={iconRightArrow}
              alt='icon of right arrow'
              className='icon-right-arrow cursor-point'
            />
          )}
        </button> */}
      </section>
    </section>
  );
}
