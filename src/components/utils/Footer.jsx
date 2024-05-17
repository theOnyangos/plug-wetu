import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="w-full bg-darken hidden md:block dark:bg-dark border-t dark:border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-white text-center">
              © {currentYear} All rights reserved. Designed and developed by{" "}
              <a
                href="
                https://www.linkedin.com/in/dennis-otieno-908b07aa/"
                className="text-blue-500 dark:text-cyan-500 hover:underline"
                target="_blank"
              >
                Dennis Otieno Onyango
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
