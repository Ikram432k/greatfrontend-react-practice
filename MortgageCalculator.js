// //Mortgage Calculator
// Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.

// Requirements
// The user should be able to enter:
// Loan amount ($)
// Annual interest rate (%). This is also known as the annual percentage rate (APR)
// Loan term (in years)
// Using the inputs, the calculator should compute the following and display the results to the user:
// Monthly mortgage payment
// Total payment amount
// Total interest paid
// If a non-numerical string is entered into any input field, the calculator should display an error message. Additionally, the calculator should handle any other invalid inputs that may arise.
// Round the result amounts to 2 decimal places.
// The last two requirements might not be given to you during interviews, you're expected to clarify.

// The formula for calculating the monthly payment is:

// M = P(i(1+i)n)/((1+i)n - 1)

// M: Monthly mortgage payment
// P: Loan amount
// i: Monthly interest rate (APR / 12)
// n: Total number of payments (loan term in years x 12)
// Here's an example of Google's mortgage calculator (you might need to be in the US for it to appear):


//https://www.greatfrontend.com/questions/user-interface/mortgage-calculator/react?format=user-interface

import React, { useState } from 'react';
export default function App() {
  const [loanAmount,setLoanAmount] = useState();
    const [apr,setApr] = useState();
  const [loanTerm,setloanTerm] = useState();
  const [buttonError,setButtonError] = useState(false);
    const [loanAmountErr,setLoanAmountErr] = useState(false);
  const [aprErr,setAprErr] = useState(false);
  const [loanTermErr,setLoanTermErr] = useState(false);

  const updateLoanAmount =(e)=>{
    if(e.target.value !== 'number' && isNaN(e.target.value)){
      setLoanAmountErr(true)
      return
    }
    setLoanAmountErr(false)
    setButtonError(false);
    setLoanAmount(e.target.value);
  }
  const [result,setResult] = useState(0);
  const updateApr =(e)=>{
    if(e.target.value !== 'number' && isNaN(e.target.value)){
      setAprErr(true)
      return
    }
    setAprErr(false)
    setButtonError(false);
    setApr(e.target.value);
  }
  const updateLoanTerm =(e)=>{
    if(e.target.value !== 'number' && isNaN(e.target.value)){
      setLoanTermErr(true)
      return
    }
    setLoanTermErr(false)
    setButtonError(false);
    setloanTerm(e.target.value);
  }

  const submitForm=(e)=>{
    if(loanAmount == 0 || apr == 0 || loanTerm == 0){
      setButtonError(true);
      return
    }
    e.preventDefault();
    //M = P(i(1+i)n)/((1+i)n - 1)
    let p = loanAmount;
    let i = (apr/100)/12;
    let n = loanTerm*12;
    let m = p*(i*(1+i)**n)/(((1+i)**n)-1)
    console.log("result",Math.round(m.toFixed(2)))
    setResult(Math.round(m.toFixed(2)));
  }
  return (
    <form style={{display: 'flex',flexDirection: 'column'}} onSubmit={submitForm}>

      <input type="text" placeholder="Loan amount ($)" value={loanAmount} onChange={updateLoanAmount} required/>
      {loanAmountErr && <p>Enter the correct numerical value</p>}
      <input type="text" placeholder="Annual interest rate" value={apr} onChange={updateApr} required/>
      {aprErr && <p>Enter the correct numerical value</p>}
      <input type="text" placeholder="Loan term (in years)" value={loanTerm} onChange={updateLoanTerm} required/>
      {loanTermErr && <p>Enter the correct numerical value</p>}
      <button>submit</button>
      {result>0 && <p>{result}</p>}
      {buttonError && <p>Enter the required values</p>}
    </form>
  );
}
