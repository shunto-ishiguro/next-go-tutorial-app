"use server";

import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const title = formData.get("title");
    const content = formData.get("content");

    console.log({ title, content });

    revalidatePath("/post-screen");
}