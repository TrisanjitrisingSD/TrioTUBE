import axios from 'axios'


const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;



export const fetchApiForYoutubeData = async (endpoints, params={}) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoints}`, {
            params: {
                 ...params,
                 key:API_KEY
            }
        })

        console.log("this is my response",response.data);
        return response.data;

    } catch (error) {
        console.error(error,'error fetching data');
          if (error.response?.status === 403) {
          alert('⚠️ YouTube API quota exceeded. Try again tomorrow!');
    }
    }
}



// utils/fetchApi.js
