// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram3');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.5,-1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,1.5], null)], null),new cljs.core.Keyword(null,"source-link","source-link",-1993375482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"source","source",-433931539),"diagram3.cljs"], null),new cljs.core.Keyword(null,"input-style","input-style",-374295278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ffffff",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.75], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"slider","slider",-472668865),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1000),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),(720),new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"slider","slider",-472668865),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"step","step",1288888124),0.01,new cljs.core.Keyword(null,"value","value",305978217),38.0,new cljs.core.Keyword(null,"width","width",-384071477),(500)], null)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable,input){
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var n = input.call(null,new cljs.core.Keyword(null,"n","n",562130025));
var delta = (1.0 / n);
var s = input.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
cv.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#ffffff");

cv.call(null,new cljs.core.Keyword(null,"set-line-width","set-line-width",-1126065560)).call(null,.25);

var seq__6065 = cljs.core.seq.call(null,cljs.core.range.call(null,0.0,1.0,delta));
var chunk__6066 = null;
var count__6067 = (0);
var i__6068 = (0);
while(true){
if((i__6068 < count__6067)){
var t = cljs.core._nth.call(null,chunk__6066,i__6068);
var angle0_6069 = (t * ((2) * Math.PI));
var angle1_6070 = (angle0_6069 * s);
var p0_6071 = pga2d.grassmann.point.call(null,Math.cos(angle0_6069),Math.sin(angle0_6069),(1));
var p1_6072 = pga2d.grassmann.point.call(null,Math.cos(angle1_6070),Math.sin(angle1_6070),(1));
var m_6073 = pga2d.grassmann.join.call(null,p0_6071,p1_6072);
render.call(null,m_6073,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null));

var G__6074 = seq__6065;
var G__6075 = chunk__6066;
var G__6076 = count__6067;
var G__6077 = (i__6068 + (1));
seq__6065 = G__6074;
chunk__6066 = G__6075;
count__6067 = G__6076;
i__6068 = G__6077;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6065);
if(temp__4425__auto__){
var seq__6065__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6065__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6065__$1);
var G__6078 = cljs.core.chunk_rest.call(null,seq__6065__$1);
var G__6079 = c__5471__auto__;
var G__6080 = cljs.core.count.call(null,c__5471__auto__);
var G__6081 = (0);
seq__6065 = G__6078;
chunk__6066 = G__6079;
count__6067 = G__6080;
i__6068 = G__6081;
continue;
} else {
var t = cljs.core.first.call(null,seq__6065__$1);
var angle0_6082 = (t * ((2) * Math.PI));
var angle1_6083 = (angle0_6082 * s);
var p0_6084 = pga2d.grassmann.point.call(null,Math.cos(angle0_6082),Math.sin(angle0_6082),(1));
var p1_6085 = pga2d.grassmann.point.call(null,Math.cos(angle1_6083),Math.sin(angle1_6083),(1));
var m_6086 = pga2d.grassmann.join.call(null,p0_6084,p1_6085);
render.call(null,m_6086,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null));

var G__6087 = cljs.core.next.call(null,seq__6065__$1);
var G__6088 = null;
var G__6089 = (0);
var G__6090 = (0);
seq__6065 = G__6087;
chunk__6066 = G__6088;
count__6067 = G__6089;
i__6068 = G__6090;
continue;
}
} else {
return null;
}
}
break;
}
})], null));

//# sourceMappingURL=diagram3.js.map?rel=1454882954656