importScripts("./magesim.js"),onmessage=function(n){var t=n.data;"start"==t.type&&fetch("./magesim.wasm",{cache:"no-store"}).then((function(n){return n.arrayBuffer()})).then((function(n){return MageSim({wasmBinary:n})})).then((function(n){return n.ready})).then((function(n){var i=n.allocConfig();for(var o in t.config)"timings"!=o&&void 0!==i[o]&&(i[o]=t.config[o]);n.Rotation.values.hasOwnProperty(t.config.rotation)&&(i.rotation=n.Rotation.values[t.config.rotation]),n.Trinket.values.hasOwnProperty(t.config.trinket1)&&(i.trinket1=n.Trinket.values[t.config.trinket1]),n.Trinket.values.hasOwnProperty(t.config.trinket2)&&(i.trinket2=n.Trinket.values[t.config.trinket2]),n.MetaGem.values.hasOwnProperty(t.config.meta_gem)&&(i.meta_gem=n.MetaGem.values[t.config.meta_gem]),n.Potion.values.hasOwnProperty(t.config.potion)&&(i.potion=n.Potion.values[t.config.potion]),n.Potion.values.hasOwnProperty(t.config.pre_potion)&&(i.pre_potion=n.Potion.values[t.config.pre_potion]),n.Conjured.values.hasOwnProperty(t.config.conjured)&&(i.conjured=n.Conjured.values[t.config.conjured]),t.config.rot_black_magic&&t.config.rot_black_magic_ench&&n.Enchant.values.hasOwnProperty(t.config.rot_black_magic_ench)&&(i.rot_black_magic_ench=n.Enchant.values[t.config.rot_black_magic_ench]);for(var e=0;e<t.config.timings.length;e++)n.addTiming(i,t.config.timings[e].name,t.config.timings[e].t?t.config.timings[e].t:0,t.config.timings[e].wait_for_buff,t.config.timings[e].wait_t?t.config.timings[e].wait_t:0);for(e=0;e<t.config.interruptions.length;e++)n.addInterruption(i,t.config.interruptions[e].silence,t.config.interruptions[e].affects_all,t.config.interruptions[e].t,t.config.interruptions[e].duration);var r=JSON.parse(JSON.stringify(n.emptyStats()));for(var o in t.config.stats)r.hasOwnProperty(o)&&(r[o]=t.config.stats[o]);var a=JSON.parse(JSON.stringify(n.emptyTalents()));for(var o in t.config.talents)a.hasOwnProperty(o)&&(a[o]=t.config.talents[o]);var s=JSON.parse(JSON.stringify(n.emptyGlyphs()));for(var o in t.config.glyphs)s.hasOwnProperty(o)&&(s[o]=t.config.glyphs[o]);var c=n.allocPlayer(i,r,a,s);if(n.Race.values.hasOwnProperty(t.config.race)&&(c.race=n.Race.values[t.config.race]),t.iterations&&t.iterations>1)var g=n.runSimulations(i,c,t.iterations);else g=n.runSimulation(i,c);g.log&&(g.log=JSON.parse(g.log)),g.spells&&(g.spells=JSON.parse(g.spells)),g.histogram&&(g.histogram=JSON.parse(g.histogram)),postMessage({type:"success",result:g})})).catch((function(n){return console.error(n)}))};