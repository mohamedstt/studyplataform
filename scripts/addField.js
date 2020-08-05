document.querySelector("#add-time").addEventListener("click", cloneField);

function cloneField() {
  const newFieldContainer = document.querySelector(".schedule-items").cloneNode(true);
  const field = newFieldContainer.querySelectorAll('input')
  field.forEach(function (field) {
    field.value = "";
  })

document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
