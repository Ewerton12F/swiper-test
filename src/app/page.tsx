"use client";

import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

type Repository = {
  full_name: string;
  description: string;
};

export default function Home() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/diego3g/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {repositories.map(repo => {
        return (
          <SwiperSlide key={repo.full_name}>
            <h1>{repo.full_name}</h1>
            <p>{repo.description}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
