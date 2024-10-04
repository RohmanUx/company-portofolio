import * as React from "react";

interface IAppProps {}

const About: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="py-16 md:py-28 lg:px-36 md:px-8 px-4 flex flex-col md:flex-row gap-8 md:gap-16 items-center bg-gray-50">
      {/* Map Container */}
      <div className="flex-shrink-0 border border-gray-300 p-4 md:p-8 w-full max-w-[800px] relative overflow-hidden rounded-lg shadow-md">
        {/* Google Maps Embed */}
        <div className="overflow-hidden rounded-lg">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d506541.59908834886!2d112.7251968!3d-7.313817600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1726253732945!5m2!1sid!2sid"
            width="100%"
            height="450"
            loading="lazy"
            className="w-full h-full object-cover opacity-90"
            style={{ border: 0 }}
            allowFullScreen
            title="Company Location"
          ></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d506541.59908834886!2d112.7251968!3d-7.313817600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1726253732945!5m2!1sid!2sid" width="12" height="12" loading="lazy" className="object-cover w-full h-[500px] opacity-90"> </iframe>

        </div>
      </div>

      {/* Information Section */}
      <div className="flex-1 flex flex-col">
        <div className="mb-4 md:mb-4">
          <p className="text-sm md:text-sm py-1 px-2 rounded-full border w-36 border-black/80 mb-4">Company location</p>
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-medium mt-1 font-mono">
            Why Story <br /> Luna Can Finance
          </h1>
        </div>

        <p className="text-base md:text-sm leading-relaxed mb-3 font-mono">
          This company was established several years ago by a passionate group
          of individuals. Since its inception, it has achieved many milestones.
          <br />
          <br />
          Our team consists of several amazing people with diverse experiences
          who work hard to achieve the company’s goals.
        </p>

        <button className="bg-[#535c47] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 transition w-40 py-1 px-3 text-white rounded-full shadow-md">
          Tour location 🗺️
        </button>
      </div>
    </div>
  );
};

export default About;
