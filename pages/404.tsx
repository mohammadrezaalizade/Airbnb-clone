import React from "react";
import Header from "../components/page/Header";
import PageLayout from "../layouts/PageLayout";
const NotFoundPage = () => {
  return (
    <div>
      <Header/>
      <div className="h-screen w-screen flex items-center justify-center select-none">
        <h1 className="text-xl text-primary_red-500 font-bold flex items-center justify-center gap-2">
          <span>404</span>
          <span>Page not found</span>
        </h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
