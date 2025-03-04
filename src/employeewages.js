const IS_PRESENT = Math.random() < 0.5; // 50% probability
console.log(IS_PRESENT ? "Employee is Present" : "Employee is Absent");

const FULL_TIME_HOURS = 8,
  PART_TIME_HOURS = 4,
  WAGE_PER_HOUR = 20;
let empType = Math.floor(Math.random() * 3);
let workHours =
  empType === 1 ? PART_TIME_HOURS : empType === 2 ? FULL_TIME_HOURS : 0;

if (IS_PRESENT) {
  console.log(
    `Employee worked ${workHours} hours and earned $${
      workHours * WAGE_PER_HOUR
    }`
  );
} else {
  console.log("No wages, employee was absent.");
}
