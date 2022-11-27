import ListCard from '../../components/ui/navigation/listCard/listCard';
import Card from '../../components/ui/navigation/card';
import { data4 } from '../../typings/data/data';
import { data3 } from '../../typings/data/data';

function albums() {
  return (
    <div className="flex">
      {/* <img
        className="relative top-[50px] justify-center rounded-full "
        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/d/9/7/8d97ec87577f0a124fcb00950d3ec237.jpg"
        alt=""
      /> */}
      <div className="mt-[100px] pr-10">
        <Card item={data4[2]} title="" />
      </div>
      <ListCard title="Album" datas={data3} />
    </div>
  );
}

export default albums;
