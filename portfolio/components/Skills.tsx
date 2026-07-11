import { skills } from "@/data/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white rounded-3xl px-6">
      <p className="text-blue-600 font-semibold uppercase tracking-wider">
  Technology Stack
</p>

<h2 className="text-5xl font-bold mb-4">
  Technologies I Use Every Day
</h2>

<p className="text-lg text-gray-600 max-w-3xl mb-12">
  Cloud platforms, Kubernetes, infrastructure automation and CI/CD tools used to design, deploy and operate enterprise-grade environments.
</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          
<div
  key={skill.name}
  className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-3 hover:shadow-2xl hover:scale-105 transition duration-300 text-center"
>
  <div className="mb-4 flex justify-center">

<Image src={skill.logo}

alt={skill.name}

width={80}

height={80} className="object-contain h-20 w-20" />
  </div>

  <h3 className="text-xl font-bold text-blue-600">
    {skill.name}
  </h3>

  <p className="text-gray-500 mt-2">
    {skill.description}
  </p>
</div>

        ))}
      </div>
    </section>
  );
}