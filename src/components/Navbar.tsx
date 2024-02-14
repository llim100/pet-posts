"use client";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/next.svg";

const Navbar = () => {
  return (
    <nav className="bg-primary dark:bg-primary rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/posts">
              <Image
                src="https://s38xtrgrkkylnxcu.public.blob.vercel-storage.com/pet-pics/cat1-qXNbZ2FG0H4g7b1Fk0Gv6iM30637N9.png"
                alt="Logo"
                height="50"
                width="50"
                quality={100}
                className="w-8 h-8 mr-3 rounded-full"
              />
            </Link>
            <Link href="/posts">
              <span className="text-white text-2xl font-bold mx-auto">
                PETpostes
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/posts/add-post"
              className="text-white hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Create a post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
