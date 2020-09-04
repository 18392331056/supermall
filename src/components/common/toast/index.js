import Toast from './Toast'
const obj = {
  
};
obj.install = function(Vue){

  /**
   *document.body.appendChild(Toast.$el)
    Vue.prototype.$toast = Toast;
   */
  //1、创建组件构造器
  const toastConstrustor = Vue.extend(Toast);
  //2、使用new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastConstrustor();
  //3、将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'));
  //4、此时，toast.$el对应的就是所创建的元素
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}
export default obj;