import { useParams } from 'react-router-dom';

/**
 * Shows details of a single dog
 *
 * Props: dogs: array of objects [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [ "Whiskey loves eating popcorn.", ...]
    }, ... }
 *
 * App -> DogDetails
 */
function DogDetails({ dogs }) {
  const { name } = useParams();
  let currDog = dogs.find((dog) => dog.name === name);
  console.log('name, currDog ====', name, currDog);
  return (
    <div>
      <h2>{currDog.name}</h2>
      <img src={currDog.src} />
      <p>Age: {currDog.age}</p>
      <ul>
        {currDog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
