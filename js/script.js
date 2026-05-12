/* =========================
   PLAYER DATA
========================= */

const players = [

  {
    uid: "PLR-001",
    name: "Bagas",
    money: 1500,
    house: 3,
    hotel: 1
  },

  {
    uid: "PLR-002",
    name: "Tegar",
    money: 1250,
    house: 1,
    hotel: 0
  },

  {
    uid: "PLR-003",
    name: "Topik",
    money: 980,
    house: 5,
    hotel: 2
  },

  {
    uid: "PLR-003",
    name: "Ilham",
    money: 980,
    house: 5,
    hotel: 2
  }

];


/* =========================
   ELEMENT
========================= */

const playerList =
  document.getElementById("playerList");

const pages =
  document.querySelectorAll(".page");

const systemCards =
  document.querySelectorAll(".system-card");

const backButtons =
  document.querySelectorAll(".back-button");

const bankButton =
  document.getElementById("bankButton");


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId) {

  pages.forEach((page) => {

    page.classList.remove("active");

  });

  document
    .getElementById(pageId)
    .classList.add("active");

}


/* =========================
   CREATE PLAYER CARD
========================= */

function createPlayerCard(player, index) {

  const card =
    document.createElement("div");

  card.className =
    "player-card";

  card.innerHTML = `

    <div class="player-left">

      <div class="player-avatar">
        P${index + 1}
      </div>

      <div class="player-info">

        <h2>
          ${player.name}
        </h2>

        <p>
          Money : $${player.money}
        </p>

        <span class="player-uid">
          UID : ${player.uid}
        </span>

      </div>

    </div>

    <div class="player-right">

      <div class="property-count house">
        🏠 ${player.house}
      </div>

      <div class="property-count hotel">
        🏨 ${player.hotel}
      </div>

    </div>

  `;


  /* CLICK PLAYER */

  card.addEventListener("click", () => {

    alert(
      `OPEN PLAYER PAGE : ${player.name}`
    );

  });


  playerList.appendChild(card);

}


/* =========================
   RENDER PLAYER
========================= */

function renderPlayers() {

  playerList.innerHTML = "";

  players.forEach((player, index) => {

    createPlayerCard(player, index);

  });

}


/* =========================
   SYSTEM NAVIGATION
========================= */

systemCards.forEach((card) => {

  card.addEventListener("click", () => {

    const pageId =
      card.dataset.page;

    showPage(pageId);

  });

});


/* =========================
   BACK BUTTON
========================= */

backButtons.forEach((button) => {

  button.addEventListener("click", () => {

    showPage("homePage");

  });

});


/* =========================
   BANK BUTTON
========================= */

bankButton.addEventListener("click", () => {

  alert("OPEN BANK PAGE");

});


/* =========================
   INIT
========================= */

renderPlayers();