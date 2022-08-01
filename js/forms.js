const selectAll = document.querySelector("#selectAll");
const allCheckbox = document.querySelectorAll("input[name=check]");
let checkbox = [];

allCheckbox.forEach((item) => {
  item.addEventListener("change", function () {
    allCheckbox.forEach((i) => {
      checkbox.push(i.checked);
    });
    if (checkbox.includes(false)) {
      selectAll.checked = false;
    } else {
      selectAll.checked = true;
    }
    checkbox = [];
  });
});

selectAll.addEventListener("change", function () {
  if (this.checked) {
    allCheckbox.forEach((i) => {
      i.checked = true;
    });
  } else {
    allCheckbox.forEach((i) => {
      i.checked = false;
    });
  }
});
