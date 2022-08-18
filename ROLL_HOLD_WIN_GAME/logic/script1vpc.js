const p1 = document.querySelector(".player_1");
const p2 = document.querySelector(".player_2");
const p1fs = document.querySelector("#score_1");
const p2fs = document.querySelector("#score_2");
const p1cs = document.querySelector("#current_1");
const p2cs = document.querySelector("#current_2");
const dice = document.querySelector(".dice");
const neww = document.querySelector(".btn_new");
const roll = document.querySelector(".btn_dice");
const hold = document.querySelector(".btn_hold");
const p1n = document.querySelector("#name_1");
const p2n = document.querySelector("#name_2");

let scores;
let playing;
let active;
let current;
let random_pc;
random_pc = [
  1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
];
// scores has 2 values .. score of p1 and p2 stored
// playing is a boolean its true when game is on and false when either players win
// active is a boolean too true for only 1 player at a time
// current is used to calculate the current value of active player

const startt = function () {
  scores = [0, 0, 0];
  current = 0;
  active = 1;
  playing = true;
  p1fs.textContent = 0;
  p2fs.textContent = 0;
  p1cs.textContent = 0;
  p2cs.textContent = 0;
  dice.classList.add("none");
  p1.classList.remove("player_winner");
  p2.classList.remove("player_winner");
  p1.classList.add("player_active");
  p2.classList.remove("player_active");
  document.querySelector("#name_1").textContent = "PLAYER 1";
  document.querySelector("#name_2").textContent = "PC";
  document.querySelector(".btn_dice").classList.remove("none");
  document.querySelector(".btn_hold").classList.remove("none");
  document.querySelector(`.player_1`).classList.remove("none");
  document.querySelector(`.player_2`).classList.remove("none");
};

startt();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Switch Player
const switchPlayer = async function () {
  roll.classList.remove("none");
  hold.classList.remove("none");
  current = 0;
  document.getElementById(`current_${active}`).textContent = current;
  if (active == 1) active = 2;
  else active = 1;
  p1.classList.toggle("player_active");
  p2.classList.toggle("player_active");
  while (active == 2 && playing) {
    roll.classList.add("none");
    hold.classList.add("none");
    let n = Math.trunc(Math.random() * 25);
    console.log(random_pc[n] + " choice");
    await sleep(1500);
    if (random_pc[n] == 0) {
      roll_fn();
    } else {
      hold_fn();
    }
  }
};

roll.addEventListener("click", roll_fn);
hold.addEventListener("click", hold_fn);
neww.addEventListener("click", startt);

//Roll Dice
function roll_fn() {
  if (playing) {
    dice.classList.add("shake");
    setTimeout(Fn, 1250);
    function Fn() {
      dice.classList.remove("shake");
    }
    let dice_no = Math.trunc(Math.random() * 6 + 1);
    console.log(dice_no + "dice");
    dice.src = `../images/dice${dice_no}.png`;
    dice.classList.remove("none");
    if (dice_no != 1) {
      current += dice_no;
      document.getElementById(`current_${active}`).textContent = current;
      if (current + scores[active] >= 100) {
        dice.classList.add("none");
        playing = false;
        if (active == 1) {
          document.querySelector("#name_1").textContent = "PLAYER 1 WINS";
          document.querySelector(`.player_2`).classList.add("none");
        }
        if (active == 2) {
          document.querySelector("#name_2").textContent = "PC WINS";
          document.querySelector(`.player_1`).classList.add("none");
        }
        document.querySelector(".btn_dice").classList.add("none");
        document.querySelector(".btn_hold").classList.add("none");
        document
          .querySelector(`.player_${active}`)
          .classList.add("player_winner");
        document
          .querySelector(`.player_${active}`)
          .classList.remove("player_active");
      }
    } else {
      switchPlayer();
    }
  }
}

function hold_fn() {
  if (playing) {
    scores[active] += current;
    console.log(scores[active] + "->score " + active);
    document.getElementById(`score_${active}`).textContent = scores[active];
    if (scores[active] >= 100) {
      dice.classList.add("none");
      playing = false;
      if (active == 1) {
        document.querySelector("#name_1").textContent = "PLAYER 1 WINS";
        document.querySelector(`.player_2`).classList.add("none");
      }
      if (active == 2) {
        document.querySelector("#name_2").textContent = "PC WINS";
        document.querySelector(`.player_1`).classList.add("none");
      }
      document.querySelector(".btn_dice").classList.add("none");
      document.querySelector(".btn_hold").classList.add("none");
      document
        .querySelector(`.player_${active}`)
        .classList.add("player_winner");
      document
        .querySelector(`.player_${active}`)
        .classList.remove("player_active");
    } else {
      dice.classList.add("none");
      switchPlayer();
    }
  }
}
