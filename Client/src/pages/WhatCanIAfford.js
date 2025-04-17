import React, { useState } from "react";
import "./WhatCanIAfford.css"; // Make sure to create and import this CSS file

function WhatCanIAfford() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [affordablePrice, setAffordablePrice] = useState("");

  const handleCalculate = () => {
    const income = parseFloat(monthlyIncome);
    const dp = parseFloat(downPayment);
    const rate = parseFloat(interestRate);
    const term = parseFloat(loanTerm);

    // Basic validation
    if (!income || !dp || !rate || !term) {
      alert("Please fill in all fields with valid numbers.");
      return;
    }

    // Assume user allocates 30% of monthly income for mortgage
    const monthlyPayment = income * 0.3;

    // Convert annual interest rate to monthly decimal (e.g., 5% => 0.05/12)
    const monthlyInterest = rate / 100 / 12;
    // Total number of monthly payments over the loan term
    const numberOfPayments = term * 12;

    // Mortgage formula:
    // monthlyPayment = (r * P) / (1 - (1 + r)^(-n))
    // => P = monthlyPayment * (1 - (1 + r)^(-n)) / r
    const principal =
      monthlyPayment *
      ((1 - Math.pow(1 + monthlyInterest, -numberOfPayments)) / monthlyInterest);

    // Total amount = principal + down payment
    const totalAffordable = principal + dp;
    setAffordablePrice(totalAffordable.toFixed(2));
  };

  return (
    <div className="affordability-container">
      <h2>What Can I Afford?</h2>
      <p className="description">
        Use this calculator to estimate the home price you can comfortably afford.
      </p>

      <div className="input-group">
        <label>Monthly Income</label>
        <input
          type="number"
          placeholder="e.g., 5000"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Down Payment</label>
        <input
          type="number"
          placeholder="e.g., 20000"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Interest Rate (%)</label>
        <input
          type="number"
          placeholder="e.g., 5"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Loan Term (years)</label>
        <input
          type="number"
          placeholder="e.g., 30"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>

      <button className="calculate-button" onClick={handleCalculate}>
        Calculate
      </button>

      {affordablePrice && (
        <div className="result">
          <h3>Estimated Home Price:</h3>
          <p>Rs {affordablePrice}</p>
        </div>
      )}
    </div>
  );
}

export default WhatCanIAfford;
