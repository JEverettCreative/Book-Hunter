import axios from "axios";

let key = process.env.API_KEY;

export default {
    huntBook: function(search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + ":keyes&key=" + key);
    }
};