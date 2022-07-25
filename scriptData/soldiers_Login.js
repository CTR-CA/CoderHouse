//SCREEN LOGIN STORAGE +++++++++++

const logIn = document.querySelector("[data-loginButton]")
logIn.addEventListener("click", () => {
    const logInDataForm = document.getElementById("inputLog")
    const dataLogIn = logInDataForm.value

    if (dataLogIn >= `1`) {
        const offScreen = document.getElementById("displayOffAll")
        offScreen.style.display = "block"
        const logInOff = document.getElementById("containerLog")
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
            title: 'Key not detected',
            text: 'Check your Key',
            icon: 'error',
            confirmButtonText: 'OK',

        })
    }
    localStorage.setItem("LogIn KEY:", dataLogIn)
    let msg = dataLogIn <= null ? "Key incorrect" : "Key correct"
    console.log(msg)

    let json = JSON.stringify(dataLogIn)
    const p = document.createElement("p");
    p.innerHTML = `LogIn KEY: ${dataLogIn}`;
    document.body.appendChild(p)
    console.log(dataLogIn)

    checkBox()
})

function checkBox() {
    const checkBox = document.querySelector("[data-checkBoxId]");
    const checkBoxClick = checkBox.checked
    if (checkBoxClick === true) {
        const p = document.createElement("p");
        p.innerHTML = `Terms and conditions: ${checkBoxClick}<hr>`;
        document.body.appendChild(p)
    } else {
        const p = document.createElement("p");
        p.innerHTML = `Terms and conditions: ${checkBoxClick}<hr>`;
        document.body.appendChild(p)
    }
    console.log(checkBoxClick);

}
