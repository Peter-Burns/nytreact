import axios from "axios";

export default {
    searchArticles: function (query, start, end) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                'api-key': process.env.API_KEY || 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
                'q': query,
                'begin_date': start + '0101',
                'end_date': end + '1231'
            }
        });
    },
    getArticles: function () {
        return axios.get("/api/articles");
    },
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    saveArticle: function (article) {
        return axios.post("/api/articles", article);
    }
};
