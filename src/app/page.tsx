import Buttons from "@/app/Buttons";
import Explanation from "@/app/Explanation";
import Link from "next/link";

const getTime = () => {
  return new Date().toISOString();
};

export default async function Home() {
  const time = getTime();

  return (
    <main>
      <h1>Hello, here is a small recreation of the revalidate bug</h1>
      <p>
        Github repo: <Link href="">nextjs-revalidate-bug</Link>
      </p>
      <p>
        Deployed on Vercel: <Link href="">here</Link>
      </p>

      <p>Time from server: {time}</p>

      <Buttons />

      <Explanation />
    </main>
  );
}

export const revalidate = 60;
