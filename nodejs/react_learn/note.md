

### MV*  http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
### 前端框架
```
MVC   Angular.js  Google
MVVM  Vue.js     一个中国人
MVVM  React.js   Facebook
```


```
淘宝镜像
设置方法为：npm config set registry https://registry.npm.taobao.org

npm install  -g  create-react-app

npm install  -g  yarn (和npm功能类似)
```


### react 全家桶(react相关技术)
```
react  react-redux redux  react-router

```


### redux
### 文档  https://redux.js.org/docs/basics/UsageWithReact.html
```
redux: 状态管理的库，可以应用于很多框架，不一定非在react中使用

假设store格式如下：
{
  value: 10,
  todos: [{xxxx}, {yyyyy}]
}


//reducer
function value(state=0, action){
  if (action.type === 'xxxx'){
    return  action.value;
  } else if (action.type === 'yyyy'){
    return  action.value;
  }else {
    return state;
  }

}

//reducer
function todos(state=[], action){
  ...
}


//action
{
  type: 'xxxx',
  value: 10000
}


//dispatch 修改state的始作俑者
dispatch({
  type: 'xxxx',
  value: 10000
  });


store: redux创建一个全局的状态库, 使用 createStore(合并的reducers), 使用已有的reducers去产生store
reducer: 实际用于修改store状态的函数
action:  决定修改store中那个state，以及将该state设置为什么值
dispatch:  dispatch专门用于分发不同额action，  dispatch(action)

```


### react-redux  
```
react-redux: 基于redux，可以很方便的在react中应用而已
```


### 明天任务
```
 阅读 react-redux官方的案例，去理解 react-redux中相关概念

```
