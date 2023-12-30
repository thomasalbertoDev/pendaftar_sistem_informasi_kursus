import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsBasicProps {
  menus: {
    label: string;
    link?: string;
  }[];
}

const BreadcrumbsBasic: React.FC<BreadcrumbsBasicProps> = ({ menus }) => {
  return (
    <>
      <ol className="flex text-gray-500 font-semibold dark:text-white-dark gap-2">
        {menus.map((menu, index) => (
          <li key={index} className={index > 0 ? "before:content-['/'] before:px-1.5" : ''}>
            {menu.link ? (
              <Link to={menu.link}>
                <button className={index === 0 ? 'text-gray-500 hover:text-gray-900 dark:hover:text-white-dark/70' : 'text-gray-700 hover:text-gray-500/70 dark:hover:text-white-dark/70'}>
                  {menu.label}
                </button>
              </Link>
            ) : (
              <button className={index === 0 ? 'text-gray-500 hover:text-gray-700/70 dark:hover:text-white-dark/70' : 'hover:text-gray-500/70 dark:hover:text-white-dark/70'}>{menu.label}</button>
            )}
          </li>
        ))}
      </ol>
    </>
  );
};

export default BreadcrumbsBasic;
