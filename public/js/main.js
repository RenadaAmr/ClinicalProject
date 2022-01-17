const submitForm = document.querySelector('#submit');
const Uname = document.querySelector("#name");
const mail = document.querySelector("#email");
const job = document.querySelector("#Job");
const age = document.querySelector("#Age");
const number = document.querySelector("#phone");



submitForm.addEventListener('click', (e) => {
    e.preventDefault()

    const report = {
        Uname: Uname.value,
        mail: mail.value,
        job: job.value,
        age: age.value,
        number: number.value
    }

    console.log(report);

    fetch('/', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      }).then(res=>res.json())
        .then(res => console.log(res));

    Uname.value = ""
    mail.value = ""
    job.value = ""
    age.value = ""
    number.value = ""

});