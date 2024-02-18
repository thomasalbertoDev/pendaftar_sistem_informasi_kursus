import React, { useEffect, useState } from 'react';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { requestGetKursusByID } from '../../api/kursus/services/requestGetKursusByID';
import { setPageTitle } from '../../store/themeConfigSlice';
import FormatJam from '../../helpers/FormatJam';
import FormatTanggal from '../../helpers/FormatTanggal';
import BadgeBasicSuccess from '../../components/badges/basic/BadgeBasicSuccess';
import FormatUang from '../../helpers/FormatUang';
import ButtonIconTextLeft from '../../components/buttons/icon/ButtonIconTextLeft';

interface Kursus {
  nama_kursus: string;
  topik_kursus: string;
  jenjang_kursus: string;
  pengajar_ID: string;
  jam_mulai: string;
  jam_selesai: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  hari_kursus: string;
  harga_kursus: number;
  foto_kursus: string;
  syarat_kursus: string;
  deskripsi_kursus: string;
  modul_kursus: string;
}

interface KursusResponse {
  data: Kursus[];
}

const DataKursus: React.FC = () => {
  const { id_kursus } = useParams<{ id_kursus: string }>();
  const dispatch = useDispatch();
  const [kursus, setKursus] = useState<any>({});

  useEffect(() => {
    dispatch(setPageTitle('Admin | Kursus'));

    requestGetKursusByID(id_kursus ?? '').then((response: KursusResponse | never[]) => {
      setKursus(response);
    });
  }, [dispatch, id_kursus]);

  const hariKursus = kursus?.data?.hari_kursus.map((hari: any, index: number) => {
    return (
      <span key={index} className="mb-2 uppercase">
        &nbsp; {hari} &nbsp;
      </span>
    );
  });

  return (
    <>
      <BreadcrumbsDefault
        header="Detail Kursus"
        menus={[
          {
            label: 'Kursus',
            link: '/kursus',
            icon: 'dashicons:welcome-learn-more',
          },
          {
            label: 'Detail Kursus',
            link: `/kursus/${id_kursus}`,
          },
        ]}
      />

      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-10 bg-white dark:bg-black">
        <div className="px-5 mt-5">
          <div className="flex items-center justify-between mb-10 ">
            <h5 className="font-semibold text-lg dark:text-white-light">Data Kursus</h5>
            <ButtonIconTextLeft text={<a href={`${import.meta.env.VITE_API_URL}/${kursus?.data?.modul_kursus}`}>Modul</a>} icon="material-symbols:download" backgroundColor="btn-success" />
          </div>

          <div className="w-auto">
            <img src={`${import.meta.env.VITE_API_URL}/${kursus?.data?.foto_kursus}`} alt="img" className="w-full" />
          </div>

          <div className="flex-1">
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="dark:text-white text-3xl font-bold">{kursus?.data?.nama_kursus}</h1>
              </div>
              <p className="dark:text-white text-base mt-1 mb-2 text-gray-600"># {kursus?.data?.topik_kursus}</p>
              <BadgeBasicSuccess label={FormatUang(kursus?.data?.harga_kursus)} />
              <div className="mt-10 block">
                <p className="dark:text-white mb-2">Pengajar &nbsp; : &nbsp; {kursus?.data?.pengajar?.nama_pengajar}</p>
                <p className="dark:text-white mb-2">Jenjang Kursus &nbsp; : &nbsp; {kursus?.data?.jenjang_kursus}</p>
                <p className="dark:text-white mb-2">
                  Jam Kegiatan &nbsp; : &nbsp; {FormatJam(kursus?.data?.jam_mulai)} &nbsp; - &nbsp;{FormatJam(kursus?.data?.jam_selesai)}{' '}
                </p>
                <p className="dark:text-white mb-2">
                  Tanggal Kegiatan &nbsp; : &nbsp; {FormatTanggal(kursus?.data?.tanggal_mulai)} &nbsp; - &nbsp;{FormatTanggal(kursus?.data?.tanggal_selesai)}{' '}
                </p>
                <p className="dark:text-white mb-2">Syarat Kursus &nbsp; : &nbsp;{kursus?.data?.syarat_kursus}</p>
                <p className="dark:text-white  flex">Hari Kursus &nbsp; : &nbsp; {hariKursus}</p>
                <p className="mt-10 text-justify" dangerouslySetInnerHTML={{ __html: kursus?.data?.deskripsi_kursus }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataKursus;
