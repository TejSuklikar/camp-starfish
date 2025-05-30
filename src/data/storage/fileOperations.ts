import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function uploadFile(file: File, path: string) {
  let uploadRef = ref(storage, path);
  await uploadBytes(uploadRef, file);
}

export async function uploadFiles(files: File[], paths: string[]) {
  if (files.length !== paths.length) {
    throw new Error("Number of images must be equal to the number of paths");
  }
  let uploadPromises = files.map((file, i) => {
    return uploadFile(file, paths[i]);
  });

  await Promise.all(uploadPromises);
}

export async function getFileURL(path: string) {
  let downloadRef = ref(storage, path);
  return await getDownloadURL(downloadRef);
}

export async function getFileURLs(paths: string[]) {
  let downloadPromises = paths.map((path) => getFileURL(path));
  return await Promise.all(downloadPromises);
}
