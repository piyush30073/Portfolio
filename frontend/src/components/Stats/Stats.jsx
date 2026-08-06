import "./Stats.css";
import {
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

function Stats() {

  const stats = [
    {
      icon: <FaCode />,
      number: "10+",
      title: "Projects Built",
    },
    {
      icon: <FaLaptopCode />,
      number: "150+",
      title: "DSA Problems",
    },
    {
      icon: <FaUsers />,
      number: "1+",
      title: "Years Experience",
    },
    {
      icon: <FaTrophy />,
      number: "2",
      title: "SIH Leadership",
    },
  ];

  return (
    <section className="stats">

      <div className="stats-box">

        {stats.map((item, index) => (

          <div className="stat" key={index}>

            <div className="icon">

              {item.icon}

            </div>

            <div className="content">

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;