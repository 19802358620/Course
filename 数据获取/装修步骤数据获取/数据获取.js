let axios = require('axios');
let cheerio = require('cheerio');

let httpUrl = 'https://www.zx123.cn/xuezhuangxiu/shoufang/'

function f(str){
    let res = axios.get('str');
    let $ = cheerio.load(res.data);
    console.log(res);
}
console.log(f(httpUrl));