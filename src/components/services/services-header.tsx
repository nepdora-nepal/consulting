export default function ServicesHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
      <div className="inline-block px-5 py-2 mb-2 rounded-lg bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
        Educational Paths
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
        Master New Skills with Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 italic">
          Learning Modules
        </span>
      </h1>
      <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
        Unlock your potential through expert-led courses and personalized
        mentorship designed for modern learners.
      </p>
    </div>
  );
}
