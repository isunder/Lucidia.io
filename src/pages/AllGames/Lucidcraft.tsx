import { motion } from "framer-motion";
// import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import OtherGames from "../../components/OtherGames";
import { cn } from "../../utils";
import { useTranslation } from "react-i18next";
import { details } from "../../utils/types";

const Lucidcraft = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <div className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <img
          src={"/games/lucidcraft/banner.png"}
          className="w-full h-full object-cover absolute top-0 left-0 object-top"
        />
        {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div> */}
        <img
          src={"/games/lucidcraft/title.png"}
          className="w-[40%] object-cover absolute top-[45%] left-[30%] object-top"
        />
        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-8 sm:gap-y-8 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-12 md:pb-10 items-center h-auto mx-auto  z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem] absolute bottom-5">
          <p className="text-3xl text-center left-0 right-0">
            {t("coming_soon")}
          </p>
        </div>
        {/* <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-8 sm:gap-y-8 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-12 md:pb-10 items-center h-auto mx-auto  z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem] absolute bottom-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[96px] text-center font-bold left-0 right-0">
            {t("lucid")}
          </h1>

          <Button className="w-full md:w-56" stretchOnMobile>
            {t("games.play_game")}
          </Button>
        </div> */}
      </div>

      <div className="w-full h-auto px-8 py-10 -mb-20 md:mb-0 bg-[url('/games/lucidcraft/grid_background.png')]">
        <div className="max-w-[1100px] pb-14 sm:pb-20 w-full min-h-screen mx-auto text-secondary font-primary justify-between flex gap-10 pt-16 md:flex-row flex-col-reverse">
          <div className="w-full md:space-y-7 space-y-4">
            <h1 className="text-xl md:text-6xl text-primary font-bold">
              {t("games.lucid.title")}
            </h1>
            <p className=" text-base md:text-xl">{t("games.lucid.desc")}</p>
            <h2 className="text-primary md:text-2xl text-xl font-bold">
              {t("overview")} :
            </h2>
            <div className="text-base md:text-xl">
              <p className="">{t("games.lucid.overview")}</p>
              <p className="">
                <b>{t("games.lucid.mech")}:</b> {t("games.lucid.overview2")}
              </p>
            </div>

            <h2 className="md:text-2xl text-xl text-primary font-bold">
              {t("game_details")} :
            </h2>

            <div className=" text-base md:text-xl">
              {(
                t("games.lucid.details", { returnObjects: true }) as details[]
              ).map((items, i) => (
                <div className="flex gap-1" key={i}>
                  <h1 className="">
                    <b>{items.title}:</b> <span>{items.value}</span>
                  </h1>
                </div>
              ))}
            </div>

            <div className=" text-base md:text-xl">
              {(
                t("games.zombie.details2", { returnObjects: true }) as string[]
              ).map((items, i) => (
                <p className="" key={i}>
                  {items}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center md:flex-col md:gap-10 gap-4 justify-center md:justify-start">
            {[...new Array(3)].map((_, i) => (
              <img
                src={`/games/lucidcraft/${i + 1}.webp`}
                alt={`Image${i + 1}`}
                className={cn("w-1/2 md:w-auto", {
                  "md:block hidden": i === 0,
                })}
              />
            ))}
          </div>
        </div>

        <OtherGames initialSlide={2} />
      </div>

      <Footer />
    </motion.section>
  );
};

export default Lucidcraft;
