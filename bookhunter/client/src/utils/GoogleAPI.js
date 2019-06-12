import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export default {
    huntBook: function(search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&MaxResults" + key);
    }
};