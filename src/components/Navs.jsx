import { Link } from 'react-router-dom';

const LINKS = [
  { text: "Home", to: "/" },
  { text: "Starred", to: "/Starred" },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (<li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* <h1> Navs</h1> */}
    </div>
  );
};

export default Navs;
