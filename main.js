function createGame(player1, hour, player2) {
    return `
     <li>
                <img
                  src="./assets/icon/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
                <strong>${hour}</strong>
                
                <img src="./assets/icon/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
              
              </li>
              
              <p class="name-band">${player1}<span>${player2}</span></p>
               
    `
  }
  
  let delay = -0.4
  function createCard(date, day, games) {
    delay = delay + 0.4
    return `
     <div class="card" style="animation-delay: ${delay}s"}>
            <h2>${date} <span>${day}</span></h2>
            <ul>
             ${games}
            </ul>
          </div>
    `
  }
  
  document.querySelector("#cards").innerHTML =
    createCard("24/11", "quinta", createGame("Brasil", "16:00", "Sérvia")) +
    createCard("28/11", "segunda", createGame("Brasil", "13:00", "Suíça")) +
    createCard("02/12", "sexta", createGame("Camarões", "16:00", "Brasil"))
  