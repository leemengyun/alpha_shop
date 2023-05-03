//import img
import iconLeftArrow from '../../assets/icons/left-arrow.svg';
import iconRightArrow from '../../assets/icons/right-arrow.svg';

export default function StepControl() {
  return (
    <>
      {/* <!-- progress-control --> */}
      <section className='progress-control-container col col-lg-6 col-sm-12'>
        {/* <!-- address -->*/}
        <section className='button-group col col-12'>
          <button className='next'>
            下一步
            <img
              src={iconRightArrow}
              alt='icon of right arrow'
              className='icon-right-arrow cursor-point'
            ></img>
          </button>
        </section>

        {/* <!-- shipping -->*/}
        {/* <section className='button-group col col-12'>
          <button className='prev'>
            <img
              src={iconLeftArrow}
              alt='icon of left arrow'
              className='icon-left-arrow cursor-point'
            ></img>
            上一步
          </button>
          <button className='next'>
            下一步
            <img
              src={iconRightArrow}
              alt='icon of right arrow'
              className='icon-right-arrow cursor-point'
            ></img>
          </button>
        </section> */}

        {/* <!-- credit-card -->*/}
        {/* <section className='button-group col col-12'>
          <button className='prev'>
          <img
              src={iconLeftArrow}
              alt='icon of left arrow'
              className='icon-left-arrow cursor-point'
            ></img>
            上一步
          </button>
          <button className='next'>確認下單</button>
        </section> */}
      </section>
    </>
  );
}
