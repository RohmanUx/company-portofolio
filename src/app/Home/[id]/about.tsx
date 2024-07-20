import * as React from "react";
interface IAppProps {}

const About: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <div className="md:my-[0px] flex h-[700px] w-full my-80 lg:px-[160px] py-28 md:px-[35px] md:h-[800px]"> 
        <div className="w-[800px] border-[1px] border-black">
          <div id="pro-1-0" className="top-5">
            {" "}
            <div id="pro-1-2">
              {" "}
              No.1 media <br /> Talk by dart <br /> Tech{" "}
            </div>{" "}
          </div>
        </div>

        <div className="pl-30 flex ml-30">
          {" "}
          <div className="md:ml-[60px] lg:ml-[80px]flex flex-col ">
            <p> About us  </p> <br />
            <h1 className="text-[56px] md:text-[38px]">
              {" "}
              Why story <br /> Luna can Finance <br /> {" "} 
            </h1>
            <p className="py-6">
              {" "}
              This company was established several years ago by a passionate
              group of individuals. Since its inception, it has achieved many
              milestones. <br />
              <br />
              Our team consists of several amazing people. They have diverse
              experiences and work hard to achieve the company’s goals. <br />
              <br />    
              We are a friendly and collaborative team. We value cooperation and
              support each other. Working here feels like being with friends.
            </p>
            <br />
            <button className="bg-[#535c47] hover:bg-black w-40 py-2 px-4 text-white rounded-full ">
              {" "}
              Tour location 🗺️{" "}
            </button> {" "}
          </div>
        </div>
        <div> </div>
      </div>
    </div>
  );
};

export default About;
