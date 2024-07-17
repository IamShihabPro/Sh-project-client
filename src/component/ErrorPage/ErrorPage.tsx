import { Link, useRouteError } from 'react-router-dom';
import { FaRegFaceSmile } from "react-icons/fa6";

interface RouteError {
  error: Error;
  status: number | null;
}

const ErrorPage: React.FC = () => {
  const { error, status } = useRouteError() as RouteError;

  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <FaRegFaceSmile className='w-40 h-40 text-yellow-500' />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            {error?.message || "Something went wrong."}
          </p>
          <Link to='/' className='bg-black text-white px-4 py-4'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
