import Vue from 'vue'
import Axios from 'axios'

Vue.use(Axios)

Vue.$axios = Vue.prototype.$axios = Axios

export const doAjax
    = (options) => {
    //js的||是短路逻辑，后面表示默认选项
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';

    if (options.type == 'GET') {
        return new Promise((resolve, reject) => {
            Vue.$axios.get('../static/mock_data/layer.json').then((response) => {
                console.log('===doajax===data===')
                console.log(response.data)
                resolve(response.data)
            },(response) => {
                reject(response.statusText)
            })
        })
    }
}
