"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49138],{20319:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-697444d4",path:"/devices/8719514342361.html",title:"Philips 8719514342361 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 8719514342361 control via MQTT",description:"Integrate your Philips 8719514342361 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-06-01T15:08:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Power-on behavior",slug:"power-on-behavior",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/8719514342361.md",git:{updatedTime:1656516516e3}}},54064:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});var a=o(66252);const r=(0,a.uE)('<h1 id="philips-8719514342361" tabindex="-1"><a class="header-anchor" href="#philips-8719514342361" aria-hidden="true">#</a> Philips 8719514342361</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>8719514342361</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue smart plug - AU</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/8719514342361.jpg" alt="Philips 8719514342361"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory resetting a Hue bulb can be accomplished in 5 ways. After resetting the bulb will automatically connect.</p><h4 id="touchlink-factory-reset" tabindex="-1"><a class="header-anchor" href="#touchlink-factory-reset" aria-hidden="true">#</a> Touchlink factory reset</h4>',6),n=(0,a.Uk)("See "),s=(0,a.Uk)("Touchlink"),i=(0,a._)("h4",{id:"hue-bridge",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-bridge","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue bridge")],-1),l=(0,a._)("p",null,"When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.",-1),d=(0,a._)("h4",{id:"hue-dimmer-switch",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-dimmer-switch","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue dimmer switch")],-1),h=(0,a.Uk)("With "),u=(0,a.Uk)("one"),c=(0,a.Uk)(" of the "),p=(0,a.Uk)("two"),b=(0,a.Uk)(" Hue Dimmer switches it is possible to put the bulbs into a factory reset."),m=(0,a._)("ol",null,[(0,a._)("li",null,"Power-supply the bulb"),(0,a._)("li",null,"Bring the dimmer switch next to the bulb, as close as possible"),(0,a._)("li",null,"Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…"),(0,a._)("li",null,"The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second"),(0,a._)("li",null,"Switch the bulb off and on again: it can now be paired again.")],-1),g=(0,a.Uk)("See also the "),f={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("VIDEO: Factory reset a Hue bulb with Hue dimmer switch"),w=(0,a.Uk)("."),k=(0,a._)("h4",{id:"bluetooth-if-supported-by-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bluetooth-if-supported-by-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Bluetooth (if supported by device)")],-1),y=(0,a.Uk)("Install the Philips Hue Bluetooth app for "),v={href:"https://play.google.com/store/apps/details?id=com.signify.hue.blue",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("Android"),U=(0,a.Uk)(" or "),T={href:"https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("iOS"),E=(0,a.Uk)(". You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing mode for a couple of minutes after power-on)"),P=(0,a._)("h4",{id:"tradfri-remote-control",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tradfri-remote-control","aria-hidden":"true"},"#"),(0,a.Uk)(" TRADFRI remote control")],-1),O=(0,a.Uk)("This may also be possible with the "),H={href:"https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("Tradfri Remote Control"),A=(0,a.Uk)(" by pressing and holding the reset button on the bottom of the remote (next to the battery). "),F={href:"https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("This may not always work, even if the Hue bulb starts flashing"),D=(0,a.Uk)("."),L=(0,a._)("h3",{id:"power-on-behavior",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#power-on-behavior","aria-hidden":"true"},"#"),(0,a.Uk)(" Power-on behavior")],-1),I=(0,a.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),R={href:"https://www.zigbee2mqtt.io/../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttfriendly_nameset",target:"_blank",rel:"noopener noreferrer"},S=(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),M=(0,a.Uk)(" with the following payload."),z=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string-property property">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string-property property">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string-property property">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',6),Y=(0,a.Uk)("This device supports OTA updates, for more information see "),Z=(0,a.Uk)("OTA updates"),j=(0,a.Uk)("."),C=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),Q={},V=(0,o(83744).Z)(Q,[["render",function(e,t){const o=(0,a.up)("RouterLink"),Q=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[n,(0,a.Wm)(o,{to:"/guide/usage/touchlink.html"},{default:(0,a.w5)((()=>[s])),_:1})]),i,l,d,(0,a._)("p",null,[h,(0,a.Wm)(o,{to:"/devices/324131092621.html"},{default:(0,a.w5)((()=>[u])),_:1}),c,(0,a.Wm)(o,{to:"/devices/929002398602.html"},{default:(0,a.w5)((()=>[p])),_:1}),b]),m,(0,a._)("p",null,[g,(0,a._)("a",f,[_,(0,a.Wm)(Q)]),w]),k,(0,a._)("p",null,[y,(0,a._)("a",v,[q,(0,a.Wm)(Q)]),U,(0,a._)("a",T,[x,(0,a.Wm)(Q)]),E]),P,(0,a._)("p",null,[O,(0,a._)("a",H,[N,(0,a.Wm)(Q)]),A,(0,a._)("a",F,[W,(0,a.Wm)(Q)]),D]),L,(0,a._)("p",null,[I,(0,a._)("a",R,[S,(0,a.Wm)(Q)]),M]),z,(0,a._)("p",null,[Y,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[Z])),_:1}),j]),C],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);