// LIST SOLDERS NAME AND SURNAME
function listNameSure() {
    let SoldierListss = document.getElementById("soldierList")
    SoldierListss.addEventListener("click", () => {

    })
    let search = combatSquad.map((soldier) => soldier.fName + " " + soldier.lName)
    const lastNameSure = document.getElementById("soldierList")
    lastNameSure.innerHTML = `First Name:${search.fName}</br>
                              Last Name:${search.lName}</br> `


    console.log("SEARCHING FOR NAME / SURNAME")
    console.log(search)
}