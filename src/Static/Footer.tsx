import { Github, Linkedin, FileDown } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white text-center p-6 mt-10">
    <div className="flex justify-center gap-6">
      <a
        href="https://github.com/Osujoye"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
      >
        <Github size={18} />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/ebunosujoye/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
      >
        <Linkedin size={18} />
        LinkedIn
      </a>

      <a
        href="/Ebunoluwa-Osujoye-CV.pdf"
        download
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
      >
        <FileDown size={18} />
        Download CV
      </a>
    </div>
  </footer>
);

export default Footer;
