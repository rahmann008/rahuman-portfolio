import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white rounded-3xl px-10"
    >
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-3 flex justify-center">
  <Image src="/images/profile.jpg" alt="Rahuman Ali Sikkendar" width={300} height={300} className="rounded-3xl shadow-2xl object-cover border-4 border-white hover:scale-105 transition duration-500" />
</div>
        
        {/* Left Side */}
        <div className="lg:col-span-5">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Building enterprise cloud platforms that scale.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            I am a Senior DevOps & Cloud Engineer with more than
            13 years of experience delivering enterprise cloud
            platforms, automation solutions and Kubernetes-based
            infrastructure across Azure and AWS.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">
              13+
            </h3>
            <p className="mt-2">Years Experience</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">
              Azure
            </h3>
            <p className="mt-2">AWS & Kubernetes</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">
              AKS
            </h3>
            <p className="mt-2">Platform Specialist</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">
              DevOps
            </h3>
            <p className="mt-2">Automation First</p>
          </div>
        </div>

      </div>
    </section>
  );
}