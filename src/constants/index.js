import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    NextJs,
    illustrator,
    Oracle,
    Python,
    Beats,
    github,
    Demarca,
    Ecommerce,
    Color,
    OncoCura,
    EasyEats,
    Cruise,
    Portfolio,
    wakanda,
    orderain,
    snail,
    Vision,
    StreamEase
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "designProjects",
      title: "DesignProjects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "NextJs Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "NextJs",
      icon: NextJs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Illustrator",
      icon: illustrator,
    },
    {
      name: "Oracle",
      icon: Oracle,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "NED University",
      icon: Python,
      iconBg: "#383E56",
      date: "October 2022 - December 2023",
      points: [
        "Developed innovative applications using Python and related technologies for academic and personal projects.",
        "Collaborated with classmates to design problem-solving, visually appealing projects, emphasizing functionality and user experience.",
        "Implemented interactive, responsive user interfaces, focusing on usability and accessibility.",
        "Achieved 1st Prize in 'Application Development' at CodeSphere, organized by the Software Department of NED University, Karachi.",
      ],
    },
    {
      title: "UI/UX Design Intern",
      company_name: "Codsoft",
      icon: figma,
      iconBg: "#383E56",
      date: "February 2024 - March 2024",
      points: [
        "Designed user interfaces and experiences for e-commerce websites and a food delivery app using Figma.",
        "Applied user-centered design principles to create visually appealing and intuitive layouts.",
        "Gained hands-on experience in creating wireframes, prototypes, and design mockups to enhance usability.",
      ],
    },  
    {
      title: "UI/UX Designer",
      company_name: "Freelancing And Learning",
      icon: figma,
      iconBg: "#383E56",
      date: "April 2024 - Present",
      points: [
        "Deliver user-centered design solutions for diverse projects, including websites and mobile apps.",
        "Collaborat effectively with clients to understand their requirements and transform ideas into functional designs.",
        "Enhance user satisfaction by integrating feedback into design iterations and ensuring alignment with branding.",
        "Develop prototypes, wireframes, and design mockups, emphasizing responsive and accessible user experiences.",
        "Secured Second Prize in the UI/UX Design competition at IBA ProBattle, organized by the CS Society of IBA, Karachi",
      ],
    },  
    {
      title: "React.js Developer",
      company_name: "NED University",
      icon: reactjs,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        "Develop web applications using React.js and related technologies, including Redux, for university and learning projects.",
        "Collaborate with classmates, including designers and backend developers, to create scalable and visually appealing projects.",
        "Implement responsive, interactive user interfaces, prioritizing user experience and modern design principles.",
        "Participate in competitions and hackathons, and secured Second Prize in 'Full Stack Frenzy' at Teknofest Pakistan, held at the Expo Center, Karachi.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Collaborating with Simra has always been a pleasure. Her frontend development and design skills consistently elevate our work to next level.",
      name: "Engr A. Ahad",
      designation: "Student",
      company: "NEDUET",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFofG85rtuVUA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707214101044?e=1743033600&v=beta&t=yeZlFe4NqHLnti9JTHsu3jYmWMJ0LB5pM72DObQ_4iY",
    },
    {
      testimonial:
        "Simra blended simplicity, modernization, and user-friendliness perfectly, delivering a UI that exceeded expectations.",
      name: "Hamza Farooq",
      designation: "Co-founder",
      company: "Orderain",
      image: figma,
    },
    {
      testimonial:
        "Such a beautiful, modern portfolio for my startup she created that I could have never built on my own. Her design skills are truly exceptional.",
      name: "Abdullah Zahid",
      designation: "Student",
      company: "FAST",
      image: figma,
    },
  ];

  const projects = [
    {
      name: "VISION",
      description:
        "As the Front-End Developer for Vision, a Python-Based Virtual Assistant inspired by Iron Man's Jarvis, designed an Interactive GUI Using Pyqt5 and Qt Designer, enhancing the overall User Experience. The project integrated Bard Ai, speech recognition, geolocation, and automation libraries for advanced functionalities. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pyqt5",
          color: "green-text-gradient",
        },
        {
          name: "vitualassistant",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: Vision,
      source_code_link: "https://github.com/SimrahFalak/Vision",
    },
    {
      name: "OncoCura",
      description:
        "Worked as a Front-End Developer on OncoCura, utilizing React to create a user-friendly interface for an AI-Driven Platform that analyzes Cancer Patients' medical records to generate personalized treatment plans. The platform also integrates an e-Store for ethical access to Cancer medications.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: OncoCura,
      source_code_link: "https://github.com/SimrahFalak/OncoCura",
    },
    {
      name: "Stream Ease",
      description:
        "As a Front-End Developer for StreamEase, a movie streaming platform, I contributed to creating a seamless viewing experience by designing an intuitive and visually appealing user interface. The platform was built using HTML, CSS, JavaScript, Node.js, Express, MySQL, and leveraged cloud services for movie storage.",
      tags: [
        {
          name: "Js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: StreamEase,
      source_code_link: "https://github.com/SimrahFalak/StreamEase",
    },
  ];
  
  const designProjects = [
    {
      name: "Beats",
      description:
        "Homepage of Beats Web that features sleek prototype animations and an intuitive layout, allowing users to explore the brand's iconic wireless headphones. The design focuses on delivering a seamless and engaging user experience.",
      tags: [
        {
          name: "beats",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "design",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: Beats,
      source_code_link: "https://www.figma.com/design/c0qNksy1sMYhM83CZkgrPs/beats?node-id=0-1&t=u7H01bmsi2Bzibxz-1",
    },
    {
      name: "DeMarca",
      description:
        "The homepage and product page of Demarca, an clothing brand, showcase a sophisticated design that blends tradition with modernity. Featuring visually stunning mockup and interactive prototype animations.",
      tags: [
        {
          name: "demarca",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "design",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: Demarca,
      source_code_link: "https://www.figma.com/design/An7MlmccBW0RbGWCdclryC/DeMarca?node-id=1-2&t=IkS8NtVfEXIucdTH-1",
    },
    {
      name: "DeMarca2",
      description:
        "A modern e-commerce homepage design showcasing a sleek interface. The design highlights products with interactive elements, customer feedback presented in visually appealing manner, and intuitive layout for seamless navigation.",
      tags: [
        {
          name: "demarca",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "design",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: Ecommerce,
      source_code_link: "https://www.figma.com/design/rO5LMLqFTN9eLETpOwgsfC/E-commerce-Web?node-id=0-1&t=wVkM7793DiDmFAYb-1",
    },
    {
      name: "Color",
      description:
        "A modern web homepage design featuring sleek animations and decent use of colors. The centerpiece of the design is an energetic image of a girl joyfully jumping, radiating positivity and excitement. The use of minimalist typography enhances the overall aesthetic",
      tags: [
        {
          name: "color",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "design",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: Color,
      source_code_link: "https://www.figma.com/design/VpPvgs6Ww28uroCAQ0NNij/color?node-id=1-2&t=zZxBaixVCndAZNsb-1",
    },
    {
      name: "OncoCura",
      description:
        "OncoCura features a thoughtfully designed user interface that prioritizes simplicity. The use of calming blue and white tones creates a soothing environment, while the minimalist typography and visuals aligned with the theme of healthcare enhance the overall user experience.",
      tags: [
        {
          name: "oncocura",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "health",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: OncoCura,
      source_code_link: "https://www.figma.com/design/veW5AZjy0FRbUKc4cSQJKf/OncoCura?node-id=0-1&t=NNP4RIwP3xnp4e8j-1",
    },
    {
      name: "EasyEats",
      description:
        "EasyEats features a bold red and white theme that embodies the passion and diversity of food culture. The minimalist typography ensures readability, while the use of high-quality visuals and engaging animations brings experience to life. This design, got 2nd prize at IBA ProBattle.",
      tags: [
        {
          name: "easyeats",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "diversity",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: EasyEats,
      source_code_link: "https://www.figma.com/design/iRNvY2AoqWuCyd6hJIkH2Q/EasyEats?node-id=0-1&t=RyNbPAjrgiXsVrZg-1",
    },
    {
      name: "Tom Cruise",
      description:
        "Tom Cruise features an elegant design with aesthetic theme, exuding sophistication and timeless charm. The homepage captivates a seamless slideshow animation that dynamically transitions between high-quality, aesthetic images of Tom Cruise. Each image change is thoughtfully timed to create an immersive visual experience, celebrating the actor's iconic presence.",
      tags: [
        {
          name: "tomcruise",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "aesthetic",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: Cruise,
      source_code_link: "https://www.figma.com/design/Rau9Gcpsk2ZckolXjLMnGQ/Tom-Cruise?node-id=10-12&t=INU2E4oGa0nnk54Y-1",
    },
    {
      name: "AA Portfolio",
      description:
        "It is a freelancing project crafted for a startup, featuring a sleek black-and-white elegant theme. The design emphasizes modernity and professionalism, with a clean layout that beautifully showcases the startup's projects and services. Thoughtfully placed typography and visually balanced elements highlight the portfolio's content, creating a powerful first impression.",
      tags: [
        {
          name: "portfolio",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "modern",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: Portfolio,
      source_code_link: "https://www.figma.com/design/kqijupJmhZbekJ4S9A3rY9/AA-Portfolio?node-id=0-1&t=xwKokLiUoa4DdxU1-1",
    },
    {
      name: "Snail",
      description: 
      `The Snail Taxi app, a freelancing project for a foreign client, showcases a modern and playful design in a clean white and pink theme, featuring seamless vector illustrations, consistent layouts, intuitive navigation, and simple, elegant fonts. Due to confidentiality, the Figma link for this project is not shared here but can be shown on demand.`,
      tags: [
        {
          name: "taxiapp",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "freelance",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: figma,
      image: snail,
      source_code_link: "",
    },
    // {      
    //   name: "Orderain",
    //   description:
    //     "Orderain, another freelance project, is a no-code web platform designed with an elegant aesthetic, offering a user-friendly interface that ensures accessibility for everyone.\n Due to confidentiality, the project details are not shared here but can be shown on demand.",
    //   tags: [
    //     {
    //       name: "nocode",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "figma",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "freelance",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   linkLogo: figma,
    //   image: orderain,
    //   source_code_link: "",
    // },
    // {
    //   name: "Wakanda",
    //   description:
    //     "WAKANDA is a cutting-edge UI design featuring a dynamic homepage that smoothly navigates a 3D butterfly from a galaxy to the heart of Wakanda's lush forest. The mesmerizing animation offers a captivating journey, blending futuristic and natural elements. Its beautiful transitions and immersive visuals create a truly fascinating experience for the user.",
    //   tags: [
    //     {
    //       name: "dora",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "figma",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "modern",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   linkLogo: figma,
    //   image: wakanda,
    //   source_code_link: "",
    // },

  ];

  export { services, technologies, experiences, testimonials, projects, navLinks, designProjects };