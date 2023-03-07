const left_color_code = document.querySelector("#left_color_code");
const left_color_picker = document.querySelector("#left_color_picker");
const left_color_wrapper = document.querySelector("#left_color_wrapper");
const left_color_picker_alpha = document.querySelector(
  "#left_color_picker_alpha"
);
const left_Transparency_Input = document.querySelector(
  "#leftTransparencyInput"
);

const leftComputedStyle = window.getComputedStyle(left_color_wrapper);
const leftBackgroundColor = leftComputedStyle.backgroundColor;
left_color_code.value = rgbaToHex(leftBackgroundColor);
let opacityValue = parseFloat((left_color_picker_alpha.value / 255) * 100);
left_Transparency_Input.value = `${opacityValue.toFixed(0)}%`;

function leftColorPreview() {
  let inputValue = left_color_code.value;
  left_color_wrapper.style.backgroundColor = `${inputValue}`;
  let hexcode = inputValue.substring(1, inputValue.length);
  let hexValue = parseInt(hexcode, 16);
  let alpha = hexValue & 0xff;
  left_color_picker_alpha.value = alpha;
  let opacityValue = parseFloat((left_color_picker_alpha.value / 255) * 100);
  left_Transparency_Input.value = `${opacityValue.toFixed(0)}%`;
}

function set_colorLeft() {
  left_color_wrapper.style.backgroundColor =
    left_color_picker.value +
    (left_color_picker_alpha.value == 255
      ? ""
      : parseInt(left_color_picker_alpha.value).toString(16).padStart(2, "0"));

  const hexColor = rgbaToHex(left_color_wrapper.style.backgroundColor);
  left_color_code.value = hexColor;
  let opacityValue = parseFloat((left_color_picker_alpha.value / 255) * 100);
  left_Transparency_Input.value = `${opacityValue.toFixed(0)}%`;
}

const right_color_code = document.querySelector("#right_color_code");
const right_color_picker = document.querySelector("#right_color_picker");
const right_color_wrapper = document.querySelector("#right_color_wrapper");
const right_color_picker_alpha = document.querySelector(
  "#right_color_picker_alpha"
);
const rightTransparencyInput = document.querySelector(
  "#rightTransparencyInput"
);

const rightComputedStyle = window.getComputedStyle(right_color_wrapper);
const rightBackgroundColor = rightComputedStyle.backgroundColor;
right_color_code.value = rgbaToHex(rightBackgroundColor);
let rightOpacityValue = parseFloat(
  (right_color_picker_alpha.value / 255) * 100
);
rightTransparencyInput.value = `${rightOpacityValue.toFixed(0)}%`;

function rightColorPreview() {
  let inputValue = right_color_code.value;
  right_color_wrapper.style.backgroundColor = `${right_color_code.value}`;
  let hexcode = inputValue.substring(1, inputValue.length);
  let hexValue = parseInt(hexcode, 16);
  let alpha = hexValue & 0xff;
  right_color_picker_alpha.value = alpha;
  let opacityValue = parseFloat((right_color_picker_alpha.value / 255) * 100);
  rightTransparencyInput.value = `${opacityValue.toFixed(0)}%`;
}

function set_colorRight() {
  right_color_wrapper.style.backgroundColor =
    right_color_picker.value +
    (right_color_picker_alpha.value == 255
      ? ""
      : parseInt(right_color_picker_alpha.value).toString(16).padStart(2, "0"));

  const hexColor = rgbaToHex(right_color_wrapper.style.backgroundColor);
  right_color_code.value = hexColor;
  let rightOpacityValue = parseFloat(
    (right_color_picker_alpha.value / 255) * 100
  );
  rightTransparencyInput.value = `${rightOpacityValue.toFixed(0)}%`;
}

function rgbaToHex(orig) {
  var a,
    isPercent,
    rgb = orig
      .replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || "").trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 01;
  }
  // multiply before convert to HEX
  a = ((a * 255) | (1 << 8)).toString(16).slice(1);
  hex = hex + a;

  return `#${hex}`;
}

function changeLeftSliderValue() {
  let inputString = left_Transparency_Input.value.toString();
  let inputPercentage = inputString.substring(0, inputString.length - 1);
  left_color_picker_alpha.value = (inputPercentage / 100) * 255;
  set_colorLeft();
}

function changeRightSliderValue() {
  let inputString = rightTransparencyInput.value.toString();
  let inputPercentage = inputString.substring(0, inputString.length - 1);
  right_color_picker_alpha.value = (inputPercentage / 100) * 255;
  set_colorRight();
}
