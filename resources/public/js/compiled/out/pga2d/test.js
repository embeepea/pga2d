// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.test');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.test.g = pga2d.clifford.ga.call(null,(0));
pga2d.test.p0 = pga2d.grassmann.point.call(null,(0),(0),(1));
pga2d.test.p1 = pga2d.grassmann.point.call(null,(1),(0),(0));
pga2d.test.p2 = pga2d.grassmann.point.call(null,(0),(1),(0));
pga2d.test.v0 = pga2d.grassmann.point.call(null,(2),(3),(0));
pga2d.test.m0 = pga2d.grassmann.line.call(null,(0),(0),(1));
pga2d.test.m1 = pga2d.grassmann.line.call(null,(1),(0),(0));
pga2d.test.m2 = pga2d.grassmann.line.call(null,(0),(1),(0));
pga2d.test.m3 = pga2d.grassmann.line.call(null,.6,.8,(1));
pga2d.test.mv1 = pga2d.grassmann.multivector.call(null,(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),(7));
pga2d.test.L1 = pga2d.grassmann.line.call(null,(1),(0),(0));
pga2d.test.L2 = pga2d.grassmann.line.call(null,(0),(1),(0));
pga2d.test.L3 = pga2d.grassmann.line.call(null,(1),(0),(-3));
pga2d.test.p12 = pga2d.grassmann.grade.call(null,pga2d.test.g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,pga2d.test.L1,pga2d.test.L2),(2));
pga2d.test.p13 = pga2d.grassmann.grade.call(null,pga2d.test.g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,pga2d.test.L1,pga2d.test.L3),(2));
pga2d.test.ans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.test.g.call(null,new cljs.core.Keyword(null,"norm-squared","norm-squared",-2019462250)).call(null,pga2d.test.p12),pga2d.test.g.call(null,new cljs.core.Keyword(null,"norm-squared","norm-squared",-2019462250)).call(null,pga2d.test.p13)], null);
pga2d.test.line_line_intersection = (function pga2d$test$line_line_intersection(p__6009,p__6010){
var vec__6013 = p__6009;
var a0 = cljs.core.nth.call(null,vec__6013,(0),null);
var b0 = cljs.core.nth.call(null,vec__6013,(1),null);
var c0 = cljs.core.nth.call(null,vec__6013,(2),null);
var vec__6014 = p__6010;
var a1 = cljs.core.nth.call(null,vec__6014,(0),null);
var b1 = cljs.core.nth.call(null,vec__6014,(1),null);
var c1 = cljs.core.nth.call(null,vec__6014,(2),null);
var l1 = pga2d.grassmann.line.call(null,a0,b0,c0);
var l2 = pga2d.grassmann.line.call(null,a1,b1,c1);
var nl1 = pga2d.test.g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,l1);
var nl2 = pga2d.test.g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,l2);
var p = pga2d.test.g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,nl1,nl2);
var p2 = pga2d.grassmann.grade.call(null,p,(2));
var np2 = pga2d.test.g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,p2);
if(cljs.core.truth_(pga2d.clifford.ideal_QMARK_.call(null,np2,pga2d.test.g.call(null,new cljs.core.Keyword(null,"ordinary-norm-squared","ordinary-norm-squared",-1067173635)).call(null,np2)))){
return pga2d.test.g.call(null,new cljs.core.Keyword(null,"norm","norm",-1440124407)).call(null,p2);
} else {
return pga2d.grassmann.point_from.call(null,pga2d.test.g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,p2));
}
});
pga2d.test.line_line_angle = (function pga2d$test$line_line_angle(p__6015,p__6016){
var vec__6019 = p__6015;
var a0 = cljs.core.nth.call(null,vec__6019,(0),null);
var b0 = cljs.core.nth.call(null,vec__6019,(1),null);
var c0 = cljs.core.nth.call(null,vec__6019,(2),null);
var vec__6020 = p__6016;
var a1 = cljs.core.nth.call(null,vec__6020,(0),null);
var b1 = cljs.core.nth.call(null,vec__6020,(1),null);
var c1 = cljs.core.nth.call(null,vec__6020,(2),null);
return pga2d.test.g.call(null,new cljs.core.Keyword(null,"measure-of-rotor","measure-of-rotor",-1061608855)).call(null,pga2d.test.g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,pga2d.grassmann.line.call(null,a0,b0,c0),pga2d.grassmann.line.call(null,a1,b1,c1)));
});
if(typeof pga2d.test.render !== 'undefined'){
} else {
pga2d.test.render = (function (){var method_table__5581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"pga2d.test","render"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (cv,g,mv){
return mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393));
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.core._add_method.call(null,pga2d.test.render,(2),(function (cv,g,mv){
var p = pga2d.grassmann.point_from.call(null,g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,mv));
return cv.call(null,new cljs.core.Keyword(null,"draw-point","draw-point",1918226496)).call(null,p,(5));
}));
cljs.core._add_method.call(null,pga2d.test.render,(1),(function (cv,g,mv){
return cv.call(null,new cljs.core.Keyword(null,"draw-line","draw-line",1278325815)).call(null,mv);
}));
var cv_6021 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
cv_6021.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

cv_6021.call(null,new cljs.core.Keyword(null,"set-color","set-color",-1342268539)).call(null,"#ffffff");

var g_6022 = pga2d.clifford.ga.call(null,(0));
var p0_6023 = pga2d.grassmann.point.call(null,-1.0,(0),(1));
var p1_6024 = pga2d.grassmann.point.call(null,0.5,0.5,(1));
var l01_6025 = pga2d.grassmann.join.call(null,p0_6023,p1_6024);
pga2d.test.render.call(null,cv_6021,g_6022,p0_6023);

pga2d.test.render.call(null,cv_6021,g_6022,p1_6024);

cv_6021.call(null,new cljs.core.Keyword(null,"set-color","set-color",-1342268539)).call(null,"#ffff00");

pga2d.test.render.call(null,cv_6021,g_6022,l01_6025);
pga2d.test.compareGP = (function (){var l0 = pga2d.grassmann.line.call(null,(1),(0),(0));
var l1 = pga2d.grassmann.line.call(null,(1),(0),(-3));
var l2 = pga2d.grassmann.line.call(null,(0),(1),(0));
var gp02 = pga2d.test.g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,l0,l2);
var gp01 = pga2d.test.g.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,l0,pga2d.test.g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),l1));
var pt02 = pga2d.grassmann.grade.call(null,gp02,(2));
var pt01 = pga2d.grassmann.grade.call(null,gp01,(2));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pt02,pt01,pga2d.test.g.call(null,new cljs.core.Keyword(null,"norm-squared","norm-squared",-2019462250)).call(null,pt02),pga2d.test.g.call(null,new cljs.core.Keyword(null,"norm-squared","norm-squared",-2019462250)).call(null,pt01)], null);
})();
cljs.core.println.call(null,"test");

//# sourceMappingURL=test.js.map?rel=1454882954552