document.addEventListener("DOMContentLoaded", function (event) {
  const intrinsicSwitch = document.getElementById("intrinsic-switch");
  const awesome = document.getElementById("awesome");
  console.log(awesome);
  console.log(intrinsicSwitch);

  intrinsicSwitch?.addEventListener("change", () => {
    awesome?.setAttribute(
      "data-sizing",
      awesome.getAttribute("data-sizing") === "intrinsic" ? "" : "intrinsic"
    );
  });
});
