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
  createCard("20/11", "Domingo", createGame("Catar", "13:00", "Equador")) +
  createCard("21/11", "Segunda", createGame("Inglaterra", "10:00", "Irã")) +
  createCard("21/11", "Segunda", createGame("Holanda", "13:00", "Senegal")) +
  createCard("21/11", "Segunda", createGame("EUA", "16:00", "Gales")) +
  createCard(
    "22/11",
    "Terça",
    createGame("Arábia-Saudita", "07:00", "Argentina")
  ) +
  createCard("22/11", "Terça", createGame("Dinamarca", "10:00", "Tunísia")) +
  createCard("22/11", "Terça", createGame("México", "13:00", "Polônia")) +
  createCard("22/11", "Terça", createGame("Austrália", "16:00", "França")) +
  createCard("23/11", "Quarta", createGame("Croácia", "07:00", "Marrocos")) +
  createCard("23/11", "Quarta", createGame("Alemanha", "10:00", "Japão")) +
  createCard("23/11", "Quarta", createGame("Costa-Rica", "13:00", "Espanha")) +
  createCard("23/11", "Quarta", createGame("Canadá", "16:00", "Bélgica")) +
  createCard("24/11", "Quinta", createGame("Camarões", "07:00", "Suíça")) +
  createCard(
    "24/11",
    "Quinta",
    createGame("Coreia-do-Sul", "10:00", "Uruguai")
  ) +
  createCard("24/11", "Quinta", createGame("Gana", "13:00", "Portugal")) +
  createCard("24/11", "Quinta", createGame("Brasil", "16:00", "Sérvia")) +
  createCard("25/11", "Sexta", createGame("Gales", "07:00", "Irã")) +
  createCard("25/11", "Sexta", createGame("Catar", "10:00", "Senegal")) +
  createCard("25/11", "Sexta", createGame("Equador", "13:00", "Holanda")) +
  createCard("25/11", "Sexta", createGame("EUA", "16:00", "Inglaterra")) +
  createCard("26/11", "Sábado", createGame("Austrália", "07:00", "Tunísia")) +
  createCard(
    "26/11",
    "Sábado",
    createGame("Arábia-Saudita", "10:00", "Polônia")
  ) +
  createCard("26/11", "Sábado", createGame("Dinamarca", "13:00", "França")) +
  createCard("26/11", "Sábado", createGame("Argentina", "16:00", "México")) +
  createCard("27/11", "Domingo", createGame("Costa-Rica", "07:00", "Japão")) +
  createCard("27/11", "Domingo", createGame("Bélgica", "10:00", "Marrocos")) +
  createCard("27/11", "Domingo", createGame("Canadá", "13:00", "Croácia")) +
  createCard("27/11", "Domingo", createGame("Alemanha", "16:00", "Espanha")) +
  createCard("28/11", "Segunda", createGame("Camarões", "07:00", "Sérvia")) +
  createCard("28/11", "Segunda", createGame("Coreia-do-Sul", "10:00", "Gana")) +
  createCard("28/11", "Segunda", createGame("Brasil", "13:00", "Suíça")) +
  createCard("28/11", "Segunda", createGame("Portugal", "16:00", "Uruguai")) +
  createCard("29/11", "Terça", createGame("Equador", "12:00", "Senegal")) +
  createCard("29/11", "Terça", createGame("Catar", "12:00", "Holanda")) +
  createCard("29/11", "Terça", createGame("EUA", "16:00", "Irã")) +
  createCard("29/11", "Terça", createGame("Gales", "16:00", "Inglaterra")) +
  createCard("30/11", "Quarta", createGame("França", "12:00", "Tunísia")) +
  createCard("30/11", "Quarta", createGame("Austrália", "12:00", "Dinamarca")) +
  createCard("30/11", "Quarta", createGame("Argentina", "16:00", "Polônia")) +
  createCard(
    "30/11",
    "Quarta",
    createGame("Arábia-Saudita", "16:00", "México")
  ) +
  createCard("01/12", "Quinta", createGame("Bélgica", "12:00", "Croácia")) +
  createCard("01/12", "Quinta", createGame("Canadá", "12:00", "Marrocos")) +
  createCard("01/12", "Quinta", createGame("Espanha", "16:00", "Japão")) +
  createCard("01/12", "Quinta", createGame("Alemanha", "16:00", "Costa-Rica")) +
  createCard(
    "02/12",
    "Sexta",
    createGame("Coreia-do-Sul", "12:00", "Portugal")
  ) +
  createCard("02/12", "Sexta", createGame("Gana", "12:00", "Uruguai")) +
  createCard("02/12", "Sexta", createGame("Sérvia", "16:00", "Suíça")) +
  createCard("02/12", "Sexta", createGame("Brasil", "16:00", "Camarões"))
