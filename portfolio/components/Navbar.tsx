export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-xl font-bold">
          Rahuman Ali Sikkendar
        </h1>

        <p className="text-xs text-gray-500">
Cloud DevOps Engineer
</p>

        <div className="flex gap-6 text-sm font-medium">
         <a href="#home" className="transition duration-200 hover:text-blue-600">Home</a>
         <a href="#about" className="transition duration-200 hover:text-blue-600">About</a>
         <a href="#projects" className="transition duration-200 hover:text-blue-600">Projects</a>
         <a href="#skills" className="transition duration-200 hover:text-blue-600">Skills</a>
         <a href="#contact" className="transition duration-200 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}