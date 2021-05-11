const axios = require('axios');
const mysql = require('mysql');
const cherrio = require('cheerio');
const options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database:'foreman'
}
//中式风格
let zhurl = 'https://www.zx123.cn/xiaoguotu/zsfg/'
// let con = mysql.createConnection(options);
// //建立连接
// con.connect((er) => {
//     //如果建立连接失败，就会有这个错误对象
//     if (er) {
//         console.log(er);
//     } else {
//         console.log('连接成功');
//     }
// })
async function getPagerurl(num) {
    let url = 'http://xiaoguotu.haogongzhang.com/5' + num;
    let res = await axios.get(url);
    let $ = cherrio.load(res.data);
    $('#azw_waterFall .picList .img').each((i, el) => {
        let href = $(el).attr('href');
         getzhimg(href)
    })
     $('#azw_waterFall .picList .img img').each((i, el) => {
        let src = $(el).attr('src');
         console.log(src)
    })

    $('#azw_waterFall .picList .picDescription a').each((i, el) => {
        let title = $(el).text();
        console.log(title)
    })
}
 getPagerurl('_1.html')
async function getzhimg(url) {
    let res = await axios(url);
    let $ = cherrio.load(res.data);
    //图片
    $('#imgList #marqueeW #marquee .tar .tar_con img').each((i, el) => {
        let src = $(el).attr('src')
        console.log(src.slice(0, -10) + '!xgt.big')
    })
}
