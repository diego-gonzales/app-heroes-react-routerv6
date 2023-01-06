import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <img
              src={`src/assets/${id}.jpg`}
              alt={`${superhero} image`}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego} </p>
              {alter_ego !== characters && (
                <p className="card-text">
                  <small className="text-muted">{characters}</small>
                </p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
