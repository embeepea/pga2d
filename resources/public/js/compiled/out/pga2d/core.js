// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.core.sp = (function pga2d$core$sp(as){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__20050_SHARP_){
return cljs.core.apply.call(null,cljs.core._STAR_,p1__20050_SHARP_);
}),as));
});
pga2d.core.sd = (function pga2d$core$sd(var_args){
var args20051 = [];
var len__17875__auto___20054 = arguments.length;
var i__17876__auto___20055 = (0);
while(true){
if((i__17876__auto___20055 < len__17875__auto___20054)){
args20051.push((arguments[i__17876__auto___20055]));

var G__20056 = (i__17876__auto___20055 + (1));
i__17876__auto___20055 = G__20056;
continue;
} else {
}
break;
}

var G__20053 = args20051.length;
switch (G__20053) {
case 2:
return pga2d.core.sd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return pga2d.core.sd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20051.length)].join('')));

}
});

pga2d.core.sd.cljs$core$IFn$_invoke$arity$2 = (function (as,bs){
return (pga2d.core.sp.call(null,as) - pga2d.core.sp.call(null,bs));
});

pga2d.core.sd.cljs$core$IFn$_invoke$arity$1 = (function (as){
return pga2d.core.sp.call(null,as);
});

pga2d.core.sd.cljs$lang$maxFixedArity = 2;
pga2d.core.zeros_QMARK_ = (function pga2d$core$zeros_QMARK_(a){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,a);
});
pga2d.core.gradesAreZero = (function pga2d$core$gradesAreZero(mv){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.core.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"0","0",351625802))),pga2d.core.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649))),pga2d.core.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217))),pga2d.core.zeros_QMARK_.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370)))], null);
});
pga2d.core.multivector_native = (function pga2d$core$multivector_native(p__20059,p__20060,p__20061,p__20062){
var vec__20067 = p__20059;
var s = cljs.core.nth.call(null,vec__20067,(0),null);
var vec__20068 = p__20060;
var a = cljs.core.nth.call(null,vec__20068,(0),null);
var b = cljs.core.nth.call(null,vec__20068,(1),null);
var c = cljs.core.nth.call(null,vec__20068,(2),null);
var vec__20069 = p__20061;
var x = cljs.core.nth.call(null,vec__20069,(0),null);
var y = cljs.core.nth.call(null,vec__20069,(1),null);
var z = cljs.core.nth.call(null,vec__20069,(2),null);
var vec__20070 = p__20062;
var p = cljs.core.nth.call(null,vec__20070,(0),null);
var mv = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null)], null);
var gaz = pga2d.core.gradesAreZero.call(null,mv);
var kvector = cljs.core._EQ_.call(null,(1),cljs.core.frequencies.call(null,gaz).call(null,false));
var k = ((kvector)?cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (mv,gaz,kvector,vec__20067,s,vec__20068,a,b,c,vec__20069,x,y,z,vec__20070,p){
return (function (p1__20058_SHARP_){
return cljs.core.not.call(null,p1__20058_SHARP_.call(null,(1)));
});})(mv,gaz,kvector,vec__20067,s,vec__20068,a,b,c,vec__20069,x,y,z,vec__20070,p))
,cljs.core.map_indexed.call(null,cljs.core.vector,gaz)))):null);
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"gradesAreZero","gradesAreZero",506224079),gaz,new cljs.core.Keyword(null,"kvector?","kvector?",11224922),kvector,new cljs.core.Keyword(null,"k","k",-2146297393),k);
});
pga2d.core.multivector = (function pga2d$core$multivector(s,p__20071,p__20072,p){
var vec__20075 = p__20071;
var a = cljs.core.nth.call(null,vec__20075,(0),null);
var b = cljs.core.nth.call(null,vec__20075,(1),null);
var c = cljs.core.nth.call(null,vec__20075,(2),null);
var vec__20076 = p__20072;
var x = cljs.core.nth.call(null,vec__20076,(0),null);
var y = cljs.core.nth.call(null,vec__20076,(1),null);
var z = cljs.core.nth.call(null,vec__20076,(2),null);
return pga2d.core.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,a,b], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
});
pga2d.core.gp = (function pga2d$core$gp(sig,p__20077,p__20078){
var map__20091 = p__20077;
var map__20091__$1 = ((((!((map__20091 == null)))?((((map__20091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20091):map__20091);
var vec__20092 = cljs.core.get.call(null,map__20091__$1,new cljs.core.Keyword(null,"0","0",351625802));
var a = cljs.core.nth.call(null,vec__20092,(0),null);
var vec__20093 = cljs.core.get.call(null,map__20091__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var a0 = cljs.core.nth.call(null,vec__20093,(0),null);
var a1 = cljs.core.nth.call(null,vec__20093,(1),null);
var a2 = cljs.core.nth.call(null,vec__20093,(2),null);
var vec__20094 = cljs.core.get.call(null,map__20091__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var A0 = cljs.core.nth.call(null,vec__20094,(0),null);
var A1 = cljs.core.nth.call(null,vec__20094,(1),null);
var A2 = cljs.core.nth.call(null,vec__20094,(2),null);
var vec__20095 = cljs.core.get.call(null,map__20091__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var A = cljs.core.nth.call(null,vec__20095,(0),null);
var map__20096 = p__20078;
var map__20096__$1 = ((((!((map__20096 == null)))?((((map__20096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20096):map__20096);
var vec__20097 = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword(null,"0","0",351625802));
var b = cljs.core.nth.call(null,vec__20097,(0),null);
var vec__20098 = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var b0 = cljs.core.nth.call(null,vec__20098,(0),null);
var b1 = cljs.core.nth.call(null,vec__20098,(1),null);
var b2 = cljs.core.nth.call(null,vec__20098,(2),null);
var vec__20099 = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var B0 = cljs.core.nth.call(null,vec__20099,(0),null);
var B1 = cljs.core.nth.call(null,vec__20099,(1),null);
var B2 = cljs.core.nth.call(null,vec__20099,(2),null);
var vec__20100 = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var B = cljs.core.nth.call(null,vec__20100,(0),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"0","0",351625802),(((((a * b) + (- (A0 * B0))) + (a1 * b1)) + (a2 * b2)) + (sig * ((((- (A * B)) + (a0 * b0)) + (- (A1 * B1))) + (- (A2 * B2))))),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((((((a0 * b) + (- (A0 * B))) + (a * b0)) + (- (A * B0))) + (A2 * b1)) + (a2 * B1)) + (- (A1 * b2))) + (- (a1 * B2))),(((((a1 * b) + (- (a2 * B0))) + (a * b1)) + (A0 * b2)) + (sig * ((((- (A1 * B)) + (- (A2 * b0))) + (- (A * B1))) + (a0 * B2)))),(((((a2 * b) + (a1 * B0)) + (- (A0 * b1))) + (a * b2)) + (sig * ((((- (A2 * B)) + (A1 * b0)) + (- (a0 * B1))) + (- (A * B2)))))], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((A0 * b) + (a * B0)) + (- (a2 * b1))) + (a1 * b2)) + (sig * ((((a0 * B) + (A * b0)) + (A2 * B1)) + (- (A1 * B2))))),((((((((A1 * b) + (a1 * B)) + (a2 * b0)) + (- (A2 * B0))) + (A * b1)) + (a * B1)) + (- (a0 * b2))) + (A0 * B2)),((((((((A2 * b) + (a2 * B)) + (- (a1 * b0))) + (A1 * B0)) + (a0 * b1)) + (- (A0 * B1))) + (A * b2)) + (a * B2))], null),new cljs.core.Keyword(null,"3","3",2097825370),((((((((A * b) + (a * B)) + (A0 * b0)) + (a0 * B0)) + (A1 * b1)) + (a1 * B1)) + (A2 * b2)) + (a2 * B2))], null);
});
pga2d.core.gp2 = (function pga2d$core$gp2(sig,p__20103,p__20104){
var map__20117 = p__20103;
var map__20117__$1 = ((((!((map__20117 == null)))?((((map__20117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20117):map__20117);
var vec__20118 = cljs.core.get.call(null,map__20117__$1,new cljs.core.Keyword(null,"0","0",351625802));
var a = cljs.core.nth.call(null,vec__20118,(0),null);
var vec__20119 = cljs.core.get.call(null,map__20117__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var a0 = cljs.core.nth.call(null,vec__20119,(0),null);
var a1 = cljs.core.nth.call(null,vec__20119,(1),null);
var a2 = cljs.core.nth.call(null,vec__20119,(2),null);
var vec__20120 = cljs.core.get.call(null,map__20117__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var A0 = cljs.core.nth.call(null,vec__20120,(0),null);
var A1 = cljs.core.nth.call(null,vec__20120,(1),null);
var A2 = cljs.core.nth.call(null,vec__20120,(2),null);
var vec__20121 = cljs.core.get.call(null,map__20117__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var A = cljs.core.nth.call(null,vec__20121,(0),null);
var map__20122 = p__20104;
var map__20122__$1 = ((((!((map__20122 == null)))?((((map__20122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20122):map__20122);
var vec__20123 = cljs.core.get.call(null,map__20122__$1,new cljs.core.Keyword(null,"0","0",351625802));
var b = cljs.core.nth.call(null,vec__20123,(0),null);
var vec__20124 = cljs.core.get.call(null,map__20122__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var b0 = cljs.core.nth.call(null,vec__20124,(0),null);
var b1 = cljs.core.nth.call(null,vec__20124,(1),null);
var b2 = cljs.core.nth.call(null,vec__20124,(2),null);
var vec__20125 = cljs.core.get.call(null,map__20122__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var B0 = cljs.core.nth.call(null,vec__20125,(0),null);
var B1 = cljs.core.nth.call(null,vec__20125,(1),null);
var B2 = cljs.core.nth.call(null,vec__20125,(2),null);
var vec__20126 = cljs.core.get.call(null,map__20122__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var B = cljs.core.nth.call(null,vec__20126,(0),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"0","0",351625802),(pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B0], null)], null)) + (sig * pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B2], null)], null)))),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B1], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B2], null)], null)),(pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B0], null)], null)) + (sig * pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B2], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B1], null)], null)))),(pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b1], null)], null)) + (sig * pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B2], null)], null))))], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b1], null)], null)) + (sig * pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B2], null)], null)))),pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b2], null)], null)),pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B1], null)], null))], null),new cljs.core.Keyword(null,"3","3",2097825370),pga2d.core.sd.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B2], null)], null))], null);
});
pga2d.core.point = (function pga2d$core$point(x,y,z){
return pga2d.core.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),(0));
});
pga2d.core.line = (function pga2d$core$line(a,b,c){
return pga2d.core.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0));
});
pga2d.core.scalar = (function pga2d$core$scalar(s){
return pga2d.core.multivector.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0));
});
pga2d.core.pseudoscalar = (function pga2d$core$pseudoscalar(p){
return pga2d.core.multivector.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p);
});
pga2d.core.polarize = (function pga2d$core$polarize(sig,mv,s){
return pga2d.core.gp.call(null,sig,mv,pga2d.core.pseudoscalar.call(null,(1)),s);
});
pga2d.core.scalar_QMARK_ = (function pga2d$core$scalar_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(0));
});
pga2d.core.line_QMARK_ = (function pga2d$core$line_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(1));
});
pga2d.core.point_QMARK_ = (function pga2d$core$point_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(2));
});
pga2d.core.pseudoscalar_QMARK_ = (function pga2d$core$pseudoscalar_QMARK_(mv){
return cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(3));
});
pga2d.core.reversesigns = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(-1),(-1),(-1),(-1)], null);
pga2d.core.smultiplier = (function pga2d$core$smultiplier(s){
return (function (v){
return cljs.core.map.call(null,(function (p1__20129_SHARP_){
return (s * p1__20129_SHARP_);
}),v);
});
});
pga2d.core.times = (function pga2d$core$times(mv,s){
var smul = pga2d.core.smultiplier.call(null,s);
return pga2d.core.multivector_native.call(null,smul.call(null,mv.call(null,new cljs.core.Keyword(null,"0","0",351625802))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"1","1",-521621649))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"2","2",-1645882217))),smul.call(null,mv.call(null,new cljs.core.Keyword(null,"3","3",2097825370))));
});
pga2d.core.gareverse = (function pga2d$core$gareverse(p__20130){
var map__20137 = p__20130;
var map__20137__$1 = ((((!((map__20137 == null)))?((((map__20137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20137):map__20137);
var vec__20138 = cljs.core.get.call(null,map__20137__$1,new cljs.core.Keyword(null,"0","0",351625802));
var s = cljs.core.nth.call(null,vec__20138,(0),null);
var vec__20139 = cljs.core.get.call(null,map__20137__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var c = cljs.core.nth.call(null,vec__20139,(0),null);
var a = cljs.core.nth.call(null,vec__20139,(1),null);
var b = cljs.core.nth.call(null,vec__20139,(2),null);
var vec__20140 = cljs.core.get.call(null,map__20137__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var z = cljs.core.nth.call(null,vec__20140,(0),null);
var x = cljs.core.nth.call(null,vec__20140,(1),null);
var y = cljs.core.nth.call(null,vec__20140,(2),null);
var vec__20141 = cljs.core.get.call(null,map__20137__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var p = cljs.core.nth.call(null,vec__20141,(0),null);
return pga2d.core.multivector.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),cljs.core.map.call(null,cljs.core._,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null)),(- p));
});
pga2d.core.normsquared = (function pga2d$core$normsquared(sig,mv){
if(cljs.core.truth_(mv.call(null,new cljs.core.Keyword(null,"kvector?","kvector?",11224922)))){
return pga2d.core.gp2.call(null,sig,mv,pga2d.core.gareverse.call(null,mv)).call(null,new cljs.core.Keyword(null,"0","0",351625802));
} else {
return null;
}
});
pga2d.core.normalize = (function pga2d$core$normalize(sig,mv){
var n2 = pga2d.core.normsquared.call(null,sig,mv);
if(cljs.core.not_EQ_.call(null,n2,null)){
if(cljs.core._EQ_.call(null,n2,(0))){
return mv;
} else {
return pga2d.core.times.call(null,mv,(1.0 / Math.sqrt(Math.abs(n2))));
}
} else {
return null;
}
});
pga2d.core.ga = (function pga2d$core$ga(sig){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gareverse","gareverse",-188587775),new cljs.core.Keyword(null,"line?","line?",2027037698),new cljs.core.Keyword(null,"gp","gp",-1879258781),new cljs.core.Keyword(null,"multivector","multivector",-1031362267),new cljs.core.Keyword(null,"pseudoscalar","pseudoscalar",-1312378362),new cljs.core.Keyword(null,"polarize","polarize",2120105992),new cljs.core.Keyword(null,"times","times",1671571467),new cljs.core.Keyword(null,"multivector_native","multivector_native",-464273236),new cljs.core.Keyword(null,"normsquared","normsquared",1513071341),new cljs.core.Keyword(null,"pseudoscalar?","pseudoscalar?",1958339729),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"gp2","gp2",-1801400524),new cljs.core.Keyword(null,"scalar?","scalar?",-70093450),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"point?","point?",1362890623)],[pga2d.core.gareverse,pga2d.core.line_QMARK_,(function (mv1,mv2){
return pga2d.core.gp.call(null,sig,mv1,mv2);
}),pga2d.core.multivector,pga2d.core.pseudoscalar,(function (mv){
return pga2d.core.polarize.call(null,sig,mv);
}),pga2d.core.times,pga2d.core.multivector_native,(function (mv){
return pga2d.core.normsquared.call(null,sig,mv);
}),pga2d.core.pseudoscalar_QMARK_,pga2d.core.scalar,pga2d.core.line,(function (mv1,mv2){
return pga2d.core.gp2.call(null,sig,mv1,mv2);
}),pga2d.core.scalar_QMARK_,pga2d.core.point,(function (mv){
return pga2d.core.normalize.call(null,sig,mv);
}),pga2d.core.point_QMARK_]);
});
pga2d.core.p0 = pga2d.core.point.call(null,(0),(0),(1));
pga2d.core.p1 = pga2d.core.point.call(null,(1),(0),(0));
pga2d.core.p2 = pga2d.core.point.call(null,(0),(1),(0));
pga2d.core.p3 = pga2d.core.point.call(null,(2),(3),(1));
pga2d.core.m0 = pga2d.core.line.call(null,(0),(0),(1));
pga2d.core.m1 = pga2d.core.line.call(null,(1),(0),(0));
pga2d.core.m2 = pga2d.core.line.call(null,(0),(1),(0));
pga2d.core.m3 = pga2d.core.line.call(null,.6,.8,(1));
pga2d.core.mv1 = pga2d.core.multivector.call(null,(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),(7));

//# sourceMappingURL=core.js.map?rel=1452794085706