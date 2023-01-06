import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroesById";

const Hero = () => {
  const [hero, setHero] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  useEffect(() => {
    const myHero = getHeroById(id);

    // if (!myHero) return <Navigate to="/" />;
    if (!myHero) {
      navigate("/");
      return;
    }

    setHero(myHero);
  }, []);

  return (
    hero && (
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src={`/src/assets/${hero.id}.jpg`}
            alt={`${hero.superhero} image`}
            className="img-thumbnail"
          />
        </div>
        <div className="col-md-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {hero.first_appearance}
            </li>
          </ul>

          <h5 className="mt-4">Characters</h5>
          <p>{hero.characters}</p>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReturn}
          >
            Return
          </button>
        </div>
      </div>
    )
  );
};

export default Hero;
