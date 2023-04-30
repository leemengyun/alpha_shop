// import logo from './logo.svg';
// import './styles/App.scss';
import './styles/form.scss';

// custom component
import RegisterContainer from './components/RegisterContainer';
import CartContainer from './components/CartContainer';
// import ProgressBar from './components/stepProgressBar';
// import StepContent from './components/stepContent';
// import StepControl from './components/stepControl';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <main className='site-main'>
          <div className='main-container d-flex flex-row '>
            <RegisterContainer />
            <CartContainer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
