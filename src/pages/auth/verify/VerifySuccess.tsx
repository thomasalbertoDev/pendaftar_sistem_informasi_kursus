import React from 'react';
import { Link } from 'react-router-dom';

const VerifySuccess: React.FunctionComponent = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="px-6 py-16 text-center font-semibold before:container before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0)_50.73%)] before:aspect-square before:opacity-10 md:py-20">
        <div className="relative">
          <img src={'/assets/images/verify-success.svg'} alt="404" className="mx-auto  -mt-10 w-full max-w-xs object-cover md:-mt-14 md:max-w-xl" />
          <p className="mt-5 text-base dark:text-white">Email Anda Telah Berhasil Diverifikasi , Silahkan Login Kembali!</p>
          <Link to="/" className="btn btn-primary mx-auto !mt-7 w-max border-0 uppercase shadow-none py-3 hover:opacity-75">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifySuccess;
