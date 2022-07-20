//SOLDIER DELETE ++++++++++
const delSold = document.getElementById("menuRegistration")
delSold.addEventListener("click", () => {
    const showBodyForm = document.getElementById("delBtn")
    if (showBodyForm.style.display === "none") {
        showBodyForm.style.display = "block"
    }
    else {
        showBodyForm.style.display = "none"
    }

    const delSol = document.getElementById("del")
    if (delSol.style.display === "none") {
        delSol.style.display = "block"
    }
    else {
        delSol.style.display = "none"
    }

})

const btnDel = document.getElementById("delBtn")
btnDel.addEventListener("click", () => {
    delSoldier()
})

function delSoldier() {
    const btnDel = document.getElementById("delSold")
    let valueForm = btnDel.value.toUpperCase()
    let searchId = combatSquad.find((combatSquad) => combatSquad.idName === valueForm);

    if (!searchId) {
        Swal.fire({
            title: 'Check if an ID is correct',
            text: 'ID incorrect or does not exist',
            icon: 'error',
            confirmButtonText: 'OK',

        })
    }
    else {
        let index = combatSquad.indexOf(searchId);
        combatSquad.splice(index, 1);

        Swal.fire({
            title: 'ID correct',
            text: 'Soldier has removed',
            icon: 'success',
            confirmButtonText: 'OK',

        })

        console.log("DELETE SOLDIERS")
        console.log(combatSquad)
    }
}
