// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import AddressForm from './AddressForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';

function ShowSection({ orderStep }) {
  if (orderStep === 1) {
    return <AddressForm />;
  } else if (orderStep === 2) {
    return <DeliveryForm />;
  } else if (orderStep === 3) {
    return <PaymentForm />;
  }
}
export default function StepContent({ orderStep }) {
  return (
    <>
      <section className='form-container col col-12'>
        <ShowSection orderStep={orderStep} />
      </section>
    </>
  );
}
