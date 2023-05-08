import React from 'react';
//import img
import iconPgComplete from '../../assets/icons/pg-complete.svg';

export default function NewStep({ orderStep, progressSteps, isLastStep }) {
  return (
    <>
      <span
        className={[
          'progress-group',
          orderStep >= progressSteps.num ? 'active' : '',
        ].join(' ')}
      >
        <span className='progress-icon'>
          {orderStep <= progressSteps.num ? (
            <span className='text'>{progressSteps.num}</span>
          ) : (
            <img
              src={iconPgComplete}
              alt='icon of progress complete'
              className='icon cursor-point'
            />
          )}
        </span>
        <span className='progress-label'>{progressSteps.label}</span>
        {!isLastStep && <span className='progress-bar'></span>}
      </span>
    </>
  );
}
