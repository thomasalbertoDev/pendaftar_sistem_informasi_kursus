import { useEffect } from 'react';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Admin | Agama'));
  }, [dispatch]);

  return (
    <>
      <h1>Agama</h1>
    </>
  );
};

export default Index;
