import{c as t}from"./index.0d48cbf7.js";import{b as e,c as l,s as d,r as n,a,t as i,d as s,e as f,h as g,x as r}from"./index.5d212e24.js";const x={class:"markdown-body"},y=d('<pre><code class="language-html">&lt;template&gt;\n  &lt;div&gt;\n    &lt;bar-input\n      v-model=&quot;input&quot;\n      placeholder=&quot;请输入文本，可以加icon&quot;\n      prefix-icon=&quot;success&quot;\n      suffix-icon=&quot;error&quot;\n    /&gt;\n    &lt;bar-input placeholder=&quot;只能输入数字&quot; type=&quot;number&quot;&gt;\n      &lt;template #prefix&gt;你好&lt;/template&gt;\n    &lt;/bar-input&gt;\n    &lt;bar-input placeholder=&quot;请输入密码&quot; type=&quot;password&quot;&gt;\n      &lt;template #suffix&gt;不准偷看&lt;/template&gt;\n    &lt;/bar-input&gt;\n    &lt;bar-input placeholder=&quot;有错误&quot; has-fail /&gt;\n    &lt;bar-input placeholder=&quot;不可用&quot; disabled /&gt;\n    &lt;bar-input placeholder=&quot;只读&quot; readonly /&gt;\n    &lt;bar-input placeholder=&quot;行内输入框&quot; inline /&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\n  import { ref } from &#39;vue&#39;;\n  import { Input } from &#39;bar-ui&#39;;\n\n  export default {\n    components: {\n      [Input.name]: Input,\n    },\n    setup() {\n      const input = ref(&#39;&#39;);\n      return { input };\n    },\n  };\n&lt;/script&gt;\n</code></pre><h2>API</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">输入框的内容</td><td style="text-align:left;">string | number</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">占位符</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">输入框的 name</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">输入框类型</td><td style="text-align:left;">string</td><td style="text-align:left;">原生 input 的类型</td><td style="text-align:left;">text</td></tr><tr><td style="text-align:left;">inline</td><td style="text-align:left;">行内输入框</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">has-fail</td><td style="text-align:left;">有错误</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">禁用</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">readonly</td><td style="text-align:left;">只读</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">autofocus</td><td style="text-align:left;">自动获取焦点</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">maxlength</td><td style="text-align:left;">最大长度</td><td style="text-align:left;">string | number</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">prefix-icon</td><td style="text-align:left;">前缀 icon</td><td style="text-align:left;">string</td><td style="text-align:left;">iconName</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">suffix-icon</td><td style="text-align:left;">后缀 icon</td><td style="text-align:left;">string</td><td style="text-align:left;">iconName</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">prefix-class</td><td style="text-align:left;">前缀 icon 的自定义类名</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">suffix-class</td><td style="text-align:left;">后缀 icon 的自定义类名</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h2>Events</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">函数签名</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: FocusEvent) =&gt; void</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: FocusEvent) =&gt; void</td></tr><tr><td style="text-align:left;">press-enter</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: KeyboardEvent) =&gt; void</td></tr><tr><td style="text-align:left;">keypress</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: KeyboardEvent) =&gt; void</td></tr><tr><td style="text-align:left;">keydown</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: KeyboardEvent) =&gt; void</td></tr><tr><td style="text-align:left;">keyup</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: KeyboardEvent) =&gt; void</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: Event) =&gt; void</td></tr><tr><td style="text-align:left;">input</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: Event) =&gt; void</td></tr><tr><td style="text-align:left;">suffix-click</td><td style="text-align:left;">按钮点击事件</td><td style="text-align:left;">(event: MouseEvent) =&gt; void</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">自定义前缀</td></tr><tr><td style="text-align:left;">prefixIcon</td><td style="text-align:left;">自定义前缀 icon</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">自定义后缀</td></tr><tr><td style="text-align:left;">suffixIcon</td><td style="text-align:left;">自定义后缀 icon</td></tr></tbody></table>',7),o={expose:[],setup:t=>(t,d)=>(e(),l("div",x,[y]))};const u={components:{[t.name]:t,md:o},setup:()=>({input:n("")})},p=s("h2",null,"Input 组件",-1),c=r("你好"),h=r("不准偷看"),b=r("      "),m=r("\n    ");u.render=function(t,d,n,r,x,y){const o=a("bar-input"),u=a("md"),v=i("highlightjs");return e(),l("div",null,[p,s(o,{modelValue:r.input,"onUpdate:modelValue":d[1]||(d[1]=t=>r.input=t),placeholder:"请输入文本，可以加icon","prefix-icon":"success","suffix-icon":"error"},null,8,["modelValue"]),s(o,{placeholder:"只能输入数字",type:"number"},{prefix:f((()=>[c])),_:1}),s(o,{placeholder:"请输入密码",type:"password"},{suffix:f((()=>[h])),_:1}),s(o,{placeholder:"有错误","has-fail":""}),s(o,{placeholder:"不可用",disabled:""}),s(o,{placeholder:"只读",readonly:""}),s(o,{placeholder:"行内输入框",inline:""}),g(s("pre",null,[b,s(u),m],512),[[v]])])};export default u;
