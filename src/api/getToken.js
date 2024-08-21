import axios from 'axios';

const getToken = async () => {
  const formData = new FormData();
  formData.append('app_id', 'ocfyhNvPX6gDSmkkEpMi');
  formData.append('secret_key', 'XKvfmj5SjkUKJYJxbpRBwmf9zzCJ1eXT');
  formData.append('grant_type', 'secret_key');

  try {
    const response = await axios.post(
      'https://api-open.olsera.co.id/api/open-api/v1/id/token',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for handling in the component
  }
};

export default getToken;