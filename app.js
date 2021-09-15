const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");

const nextBtn = document.querySelector(".next-btn");
const checkBtn = document.querySelector(".check-btn");
const clearBtn = document.querySelector(".clear-btn");

const cashInputSection = document.querySelector(".cash-input-section");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const billErrorMsg = document.querySelector(".bill-error-msg");
const cashErrorMsg = document.querySelector(".cash-error-msg");
console.log(noOfNotes);
let amount = 0;
let cash = 0;
const notes = [2000, 500, 100, 20, 10, 5, 1];

cashInputSection.style.display = "none";

function nextBtnClick() {
  if (Number(billAmount.value) > 0) {
    amount = Number(billAmount.value);

    billErrorMsg.style.display = "none";
    cashInputSection.style.display = "flex";
  } else {
    billErrorMsg.style.display = "block";
  }
}

nextBtn.addEventListener("click", nextBtnClick);

checkBtn.addEventListener("click", function checkBtnClick() {
  amount = Number(billAmount.value);
  cash = Number(cashGiven.value);
  clearBtn.style.display = "inline";
  // console.log(typeof amount, typeof cash);

  if (cash > amount) {
    cash = Number(cashGiven.value);
    let balance = cash - amount;
    cashErrorMsg.style.display = "none";

    for (let i = 0; i < notes.length; i++) {
      // console.log("balance ", balance);
      const numberOfNotes = Math.trunc(balance / notes[i]);
      // console.log(balance / notes[i]);
      if (numberOfNotes > 0) {
        noOfNotes[i].innerText = numberOfNotes;
        balance = balance % notes[i];
      } else {
        noOfNotes[i].innerText = "0";
      }
    }
  } else if (cashGiven.value < 0) {
    cashErrorMsg.style.display = "block";
    cashErrorMsg.innerText = "ERROR: Please Enter A Postive Number";
    clearTable();
  } else {
    cashErrorMsg.style.display = "block";
    cashErrorMsg.innerText =
      "ERROR: Cash Given Should be More Than The Bill Amount";
    clearTable();
  }
});

clearBtn.addEventListener("click", function clearBtnClick() {
  nextBtnClick();
  amount = 0;
  cash = 0;
  balance = 0;
  cashErrorMsg.style.display = "none";
  cashInputSection.style.display = "none";

  clearTable();
  billAmount.value = "";
  cashGiven.value = "";
});

function clearTable() {
  for (let i = 0; i < noOfNotes.length; i++) {
    noOfNotes[i].innerText = "";
  }
}
