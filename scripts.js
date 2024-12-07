const newItem = document.getElementById("new-item");
const itemsFieldset = document.querySelector("#items");
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
    deleteRemovedMsg();

  if (newItem.value === "") {
    alert("Adicione um item!");
  } else {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("item-wrapper");

    const item = document.createElement("input");
    item.setAttribute("type", "checkbox");

    const itemLabel = document.createElement("label");
    itemLabel.textContent = newItem.value;

    const deleteBtn = document.createElement("img");
    deleteBtn.setAttribute("src", "./assets/icons/trash-can.svg");
    deleteBtn.classList.add("delete-icon");

    itemsFieldset.append(itemContainer);
    itemWrapper.append(item, itemLabel);
    itemContainer.append(itemWrapper, deleteBtn);
    newItem.value = "";

    deleteItem(deleteBtn, itemContainer, itemsFieldset);
    
  }
};

function deleteItem(deleteBtn, itemContainer, itemsFieldset) {
  deleteBtn.addEventListener("click", () => {
    itemContainer.remove();

    deleteRemovedMsg();


    let removedMsgWrapper = document.createElement("div");

    let warningIcon = document.createElement("img");
    warningIcon.setAttribute("src", "./assets/icons/warning.svg");

    let deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("src", "./assets/icons/delete.svg");
    deleteIcon.classList.add("delete");

    let deleteMsg = document.createElement("span");
    deleteMsg.textContent = "O item foi removido da lista";
    removedMsgWrapper.classList.add("removed-msg");

    removedMsgWrapper.append(warningIcon, deleteMsg, deleteIcon);
    itemsFieldset.append(removedMsgWrapper);  

    deleteIcon.addEventListener("click", () => {
      removedMsgWrapper.remove();
    });

  });
}

function deleteRemovedMsg() {
   let removedMsg = document.querySelector(".removed-msg");

   if (itemsFieldset.contains(removedMsg)) {
     removedMsg.remove();
   } 
}

