interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "#",
    image: "",
  },
  {
    title: "Todo App",
    description: "A task manager with authentication and real-time updates.",
    link: "https://github.com/Osujoye/To-do-list/tree/main/To-do-list",
    image: "public/todo.jpg",
  },
  {
    title: "Calculator",
    description: "A personal calculator built with React and CSS.",
    link: "https://github.com/Osujoye/Calculate",
    image: "public/calculator.jpg",
  },
];

const Projects = () => (
  <section className="p-10 bg-gray-100">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-700 mb-2">{project.description}</p>
          <a href={project.link} className="text-blue-600 underline">
            View Project
          </a>
          <img src={project.image} alt="" />
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
