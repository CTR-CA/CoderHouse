//SOLDIERS SEARCH
let drop = document.querySelector("[data-button-search-menu-show-hide]")
drop.addEventListener("click", () => {
    let dropForm = document.querySelector("[data-button-search-menu-menu-show-hide]")
    if (dropForm.style.display === "none") {
        dropForm.style.display = "block"
    } else {
        dropForm.style.display = "none"
    }

    let sBtn = document.querySelector("[data-button-search-menu-button-show-hide]")
    if (sBtn.style.display === "none") {
        sBtn.style.display = "block"
    } else {
        sBtn.style.display = "none"
    }

    let dataWindowFname = document.getElementById("noDisplayName")
    if (dataWindowFname.style.display === "none") {
        dataWindowFname.style.display = "block"
    } else {
        dataWindowFname.style.display = "none"
    }

    let dataWindowLname = document.getElementById("noDisplayLname")
    if (dataWindowLname.style.display === "none") {
        dataWindowLname.style.display = "block"
    }
    else {
        dataWindowLname.style.display = "none"
    }

})

let startSearch = document.querySelector("[data-button-searchById]")
startSearch.addEventListener("click", () => {
    searchSoldier()
})

function searchSoldier() {
    const searchId = document.getElementById("searchSoldier")
    const valueId = searchId.value.toUpperCase();
    const nameOk = combatSquad.filter((soldier) => soldier.idName.indexOf(valueId) !== -1)

    if (nameOk.length > [0]) {


        const nameSearching = document.querySelector("[data-idFirstNameForm]")
        nameSearching.innerHTML = nameOk[0].fName
        const lNameSearching = document.querySelector("[data-idLastNameForm]")
        lNameSearching.innerHTML = nameOk[0].lName

        Swal.fire({
            title: 'Search is complete',
            text: 'Soldier has finde',
            icon: 'success',
            confirmButtonText: 'OK',
        })
        console.log(nameOk)

    }

    if (nameOk.length <= 0) {
        console.log("SOLDIERS NOT FOUNDE")
        Swal.fire({
            title: 'Soldiers not found',
            text: 'Name incorrect or does not exist',
            icon: 'error',
            confirmButtonText: 'OK',
        })
        console.log("ERROR ID")

    }

    if (valueId === '') {
        console.log("SOLDIERS NOT FOUNDE")
        Swal.fire({
            title: 'Soldiers not found',
            text: 'Name incorrect or does not exist',
            icon: 'error',
            confirmButtonText: 'OK',
        })
        console.log("ERROR ID")

    }
}
