const connection =  require('../connection/connection');
const { substractedDay } = require('../core/subtractedDay');

const selectRemaingTime = async () => {
  const remainingTimeList = await connection('free_time')
    .where('first_license', '=', 1)
    .select([
      'free_time.*'
    ]);

  const newRemainingTime = await substractedDay(remainingTimeList);
  // chamando a rotina subtractDay
  
  const updateRemainingTime = await Promise.all(newRemainingTime.map(async (item) => {
    await connection('free_time')
    .where('id', item.id)
    .update({
      remaining_time: item.remaining_time,
    });
  }));

  return updateRemainingTime;
}

module.exports = {
  selectRemaingTime,
}
