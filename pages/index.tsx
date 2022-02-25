import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <header className="container max-w-2xl py-10 mx-auto">
        <ul>
          <li>
            <Link href="/">
              <a className="px-3 py-2 font-medium transition rounded-lg hover:bg-zinc-200">
                Home
              </a>
            </Link>
            <Link href="/portfolio">
              <a className="px-3 py-2 font-medium transition rounded-lg hover:bg-zinc-200">
                Portfolio
              </a>
            </Link>
            <Link href="/blog">
              <a className="px-3 py-2 font-medium transition rounded-lg hover:bg-zinc-200">
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </header>
      <main className="px-10">
        <div className="container flex justify-center max-w-2xl mx-auto">
          <section className="flex flex-col items-center sm:flex-row">
            <div className="grid mt-4 ml-4 grid-row-3 sm:mt-0">
              <h1 className="mb-4 text-3xl font-bold sm:text-5xl font-gilmer">
                Railly Hugo
              </h1>
              <span className="text-lg font-bold">
                Frontend Developer at ID BI
              </span>
              <span>
                Developing solutions through software that impact the lives of
                many people.
              </span>
            </div>
            <div className="flex justify-center p-1.5 rounded-full from-indigo-500 to-cyan-600 bg-gradient-to-tr w-max">
              <div className="flex justify-center p-1 bg-white rounded-full">
                <Image
                  className="rounded-full"
                  src="/images/profile.png"
                  alt="A profile photo of Railly Hugo"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </section>
        </div>
        <section>
          Hi, welcome to my digital space. Here I share my side projects,
          tutorials & what I learn over time. I am looking to grow my career in
          tech 🚀
        </section>
      </main>
    </>
  );
};

export default Home;
