import Card from '../card';

const listCards = ({ title, datas }) => {
  const styleCard = title => {
    switch (title) {
      case 'Mới Phát Hành':
        return 'grid grid-cols-3';
      case 'Album':
        return 'grid grid-cols-1 gap-1 mt-[270px]';
      default:
        return 'flex';
    }
  };
  return (
    <section className="mb-[80px]">
      <span className="text-xl text-white pl-6 relative mt-[50px]">
        {title !== 'Album' ? title : ''}
      </span>
      <div className={`${styleCard(title)}`}>
        {/* {datas.genre === 'album' ? <img src="" alt="" /> : ''} */}
        {datas.map(item => (
          <Card item={item} title={title} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default listCards;
