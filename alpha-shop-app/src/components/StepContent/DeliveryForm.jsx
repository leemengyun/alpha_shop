import React from 'react';

import { useState } from 'react';

export default function DeliveryForm() {
  // 👇️ initialize state to default checked radio button
  const [selected, setSelected] = useState('shipping-standard');

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <form className='col col-12'>
      <h3 className='form-title'>運送方式</h3>
      <section className='form-body col col-12'>
        <label className='radio-group col col-12'>
          <input
            id='shipping-standard'
            type='radio'
            name='shipping'
            value='shipping-standard'
            checked={selected === 'shipping-standard'}
            onChange={handleChange}
          />
          <div className='radio-info'>
            <div className='col col-12'>
              <div className='text'>標準運送</div>
              <div className='price'></div>
            </div>
            <div className='period col col-12'>約 3~7 個工作天</div>
          </div>
          <div className='radio-box-border'></div>
        </label>
        <label className='radio-group col col-12'>
          <input
            id='shipping-dhl'
            type='radio'
            name='shipping'
            value='shipping-dhl'
            checked={selected === 'shipping-dhl'}
            onChange={handleChange}
          />
          <div className='radio-info'>
            <div className='col col-12'>
              <div className='text'>DHL 貨運</div>
              <div className='price'></div>
            </div>
            <div className='period col col-12'>48 小時內送達</div>
          </div>
          <div className='radio-box-border'></div>
        </label>
      </section>
    </form>
  );
}
