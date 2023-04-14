export class Api {
    constructor({baseUrl, headers}) {
      this._headers = headers;
      this._baseUrl =baseUrl;
    }

    /** проверить ответ */
    _checkResponse(res){
      if(res.ok || res.success){
        return res.json().then(res=> res.data)
      }else{
        return Promise.reject(res)
      }
    }

    /** получить все данные */
    getAllData(){
      return fetch(this._baseUrl, {
        headers: this._headers
      })
      .then(this._checkResponse)
    }
  }

  const api = new Api({
    baseUrl: 'https://api.disneyapi.dev/character',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default api;
