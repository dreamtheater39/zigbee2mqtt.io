"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[46275],{6785:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-a4ac306a",path:"/devices/511.541.html",title:"Iluminize 511.541 control via MQTT",lang:"en-US",frontmatter:{title:"Iluminize 511.541 control via MQTT",description:"Integrate your Iluminize 511.541 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-01T18:11:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/511.541.md",git:{updatedTime:1656516516e3}}},22282:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(66252);const a=(0,n.uE)('<h1 id="iluminize-511-541" tabindex="-1"><a class="header-anchor" href="#iluminize-511-541" aria-hidden="true">#</a> Iluminize 511.541</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>511.541</td></tr><tr><td>Vendor</td><td>Iluminize</td></tr><tr><td>Description</td><td>Zigbee 3.0 wall dimmer RGBW 1 zone</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/511.541.jpg" alt="Iluminize 511.541"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),s=(0,n.Uk)("How to use device type specific configuration"),o=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>recall_*</code>, <code>on</code>, <code>off</code>, <code>color_move</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>brightness_step_down</code>, <code>brightness_step_up</code>, <code>brightness_move_down</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},l=(0,i(83744).Z)(d,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[s])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,n]of t)e[i]=n;return e}}}]);