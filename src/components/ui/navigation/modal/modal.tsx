import { setShow, setTheme } from '../../../../stores/player';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../stores';
import { themes } from '../../../../typings/data/data';

const Modal = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state: RootState) => state.player);

  const handleTheme = active => {
    dispatch(setTheme(active));
  };
  const handleShow = () => {
    dispatch(setShow(!show));
  };
  return (
    <div className={`h-screen w-full fixed z-50 bg-black bg-opacity-50`}>
      <div className="absolute bg-[#171717] w-7/12 h-7/12 top-[11%] left-[23%]">
        <div className="px-4 py-2 justify-between flex">
          <span className="text-[1.5rem] text-white ">Giao Diện</span>
          <button
            className="text-white text-[1.5rem] hover:bg-gray-400 w-10 h-10 rounded-full bg-opacity-50"
            onClick={handleShow}
          >
            X
          </button>
        </div>
        <div className="p-6 flex justify-between">
          {themes.map(item => (
            <div className="relative grid group" key={item.id}>
              <div className="absolute text-white z-10 justify-evenly h-8 w-28 flex border rounded-full overflow-hidden m-auto top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 cursor-pointer hover:bg-purple-900">
                <button
                  onClick={() => {
                    handleTheme(item.theme);
                  }}
                >
                  Áp dụng
                </button>
              </div>
              <div className="h-30 w-36 rounded-lg overflow-hidden group">
                <img
                  className="lg:h-36 md:h-36 w-full overflow-hidden object-cover object-center transform group-hover:scale-110 group-hover:opacity-40 bg-black duration-1000"
                  alt={item.name}
                  src={item.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
