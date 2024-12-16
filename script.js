 // Get references to HTML elements
 const itemInput = document.getElementById("itemInput");
 const addButton = document.getElementById("addButton");
 const itemList = document.getElementById("itemList");
 const clearButton = document.getElementById("clearButton");

    // Function to add a new item to the list
 addButton.addEventListener("click", function () {
 const itemText = itemInput.value.trim();

 if (itemText !== "") {
   // Create new list item
 const listItem = document.createElement("li");
 listItem.classList.add("item");

   // Create span for item text
 const itemSpan = document.createElement("span");
 itemSpan.textContent = itemText;
 listItem.appendChild(itemSpan);

   // Create purchased button
 const purchasedButton = document.createElement("button");
 purchasedButton.textContent = "purchased";
 purchasedButton.addEventListener("click", function () {
 listItem.classList.toggle("bought");
  if (listItem.classList.contains("purchased")) {
 purchasedButton.textContent = "bought";
  } else {
   purchasedButton.textContent = "bought";
   }
 });

  listItem.appendChild(purchasedButton);

     // Append new item to the list
  itemList.appendChild(listItem);

     // Clear the input field
 itemInput.value = "";
  }
  });

  // Clear all items in the list
 clearButton.addEventListener("click", function () {
   itemList.innerHTML = "";
         });
     