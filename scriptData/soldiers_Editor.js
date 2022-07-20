//SOLDIER EDITOR  ++++++++++
const btnEdit = document.getElementById("editSoldier")
btnEdit.addEventListener("click", () => {

    const btnEditSold = document.getElementById("editForm")
    if (btnEditSold.style.display === "none") {
        btnEditSold.style.display = "block"
    } else {
        btnEditSold.style.display = "none"
    }

    const btnEditShow = document.getElementById("editBtnShow")
    if (btnEditShow.style.display === "none") {
        btnEditShow.style.display = "block"
    }

    else {
        btnEditShow.style.display = "none"
    }

    const editShowName = document.getElementById("editFormNone")
    if (editShowName.style.display === "none") {
        editShowName.style.display = "block"
    } else {
        editShowName.style.display = "none"
    }

    const editShowLastName = document.getElementById("editFormNoneLastName")
    if (editShowLastName.style.display === "none") {
        editShowLastName.style.display = "block"
    }
    else {
        editShowLastName.style.display = "none"
    }

})

const editSoldierById = document.getElementById("editBtnShow")
editSoldierById.addEventListener("click", () => {
    editSoldier()
})

function editSoldier() {
    const idEdit = document.getElementById("editFormId")
    const idName = idEdit.value.toUpperCase()
    let searchId = combatSquad.find((combatSquad) => combatSquad.idName === idName);
    console.log(idName)

    if (searchId) {
        const editId = combatSquad.find((soldier) => combatSquad.idName === idName);

        const editNameFormValue = document.getElementById("editNameForm")
        const valueName = editNameFormValue.value.toUpperCase()
        searchId.fName = valueName

        const editLnameFormValue = document.getElementById("editLastNameForm")
        const valueLname = editLnameFormValue.value.toUpperCase()
        searchId.lName = valueLname


        console.log("EDITED")
        console.log(combatSquad);

        Swal.fire({
            title: 'ID correct',
            text: 'Soldier edit',
            icon: 'success',
            confirmButtonText: 'OK',

        })
    }

    else {
        Swal.fire({
            title: 'SOLDERS NOT FOUND',
            text: 'ID incorrect or does not exist',
            icon: 'error',
            confirmButtonText: 'OK',

        })
        console.log("SOLDERS NOT FOUND")
    }
}
