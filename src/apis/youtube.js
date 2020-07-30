import axios from 'axios';

const KEY = "AIzaSyAJcQSJyOrLAK-1tyID0Ys2_ueU_NZMULY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});