const logoImage = document.getElementById("logo");
const logoInput = document.getElementById("logoInput");
const logoError = document.getElementById("logoError");
const logoLabelText = document.getElementById("logoLabelText");
const logoLabelIcon = document.getElementById("logoLabelIcon");
const logoCloseIcon = document.getElementById("logoCloseIcon");

const faviconImage = document.getElementById("favicon");
const faviconInput = document.getElementById("faviconInput");
const faviconError = document.getElementById("faviconError");
const faviconCloseIcon = document.getElementById("faviconCloseIcon");
const faviconLabelText = document.getElementById("faviconLabelText");
const faviconLabelIcon = document.getElementById("faviconLabelIcon");

logoInput.addEventListener("change", function (event) {
  let file, img;
  if ((file = this.files[0])) {
    img = new Image();
    img.onload = function () {
      if (this.width <= 385 && this.height <= 75) {
        logoError.classList.add("none");
        //actual resolution image
        console.log(img);
        logoImage.src = img.src;
        logoCloseIcon.style.display = "block";
        logoLabelIcon.style.display = "none";
        logoLabelText.classList.add("none");
        logoImage.classList.remove("none");
      } else {
        logoError.innerHTML =
          "Max width and height should be 385px and 75px respectively";
        logoError.classList.remove("none");
      }
    };
    img.onerror = function () {
      logoError.innerHTML = "Please upload valid file";
      logoError.classList.remove("none");
    };
    img.src = URL.createObjectURL(file);
  }
});

let removeLogo = function () {
  logoInput.value = "";
  logoImage.classList.add("none");
  logoLabelIcon.style.display = "block";
  logoLabelText.classList.remove("none");
  logoCloseIcon.style.display = "none";
};

faviconInput.addEventListener("change", function (event) {
  let file, img;
  if ((file = this.files[0])) {
    img = new Image();
    img.onload = function () {
      if (this.width <= 16 && this.height <= 16) {
        faviconError.classList.add("none");
        faviconImage.src = img.src;
        faviconCloseIcon.style.display = "block";
        faviconLabelIcon.style.display = "none";
        faviconLabelText.classList.add("none");
        faviconImage.classList.remove("none");
      } else {
        faviconError.innerHTML =
          "Max width and height should be 16px and 16px respectively";
        faviconError.classList.remove("none");
      }
    };
    img.onerror = function () {
      faviconError.innerHTML = "Please upload valid file";
      faviconError.classList.remove("none");
    };
    img.src = URL.createObjectURL(file);
  }
});

let removeFavicon = function () {
  faviconInput.value = "";
  faviconImage.classList.add("none");
  faviconLabelIcon.style.display = "block";
  faviconLabelText.classList.remove("none");
  faviconCloseIcon.style.display = "none";
};
