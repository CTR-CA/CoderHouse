//SOLDIER LIST   ++++++++++
const btsList = document.querySelector("[data-showSoldier]")
btsList.addEventListener("click", () => {
    soldiersList()

})

function soldiersList() {
    combatSquad.forEach(
        (soldier) => {
            const p = document.createElement("p");
            p.innerHTML = `First Name: ${soldier.fName} 
            <br>
            Last Name:${soldier.lName}
            <br>
            Soldiers ID: ${soldier.idName}
            <hr>
            `;
            document.body.appendChild(p)

            console.log(soldier)
        });

    if (combatSquad === 0) {
        console.log("SOLDERS NOT FOUND")
    }

}