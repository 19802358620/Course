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
let con = mysql.createConnection(options);
async function getPagerurl(num) {
    let url = 'https://cq.zx123.cn/xiaoqu/63-1-' + num;
    let res = await axios.get(url);
    let $ = cherrio.load(res.data);
    // $('#xiaoqu_listL .newsListItem .nl_c_pic a img').each((i, el) => {
    //     let src = $(el).attr('src');
    //     console.log('http://img.zx123.cn/' + src.slice(15))
    //     let arr = [src,'大渡口区','小区详情,户型图,实景图,样板图']
    //     insertsql(arr)
    // })
    $('#xiaoqu_listL .newsListItem .nl_c_main .c_main_title a').each((i, el) => {
        let name = $(el).text();
        console.log(name)
    })
    $('#xiaoqu_listL .newsListItem .nl_c_main .c_main_content .li').each((i, el) => {
        let title = $(el).text();
        console.log(title)
    })
}
getPagerurl('2.html')
function insertsql(arr) {
    let strSql = 'insert into community (src,area,label) values (?,?,?)'
     con.query(strSql, arr, (er,result) => {
        console.log(er);
        console.log(result);
    })
  }
