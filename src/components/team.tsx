import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Team() {
  const [currentMountain, setCurrentMountain] = useState<1 | 2>(1);

  const schedule = [
    { date: "25 Nov 2016", text: "Vestibulum viverra" },
    { date: "28 Nov 2016", text: "Vestibulum viverra" },
    { date: "18 Nov 2016", text: "Vestibulum viverra" },
    { date: "07 Jan 2017", text: "Vestibulum viverra" },
  ];

  return (
    <section className="" id="team">
      <div className="container flex max-w-5xl flex-col items-start gap-8 py-8 pt-16 md:flex-row md:items-center">
        <div className="flex gap-4 font-oswald">
          <span className="text-8xl font-bold text-light-blue/50">02</span>
          <div className="mt-auto space-y-2">
            <span className="text-2xl font-bold text-light-blue">CLIMB</span>
            <div className="size-4 bg-light-blue/50"></div>
          </div>
        </div>
        <div>
          <p className="font-medium text-light-blue">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>
      <div className="bg-light-blue">
        <div className="container flex max-w-5xl gap-4">
          <div
            className={twMerge(
              "cursor-pointer px-4 py-2 font-extrabold",
              currentMountain === 1
                ? "bg-gray underline underline-offset-2"
                : "text-gray",
            )}
            onClick={() => setCurrentMountain(1)}
          >
            <span>MOUNTAIN 1</span>
          </div>
          <div
            className={twMerge(
              "cursor-pointer px-4 py-2 font-extrabold",
              currentMountain === 2
                ? "bg-gray underline underline-offset-2"
                : "text-gray",
            )}
            onClick={() => setCurrentMountain(2)}
          >
            <span>MOUNTAIN 2</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          {currentMountain === 1 ? (
            <img
              src="/images/mountain-1.png"
              alt="mountain-1"
              className="h-[50vh] w-screen object-cover md:h-auto"
            />
          ) : (
            <img
              src="/images/mountain-2.png"
              alt="mountain-2"
              className="h-[50vh] w-screen object-cover md:h-auto"
            />
          )}
        </div>
        <div className="container absolute left-1/2 top-16 max-w-5xl -translate-x-1/2">
          <div className="w-fit bg-white px-6 py-4">
            <span className="text-2xl font-extrabold text-light-blue">
              SCHEDULE
            </span>
            <div className="mt-4 space-y-2">
              {schedule.map(({ date, text }, i) => (
                <div key={i} className="text-black/90">
                  <span className="inline-block w-24">{date}</span>
                  <span className="ml-12">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
