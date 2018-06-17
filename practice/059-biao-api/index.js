
const send = (url, method, data) => {
    let http = new XMLHttpRequest();
    http.open(method, url);
    http.send(JSON.stringify(data));

    http.addEventListener('load', () => {
        console.log('http.responseText:', http.responseText);
    });
}

const sign = (key, data) =>{
    return btoa(key + data);
}

let param = {
    app_key: "772b7054f949843bce6a6436736ca98f2bd53a0290edf1a169ad23189d55c5af",
    timestamp: (new Date).getTime(), 
    name: "test", 
    // structure: [ 
    //     {
    //         name: "title", 
    //         type: "string", 
    //         nullable: true, 
    //     },
    //     {
    //         name: "content",  
    //         type: "text", 
    //         nullable: false, 
    //     }
    // ]
}

param.signature = sign(param.app_key, param.timestamp);

axios.post('http://mock.biaoyansu.com/api/MODEL/READ', param)

/**
 * {
  app_key   : "your app_key", // 全局参数，应用id
  timestamp : 1528783020, // 全局参数，时间戳，可通过(new Date()).getTime()得到
  signature : "xxx", // 全局参数，签名，请参考生成签名

  name      : "article", // 模型名称
  structure : [ // 模型结构
    {
      name     : "title", // 属性名称：标题
      type     : "string", // 属性数据类型：字符串（最大长度255）
      nullable : false, // 可否为空：不可为空
    },
    {
      name     : "content",  // 属性名称：内容
      type     : "text", // 属性数据类型：文本 （最大长度65535）
      nullable : false, // 可否为空：不可为空
    },
    {
      name     : "created_at", // 属性名称：创建时间
      type     : "dateTime", // 属性数据类型：日期 （2020-10-01 12:30:10）
      nullable : true,
    },
  ],
}
 */
