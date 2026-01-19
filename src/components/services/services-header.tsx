export default function ServicesHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
      <div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider">
        Our Expertise
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
        Elevate Your Business with Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Services
        </span>
      </h1>
      <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
        We provide strategic solutions and technical excellence to help your
        business thrive in a digital-first world.
      </p>
    </div>
  );
}
