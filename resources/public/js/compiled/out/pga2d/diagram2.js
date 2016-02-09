// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
var g_6104 = pga2d.clifford.ga.call(null,(0));
var cv_6105 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var render_6106 = pga2d.canvas.canvas_render.call(null,cv_6105,g_6104);
var N_6107 = g_6104.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var A0_6108 = pga2d.grassmann.point.call(null,(-1),(1),(1));
var A1_6109 = pga2d.grassmann.point.call(null,.6,.2,(1));
var P_6110 = pga2d.grassmann.point.call(null,(0),(-1),(0));
var m0_6111 = N_6107.call(null,pga2d.grassmann.join.call(null,A0_6108,P_6110));
var m1_6112 = N_6107.call(null,pga2d.grassmann.join.call(null,A1_6109,P_6110));
var a_6113 = pga2d.grassmann.join.call(null,A0_6108,A1_6109);
var Am_6114 = N_6107.call(null,pga2d.grassmann.add.call(null,A0_6108,A1_6109));
var r_6115 = N_6107.call(null,pga2d.grassmann.grade.call(null,g_6104.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,Am_6114,a_6113),(1)));
var c_6116 = N_6107.call(null,pga2d.grassmann.add.call(null,m0_6111,pga2d.grassmann.times.call(null,m1_6112,(-1))));
var C_6117 = N_6107.call(null,pga2d.grassmann.wedge.call(null,r_6115,c_6116));
var s_6118 = N_6107.call(null,pga2d.grassmann.join.call(null,A0_6108,C_6117));
var h_6119 = N_6107.call(null,g_6104.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,r_6115,s_6118));
cv_6105.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

render_6106.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m0_6111,m1_6112], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffff00"], null));

render_6106.call(null,a_6113,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000ff"], null));

render_6106.call(null,r_6115,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));

render_6106.call(null,c_6116,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ff00"], null));

render_6106.call(null,s_6118,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null));

var seq__6100_6120 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__6101_6121 = null;
var count__6102_6122 = (0);
var i__6103_6123 = (0);
while(true){
if((i__6103_6123 < count__6102_6122)){
var t_6124 = cljs.core._nth.call(null,chunk__6101_6121,i__6103_6123);
var rotor_6125 = g_6104.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6124,h_6119);
render_6106.call(null,pga2d.grassmann.chop.call(null,g_6104.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6125).call(null,m0_6111),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_6106.call(null,pga2d.grassmann.chop.call(null,g_6104.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6125).call(null,A0_6108),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6126 = seq__6100_6120;
var G__6127 = chunk__6101_6121;
var G__6128 = count__6102_6122;
var G__6129 = (i__6103_6123 + (1));
seq__6100_6120 = G__6126;
chunk__6101_6121 = G__6127;
count__6102_6122 = G__6128;
i__6103_6123 = G__6129;
continue;
} else {
var temp__4425__auto___6130 = cljs.core.seq.call(null,seq__6100_6120);
if(temp__4425__auto___6130){
var seq__6100_6131__$1 = temp__4425__auto___6130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6100_6131__$1)){
var c__5471__auto___6132 = cljs.core.chunk_first.call(null,seq__6100_6131__$1);
var G__6133 = cljs.core.chunk_rest.call(null,seq__6100_6131__$1);
var G__6134 = c__5471__auto___6132;
var G__6135 = cljs.core.count.call(null,c__5471__auto___6132);
var G__6136 = (0);
seq__6100_6120 = G__6133;
chunk__6101_6121 = G__6134;
count__6102_6122 = G__6135;
i__6103_6123 = G__6136;
continue;
} else {
var t_6137 = cljs.core.first.call(null,seq__6100_6131__$1);
var rotor_6138 = g_6104.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6137,h_6119);
render_6106.call(null,pga2d.grassmann.chop.call(null,g_6104.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6138).call(null,m0_6111),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_6106.call(null,pga2d.grassmann.chop.call(null,g_6104.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6138).call(null,A0_6108),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6139 = cljs.core.next.call(null,seq__6100_6131__$1);
var G__6140 = null;
var G__6141 = (0);
var G__6142 = (0);
seq__6100_6120 = G__6139;
chunk__6101_6121 = G__6140;
count__6102_6122 = G__6141;
i__6103_6123 = G__6142;
continue;
}
} else {
}
}
break;
}

render_6106.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0_6108,A1_6109], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_6106.call(null,Am_6114,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_6106.call(null,C_6117,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

//# sourceMappingURL=diagram2.js.map?rel=1455004145500