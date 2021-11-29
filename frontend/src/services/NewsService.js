export const NewsService = {
    createNews: async () => { console.log(''); },
    DeleteNews: async () => { console.log(''); },
    gettags: async () => { console.log(''); },
    
    getNewsById: async (id) => {
      let res = await fetch(`http://localhost/api/news/read_single.php/?id=${id}`);
      res = await res.json();
      const {author, title, timeStamp: timestamp, imgUrl, content} = res;
      const result = {
        id: id,
        title: title,
        imgUrl: imgUrl,
        timestamp: timestamp?.slice(0, 10),
        author: author,
        tags: [],
        content: JSON.stringify(content),
      };
      // console.log(result);
      return result;
    },

    getAll: async () => { // TODO: later
      let res = await fetch(`http://localhost/api/news/read.php`);
      res = await res.json();
      res = res.map((row) => {
        const {newsId: id, author, title, timeStamp: timestamp, imgUrl, content} = row;
        const result = {
          id: id,
          title: title,
          imgUrl: imgUrl,
          timestamp: timestamp?.slice(0, 10),
          author: author,
          tags: [],
          content: JSON.stringify(content),
        };
        return result;
      })
      // console.log(res);
      return res;
    },

    UpdateNews: async () => {},
    updateContent: async (id, newHtml) => {
      const url = `http://localhost/api/news/update.php`;
      
      const formData = new FormData();
      formData.append('content', newHtml);
      formData.append('id', id);
      
      fetch(url, { method: 'POST', body: formData })
      .then(function (response) {
        return response.text();
      })
      .then(function (body) {
        console.log(body);
      });
    },
}