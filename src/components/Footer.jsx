const Footer = () => {
  const links = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <div className="pb-37">
      <div className="py-11 text-gray-300">
        Questions? Call <span className="underline">000-000-000-0000</span>
      </div>
      <div className="max-w-6xl  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm mb-8">
        {links.map((link) => (
          <div key={link} className="text-gray-300">
            <a href="#" className="underline text-decoration-none">
              {link}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-15">
        <select
          className="pr-9 border p-1 border-gray-500 mr-3 rounded"
          name=""
          id=""
        >
          <option className="text-black" value="English">
            English
          </option>
          <option className="text-black" value="Hindi">
            हिन्दी
          </option>
        </select>
      </div>
      <div>
        <p className="text-sm mt-8 text-gray-300">Netflix India</p>
      </div>
      <div className="mt-8 ">
        <p className="text-sm text-gray-300">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-500 underline"> Learn more.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
