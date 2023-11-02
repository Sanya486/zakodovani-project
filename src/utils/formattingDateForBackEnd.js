function formattingDateForBackEnd(inputDate) {
  const parts = inputDate.split('/');
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  const formattedDate = new Date(`${year}-${month}-${day}`);

  return formattedDate;
}

export default formattingDateForBackEnd;
