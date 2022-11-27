import React from 'react';
import { useState } from 'react';
import { FaTshirt } from 'react-icons/fa';
import { RiVipDiamondLine } from 'react-icons/ri';
import { BsUpload } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../stores';
import { setShow } from '../../../../stores/player';

const Navbar = () => {
  const Menus = [
    { id: 0, name: 'Chủ đề', icon: <FaTshirt /> },
    { id: 1, name: 'Vip', icon: <RiVipDiamondLine /> },
    { id: 2, name: 'Tải lên', icon: <BsUpload /> },
    { id: 3, name: 'Cài đặt', icon: <FiSettings /> },
  ];
  const [active, setActive] = useState(-1);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setShow(true));
  };

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div
      className={
        scrolled
          ? 'w-full h-[70px] fixed z-20 bg-[#171717] drop-shadow-xl justify-between items-center flex '
          : 'w-full h-[70px] fixed top-0 right-0 z-20 bg-opacity-0 justify-between items-center flex'
      }
    >
      <div className="relative pl-96">
        <div className="flex absolute inset-y-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-3 pl-10 w-96 text-sm text-gray-900 bg-stone-800 bg-opacity-40 rounded-full focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
          placeholder="Tìm kiếm bài hát, nghệ sĩ"
        />
      </div>
      <ul className="flex justify-end items-center">
        <div className="inline-flex pr-10 justify-center items-center">
          {/* {Menus.map((menu, i) => ( */}
          <li className="w-15 text-white mx-1 items-center">
            <a
              className="flex flex-col text-center pt-5 text-xs place-items-center"
              onMouseEnter={() => setActive(Menus[0].id)}
              onMouseLeave={() => setActive(-1)}
              onClick={handleShow}
            >
              <span className="text-xl cursor-pointer">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-stone-800 rounded-full bg-opacity-40">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {Menus[0].icon}
                  </span>
                </div>
              </span>
              <span
                className={` ${
                  active === Menus[0].id
                    ? 'translate-y-2 duration-500 opacity-100 text-xs'
                    : 'opacity-0'
                } `}
              >
                {Menus[0].name}
              </span>
            </a>
          </li>
          <li className="w-15 text-white mx-1 items-center">
            <a
              className="flex flex-col text-center pt-5 text-xs place-items-center"
              onMouseEnter={() => setActive(Menus[1].id)}
              onMouseLeave={() => setActive(-1)}
            >
              <span className="text-xl cursor-pointer">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-opacity-40 bg-stone-800 rounded-full">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {Menus[1].icon}
                  </span>
                </div>
              </span>
              <span
                className={` ${
                  active === Menus[1].id
                    ? 'translate-y-2 duration-500 opacity-100 text-xs'
                    : 'opacity-0'
                } `}
              >
                {Menus[1].name}
              </span>
            </a>
          </li>
          <li className="w-15 text-white mx-1 items-center">
            <a
              className="flex flex-col text-center pt-5 text-xs place-items-center"
              onMouseEnter={() => setActive(Menus[2].id)}
              onMouseLeave={() => setActive(-1)}
            >
              <span className="text-xl cursor-pointer">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-opacity-40 bg-stone-800 rounded-full">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {Menus[2].icon}
                  </span>
                </div>
              </span>
              <span
                className={` ${
                  active === Menus[2].id
                    ? 'translate-y-2 duration-500 opacity-100 text-xs'
                    : 'opacity-0'
                } `}
              >
                {Menus[2].name}
              </span>
            </a>
          </li>
          <li className="w-15 text-white mx-1 items-center">
            <a
              className="flex flex-col text-center pt-5 text-xs place-items-center"
              onMouseEnter={() => setActive(Menus[3].id)}
              onMouseLeave={() => setActive(-1)}
            >
              <span className="text-xl cursor-pointer">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-opacity-40 bg-stone-800 rounded-full">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {Menus[3].icon}
                  </span>
                </div>
              </span>
              <span
                className={` ${
                  active === Menus[3].id
                    ? 'translate-y-2 duration-500 opacity-100 text-xs'
                    : 'opacity-0'
                } `}
              >
                {Menus[3].name}
              </span>
            </a>
          </li>
          {/* ))} */}
          <div className="cursor-pointer mx-1 flex overflow-hidden relative items-center w-10 h-10 rounded-full ">
            <img
              src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/294393289_1446222785802572_5091573743168910914_n.jpg?stp=c0.147.320.320a_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_Xr2rIPLA8cAX-QTiOh&tn=ydE2CFv-ou_JaohM&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT_l_IjJ8a2b2x41CKE7CxTP6fGO1FfIT31Z9k6zGQnFkQ&oe=63542DD7"
              alt=""
            />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
