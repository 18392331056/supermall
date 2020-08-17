import axios from 'axios';

//promise的更简便的方法
export function request(config){
  //1、创建axios实例
  const instance = new axios.create({
    
  })
  //2、axios的拦截器

  //2-1 请求拦截axios.interceptors.request.use()
  instance.interceptors.request.use(config => {
    // console.log(config);
    //请求拦截成功之后一般会做的事情
    //1、比如config中的一些信息不符合服务器的要求
    //2、比如每次发送请求之后，需要显示一个正在请求的小图标
    //3、某些网络请求（比如登录(token)，必须携带一些特殊的信息
    return config
  },err => {
    console.log(err);
  })

  //2-2 响应拦截axios.interceptors.request.use()
  instance.interceptors.response.use(res => {
    // console.log('response'+res);
    return res.data
  },err => {
    console.log("response"+err);
  }) 


  //3、发送真正的request网络请求
  return instance(config)
}
