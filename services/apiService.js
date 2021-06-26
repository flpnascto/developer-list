const axios = require('axios');

const requestAddressData = async (postalCode) => {
  const endpoint = `https://viacep.com.br/ws/${postalCode}/json/`;

  const addressData = await axios.get(endpoint)
    .then((response) => response.data);

  return addressData;
};

module.exports = {
  requestAddressData,
};
