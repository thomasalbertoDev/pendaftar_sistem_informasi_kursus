import { Icon } from '@iconify/react';
import { IRootState } from '../../store';
import { SidebarMenu } from './SidebarMenu';
import { toggleSidebar } from '../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import IconCaretDown from '../../components/Icons/IconCaretDown';
import IconCaretsDown from '../../components/Icons/IconCaretsDown';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState<string>('');
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add('active');
      const ul: any = selector.closest('ul.sub-menu');
      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={semidark ? 'dark' : ''}>
      <nav className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
        <div className="bg-white dark:bg-black h-full">
          <div className="flex justify-between items-center px-4 py-3">
            <NavLink to="/" className="main-logo flex items-center shrink-0">
              {themeConfig.theme === 'light' ? <img className="w-16 " src="/assets/images/logo_light.png" alt="logo" /> : <img className="w-16" src="/assets/images/logo_dark.png" alt="logo" />}
              <span className="text-2xl text-dark ltr:ml-3 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('EduBoost')}</span>
            </NavLink>

            <button
              type="button"
              className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>
          <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
            <ul className="relative font-semibold space-y-0.5 p-4 py-0">
              {SidebarMenu.map((menu, index) => (
                <li key={index} className="menu nav-item ">
                  {/* Sidebar no-child */}
                  {!menu.child && (
                    <NavLink to={menu.link} className="group ">
                      <div className="flex items-center">
                        <Icon icon={menu.icon} width={22} className="group-hover:!text-primary shrink-0" />
                        <span className="ltr:pl-3 rtl:pr-3 text-dark dark:text-white dark:group-hover:text-white-dark">{menu.title}</span>
                      </div>
                    </NavLink>
                  )}

                  {/* Sidebar child */}
                  {menu.child && (
                    <button type="button" className={`${currentMenu ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu(`kategori-${index + 1}`)}>
                      <div className="flex items-center">
                        <Icon icon={menu.icon} width={22} className="group-hover:!text-primary shrink-0" />
                        <span className="ltr:pl-3 rtl:pr-3 text-dark dark:text-white dark:group-hover:text-white-dark">{menu.title}</span>
                      </div>

                      <div className={currentMenu !== `kategori-${index + 1}` ? 'rtl:rotate-90 -rotate-90' : ''}>
                        <IconCaretDown />
                      </div>
                    </button>
                  )}

                  {/* Render child menu */}
                  {menu.child && (
                    <AnimateHeight duration={300} height={currentMenu === `kategori-${index + 1}` ? 'auto' : 0}>
                      <ul className="sub-menu text-dark dark:text-white dark:group-hover:text-white-dark">
                        {menu.child.map((childItem, childIndex) => (
                          <li key={childIndex}>
                            <NavLink to={childItem.childLink}>{childItem.childTitle}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  )}
                </li>
              ))}
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
