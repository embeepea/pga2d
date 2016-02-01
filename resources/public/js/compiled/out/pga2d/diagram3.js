// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram3');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.5,-1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,1.5], null)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),720.0,new cljs.core.Keyword(null,"s","s",1705939918),38.0], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable,input){
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var n = input.call(null,new cljs.core.Keyword(null,"n","n",562130025));
var delta = (1.0 / n);
var s = input.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
cv.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#ffffff");

cv.call(null,new cljs.core.Keyword(null,"set-line-width","set-line-width",-1126065560)).call(null,.25);

var seq__6096 = cljs.core.seq.call(null,cljs.core.range.call(null,0.0,1.0,delta));
var chunk__6097 = null;
var count__6098 = (0);
var i__6099 = (0);
while(true){
if((i__6099 < count__6098)){
var t = cljs.core._nth.call(null,chunk__6097,i__6099);
var angle0_6100 = (t * ((2) * Math.PI));
var angle1_6101 = (angle0_6100 * s);
var p0_6102 = pga2d.grassmann.point.call(null,Math.cos(angle0_6100),Math.sin(angle0_6100),(1));
var p1_6103 = pga2d.grassmann.point.call(null,Math.cos(angle1_6101),Math.sin(angle1_6101),(1));
var m_6104 = pga2d.grassmann.join.call(null,p0_6102,p1_6103);
cljs.core.println.call(null,"t = ",t);

render.call(null,m_6104,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null));

var G__6105 = seq__6096;
var G__6106 = chunk__6097;
var G__6107 = count__6098;
var G__6108 = (i__6099 + (1));
seq__6096 = G__6105;
chunk__6097 = G__6106;
count__6098 = G__6107;
i__6099 = G__6108;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6096);
if(temp__4425__auto__){
var seq__6096__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6096__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6096__$1);
var G__6109 = cljs.core.chunk_rest.call(null,seq__6096__$1);
var G__6110 = c__5471__auto__;
var G__6111 = cljs.core.count.call(null,c__5471__auto__);
var G__6112 = (0);
seq__6096 = G__6109;
chunk__6097 = G__6110;
count__6098 = G__6111;
i__6099 = G__6112;
continue;
} else {
var t = cljs.core.first.call(null,seq__6096__$1);
var angle0_6113 = (t * ((2) * Math.PI));
var angle1_6114 = (angle0_6113 * s);
var p0_6115 = pga2d.grassmann.point.call(null,Math.cos(angle0_6113),Math.sin(angle0_6113),(1));
var p1_6116 = pga2d.grassmann.point.call(null,Math.cos(angle1_6114),Math.sin(angle1_6114),(1));
var m_6117 = pga2d.grassmann.join.call(null,p0_6115,p1_6116);
cljs.core.println.call(null,"t = ",t);

render.call(null,m_6117,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null));

var G__6118 = cljs.core.next.call(null,seq__6096__$1);
var G__6119 = null;
var G__6120 = (0);
var G__6121 = (0);
seq__6096 = G__6118;
chunk__6097 = G__6119;
count__6098 = G__6120;
i__6099 = G__6121;
continue;
}
} else {
return null;
}
}
break;
}
})], null));

//# sourceMappingURL=diagram3.js.map?rel=1454304294720