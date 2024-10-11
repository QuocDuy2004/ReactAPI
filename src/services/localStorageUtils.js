// localStorageUtils.js
export const getLocalStorageData = () => {
  const balance = localStorage.getItem('balance') || 0;
  const totalRecharge = localStorage.getItem('totalRecharge') || 0;
  const totalDeduct = localStorage.getItem('totalDeduct') || 0;
  const username = localStorage.getItem('username') || '';
  const name = localStorage.getItem('name') || '';
  const email = localStorage.getItem('email') || '';
  const level = localStorage.getItem('level') || 0;
  const api_token = localStorage.getItem('api_token') || '';
  const lang = localStorage.getItem('lang') || '';
  const created_at = localStorage.getItem('created_at') || '';
  const updated_at = localStorage.getItem('updated_at') || '';

  return {
    balance,
    totalRecharge,
    totalDeduct,
    username,
    name,
    email,
    level,
    api_token,
    lang,
    created_at,
    updated_at,
  };
};
