//SOLDIERS SEARCH
let drop = document.querySelector("[data-button-search-menu-show-hide]")
drop.addEventListener("click", () => {
    let dropSearchMenu = document.querySelector("[data-button-search-menu-menu-show-hide]")
    if (dropSearchMenu.style.display === "none") {
        dropSearchMenu.style.display = "block"
    } else {
        dropSearchMenu.style.display = "none"
    }

    let searchBtn = document.querySelector("[data-button-search-menu-button-show-hide]")
    if (searchBtn.style.display === "none") {
        searchBtn.style.display = "block"
    } else {
        searchBtn.style.display = "none"
    }

    let dropWindowName = document.querySelector("[data-display-name]")
    if (dropWindowName.style.display === "none") {
        dropWindowName.style.display = "block"
    } else {
        dropWindowName.style.display = "none"
    }

    let dropWindowLastName = document.querySelector("[data-display-last-name ]")
    if (dropWindowLastName.style.display === "none") {
        dropWindowLastName.style.display = "block"
    }
    else {
        dropWindowLastName.style.display = "none"
    }

})

let startSearch = document.querySelector("[data-button-searchById]")
startSearch.addEventListener("click", () => {
    searchSoldier()
})

function searchSoldier() {
    const searchId = document.querySelector("[data-search-soldier-button-value]")
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
