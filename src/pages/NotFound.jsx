import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className='bg-black flex flex-col items-center h-screen -mt-0 -mb-14'>
      <h1 className='text-white text-7xl mt-96 mb-10'>404</h1>
      <p className='text-xl'>Not found!</p>
      <button onClick={() => navigate(-1)} className='btn btn-accent mt-10'>
        Go back
      </button>
    </main>
  );
};

export default NotFound;