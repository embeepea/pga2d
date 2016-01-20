// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.mndist = (function pga2d$diagram$mndist(mv0,mv1){

var vec__17964 = pga2d.grassmann.point_from.call(null,mv0);
var x0 = cljs.core.nth.call(null,vec__17964,(0),null);
var y0 = cljs.core.nth.call(null,vec__17964,(1),null);
var z0 = cljs.core.nth.call(null,vec__17964,(2),null);
var vec__17965 = pga2d.grassmann.point_from.call(null,mv1);
var x1 = cljs.core.nth.call(null,vec__17965,(0),null);
var y1 = cljs.core.nth.call(null,vec__17965,(1),null);
var z0__$1 = cljs.core.nth.call(null,vec__17965,(2),null);
return (Math.abs((x0 - x1)) + Math.abs((y0 - y1)));
});
pga2d.diagram.selected = (function pga2d$diagram$selected(mv,kw,selection){
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,kw,selection));
});
pga2d.diagram.diagram = (function pga2d$diagram$diagram(options){

var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"g","g",1738089905),pga2d.clifford.ga.call(null,(0)),new cljs.core.Keyword(null,"dragables","dragables",1377703931),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (){
return null;
}),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null);
var map__17983 = cljs.core.into.call(null,defaults,options);
var map__17983__$1 = ((((!((map__17983 == null)))?((((map__17983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17983):map__17983);
var g = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var dragables = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"dragables","dragables",1377703931));
var draw = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var coords = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"coords","coords",-599429112));
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var cv = pga2d.canvas.canvas.call(null,cljs.core.first.call(null,coords),cljs.core.second.call(null,coords));
var render = pga2d.canvas.canvas_render.call(null,cv,g);
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),dragables], null));
var dragable = ((function (defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state){
return (function (k){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),k,new cljs.core.Keyword(null,"mv","mv",-493069085)], null));
});})(defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state))
;
var selected = ((function (defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable){
return (function (mv,k){
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,k,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651))));
});})(defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable))
;
var draw_all = ((function (defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable,selected){
return (function (){
draw.call(null,g,cv,render,dragable);

var seq__17985 = cljs.core.seq.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dragables","dragables",1377703931)));
var chunk__17986 = null;
var count__17987 = (0);
var i__17988 = (0);
while(true){
if((i__17988 < count__17987)){
var vec__17989 = cljs.core._nth.call(null,chunk__17986,i__17988);
var k = cljs.core.nth.call(null,vec__17989,(0),null);
var map__17990 = cljs.core.nth.call(null,vec__17989,(1),null);
var map__17990__$1 = ((((!((map__17990 == null)))?((((map__17990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17990):map__17990);
var mv = cljs.core.get.call(null,map__17990__$1,new cljs.core.Keyword(null,"mv","mv",-493069085));
var color = cljs.core.get.call(null,map__17990__$1,new cljs.core.Keyword(null,"color","color",1011675173));
render.call(null,selected.call(null,mv,k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__18000 = seq__17985;
var G__18001 = chunk__17986;
var G__18002 = count__17987;
var G__18003 = (i__17988 + (1));
seq__17985 = G__18000;
chunk__17986 = G__18001;
count__17987 = G__18002;
i__17988 = G__18003;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17985);
if(temp__4425__auto__){
var seq__17985__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17985__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__17985__$1);
var G__18004 = cljs.core.chunk_rest.call(null,seq__17985__$1);
var G__18005 = c__17655__auto__;
var G__18006 = cljs.core.count.call(null,c__17655__auto__);
var G__18007 = (0);
seq__17985 = G__18004;
chunk__17986 = G__18005;
count__17987 = G__18006;
i__17988 = G__18007;
continue;
} else {
var vec__17992 = cljs.core.first.call(null,seq__17985__$1);
var k = cljs.core.nth.call(null,vec__17992,(0),null);
var map__17993 = cljs.core.nth.call(null,vec__17992,(1),null);
var map__17993__$1 = ((((!((map__17993 == null)))?((((map__17993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17993):map__17993);
var mv = cljs.core.get.call(null,map__17993__$1,new cljs.core.Keyword(null,"mv","mv",-493069085));
var color = cljs.core.get.call(null,map__17993__$1,new cljs.core.Keyword(null,"color","color",1011675173));
render.call(null,selected.call(null,mv,k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__18008 = cljs.core.next.call(null,seq__17985__$1);
var G__18009 = null;
var G__18010 = (0);
var G__18011 = (0);
seq__17985 = G__18008;
chunk__17986 = G__18009;
count__17987 = G__18010;
i__17988 = G__18011;
continue;
}
} else {
return null;
}
}
break;
}
});})(defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable,selected))
;
cv.call(null,new cljs.core.Keyword(null,"install-mouse-handler","install-mouse-handler",-53293504)).call(null,((function (defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable,selected,draw_all){
return (function (event){
var pred__17995 = cljs.core._EQ_;
var expr__17996 = event.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__17995.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__17996))){
return null;
} else {
if(cljs.core.truth_(pred__17995.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__17996))){
return null;
} else {
if(cljs.core.truth_(pred__17995.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__17996))){
var old_selection = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651));
var x = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null));
var y = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null));
var selection = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (old_selection,x,y,pred__17995,expr__17996,defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable,selected,draw_all){
return (function (p__17998){
var vec__17999 = p__17998;
var k = cljs.core.nth.call(null,vec__17999,(0),null);
var v = cljs.core.nth.call(null,vec__17999,(1),null);
return (pga2d.diagram.mndist.call(null,N.call(null,v.call(null,new cljs.core.Keyword(null,"mv","mv",-493069085))),pga2d.grassmann.point.call(null,x,y,(1))) < 0.05);
});})(old_selection,x,y,pred__17995,expr__17996,defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable,selected,draw_all))
,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dragables","dragables",1377703931)))));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),selection);

if(cljs.core.not_EQ_.call(null,selection,old_selection)){
return draw_all.call(null);
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__17995.call(null,new cljs.core.Keyword(null,"drag","drag",449951290),expr__17996))){
var x = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null));
var y = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651)),new cljs.core.Keyword(null,"mv","mv",-493069085)], null),pga2d.grassmann.point.call(null,x,y,(1)));

return draw_all.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17996)].join('')));
}
}
}
}
});})(defaults,map__17983,map__17983__$1,g,dragables,draw,coords,N,cv,render,state,dragable,selected,draw_all))
);

return draw_all.call(null);
});

//# sourceMappingURL=diagram.js.map?rel=1453330325819