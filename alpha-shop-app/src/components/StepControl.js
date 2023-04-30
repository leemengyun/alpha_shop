// Bootstrap component
import Button from 'react-bootstrap/Button';

export default function StepControl() {
  return (
    <>
      <div className='d-flex flex-row justify-content-between'>
        <Button as='a' variant='primary'>
          上一步
        </Button>
        <Button as='a' variant='success'>
          下一步
        </Button>
      </div>
    </>
  );
}
