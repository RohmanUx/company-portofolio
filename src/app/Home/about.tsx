import * as React from "react";

interface IAppProps {}

const About: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="py-28 md:py-32 lg:px-40 md:px-8 flex flex-col md:flex-row gap-10 md:gap-16 items-center bg-gray-50">
      <div className="flex-shrink-0 border border-black p-8 w-full max-w-[800px] relative overflow-hidden">
        {/* Google Maps Background */}
        <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d506541.59908834886!2d112.7251968!3d-7.313817600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1726253732945!5m2!1sid!2sid" width="12" height="12" loading="lazy" className="object-cover w-full h-[500px] opacity-90"> </iframe>
                  </div>
        <div className="relative z-10 text-center">
          <p className="text-xl font-semibold text-white">No.1 Media</p>
          <p className="text-lg mt-2 text-white">Talk by Dart Tech</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="mb-8">
          <p className="text-xl font-semibold">Location company </p>
          <h1 className="text-4xl md:text-5xl font-medium mt-4">
            Why Story <br /> Luna Can Finance
          </h1>
        </div>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          This company was established several years ago by a passionate
          group of individuals. Since its inception, it has achieved many
          milestones. <br />
          <br />
          Our team consists of several amazing people. They have diverse
          experiences and work hard to achieve the company’s goals. <br />
                  </p>

        <button className="bg-[#535c47] hover:bg-black w-48 py-2 px-4 text-white rounded-full">
          Tour Location 🗺️
        </button>
      </div>
    </div>
  );
};

export default About;
