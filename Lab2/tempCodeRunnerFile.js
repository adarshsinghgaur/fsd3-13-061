await mkdir("upload/resume");
console.log("resume created under upload folder");

await mkdir("image/profile/logos", { recursive: true });
console.log("all folders created");
