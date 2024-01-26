import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Login Admin'));
  });
  const navigate = useNavigate();

  const submitForm = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/warehouse.jpg')]">
      <div className="panel sm:w-[500px] max-w-lg w-full">
        <h2 className="font-bold text-2xl mb-3">Login</h2>
        <p className="mb-7">Masukkan username dan password untuk login</p>
        <form className="space-y-5 mb-5" onSubmit={submitForm}>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-input" placeholder="Masukkan Username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-input" placeholder="Masukkan Password" />
          </div>
          <div>
            <label className="cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-white-dark">Ingatkan Saya</span>
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            LOGIN
          </button>
        </form>

        <p className="text-center">
          Tidak Punya Akun?
          <Link to="/register" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
