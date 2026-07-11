import { profile } from "@/data/profile";
//import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center max-w-5xl relative">
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
</div>
      
      <p className="text-blue-600 font-semibold uppercase tracking-wider">
  Hi, I'm
</p>
      <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {profile.name}
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        {profile.title}
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        {profile.tagline}
      </p>

      <div className="mt-8 flex gap-4">
        

        <a href={profile.cv} className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">Download CV</a>
        <a href={profile.linkedin} className="px-5 py-2 text-sm font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200">LinkedIn</a>
        <a href={profile.github} className="px-5 py-2 text-sm font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200">GitHub</a>
      </div>

     <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 max-w-4xl">
  <div className="grid grid-cols-3 gap-6 text-center">
    <div>
      <h3 className="text-3xl font-bold text-blue-600">13+</h3>
      <p>Years Experience</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-blue-600">Azure</h3>
      <p>AWS & Kubernetes</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-blue-600">Current</h3>
      <p>Assistant Manager</p>
    </div>
  </div>
</div>

      <p className="mt-12 text-gray-500 animate-bounce">
  ↓ Scroll to Explore
</p>

    </section>
  );
}