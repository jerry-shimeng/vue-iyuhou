export default {
  get: function (context, url, id) {
    return new Promise((resolve, reject) => {
      context.$http.get(url, {params: {id: id}}).then((res) => {
        if (res.status === 200) {
          if (res.data) {
            resolve(res.data);
          } else {
            reject(res.error);
          }
        }
      });
    });
  },
  url: {
    domain: 'http://iyuhou.com/rest/v1',
    detail: '/detail',
    hot: '/hot',
    comment: '/comment',
    downLoad: '/down',
    list: '/list'
  }
};


