export function getCurrentDateTime() {
  const currentDateTime:Date = new Date();
  const currentDateTimeFormatted:string = currentDateTime.toLocaleString();
  const dateHourContainer: HTMLDivElement | null   = document.getElementById('dateHourContainer') as HTMLDivElement;
  dateHourContainer.textContent = currentDateTimeFormatted;
}
