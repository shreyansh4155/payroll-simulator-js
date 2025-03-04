const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;
const PART_TIME_WAGE = PART_TIME_HOURS * WAGE_PER_HOUR;

function getWorkHours(empType) {
  switch (empType) {
    case 1:
      return PART_TIME_HOURS;
    case 2:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}

function calculateWage() {
  const IS_PRESENT = Math.random() < 0.5; // 50% probability
  const empType = Math.floor(Math.random() * 3);
  const workHours = IS_PRESENT ? getWorkHours(empType) : 0;

  if (IS_PRESENT) {
    console.log("Employee is Present");
    console.log(
      `Employee worked ${workHours} hours and earned $${
        workHours * WAGE_PER_HOUR
      }`
    );
  } else {
    console.log("Employee is Absent");
    console.log("No wages, employee was absent.");
  }

  console.log(`Employee worked ${workHours} hours`);
}
function calculateTotalWage(days) {
  let totalWage = 0;
  let dailyWages = [];
  for (let day = 1; day <= days; day++) {
    const dailyHours = getWorkHours(Math.floor(Math.random() * 3));
    const dailyWage = dailyHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage);
    totalWage += dailyWage;
  }
  console.log(`Daily Wages: ${dailyWages}`);
  return totalWage;
}
function calculateWageUntilLimit() {
  let totalHours = 0;
  let totalDays = 0;
  let totalWageUntil = 0;
  let dailyWages = [];

  while (totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
    const dailyHours = getWorkHours(Math.floor(Math.random() * 3));
    const dailyWage = dailyHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage);
    totalHours += dailyHours;
    totalWageUntil += dailyWage;
    totalDays++;
  }

  console.log(`Daily Wages: ${dailyWages}`);
  console.log(
    `Total Days: ${totalDays}, Total Hours: ${totalHours}, Total Wage: $${totalWageUntil}`
  );

  // a. Calc total Wage using Array forEach or reduce method
  const totalWage = dailyWages.reduce((total, wage) => total + wage, 0);
  console.log(`Total Wage using reduce: $${totalWage}`);

  // b. Show the Day along with Daily Wage using Array map helper function
  const dayWithWages = dailyWages.map(
    (wage, index) => `Day ${index + 1}: $${wage}`
  );
  console.log(`Day with Wages: ${dayWithWages}`);

  // c. Show Days when Full time wage of 160 were earned using filter function
  const fullTimeWageDays = dailyWages.filter((wage) => wage === FULL_TIME_WAGE);
  console.log(`Days with Full Time Wage: ${fullTimeWageDays.length}`);

  // d. Find the first occurrence when Full Time Wage was earned using find function
  const firstFullTimeWageDay = dailyWages.find(
    (wage) => wage === FULL_TIME_WAGE
  );
  console.log(`First occurrence of Full Time Wage: $${firstFullTimeWageDay}`);

  // e. Check if Every Element of Full Time Wage is truly holding Full time wage
  const isEveryFullTimeWage = dailyWages.every(
    (wage) => wage === FULL_TIME_WAGE
  );
  console.log(`Is every element a Full Time Wage: ${isEveryFullTimeWage}`);

  // f. Check if there is any Part Time Wage
  const isAnyPartTimeWage = dailyWages.some((wage) => wage === PART_TIME_WAGE);
  console.log(`Is there any Part Time Wage: ${isAnyPartTimeWage}`);

  // g. Find the number of days the Employee Worked
  const daysWorked = dailyWages.filter((wage) => wage > 0).length;
  console.log(`Number of days the Employee Worked: ${daysWorked}`);
}

calculateWage();
const totalWage = calculateTotalWage(20);
console.log(`Total Wage for 20 Days: $${totalWage}`);
calculateWageUntilLimit();
