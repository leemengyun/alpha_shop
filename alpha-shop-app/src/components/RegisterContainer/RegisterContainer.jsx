// import component Css
// import './RegisterContainer.module.scss';

export default function RegisterContainer({ children }) {
  return (
    <section className='register-container col col-lg-6 col-sm-12'>
      {/* <ProgressBar />
      <StepContent />
      <StepControl /> */}
      {children}
    </section>
  );
}
