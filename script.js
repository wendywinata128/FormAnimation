let textLabel = document.querySelectorAll(".card .input-group > input + label");

textLabel.forEach((element) => {
  element.innerHTML = element.innerHTML
    .split("")
    .map((label, index) => {
      return `<span style="--i: ${index * 25}ms">${label}</span>`;
    })
    .join("");
});
