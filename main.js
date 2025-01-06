const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 7;
    case 'Tuesday':
      return 45;
    case 'Wednesday':
      return 10;
    case 'Thursday':
      return 6;
    case 'Friday':
      return 4;
    case 'Saturday':
      return 12;
    default:
      return 9;
      } 
};

const getActualSleepHours = () => {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('') ;
};

getIdealSleepHours = (ideal) => {
  return ideal * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(2);
  const sleepDebt = idealSleepHours - actualSleepHours;
  const sleepSurplus = actualSleepHours - idealSleepHours; 

  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours < idealSleepHours){
    console.log(`You could use about ${sleepDebt} more hours of sleep!`);
  } else{
    console.log(`You could lose about ${sleepSurplus} hours of sleep and still be chipper!`);
  }
}

calculateSleepDebt();
