import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroesList = ({ publisher }) => {
  // Here we use useMemo because if we had a state, and it changes, getHeroesByPublisher should be executed every time, for example if we had a state for a counter;
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroesList;
