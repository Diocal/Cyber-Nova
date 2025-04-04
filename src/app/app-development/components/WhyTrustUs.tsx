const WhyTrustUs = () => (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Why Trust Us for App Development?
        </h2>
        <p className="text-xl mb-12">
          Innovative Solutions, Exceptional Results
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: "🎯", title: "Client-Centered Approach", desc: "We focus on your goals and collaborate throughout the process." },
            { icon: "💡", title: "Cutting-Edge Technology", desc: "We use the latest tech to ensure speed, security, and scalability." },
            { icon: "🔍", title: "Transparent Process", desc: "Constant communication to keep you informed at every stage." }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl">{item.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
              <p className="mt-4 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default WhyTrustUs;
  