// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
var g_7304 = pga2d.clifford.ga.call(null,(0));
var cv_7305 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var render_7306 = pga2d.canvas.canvas_render.call(null,cv_7305,g_7304);
var N_7307 = g_7304.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var A0_7308 = pga2d.grassmann.point.call(null,(-1),(1),(1));
var A1_7309 = pga2d.grassmann.point.call(null,.6,.2,(1));
var P_7310 = pga2d.grassmann.point.call(null,(0),(-1),(0));
var m0_7311 = N_7307.call(null,pga2d.grassmann.join.call(null,A0_7308,P_7310));
var m1_7312 = N_7307.call(null,pga2d.grassmann.join.call(null,A1_7309,P_7310));
var a_7313 = pga2d.grassmann.join.call(null,A0_7308,A1_7309);
var Am_7314 = N_7307.call(null,pga2d.grassmann.add.call(null,A0_7308,A1_7309));
var r_7315 = N_7307.call(null,pga2d.grassmann.grade.call(null,g_7304.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,Am_7314,a_7313),(1)));
var c_7316 = N_7307.call(null,pga2d.grassmann.add.call(null,m0_7311,pga2d.grassmann.times.call(null,m1_7312,(-1))));
var C_7317 = N_7307.call(null,pga2d.grassmann.wedge.call(null,r_7315,c_7316));
var s_7318 = N_7307.call(null,pga2d.grassmann.join.call(null,A0_7308,C_7317));
var h_7319 = N_7307.call(null,g_7304.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,r_7315,s_7318));
cv_7305.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

render_7306.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m0_7311,m1_7312], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffff00"], null));

render_7306.call(null,a_7313,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000ff"], null));

render_7306.call(null,r_7315,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));

render_7306.call(null,c_7316,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ff00"], null));

render_7306.call(null,s_7318,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null));

var seq__7300_7320 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__7301_7321 = null;
var count__7302_7322 = (0);
var i__7303_7323 = (0);
while(true){
if((i__7303_7323 < count__7302_7322)){
var t_7324 = cljs.core._nth.call(null,chunk__7301_7321,i__7303_7323);
var rotor_7325 = g_7304.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_7324,h_7319);
render_7306.call(null,pga2d.grassmann.chop.call(null,g_7304.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_7325).call(null,m0_7311),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_7306.call(null,pga2d.grassmann.chop.call(null,g_7304.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_7325).call(null,A0_7308),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__7326 = seq__7300_7320;
var G__7327 = chunk__7301_7321;
var G__7328 = count__7302_7322;
var G__7329 = (i__7303_7323 + (1));
seq__7300_7320 = G__7326;
chunk__7301_7321 = G__7327;
count__7302_7322 = G__7328;
i__7303_7323 = G__7329;
continue;
} else {
var temp__4425__auto___7330 = cljs.core.seq.call(null,seq__7300_7320);
if(temp__4425__auto___7330){
var seq__7300_7331__$1 = temp__4425__auto___7330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7300_7331__$1)){
var c__5471__auto___7332 = cljs.core.chunk_first.call(null,seq__7300_7331__$1);
var G__7333 = cljs.core.chunk_rest.call(null,seq__7300_7331__$1);
var G__7334 = c__5471__auto___7332;
var G__7335 = cljs.core.count.call(null,c__5471__auto___7332);
var G__7336 = (0);
seq__7300_7320 = G__7333;
chunk__7301_7321 = G__7334;
count__7302_7322 = G__7335;
i__7303_7323 = G__7336;
continue;
} else {
var t_7337 = cljs.core.first.call(null,seq__7300_7331__$1);
var rotor_7338 = g_7304.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_7337,h_7319);
render_7306.call(null,pga2d.grassmann.chop.call(null,g_7304.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_7338).call(null,m0_7311),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_7306.call(null,pga2d.grassmann.chop.call(null,g_7304.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_7338).call(null,A0_7308),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__7339 = cljs.core.next.call(null,seq__7300_7331__$1);
var G__7340 = null;
var G__7341 = (0);
var G__7342 = (0);
seq__7300_7320 = G__7339;
chunk__7301_7321 = G__7340;
count__7302_7322 = G__7341;
i__7303_7323 = G__7342;
continue;
}
} else {
}
}
break;
}

render_7306.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0_7308,A1_7309], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_7306.call(null,Am_7314,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_7306.call(null,C_7317,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

//# sourceMappingURL=diagram2.js.map?rel=1455459369514