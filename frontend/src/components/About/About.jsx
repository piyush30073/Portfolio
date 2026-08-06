import "./About.css";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiJavascript } from "react-icons/si";

function About() {

  const skills = [

    {
      icon:<FaHtml5 />,
      name:"HTML",
      value:95
    },

    {
      icon:<FaCss3Alt />,
      name:"CSS",
      value:90
    },

    {
      icon:<SiJavascript />,
      name:"JavaScript",
      value:85
    },

    {
      icon:<FaReact />,
      name:"React",
      value:80
    },

    {
      icon:<FaNodeJs />,
      name:"Node.js",
      value:75
    }

  ];

  return (

<section className="about">

<div className="about-left">

<p className="small-title">

ABOUT ME

</p>

<h2>

Who I Am

</h2>

<div className="line"></div>

<p>

I'm a passionate Full Stack Developer with a strong
foundation in building scalable web applications.
I enjoy problem solving and constantly learning
new technologies.

</p>

<Link
to="about-details"
smooth={true}
duration={700}
offset={-80}
>

<button>

Read More About Me

</button>

</Link>

</div>

<div className="divider"></div>

<div className="about-right">

<p className="small-title">

MY SKILLS

</p>

{

skills.map((skill,index)=>(

<div className="skill" key={index}>

<div className="skill-top">

<div className="skill-name">

<span className="skill-icon">

{skill.icon}

</span>

<span>

{skill.name}

</span>

</div>

<span>

{skill.value}%

</span>

</div>

<div className="progress">

<div
className="progress-fill"
style={{

width:`${skill.value}%`

}}
>

</div>

</div>

</div>

))

}

</div>

</section>

  );

}

export default About;