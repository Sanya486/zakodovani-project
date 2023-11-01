const formattingDate = (currentDate) => {
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export default formattingDate;
