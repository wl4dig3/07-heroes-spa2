import {HeroCard} from './'
import { getHeroByPublisher } from "../helpers";
import { useMemo } from 'react';

export const HeroList = ({ publiser }) => {
  const heroes = useMemo( () => getHeroByPublisher(publiser), [publiser]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard
        key={hero.id}
        {...hero }
        />
      ))}
    </div>
  );
};
