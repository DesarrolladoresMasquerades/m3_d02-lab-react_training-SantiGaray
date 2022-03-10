import Rating from './Rating';
import './DriverCard.css';

export default function DriverCard(props) {
const {name, img, rating, car} = props
const {model, licensePlate} = car

  return (
    <div className="DriverCard">
      <div>
        <img src={img} alt="Driver" />
      </div>
      <div class="text">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {model}-{licensePlate}
        </p>
      </div>
    </div>
  );
}
