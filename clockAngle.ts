function getClockAngle(hh_mm: string): number {

  const [hours, minutes] : number[] = hh_mm.split(':').map(Number);

  const hourAngle: number = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteAngle: number = minutes * 6;
  let angleDifference: number = Math.abs(hourAngle - minuteAngle);

  if (angleDifference > 180) {
    angleDifference = 360 - angleDifference;
  }

  return angleDifference;
}

console.log(getClockAngle("09:00")); // Output: 90
console.log(getClockAngle("17:30")); // Output: 15
console.log(getClockAngle("10:05")); // Output: 87.5