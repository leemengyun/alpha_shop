// custom component
import ProgressBar from './StepProgressBar';
import StepContent from './StepContent';
import StepControl from './StepControl';

export default function RegisterContainer() {
  return (
    <div className='register-container col col-lg-6 col-sm-12'>
      <ProgressBar />
      <StepContent />
      <StepControl />
    </div>
  );
}
