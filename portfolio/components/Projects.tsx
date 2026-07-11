import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects"className="py-20 bg-gradient-to-b from-slate-50 to-white rounded-3xl px-6">
      <p className="text-blue-600 font-semibold uppercase tracking-wider">
  Featured Work
</p>

<h2 className="text-5xl font-bold mb-12">
  Projects I've Delivered
</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
  <div
    key={project.name}
    className={
      index === 0
        ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-8 shadow-2xl"
        : "bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] transition duration-300"
    }
  >
            <h3 className="text-xl font-semibold">
              {project.name}
            </h3>

            <p className="mt-3 text-gray-700">
              {project.description}
            </p>
            
<div className="mt-4 flex flex-wrap gap-2">
  {project.technologies.map((technology) => (
    <span
      key={technology}
      className={
  index === 0
    ? "bg-white/20 px-3 py-1 rounded-md text-sm"
    : "bg-gray-100 border border-gray-300 px-3 py-1 rounded-md text-sm"
}
    >
      {technology}
    </span>
  ))}
</div>

          </div>
        ))}
      </div>
    </section>
  );
}