const FULL_TIME_HOURS = 8,
  PART_TIME_HOURS = 4,
  WAGE_PER_HOUR = 20;

function getWorkHours(empType) {
  return empType === 1 ? PART_TIME_HOURS : empType === 2 ? FULL_TIME_HOURS : 0;
}

function calculateWage() {
  const IS_PRESENT = Math.random() < 0.5; // 50% probability
  let empType = Math.floor(Math.random() * 3);
  let workHours = IS_PRESENT ? getWorkHours(empType) : 0;

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

// Call the function to calculate wage
calculateWage();
