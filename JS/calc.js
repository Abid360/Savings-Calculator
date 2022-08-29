// handle income and expence

var newBalance = 0;
const failError = document.getElementById("notify-fail");
document.getElementById("calculate-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("incomeValue").value;
  const foodInput = document.getElementById("foodCost").value;
  const rentInput = document.getElementById("rentCost").value;
  const clothesInput = document.getElementById("clothesCost").value;
  // total expenses
  if (depositInput < 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0) {
    failError.style.display = "block";
  } else {
    failError.style.display = "none";
    const outPut =
      parseInt(foodInput) + parseInt(rentInput) + parseInt(clothesInput);

    //   console.log(outPut);

    const totalExpenses = document.getElementById("total-expenses");

    totalExpenses.innerText = outPut;

    // remaining balance
    const remainigBalance = document.getElementById("remaining-balance");
    newBalance = parseInt(depositInput) - parseInt(outPut);
    remainigBalance.innerText = newBalance;
  }
});

//function for Savings Part
function calculateDiscount(price, discount) {
  return price * (discount / 100);
}

// saving js part
document.getElementById("save-btn").addEventListener("click", function () {
  const savingInput = document.getElementById("savingPercent").value; //input filed entered value getting here.
  var savingAmount = calculateDiscount(newBalance, savingInput);
  const finalSaving = document.getElementById("final-saving");
  finalSaving.innerText = savingAmount;

  const remainigBalance2 = document.getElementById("remaining-balance2");
  const Final = newBalance - savingAmount;
  remainigBalance2.innerText = Final;
  console.log(remainigBalance2);
});
