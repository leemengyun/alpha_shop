//import img
import { useState } from 'react';
import iconLeftArrow from '../../assets/icons/left-arrow.svg';
import iconRightArrow from '../../assets/icons/right-arrow.svg';

export default function StepControl({
  orderStep,
  setOrderStep,
  prevStepFunc,
  nextStepFunc,
}) {
  return (
    <>
      {/* <!-- progress-control --> */}
      <section className='progress-control-container col col-lg-6 col-sm-12'>
        {/* <!-- shipping -->*/}
        <section className='button-group col col-12'>
          {orderStep === 1 ? null : (
            <button className='prev' onClick={prevStepFunc}>
              <img
                src={iconLeftArrow}
                alt='icon of left arrow'
                className='icon-left-arrow cursor-point'
              ></img>
              上一步
            </button>
          )}

          <button className='next' onClick={nextStepFunc}>
            {orderStep === 3 ? '確認下單' : `下一步`}
            {orderStep !== 3 && (
              <img
                src={iconRightArrow}
                alt='icon of right arrow'
                className='icon-right-arrow cursor-point'
              ></img>
            )}
          </button>
        </section>
      </section>
    </>
  );
}
