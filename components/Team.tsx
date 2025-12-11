import Image from "next/image";
import { FaUserCheck } from "react-icons/fa6";

const Team = () => {
  const team = [
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
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption text-primary-green -mt-3.5 -ml-6 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-primary-green text-3xl font-bold sm:text-4xl">
              Our Team
            </h2>
          </div>
          <div className="text-primary-blue mt-6 sm:mt-0">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              perferendis, corrupti dignissimos cupiditate consequuntur saepe
              ipsam illum fugiat aliquam eum nisi dolorem consectetur minus aut
              ipsa mollitia soluta tempora magnam.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <FaUserCheck className="hover:text-primary-green h-96 w-full rounded-md object-cover object-top text-slate-900 transition-all duration-500 group-hover:h-90 group-hover:rounded-xl" />
                {/* <Image
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 group-hover:h-90 group-hover:rounded-xl hover:grayscale-0"
                  src="/logo/logo.png"
                  alt="team member"
                  width={826}
                  height={1239}
                /> */}
                <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                  <div className="flex justify-between">
                    <h3 className="group-hover:text-primary-green text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block lg:translate-y-6 text-sm lg:opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
