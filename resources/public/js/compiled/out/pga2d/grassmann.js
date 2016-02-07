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
pga2d.grassmann.multivector_native = (function pga2d$grassmann$multivector_native(p__5779,p__5780,p__5781,p__5782){
var vec__5787 = p__5779;
var s = cljs.core.nth.call(null,vec__5787,(0),null);
var vec__5788 = p__5780;
var a = cljs.core.nth.call(null,vec__5788,(0),null);
var b = cljs.core.nth.call(null,vec__5788,(1),null);
var c = cljs.core.nth.call(null,vec__5788,(2),null);
var vec__5789 = p__5781;
var x = cljs.core.nth.call(null,vec__5789,(0),null);
var y = cljs.core.nth.call(null,vec__5789,(1),null);
var z = cljs.core.nth.call(null,vec__5789,(2),null);
var vec__5790 = p__5782;
var p = cljs.core.nth.call(null,vec__5790,(0),null);
var mv = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null)], null);
var gaz = pga2d.grassmann.gradesAreZero.call(null,mv);
var kvector = cljs.core._EQ_.call(null,(1),cljs.core.frequencies.call(null,gaz).call(null,false));
var rotor = (function (){var and__4656__auto__ = (cljs.core.not.call(null,gaz.call(null,(0)))) || (cljs.core.not.call(null,gaz.call(null,(2))));
if(and__4656__auto__){
var and__4656__auto____$1 = gaz.call(null,(1));
if(cljs.core.truth_(and__4656__auto____$1)){
return gaz.call(null,(3));
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})();
var k = ((kvector)?cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (mv,gaz,kvector,rotor,vec__5787,s,vec__5788,a,b,c,vec__5789,x,y,z,vec__5790,p){
return (function (p1__5778_SHARP_){
return cljs.core.not.call(null,p1__5778_SHARP_.call(null,(1)));
});})(mv,gaz,kvector,rotor,vec__5787,s,vec__5788,a,b,c,vec__5789,x,y,z,vec__5790,p))
,cljs.core.map_indexed.call(null,cljs.core.vector,gaz)))):null);
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"gradesAreZero","gradesAreZero",506224079),gaz,new cljs.core.Keyword(null,"kvector?","kvector?",11224922),kvector,new cljs.core.Keyword(null,"rotor?","rotor?",2032905831),rotor,new cljs.core.Keyword(null,"k","k",-2146297393),k);
});
pga2d.grassmann.multivector = (function pga2d$grassmann$multivector(s,p__5791,p__5792,p){
var vec__5795 = p__5791;
var a = cljs.core.nth.call(null,vec__5795,(0),null);
var b = cljs.core.nth.call(null,vec__5795,(1),null);
var c = cljs.core.nth.call(null,vec__5795,(2),null);
var vec__5796 = p__5792;
var x = cljs.core.nth.call(null,vec__5796,(0),null);
var y = cljs.core.nth.call(null,vec__5796,(1),null);
var z = cljs.core.nth.call(null,vec__5796,(2),null);
return pga2d.grassmann.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,a,b], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
});
pga2d.grassmann.grade = (function pga2d$grassmann$grade(mv,grade__$1){
return pga2d.grassmann.multivector_native.call(null,((cljs.core._EQ_.call(null,grade__$1,(0)))?mv.call(null,new cljs.core.Keyword(null,"0","0",351625802)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)),((cljs.core._EQ_.call(null,grade__$1,(1)))?mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),((cljs.core._EQ_.call(null,grade__$1,(2)))?mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),((cljs.core._EQ_.call(null,grade__$1,(3)))?mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
});
pga2d.grassmann.point = (function pga2d$grassmann$point(var_args){
var args5797 = [];
var len__5726__auto___5800 = arguments.length;
var i__5727__auto___5801 = (0);
while(true){
if((i__5727__auto___5801 < len__5726__auto___5800)){
args5797.push((arguments[i__5727__auto___5801]));

var G__5802 = (i__5727__auto___5801 + (1));
i__5727__auto___5801 = G__5802;
continue;
} else {
}
break;
}

var G__5799 = args5797.length;
switch (G__5799) {
case 1:
return pga2d.grassmann.point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return pga2d.grassmann.point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5797.length)].join('')));

}
});

pga2d.grassmann.point.cljs$core$IFn$_invoke$arity$1 = (function (v){
return pga2d.grassmann.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),v,(0));
});

pga2d.grassmann.point.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return pga2d.grassmann.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),(0));
});

