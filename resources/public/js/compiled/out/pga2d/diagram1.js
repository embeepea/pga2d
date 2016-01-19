// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram1');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram1.g = pga2d.clifford.ga.call(null,(0));
if(typeof pga2d.diagram1.render !== 'undefined'){
} else {
pga2d.diagram1.render = (function (){var method_table__17765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"pga2d.diagram1","render"),((function (method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__,hierarchy__17769__auto__){
return (function (cv,g,mv){
return mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393));
});})(method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__,hierarchy__17769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17769__auto__,method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__));
})();
}
cljs.core._add_method.call(null,pga2d.diagram1.render,(2),(function (cv,g,mv){
var p = pga2d.grassmann.point_from.call(null,g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,mv));
return cv.call(null,new cljs.core.Keyword(null,"draw-point","draw-point",1918226496)).call(null,p,(5));
}));
cljs.core._add_method.call(null,pga2d.diagram1.render,(1),(function (cv,g,mv){
return cv.call(null,new cljs.core.Keyword(null,"draw-line","draw-line",1278325815)).call(null,mv);
}));
var cv_25585 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
var g_25586 = pga2d.clifford.ga.call(null,(0));
var p0_25587 = pga2d.grassmann.point.call(null,-0.5,0.2,(1));
var p1_25588 = pga2d.grassmann.point.call(null,0.5,-0.2,(1));
var l01_25589 = pga2d.grassmann.join.call(null,p0_25587,p1_25588);
cv_25585.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

cv_25585.call(null,new cljs.core.Keyword(null,"set-color","set-color",-1342268539)).call(null,"#ff0000");

pga2d.diagram1.render.call(null,cv_25585,g_25586,p0_25587);

pga2d.diagram1.render.call(null,cv_25585,g_25586,p1_25588);

cv_25585.call(null,new cljs.core.Keyword(null,"set-color","set-color",-1342268539)).call(null,"#00ffff");

pga2d.diagram1.render.call(null,cv_25585,g_25586,l01_25589);

//# sourceMappingURL=diagram1.js.map?rel=1453218277506