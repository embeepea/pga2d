// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.grassmann');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.grassmann.zeros_QMARK_ = (function pga2d$grassmann$zeros_QMARK_(a){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,a);
});
pga2d.grassmann.gradesAreZero = (function pga2d$grassmann$gradesAreZero(mv){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"0","0",351625802))),pga2d.grassmann.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649))),pga2d.grassmann.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217))),pga2d.grassmann.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370)))], null);
});
pga2d.grassmann.gradekeys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370)], null);
pga2d.grassmann.multivector_native = (function pga2d$grassmann$multivector_native(p__25356,p__25357,p__25358,p__25359){
var vec__25364 = p__25356;
var s = cljs.core.nth.call(null,vec__25364,(0),null);
var vec__25365 = p__25357;
var a = cljs.core.nth.call(null,vec__25365,(0),null);
var b = cljs.core.nth.call(null,vec__25365,(1),null);
var c = cljs.core.nth.call(null,vec__25365,(2),null);
var vec__25366 = p__25358;
var x = cljs.core.nth.call(null,vec__25366,(0),null);
var y = cljs.core.nth.call(null,vec__25366,(1),null);
var z = cljs.core.nth.call(null,vec__25366,(2),null);
var vec__25367 = p__25359;
var p = cljs.core.nth.call(null,vec__25367,(0),null);
var mv = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null)], null);
var gaz = pga2d.grassmann.gradesAreZero.call(null,mv);
var kvector = cljs.core._EQ_.call(null,(1),cljs.core.frequencies.call(null,gaz).call(null,false));
var rotor = (function (){var and__16840__auto__ = (cljs.core.not.call(null,gaz.call(null,(0)))) || (cljs.core.not.call(null,gaz.call(null,(2))));
if(and__16840__auto__){
var and__16840__auto____$1 = gaz.call(null,(1));
if(cljs.core.truth_(and__16840__auto____$1)){
return gaz.call(null,(3));
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
})();
var k = ((kvector)?cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (mv,gaz,kvector,rotor,vec__25364,s,vec__25365,a,b,c,vec__25366,x,y,z,vec__25367,p){
return (function (p1__25355_SHARP_){
return cljs.core.not.call(null,p1__25355_SHARP_.call(null,(1)));
});})(mv,gaz,kvector,rotor,vec__25364,s,vec__25365,a,b,c,vec__25366,x,y,z,vec__25367,p))
,cljs.core.map_indexed.call(null,cljs.core.vector,gaz)))):null);
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"gradesAreZero","gradesAreZero",506224079),gaz,new cljs.core.Keyword(null,"kvector?","kvector?",11224922),kvector,new cljs.core.Keyword(null,"rotor?","rotor?",2032905831),rotor,new cljs.core.Keyword(null,"k","k",-2146297393),k);
});
pga2d.grassmann.multivector = (function pga2d$grassmann$multivector(s,p__25368,p__25369,p){
var vec__25372 = p__25368;
var a = cljs.core.nth.call(null,vec__25372,(0),null);
var b = cljs.core.nth.call(null,vec__25372,(1),null);
var c = cljs.core.nth.call(null,vec__25372,(2),null);
var vec__25373 = p__25369;
var x = cljs.core.nth.call(null,vec__25373,(0),null);
var y = cljs.core.nth.call(null,vec__25373,(1),null);
var z = cljs.core.nth.call(null,vec__25373,(2),null);
return pga2d.grassmann.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,a,b], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
});
pga2d.grassmann.grade = (function pga2d$grassmann$grade(mv,grade__$1){
return pga2d.grassmann.multivector_native.call(null,((cljs.core._EQ_.call(null,grade__$1,(0)))?mv.call(null,new cljs.core.Keyword(null,"0","0",351625802)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)),((cljs.core._EQ_.call(null,grade__$1,(1)))?mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),((cljs.core._EQ_.call(null,grade__$1,(2)))?mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),((cljs.core._EQ_.call(null,grade__$1,(3)))?mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
});
pga2d.grassmann.point = (function pga2d$grassmann$point(x,y,z){
return pga2d.grassmann.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),(0));
});
pga2d.grassmann.line = (function pga2d$grassmann$line(a,b,c){
return pga2d.grassmann.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0));
});
pga2d.grassmann.scalar = (function pga2d$grassmann$scalar(s){
return pga2d.grassmann.multivector.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0));
});
pga2d.grassmann.pseudoscalar = (function pga2d$grassmann$pseudoscalar(p){
return pga2d.grassmann.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p);
});
pga2d.grassmann.scalar_from = (function pga2d$grassmann$scalar_from(mv){
return cljs.core.get.call(null,mv.call(null,new cljs.core.Keyword(null,"0","0",351625802)),(0));
});
pga2d.grassmann.pseudoscalar_from = (function pga2d$grassmann$pseudoscalar_from(mv){
return cljs.core.get.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370)),(0));
});
pga2d.grassmann.line_from = (function pga2d$grassmann$line_from(mv){
var vec__25375 = mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649));
var c = cljs.core.nth.call(null,vec__25375,(0),null);
var a = cljs.core.nth.call(null,vec__25375,(1),null);
var b = cljs.core.nth.call(null,vec__25375,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
});
pga2d.grassmann.point_from = (function pga2d$grassmann$point_from(mv){
var vec__25377 = mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217));
var z = cljs.core.nth.call(null,vec__25377,(0),null);
var x = cljs.core.nth.call(null,vec__25377,(1),null);
var y = cljs.core.nth.call(null,vec__25377,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
pga2d.grassmann.scalar_QMARK_ = (function pga2d$grassmann$scalar_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(0));
});
pga2d.grassmann.line_QMARK_ = (function pga2d$grassmann$line_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(1));
});
pga2d.grassmann.point_QMARK_ = (function pga2d$grassmann$point_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(2));
});
pga2d.grassmann.pseudoscalar_QMARK_ = (function pga2d$grassmann$pseudoscalar_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(3));
});
pga2d.grassmann.even_subalg = (function pga2d$grassmann$even_subalg(mv){
var and__16840__auto__ = cljs.core.get.call(null,mv.call(null,new cljs.core.Keyword(null,"gradesAreZero","gradesAreZero",506224079)),(1));
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.get.call(null,mv.call(null,new cljs.core.Keyword(null,"gradesAreZero","gradesAreZero",506224079)),(3));
} else {
return and__16840__auto__;
}
});
pga2d.grassmann.wedge = (function pga2d$grassmann$wedge(p__25378,p__25379){
var map__25392 = p__25378;
var map__25392__$1 = ((((!((map__25392 == null)))?((((map__25392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25392):map__25392);
var vec__25393 = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"0","0",351625802));
var a = cljs.core.nth.call(null,vec__25393,(0),null);
var vec__25394 = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var a0 = cljs.core.nth.call(null,vec__25394,(0),null);
var a1 = cljs.core.nth.call(null,vec__25394,(1),null);
var a2 = cljs.core.nth.call(null,vec__25394,(2),null);
var vec__25395 = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var A0 = cljs.core.nth.call(null,vec__25395,(0),null);
var A1 = cljs.core.nth.call(null,vec__25395,(1),null);
var A2 = cljs.core.nth.call(null,vec__25395,(2),null);
var vec__25396 = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var A = cljs.core.nth.call(null,vec__25396,(0),null);
var map__25397 = p__25379;
var map__25397__$1 = ((((!((map__25397 == null)))?((((map__25397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25397):map__25397);
var vec__25398 = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"0","0",351625802));
var b = cljs.core.nth.call(null,vec__25398,(0),null);
var vec__25399 = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var b0 = cljs.core.nth.call(null,vec__25399,(0),null);
var b1 = cljs.core.nth.call(null,vec__25399,(1),null);
var b2 = cljs.core.nth.call(null,vec__25399,(2),null);
var vec__25400 = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var B0 = cljs.core.nth.call(null,vec__25400,(0),null);
var B1 = cljs.core.nth.call(null,vec__25400,(1),null);
var B2 = cljs.core.nth.call(null,vec__25400,(2),null);
var vec__25401 = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var B = cljs.core.nth.call(null,vec__25401,(0),null);
var r = (a * b);
var r0 = ((a0 * b) + (a * b0));
var r1 = ((a1 * b) + (a * b1));
var r2 = ((a2 * b) + (a * b2));
var R0 = ((((A0 * b) + (a * B0)) + (- (a2 * b1))) + (a1 * b2));
var R1 = ((((A1 * b) + (a2 * b0)) + (a * B1)) + (- (a0 * b2)));
var R2 = ((((A2 * b) + (- (a1 * b0))) + (a0 * b1)) + (a * B2));
var R = ((((((((A * b) + (a * B)) + (A0 * b0)) + (a0 * B0)) + (A1 * b1)) + (a1 * B1)) + (A2 * b2)) + (a2 * B2));
return pga2d.grassmann.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r0,r1,r2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [R0,R1,R2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [R], null));
});
pga2d.grassmann.dual = (function pga2d$grassmann$dual(mv){
return pga2d.grassmann.multivector_native.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370)),mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217)),mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649)),mv.call(null,new cljs.core.Keyword(null,"0","0",351625802)));
});
pga2d.grassmann.join = (function pga2d$grassmann$join(mv1,mv2){
return pga2d.grassmann.dual.call(null,pga2d.grassmann.wedge.call(null,pga2d.grassmann.dual.call(null,mv1),pga2d.grassmann.dual.call(null,mv2)));
});
pga2d.grassmann.add = (function pga2d$grassmann$add(p__25404,p__25405){
var map__25414 = p__25404;
var map__25414__$1 = ((((!((map__25414 == null)))?((((map__25414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25414):map__25414);
var vec__25415 = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"0","0",351625802));
var a = cljs.core.nth.call(null,vec__25415,(0),null);
var lineA = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var pointA = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var vec__25416 = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var A = cljs.core.nth.call(null,vec__25416,(0),null);
var map__25417 = p__25405;
var map__25417__$1 = ((((!((map__25417 == null)))?((((map__25417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25417):map__25417);
var vec__25418 = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"0","0",351625802));
var b = cljs.core.nth.call(null,vec__25418,(0),null);
var lineB = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var pointB = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var vec__25419 = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var B = cljs.core.nth.call(null,vec__25419,(0),null);
return pga2d.grassmann.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a + b)], null),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,lineA,lineB)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,pointA,pointB)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(A + B)], null));
});
pga2d.grassmann.smultiplier = (function pga2d$grassmann$smultiplier(s){
return (function (v){
return cljs.core.map.call(null,(function (p1__25422_SHARP_){
return (s * p1__25422_SHARP_);
}),v);
});
});
pga2d.grassmann.times = (function pga2d$grassmann$times(mv,s){
var smul = pga2d.grassmann.smultiplier.call(null,s);
return pga2d.grassmann.multivector_native.call(null,smul.call(null,mv.call(null,new cljs.core.Keyword(null,"0","0",351625802))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370))));
});
pga2d.grassmann.ga_reverse = (function pga2d$grassmann$ga_reverse(p__25423){
var map__25430 = p__25423;
var map__25430__$1 = ((((!((map__25430 == null)))?((((map__25430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25430):map__25430);
var vec__25431 = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"0","0",351625802));
var s = cljs.core.nth.call(null,vec__25431,(0),null);
var vec__25432 = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var c = cljs.core.nth.call(null,vec__25432,(0),null);
var a = cljs.core.nth.call(null,vec__25432,(1),null);
var b = cljs.core.nth.call(null,vec__25432,(2),null);
var vec__25433 = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var z = cljs.core.nth.call(null,vec__25433,(0),null);
var x = cljs.core.nth.call(null,vec__25433,(1),null);
var y = cljs.core.nth.call(null,vec__25433,(2),null);
var vec__25434 = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var p = cljs.core.nth.call(null,vec__25434,(0),null);
return pga2d.grassmann.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,a,b], null),cljs.core.map.call(null,cljs.core._,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- p)], null));
});
pga2d.grassmann.chop_vector = (function pga2d$grassmann$chop_vector(v,tol){
return cljs.core.map.call(null,(function (x){
if((tol > Math.abs(x))){
return (0);
} else {
return x;
}
}),v);
});
pga2d.grassmann.chop = (function pga2d$grassmann$chop(mv,tol){
return pga2d.grassmann.multivector_native.call(null,pga2d.grassmann.chop_vector.call(null,mv.call(null,new cljs.core.Keyword(null,"0","0",351625802)),tol),pga2d.grassmann.chop_vector.call(null,mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649)),tol),pga2d.grassmann.chop_vector.call(null,mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217)),tol),pga2d.grassmann.chop_vector.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370)),tol));
});

//# sourceMappingURL=grassmann.js.map?rel=1453218276938