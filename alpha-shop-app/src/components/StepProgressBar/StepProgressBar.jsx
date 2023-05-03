//import img
import iconPgComplete from '../../assets/icons/pg-complete.svg';
// import iconPgComplete from '../../assets/icons/pg-complete.svg';

export default function ProgressBar() {
  return (
    <>
      {/* <!-- register-title --> */}
      <h2 className='register-title col col-12'>結帳</h2>

      {/* <!-- register-progress --> */}
      <section className='progress-container col col-12'>
        <span className='progress-group active'>
          <span className='progress-icon'>
            <span className='text'>1</span>
            {/* -- when pg done show iconPgComplete -- */}
            {/* 
            <img
              src={iconPgComplete}
              alt='icon of progress complete'
              className='icon cursor-point'
            /> */}
          </span>
          <span className='progress-label'>寄送地址</span>
          <span className='progress-bar'></span>
        </span>

        <span className='progress-group'>
          <span className='progress-icon'>
            <span className='text'>2</span>
            {/* -- when pg done show iconPgComplete -- */}
            {/* 
            <img
              src={iconPgComplete}
              alt='icon of progress complete'
              className='icon cursor-point'
            /> */}
          </span>
          <span className='progress-label'>運送方式</span>
          <span className='progress-bar'></span>
        </span>

        <span className='progress-group'>
          <span className='progress-icon'>
            <span className='text'>3</span>
            {/* -- when pg done show iconPgComplete -- */}
            {/* 
            <img
              src={iconPgComplete}
              alt='icon of progress complete'
              className='icon cursor-point'
            /> */}
          </span>
          <span className='progress-label'>付款資訊</span>
        </span>
      </section>
    </>
  );
}
