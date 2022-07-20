//SOLDIER REGISTRATION  +++++++++++
const bts = document.getElementById("menuReg")
bts.addEventListener("click", () => {
    const formDrop = document.getElementById("registrBts")
    if (formDrop.style.display === "none") {
        formDrop.style.display = "block"
    } else {
        formDrop.style.display = "none"
    }

})

//ADD SEND DATA  +++++++++++
const boton = document.getElementById("sendData");
boton.addEventListener("click", () => {

    let fName = document.getElementById("name")
    let valFirstName = fName.value.toUpperCase()

    let lName = document.getElementById("lName")
    let valLastName = lName.value.toUpperCase()

    let idName = document.getElementById("id")
    let valIdName = idName.value.toUpperCase()


    let soldier = new Soldiers(valFirstName, valLastName, valIdName)
    combatSquad.push(soldier);
    if (soldier.idName === valIdName) {
        Swal.fire({
            title: 'You did not put your ID',
            text: 'Check your ID',
            icon: 'error',
            confirmButtonText: 'OK',

        })

    }
    Swal.fire({
        title: 'We going to process your data',
        text: 'DATA SENT CORRECT',
        icon: 'success',
        confirmButtonText: 'OK',

    })
    if (valFirstName === "") {
        Swal.fire({
            title: 'You did not put your name',
            text: 'Check your Name',
            icon: 'error',
            confirmButtonText: 'OK',

        })
        console.log("ERROR NAME")
    }
    if (valLastName === "") {
        Swal.fire({
            title: 'You did not put your LastName',
            text: 'Check your Last Name',
            icon: 'error',
            confirmButtonText: 'OK',

        })
        console.log("ERROR LAS TANME")
    }
    if (valIdName === "") {
        Swal.fire({
            title: 'You did not your ID',
            text: 'Check your ID',
            icon: 'error',
            confirmButtonText: 'OK',

        })
        console.log("ERROR ID")
    }

});