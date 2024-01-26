import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

interface BreadcrumbsDefaultProps {
  header: string;
  menus: {
    icon?: any;
    label: string;
    link?: string;
  }[];
}

const BreadcrumbsDefault: React.FC<BreadcrumbsDefaultProps> = ({ menus, header }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-dark dark:text-dark-light">{header}</h1>
        <ol className="flex text-gray-500 font-semibold dark:text-dark-light gap-4">
          {menus.map((menu, index) => (
            <li key={index} className={index > 0 ? "before:content-['/'] before:mr-4 text-gray-800 text-sm dark:text-dark-light" : 'text-primary'}>
              {menu.link ? (
                <Link to={menu.link}>
                  <button
                    className={
                      menu.icon
                        ? 'hover:text-gray-800/70 dark:hover:text-white-dark/70 text-sm'
                        : `${index === 0 ? 'text-blue-500' : 'text-gray-800'} ${index === 0 ? 'dark:text-blue-200' : 'dark:text-gray-400'} hover:text-black/70 dark:hover:text-white-light/70`
                    }
                  >
                    <div className="flex justify-center items-center gap-2">
                      {menu.icon && <Icon icon={menu.icon} width={20} />}
                      {menu.label}
                    </div>
                  </button>
                </Link>
              ) : (
                <button
                  className={
                    menu.icon
                      ? 'hover:text-gray-500/70 dark:hover:text-white-dark/70'
                      : `${index === 0 ? 'text-blue-500' : 'text-gray-800'} ${index === 0 ? 'dark:text-blue-200' : 'dark:text-gray-400'} hover:text-black/70 dark:hover:text-white-light/70`
                  }
                >
                  <div className="flex justify-center items-center gap-2">
                    {menu.icon && <Icon icon={menu.icon} width={20} />}
                    {menu.label}
                  </div>
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default BreadcrumbsDefault;
