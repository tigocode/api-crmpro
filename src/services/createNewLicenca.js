const connection = require('../connection/connection');

const createNewLicenca = async (id_user, start_time, end_time, remaining_time) => {
  const createTimeFree = await connection('free_time')
    .insert({
      id_user,
      start_time,
      end_time,
      remaining_time,
      first_license: false,
      updated_license: true
    });
  
  return createTimeFree;
}

module.exports = {
  createNewLicenca
}
