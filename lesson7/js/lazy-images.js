const images = document.querySelectorAll("[data-src]");

const loadingOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const loadImage = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (!item.isIntersecting) {
        return;
      } else {
        loadImage(item.target);
        observer.unobserve(item.target);
      }
    });
  }, loadingOptions);

  images.forEach((img) => {
    observer.observe(img);
  });
} else {
  images.forEach((image) => loadImage(image));
}
