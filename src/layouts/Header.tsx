import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { IRootState } from '../store';
import { requestLogout } from '../pages/admin/auth/api/services/requestLogout';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, toggleSidebar } from '../store/themeConfigSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import IconSun from '../components/Icons/IconSun';
import Dropdown from '../components/Dropdown';
import IconMenu from '../components/Icons/IconMenu';
import IconMoon from '../components/Icons/IconMoon';
import IconLaptop from '../components/Icons/IconLaptop';
import IconLogout from '../components/Icons/IconLogout';
import auth from '../configs/auth';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add('active');
      const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove('active');
      }
      const ul: any = selector.closest('ul.sub-menu');
      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add('active');
          });
        }
      }
    }
  }, [location]);

  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  const handleLogout = async () => {
    try {
      await requestLogout();
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
      <div className="shadow-sm">
        <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
            <Link to="/" className="main-logo flex items-center shrink-0">
              {themeConfig.theme === 'light' ? <img className="w-12 " src="/assets/images/logo_light.png" alt="logo" /> : <img className="w-12 " src="/assets/images/logo_dark.png" alt="logo" />}
              <span className="text-2xl ltr:ml-3 rtl:mr-1.5 text-dark font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">GudangNet</span>
            </Link>
            <button
              type="button"
              className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <IconMenu className="w-5 h-5" />
            </button>
          </div>

          <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
            <div>
              {themeConfig.theme === 'light' ? (
                <button
                  className={`${
                    themeConfig.theme === 'light' && 'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('dark'));
                  }}
                >
                  <IconSun />
                </button>
              ) : (
                ''
              )}
              {themeConfig.theme === 'dark' && (
                <button
                  className={`${
                    themeConfig.theme === 'dark' && 'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('system'));
                  }}
                >
                  <IconMoon />
                </button>
              )}
              {themeConfig.theme === 'system' && (
                <button
                  className={`${
                    themeConfig.theme === 'system' && 'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('light'));
                  }}
                >
                  <IconLaptop />
                </button>
              )}
            </div>

            <div className="dropdown shrink-0 flex">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="relative group block"
                button={<img className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src="/" alt="Admin Profile" />}
              >
                <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      <img className="rounded-md w-10 h-10 object-cover" src="/" alt="Admin Profile" />
                      <div className="ltr:pl-4 rtl:pr-4 truncate">
                        <span className="text-xs bg-success-light rounded text-success px-1">ADMIN</span>
                        <h4 className="text-base dark:text-white">{auth.getUsername()}</h4>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to={`/profile/`} className=" dark:hover:text-white-dark dark:text-white">
                      <Icon width={22} icon="mdi:user" className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                      Profile
                    </Link>
                  </li>
                  <li className="border-t border-white-light dark:border-white-light/10">
                    <button type="button" className="dark:hover:text-white text-danger" onClick={handleLogout}>
                      <IconLogout className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                      Logout
                    </button>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
