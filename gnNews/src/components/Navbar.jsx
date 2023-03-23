import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import ar from "../assets/images/ar.svg";
import ca from "../assets/images/ca.svg";
import ch from "../assets/images/ch.svg";
import cz from "../assets/images/cz.svg";
import gb from "../assets/images/gb.svg";
import gr from "../assets/images/gr.svg";
import nl from "../assets/images/nl.svg";
import tr from "../assets/images/tr.svg";
import us from "../assets/images/us.svg";
import za from "../assets/images/za.svg";

import "./Navbar.css";

export const Navbar = () => {
  const countries = [
    { id: "ar", name: "Argentina", img: ar },
    { id: "ca", name: "Canada", img: ca },
    { id: "ch", name: "Switzerland", img: ch },
    { id: "cz", name: "Czech Republic", img: cz },
    { id: "gb", name: "United Kingdom", img: gb },
    { id: "gr", name: "Greece", img: gr },
    { id: "nl", name: "Netherlands", img: nl },
    { id: "tr", name: "Turkey", img: tr },
    { id: "us", name: "United States", img: us },
    { id: "za", name: "South Africa", img: za },
  ];

  return (
    <div>
      <h1>NEWS From:</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <div className="country">
              <span>
                <img src={country.img} alt={country.name} />
              </span>
              <Button component={Link} to={`/country/${country.id}`}>
                {country.name}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
