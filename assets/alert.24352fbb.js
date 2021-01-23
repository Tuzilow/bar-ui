import{h as t,B as e}from"./index.0d48cbf7.js";import{b as l,c as a,s as n,r,a as o,t as s,d,e as u,h as g,x as i}from"./index.5d212e24.js";const f={class:"markdown-body"},c=n('<pre><code class="language-html">&lt;template&gt;\n  &lt;div&gt;\n    &lt;bar-button @click=&quot;alertShow = !alertShow&quot;&gt;切换状态&lt;/bar-button&gt;\n    &lt;bar-alert v-model=&quot;alertShow&quot; :closable=&quot;false&quot;&gt;info提示&lt;/bar-alert&gt;\n    &lt;bar-alert type=&quot;success&quot;&gt;success提示&lt;/bar-alert&gt;\n    &lt;bar-alert type=&quot;warn&quot;&gt;warn提示&lt;/bar-alert&gt;\n    &lt;bar-alert type=&quot;danger&quot;&gt;danger提示&lt;/bar-alert&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\n  import { ref } from &#39;vue&#39;;\n  import { Alert, Button } from &#39;bar-ui&#39;;\n\n  export default {\n    components: {\n      [Alert.name]: Alert,\n      [Button.name]: Button,\n    },\n    setup() {\n      const alertShow = ref(true);\n      return { alertShow };\n    },\n  };\n&lt;/script&gt;\n</code></pre><h2>API</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">当前是否显示</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">类型</td><td style="text-align:left;">boolean</td><td style="text-align:left;">‘success’ | ‘info’ | ‘danger’ | ‘warn’</td><td style="text-align:left;">info</td></tr><tr><td style="text-align:left;">closable</td><td style="text-align:left;">是否可以关闭</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">true</td></tr></tbody></table>',3),h={expose:[],setup:t=>(t,e)=>(l(),a("div",f,[c]))};const y={components:{[t.name]:t,[e.name]:e,md:h},setup:()=>({alertShow:r(!0)})},b={class:"alert-container"},p=d("h2",null,"Alert 按钮组件",-1),x=i("切换状态"),m=i("info提示"),w=i("success提示"),q=i("warn提示"),S=i("danger提示"),v=i("      "),A=i("\n    ");y.render=function(t,e,n,r,i,f){const c=o("bar-button"),h=o("bar-alert"),y=o("md"),_=s("highlightjs");return l(),a("div",b,[p,d(c,{onClick:e[1]||(e[1]=t=>r.alertShow=!r.alertShow)},{default:u((()=>[x])),_:1}),d(h,{modelValue:r.alertShow,"onUpdate:modelValue":e[2]||(e[2]=t=>r.alertShow=t),closable:!1},{default:u((()=>[m])),_:1},8,["modelValue"]),d(h,{type:"success"},{default:u((()=>[w])),_:1}),d(h,{type:"warn"},{default:u((()=>[q])),_:1}),d(h,{type:"danger"},{default:u((()=>[S])),_:1}),g(d("pre",null,[v,d(y),A],512),[[_]])])};export default y;
