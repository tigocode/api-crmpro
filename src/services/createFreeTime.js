const connection = require('../connection/connection');

const createFreeTime = async (id_user, start_time, end_time) => {
  const remaining_time = '90';
  const createTimeFree = await connection('free_time')
    .insert({
      id_user,
      start_time,
      end_time,
      remaining_time
    });
  
  return createTimeFree;
}

module.exports = {
  createFreeTime
}
