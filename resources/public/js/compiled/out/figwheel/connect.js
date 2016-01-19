// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('pga2d.diagram2');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__25693__delegate = function (x){
if(cljs.core.truth_(pga2d.diagram2.on_js_reload)){
return cljs.core.apply.call(null,pga2d.diagram2.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'pga2d.diagram2/on-js-reload' is missing");
}
};
var G__25693 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__25694__i = 0, G__25694__a = new Array(arguments.length -  0);
while (G__25694__i < G__25694__a.length) {G__25694__a[G__25694__i] = arguments[G__25694__i + 0]; ++G__25694__i;}
  x = new cljs.core.IndexedSeq(G__25694__a,0);
} 
return G__25693__delegate.call(this,x);};
G__25693.cljs$lang$maxFixedArity = 0;
G__25693.cljs$lang$applyTo = (function (arglist__25695){
var x = cljs.core.seq(arglist__25695);
return G__25693__delegate(x);
});
G__25693.cljs$core$IFn$_invoke$arity$variadic = G__25693__delegate;
return G__25693;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1453219521655