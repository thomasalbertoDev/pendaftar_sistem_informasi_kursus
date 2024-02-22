import AgamaSelect from '../../utils/AgamaSelect';
import PekerjaanSelect from '../../utils/PekerjaanSelect';
import PendidikanSelect from '../../utils/PendidikanSelect';
import PenghasilanSelect from '../../utils/PenghasilanSelect';
import SekolahSelect from '../../utils/SekolahSelect';

const Kursus: React.FunctionComponent = () => {
  return (
    <>
      <div className="mb-5 flex items-center justify-center">
        <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
          <div className="py-7 px-6">
            <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[260px] overflow-hidden">
              <img src="/assets/images/profile-28.jpeg" alt="profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-primary text-xs mb-1.5 font-bold">25 Sep 2020</p>
            <h5 className="text-[#3b3f5c] text-[15px] font-bold mb-4 dark:text-white-light">How to Start a Blog in 5 Easy Steps.</h5>
            <p className="text-white-dark ">Vestibulum vestibulum tortor ut eros tincidunt, ut rutrum elit volutpat.</p>
            <div className="relative flex justify-between mt-6 pt-4 before:w-[250px] before:h-[1px] before:bg-white-light before:inset-x-0 before:top-0 before:absolute before:mx-auto dark:before:bg-[#1b2e4b]">
              <div className="flex items-center font-semibold">
                <div className="w-9 h-9 rounded-full overflow-hidden inline-block ltr:mr-2 rtl:ml-2.5">
                  <span className="flex w-full h-full items-center justify-center bg-[#515365] text-white-light">AG</span>
                </div>
                <div className="text-[#515365] dark:text-white-dark">Luke Ivory</div>
              </div>
              <div className="flex font-semibold">
                <div className="text-primary flex items-center ltr:mr-3 rtl:ml-3">
                  <svg>...</svg>
                  51
                </div>
                <div className="text-primary flex items-center">
                  <svg>...</svg>
                  250
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <PekerjaanSelect id="pekerjaan" name="pekerjaan" label="Pekerjaan" value="" placeholder="Pilih Pekerjaan" error="" isInputFilled="" onChange={() => {}} /> */}

        {/* <PenghasilanSelect id="penghasilan" name="penghasilan" label="Penghasilan" value="" placeholder="Pilih Penghasilan" error="" isInputFilled="" onChange={() => {}} /> */}

        {/* <PendidikanSelect id="pendidikan" name="pendidikan" label="Pendidikan" value="" placeholder="Pilih Pendidikan" error="" isInputFilled="" onChange={() => {}} /> */}
      </div>
    </>
  );
};

export default Kursus;
