import React from "react";

export default function Navbar() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 bg-purple-900 min-w-max py-5 shadow-lg">
      <div className="pl-6 font-extrabold text-2xl hover:text-white sm:text-start text-center">
        <a href="#">Lisman Arsilo</a>
      </div>
      <div>
        <ul className="flex sm:justify-end px-9 justify-center">
          <li className="hover:text-white">
            <a href="#">
              <i className="fa-solid fa-house pr-1"></i>Home
            </a>
          </li>
          <li className="px-8 hover:text-white">
            <a href="#">
              <i class="fa-solid fa-bars-progress pr-1"></i>
              Project
            </a>
          </li>
          <li className="hover:text-white">
            <a href="#">
              <i class="fa-regular fa-address-book pr-1"></i>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
