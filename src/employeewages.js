const FULL_TIME_HOURS = 8,
  PART_TIME_HOURS = 4,
  WAGE_PER_HOUR = 20;

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
  for (let day = 1; day <= days; day++) {
    const dailyHours = getWorkHours(Math.floor(Math.random() * 3));
    totalWage += dailyHours * WAGE_PER_HOUR;
  }
  return totalWage;
}

calculateWage();
const totalWage = calculateTotalWage(20);
console.log(`Total Wage for 20 Days: $${totalWage}`);
