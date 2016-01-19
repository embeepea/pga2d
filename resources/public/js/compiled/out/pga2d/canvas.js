// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.canvas');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.canvas.by_id = (function pga2d$canvas$by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
pga2d.canvas.current_window_size = (function pga2d$canvas$current_window_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
});
pga2d.canvas.linear_interpolator = (function pga2d$canvas$linear_interpolator(a,b,A,B){
var f = ((B - A) / (b - a));
return ((function (f){
return (function (x){
return (((x - a) * f) + A);
});
;})(f))
});
pga2d.canvas.normalized = (function pga2d$canvas$normalized(p__25481){
var vec__25483 = p__25481;
var x = cljs.core.nth.call(null,vec__25483,(0),null);
var y = cljs.core.nth.call(null,vec__25483,(1),null);
var z = cljs.core.nth.call(null,vec__25483,(2),null);
if(cljs.core._EQ_.call(null,z,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / z),(y / z)], null);
}
});
pga2d.canvas.dot = (function pga2d$canvas$dot(a,b){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,a,b));
});
pga2d.canvas.rotate = (function pga2d$canvas$rotate(n,s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.call(null,n,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.take.call(null,n,s);
}),null,null)));
});
pga2d.canvas.indices = (function pga2d$canvas$indices(pred,coll){
return cljs.core.keep_indexed.call(null,(function (p1__25485_SHARP_,p2__25484_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__25484_SHARP_))){
return p1__25485_SHARP_;
} else {
return null;
}
}),coll);
});
pga2d.canvas.ega = pga2d.clifford.ga.call(null,(0));
pga2d.canvas.line_rectangle_intersection = (function pga2d$canvas$line_rectangle_intersection(line,p__25490){
var vec__25494 = p__25490;
var vec__25495 = cljs.core.nth.call(null,vec__25494,(0),null);
var xMin = cljs.core.nth.call(null,vec__25495,(0),null);
var yMin = cljs.core.nth.call(null,vec__25495,(1),null);
var vec__25496 = cljs.core.nth.call(null,vec__25494,(1),null);
var xMax = cljs.core.nth.call(null,vec__25496,(0),null);
var yMax = cljs.core.nth.call(null,vec__25496,(1),null);
var verts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.point.call(null,xMin,yMin,(1)),pga2d.grassmann.point.call(null,xMax,yMin,(1)),pga2d.grassmann.point.call(null,xMax,yMax,(1)),pga2d.grassmann.point.call(null,xMin,yMax,(1))], null);
var edges = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.grassmann.line.call(null,(0),(1),(- yMin)),pga2d.grassmann.line.call(null,(1),(0),(- xMax)),pga2d.grassmann.line.call(null,(0),(1),(- yMax)),pga2d.grassmann.line.call(null,(1),(0),(- xMin))], null);
var distances = cljs.core.map.call(null,((function (verts,edges,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax){
return (function (p1__25486_SHARP_){
return (1.0E-6 + pga2d.grassmann.pseudoscalar_from.call(null,pga2d.grassmann.wedge.call(null,line,p1__25486_SHARP_)));
});})(verts,edges,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax))
,verts);
var sign_changes = cljs.core.map.call(null,cljs.core._STAR_,distances,pga2d.canvas.rotate.call(null,(1),distances));
var edge_indices = pga2d.canvas.indices.call(null,((function (verts,edges,distances,sign_changes,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax){
return (function (p1__25487_SHARP_){
return (p1__25487_SHARP_ < (0));
});})(verts,edges,distances,sign_changes,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax))
,sign_changes);
var intersecting_edges = cljs.core.map.call(null,((function (verts,edges,distances,sign_changes,edge_indices,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax){
return (function (p1__25488_SHARP_){
return cljs.core.get.call(null,edges,p1__25488_SHARP_);
});})(verts,edges,distances,sign_changes,edge_indices,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax))
,edge_indices);
var intersection_points = cljs.core.map.call(null,((function (verts,edges,distances,sign_changes,edge_indices,intersecting_edges,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax){
return (function (p1__25489_SHARP_){
return pga2d.canvas.ega.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,pga2d.grassmann.wedge.call(null,p1__25489_SHARP_,line));
});})(verts,edges,distances,sign_changes,edge_indices,intersecting_edges,vec__25494,vec__25495,xMin,yMin,vec__25496,xMax,yMax))
,intersecting_edges);
return intersection_points;
});
pga2d.canvas.canvas = (function pga2d$canvas$canvas(var_args){
var args25498 = [];
var len__17910__auto___25507 = arguments.length;
var i__17911__auto___25508 = (0);
while(true){
if((i__17911__auto___25508 < len__17910__auto___25507)){
args25498.push((arguments[i__17911__auto___25508]));

var G__25509 = (i__17911__auto___25508 + (1));
i__17911__auto___25508 = G__25509;
continue;
} else {
}
break;
}

var G__25500 = args25498.length;
switch (G__25500) {
case 2:
return pga2d.canvas.canvas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pga2d.canvas.canvas.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25498.length)].join('')));

}
});

