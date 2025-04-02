import { ShootingStars } from "./shooting-star";
import { ButtonsCard } from "../border-btn";

export default function StarHero() {
  return (
    <div className="h-screen pb-10 w-full bg-black relative overflow-hidden">
      <img
        src="/images/handsBG.png"
        alt=""
        className="absolute bottom-0 z-[100] w-screen max-h-[75vh] object-cover"
      />
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        {/* <div className="stars absolute inset-0" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="space-y-5 sm:space-y-[10px] z-30">
          <p className="capitalize text-4xl sm:text-5xl md:text-[84px] text-center leading-[44px] sm:leading-[56px] md:leading-[96px] font-helvetica">
            Be more{" "}
            <span className="bg-[linear-gradient(91.75deg,#A100FF_47.83%,#00B3FF_94.4%)] bg-clip-text text-transparent">
              effective <br className="hidden md:block" /> build software
            </span>{" "}
            with us
          </p>
        </div>

        <div>
          <p className="text-base font-helvatica  sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
            We help you realize your business with application programs that
            suit with your business.
          </p>
        </div>

        <ButtonsCard />
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      {/* <style jsx>{`
        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style> */}
    </div>
  );
}
