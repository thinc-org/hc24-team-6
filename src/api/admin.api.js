import axios from 'axios';

const BASE_URL = "https://cunext-event-backend.onrender.com"


export const getMyEvents = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/events/my`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluM0BleGFtcGxlLmNvbSIsImV4cCI6MTcxMzczNTE2Nywicm9sZSI6ImFkbWluIiwic3ViIjo1fQ.tO0Thy1x36iBpzfas0C6hVZTuKgkYT0GvYpT5plQb0I`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getMyEventCount = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/events/count`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluM0BleGFtcGxlLmNvbSIsImV4cCI6MTcxMzczNTE2Nywicm9sZSI6ImFkbWluIiwic3ViIjo1fQ.tO0Thy1x36iBpzfas0C6hVZTuKgkYT0GvYpT5plQb0I`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getMyEventJoinPeople = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/events/joined-people`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluM0BleGFtcGxlLmNvbSIsImV4cCI6MTcxMzczNTE2Nywicm9sZSI6ImFkbWluIiwic3ViIjo1fQ.tO0Thy1x36iBpzfas0C6hVZTuKgkYT0GvYpT5plQb0I`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
