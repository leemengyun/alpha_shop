import React from 'react';
import { useState } from 'react';
import { dummyShopping } from './CartContext';

//import img
import iconMinus from '../../assets/icons/minus.svg';
import iconPlus from '../../assets/icons/plus.svg';
// import productPhoto1 from '../../assets/images/product-1.jpg';
// import productPhoto2 from '../../assets/images/product-2.jpg';

function ProductTemplate({
  product,
  onHandleIncreaseCount,
  onHandleDecreaseCount,
}) {
  return (
    <div className='product-container col col-12'>
      <img className='img-container' src={product.img} alt='product pic 1' />
      <div className='product-info'>
        <div className='product-name'>{product.name}</div>
        <div className='product-control-container'>
          <div className='product-control'>
            <img
              src={iconMinus}
              alt='icon of minus'
              className='product-action minus'
              onClick={() => {
                onHandleDecreaseCount(product.id);
              }}
            />
            <span className='product-count'>{product.quantity}</span>
            <img
              src={iconPlus}
              alt='icon of plus'
              className='product-action plus'
              onClick={() => {
                onHandleIncreaseCount(product.id);
              }}
              // onClick={onHandleDecreaseCount}
            />
          </div>
        </div>
        <div className='price'>
          {'$ ' + (product.price * product.quantity).toLocaleString('en-US')}
        </div>
      </div>
    </div>
  );
}

export default function CartContainer(paymentData) {
  const [shopping, setShopping] = useState(dummyShopping);

  // console.log(wholeData);
  // console.log(paymentData);

  function handleIncreaseCount(productId) {
    // console.log(productId);
    setShopping(
      shopping.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecreaseCount(productId) {
    let nextShopping = shopping.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });

    //直接把filter的直寫在setState的函式中，這樣就不用另外再重新賦值一次
    setShopping(
      nextShopping.filter((q) => {
        return q.quantity > 0;
      })
    );
  }

  // 改為Array.reduce的method來寫
  const totalPrice = shopping.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );

  return (
    <section className='cart-container col col-lg-5 col-sm-12'>
      <h3 className='cart-title'>購物籃</h3>

      <section className='product-list col col-12'>
        {/* -- 原始版型參考用 -- */}
        {/* <div className='product-container col col-12'>
            <img
              className='img-container'
              src={productPhoto1}
              alt='product pic 1'
            />
            <div className='product-info'>
              <div className='product-name'>破壞補丁修身牛仔褲</div>
              <div className='product-control-container'>
                <div className='product-control'>
                  <img
                    src={iconMinus}
                    alt='icon of minus'
                    className='product-action minus'
                 />
                  <span className='product-count'>1</span>
                  <img
                    src={iconPlus}
                    alt='icon of plus'
                    className='product-action plus'
                 />
                </div>
              </div>
              <div className='price'>$ 2,000</div>
            </div>
          </div>
          <div className='product-container col col-12'>
            <img
              src={productPhoto2}
              alt='icon of product 2'
              className='img-container'
           />
            <div className='product-info'>
              <div className='product-name'>刷色直筒牛仔褲</div>
              <div className='product-control-container'>
                <div className='product-control'>
                  <img
                    src={iconMinus}
                    alt='icon of minus'
                    className='product-action minus'
                 />
                  <span className='product-count'>2</span>

                  <img
                    src={iconPlus}
                    alt='icon of plus'
                    className='product-action plus'
                 />
                </div>
              </div>
              <div className='price'>$ 2,000</div>
            </div>
          </div> */}
        {/* -- 依data渲染dummyShopping項目 -- */}

        {shopping.map((product) => {
          return (
            <ProductTemplate
              product={product}
              key={product.id}
              onHandleIncreaseCount={handleIncreaseCount}
              onHandleDecreaseCount={handleDecreaseCount}
            />
          );
        })}
      </section>

      <section className='cart-info shipping col col-12'>
        <div className='text'>運費</div>
        <div className='price'>
          {totalPrice < 1200 && totalPrice !== 0 ? 499 : '免費'}
        </div>
      </section>
      <section className='cart-info total col col-12'>
        <div className='text'>小計</div>
        {/* <div className='price'>$ 4,299</div> */}
        <div className='price'>{totalPrice}</div>
      </section>
    </section>
  );
}
