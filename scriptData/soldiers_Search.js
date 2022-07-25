//SOLDIERS SEARCH
let drop = document.getElementById("searchSold")
drop.addEventListener("click", () => {
    let dropForm = document.getElementById("dropBtnSearch")
    if (dropForm.style.display === "none") {
        dropForm.style.display = "block"
    } else {
        dropForm.style.display = "none"
    }

    let sBtn = document.getElementById("searchBtn")
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

let startSearch = document.getElementById("searchBtn")
startSearch.addEventListener("click", () => {
    searchSoldier()
})

function searchSoldier() {
    const searchId = document.getElementById("searchSoldier")
    const valueId = searchId.value.toUpperCase();
    const nameOk = combatSquad.filter((soldier) => soldier.idName.indexOf(valueId) !== -1)

    if (nameOk.length > [0]) {


        const nameSearching = document.getElementById("idFirstNameForm")
        nameSearching.innerHTML = nameOk[0].fName
        const lNameSearching = document.getElementById("idLastNameForm")
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
