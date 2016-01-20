// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2a');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),new cljs.core.Keyword(null,"dragables","dragables",1377703931),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"A0","A0",452449387),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,-1.0,1.0,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"A1","A1",-514669796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,0.6,0.2,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"B0","B0",-1996678931),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,-0.2,-1.0,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#666666"], null),new cljs.core.Keyword(null,"B1","B1",-1556607540),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,0.2,-1.0,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#666666"], null)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable){
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var A0 = dragable.call(null,new cljs.core.Keyword(null,"A0","A0",452449387));
var A1 = dragable.call(null,new cljs.core.Keyword(null,"A1","A1",-514669796));
var B0 = dragable.call(null,new cljs.core.Keyword(null,"B0","B0",-1996678931));
var B1 = dragable.call(null,new cljs.core.Keyword(null,"B1","B1",-1556607540));
var m0 = N.call(null,pga2d.grassmann.join.call(null,B0,A0));
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

var seq__18014_18018 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__18015_18019 = null;
var count__18016_18020 = (0);
var i__18017_18021 = (0);
while(true){
if((i__18017_18021 < count__18016_18020)){
var t_18022 = cljs.core._nth.call(null,chunk__18015_18019,i__18017_18021);
var rotor_18023 = g.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_18022,h);
render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_18023).call(null,m0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_18023).call(null,A0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__18024 = seq__18014_18018;
var G__18025 = chunk__18015_18019;
var G__18026 = count__18016_18020;
var G__18027 = (i__18017_18021 + (1));
seq__18014_18018 = G__18024;
chunk__18015_18019 = G__18025;
count__18016_18020 = G__18026;
i__18017_18021 = G__18027;
continue;
} else {
var temp__4425__auto___18028 = cljs.core.seq.call(null,seq__18014_18018);
if(temp__4425__auto___18028){
var seq__18014_18029__$1 = temp__4425__auto___18028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18014_18029__$1)){
var c__17655__auto___18030 = cljs.core.chunk_first.call(null,seq__18014_18029__$1);
var G__18031 = cljs.core.chunk_rest.call(null,seq__18014_18029__$1);
var G__18032 = c__17655__auto___18030;
var G__18033 = cljs.core.count.call(null,c__17655__auto___18030);
var G__18034 = (0);
seq__18014_18018 = G__18031;
chunk__18015_18019 = G__18032;
count__18016_18020 = G__18033;
i__18017_18021 = G__18034;
continue;
} else {
var t_18035 = cljs.core.first.call(null,seq__18014_18029__$1);
var rotor_18036 = g.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,t_18035,h);
render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_18036).call(null,m0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render.call(null,pga2d.grassmann.chop.call(null,g.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_18036).call(null,A0),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__18037 = cljs.core.next.call(null,seq__18014_18029__$1);
var G__18038 = null;
var G__18039 = (0);
var G__18040 = (0);
seq__18014_18018 = G__18037;
chunk__18015_18019 = G__18038;
count__18016_18020 = G__18039;
i__18017_18021 = G__18040;
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

//# sourceMappingURL=diagram2a.js.map?rel=1453330325908