pga2d.canvas.canvas.cljs$core$IFn$_invoke$arity$2 = (function (ll,ur){
return pga2d.canvas.canvas.call(null,ll,ur,cljs.core.PersistentArrayMap.EMPTY);
});

pga2d.canvas.canvas.cljs$core$IFn$_invoke$arity$3 = (function (ll,ur,options){
var defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preserve-aspect","preserve-aspect",885939822),false,new cljs.core.Keyword(null,"mouse-handler","mouse-handler",-1958953119),null], null);
var settings = cljs.core.into.call(null,defaults,options);
var canvas_element = pga2d.canvas.by_id.call(null,"canvas");
var vec__25501 = pga2d.canvas.current_window_size.call(null);
var w = cljs.core.nth.call(null,vec__25501,(0),null);
var h = cljs.core.nth.call(null,vec__25501,(1),null);
var d = (function (){var x__17190__auto__ = w;
var y__17191__auto__ = h;
return ((x__17190__auto__ < y__17191__auto__) ? x__17190__auto__ : y__17191__auto__);
})();
var xp = (cljs.core.truth_(new cljs.core.Keyword(null,"preserve-aspect","preserve-aspect",885939822).cljs$core$IFn$_invoke$arity$1(settings))?pga2d.canvas.linear_interpolator.call(null,ll.call(null,(0)),ur.call(null,(0)),(0),w):pga2d.canvas.linear_interpolator.call(null,ll.call(null,(0)),ur.call(null,(0)),((w - d) / (2)),((w + d) / (2))));
var yp = (cljs.core.truth_(new cljs.core.Keyword(null,"preserve-aspect","preserve-aspect",885939822).cljs$core$IFn$_invoke$arity$1(settings))?pga2d.canvas.linear_interpolator.call(null,ll.call(null,(1)),ur.call(null,(1)),h,(0)):pga2d.canvas.linear_interpolator.call(null,ll.call(null,(1)),ur.call(null,(1)),((h + d) / (2)),((h - d) / (2))));
var px = (cljs.core.truth_(new cljs.core.Keyword(null,"preserve-aspect","preserve-aspect",885939822).cljs$core$IFn$_invoke$arity$1(settings))?pga2d.canvas.linear_interpolator.call(null,(0),w,ll.call(null,(0)),ur.call(null,(0))):pga2d.canvas.linear_interpolator.call(null,((w - d) / (2)),((w + d) / (2)),ll.call(null,(0)),ur.call(null,(0))));
var py = (cljs.core.truth_(new cljs.core.Keyword(null,"preserve-aspect","preserve-aspect",885939822).cljs$core$IFn$_invoke$arity$1(settings))?pga2d.canvas.linear_interpolator.call(null,h,(0),ll.call(null,(1)),ur.call(null,(1))):pga2d.canvas.linear_interpolator.call(null,((h + d) / (2)),((h - d) / (2)),ll.call(null,(1)),ur.call(null,(1))));
var wll = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px.call(null,(0)),py.call(null,h)], null);
var wur = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px.call(null,w),py.call(null,(0))], null);
var mouse_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"down","down",1565245570),false], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouse-handler","mouse-handler",-1958953119).cljs$core$IFn$_invoke$arity$1(settings))){
goog.events.listen(canvas_element,goog.events.EventType.MOUSEUP,((function (defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (event){
return cljs.core.swap_BANG_.call(null,mouse_state,cljs.core.assoc,new cljs.core.Keyword(null,"down","down",1565245570),false,new cljs.core.Keyword(null,"xy","xy",-696978232),null);
});})(defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
);

goog.events.listen(canvas_element,goog.events.EventType.MOUSEDOWN,((function (defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (event){
return cljs.core.swap_BANG_.call(null,mouse_state,cljs.core.assoc,new cljs.core.Keyword(null,"down","down",1565245570),true,new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px.call(null,event.offsetX),py.call(null,event.offsetY)], null));
});})(defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
);

