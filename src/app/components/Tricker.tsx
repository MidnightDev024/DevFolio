const Ticker = () => {
  const skills = [
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Reliable",
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
  ];

  // Duplicate the skills array to create the seamless loop effect
  const extendedSkills = [...skills, ...skills];

  return (
    <div className="w-full py-8 bg-slate-800/50 border-y border-white/10 overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-track">
          {extendedSkills.map((skill, index) => (
            <div key={index} className="flex items-center flex-shrink-0 mx-4">
              <span className="text-teal-400 text-2xl font-bold mr-2">✓</span>
              <span className="text-lg text-slate-300 whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;