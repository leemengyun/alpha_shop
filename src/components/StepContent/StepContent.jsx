import React from 'react';
// import { useForm } from 'react-hook-form';

// import component
import AddressForm from './AddressForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';

export default function StepContent({ orderStep, submitHandler, reset }) {
  let addressClass = 'address';
  let deliveryClass = 'delivery';
  let paymentClass = 'payment';

  // switch your form-container className
  if (orderStep === 1) {
    addressClass = 'address active';
  } else if (orderStep === 2) {
    deliveryClass = 'delivery active';
  } else if (orderStep === 3) {
    paymentClass = 'payment active';
  }

  return (
    <section className='form-container col col-12'>
      <div className={addressClass}>
        <AddressForm />
      </div>
      <div className={deliveryClass}>
        <DeliveryForm />
      </div>
      <div className={paymentClass}>
        <PaymentForm submitHandler={submitHandler} reset={reset} />
      </div>
    </section>
  );
}
