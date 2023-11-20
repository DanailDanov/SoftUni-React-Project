import Spinner from 'react-bootstrap/Spinner';


export default function Loader() {
  return (
    <Spinner animation="border" variant='primary' role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}