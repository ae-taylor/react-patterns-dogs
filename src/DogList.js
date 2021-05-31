import { useHistory, Link } from "react-router-dom";
/** Shows list of information about each dog
 * 
 * App --> DogList
 */
function DogList({dogs}) {
  const history = useHistory()
  console.log(history)

  function handleClick(evt) {
    console.log(`we made it to handleClick on DogList`)
    console.log(`history in handleClick`, history)
    console.log(`this is the target id `, evt.target)
    history.push(`/dogs/${evt.target.id}`)
  }

  return (
    dogs.map(dog => 
        <div id={dog.name}>
        <img src={dog.src} alt={dog.name}/>
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      </div>)   
  );
}

export default DogList;