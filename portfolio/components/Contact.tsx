import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white rounded-3xl px-10 mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-400 font-semibold uppercase tracking-wider">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Build Something Great
        </h2>

        <p className="mt-6 text-slate-300 text-lg">
          Open to DevOps, Platform Engineering, Cloud Architecture and
          Kubernetes opportunities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
  <a
    href="mailto:your-email@example.com"
    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Email Me
  </a>

  <a href={profile.linkedin} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    LinkedIn
  </a>

  <a href={profile.github} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    GitHub
  </a>
</div>
            </div>
    </section>
  );
}