goog.events.listen(canvas_element,goog.events.EventType.MOUSEMOVE,((function (defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (event){
var xy = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px.call(null,event.offsetX),py.call(null,event.offsetY)], null);
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_state).call(null,new cljs.core.Keyword(null,"down","down",1565245570)))){
return new cljs.core.Keyword(null,"mouse-handler","mouse-handler",-1958953119).cljs$core$IFn$_invoke$arity$1(settings).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xy.call(null,(0)) - cljs.core.deref.call(null,mouse_state).call(null,new cljs.core.Keyword(null,"base","base",185279322)).call(null,(0))),(xy.call(null,(1)) - cljs.core.deref.call(null,mouse_state).call(null,new cljs.core.Keyword(null,"base","base",185279322)).call(null,(1)))], null)], null));
} else {
return new cljs.core.Keyword(null,"mouse-handler","mouse-handler",-1958953119).cljs$core$IFn$_invoke$arity$1(settings).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"xy","xy",-696978232),xy], null));
}
});})(defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
);
} else {
}

canvas_element.width = w;

canvas_element.height = h;

var ctx = canvas_element.getContext("2d");
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"clear","clear",1877104959),((function (ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (color){
ctx.fillStyle = color;

return ctx.fillRect((0),(0),w,h);
});})(ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
,new cljs.core.Keyword(null,"set-color","set-color",-1342268539),((function (ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (color){
ctx.strokeStyle = color;

return ctx.fillStyle = color;
});})(ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
,new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),((function (ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (p,r){
var vec__25502 = pga2d.canvas.normalized.call(null,p);
var x = cljs.core.nth.call(null,vec__25502,(0),null);
var y = cljs.core.nth.call(null,vec__25502,(1),null);
ctx.beginPath();

ctx.arc(xp.call(null,x),yp.call(null,y),r,(0),((2) * Math.PI));

return ctx.fill();
});})(ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
,new cljs.core.Keyword(null,"set-line-width","set-line-width",-1126065560),((function (ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (t){
return ctx.lineWidth = t;
});})(ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
,new cljs.core.Keyword(null,"draw-line","draw-line",1278325815),((function (ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (line_mv){
var ps = cljs.core.map.call(null,((function (ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (p1__25497_SHARP_){
return pga2d.grassmann.point_from.call(null,p1__25497_SHARP_);
});})(ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
,pga2d.canvas.line_rectangle_intersection.call(null,line_mv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wll,wur], null)));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,ps),(2))){
var vec__25503 = pga2d.canvas.normalized.call(null,cljs.core.first.call(null,ps));
var x0 = cljs.core.nth.call(null,vec__25503,(0),null);
var y0 = cljs.core.nth.call(null,vec__25503,(1),null);
var vec__25504 = pga2d.canvas.normalized.call(null,cljs.core.second.call(null,ps));
var x1 = cljs.core.nth.call(null,vec__25504,(0),null);
var y1 = cljs.core.nth.call(null,vec__25504,(1),null);
ctx.beginPath();

ctx.moveTo(xp.call(null,x0),yp.call(null,y0));

ctx.lineTo(xp.call(null,x1),yp.call(null,y1));

return ctx.stroke();
} else {
return null;
}
});})(ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
,new cljs.core.Keyword(null,"draw-segment","draw-segment",166522515),((function (ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state){
return (function (p0,p1){
var vec__25505 = pga2d.canvas.normalized.call(null,p0);
var x0 = cljs.core.nth.call(null,vec__25505,(0),null);
var y0 = cljs.core.nth.call(null,vec__25505,(1),null);
var vec__25506 = pga2d.canvas.normalized.call(null,p1);
var x1 = cljs.core.nth.call(null,vec__25506,(0),null);
var y1 = cljs.core.nth.call(null,vec__25506,(1),null);
ctx.beginPath();

ctx.moveTo(xp.call(null,x0),yp.call(null,y0));

ctx.lineTo(xp.call(null,x1),yp.call(null,y1));

return ctx.stroke();
});})(ctx,defaults,settings,canvas_element,vec__25501,w,h,d,xp,yp,px,py,wll,wur,mouse_state))
], null);
});

