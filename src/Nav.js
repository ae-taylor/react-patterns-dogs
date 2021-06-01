import { NavLink } from 'react-router-dom';
import "./Nav.css"

/**
 * Navbar
 *
* Props: dogs: array of objects [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [ "Whiskey loves eating popcorn.", ...]
  }, ... }
*
 * App -> Nav
 */



//TODO use active

function Nav({ dogs }) {
  return (
    <nav className="NavBar">
      <NavLink className="Nav-NavLink" exact to="/dogs">
        Home
      </NavLink>
      {dogs.map((dog) => (
        <NavLink className="Nav-NavLink" exact to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
