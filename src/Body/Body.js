import React from "react";
import Profile from "../assets/profile.jpg";

export default function Body() {
  return (
    <div className="pt-32 sm:w-full" id="home">
      <div className="xl:pl-72 ">
        <p className="font-light pl-10 ">
          Hello, My Name Is
          <span className="text-xl font-bold ml-3 bg-purple-300 p-1 rounded-2xl pl-2 ">
            Lisman Arsilo
          </span>
        </p>
        <p className="font-light pl-28 mt-4">
          I am a
          <span className="text-xl font-bold ml-3 bg-purple-300 p-1 pl-2 rounded-2xl">
            Web Programmer
          </span>
        </p>
      </div>
      <div className="my-3 py-2 sm:flex sm:justify-between sm:px-20 ">
        <div className="border border-slate-200 rounded-2xl bg-purple-700 mb-5 w-10/12 sm:w-7/12 p-5 mx-auto hover:bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30">
          <p className="font-bold text-lg text-center">About Me</p>
          <p>
            Hello my name is <span className="font-bold">Lisman Arsilo</span>, i
            am a junior web programmer, graduated in 2021 at
            <span className="font-bold"> pamulang university</span> i have
            worked as process support and production operator in 2015 - 2018, i
            live in depok.
          </p>
        </div>
        <div id="project">
          <img
            src={Profile}
            className="rounded-full h-52 w-52 border-4 border-purple-900 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30"
            alt="Profile"
          />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 gap-2 mt-5 mx-2 mb-5 border border-slate-300 p-5 block bg-purple-900 rounded-3xl">
        <div className="border border-slate-200 text-center px-2 py-3 rounded-2xl bg-purple-700 hover:bg-purple-500 my-3 sm:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <p className="border-b-2 font-semibold">Create Forms</p>
          <div className="pt-3 flex">
            <p className="pr-7">Project|</p>
            <p>Create A Forms Using HTML And CSS</p>
          </div>
          <div className="flex pt-3">
            <p className="pr-7">Github|</p>
            <a
              href="https://lismanarsilo.github.io/one-piece-survey-form/"
              className="font-bold underline"
            >
              Click Me , To My Website
            </a>
          </div>
        </div>
        <div className="border border-slate-200 w-full text-center px-2 py-3 rounded-2xl bg-purple-700 hover:bg-purple-500 my-3 sm:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30">
          <p className="border-b-2 font-semibold">Landing Page(FreeCodeCamp)</p>
          <div className="pt-3 flex">
            <p className="pr-7">Project|</p>
            <p>Create Landing Page Using HTML, CSS, And JS</p>
          </div>
          <div className="flex pt-3">
            <p className="pr-7">Github|</p>
            <a
              href="https://lismanarsilo.github.io/Landing_FreeCodeCamp/"
              className="font-bold underline"
            >
              Click Me , To My Website
            </a>
          </div>
        </div>
        <div className="border border-slate-200 w-full text-center px-2 py-3 rounded-2xl bg-purple-700 hover:bg-purple-500 my-3 sm:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30">
          <p className="border-b-2 font-semibold">Create Forms</p>
          <div className="pt-3 flex">
            <p className="pr-5">Project|</p>
            <p>Create A Forms Using HTML And CSS</p>
          </div>
          <div className="flex pt-3">
            <p className="pr-7">Github|</p>
            <a
              href="https://lismanarsilo.github.io/one-piece-survey-form/"
              className="font-bold underline"
            >
              Click Me , To My Website
            </a>
          </div>
        </div>
        <div className="border border-slate-200 w-full text-center px-2 py-3 rounded-2xl bg-purple-700 hover:bg-purple-500 my-3 sm:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30">
          <p className="border-b-2 font-semibold">Create Profile</p>
          <div className="pt-3 flex">
            <p className="pr-5">Project|</p>
            <p>Create A Forms Using HTML, CSS, Bootstrap, JS</p>
          </div>
          <div className="flex pt-3">
            <p className="pr-7">Github|</p>
            <a
              href="https://lismanarsilo.github.io/https-lismanarsilo.github.io/"
              className="font-bold underline"
            >
              Click Me , To My Website
            </a>
          </div>
        </div>
        <div className="border border-slate-200 w-full text-center px-2 py-3 rounded-2xl bg-purple-700 hover:bg-purple-500 my-3 sm:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30">
          <p className="border-b-2 font-semibold">Create Api NodeJs</p>
          <div className="pt-3 flex">
            <p className="pr-5">Project|</p>
            <p>Create Api Backend CRUD Dengan Node JS</p>
          </div>
          <div className="flex pt-3">
            <p className="pr-7">Github|</p>
            <a
              href="https://github.com/LismanArsilo/Sql-Sederhana-Sequilize-Sederhana"
              className="font-bold underline"
            >
              Click Me , To My Github
            </a>
          </div>
        </div>
        <div className="border border-slate-200 w-full text-center px-2 py-3 rounded-2xl bg-purple-700 hover:bg-purple-500 my-3 sm:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30">
          <p className="border-b-2 font-semibold">
            CRUD Frontend ReactJS & Backend NodeJS
          </p>
          <div className="pt-3 flex">
            <p className="pr-5">Project|</p>
            <p>
              Create Frontend Use ReactJS & Backend Use NodeJS , State With
              Redux Saga
            </p>
          </div>
          <div className="flex pt-3">
            <p className="pr-7">Frontend|</p>
            <a
              href="https://github.com/LismanArsilo/reactjs_batch15"
              className="font-bold underline"
            >
              Click Me , To My Github
            </a>
          </div>
          <div className="flex pt-3">
            <p className="pr-7">Backend|</p>
            <a
              href="https://github.com/LismanArsilo/nodeJS_Batch15"
              className="font-bold underline"
            >
              Click Me , To My Github
            </a>
          </div>
        </div>
      </div>
      <div className="border border-slate-200 w-6/12 mx-auto text-center py-3 rounded-2xl mb-5 bg-purple-700 hover:bg-purple-500 min-w-max transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-30">
        <div>
          <p className="border-b-2 mx-16 font-semibold">My Skill</p>
        </div>
        <div className="grid grid-cols-2 pt-3 ">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JavaScript (ES-6)</li>
          </ul>
          <ul>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>NodeJS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
