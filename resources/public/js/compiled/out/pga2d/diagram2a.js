// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2a');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),new cljs.core.Keyword(null,"source-link","source-link",-1993375482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),"diagram2a.cljs"], null),new cljs.core.Keyword(null,"dragables","dragables",1377703931),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"A0","A0",452449387),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,-1.0,1.0,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"A1","A1",-514669796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,0.6,0.2,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"B0","B0",-1996678931),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,-0.6,0.0,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#666666"], null),new cljs.core.Keyword(null,"B1","B1",-1556607540),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,1.0,1.2,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#666666"], null)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable){
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var A0 = dragable.call(null,new cljs.core.Keyword(null,"A0","A0",452449387));
var A1 = dragable.call(null,new cljs.core.Keyword(null,"A1","A1",-514669796));
var B0 = dragable.call(null,new cljs.core.Keyword(null,"B0","B0",-1996678931));
var B1 = dragable.call(null,new cljs.core.Keyword(null,"B1","B1",-1556607540));
var m0 = N.call(null,pga2d.grassmann.join.call(null,A0,B0));
var m1 = N.call(null,pga2d.grassmann.join.call(null,A1,B1));
var a = pga2d.grassmann.join.call(null,A0,A1);
var Am = N.call(null,pga2d.grassmann.add.call(null,A0,A1));
var r = N.call(null,pga2d.grassmann.grade.call(null,g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,Am,a),(1)));
var c = N.call(null,pga2d.grassmann.add.call(null,m0,pga2d.grassmann.times.call(null,m1,(-1))));
var C = N.call(null,pga2d.grassmann.wedge.call(null,r,c));
var s = N.call(null,pga2d.grassmann.join.call(null,A0,C));
var h = N.call(null,g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,r,s));
cv.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m0,m1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffff00"], null));

render.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000ff"], null));

render.call(null,r,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));

render.call(null,c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ff00"], null));

render.call(null,s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null));

var seq__6029_6033 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__6030_6034 = null;
var count__6031_6035 = (0);
var i__6032_6036 = (0);
while(true){
if((i__6032_6036 < count__6031_6035)){
var t_6037 = cljs.core._nth.call(null,chunk__6030_6034,i__6032_6036);
var rotor_6038 = g.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6037,h);
render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6038).call(null,m0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6038).call(null,A0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6039 = seq__6029_6033;
var G__6040 = chunk__6030_6034;
var G__6041 = count__6031_6035;
var G__6042 = (i__6032_6036 + (1));
seq__6029_6033 = G__6039;
chunk__6030_6034 = G__6040;
count__6031_6035 = G__6041;
i__6032_6036 = G__6042;
continue;
} else {
var temp__4425__auto___6043 = cljs.core.seq.call(null,seq__6029_6033);
if(temp__4425__auto___6043){
var seq__6029_6044__$1 = temp__4425__auto___6043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6029_6044__$1)){
var c__5471__auto___6045 = cljs.core.chunk_first.call(null,seq__6029_6044__$1);
var G__6046 = cljs.core.chunk_rest.call(null,seq__6029_6044__$1);
var G__6047 = c__5471__auto___6045;
var G__6048 = cljs.core.count.call(null,c__5471__auto___6045);
var G__6049 = (0);
seq__6029_6033 = G__6046;
chunk__6030_6034 = G__6047;
count__6031_6035 = G__6048;
i__6032_6036 = G__6049;
continue;
} else {
var t_6050 = cljs.core.first.call(null,seq__6029_6044__$1);
var rotor_6051 = g.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6050,h);
render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6051).call(null,m0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6051).call(null,A0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6052 = cljs.core.next.call(null,seq__6029_6044__$1);
var G__6053 = null;
var G__6054 = (0);
var G__6055 = (0);
seq__6029_6033 = G__6052;
chunk__6030_6034 = G__6053;
count__6031_6035 = G__6054;
i__6032_6036 = G__6055;
continue;
}
} else {
}
}
break;
}

render.call(null,Am,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

return render.call(null,C,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));
})], null));

//# sourceMappingURL=diagram2a.js.map?rel=1455004145410