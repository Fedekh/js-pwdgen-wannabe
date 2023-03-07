
// Chiedi all’utente il suo nome
    let userName = prompt("Ciao inserisci il tuo nome");
    console.log(userName, typeof userName);

// Chiedi il suo cognome
    let lastName = prompt("Ciao inserisci il tuo cognome");
    console.log(lastName, typeof lastName);

// Chiedi il suo colore preferito
    let colorUser = prompt("Ciao inserisci il tuo colore preferito");
    console.log(colorUser, typeof colorUser);


// Infine scrivi sulla pagina che la password è composta in questo modo
// `nomecognomecolorepreferito21`

    let passWord = `La password suggerita risulta essere ${userName}${lastName}${colorUser}21`;
    console.log (passWord, typeof passWord);


// Trascriviamo in html la password suggerita dall'algoritmo

    document.getElementById ('pass-generate').innerHTML = `La password suggerita dall'algoritmo è ${passWord}`;