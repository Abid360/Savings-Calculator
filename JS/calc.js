// handle income and expence

//income
document.getElementById("calculate-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("incomeValue").value;
  const foodInput = document.getElementById("foodCost").value;
  const rentInput = document.getElementById("rentCost").value;
  const clothesInput = document.getElementById("clothesCost").value;
  // total expenses
  const outPut =
    parseInt(foodInput) + parseInt(rentInput) + parseInt(clothesInput);

  //   console.log(outPut);

  const totalExpenses = document.getElementById("total-expenses");

  totalExpenses.innerText = outPut;
  // remaining balance
  const remainigBalance = document.getElementById("remaining-balance");
  const newBalance = parseInt(depositInput) - parseInt(outPut);
  remainigBalance.innerText = newBalance;

  //   console.log(newBalance);
});

//Savings Part

document.getElementById("save-btn").addEventListener("click", function () {
  const savingInput = document.getElementById("savingPercent").value;

  const totalSave = remainigBalance / parseInt(savingInput);
  //   console.log(totalSave);
});
