import{r as e,o as a,w as l,u as n,a as i,b as o,c as t,d as s,e as c}from"./index.0b88d969.js";import{S as r,H as b}from"./index.862bd438.js";const u={components:{[r.name]:r,[b.name]:b},setup(){const i=n(),o=e("quickstart");a((()=>{const e=i.currentRoute.value.path.replace("/","");o.value=e})),l(i.currentRoute,(e=>{const a=e.path.replace("/","");o.value=a}));return{sidebar:[{label:"快速开始",name:"quickstart",onClick(){i.push("/")}},{label:"移动端演示",name:"example",onClick(){i.push("example")}},{label:"基础组件",name:"basecomponent",subItems:[{label:"avatar 头像",name:"avatar",onClick(){i.push("avatar")}},{label:"button 按钮",name:"button",onClick(){i.push("button")}},{label:"icon 图标",name:"icon",onClick(){i.push("icon")}},{label:"item 单元项",name:"item",onClick(){i.push("item")}},{label:"divider 分割线",name:"divider",onClick(){i.push("divider")}},{label:"message 轻提示",name:"message",onClick(){i.push("message")}}]},{label:"表单组件",name:"formcomponent",subItems:[{label:"input 输入框",name:"input",onClick(){i.push("input")}},{label:"radio 单选",name:"radio",onClick(){i.push("radio")}},{label:"checkbox 多选",name:"checkbox",onClick(){i.push("checkbox")}},{label:"select 选择器",name:"select",onClick(){i.push("select")}},{label:"switch 开关",name:"switch",onClick(){i.push("switch")}},{label:"textarea 多行输入框",name:"textarea",onClick(){i.push("textarea")}}]},{label:"展示组件",name:"showomponent",subItems:[{label:"alert 警告提示",name:"alert",onClick(){i.push("alert")}},{label:"card 卡片",name:"card",onClick(){i.push("card")}},{label:"collapse 折叠面板",name:"collapse",onClick(){i.push("collapse")}},{label:"dialog 弹出框",name:"dialog",onClick(){i.push("dialog")}},{label:"dropdown 下拉菜单",name:"dropdown",onClick(){i.push("dropdown")}},{label:"header 页头",name:"header",onClick(){i.push("header")}},{label:"infinite-scroll 无限列表",name:"infinite",onClick(){i.push("infinite")}},{label:"loading 加载",name:"loading",onClick(){i.push("loading")}},{label:"modal 模态框",name:"modal",onClick(){i.push("modal")}},{label:"section 分区",name:"section",onClick(){i.push("section")}},{label:"sidebar 侧边栏",name:"sidebar",onClick(){i.push("sidebar")}},{label:"tabbar 底部栏",name:"tabbar",onClick(){i.push("tabbar")}},{label:"tabs 标签页",name:"tabs",onClick(){i.push("tabs")}}]}],toGithub:()=>{location.href="https://github.com/Tuzilow/bar-ui"},activeSide:o}}},m={class:"home-container"},d={class:"container"},p={class:"content"};u.render=function(e,a,l,n,r,b){const u=i("bar-header"),h=i("bar-sidebar"),k=i("router-view");return o(),t("div",m,[s(u,{"left-text":"BAR UI",fixed:""},{right:c((()=>[s("div",{style:{"font-weight":"bold","margin-right":"1rem"},onClick:a[1]||(a[1]=(...e)=>n.toGithub&&n.toGithub(...e))}," Github ")])),_:1}),s("div",d,[s(h,{modelValue:n.activeSide,"onUpdate:modelValue":a[2]||(a[2]=e=>n.activeSide=e),class:"sidebar",value:n.sidebar,footer:"copyright © Tuzilow"},null,8,["modelValue","value"]),s("main",p,[s(k)])])])};export default u;
