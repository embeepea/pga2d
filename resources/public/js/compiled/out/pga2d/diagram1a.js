// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram1a');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
goog.require('pga2d.diagram');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.diagram.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.Keyword(null,"dragables","dragables",1377703931),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p0","p0",1556537807),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,(0),(0),(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mv","mv",-493069085),pga2d.grassmann.point.call(null,0.5,-0.2,(1)),new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (g,cv,render,dragable){
var p0 = dragable.call(null,new cljs.core.Keyword(null,"p0","p0",1556537807));
var p1 = dragable.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954));
var l01 = pga2d.grassmann.join.call(null,p0,p1);
cv.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

return render.call(null,l01,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));
})], null));

//# sourceMappingURL=diagram1a.js.map?rel=1453330326528