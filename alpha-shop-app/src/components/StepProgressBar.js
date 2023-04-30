// import component Css
import '../styles/ProgressBar.scss';

export default function ProgressBar() {
  return (
    <>
      {/* <div className=''> */}
      <h2 class='register-title col col-12'>結帳</h2>
      <section className='progress-container col col-12'>
        <span className='progress-group active'>
          <span className='progress-icon'>
            <span className='text'>1</span>
            <svg className='icon cursor-point'>
              {/* <use xlink:href='#svg-icon-pg-complete'></use> */}
            </svg>
          </span>
          <span className='progress-label'>寄送地址</span>
        </span>
        <span className='progress-bar active'></span>
        <span className='progress-group'>
          <span className='progress-icon'>
            <span className='text'>2</span>
            <svg className='icon cursor-point'>
              {/* <use xlink:href='#svg-icon-pg-complete'></use> */}
            </svg>
          </span>
          <span className='progress-label'>運送方式</span>
        </span>
        <span className='progress-bar'></span>
        <span className='progress-group'>
          <span className='progress-icon'>
            <span className='text'>3</span>
            <svg className='icon cursor-point'>
              {/* <use xlink:href='#svg-icon-pg-complete'></use> */}
            </svg>
          </span>
          <span className='progress-label'>付款資訊</span>
        </span>

        {/* <span className='progress-num-container'>
          <span className='progress-num active'>1</span>
          <span className='progress-content'>寄送地址</span>
          <span className='progress-line'></span>
        </span>

        <span className='progress-num-container'>
          <span className='progress-num'>2</span>
          <span className='progress-content'>運送方式</span>
          <span className='progress-line'></span>
        </span>

        <span className='progress-num-container'>
          <span className='progress-num'>3</span>
          <span className='progress-content'>付款資訊</span>
        </span> */}
      </section>
      {/* </div> */}
    </>
  );
}
