const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;
const PART_TIME_WAGE = PART_TIME_HOURS * WAGE_PER_HOUR;

class EmployeePayrollData {
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = new Date(startDate);
  }

  toString() {
    return `ID: ${this.id}, Name: ${this.name}, Salary: $${
      this.salary
    }, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
  }
}

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
    dailyWages.push({ day, hoursWorked: dailyHours, wageEarned: dailyWage });
    totalWage += dailyWage;
  }
  console.log(`Daily Wages: ${JSON.stringify(dailyWages, null, 2)}`);
  return totalWage;
}

function calculateWageUntilLimit() {
  let totalHours = 0;
  let totalDays = 0;
  let totalWageUntil = 0;
  let dailyWages = [];
  let dailyHoursMap = new Map();

  while (totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
    const dailyHours = getWorkHours(Math.floor(Math.random() * 3));
    const dailyWage = dailyHours * WAGE_PER_HOUR;
    dailyWages.push({
      day: totalDays + 1,
      hoursWorked: dailyHours,
      wageEarned: dailyWage,
    });
    dailyHoursMap.set(totalDays + 1, dailyHours);
    totalHours += dailyHours;
    totalWageUntil += dailyWage;
    totalDays++;
  }

  console.log(`Daily Wages: ${JSON.stringify(dailyWages, null, 2)}`);
  console.log(
    `Total Days: ${totalDays}, Total Hours: ${totalHours}, Total Wage: $${totalWageUntil}`
  );

  // a. Calc total Wage using Array forEach or reduce method
  const totalWage = dailyWages.reduce(
    (total, { wageEarned }) => total + wageEarned,
    0
  );
  console.log(`Total Wage using reduce: $${totalWage}`);

  // b. Show the Day along with Daily Wage using Array map helper function
  const dayWithWages = dailyWages.map(
    ({ day, wageEarned }) => `Day ${day}: $${wageEarned}`
  );
  console.log(`Day with Wages: ${dayWithWages.join(", ")}`);

  // c. Show Days when Full time wage of 160 were earned using filter function
  const fullTimeWageDays = dailyWages
    .filter(({ wageEarned }) => wageEarned === FULL_TIME_WAGE)
    .map(({ day }) => day);
  console.log(`Days with Full Time Wage: ${fullTimeWageDays.join(", ")}`);

  // d. Find the first occurrence when Full Time Wage was earned using find function
  const firstFullTimeWageDay = dailyWages.find(
    ({ wageEarned }) => wageEarned === FULL_TIME_WAGE
  );
  console.log(
    `First occurrence of Full Time Wage: Day ${
      firstFullTimeWageDay ? firstFullTimeWageDay.day : "None"
    }`
  );

  // e. Check if Every Element of Full Time Wage is truly holding Full time wage
  const isEveryFullTimeWage = dailyWages.every(
    ({ wageEarned }) => wageEarned === FULL_TIME_WAGE
  );
  console.log(`Is every element a Full Time Wage: ${isEveryFullTimeWage}`);

  // f. Check if there is any Part Time Wage
  const isAnyPartTimeWage = dailyWages.some(
    ({ wageEarned }) => wageEarned === PART_TIME_WAGE
  );
  console.log(`Is there any Part Time Wage: ${isAnyPartTimeWage}`);

  // g. Find the number of days the Employee Worked
  const daysWorked = dailyWages.filter(
    ({ wageEarned }) => wageEarned > 0
  ).length;
  console.log(`Number of days the Employee Worked: ${daysWorked}`);

  // Additional functionality using arrow functions
  // a. Calc total Wage and total hours worked
  const totalWagesAndHours = dailyWages.reduce(
    (acc, { hoursWorked, wageEarned }) => {
      acc.totalWage += wageEarned;
      acc.totalHours += hoursWorked;
      return acc;
    },
    { totalWage: 0, totalHours: 0 }
  );
  console.log(
    `Total Wage: $${totalWagesAndHours.totalWage}, Total Hours: ${totalWagesAndHours.totalHours}`
  );

  // b. Show the full working days using forEach
  const fullWorkingDays = [];
  dailyWages.forEach(({ day, hoursWorked }) => {
    if (hoursWorked === FULL_TIME_HOURS) {
      fullWorkingDays.push(day);
    }
  });
  console.log(`Full Working Days: ${fullWorkingDays.join(", ")}`);

  // c. Show Part working days using Map by reducing to String Array
  const partWorkingDays = dailyWages
    .filter(({ hoursWorked }) => hoursWorked === PART_TIME_HOURS)
    .map(({ day }) => `Day ${day}`);
  console.log(`Part Working Days: ${partWorkingDays.join(", ")}`);

  // d. No working days only using Map function
  const noWorkingDays = dailyWages
    .map(({ day, hoursWorked }) => (hoursWorked === 0 ? `Day ${day}` : null))
    .filter((day) => day !== null);
  console.log(`No Working Days: ${noWorkingDays.join(", ")}`);
}

// Example usage of EmployeePayrollData
const employee1 = new EmployeePayrollData(
  1,
  "John Doe",
  50000,
  "Male",
  "2023-01-01"
);
console.log(employee1.toString());

calculateWage();
const totalWage = calculateTotalWage(20);
console.log(`Total Wage for 20 Days: $${totalWage}`);
calculateWageUntilLimit();
