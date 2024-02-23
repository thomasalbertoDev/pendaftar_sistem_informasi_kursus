import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetKursus } from '../../api/kursus/services/requestGetKursus';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BadgeBasicSuccess from '../../components/badges/basic/BadgeBasicSuccess';
import ButtonSolidPrimary from '../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import FormatUang from '../../helpers/FormatUang';

const Kursus: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    kursus: [],
    initialKursus: [],
    search: '',
  });

  const { kursus, initialKursus, search } = state;

  useEffect(() => {
    dispatch(setPageTitle('Kursus'));

    requestGetKursus().then((response: any) => {
      setState((prevState) => ({ ...prevState, kursus: response, initialKursus: response }));
    });
  }, [dispatch]);

  const filterKursus = useCallback(
    debounce((query: string) => {
      const filteredData = initialKursus.filter((item: any) => item?.nama_kursus.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, kursus: filteredData }));
    }, 500),
    [initialKursus]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, search: query }));
    filterKursus(query);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header={`${kursus.length} Kursus Ditemukan`}
        menus={[
          {
            label: 'Kursus',
            link: `/`,
            icon: 'dashicons:welcome-learn-more',
          },
        ]}
      />
      <div className="flex justify-between items-center my-10">
        <SearchBasic value={search} placeholder="Cari Kursus Yang Anda Inginkan..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>
      <div className="mb-5 grid md:grid-cols-4 gap-5">
        {kursus.map((item: any, index: number) => (
          <div key={index} className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-xl border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
            <div className="py-7 px-6">
              <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[260px] overflow-hidden">
                <img className="w-full h-full object-cover rounded-t-xl" src={`${import.meta.env.VITE_API_URL}/${item?.foto_kursus}`} alt="Gambar Kursus" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-primary text-sm mb-1.5 font-bold">{item?.topik_kursus}</p>
                <BadgeBasicSuccess label={FormatUang(item?.harga_kursus)} />
              </div>
              <h5 className="text-[#3b3f5c] text-[15px] font-bold mb-6 dark:text-white-light">{item?.nama_kursus}</h5>
              <Link to={`/kursus/${item?.id_kursus}`}>
                <ButtonSolidPrimary text="Lihat Detail Course" width={'w-full'} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kursus;
