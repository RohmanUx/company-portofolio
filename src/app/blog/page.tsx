


"use Client";
import PageLayout from "@/components/layouts/PageLayout";
import { getEntryBlogPost } from "@/utils/contentful";
import { Badge } from "lucide-react";
import * as React from "react";
import Image from "next/image";
import CardBlog from "@/components/cores/cardBlog";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = async (props) => {
  const blogsList = await getEntryBlogPost();
  console.log(blogsList);

  const printBlog = () => {
    if (blogsList?.length) {
      return blogsList.map((val: any) => {
        const { sys, fields } = val;
        // console.log("fields", fields);
        // console.log("sysin loop", sys);

        // // Pengecekan apakah fields dan fields.image ada
        // if (!fields || !fields.image || !fields.image.fields || !fields.image.fields.file) {
        //   console.warn("Incomplete data for entry:", val);
        //   return null;
        // }
        // const imageUrl = fields.image.fields.file.url;

        // desain per boxnya
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

  // const imageUrl = fields.image.fields.file.url;

  //       return (
  //         <div key={sys.id} className="flex w-96 p-4 shadow-md rounded-md">
  //           <div className="w-1/3">
  //             {" "}
  //             <Image
  //               src={`https:${fields.image.fields.file.url} `}
  //               width={100}
  //               height={100}
  //               alt="image"
  //             />
  //           </div>
  //           <div>
  //             {/*<p> </p>  */}
  //             <p> (val.title) </p>
  //             <h3 className="font-bold text-lg"> {fields.title} </h3>
  //             <p> {fields.author} </p>
  //           </div>
  //         </div>
  //       );
  //     });
  //   }
  // };

  return (
    <PageLayout pageTitle="Blog Title">
      <div className="flex flex-wrap"> Blog ini {printBlog()}  </div>
    </PageLayout>
  );
};

export default App;
