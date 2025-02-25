import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <div className="bg-[#4A4A4A]">
        <p className="ml-72 pt-5 font-mono text-xl font-bold text-slate-50">
          TOP PICKS FOR YOU
        </p>
        <div className="flex justify-center bg-[#4A4A4A]">
          <div className="mx-10 my-10 flex-col">
            <a
              className="relative h-40 w-80 hover:bg-white"
              href="https://www.youtube.com/watch?v=9A0BNKoYuMw&ab_channel=DevNguyen"
            >
              <img
                src="https://m.media-amazon.com/images/M/MV5BOGQ1MjI0OTctN2RjYi00OTdiLWJkYmMtYWM5MzJjMjZmZTEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                alt=""
                className="h-48 w-80 hover:border-2"
              />
              <div className="z-2 absolute left-1 top-1 h-7 w-10 rounded-sm bg-red-600 text-center">
                <p className="text-base text-white">Live</p>
              </div>
            </a>
            <div className="group bg-[#4A4A4A] text-white">
              <p className="font-sans text-lg font-bold text-gray-400 transition-transform group-hover:scale-105 group-hover:text-white">
                Skip and Shannon: Undisputed
              </p>
              <p className="text-xs font-light text-gray-400">
                FS1 • Today, 9:30 AM - 12:00 PM
              </p>
            </div>
          </div>
          <div className="mx-10 my-10 flex-col">
            <a
              className="relative h-40 w-80 hover:bg-white"
              href="https://www.youtube.com/watch?v=9A0BNKoYuMw&ab_channel=DevNguyen"
            >
              <img
                src="https://ca-times.brightspotcdn.com/dims4/default/a98693c/2147483647/strip/false/crop/2048x1363+0+0/resize/1486x989!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc6%2Fb0%2F646d3b53b3f2dccce7ac8d060a00%2Fla-fi-ct-espn-sports-center-1-jpg-20160307"
                alt=""
                className="h-48 w-80 hover:border-2"
              />
              <div className="z-2 absolute left-1 top-1 h-7 w-10 rounded-sm bg-red-600 text-center">
                <p className="text-base text-white">Live</p>
              </div>
            </a>
            <div className="group bg-[#4A4A4A] text-white">
              <p className="font-sans text-lg font-bold text-gray-400 transition-transform group-hover:scale-105 group-hover:text-white">
                SportsCenter
              </p>
              <p className="text-xs font-light text-gray-400">
                ESPN • Today, 7:30 AM - 9:00 PM
              </p>
            </div>
          </div>
          <div className="mx-10 my-10 flex-col">
            <a
              className="relative h-40 w-80 hover:border-white"
              href="https://www.youtube.com/watch?v=9A0BNKoYuMw&ab_channel=DevNguyen"
            >
              <img
                src="https://e0.365dm.com/24/07/2048x1152/skysports-premier-league-season_6629191.jpg?20241210105711"
                alt=""
                className="h-48 w-80 hover:border-2"
              />
              <div className="z-2 absolute left-1 top-1 h-7 w-10 rounded-sm bg-red-600 text-center">
                <p className="text-base text-white">Live</p>
              </div>
            </a>
            <div className="group bg-[#4A4A4A] text-white">
              <p className="font-sans text-lg font-bold text-gray-400 transition-transform group-hover:scale-105 group-hover:text-white">
                Premier League Mornings
              </p>
              <p className="text-xs font-light text-gray-400">
                NBCSN • Today, 7:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
