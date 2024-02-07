import{_ as p,r as e,o as u,c,a as s,d as a,w as t,b as o,e as r}from"./app-2RG98JVF.js";const l="/node-red-contrib-home-assistant-websocket/assets/jsonata_5_1-5kLWe5lj.png",k={},i=r('<h1 id="sensor" tabindex="-1"><a class="header-anchor" href="#sensor" aria-hidden="true">#</a> Sensor</h1><p>Using the WebSocket nodes provides many ways to read events and entity states <em>from</em> Home Assistant into Node-RED. Sending data the other way requires the use of the <strong>Entity</strong> nodes.</p><p>There are several, but they all work in much the same way, and this example will use the <strong>Sensor</strong> node to create an entity sensor in Home Asisstant, and then to update the sensor state value as well as add an attribute value.</p><p><img src="'+l+`" alt="screenshot"></p><p>Here is an example, showing how to use JSONata to set <strong>state value</strong>, and <strong>attribute value</strong> settings for an entity-sensor node.</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;c14460fdc14a24a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;group&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;1cc7d2e94a4815fe&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Sensor node - set state and attribute values&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;style&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;label&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;#000000&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">&quot;nodes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;ba71e67aa0d06f02&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4c7a952705afe4a0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;e06208fe5410cfb5&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;23dfef724e706db3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a6d8e76c9ca8af97&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fbbda709b5a50be7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">214</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">219</span><span class="token punctuation">,</span><span class="token property">&quot;w&quot;</span><span class="token operator">:</span><span class="token number">912</span><span class="token punctuation">,</span><span class="token property">&quot;h&quot;</span><span class="token operator">:</span><span class="token number">222</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;ba71e67aa0d06f02&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;inject&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;1cc7d2e94a4815fe&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;g&quot;</span><span class="token operator">:</span><span class="token string">&quot;c14460fdc14a24a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Manual Trigger&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;props&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;repeat&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;crontab&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;once&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;onceDelay&quot;</span><span class="token operator">:</span><span class="token number">0.1</span><span class="token punctuation">,</span><span class="token property">&quot;topic&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">340</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">260</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;4c7a952705afe4a0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;4c7a952705afe4a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;ha-sensor&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;1cc7d2e94a4815fe&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;g&quot;</span><span class="token operator">:</span><span class="token string">&quot;c14460fdc14a24a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;How many lights are on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityConfig&quot;</span><span class="token operator">:</span><span class="token string">&quot;02814df043c7111b&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;state&quot;</span><span class="token operator">:</span><span class="token string">&quot;$entities().*[state = \\&quot;on\\&quot; and entity_id ~&gt; /^light|^switch/] ~&gt; $count()&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;stateType&quot;</span><span class="token operator">:</span><span class="token string">&quot;jsonata&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;lights_table&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$entities().*[state = \\&quot;on\\&quot; and entity_id ~&gt; /^light|^switch/].{\\&quot;name\\&quot;: attributes.friendly_name, \\&quot;lastChange\\&quot;: last_changed}&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;jsonata&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;inputOverride&quot;</span><span class="token operator">:</span><span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputProperties&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">610</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">260</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;server&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;e06208fe5410cfb5&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;server-state-changed&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;1cc7d2e94a4815fe&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;g&quot;</span><span class="token operator">:</span><span class="token string">&quot;c14460fdc14a24a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;server&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;exposeAsEntityConfig&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;sensor.lights_on_count&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityIdType&quot;</span><span class="token operator">:</span><span class="token string">&quot;exact&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputInitially&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;stateType&quot;</span><span class="token operator">:</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ifState&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ifStateType&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ifStateOperator&quot;</span><span class="token operator">:</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputOnlyOnStateChange&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;for&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;forType&quot;</span><span class="token operator">:</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;forUnits&quot;</span><span class="token operator">:</span><span class="token string">&quot;minutes&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ignorePrevStateNull&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;ignorePrevStateUnknown&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;ignorePrevStateUnavailable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;ignoreCurrentStateUnknown&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;ignoreCurrentStateUnavailable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;outputProperties&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;entityState&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;table&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$entity().attributes.lights_table&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;jsonata&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;eventData&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;topic&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;triggerId&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;changes&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;(\\t    $old:=$prevEntity().attributes.lights_table;\\t    $new:=$entity().attributes.lights_table;\\t    {\\&quot;on\\&quot;: $new[$not(name in $old.name)],\\t    \\&quot;off\\&quot;: $old[$not(name in $new.name)]}\\t)&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;valueType&quot;</span><span class="token operator">:</span><span class="token string">&quot;jsonata&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">630</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">340</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;23dfef724e706db3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a6d8e76c9ca8af97&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fbbda709b5a50be7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;23dfef724e706db3&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;1cc7d2e94a4815fe&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;g&quot;</span><span class="token operator">:</span><span class="token string">&quot;c14460fdc14a24a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Count of lights on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;active&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;tosidebar&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;console&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;tostatus&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;complete&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;targetType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusVal&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusType&quot;</span><span class="token operator">:</span><span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">990</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">280</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;a6d8e76c9ca8af97&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;1cc7d2e94a4815fe&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;g&quot;</span><span class="token operator">:</span><span class="token string">&quot;c14460fdc14a24a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Array table&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;active&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;tosidebar&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;console&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;tostatus&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;complete&quot;</span><span class="token operator">:</span><span class="token string">&quot;table&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;targetType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusVal&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusType&quot;</span><span class="token operator">:</span><span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">970</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">340</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;fbbda709b5a50be7&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;1cc7d2e94a4815fe&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;g&quot;</span><span class="token operator">:</span><span class="token string">&quot;c14460fdc14a24a0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Changes&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;active&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;tosidebar&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;console&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;tostatus&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;complete&quot;</span><span class="token operator">:</span><span class="token string">&quot;changes&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;targetType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusVal&quot;</span><span class="token operator">:</span><span class="token string">&quot;changes&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusType&quot;</span><span class="token operator">:</span><span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">960</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;02814df043c7111b&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;ha-entity-config&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;server&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;deviceConfig&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;SC LS On Count&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityType&quot;</span><span class="token operator">:</span><span class="token string">&quot;sensor&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;haConfig&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;LS On Count&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;entity_picture&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;entity_category&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;device_class&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;unit_of_measurement&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;state_class&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;resend&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;debugEnabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="setting-the-sensor-state-value" tabindex="-1"><a class="header-anchor" href="#setting-the-sensor-state-value" aria-hidden="true">#</a> Setting the <em>sensor state</em> value</h3><p><strong>Example:</strong> Provide a sensor with the count of lights that are on.</p><p>Once a new entity has been registered with Home Assistant, the entity state value can be updated by passing a message with the new value. Commonly <em>msg.payload</em> is used, however it is possible to use a JSONata expression to generate the new state value.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$entities().*[state = &quot;on&quot; and entity_id ~&gt; /^light|^switch/] ~&gt; $count()
</code></pre></div><p>Here the <code>$entities()</code> function is used to return all entities, and select those that have &quot;light&quot; or &quot;switch&quot; in the &#39;entity id&#39;, and have an &quot;on&quot; state. This will return an array of entities, which can be counted to obtain the total number of switches or lights that are on.</p><h3 id="setting-an-attribute-value" tabindex="-1"><a class="header-anchor" href="#setting-an-attribute-value" aria-hidden="true">#</a> Setting an <em>attribute</em> value</h3><p><strong>Example:</strong> Provide a list of the lights that are on.</p><p>The entity state value can only be a JSON primitive value, such as a number or string, and objects and arrays can only be passed using the entity attributes.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$entities().*[state = &quot;on&quot; and entity_id ~&gt; /^light|^switch/].{
    &quot;name&quot;: attributes.friendly_name,
    &quot;lastChange&quot;: last_changed}
</code></pre></div><p>The JSONata expression here first returns a similar array of lights and switches, but from this then builds an array of objects. Each object contains the friendly name and last changed timestamp for each light or switch. This array is set into an attribute value of the sensor entity.</p><h3 id="responding-to-state-changes-using-jsonata" tabindex="-1"><a class="header-anchor" href="#responding-to-state-changes-using-jsonata" aria-hidden="true">#</a> Responding to state changes using JSONata</h3><p><strong>Example:</strong> Since I last looked, which lights have been turned on, or off?</p><p>In addition to the node above, the example also includes an <strong>Event: state</strong> node which responds to state changes in the above sensor update.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(
    $old:=$prevEntity().attributes.lights_table;
    $new:=$entity().attributes.lights_table;
    {&quot;on&quot;: $new[$not(name in $old.name)],
     &quot;off&quot;: $old[$not(name in $new.name)]
    }
)
</code></pre></div><p>In an <strong>Event</strong> node, the <code>$entity()</code> function returns the current or new entity details, and the <code>$prevEntity()</code> function the previous or old entity details. The JSONata here picks out the sensor attribute and compares the array of lights &amp; switches from before and after the state change. From this, an object with an array list of lights or switches that have been turned on, and those turned off, is provided.</p><p><strong>Note:</strong> In this example the <strong>Sensor</strong> node is updated on demand. The state value of the associated Home Assistant entity, which is a count of the number of lights or switches that are on, <em>will only be updated when the Sensor node is triggered</em>. The <strong>Events: state</strong> node is responding to changes in the sensor node state value, which will only happen when the <em>sensor node is updated</em>, and <em>not</em> when a light or switch is turned on or off.</p><p><strong>Also see:</strong></p>`,23);function q(y,g){const n=e("RouterLink");return u(),c("div",null,[i,s("ul",null,[s("li",null,[a(n,{to:"/cookbook/guide/jsonata.html"},{default:t(()=>[o("JSONata guide")]),_:1})]),s("li",null,[a(n,{to:"/cookbook/guide/jsonata-primer.html"},{default:t(()=>[o("JSONata primer")]),_:1})])])])}const h=p(k,[["render",q],["__file","sensor.html.vue"]]);export{h as default};
