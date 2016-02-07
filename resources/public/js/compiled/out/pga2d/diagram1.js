// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram1');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
var g_6057 = pga2d.clifford.ga.call(null,(0));
var cv_6058 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
var render_6059 = pga2d.canvas.canvas_render.call(null,cv_6058,g_6057);
var p0_6060 = pga2d.grassmann.point.call(null,-0.5,0.2,(1));
var p1_6061 = pga2d.grassmann.point.call(null,0.5,-0.2,(1));
var l01_6062 = pga2d.grassmann.join.call(null,p0_6060,p1_6061);
cv_6058.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

render_6059.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p0_6060,p1_6061], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null));

render_6059.call(null,l01_6062,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));

//# sourceMappingURL=diagram1.js.map?rel=1454882954622