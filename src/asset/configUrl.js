const API = 'http://localhost:7000/api'

const configUrl = {
  GET_CONTRACT: `${API}/getContract`,
  UPDATE_CONTRACT: `${API}/updateContract`,
  ADD_CONTRACT: `${API}/addContract`,
  DELETE_CONTRACT: `${API}/deleteContract`,
  SCHEDULE_MAIL: `${API}/mailScheduled`,
  WALLET_API: `http://rest.coinapi.io/v1/assets`
};
export default configUrl;