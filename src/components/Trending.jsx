import trends1 from "../assets/images/trends1.webp";
import trends2 from "../assets/images/trends2.webp";
import trends3 from "../assets/images/trends3.webp";
import trends4 from "../assets/images/trends4.webp";
import trends5 from "../assets/images/trends5.webp";
import trends6 from "../assets/images/trends6.webp";
import trends7 from "../assets/images/trends7.webp";
import trends8 from "../assets/images/trends8.webp";
import trends9 from "../assets/images/trends9.webp";
import trends10 from "../assets/images/trends10.webp";

const Trending = () => {
  const movies = [
    {
      id: 1,
      url: trends1,
    },
    {
      id: 2,
      url: trends2,
    },
    {
      id: 3,
      url: trends3,
    },
    {
      id: 4,
      url: trends4,
    },
    {
      id: 5,
      url: trends5,
    },
    {
      id: 6,
      url: trends6,
    },
    {
      id: 7,
      url: trends7,
    },
    {
      id: 8,
      url: trends8,
    },
    {
      id: 9,
      url: trends9,
    },
    {
      id: 10,
      url: trends10,
    },
  ];
  return (
    <div className="py-4">
      <div className="font-bold text-2xl">Trending Now</div>
      <div className="flex gap-5 overflow-x-auto hide-scrollbar py-2">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="pt-5 relative ml-7">
              <img
                className="rounded-2xl min-w-[180px]"
                src={movie.url}
                alt=""
              />
              <div className="text-8xl font-bold absolute bottom-4 -left-5  text-stroke-white">
                {movie.id}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
