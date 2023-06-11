'use client';

const WorldCard = ({ cardStyles, imgUrl, title }) => (
  <div className={`${cardStyles} relative text-white w-full h-full`}>
    <img
      src={imgUrl}
      alt="Card Image"
      className="w-full h-full object-cover rounded-3xl"
    />
    <div className="absolute top-16 right-0 mx-auto w-[90%] flex flex-col gap-1">
      <div className="flex justify-between items-center px-2">
        <div className="flex w-[3.5vw] h-[3.5vh]">
          <img src="people-01.png" alt="people" className="relative right-3" />
          <img src="people-02.png" alt="people" className="relative right-5" />
          <img src="people-03.png" alt="people" className="relative right-7" />
        </div>
        <p className="font-thin text-sm">+264 has joined</p>
      </div>
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
  </div>
);

export default WorldCard;
