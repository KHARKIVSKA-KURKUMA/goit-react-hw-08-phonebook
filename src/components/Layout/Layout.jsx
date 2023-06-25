import Head from 'components/Head/Head';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <Head />
      <Suspense
        fallback={
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
