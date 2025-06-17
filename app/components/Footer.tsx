import Link from "next/link";
import React from "react";

// --- SVG Icons (Self-contained and easy to customize) ---

const MailIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const Footer = () => {
  const userEmail = "emirbachtyar@gmail.com";

  return (
    <footer className="bg-gray-900 text-gray-300 rounded-md">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center sm:flex-row sm:gap-6 items-center sm:justify-center">
          {/* Call to Action Heading */}
          <div className="max-w-xl">
            <h2 className="font-extrabold text-amber-50 text-2xl">
              {"Let's Connect"}
            </h2>

            {/* Description */}
            <p className="mt-4 leading-6 text-gray-400">
              Chat did I cook? Or does my music need more aura? My inbox is
              always open for anything from project ideas to goofy ahh questions
              so feel free to let me know.
            </p>
          </div>

          {/* Email Button */}
          <div className="mt-8 shrink-0">
            <Link
              href={`mailto:${userEmail}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-slate-200 hover:bg-slate-300 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <MailIcon className="w-5 h-5 mr-3" />
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Social Icons */}
            <div />
            {/* Copyright Notice */}
            <p className="mt-4 sm:mt-0 text-base text-gray-400">
              &copy; {new Date().getFullYear()} Emir Bachtyar. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
