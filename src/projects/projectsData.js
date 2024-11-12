import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
  1: {
    title: "ZyntaX Project",
    image: projectOne,
    description: (
      <>
        <p>
         In this project, my team developed an HTML website,
         for which I designed the logo and created additional graphics.
        </p>
      </>
    ),
    
    demo: "https://pichapie234.github.io/Zyntaxx/",
  },
  2: {
    title: "Cavite State University HTML Website",
    image: projectTwo,
    description: (
      <>
        <p>
        These are my team's HTML designs created from scratch.
        </p>
      </>
    ),
    
    demo: "https://cvsu111.netlify.app",
  },
  3: {
    title: "Invitation Project",
    image: projectThree,
    description: (
      <>
        <p>
        I designed an invitation for my project using Inkscape.
        </p>
      </>
    ),
   
    demo:  projectThree,
  },

  4: {
    title: "Digital Drawing",
    image: projectFour,
    description: (
      <>
        <p>
        I created a digital illustration using Inkscape for my project.
        </p>
      </>
    ),
   
    demo: projectFour,
  },
};

export default projects;