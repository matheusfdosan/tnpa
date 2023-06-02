/* Summary toggle */

document.querySelector(".summary").addEventListener("click", showModal)

const modal = document.querySelector(".modal")
let modalActive = false

function showModal() {
  if (modalActive === false) {
    modal.classList.add("active")
    modalActive = true
    return
  }

  modal.classList.remove("active")
  modalActive = false
}