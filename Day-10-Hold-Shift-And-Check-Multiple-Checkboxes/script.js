const checkboxes = document.querySelectorAll("input[type='checkbox']");

// listen for clicked or change
let lastChecked;

function handleCheck(e) {
    // check if they have shift key down
    // and check if they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // we will start checking b/w the first checked and the last checked
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}




checkboxes.forEach(checkbox => { 
    checkbox.addEventListener("click", handleCheck);
})