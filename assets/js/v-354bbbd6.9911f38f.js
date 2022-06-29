"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48474],{7534:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-354bbbd6",path:"/devices/FUT089Z.html",title:"MiBoxer FUT089Z control via MQTT",lang:"en-US",frontmatter:{title:"MiBoxer FUT089Z control via MQTT",description:"Integrate your MiBoxer FUT089Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-04-30T08:00:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Working principle",slug:"working-principle",children:[]},{level:3,title:"Quirks",slug:"quirks",children:[]},{level:3,title:"Touchlink",slug:"touchlink",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/FUT089Z.md",git:{updatedTime:1656516516e3}}},55033:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="miboxer-fut089z" tabindex="-1"><a class="header-anchor" href="#miboxer-fut089z" aria-hidden="true">#</a> MiBoxer FUT089Z</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>FUT089Z</td></tr><tr><td>Vendor</td><td>MiBoxer</td></tr><tr><td>Description</td><td>RGB+CCT Remote</td></tr><tr><td>Exposes</td><td>battery, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/FUT089Z.jpg" alt="MiBoxer FUT089Z"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the device, press the ON and OFF buttons simultaneously until the central red LED flashes quickly.</p><h3 id="working-principle" tabindex="-1"><a class="header-anchor" href="#working-principle" aria-hidden="true">#</a> Working principle</h3><p>The remote has 7 zone switches plus an eighth zone being controlled by the ON and OFF buttons. Each zone sends commands to a ZigBee group which is currently hardcoded. Zone 1 is mapped to ZigBee group 101, Zone 2 to 102 and so forth. This means that currently each remote controls the same ZigBee groups. To control a light, first create a ZigBee group with the correct ID (10X), then add the device you intend to control to that group. Do NOT add the remote itself.</p><p>There is no support for sending events instead of commands.</p><h3 id="quirks" tabindex="-1"><a class="header-anchor" href="#quirks" aria-hidden="true">#</a> Quirks</h3><p>The remote does not seem to respond to any ZigBee commands sent after initial configuration without taking out the battery and putting it back in. To send any command to it (like a Leave or configure command), take out the battery, send the command and quickly put it back in.</p><p>It does also not support binding its light output clusters or manually joining it to a group.</p><h3 id="touchlink" tabindex="-1"><a class="header-anchor" href="#touchlink" aria-hidden="true">#</a> Touchlink</h3><p>The remote supports Touchlink. It is unclear how the Touchlink configuration interacts with the regular group configuration so if you intend to use Touchlink it would probably best not to pair it to a network.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),r={},o=(0,i(83744).Z)(r,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);