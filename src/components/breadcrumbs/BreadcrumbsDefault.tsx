import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

interface BreadcrumbsDefaultProps {
  menus: {
    icon?: any;
    label: string;
    link?: string;
  }[];
}

const BreadcrumbsDefault: React.FC<BreadcrumbsDefaultProps> = ({ menus }) => {
  return (
    <>
      <ol className="flex text-gray-500 font-semibold dark:text-white-dark gap-4">
        {menus.map((menu, index) => (
          <li key={index} className={index > 0 ? "before:content-['/'] before:px-1.5" : ''}>
            {menu.link ? (
              <Link to={menu.link}>
                <button
                  className={
                    menu.icon
                      ? 'hover:text-gray-500/70 dark:hover:text-white-dark/70'
                      : `${index === 0 ? 'text-gray-500' : 'text-black'} ${index === 0 ? 'dark:text-white-light' : 'dark:text-white-light'} hover:text-black/70 dark:hover:text-white-light/70`
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
                    : `${index === 0 ? 'text-gray-500' : 'text-black'} ${index === 0 ? 'dark:text-white-light' : 'dark:text-white-light'} hover:text-black/70 dark:hover:text-white-light/70`
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
    </>
  );
};

export default BreadcrumbsDefault;
