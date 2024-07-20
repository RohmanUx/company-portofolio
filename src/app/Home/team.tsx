import CardBlog from "@/components/cores/cardBlog";
import PageLayout from "@/components/layouts/PageLayout";
import { getEntryBlogPost } from "@/utils/contentful";
import * as React from "react";

interface IAppProps {}

const Team: React.FunctionComponent<IAppProps> = async (props) => {
  const blogsList = await getEntryBlogPost();
  console.log(blogsList);
  const printBlog = () => {
    if (blogsList?.length) {
      return blogsList.map((val: any) => {
        const { sys, fields } = val;
        console.log("IMAGE MEDIA", fields.image.fields.file);
        return (
          <CardBlog
            id={sys.id}
            key={sys.id}
            title={fields.title}
            author={fields.author}
            image={fields.image.fields.file.url}
          />
        );
      });
    }
  };

  return (
    <div className="h-[800px]">
      <div className="border-b-[1px] border-black">
        <div className="h-full flex justify-center flex-col">
          <div id="page-4-0" className="h-full">
            <h1 className="text-[36px] py-4">
              We, as a team,
              <br />
              can help your financial needs
            </h1>
            <p id="list-16" style={{ color: "black" }} className="py-2">
              Do you want to consult with us?
              <br />
              This way we can provide solutions during bad times.
            </p>
          </div>

          <PageLayout>
            <div className="flex flex-wrap justify-center px-60 ">
              {" "}
              {printBlog()}{" "}
            </div>
          </PageLayout>
        </div>
      </div>

      <div>
        <div className="h-[700px] flex flex-col text-center items-center content-center justify-center">
          <h1 className="2xl:text-center md:text-[26px]  lg:text-[34px]">
            Ready to start a new
            <br />
            Experience
          </h1>
          <p className="md:mx-8 text-center my-8">
            the most trusted place for people and businesses to track all of
            your account balances, transactions, etc.
          </p>
          <button className="bg-[#535c47] hover:bg-black hover:text-white py-2 px-4 text-white rounded-full">
            Contact | ✉️
          </button>
          <p className="text-[86px] text-[#000000bd] 2xl:text-[182px] ">
            {" "}
            Greenly.id{" "}
          </p>
        </div>
      </div>
      <div id="page-6-4" className="py-2 ">
        <p>© 2024 Rahman, All rights reserved </p>
        <div id="list-34">
          Terms & Conditions
          <br />
          <ul>
            <li> Privacy Policy </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Team;
