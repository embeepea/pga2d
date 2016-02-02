// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
var g_6128 = pga2d.clifford.ga.call(null,(0));
var cv_6129 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var render_6130 = pga2d.canvas.canvas_render.call(null,cv_6129,g_6128);
var N_6131 = g_6128.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var A0_6132 = pga2d.grassmann.point.call(null,(-1),(1),(1));
var A1_6133 = pga2d.grassmann.point.call(null,.6,.2,(1));
var P_6134 = pga2d.grassmann.point.call(null,(0),(-1),(0));
var m0_6135 = N_6131.call(null,pga2d.grassmann.join.call(null,A0_6132,P_6134));
var m1_6136 = N_6131.call(null,pga2d.grassmann.join.call(null,A1_6133,P_6134));
var a_6137 = pga2d.grassmann.join.call(null,A0_6132,A1_6133);
var Am_6138 = N_6131.call(null,pga2d.grassmann.add.call(null,A0_6132,A1_6133));
var r_6139 = N_6131.call(null,pga2d.grassmann.grade.call(null,g_6128.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,Am_6138,a_6137),(1)));
var c_6140 = N_6131.call(null,pga2d.grassmann.add.call(null,m0_6135,pga2d.grassmann.times.call(null,m1_6136,(-1))));
var C_6141 = N_6131.call(null,pga2d.grassmann.wedge.call(null,r_6139,c_6140));
var s_6142 = N_6131.call(null,pga2d.grassmann.join.call(null,A0_6132,C_6141));
var h_6143 = N_6131.call(null,g_6128.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,r_6139,s_6142));
cv_6129.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

render_6130.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m0_6135,m1_6136], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffff00"], null));

render_6130.call(null,a_6137,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000ff"], null));

render_6130.call(null,r_6139,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));

render_6130.call(null,c_6140,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ff00"], null));

render_6130.call(null,s_6142,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null));

var seq__6124_6144 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__6125_6145 = null;
var count__6126_6146 = (0);
var i__6127_6147 = (0);
while(true){
if((i__6127_6147 < count__6126_6146)){
var t_6148 = cljs.core._nth.call(null,chunk__6125_6145,i__6127_6147);
var rotor_6149 = g_6128.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6148,h_6143);
render_6130.call(null,pga2d.grassmann.chop.call(null,g_6128.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6149).call(null,m0_6135),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_6130.call(null,pga2d.grassmann.chop.call(null,g_6128.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6149).call(null,A0_6132),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6150 = seq__6124_6144;
var G__6151 = chunk__6125_6145;
var G__6152 = count__6126_6146;
var G__6153 = (i__6127_6147 + (1));
seq__6124_6144 = G__6150;
chunk__6125_6145 = G__6151;
count__6126_6146 = G__6152;
i__6127_6147 = G__6153;
continue;
} else {
var temp__4425__auto___6154 = cljs.core.seq.call(null,seq__6124_6144);
if(temp__4425__auto___6154){
var seq__6124_6155__$1 = temp__4425__auto___6154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6124_6155__$1)){
var c__5471__auto___6156 = cljs.core.chunk_first.call(null,seq__6124_6155__$1);
var G__6157 = cljs.core.chunk_rest.call(null,seq__6124_6155__$1);
var G__6158 = c__5471__auto___6156;
var G__6159 = cljs.core.count.call(null,c__5471__auto___6156);
var G__6160 = (0);
seq__6124_6144 = G__6157;
chunk__6125_6145 = G__6158;
count__6126_6146 = G__6159;
i__6127_6147 = G__6160;
continue;
} else {
var t_6161 = cljs.core.first.call(null,seq__6124_6155__$1);
var rotor_6162 = g_6128.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6161,h_6143);
render_6130.call(null,pga2d.grassmann.chop.call(null,g_6128.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6162).call(null,m0_6135),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_6130.call(null,pga2d.grassmann.chop.call(null,g_6128.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6162).call(null,A0_6132),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6163 = cljs.core.next.call(null,seq__6124_6155__$1);
var G__6164 = null;
var G__6165 = (0);
var G__6166 = (0);
seq__6124_6144 = G__6163;
chunk__6125_6145 = G__6164;
count__6126_6146 = G__6165;
i__6127_6147 = G__6166;
continue;
}
} else {
}
}
break;
}

render_6130.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0_6132,A1_6133], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_6130.call(null,Am_6138,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_6130.call(null,C_6141,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

//# sourceMappingURL=diagram2.js.map?rel=1454386653997