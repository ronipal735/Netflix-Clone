const Reasons = () => {
  const cards = [
    {
      title: "Enjoy on your TV",
      text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV and more.",
    },
    {
      title: "Download your shows to watch offline",
      text: "Save your favourites easily and always have something to watch.",
    },
    {
      title: "Watch everywhere",
      text: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    },
    {
      title: "Create profiles for kids",
      text: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    },
  ];

  return (
    <div className="mt-11">
      <h3 className="text-2xl sm:text-2xl font-bold mb-4">
        More reasons to join
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="p-6 rounded-2xl bg-linear-to-b from-blue-900 to-purple-950 min-h-[280px]"
          >
            <h4 className="text-lg sm:text-xl font-bold mb-3">{c.title}</h4>
            <p className="text-sm sm:text-base text-gray-300">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
