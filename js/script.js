
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

    let fullPrice = pricePerKm * userKm;

    let finalPrice

    if (userAge < 18) {

        finalPrice = fullPrice - fullPrice * 20 / 100;
        console.log(finalPrice);

    } else if (userAge >= 65) {

        finalPrice = fullPrice - fullPrice * 40 / 100;
        console.log(finalPrice);

    } else {

        finalPrice = fullPrice;
        console.log(finalPrice);
    }



    
    document.getElementById('ticketUserName').innerHTML = userName.value;

  });











