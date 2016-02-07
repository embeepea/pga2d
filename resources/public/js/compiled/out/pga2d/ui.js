// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.ui');
goog.require('cljs.core');
pga2d.ui.kwdstr = (function pga2d$ui$kwdstr(kwd){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,[cljs.core.str(kwd)].join('')));
});
pga2d.ui.TextInput = React.createClass({"handleInput": (function (e){
var this$ = this;
this$.setState({"value": e.target.value});

cljs.core.swap_BANG_.call(null,this$.props.appstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),this$.props.keyword], null),parseFloat(e.target.value));

return this$.props.draw.call(null);
}), "getInitialState": (function (){
var this$ = this;
return {"value": this$.props.initialValue};
}), "render": (function (){
var this$ = this;
return React.DOM.div({},React.DOM.span({},[cljs.core.str(pga2d.ui.kwdstr.call(null,this$.props.keyword)),cljs.core.str(": ")].join('')),React.DOM.input({"type": "text", "size": "8", "value": this$.state.value, "onChange": this$.handleInput}));
})});
pga2d.ui.SliderInput = React.createClass({"handleInput": (function (e){
var this$ = this;
this$.setState({"value": e.target.value});

cljs.core.swap_BANG_.call(null,this$.props.appstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),this$.props.keyword], null),parseFloat(e.target.value));

return this$.props.draw.call(null);
}), "getInitialState": (function (){
var this$ = this;
return {"value": this$.props.initialValue};
}), "render": (function (){
var this$ = this;
return React.DOM.div({},React.DOM.span({},[cljs.core.str(pga2d.ui.kwdstr.call(null,this$.props.keyword)),cljs.core.str(": ")].join('')),React.DOM.input({"type": "range", "style": {"width": this$.props.width}, "min": this$.props.min, "max": this$.props.max, "step": this$.props.step, "value": this$.state.value, "onInput": this$.handleInput, "onChange": this$.handleInput}),React.DOM.input({"type": "text", "size": "8", "value": this$.state.value, "onChange": this$.handleInput}));
})});
pga2d.ui.input_value_map = (function pga2d$ui$input_value_map(inputs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5951){
var vec__5952 = p__5951;
var k = cljs.core.nth.call(null,vec__5952,(0),null);
var v = cljs.core.nth.call(null,vec__5952,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((typeof v === 'number')?v:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v))], null);
}),cljs.core.seq.call(null,inputs)));
});
pga2d.ui.input_widget = (function pga2d$ui$input_widget(k,v,draw,appstate){
if(typeof v === 'number'){
return React.createElement(pga2d.ui.TextInput,{"draw": draw, "appstate": appstate, "keyword": k, "initialValue": v});
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"number","number",1570378438))){
return React.createElement(pga2d.ui.TextInput,{"draw": draw, "appstate": appstate, "keyword": k, "initialValue": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)});
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"slider","slider",-472668865))){
return React.createElement(pga2d.ui.SliderInput,{"draw": draw, "appstate": appstate, "keyword": k, "initialValue": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v), "min": new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(v), "max": new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(v), "step": new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(v), "width": (cljs.core.truth_(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(v):(200))});
} else {
return null;
}
}
}
});
pga2d.ui.UI = React.createClass({"render": (function (){
var this$ = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "inputs", "style": {"backgroundColor": this$.props.backgroundColor, "opacity": this$.props.opacity}},cljs.core.map.call(null,((function (this$){
return (function (p__5953){
var vec__5954 = p__5953;
var k = cljs.core.nth.call(null,vec__5954,(0),null);
var v = cljs.core.nth.call(null,vec__5954,(1),null);
return pga2d.ui.input_widget.call(null,k,v,this$.props.draw,this$.props.appstate);
});})(this$))
,cljs.core.seq.call(null,this$.props.inputs)));
})});

//# sourceMappingURL=ui.js.map?rel=1454882954374