import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";
import { twMerge } from "tailwind-merge";

export default function History() {
  const carouselImages = [
    "/images/history-bg.png",
    "/images/carousel-1.png",
    "/images/carousel-2.jpeg",
  ];

  // State
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);

  // Effect
  useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="history" className="relative">
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <img
                src={image}
                alt="history background"
                className="h-screen w-screen object-cover lg:h-dvh lg:w-screen"
              />
              <div className="container absolute left-1/2 top-32 mx-auto max-w-5xl -translate-x-1/2">
                <div className="flex gap-4 font-oswald">
                  <span className="text-8xl font-bold text-light-blue/50">
                    01
                  </span>
                  <div className="mt-auto space-y-2">
                    <span className="text-2xl font-bold text-light-blue">
                      HISTORY
                    </span>
                    <div className="size-4 bg-light-blue/50"></div>
                  </div>
                </div>
                <div>
                  <p className="mt-4 font-medium text-light-blue md:mt-0 md:pl-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin in ante viverra, rutrum erat rutrum, consectetur mi.
                    Proin at maximus est. Nullam purus ex, iaculis sed erat sed,
                    blandit tincidunt quam. Cras scelerisque id quam sed
                    dignissim Pellentesque urna nunc, gravida quis hendrerit ac,
                    tristique ut quam. Vivamus suscipit dignissim tortor nec
                    congue.{" "}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 left-1/2 w-full  -translate-x-1/2 bg-light-blue bg-opacity-50 py-8">
          <div className="flex justify-center gap-6">
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="history background"
                className="h-16 w-20 cursor-pointer md:h-36 md:w-52"
                onClick={() => {
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-4">
            {Array.from({ length: carouselImages.length }).map((_, index) => (
              <div
                key={index}
                className={twMerge(
                  "cursor-pointer rounded-full",
                  current === index
                    ? "size-2 bg-white"
                    : "size-1.5 bg-white/50",
                )}
                onClick={() => {
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
              ></div>
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
