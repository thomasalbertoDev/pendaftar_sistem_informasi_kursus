import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetPembayaran } from '../../api/pembayaran/services/requestGetPembayaran';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import Table from './Table/Index';

interface Pembayaran {
  bukti_pembayaran: string;
}

const Pembayaran: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    pembayaran: [] as Pembayaran[],
  });

  const { pembayaran } = state;

  useEffect(() => {
    dispatch(setPageTitle('Pembayaran'));

    requestGetPembayaran().then((response: Pembayaran[]) => {
      setState((prevState) => ({ ...prevState, pembayaran: response }));
    });
  }, [dispatch]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pembayaran"
        menus={[
          {
            label: 'Pembayaran',
            link: '/pembayaran',
            icon: 'mdi:cash',
          },
        ]}
      />

      <div className="flex justify-end items-center mt-10">
        <TippyDefault content="Refresh Halaman">
          <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
        </TippyDefault>
      </div>

      <div className="mt-5">
        <Table pembayaran={pembayaran} />
      </div>
    </>
  );
};

export default Pembayaran;
