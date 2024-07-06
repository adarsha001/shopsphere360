const axios = require('axios');

const API_KEY = 'your_api_key'; // Replace with your actual API key or access token

const fetchInstagramData = async () => {
  try {
    const response = await axios.get('https://v1.nocodeapi.com/adarsha001/instagram/zNCcYrisMgMBepwW', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching Instagram data:', error.message);
    throw error;
  }
};

module.exports = fetchInstagramData;
