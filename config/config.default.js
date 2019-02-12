exports.keys = 'storage'; // 用来加密cookie

exports.view = {
  defaultViewEngine: 'ejs', // 默认模板引擎
  mapping: { // 映射，设置针对什么类型的文件，用什么模板引擎来渲染
    '.ejs': 'ejs'
  }
};

exports.news = {
  url: 'http://news.baidu.com'
};