const Stats = () => {
  const stats = [
    {
      title: "30",
      description: "Years delivering IT and industrial solutions",
    },
    {
      title: "15+",
      description: "Major Industries Served.",
    },
    {
      title: "98%",
      description: "On Time Delivery for Projects.",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl text-primary-blue">
            Al Sawab
          </h2>
          <p>In Numbers</p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-4">
              <div className="text-5xl font-bold text-primary-blue">
                {stat.title}
              </div>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
