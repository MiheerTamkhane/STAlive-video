import "./LandingPage.css";
import { Banner, Poster, CardSwiper } from "../../Components";
const LandingPage = () => {
  const data = [
    {
      id: "cdZZpaB2kDM",
      title: "Elon Musk talks Twitter, Tesla and how his brain works",
      desc: "In this unedited conversation with head of TED Chris Anderson, Elon Musk — the head of Tesla, SpaceX, Neuralink and The Boring Company — digs into the recent news around his bid to purchase Twitter and gets honest about the biggest regret of his career, how his brain works, the future he envisions for the world and a lot more. (Recorded at TED2022 on April 14, 2022)",
      left: true,
    },
    {
      id: "wDmEPFO_hd0",
      title: "Stand with Ukraine in the Fight against Evil",
      desc: "Ukraine is on the front line of a war between freedom and tyranny, says chess grandmaster and human rights advocate Garry Kasparov. In this blistering call to action, he traces Vladimir Putin's rise to power and details his own path from chess world champion to pro-democracy activist in Russia. His message is a challenge to global leaders to rise in support of Ukraine",
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
