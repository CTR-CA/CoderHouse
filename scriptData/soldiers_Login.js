//SCREEN LOGIN STORAGE +++++++++++

const logIn = document.querySelector("[data-loginButton]")
logIn.addEventListener("click", () => {
    login()
})

function login() {
    const logInDataForm = document.querySelector("[data-inputLog]")
    const dataLogIn = logInDataForm.value

    const checkBox = document.querySelector("[data-checkBoxId]");
    const checkBoxClick = checkBox.checked

    if (!dataLogIn == `` && checkBoxClick === true) {

        const p = document.createElement("p");
        p.innerHTML = `Terms and conditions: ${checkBoxClick}<hr>`;
        document.body.appendChild(p)


        const offScreen = document.querySelector("[data-displayOffAll]")
        offScreen.style.display = "block"
        const logInOff = document.querySelector("[data-containerLog]")
        logInOff.style.display = "none"

        Swal.fire({
            title: 'Key accept',
            text: 'LogIn success',
            icon: 'success',
            confirmButtonText: 'OK',

        })
    }
    else {
        Swal.fire({
            title: 'Check LogIn key or terms',
            text: 'Put the Login Key and accept the terms',
            icon: 'error',
            confirmButtonText: 'OK',

        })
    }

    //LOCAL STORAGE
    localStorage.setItem("LogIn KEY:", dataLogIn)
    let msg = dataLogIn <= null ? "Key incorrect" : "Key correct"
    console.log(msg)

    let json = JSON.stringify(dataLogIn)
    const p = document.createElement("p");
    p.innerHTML = `LogIn KEY: ${dataLogIn}`;
    document.body.appendChild(p)
    console.log(dataLogIn)
}
