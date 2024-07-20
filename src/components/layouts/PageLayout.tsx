import Navbar from "@/app/help/navbar";
import * as React from "react";

interface IPageLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const PageLayout: React.FunctionComponent<IPageLayoutProps> = ({
  children,
  pageTitle,
}) => {
  return ( 
    <div> 
    
    <div className="w-full flex bg-white items-center justify-center pb-28">
      <h1 className="text-xl uppercase">{pageTitle}</h1>
      <div>{children}</div>
    </div> </div> 
  );
};

export default PageLayout;

//bisa utk modif title, count krn bisa menyisipkan props lainnya : Page Layout
 