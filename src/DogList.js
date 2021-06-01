import { Link } from 'react-router-dom';
import './DogList.css';

/** Shows list of dogs with name and image and link to that dog's detail page
 *
 * Props: dogs: array of objects [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [ "Whiskey loves eating popcorn.", ...]
    }, ... }
 *
 * App --> DogList
 */
function DogList({ dogs }) {
  return dogs.map((dog) => (
    <div className="DogList-container" id={dog.name}>
      <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      <div>
        <img className="DogList-image" src={dog.src} alt={dog.name} />
      </div>
    </div>
  ));
}

export default DogList;
