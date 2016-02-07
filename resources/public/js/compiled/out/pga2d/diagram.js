// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram');
goog.require('cljs.core');
goog.require('pga2d.ui');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.diagram.mndist = (function pga2d$diagram$mndist(mv0,mv1){

var vec__5959 = pga2d.grassmann.point_from.call(null,mv0);
var x0 = cljs.core.nth.call(null,vec__5959,(0),null);
var y0 = cljs.core.nth.call(null,vec__5959,(1),null);
var z0 = cljs.core.nth.call(null,vec__5959,(2),null);
var vec__5960 = pga2d.grassmann.point_from.call(null,mv1);
var x1 = cljs.core.nth.call(null,vec__5960,(0),null);
var y1 = cljs.core.nth.call(null,vec__5960,(1),null);
var z0__$1 = cljs.core.nth.call(null,vec__5960,(2),null);
return (Math.abs((x0 - x1)) + Math.abs((y0 - y1)));
});
pga2d.diagram.selected = (function pga2d$diagram$selected(mv,kw,selection){
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,kw,selection));
});
pga2d.diagram.kwdstr = (function pga2d$diagram$kwdstr(kwd){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,[cljs.core.str(kwd)].join('')));
});
pga2d.diagram.diagram = (function pga2d$diagram$diagram(options){

var defaults = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"g","g",1738089905),pga2d.clifford.ga.call(null,(0)),new cljs.core.Keyword(null,"dragables","dragables",1377703931),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"source-link","source-link",-1993375482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"input-style","input-style",-374295278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ffffff",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.75], null),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (){
return null;
}),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null);
var map__5978 = cljs.core.into.call(null,defaults,options);
var map__5978__$1 = ((((!((map__5978 == null)))?((((map__5978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5978):map__5978);
var g = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var dragables = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"dragables","dragables",1377703931));
var inputs = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var draw = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var coords = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"coords","coords",-599429112));
var input_style = cljs.core.into.call(null,new cljs.core.Keyword(null,"input-style","input-style",-374295278).cljs$core$IFn$_invoke$arity$1(defaults),new cljs.core.Keyword(null,"input-style","input-style",-374295278).cljs$core$IFn$_invoke$arity$1(options));
var source_link = cljs.core.into.call(null,new cljs.core.Keyword(null,"source-link","source-link",-1993375482).cljs$core$IFn$_invoke$arity$1(defaults),new cljs.core.Keyword(null,"source-link","source-link",-1993375482).cljs$core$IFn$_invoke$arity$1(options));
var N = g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var cv = pga2d.canvas.canvas.call(null,cljs.core.first.call(null,coords),cljs.core.second.call(null,coords));
var render = pga2d.canvas.canvas_render.call(null,cv,g);
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),dragables,new cljs.core.Keyword(null,"inputs","inputs",865803858),pga2d.ui.input_value_map.call(null,inputs)], null));
var dragable = ((function (defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state){
return (function (k){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),k,new cljs.core.Keyword(null,"mv","mv",-493069085)], null));
});})(defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state))
;
var input = ((function (defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable){
return (function (k){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),k], null));
});})(defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable))
;
var selected = ((function (defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input){
return (function (mv,k){
return cljs.core.assoc.call(null,mv,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,k,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651))));
});})(defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input))
;
var redraw_queued = cljs.core.atom.call(null,false);
var draw_all = ((function (defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,redraw_queued))){
cljs.core.reset_BANG_.call(null,redraw_queued,true);

return requestAnimationFrame(((function (defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued){
return (function (){
cljs.core.reset_BANG_.call(null,redraw_queued,false);

draw.call(null,g,cv,render,dragable,input);

var seq__5980 = cljs.core.seq.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dragables","dragables",1377703931)));
var chunk__5981 = null;
var count__5982 = (0);
var i__5983 = (0);
while(true){
if((i__5983 < count__5982)){
var vec__5984 = cljs.core._nth.call(null,chunk__5981,i__5983);
var k = cljs.core.nth.call(null,vec__5984,(0),null);
var map__5985 = cljs.core.nth.call(null,vec__5984,(1),null);
var map__5985__$1 = ((((!((map__5985 == null)))?((((map__5985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5985):map__5985);
var mv = cljs.core.get.call(null,map__5985__$1,new cljs.core.Keyword(null,"mv","mv",-493069085));
var color = cljs.core.get.call(null,map__5985__$1,new cljs.core.Keyword(null,"color","color",1011675173));
render.call(null,selected.call(null,mv,k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__5995 = seq__5980;
var G__5996 = chunk__5981;
var G__5997 = count__5982;
var G__5998 = (i__5983 + (1));
seq__5980 = G__5995;
chunk__5981 = G__5996;
count__5982 = G__5997;
i__5983 = G__5998;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5980);
if(temp__4425__auto__){
var seq__5980__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5980__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__5980__$1);
var G__5999 = cljs.core.chunk_rest.call(null,seq__5980__$1);
var G__6000 = c__5471__auto__;
var G__6001 = cljs.core.count.call(null,c__5471__auto__);
var G__6002 = (0);
seq__5980 = G__5999;
chunk__5981 = G__6000;
count__5982 = G__6001;
i__5983 = G__6002;
continue;
} else {
var vec__5987 = cljs.core.first.call(null,seq__5980__$1);
var k = cljs.core.nth.call(null,vec__5987,(0),null);
var map__5988 = cljs.core.nth.call(null,vec__5987,(1),null);
var map__5988__$1 = ((((!((map__5988 == null)))?((((map__5988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5988):map__5988);
var mv = cljs.core.get.call(null,map__5988__$1,new cljs.core.Keyword(null,"mv","mv",-493069085));
var color = cljs.core.get.call(null,map__5988__$1,new cljs.core.Keyword(null,"color","color",1011675173));
render.call(null,selected.call(null,mv,k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__6003 = cljs.core.next.call(null,seq__5980__$1);
var G__6004 = null;
var G__6005 = (0);
var G__6006 = (0);
seq__5980 = G__6003;
chunk__5981 = G__6004;
count__5982 = G__6005;
i__5983 = G__6006;
continue;
}
} else {
return null;
}
}
break;
}
});})(defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued))
);
} else {
return null;
}
});})(defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued))
;
if(cljs.core.seq.call(null,inputs)){
ReactDOM.render(React.createElement(pga2d.ui.UI,{"draw": draw_all, "appstate": state, "inputs": inputs, "backgroundColor": new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491).cljs$core$IFn$_invoke$arity$1(input_style), "opacity": new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(input_style)}),document.getElementById("ui"));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(source_link))){
ReactDOM.render(React.DOM.div({"className": "sourcelink-container"},React.DOM.a({"style": {"color": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(source_link)}, "target": "_blank", "href": [cljs.core.str("https://github.com/embeepea/pga2d/blob/gh-pages/src/pga2d/"),cljs.core.str(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(source_link))].join('')},"view the source code for this diagram")),document.getElementById("sourcelink"));
} else {
}

cv.call(null,new cljs.core.Keyword(null,"install-mouse-handler","install-mouse-handler",-53293504)).call(null,((function (defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued,draw_all){
return (function (event){
var pred__5990 = cljs.core._EQ_;
var expr__5991 = event.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__5990.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__5991))){
return null;
} else {
if(cljs.core.truth_(pred__5990.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__5991))){
return null;
} else {
if(cljs.core.truth_(pred__5990.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__5991))){
var old_selection = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651));
var x = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null));
var y = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null));
var selection = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (old_selection,x,y,pred__5990,expr__5991,defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued,draw_all){
return (function (p__5993){
var vec__5994 = p__5993;
var k = cljs.core.nth.call(null,vec__5994,(0),null);
var v = cljs.core.nth.call(null,vec__5994,(1),null);
return (pga2d.diagram.mndist.call(null,N.call(null,v.call(null,new cljs.core.Keyword(null,"mv","mv",-493069085))),pga2d.grassmann.point.call(null,x,y,(1))) < 0.05);
});})(old_selection,x,y,pred__5990,expr__5991,defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued,draw_all))
,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dragables","dragables",1377703931)))));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),selection);

if(cljs.core.not_EQ_.call(null,selection,old_selection)){
return draw_all.call(null);
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__5990.call(null,new cljs.core.Keyword(null,"drag","drag",449951290),expr__5991))){
var x = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null));
var y = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragables","dragables",1377703931),cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selection","selection",975998651)),new cljs.core.Keyword(null,"mv","mv",-493069085)], null),pga2d.grassmann.point.call(null,x,y,(1)));

return draw_all.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__5991)].join('')));
}
}
}
}
});})(defaults,map__5978,map__5978__$1,g,dragables,inputs,draw,coords,input_style,source_link,N,cv,render,state,dragable,input,selected,redraw_queued,draw_all))
);

return draw_all.call(null);
});

//# sourceMappingURL=diagram.js.map?rel=1454882954478