// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram3');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.5,-1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,1.5], null)], null),new cljs.core.Keyword(null,"source-link","source-link",-1993375482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"source","source",-433931539),"diagram3.cljs"], null),new cljs.core.Keyword(null,"input-style","input-style",-374295278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ffffff",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.75], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"slider","slider",-472668865),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(720),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),(720),new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"slider","slider",-472668865),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(720),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),(38),new cljs.core.Keyword(null,"width","width",-384071477),(500)], null)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable,input){
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var n = input.call(null,new cljs.core.Keyword(null,"n","n",562130025));
var delta = (1.0 / n);
var s = input.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
cv.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#ffffff");

cv.call(null,new cljs.core.Keyword(null,"set-line-width","set-line-width",-1126065560)).call(null,.25);

var seq__6066 = cljs.core.seq.call(null,cljs.core.range.call(null,delta,1.0,delta));
var chunk__6067 = null;
var count__6068 = (0);
var i__6069 = (0);
while(true){
if((i__6069 < count__6068)){
var t = cljs.core._nth.call(null,chunk__6067,i__6069);
var angle0_6072 = (t * ((2) * Math.PI));
var angle1_6073 = (angle0_6072 * s);
var p0_6074 = pga2d.grassmann.point.call(null,Math.cos(angle0_6072),Math.sin(angle0_6072),(1));
var p1_6075 = pga2d.grassmann.point.call(null,Math.cos(angle1_6073),Math.sin(angle1_6073),(1));
var vec__6070_6076 = (((pga2d.diagram.mndist.call(null,p0_6074,p1_6075) < 1.0E-6))?(function (){var pv = pga2d.grassmann.point.call(null,(- Math.sin(angle0_6072)),Math.cos(angle0_6072),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_6074,pv),"#000000"], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_6074,p1_6075),"#000000"], null));
var m_6077 = cljs.core.nth.call(null,vec__6070_6076,(0),null);
var c_6078 = cljs.core.nth.call(null,vec__6070_6076,(1),null);
render.call(null,m_6077,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c_6078], null));

var G__6079 = seq__6066;
var G__6080 = chunk__6067;
var G__6081 = count__6068;
var G__6082 = (i__6069 + (1));
seq__6066 = G__6079;
chunk__6067 = G__6080;
count__6068 = G__6081;
i__6069 = G__6082;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6066);
if(temp__4425__auto__){
var seq__6066__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6066__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6066__$1);
var G__6083 = cljs.core.chunk_rest.call(null,seq__6066__$1);
var G__6084 = c__5471__auto__;
var G__6085 = cljs.core.count.call(null,c__5471__auto__);
var G__6086 = (0);
seq__6066 = G__6083;
chunk__6067 = G__6084;
count__6068 = G__6085;
i__6069 = G__6086;
continue;
} else {
var t = cljs.core.first.call(null,seq__6066__$1);
var angle0_6087 = (t * ((2) * Math.PI));
var angle1_6088 = (angle0_6087 * s);
var p0_6089 = pga2d.grassmann.point.call(null,Math.cos(angle0_6087),Math.sin(angle0_6087),(1));
var p1_6090 = pga2d.grassmann.point.call(null,Math.cos(angle1_6088),Math.sin(angle1_6088),(1));
var vec__6071_6091 = (((pga2d.diagram.mndist.call(null,p0_6089,p1_6090) < 1.0E-6))?(function (){var pv = pga2d.grassmann.point.call(null,(- Math.sin(angle0_6087)),Math.cos(angle0_6087),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_6089,pv),"#000000"], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_6089,p1_6090),"#000000"], null));
var m_6092 = cljs.core.nth.call(null,vec__6071_6091,(0),null);
var c_6093 = cljs.core.nth.call(null,vec__6071_6091,(1),null);
render.call(null,m_6092,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c_6093], null));

var G__6094 = cljs.core.next.call(null,seq__6066__$1);
var G__6095 = null;
var G__6096 = (0);
var G__6097 = (0);
seq__6066 = G__6094;
chunk__6067 = G__6095;
count__6068 = G__6096;
i__6069 = G__6097;
continue;
}
} else {
return null;
}
}
break;
}
})], null));

//# sourceMappingURL=diagram3.js.map?rel=1455004145461