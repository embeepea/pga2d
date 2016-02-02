// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2a');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),new cljs.core.Keyword(null,"dragables","dragables",1377703931),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"A0","A0",452449387),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,-1.0,1.0,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"A1","A1",-514669796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,0.6,0.2,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"B0","B0",-1996678931),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,-0.6,0.0,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#666666"], null),new cljs.core.Keyword(null,"B1","B1",-1556607540),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,1.0,1.2,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#666666"], null)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable){
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

var seq__6059_6063 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__6060_6064 = null;
var count__6061_6065 = (0);
var i__6062_6066 = (0);
while(true){
if((i__6062_6066 < count__6061_6065)){
var t_6067 = cljs.core._nth.call(null,chunk__6060_6064,i__6062_6066);
var rotor_6068 = g.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6067,h);
render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6068).call(null,m0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6068).call(null,A0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6069 = seq__6059_6063;
var G__6070 = chunk__6060_6064;
var G__6071 = count__6061_6065;
var G__6072 = (i__6062_6066 + (1));
seq__6059_6063 = G__6069;
chunk__6060_6064 = G__6070;
count__6061_6065 = G__6071;
i__6062_6066 = G__6072;
continue;
} else {
var temp__4425__auto___6073 = cljs.core.seq.call(null,seq__6059_6063);
if(temp__4425__auto___6073){
var seq__6059_6074__$1 = temp__4425__auto___6073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6059_6074__$1)){
var c__5471__auto___6075 = cljs.core.chunk_first.call(null,seq__6059_6074__$1);
var G__6076 = cljs.core.chunk_rest.call(null,seq__6059_6074__$1);
var G__6077 = c__5471__auto___6075;
var G__6078 = cljs.core.count.call(null,c__5471__auto___6075);
var G__6079 = (0);
seq__6059_6063 = G__6076;
chunk__6060_6064 = G__6077;
count__6061_6065 = G__6078;
i__6062_6066 = G__6079;
continue;
} else {
var t_6080 = cljs.core.first.call(null,seq__6059_6074__$1);
var rotor_6081 = g.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_6080,h);
render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6081).call(null,m0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_6081).call(null,A0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__6082 = cljs.core.next.call(null,seq__6059_6074__$1);
var G__6083 = null;
var G__6084 = (0);
var G__6085 = (0);
seq__6059_6063 = G__6082;
chunk__6060_6064 = G__6083;
count__6061_6065 = G__6084;
i__6062_6066 = G__6085;
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

//# sourceMappingURL=diagram2a.js.map?rel=1454386653914