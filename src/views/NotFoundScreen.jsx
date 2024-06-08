import React from "react";
import ThemeChanger from "../components/ThemeChanger";

const NotFoundScreen = () => {
  return (
    <div className="">
      <section>
        <h1 className="text-black dark:text-light">404 Not Found</h1>
      </section>

      <ThemeChanger />
    </div>
  );
};

export default NotFoundScreen;
