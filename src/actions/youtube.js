import axios from 'axios';

const KEY = 'AIzaSyDj8e9NvDx7Wm6TlyLNbdXfsjcesxrw1yY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
