import{b as t,c as e,d as a,z as n,s as l,r,a as b,t as i,e as d,h as s,x as m}from"./index.5d212e24.js";import{o,b as f}from"./index.0d48cbf7.js";const g={class:"markdown-body"},h={class:"language-html"},y=l('<h2>API</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">当前活动的 item 的 value</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fixed</td><td style="text-align:left;">是否固定在底部</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">true</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">函数签名</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">item 活动项改变</td><td style="text-align:left;">(name: string) =&gt; void</td></tr></tbody></table><blockquote><p>Item 组件详见 Item 组件文档</p></blockquote>',5),c={expose:[],setup:l=>(l,r)=>(t(),e("div",g,[a("pre",null,[a("code",h,'<template>\n  <div>\n    <div style="margin-bottom: 1rem">'+n(l.tabbarActive)+'</div>\n    <bar-tabbar v-model="tabbarActive" :fixed="false">\n      <bar-item type="tabbar" name="home" icon="home">首页</bar-item>\n      <bar-item type="tabbar" name="user" icon="user" dot>用户</bar-item>\n      <bar-item type="tabbar" name="menu" icon="bars" :badge="5">\n        菜单\n      </bar-item>\n      <bar-item type="tabbar" name="setting" icon="setting" :badge="15">\n        设置\n      </bar-item>\n    </bar-tabbar>\n  </div>\n</template>\n\n<script>\n  import { ref } from \'vue\';\n  import { Item, Tabbar } from \'bar-ui\';\n\n  export default {\n    components: {\n      [Tabbar.name]: Tabbar,\n      [Item.name]: Item,\n    },\n    setup() {\n      const tabbarActive = ref(\'home\');\n      return { tabbarActive };\n    },\n  };\n<\/script>\n',1)]),y]))};const u={components:{[o.name]:o,[f.name]:f,md:c},setup:()=>({tabbarActive:r("home")})},x=a("h2",null,"Tabbar 底部标签栏组件",-1),p={style:{"margin-bottom":"1rem"}},v=m("首页"),A=m("用户"),I=m(" 菜单 "),_=m(" 设置 "),T=m("      "),j=m("\n    ");u.render=function(l,r,m,o,f,g){const h=b("bar-item"),y=b("bar-tabbar"),c=b("md"),u=i("highlightjs");return t(),e("div",null,[x,a("div",p,n(o.tabbarActive),1),a(y,{modelValue:o.tabbarActive,"onUpdate:modelValue":r[1]||(r[1]=t=>o.tabbarActive=t),fixed:!1},{default:d((()=>[a(h,{type:"tabbar",name:"home",icon:"home"},{default:d((()=>[v])),_:1}),a(h,{type:"tabbar",name:"user",icon:"user",dot:""},{default:d((()=>[A])),_:1}),a(h,{type:"tabbar",name:"menu",icon:"bars",badge:5},{default:d((()=>[I])),_:1}),a(h,{type:"tabbar",name:"setting",icon:"setting",badge:15},{default:d((()=>[_])),_:1})])),_:1},8,["modelValue"]),s(a("pre",null,[T,a(c),j],512),[[u]])])};export default u;
