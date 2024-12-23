let userInput = document.getElementById("ageInput");

let calculateAge = () => {
  let birthDate = new Date(userInput.value);
  console.log(birthDate);

  let bYear = birthDate.getFullYear();
  let bMonth = birthDate.getMonth() + 1;
  let bDay = birthDate.getDate();

  // =========== Current Date =============

  let today = new Date();

  let cYear = today.getFullYear();
  let cMonth = today.getMonth() + 1;
  let cDay = today.getDate();

  // =========== Calculating Age =============
    
    let totalYear = cYear - bYear;
    
    let totalMonth = '';

    if(cMonth >= bMonth) {
        totalMonth = cMonth - bMonth;        
    }
    else {
        totalYear--;
        totalMonth = 12 + cMonth - bMonth;
    }        
    
    let totalDate = '';

    if (cDay >= bDay) {
        totalDate = cDay - bDay;
    }

    let year = document.getElementById("year");
    let month = document.getElementById("month");
    let day = document.getElementById("day");

    year.innerHTML = totalYear;
    month.innerHTML = totalMonth;
    day.innerHTML = totalDate;

    








}