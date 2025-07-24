export default function Skill() {
  const skills = [
    {
      name: "R Programming",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  return (
    <section className="p-6 bg-amber-500 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img src={skill.logo} alt={skill.name} className="w-14 h-14 mb-2" />
            <p className="text-sm font-semibold text-amber-500">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
