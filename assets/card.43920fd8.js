import{i as t,j as e}from"./index.862bd438.js";import{b as l,c as d,s as a,a as n,t as i,d as s,e as r,h as g,x as y}from"./index.0b88d969.js";const f={class:"markdown-body"},o=a('<pre><code class="language-html">&lt;template&gt;\n  &lt;div&gt;\n    &lt;bar-card style=&quot;margin-bottom: 1rem&quot; title=&quot;卡片标题&quot;&gt;卡片内容&lt;/bar-card&gt;\n    &lt;bar-card-stack\n      class=&quot;stack&quot;\n      :data=&quot;data&quot;\n      :fly-distance=&quot;1000&quot;\n      :limit-distance=&quot;100&quot;\n      :base-card-style=&quot;{ width: 300, height: 100, top: 0, left: 0 }&quot;\n      dragDirection=&quot;horizontal&quot;\n    &gt;\n    &lt;/bar-card-stack&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\n  import { Card, CardStack } from &#39;bar-ui&#39;;\n\n  export default {\n    components: {\n      [Card.name]: Card,\n      [CardStack.name]: CardStack,\n    },\n  };\n&lt;/script&gt;\n</code></pre><h2>Card API</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">标题</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">title-class</td><td style="text-align:left;">标题自定义类名</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">footer-class</td><td style="text-align:left;">底部自定义类名</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h2>Card Events</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">函数签名</th></tr></thead><tbody><tr><td style="text-align:left;">touchstart</td><td style="text-align:left;">开始触摸</td><td style="text-align:left;">(event: TouchEvent) =&gt; void</td></tr><tr><td style="text-align:left;">touchmove</td><td style="text-align:left;">触摸移动</td><td style="text-align:left;">(event: TouchEvent) =&gt; void</td></tr><tr><td style="text-align:left;">touchcancel</td><td style="text-align:left;">取消触摸</td><td style="text-align:left;">(event: TouchEvent) =&gt; void</td></tr></tbody></table><h2>Card Slots</h2><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">标题</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">底部</td></tr></tbody></table><h2>CardStack 类型</h2><pre><code class="language-typescript">type CardDragDirection = &#39;all&#39; | &#39;horizontal&#39; | &#39;vertical&#39;;\ntype CardData = {\n  title?: string;\n  content: string;\n};\ntype CardStyle = {\n  width: number;\n  height: number;\n  top: number;\n  left: number;\n};\n</code></pre><h2>CardStack API</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;">卡片堆数据</td><td style="text-align:left;">CardData[]</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fly-distance</td><td style="text-align:left;">最大飞行距离</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">1000</td></tr><tr><td style="text-align:left;">limit-distance</td><td style="text-align:left;">最小触发飞出的距离</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">100</td></tr><tr><td style="text-align:left;">drag-direction</td><td style="text-align:left;">可以拖动的方向</td><td style="text-align:left;">CardDragDirection</td><td style="text-align:left;"></td><td style="text-align:left;">all</td></tr><tr><td style="text-align:left;">base-card-style</td><td style="text-align:left;">定位卡的样式</td><td style="text-align:left;">CardStyle</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h2>CardStack Events</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">函数签名</th></tr></thead><tbody><tr><td style="text-align:left;">dragStart</td><td style="text-align:left;">开始拖动</td><td style="text-align:left;">() =&gt; void</td></tr><tr><td style="text-align:left;">dragStop</td><td style="text-align:left;">停止拖动</td><td style="text-align:left;">(finishPosition: CardPosition) =&gt; void</td></tr><tr><td style="text-align:left;">dragMove</td><td style="text-align:left;">拖动</td><td style="text-align:left;">(movingPosision: CardPosition) =&gt; void</td></tr><tr><td style="text-align:left;">flyFail</td><td style="text-align:left;">飞出失败</td><td style="text-align:left;">() =&gt; void</td></tr><tr><td style="text-align:left;">flyStart</td><td style="text-align:left;">开始飞出</td><td style="text-align:left;">() =&gt; void</td></tr><tr><td style="text-align:left;">flyDone</td><td style="text-align:left;">飞出结束</td><td style="text-align:left;">() =&gt; void</td></tr></tbody></table>',13),x={expose:[],setup:t=>(t,e)=>(l(),d("div",f,[o]))};const h={components:{[t.name]:t,[e.name]:e,md:x},setup:()=>({data:[{title:"卡1",content:"卡片堆叠滑动效果只有手机端有用"},{title:"卡2",content:"内容2"},{title:"卡3",content:"内容3"},{title:"卡4",content:"内容4"},{title:"卡5",content:"内容5"},{title:"卡6",content:"内容6"},{title:"卡7",content:"内容7"}]})},c=s("h2",null,"Card 按钮组件",-1),b=y("卡片内容"),u=y("      "),m=y("\n    ");h.render=function(t,e,a,y,f,o){const x=n("bar-card"),h=n("bar-card-stack"),p=n("md"),v=i("highlightjs");return l(),d("div",null,[c,s(x,{style:{"margin-bottom":"1rem"},title:"卡片标题"},{default:r((()=>[b])),_:1}),s(h,{class:"stack",data:y.data,"fly-distance":1e3,"limit-distance":100,"base-card-style":{width:300,height:100,top:0,left:0},dragDirection:"horizontal"},null,8,["data"]),g(s("pre",null,[u,s(p),m],512),[[v]])])};export default h;
