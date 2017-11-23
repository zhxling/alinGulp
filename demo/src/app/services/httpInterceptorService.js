import config from '../../config'

const { baseUrl } = config.api;

/* eslint-disable */
class httpInterceptorService {
  contructor($q) {
    Object.assign(this, {$q});
  }

  request(config) {
    if(!config.cached) {
      config.url = baseUrl + config.url;
    }
    config.headers = config.headers || {};
    // if (this.lacalDB.get('userInfo')) {
    //   config.headers['authToken'] = this.lacalDB.get('userInfo').authToken;
    // }
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // config.headers['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf-token"]').content || 'demo';
    return config;
  }

  // response(response) {
  //     return response; // 或者 $q.when(config);
  // }

  requestError(rejection) {
      // 请求发生了错误,如果能从错误中恢复,可以返回一个新的请求或promise
      return rejection; // 或新的promise
      // 或者,可以通过返回一个rejection来阻止下一步
      // return $q.reject(rejection);
  }
  
  responseError(responseError) {
      // 请求发生了错误,如果能从错误中恢复,可以返回一个新的响应或promise
      // return responseError; // 或新的promise
      // 或者,可以通过返回一个rejection来阻止下一步
      return responseError;
  }
}

httpInterceptorService.$inject = ['$q'];

export default httpInterceptorService;
