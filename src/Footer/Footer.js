import React from "react";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className="bg-purple-900 sm:grid sm:grid-cols-2">
        <div className="pt-5 text-center border border-b-1 sm:border-none sm:text-left sm:pl-24 pl-3">
          <p className="py-3 font-semibold">My Contact and Social Media</p>
          <ul className="sm:pl-7 mb-8">
            <li className="py-1">
              <a
                href="https://www.instagram.com/lismanarsilo/"
                className="hover:text-white"
              >
                <i class="fa-brands fa-instagram fa-xl pr-2"></i>
                Instagram
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.linkedin.com/in/lisman-arsilo-1104a6202/"
                className="hover:text-white"
              >
                <i class="fa-brands fa-linkedin fa-xl pr-2"></i>
                LinkedIn
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://github.com/LismanArsilo"
                className="hover:text-white"
              >
                <i class="fa-brands fa-github fa-xl pr-2"></i>
                Github
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://wa.me/6285212357622"
                className="hover:text-white"
              >
                <i class="fa-brands fa-whatsapp fa-xl pr-2"></i>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <p className="font-bold text-center sm:text-end sm:pr-7 py-3">
            CopyRight @2022
          </p>
        </div>
      </div>
    </div>
  );
}
