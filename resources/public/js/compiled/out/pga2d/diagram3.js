// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram3');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.5,-1.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,1.5], null)], null),new cljs.core.Keyword(null,"source-link","source-link",-1993375482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"source","source",-433931539),"diagram3.cljs"], null),new cljs.core.Keyword(null,"input-style","input-style",-374295278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ffffff",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.75], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"slider","slider",-472668865),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(720),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),(720),new cljs.core.Keyword(null,"width","width",-384071477),(500)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"slider","slider",-472668865),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(720),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),(38),new cljs.core.Keyword(null,"width","width",-384071477),(500)], null)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable,input){
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var n = input.call(null,new cljs.core.Keyword(null,"n","n",562130025));
var delta = (1.0 / n);
var s = input.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
var doColor = false;
cv.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#ffffff");

cv.call(null,new cljs.core.Keyword(null,"set-line-width","set-line-width",-1126065560)).call(null,.25);

var seq__7202 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(n + (1))));
var chunk__7203 = null;
var count__7204 = (0);
var i__7205 = (0);
while(true){
if((i__7205 < count__7204)){
var i = cljs.core._nth.call(null,chunk__7203,i__7205);
var t_7208 = ((i - (1)) * delta);
var angle0_7209 = (t_7208 * ((2) * Math.PI));
var angle1_7210 = (angle0_7209 * s);
var red_7211 = Math.floor((t_7208 * (255)));
var blue_7212 = Math.floor(((1.0 - t_7208) * (255)));
var color_7213 = cljs.pprint.cl_format.call(null,null,"rgb(~d, 0, ~d)",red_7211,blue_7212);
var p0_7214 = pga2d.grassmann.point.call(null,Math.cos(angle0_7209),Math.sin(angle0_7209),(1));
var p1_7215 = pga2d.grassmann.point.call(null,Math.cos(angle1_7210),Math.sin(angle1_7210),(1));
var vec__7206_7216 = (((pga2d.diagram.mndist.call(null,p0_7214,p1_7215) < 1.0E-6))?(function (){var pv = pga2d.grassmann.point.call(null,(- Math.sin(angle0_7209)),Math.cos(angle0_7209),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_7214,pv),"#000000"], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_7214,p1_7215),((doColor)?color_7213:"#000000")], null));
var m_7217 = cljs.core.nth.call(null,vec__7206_7216,(0),null);
var c_7218 = cljs.core.nth.call(null,vec__7206_7216,(1),null);
render.call(null,m_7217,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c_7218], null));

var G__7219 = seq__7202;
var G__7220 = chunk__7203;
var G__7221 = count__7204;
var G__7222 = (i__7205 + (1));
seq__7202 = G__7219;
chunk__7203 = G__7220;
count__7204 = G__7221;
i__7205 = G__7222;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7202);
if(temp__4425__auto__){
var seq__7202__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7202__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__7202__$1);
var G__7223 = cljs.core.chunk_rest.call(null,seq__7202__$1);
var G__7224 = c__5471__auto__;
var G__7225 = cljs.core.count.call(null,c__5471__auto__);
var G__7226 = (0);
seq__7202 = G__7223;
chunk__7203 = G__7224;
count__7204 = G__7225;
i__7205 = G__7226;
continue;
} else {
var i = cljs.core.first.call(null,seq__7202__$1);
var t_7227 = ((i - (1)) * delta);
var angle0_7228 = (t_7227 * ((2) * Math.PI));
var angle1_7229 = (angle0_7228 * s);
var red_7230 = Math.floor((t_7227 * (255)));
var blue_7231 = Math.floor(((1.0 - t_7227) * (255)));
var color_7232 = cljs.pprint.cl_format.call(null,null,"rgb(~d, 0, ~d)",red_7230,blue_7231);
var p0_7233 = pga2d.grassmann.point.call(null,Math.cos(angle0_7228),Math.sin(angle0_7228),(1));
var p1_7234 = pga2d.grassmann.point.call(null,Math.cos(angle1_7229),Math.sin(angle1_7229),(1));
var vec__7207_7235 = (((pga2d.diagram.mndist.call(null,p0_7233,p1_7234) < 1.0E-6))?(function (){var pv = pga2d.grassmann.point.call(null,(- Math.sin(angle0_7228)),Math.cos(angle0_7228),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_7233,pv),"#000000"], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.join.call(null,p0_7233,p1_7234),((doColor)?color_7232:"#000000")], null));
var m_7236 = cljs.core.nth.call(null,vec__7207_7235,(0),null);
var c_7237 = cljs.core.nth.call(null,vec__7207_7235,(1),null);
render.call(null,m_7236,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c_7237], null));

var G__7238 = cljs.core.next.call(null,seq__7202__$1);
var G__7239 = null;
var G__7240 = (0);
var G__7241 = (0);
seq__7202 = G__7238;
chunk__7203 = G__7239;
count__7204 = G__7240;
i__7205 = G__7241;
continue;
}
} else {
return null;
}
}
break;
}
})], null));

//# sourceMappingURL=diagram3.js.map?rel=1455459369353