import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Register Admin'));
  });
  const navigate = useNavigate();

  const submitForm = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/warehouse.jpg')]">
      <div className="panel sm:w-[500px] m-6 max-w-lg w-full">
        <h2 className="font-bold text-2xl mb-3">Register</h2>
        <p className="mb-7">Masukkan nama , username , dan password</p>
        <form className="space-y-5 mb-5" onSubmit={submitForm}>
          <div>
            <label htmlFor="nama">Nama</label>
            <input id="usernnamaame" type="text" className="form-input" placeholder="Masukkan Nama" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-input" placeholder="Masukkan Username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-input" placeholder="Masukkan Password" />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <p className="text-center">
          Sudah Punya Akun?
          <Link to="/login" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
