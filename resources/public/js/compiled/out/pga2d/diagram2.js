// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
var g_6097 = pga2d.clifford.ga.call(null,(0));
var cv_6098 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var render_6099 = pga2d.canvas.canvas_render.call(null,cv_6098,g_6097);
var N_6100 = g_6097.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var A0_6101 = pga2d.grassmann.point.call(null,(-1),(1),(1));
var A1_6102 = pga2d.grassmann.point.call(null,.6,.2,(1));
var P_6103 = pga2d.grassmann.point.call(null,(0),(-1),(0));
var m0_6104 = N_6100.call(null,pga2d.grassmann.join.call(null,A0_6101,P_6103));
var m1_6105 = N_6100.call(null,pga2d.grassmann.join.call(null,A1_6102,P_6103));
var a_6106 = pga2d.grassmann.join.call(null,A0_6101,A1_6102);
var Am_6107 = N_6100.call(null,pga2d.grassmann.add.call(null,A0_6101,A1_6102));
var r_6108 = N_6100.call(null,pga2d.grassmann.grade.call(null,g_6097.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,Am_6107,a_6106),(1)));
var c_6109 = N_6100.call(null,pga2d.grassmann.add.call(null,m0_6104,pga2d.grassmann.times.call(null,m1_6105,(-1))));
var C_6110 = N_6100.call(null,pga2d.grassmann.wedge.call(null,r_6108,c_6109));
var s_6111 = N_6100.call(null,pga2d.grassmann.join.call(null,A0_6101,C_6110));
var h_6112 = N_6100.call(null,g_6097.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,r_6108,s_6111));
cv_6098.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

render_6099.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m0_6104,m1_6105], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffff00"], null));

render_6099.call(null,a_6106,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000ff"], null));

render_6099.call(null,r_6108,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));

render_6099.call(null,c_6109,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ff00"], null));

render_6099.call(null,s_6111,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null));

var seq__6093_6113 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__6094_6114 = null;
var count__6095_6115 = (0);
var i__6096_6116 = (0);
while(true){
if((i__6096_6116 < count__6095_6115)){
var t_6117 = cljs.core._nth.call(null,chunk__6094_6114,i__6096_6116);
var rotor_6118 = g_6097.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6117,h_6112);
render_6099.call(null,pga2d.grassmann.chop.call(null,g_6097.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6118).call(null,m0_6104),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_6099.call(null,pga2d.grassmann.chop.call(null,g_6097.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6118).call(null,A0_6101),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6119 = seq__6093_6113;
var G__6120 = chunk__6094_6114;
var G__6121 = count__6095_6115;
var G__6122 = (i__6096_6116 + (1));
seq__6093_6113 = G__6119;
chunk__6094_6114 = G__6120;
count__6095_6115 = G__6121;
i__6096_6116 = G__6122;
continue;
} else {
var temp__4425__auto___6123 = cljs.core.seq.call(null,seq__6093_6113);
if(temp__4425__auto___6123){
var seq__6093_6124__$1 = temp__4425__auto___6123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6093_6124__$1)){
var c__5471__auto___6125 = cljs.core.chunk_first.call(null,seq__6093_6124__$1);
var G__6126 = cljs.core.chunk_rest.call(null,seq__6093_6124__$1);
var G__6127 = c__5471__auto___6125;
var G__6128 = cljs.core.count.call(null,c__5471__auto___6125);
var G__6129 = (0);
seq__6093_6113 = G__6126;
chunk__6094_6114 = G__6127;
count__6095_6115 = G__6128;
i__6096_6116 = G__6129;
continue;
} else {
var t_6130 = cljs.core.first.call(null,seq__6093_6124__$1);
var rotor_6131 = g_6097.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6130,h_6112);
render_6099.call(null,pga2d.grassmann.chop.call(null,g_6097.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6131).call(null,m0_6104),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_6099.call(null,pga2d.grassmann.chop.call(null,g_6097.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6131).call(null,A0_6101),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6132 = cljs.core.next.call(null,seq__6093_6124__$1);
var G__6133 = null;
var G__6134 = (0);
var G__6135 = (0);
seq__6093_6113 = G__6132;
chunk__6094_6114 = G__6133;
count__6095_6115 = G__6134;
i__6096_6116 = G__6135;
continue;
}
} else {
}
}
break;
}

render_6099.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0_6101,A1_6102], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_6099.call(null,Am_6107,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_6099.call(null,C_6110,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

//# sourceMappingURL=diagram2.js.map?rel=1454882954702