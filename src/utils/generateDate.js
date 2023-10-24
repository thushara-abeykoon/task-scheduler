import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(),year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");


  const arrayOfDate = []

  //generate prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {

      arrayOfDate.push({date: firstDateOfMonth.day(i), currentMonth: false})
  } 

  //generate current date
  for (let i = 1; i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      currentMonth: true,
      today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
    });
  }

  const remaining = 42 - arrayOfDate.length;
  //generate suffix
  for (let i = lastDateOfMonth.date()+1; i <= lastDateOfMonth.date()+remaining; i++) {
    arrayOfDate.push({date: lastDateOfMonth.date(i), currentMonth: false});
  }

  return arrayOfDate;
}