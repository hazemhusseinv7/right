import { FaUser } from "react-icons/fa6";
// import Image from "next/image";

const Team = () => {
  const members = [
    {
      name: "Name",
      role: "Role",
    },
    {
      name: "Name",
      role: "Role",
    },
    {
      name: "Name",
      role: "Role",
    },
    {
      name: "Name",
      role: "Role",
    },
    {
      name: "Name",
      role: "Role",
    },
    {
      name: "Name",
      role: "Role",
    },
    {
      name: "Name",
      role: "Role",
    },
    {
      name: "Name",
      role: "Role",
    },
  ];

  return (
    <section className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">
          Our team
        </h2>

        <div>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {members.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 flex justify-center items-center">
                  <FaUser className="size-5" />
                  {/* <Image
                    className="aspect-square rounded-full object-cover"
                    src={}
                    alt={member.name}
                    height={460}
                    width={460}
                    loading="lazy"
                  /> */}
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
