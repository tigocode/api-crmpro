const freeTime = () => {
  const date = new Date();
  let start;
  let end; 

  while(!start || !end) {
    if(!start) {
      const data = date.toISOString().slice(0, 10);
      const hora = date.toTimeString().split(' ')[0]

      start = `${data} ${hora}`;
    } else {
      date.setDate(date.getDate() + 90);
      const data = date.toISOString().slice(0, 10);
      const hora = date.toTimeString().split(' ')[0]

      end = `${data} ${hora}`;
    }
  }
  return { start, end}
}

module.exports = {
  freeTime,
}
