import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetPendaftaran } from '../../api/pendaftaran/service/requestGetPendaftaran';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

interface Pendaftaran {
  kursus_ID: string;
  nisn: number;
  nis: number;
  nik: number;
  nama_lengkap: string;
  jenis_kelamin: string;
  pas_foto: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama_ID: string;
  email: string;
  no_telepon: string;
  alamat: string;
  nama_ayah: string;
  pekerjaan_ayah_ID: string;
  no_telepon_ayah: string;
  pendidikan_ayah_ID: string;
  penghasilan_ayah_ID: string;
  nama_ibu: string;
  pekerjaan_ibu_ID: string;
  no_telepon_ibu: string;
  pendidikan_ibu_ID: string;
  penghasilan_ibu_ID: string;
  slip_gaji_ayah_ibu: string;
  foto_kk: string;
  sekolah_ID: string;
  nilai_semester_1: number;
  nilai_semester_2: number;
  nilai_semester_3: number;
  nilai_semester_4: number;
  nilai_semester_5?: number;
  nilai_semester_6?: number;
  raport: string;
  prestasi?: string;
}

const Pendaftaran: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    pendaftaran: [] as Pendaftaran[],
  });

  const { pendaftaran } = state;

  useEffect(() => {
    dispatch(setPageTitle('Pendaftaran'));

    requestGetPendaftaran().then((response: Pendaftaran[]) => {
      setState((prevState) => ({ ...prevState, pendaftaran: response }));
    });
  }, [dispatch]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pendaftaran"
        menus={[
          {
            label: 'Pendaftaran',
            link: '/pendaftaran',
            icon: 'mdi:register',
          },
        ]}
      />

      <div className="flex justify-end items-center mt-10">
        <div className="flex gap-3">
          {pendaftaran.length > 0 ? (
            <TippyDefault content="Ajukan Pendaftaran">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" disabled={true} />
            </TippyDefault>
          ) : (
            <Link to={'/pendaftaran/ajukan-pendaftaran'}>
              <TippyDefault content="Ajukan Pendaftaran">
                <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
              </TippyDefault>
            </Link>
          )}

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table pendaftaran={pendaftaran} />
      </div>
    </>
  );
};

export default Pendaftaran;
