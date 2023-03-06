const image1 = document.getElementById("image1");
const image1Input = document.getElementById("image1Input");
const image1Error = document.getElementById("image1Error");
const image1LabelText = document.getElementById("image1LabelText");
const image1LabelIcon = document.getElementById("image1LabelIcon");
const image1CloseIcon = document.getElementById("image1CloseIcon");

image1Input.addEventListener("change", function (event) {
  let file, tempImg;
  if ((file = this.files[0])) {
    tempImg = new Image();
    tempImg.onload = function () {
      if (this.width <= 730 && this.height <= 1024) {
        image1Error.classList.add("none");
        // actual resolution image
        console.log(tempImg);
        image1.src = tempImg.src;
        image1CloseIcon.style.display = "block";
        image1LabelIcon.style.display = "none";
        image1LabelText.classList.add("none");
        image1.classList.remove("none");
      } else {
        image1Error.innerHTML =
          "Max width and height should be 385px and 75px respectively";
        image1Error.classList.remove("none");
      }
    };
    tempImg.onerror = function () {
      image1Error.innerHTML = "Please upload valid file";
      image1Error.classList.remove("none");
    };
    tempImg.src = URL.createObjectURL(file);
  }
});

removeImg(
  image1CloseIcon,
  image1,
  image1Input,
  image1LabelIcon,
  image1LabelText
);
// call below on close icon click
function removeImg(closeIcon, image, input, labelIcon, labelText) {
  closeIcon.addEventListener("click", () => {
    removeImg(image, input, labelIcon, labelText, closeIcon);
  });
  input.value = "";
  image.classList.add("none");
  labelIcon.style.display = "block";
  labelText.classList.remove("none");
  closeIcon.style.display = "none";
}
