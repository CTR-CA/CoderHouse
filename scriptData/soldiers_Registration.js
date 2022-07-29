//SOLDIER REGISTRATION  +++++++++++
const bts = document.querySelector("[data-button-from-registartion]")
bts.addEventListener("click", () => {
    const formDrop = document.querySelector("[data-button-registration-show-hide]")
    if (formDrop.style.display === "none") {
        formDrop.style.display = "block"
    } else {
        formDrop.style.display = "none"
    }

})

//ADD SEND DATA  +++++++++++
const boton = document.querySelector("[data-button-send-data]");
boton.addEventListener("click", () => {

    let fName = document.getElementById("name")
    let valFirstName = fName.value.toUpperCase()

    let lName = document.getElementById("lName")
    let valLastName = lName.value.toUpperCase()

    let idName = document.getElementById("id")
    let valIdName = idName.value.toUpperCase()

    if (!valFirstName == '' && !valLastName == '' && !valIdName == '') {
        let soldier = new Soldiers(valFirstName, valLastName, valIdName)
        combatSquad.push(soldier);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data complete correct',
            showConfirmButton: false,
            timer: 1500
        })

    }
    else {
        Swal.fire({
            title: 'Check soldiers data',
            text: 'You need complet all forms',
            icon: 'error',
            confirmButtonText: 'OK',

        })
    }

});