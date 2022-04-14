import "./LandingPage.css";
import { Banner, Poster, CardSwiper } from "../../index";

const LandingPage = () => {
  const data = [
    {
      title: "Stand with Ukraine in the fight against evil",
      desc: "In this blistering call to action, chess grandmaster and human rights advocate Garry Kasparov challenges global leaders to rise in support of Ukraine -- and to choose life and love over death and hatred.",
      img: "/assets/landingOne.jpg",
      left: true,
    },
    {
      title: "Stand with Ukraine in the fight against evil",
      desc: "In this blistering call to action, chess grandmaster and human rights advocate Garry Kasparov challenges global leaders to rise in support of Ukraine -- and to choose life and love over death and hatred.",
      img: "/assets/landingOne.jpg",
      left: false,
    },
  ];

  return (
    <div>
      <Banner />
      <Poster data={data[0]} />
      <CardSwiper />
      <Poster data={data[1]} />
    </div>
  );
};

export { LandingPage };
