import Link from "next/link";

const servicesData = [
  { title: "App Development", description: "Building modern applications.", link: "/app-development" },
  { title: "Cybersecurity", description: "Protecting your business from threats.", link: "/cybersecurity" },
  { title: "Artificial Intelligence", description: "Leveraging AI to improve processes.", link: "/artificial-intelligence" },
  { title: "Data Engineering & Web Scraping", description: "Extracting and processing valuable data from the web.", link: "/data-engineering" },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-transparent text-white py-16 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-extrabold tracking-wide mb-8 text-left text-4xl bg-gradient-to-r from-purple-400 via-purple-500 to-green-500 bg-clip-text text-transparent"
        >
          Services
        </h2>

        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex justify-between items-center border-b border-gray-500 pb-4 ${
                index === 0 ? "pt-4 border-t" : ""
              }`}
            >
              <div className="text-lg font-semibold text-white">
                {service.title}
              </div>
              <Link href={service.link}>
                <button
                  className="px-6 py-2 rounded-full text-sm font-medium border-2 border-purple-500 transition-all hover:bg-purple-500 hover:text-white"
                >
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;