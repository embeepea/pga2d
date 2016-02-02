// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.mndist = (function pga2d$diagram$mndist(mv0,mv1){

var vec__5970 = pga2d.grassmann.point_from.call(null,mv0);
var x0 = cljs.core.nth.call(null,vec__5970,(0),null);
var y0 = cljs.core.nth.call(null,vec__5970,(1),null);
var z0 = cljs.core.nth.call(null,vec__5970,(2),null);
var vec__5971 = pga2d.grassmann.point_from.call(null,mv1);
var x1 = cljs.core.nth.call(null,vec__5971,(0),null);
var y1 = cljs.core.nth.call(null,vec__5971,(1),null);
var z0__$1 = cljs.core.nth.call(null,vec__5971,(2),null);
return (Math.abs((x0 - x1)) + Math.abs((y0 - y1)));
});
pga2d.diagram.selected = (function pga2d$diagram$selected(mv,kw,selection){
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,kw,selection));
});
pga2d.diagram.kwdstr = (function pga2d$diagram$kwdstr(kwd){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,[cljs.core.str(kwd)].join('')));
});
pga2d.diagram.diagram = (function pga2d$diagram$diagram(options){

var defaults = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"g","g",1738089905),pga2d.clifford.ga.call(null,(0)),new cljs.core.Keyword(null,"dragables","dragables",1377703931),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (){
return null;
}),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null);
var map__5995 = cljs.core.into.call(null,defaults,options);
var map__5995__$1 = ((((!((map__5995 == null)))?((((map__5995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5995):map__5995);
var g = cljs.core.get.call(null,map__5995__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var dragables = cljs.core.get.call(null,map__5995__$1,new cljs.core.Keyword(null,"dragables","dragables",1377703931));
var inputs = cljs.core.get.call(null,map__5995__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var draw = cljs.core.get.call(null,map__5995__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var coords = cljs.core.get.call(null,map__5995__$1,new cljs.core.Keyword(null,"coords","coords",-599429112));
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var cv = pga2d.canvas.canvas.call(null,cljs.core.first.call(null,coords),cljs.core.second.call(null,coords));
var render = pga2d.canvas.canvas_render.call(null,cv,g);
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),dragables], null));
var dragable = ((function (defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state){
return (function (k){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),k,new cljs.core.Keyword(null,"mv","mv",-493069085)], null));
});})(defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state))
;
var input = ((function (defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable){
return (function (k){
return parseFloat(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$inputs","$inputs",886044730),k], null)).val());
});})(defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable))
;
var selected = ((function (defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input){
return (function (mv,k){
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,k,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651))));
});})(defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input))
;
var draw_all = ((function (defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected){
return (function (){
draw.call(null,g,cv,render,dragable,input);

var seq__5997 = cljs.core.seq.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dragables","dragables",1377703931)));
var chunk__5998 = null;
var count__5999 = (0);
var i__6000 = (0);
while(true){
if((i__6000 < count__5999)){
var vec__6001 = cljs.core._nth.call(null,chunk__5998,i__6000);
var k = cljs.core.nth.call(null,vec__6001,(0),null);
var map__6002 = cljs.core.nth.call(null,vec__6001,(1),null);
var map__6002__$1 = ((((!((map__6002 == null)))?((((map__6002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6002):map__6002);
var mv = cljs.core.get.call(null,map__6002__$1,new cljs.core.Keyword(null,"mv","mv",-493069085));
var color = cljs.core.get.call(null,map__6002__$1,new cljs.core.Keyword(null,"color","color",1011675173));
render.call(null,selected.call(null,mv,k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__6018 = seq__5997;
var G__6019 = chunk__5998;
var G__6020 = count__5999;
var G__6021 = (i__6000 + (1));
seq__5997 = G__6018;
chunk__5998 = G__6019;
count__5999 = G__6020;
i__6000 = G__6021;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5997);
if(temp__4425__auto__){
var seq__5997__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5997__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__5997__$1);
var G__6022 = cljs.core.chunk_rest.call(null,seq__5997__$1);
var G__6023 = c__5471__auto__;
var G__6024 = cljs.core.count.call(null,c__5471__auto__);
var G__6025 = (0);
seq__5997 = G__6022;
chunk__5998 = G__6023;
count__5999 = G__6024;
i__6000 = G__6025;
continue;
} else {
var vec__6004 = cljs.core.first.call(null,seq__5997__$1);
var k = cljs.core.nth.call(null,vec__6004,(0),null);
var map__6005 = cljs.core.nth.call(null,vec__6004,(1),null);
var map__6005__$1 = ((((!((map__6005 == null)))?((((map__6005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6005):map__6005);
var mv = cljs.core.get.call(null,map__6005__$1,new cljs.core.Keyword(null,"mv","mv",-493069085));
var color = cljs.core.get.call(null,map__6005__$1,new cljs.core.Keyword(null,"color","color",1011675173));
render.call(null,selected.call(null,mv,k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__6026 = cljs.core.next.call(null,seq__5997__$1);
var G__6027 = null;
var G__6028 = (0);
var G__6029 = (0);
seq__5997 = G__6026;
chunk__5998 = G__6027;
count__5999 = G__6028;
i__6000 = G__6029;
continue;
}
} else {
return null;
}
}
break;
}
});})(defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected))
;
$("#inputs").remove();

$("<div class='inputs'>").attr("style","position: absolute; left: 20px; top: 20px;").appendTo($("body"));

var seq__6007_6030 = cljs.core.seq.call(null,inputs);
var chunk__6008_6031 = null;
var count__6009_6032 = (0);
var i__6010_6033 = (0);
while(true){
if((i__6010_6033 < count__6009_6032)){
var vec__6011_6034 = cljs.core._nth.call(null,chunk__6008_6031,i__6010_6033);
var k_6035 = cljs.core.nth.call(null,vec__6011_6034,(0),null);
var v_6036 = cljs.core.nth.call(null,vec__6011_6034,(1),null);
var $div_6037 = $([cljs.core.str("<div>"),cljs.core.str(pga2d.diagram.kwdstr.call(null,k_6035)),cljs.core.str(": <input type='text' size='8' value='"),cljs.core.str(v_6036),cljs.core.str("'></div>")].join(''));
$div_6037.appendTo($(".inputs"));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$inputs","$inputs",886044730),k_6035], null),$div_6037.find("input"));

var G__6038 = seq__6007_6030;
var G__6039 = chunk__6008_6031;
var G__6040 = count__6009_6032;
var G__6041 = (i__6010_6033 + (1));
seq__6007_6030 = G__6038;
chunk__6008_6031 = G__6039;
count__6009_6032 = G__6040;
i__6010_6033 = G__6041;
continue;
} else {
var temp__4425__auto___6042 = cljs.core.seq.call(null,seq__6007_6030);
if(temp__4425__auto___6042){
var seq__6007_6043__$1 = temp__4425__auto___6042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6007_6043__$1)){
var c__5471__auto___6044 = cljs.core.chunk_first.call(null,seq__6007_6043__$1);
var G__6045 = cljs.core.chunk_rest.call(null,seq__6007_6043__$1);
var G__6046 = c__5471__auto___6044;
var G__6047 = cljs.core.count.call(null,c__5471__auto___6044);
var G__6048 = (0);
seq__6007_6030 = G__6045;
chunk__6008_6031 = G__6046;
count__6009_6032 = G__6047;
i__6010_6033 = G__6048;
continue;
} else {
var vec__6012_6049 = cljs.core.first.call(null,seq__6007_6043__$1);
var k_6050 = cljs.core.nth.call(null,vec__6012_6049,(0),null);
var v_6051 = cljs.core.nth.call(null,vec__6012_6049,(1),null);
var $div_6052 = $([cljs.core.str("<div>"),cljs.core.str(pga2d.diagram.kwdstr.call(null,k_6050)),cljs.core.str(": <input type='text' size='8' value='"),cljs.core.str(v_6051),cljs.core.str("'></div>")].join(''));
$div_6052.appendTo($(".inputs"));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$inputs","$inputs",886044730),k_6050], null),$div_6052.find("input"));

var G__6053 = cljs.core.next.call(null,seq__6007_6043__$1);
var G__6054 = null;
var G__6055 = (0);
var G__6056 = (0);
seq__6007_6030 = G__6053;
chunk__6008_6031 = G__6054;
count__6009_6032 = G__6055;
i__6010_6033 = G__6056;
continue;
}
} else {
}
}
break;
}

$(".inputs input").change(((function (defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected,draw_all){
return (function (){
return draw_all.call(null);
});})(defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected,draw_all))
);

cv.call(null,new cljs.core.Keyword(null,"install-mouse-handler","install-mouse-handler",-53293504)).call(null,((function (defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected,draw_all){
return (function (event){
var pred__6013 = cljs.core._EQ_;
var expr__6014 = event.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__6013.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__6014))){
return null;
} else {
if(cljs.core.truth_(pred__6013.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__6014))){
return null;
} else {
if(cljs.core.truth_(pred__6013.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__6014))){
var old_selection = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651));
var x = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null));
var y = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null));
var selection = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (old_selection,x,y,pred__6013,expr__6014,defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected,draw_all){
return (function (p__6016){
var vec__6017 = p__6016;
var k = cljs.core.nth.call(null,vec__6017,(0),null);
var v = cljs.core.nth.call(null,vec__6017,(1),null);
return (pga2d.diagram.mndist.call(null,N.call(null,v.call(null,new cljs.core.Keyword(null,"mv","mv",-493069085))),pga2d.grassmann.point.call(null,x,y,(1))) < 0.05);
});})(old_selection,x,y,pred__6013,expr__6014,defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected,draw_all))
,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dragables","dragables",1377703931)))));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),selection);

if(cljs.core.not_EQ_.call(null,selection,old_selection)){
return draw_all.call(null);
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__6013.call(null,new cljs.core.Keyword(null,"drag","drag",449951290),expr__6014))){
var x = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null));
var y = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651)),new cljs.core.Keyword(null,"mv","mv",-493069085)], null),pga2d.grassmann.point.call(null,x,y,(1)));

return draw_all.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__6014)].join('')));
}
}
}
}
});})(defaults,map__5995,map__5995__$1,g,dragables,inputs,draw,coords,N,cv,render,state,dragable,input,selected,draw_all))
);

return draw_all.call(null);
});

//# sourceMappingURL=diagram.js.map?rel=1454386653874