pga2d.grassmann.point.cljs$lang$maxFixedArity = 3;
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
var vec__5805 = mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649));
var c = cljs.core.nth.call(null,vec__5805,(0),null);
var a = cljs.core.nth.call(null,vec__5805,(1),null);
var b = cljs.core.nth.call(null,vec__5805,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
});
pga2d.grassmann.point_from = (function pga2d$grassmann$point_from(mv){
var vec__5807 = mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217));
var z = cljs.core.nth.call(null,vec__5807,(0),null);
var x = cljs.core.nth.call(null,vec__5807,(1),null);
var y = cljs.core.nth.call(null,vec__5807,(2),null);
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
var and__4656__auto__ = cljs.core.get.call(null,mv.call(null,new cljs.core.Keyword(null,"gradesAreZero","gradesAreZero",506224079)),(1));
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.get.call(null,mv.call(null,new cljs.core.Keyword(null,"gradesAreZero","gradesAreZero",506224079)),(3));
} else {
return and__4656__auto__;
}
});
pga2d.grassmann.wedge = (function pga2d$grassmann$wedge(p__5808,p__5809){
var map__5822 = p__5808;
var map__5822__$1 = ((((!((map__5822 == null)))?((((map__5822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5822):map__5822);
var vec__5823 = cljs.core.get.call(null,map__5822__$1,new cljs.core.Keyword(null,"0","0",351625802));
var a = cljs.core.nth.call(null,vec__5823,(0),null);
var vec__5824 = cljs.core.get.call(null,map__5822__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var a0 = cljs.core.nth.call(null,vec__5824,(0),null);
var a1 = cljs.core.nth.call(null,vec__5824,(1),null);
var a2 = cljs.core.nth.call(null,vec__5824,(2),null);
var vec__5825 = cljs.core.get.call(null,map__5822__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var A0 = cljs.core.nth.call(null,vec__5825,(0),null);
var A1 = cljs.core.nth.call(null,vec__5825,(1),null);
var A2 = cljs.core.nth.call(null,vec__5825,(2),null);
var vec__5826 = cljs.core.get.call(null,map__5822__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var A = cljs.core.nth.call(null,vec__5826,(0),null);
var map__5827 = p__5809;
var map__5827__$1 = ((((!((map__5827 == null)))?((((map__5827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5827):map__5827);
var vec__5828 = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"0","0",351625802));
var b = cljs.core.nth.call(null,vec__5828,(0),null);
var vec__5829 = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var b0 = cljs.core.nth.call(null,vec__5829,(0),null);
var b1 = cljs.core.nth.call(null,vec__5829,(1),null);
var b2 = cljs.core.nth.call(null,vec__5829,(2),null);
var vec__5830 = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var B0 = cljs.core.nth.call(null,vec__5830,(0),null);
var B1 = cljs.core.nth.call(null,vec__5830,(1),null);
var B2 = cljs.core.nth.call(null,vec__5830,(2),null);
var vec__5831 = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var B = cljs.core.nth.call(null,vec__5831,(0),null);
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
pga2d.grassmann.add = (function pga2d$grassmann$add(p__5834,p__5835){
var map__5844 = p__5834;
var map__5844__$1 = ((((!((map__5844 == null)))?((((map__5844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5844):map__5844);
var vec__5845 = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"0","0",351625802));
var a = cljs.core.nth.call(null,vec__5845,(0),null);
var lineA = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var pointA = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var vec__5846 = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var A = cljs.core.nth.call(null,vec__5846,(0),null);
var map__5847 = p__5835;
var map__5847__$1 = ((((!((map__5847 == null)))?((((map__5847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5847):map__5847);
var vec__5848 = cljs.core.get.call(null,map__5847__$1,new cljs.core.Keyword(null,"0","0",351625802));
var b = cljs.core.nth.call(null,vec__5848,(0),null);
var lineB = cljs.core.get.call(null,map__5847__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var pointB = cljs.core.get.call(null,map__5847__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var vec__5849 = cljs.core.get.call(null,map__5847__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var B = cljs.core.nth.call(null,vec__5849,(0),null);
return pga2d.grassmann.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a + b)], null),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,lineA,lineB)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,pointA,pointB)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(A + B)], null));
});
pga2d.grassmann.smultiplier = (function pga2d$grassmann$smultiplier(s){
return (function (v){
return cljs.core.map.call(null,(function (p1__5852_SHARP_){
return (s * p1__5852_SHARP_);
}),v);
});
});
pga2d.grassmann.times = (function pga2d$grassmann$times(mv,s){
var smul = pga2d.grassmann.smultiplier.call(null,s);
return pga2d.grassmann.multivector_native.call(null,smul.call(null,mv.call(null,new cljs.core.Keyword(null,"0","0",351625802))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370))));
});
pga2d.grassmann.ga_reverse = (function pga2d$grassmann$ga_reverse(p__5853){
var map__5860 = p__5853;
var map__5860__$1 = ((((!((map__5860 == null)))?((((map__5860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5860):map__5860);
var vec__5861 = cljs.core.get.call(null,map__5860__$1,new cljs.core.Keyword(null,"0","0",351625802));
var s = cljs.core.nth.call(null,vec__5861,(0),null);
var vec__5862 = cljs.core.get.call(null,map__5860__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var c = cljs.core.nth.call(null,vec__5862,(0),null);
var a = cljs.core.nth.call(null,vec__5862,(1),null);
var b = cljs.core.nth.call(null,vec__5862,(2),null);
var vec__5863 = cljs.core.get.call(null,map__5860__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var z = cljs.core.nth.call(null,vec__5863,(0),null);
var x = cljs.core.nth.call(null,vec__5863,(1),null);
var y = cljs.core.nth.call(null,vec__5863,(2),null);
var vec__5864 = cljs.core.get.call(null,map__5860__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var p = cljs.core.nth.call(null,vec__5864,(0),null);
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

//# sourceMappingURL=grassmann.js.map?rel=1454882953935