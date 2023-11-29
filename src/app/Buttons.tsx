"use client";

import { useRouter } from "next/navigation";

export default function Buttons() {
  const router = useRouter();

  const getLatestServerData = () => {
    router.refresh();
  };

  const revalidateServerData = async () => {
    await fetch("/api/revalidate");
    console.log("revalidated home page on server");
  };

  return (
    <>
      <p>
        <button onClick={getLatestServerData}>
          BUTTON 1: Grab latest server data via router.refresh
        </button>
      </p>
      <p>
        <button onClick={revalidateServerData}>
          BUTTON 2: Revalidate home page on server via revalidatePath
        </button>
      </p>
    </>
  );
}
