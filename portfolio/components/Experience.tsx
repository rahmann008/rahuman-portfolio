import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">
        Experience
      </h2>

      {experiences.map((experience) => (
        <div
          key={experience.company}
          className="bg-white rounded-lg p-6 shadow-sm mb-6"
        >
          <h3 className="text-xl font-semibold">
            {experience.company}
          </h3>

          <p className="text-lg text-gray-700 mt-2">
            {experience.role}
          </p>

          <p className="text-gray-500 mt-1">
            {experience.duration}
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            {experience.description.map((item) => (
            <li key={item}>{item}</li>
            ))}
          </ul>

        </div>
      ))}
    </section>
  );
}