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

nextBtn.addEventListener("click", function nextBtnClick() {
  if (billAmount.value > 0) {
    amount = billAmount.value;
    billErrorMsg.style.display = "none";
    cashInputSection.style.display = "flex";
  } else {
    billErrorMsg.style.display = "block";
  }
});

checkBtn.addEventListener("click", function checkBtnClick() {
  cash = cashGiven.value;
  clearBtn.style.display = "inline";

  if (cashGiven.value > amount) {
    cash = cashGiven.value;
    let balance = cash - amount;
    cashErrorMsg.style.display = "none";

    for (let i = 0; i < notes.length; i++) {
      console.log("balance ", balance);
      const numberOfNotes = Math.trunc(balance / notes[i]);
      console.log(balance / notes[i]);
      if (numberOfNotes > 0) {
        noOfNotes[i].innerText = numberOfNotes;
        balance = balance % notes[i];
      } else {
        noOfNotes[i].innerText = "0";
      }
    }
  } else {
    cashErrorMsg.style.display = "block";
  }
});

clearBtn.addEventListener("click", function clearBtnClick() {
  amount = 0;
  cash = 0;
  balance = 0;
  cashErrorMsg.style.display = "none";
  cashInputSection.style.display = "none";

  for (let i = 0; i < noOfNotes.length; i++) {
    noOfNotes[i].innerText = "";
  }
  billAmount.value = "";
  cashGiven.value = "";
});
