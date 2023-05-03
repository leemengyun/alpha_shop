//import img
import iconMinus from '../../assets/icons/minus.svg';
import iconPlus from '../../assets/icons/plus.svg';
import productPhoto1 from '../../assets/images/product-1.jpg';
import productPhoto2 from '../../assets/images/product-2.jpg';

export default function CartContainer() {
  return (
    <>
      {/* <!-- cart --> */}
      <section className='cart-container col col-lg-5 col-sm-12'>
        <h3 className='cart-title'>購物籃</h3>

        <section className='product-list col col-12'>
          <div className='product-container col col-12'>
            <img
              className='img-container'
              src={productPhoto1}
              alt='product pic 1'
            />
            <div className='product-info'>
              <div className='product-name'>破壞補丁修身牛仔褲</div>
              <div className='product-control-container'>
                <div className='product-control'>
                  {/* <svg className='product-action minus'>
                    <use href='#svg-icon-minus'></use>
                  </svg> */}
                  <img
                    src={iconMinus}
                    alt='icon of minus'
                    className='product-action minus'
                  ></img>
                  <span className='product-count'>1</span>

                  {/* <svg className='product-action plus'>
                    <use href='#svg-icon-plus'></use>
                  </svg> */}

                  <img
                    src={iconPlus}
                    alt='icon of plus'
                    className='product-action plus'
                  ></img>
                </div>
              </div>
              <div className='price'>$ 2,000</div>
            </div>
          </div>
          <div className='product-container col col-12'>
            <img
              className='img-container'
              src={productPhoto2}
              alt='product photo 2'
            />
            <div className='product-info'>
              <div className='product-name'>刷色直筒牛仔褲</div>
              <div className='product-control-container'>
                <div className='product-control'>
                  {/* <svg className='product-action minus'>
                    <use href='#svg-icon-minus'></use>
                  </svg> */}
                  <img
                    src={iconMinus}
                    alt='icon of minus'
                    className='product-action minus'
                  ></img>
                  <span className='product-count'>2</span>
                  {/* <svg className='product-action plus'>
                    <use href='#svg-icon-plus'></use>
                  </svg> */}

                  <img
                    src={iconPlus}
                    alt='icon of plus'
                    className='product-action plus'
                  ></img>
                </div>
              </div>
              <div className='price'>$ 2,000</div>
            </div>
          </div>
        </section>

        <section className='cart-info shipping col col-12'>
          <div className='text'>運費</div>
          <div className='price'>299</div>
        </section>
        <section className='cart-info total col col-12'>
          <div className='text'>小計</div>
          <div className='price'>$ 4,299</div>
        </section>
      </section>
    </>
  );
}
