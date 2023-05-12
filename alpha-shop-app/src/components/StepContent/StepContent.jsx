// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import { useState } from 'react';

// import component
import AddressForm from './AddressForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';

function ShowSection({ orderStep }) {
  // 表單切換保留處理
  const [userData, setUserData] = useState({
    address: '',
    tel: '',
  });
  const handleInputChange = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    setUserData({
      ...userData,
      [targetName]: targetValue,
    });
  };

  if (orderStep === 1) {
    return (
      <AddressForm
        key='addressForm'
        userData={userData}
        onHandleInputChange={handleInputChange}
      />
    );
  } else if (orderStep === 2) {
    return <DeliveryForm key='deliveryForm' />;
  } else if (orderStep === 3) {
    return <PaymentForm key='paymentForm' />;
  }
}
export default function StepContent({ orderStep }) {
  return (
    <section className='form-container col col-12'>
      <ShowSection orderStep={orderStep} />
    </section>
  );
}
