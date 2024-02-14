import Link from "next/link";
import Image from "next/image";
import { HeartPulse } from "lucide-react";
import background from "../../public/petbackground.jpeg";

export default function Home() {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen">
      <Image
        className="blur-md"
        alt="Background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className=" p-2 flex flex-col justify-center items-center z-10 bg-muted-foreground lg:w-2/5 h-1/4 rounded-md">
        <div className="flex pb-5 mb-5 space-x-2 text-5xl text-popover-foreground">
          <p>4E</p>
          <HeartPulse size={48} />
          <p>PETpostes</p>
        </div>
        <div>
          <Link
            href="/posts"
            className="bg-primary text-white hover:bg-secondary-foreground p-3 rounded-sm text-lg text mr-2"
          >
            Go to the posts
          </Link>
        </div>
      </div>
    </div>
  );
}
