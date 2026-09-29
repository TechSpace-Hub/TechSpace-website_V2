const imageUrls = Object.values(
  import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

export function preloadImages() {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.decode?.().catch(() => {});
  });
}