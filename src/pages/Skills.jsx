import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiJavascript,
  SiPython,
  SiFlutter, // ✅ Flutter icon yang benar
} from "react-icons/si";
import { CircleDot } from "lucide-react";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      id="skills"
    >
      <div className="flex flex-col w-full max-w-(--breakpoint-xl) px-4 lg:px-0 gap-4">
        {/* TITLE */}
        <h1 className="flex items-center text-2xl gap-2 text-white justify-center bg-primary p-6 border-2 border-secondary rounded-3xl">
          <CircleDot className="text-red-300" /> Technical Skills
        </h1>

        {/* ================= CORE STACK ================= */}
        <div className="bg-primary border-2 border-secondary rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-6 text-red-300">
            Core Frontend Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <SkillItem icon={<FaReact />} name="React.js" />
            <SkillItem icon={<RiNextjsLine />} name="Next.js" />
            <SkillItem icon={<TbBrandVite />} name="Vite.js" />
            <SkillItem icon={<RiTailwindCssFill />} name="Tailwind CSS" />
            <SkillItem icon={<FaBootstrap />} name="Bootstrap" />
            <SkillItem icon={<SiJavascript />} name="JavaScript (ES6+)" />
          </div>
        </div>

        {/* ================= BACKEND & DATABASE ================= */}
        <div className="bg-primary border-2 border-secondary rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-6 text-red-300">
            Backend & Database
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <SkillItem icon={<FaNodeJs />} name="Node.js" />
            <SkillItem icon={<FaLaravel />} name="Laravel" />
            <SkillItem icon={<SiPostgresql />} name="PostgreSQL" />
            <SkillItem icon={<SiSupabase />} name="Supabase" />
            <SkillItem icon={<SiFirebase />} name="Firebase" />
          </div>
        </div>

        {/* ================= TOOLS & OTHERS ================= */}
        <div className="bg-primary border-2 border-secondary rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-6 text-red-300">
            Tools & Others
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <SkillItem icon={<FaFigma />} name="Figma" />
            <SkillItem icon={<SiFlutter />} name="Flutter" />
            <SkillItem icon={<SiPython />} name="Python (AI Integration)" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary/10 hover:bg-secondary/20 transition-all p-6 rounded-2xl gap-4 group">
      <div className="text-5xl text-white group-hover:text-red-300 transition-all">
        {icon}
      </div>
      <p className="font-medium text-center text-sm">{name}</p>
    </div>
  );
};

export default Skills;
