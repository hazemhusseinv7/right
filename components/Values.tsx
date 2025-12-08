import { FaShieldAlt } from "react-icons/fa";
import {
  FaAward,
  FaBolt,
  FaChartLine,
  FaComments,
  FaHandshake,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa6";

const Values = () => {
  const values = [
    {
      title: "Commitment",
      description:
        "Dedicated to delivering solutions that truly meet the client needs.",
      icon: FaHandshake,
    },
    {
      title: "Excellence",
      description:
        "Strive for the highest standards in every service and project.",
      icon: FaAward,
    },
    {
      title: "Innovation",
      description:
        "Leveraging top technology to solve real business challenges.",
      icon: FaLightbulb,
    },
    {
      title: "Agility",
      description: "Flexible and dynamic in adapting to changing requirements.",
      icon: FaBolt,
    },
    {
      title: "Reliability",
      description: "Dependable solutions that organizations can trust.",
      icon: FaShieldAlt,
    },
    {
      title: "Proven Track Record",
      description: "Years of successful projects across diverse industries.",
      icon: FaChartLine,
    },
    {
      title: "Trusted Partner",
      description:
        "Building confidence through consistent and transparent delivery.",
      icon: FaUsers,
    },
    {
      title: "Feedback Driven",
      description: "Listening and evolving based on our clients' insights.",
      icon: FaComments,
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl text-primary-blue">
            Our Values
          </h2>
          <p>
            At RIGHT, our core values define how we approach every project and
            partnership. They are the foundation of our commitment to delivering
            exceptional technology solutions while building lasting
            relationships with our clients.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-center gap-2">
                <value.icon className="size-5 text-primary-green" />
                <h3 className="text-sm font-medium">{value.title}</h3>
              </div>
              <p className="text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
