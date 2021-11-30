
// const commentItems = [ // TODO: load data from API
//   { id: 1, userId: 113, content: 'hello', timestamp: "Fri Nov 05 2021 15:00:33 GMT+0700 (Indochina Time)", 
//   name: 'Sa', avaUrl : 'https://picsum.photos/200' },
//   { id: 2, userId: 113, content: 'another hello', timestamp: "Fri Nov 05 2021 15:00:33 GMT+0700 (Indochina Time)", 
//   name: 'Sa', avaUrl : 'https://picsum.photos/200' },
//   { id: 3, userId: 911, content: 'Who are you ?', timestamp: "Fri Nov 12 2021 15:00:33 GMT+0700 (Indochina Time)", 
//   name: 'Nguyễn Hữu Phúc', avaUrl : 'https://picsum.photos/300' },
// ];

export const CommentService = {    
  getCommentById: async (newsId, productId) => {
    let url = 'http://localhost/api/comment/read.php/?';
    if (newsId) {
      url = url + `newsId=${newsId}`;
    } else if (productId) {
      url = url + `productId=${productId}`;
    }
    let res = await fetch(url);
    res = await res.json();
    // console.log(res);

    if (!res.length) return [];

    res = res.map((row) => {
      const {cmtId, accId, userName, avatar, content, timeStamp} = row;
      const result = {
        id: cmtId,
        userId: accId,
        content: content,
        timestamp: timeStamp,
        name: userName,
        avaUrl: avatar,
      };
      return result;
    }) || [];
    // console.log(res);
    return res;
  },
    
  createComment: async (title, imgUrl, uid) => {
    const url = `http://localhost/api/comment/create.php`;
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('imgUrl', imgUrl);
    formData.append('admId', uid);
    // formData.append('timeStamp', timestamp);
    
    fetch(url, { method: 'POST', body: formData })
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
    });
  },

  // update: async (id, newHtml) => {
  //   const url = `http://localhost/api/comment/update.php`;
    
  //   const formData = new FormData();
  //   formData.append('content', newHtml);
  //   formData.append('commentId', id);
    
  //   fetch(url, { method: 'POST', body: formData })
  //   .then(function (response) {
  //     return response.text();
  //   })
  //   .then(function (body) {
  //     console.log(body);
  //   });
  // },

  // delete: async (commentId) => {
  //   const url = `http://localhost/api/comment/delete.php`;
    
  //   const formData = new FormData();
  //   formData.append('commentId', commentId);
  //   // formData.append('timeStamp', timestamp);
  //   console.log('delete ' + commentId);
  //   fetch(url, { method: 'POST', body: formData })
  //   .then(function (response) {
  //     return response.text();
  //   })
  //   .then(function (body) {
  //     console.log(body);
  //   });
  // },
}