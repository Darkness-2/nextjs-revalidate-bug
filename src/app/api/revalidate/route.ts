import { revalidatePath } from "next/cache";

export const GET = () => {
  revalidatePath("/");
  return new Response("ok", { status: 200 });
};