pga2d.canvas.canvas.cljs$lang$maxFixedArity = 3;
if(typeof pga2d.canvas.render !== 'undefined'){
} else {
pga2d.canvas.render = (function (){var method_table__17765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"pga2d.canvas","render"),((function (method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__,hierarchy__17769__auto__){
return (function (cv,g,mv){
return mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393));
});})(method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__,hierarchy__17769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17769__auto__,method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__));
})();
}
cljs.core._add_method.call(null,pga2d.canvas.render,(2),(function (cv,g,mv){
var p = pga2d.grassmann.point_from.call(null,g.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663)).call(null,mv));
return cv.call(null,new cljs.core.Keyword(null,"draw-point","draw-point",1918226496)).call(null,p,(5));
}));
cljs.core._add_method.call(null,pga2d.canvas.render,(1),(function (cv,g,mv){
return cv.call(null,new cljs.core.Keyword(null,"draw-line","draw-line",1278325815)).call(null,mv);
}));
cljs.core._add_method.call(null,pga2d.canvas.render,null,(function (cv,g,mv){
return cljs.core.println.call(null,"invalid render");
}));
pga2d.canvas.canvas_render = (function pga2d$canvas$canvas_render(cv,g){
return (function() {
var pga2d$canvas$canvas_render_$_renderfunc = null;
var pga2d$canvas$canvas_render_$_renderfunc__1 = (function (mv){
return pga2d$canvas$canvas_render_$_renderfunc.call(null,mv,cljs.core.PersistentArrayMap.EMPTY);
});
var pga2d$canvas$canvas_render_$_renderfunc__2 = (function (mv,options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(options))){
cv.call(null,new cljs.core.Keyword(null,"set-color","set-color",-1342268539)).call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(options));
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.type.call(null,mv),cljs.core.PersistentArrayMap)){
return pga2d.canvas.render.call(null,cv,g,mv);
} else {
return cljs.core.doall.call(null,cljs.core.map.call(null,pga2d$canvas$canvas_render_$_renderfunc,mv));
}
});
pga2d$canvas$canvas_render_$_renderfunc = function(mv,options){
switch(arguments.length){
case 1:
return pga2d$canvas$canvas_render_$_renderfunc__1.call(this,mv);
case 2:
return pga2d$canvas$canvas_render_$_renderfunc__2.call(this,mv,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pga2d$canvas$canvas_render_$_renderfunc.cljs$core$IFn$_invoke$arity$1 = pga2d$canvas$canvas_render_$_renderfunc__1;
pga2d$canvas$canvas_render_$_renderfunc.cljs$core$IFn$_invoke$arity$2 = pga2d$canvas$canvas_render_$_renderfunc__2;
return pga2d$canvas$canvas_render_$_renderfunc;
})()
});

//# sourceMappingURL=canvas.js.map?rel=1453218277313