import { useTranslation } from "react-i18next";

interface MissionInterface {
  bold: string;
  normal: string;
}

const Mission = () => {
  const { t } = useTranslation("");

  return (
    <section className="w-full h-auto bg-[#1E1E1E] relative pt-10 sm:pt-20 p-5 px-8 font-primary text-secondary">
      <div className="max-w-[1100px] w-full mx-auto">
        <h1 className="sm:text-5xl text-2xl font-bold">{t("team.mission")}</h1>
        <div className="mt-10 space-y-3 sm:space-y-8">
          {(
            t("team.mission_data", {
              returnObjects: true,
            }) as MissionInterface[]
          ).map((items, i) => (
            <div className="flex gap-x-5" key={i}>
              <h1 className="text-2xl sm:text-5xl font-bold">{i + 1}.</h1>
              <div className="text-base sm:text-2xl">
                <p>
                  <span className="text-primary font-bold">{items.bold}</span>{" "}
                  {items.normal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
