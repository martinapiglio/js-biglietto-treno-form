
/* generare variabili:
1 - nome cognome user
2 - km che user vuole percorrere
3 - età dell'user
4 - button "genera"
5 - prezzo totale biglietto:
    a - prezzo base definito in base ai km (0.21 € al km)
    b - meno 20% per i minorenni
    c - meno 40% per gli over 65.
6 - Prezzo finale con 2 decimali

*/

let userName = document.getElementById('userName');

let generaButton = document.getElementById('generaButton');

let pricePerKm = 0.21;

generaButton.addEventListener('click', function() {

    let userKm = parseInt(document.getElementById('userKm').value);
    let userAge = parseInt(document.getElementById('userAge').value);

    if (!isNaN(userKm) && !isNaN(userAge) && (userName.value !=='')) {

        document.getElementById("ticket").style.display = "block";

        let fullPrice = pricePerKm * userKm;

        let finalPrice

        if (userAge < 18) {
    
            finalPrice = fullPrice - fullPrice * 20 / 100;
            document.getElementById('ticketPrice').innerHTML = finalPrice.toFixed(2) + '€';
            document.getElementById('ticketOffer').innerHTML = "Biglietto Ridotto under 18";
    
        } else if (userAge >= 65) {
    
            finalPrice = fullPrice - fullPrice * 40 / 100;
            document.getElementById('ticketPrice').innerHTML = finalPrice.toFixed(2) + '€';
            document.getElementById('ticketOffer').innerHTML = "Biglietto Ridotto over 65";
    
        } else {
    
            finalPrice = fullPrice;
            document.getElementById('ticketPrice').innerHTML = finalPrice.toFixed(2) + '€';
            document.getElementById('ticketOffer').innerHTML = "Biglietto Standard";
        }
        
        document.getElementById('ticketUserName').innerHTML = userName.value;
    
        let wagonNumber = Math.floor((Math.random() * 10) + 1);
        let codeNumber = Math.floor((Math.random() * 100000) + 1);
    
        document.getElementById('ticketWagon').innerHTML = wagonNumber
        document.getElementById('ticketCode').innerHTML = codeNumber

    } else {
    
            console.log('check');
    
        };

    });

annullaButton.addEventListener('click', function() {

    document.getElementById("ticket").style.display = "none";
    userName.value = "";
    userAge.value = "";
    userKm.value = '';

});