// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23575 = cljs.core._EQ_;
var expr__23576 = (function (){var or__16852__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23579){if((e23579 instanceof Error)){
var e = e23579;
return false;
} else {
throw e23579;

}
}})();
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23575.call(null,"true",expr__23576))){
return true;
} else {
if(cljs.core.truth_(pred__23575.call(null,"false",expr__23576))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23576)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23581){if((e23581 instanceof Error)){
var e = e23581;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23581;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17917__auto__ = [];
var len__17910__auto___23583 = arguments.length;
var i__17911__auto___23584 = (0);
while(true){
if((i__17911__auto___23584 < len__17910__auto___23583)){
args__17917__auto__.push((arguments[i__17911__auto___23584]));

var G__23585 = (i__17911__auto___23584 + (1));
i__17911__auto___23584 = G__23585;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23582){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23582));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23586){
var map__23589 = p__23586;
var map__23589__$1 = ((((!((map__23589 == null)))?((((map__23589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23589):map__23589);
var message = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16852__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16840__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16840__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16840__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19188__auto___23751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___23751,ch){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___23751,ch){
return (function (state_23720){
var state_val_23721 = (state_23720[(1)]);
if((state_val_23721 === (7))){
var inst_23716 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23722_23752 = state_23720__$1;
(statearr_23722_23752[(2)] = inst_23716);

(statearr_23722_23752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (1))){
var state_23720__$1 = state_23720;
var statearr_23723_23753 = state_23720__$1;
(statearr_23723_23753[(2)] = null);

(statearr_23723_23753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (4))){
var inst_23673 = (state_23720[(7)]);
var inst_23673__$1 = (state_23720[(2)]);
var state_23720__$1 = (function (){var statearr_23724 = state_23720;
(statearr_23724[(7)] = inst_23673__$1);

return statearr_23724;
})();
if(cljs.core.truth_(inst_23673__$1)){
var statearr_23725_23754 = state_23720__$1;
(statearr_23725_23754[(1)] = (5));

} else {
var statearr_23726_23755 = state_23720__$1;
(statearr_23726_23755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (15))){
var inst_23680 = (state_23720[(8)]);
var inst_23695 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23680);
var inst_23696 = cljs.core.first.call(null,inst_23695);
var inst_23697 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23696);
var inst_23698 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23697)].join('');
var inst_23699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23698);
var state_23720__$1 = state_23720;
var statearr_23727_23756 = state_23720__$1;
(statearr_23727_23756[(2)] = inst_23699);

(statearr_23727_23756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (13))){
var inst_23704 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23728_23757 = state_23720__$1;
(statearr_23728_23757[(2)] = inst_23704);

(statearr_23728_23757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (6))){
var state_23720__$1 = state_23720;
var statearr_23729_23758 = state_23720__$1;
(statearr_23729_23758[(2)] = null);

(statearr_23729_23758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (17))){
var inst_23702 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23730_23759 = state_23720__$1;
(statearr_23730_23759[(2)] = inst_23702);

(statearr_23730_23759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (3))){
var inst_23718 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23720__$1,inst_23718);
} else {
if((state_val_23721 === (12))){
var inst_23679 = (state_23720[(9)]);
var inst_23693 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23679,opts);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23693)){
var statearr_23731_23760 = state_23720__$1;
(statearr_23731_23760[(1)] = (15));

} else {
var statearr_23732_23761 = state_23720__$1;
(statearr_23732_23761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (2))){
var state_23720__$1 = state_23720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23720__$1,(4),ch);
} else {
if((state_val_23721 === (11))){
var inst_23680 = (state_23720[(8)]);
var inst_23685 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23686 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23680);
var inst_23687 = cljs.core.async.timeout.call(null,(1000));
var inst_23688 = [inst_23686,inst_23687];
var inst_23689 = (new cljs.core.PersistentVector(null,2,(5),inst_23685,inst_23688,null));
var state_23720__$1 = state_23720;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23720__$1,(14),inst_23689);
} else {
if((state_val_23721 === (9))){
var inst_23680 = (state_23720[(8)]);
var inst_23706 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23707 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23680);
var inst_23708 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23707);
var inst_23709 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23708)].join('');
var inst_23710 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23709);
var state_23720__$1 = (function (){var statearr_23733 = state_23720;
(statearr_23733[(10)] = inst_23706);

return statearr_23733;
})();
var statearr_23734_23762 = state_23720__$1;
(statearr_23734_23762[(2)] = inst_23710);

(statearr_23734_23762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (5))){
var inst_23673 = (state_23720[(7)]);
var inst_23675 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23676 = (new cljs.core.PersistentArrayMap(null,2,inst_23675,null));
var inst_23677 = (new cljs.core.PersistentHashSet(null,inst_23676,null));
var inst_23678 = figwheel.client.focus_msgs.call(null,inst_23677,inst_23673);
var inst_23679 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23678);
var inst_23680 = cljs.core.first.call(null,inst_23678);
var inst_23681 = figwheel.client.autoload_QMARK_.call(null);
var state_23720__$1 = (function (){var statearr_23735 = state_23720;
(statearr_23735[(9)] = inst_23679);

(statearr_23735[(8)] = inst_23680);

return statearr_23735;
})();
if(cljs.core.truth_(inst_23681)){
var statearr_23736_23763 = state_23720__$1;
(statearr_23736_23763[(1)] = (8));

} else {
var statearr_23737_23764 = state_23720__$1;
(statearr_23737_23764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (14))){
var inst_23691 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23738_23765 = state_23720__$1;
(statearr_23738_23765[(2)] = inst_23691);

(statearr_23738_23765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (16))){
var state_23720__$1 = state_23720;
var statearr_23739_23766 = state_23720__$1;
(statearr_23739_23766[(2)] = null);

(statearr_23739_23766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (10))){
var inst_23712 = (state_23720[(2)]);
var state_23720__$1 = (function (){var statearr_23740 = state_23720;
(statearr_23740[(11)] = inst_23712);

return statearr_23740;
})();
var statearr_23741_23767 = state_23720__$1;
(statearr_23741_23767[(2)] = null);

(statearr_23741_23767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (8))){
var inst_23679 = (state_23720[(9)]);
var inst_23683 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23679,opts);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23683)){
var statearr_23742_23768 = state_23720__$1;
(statearr_23742_23768[(1)] = (11));

} else {
var statearr_23743_23769 = state_23720__$1;
(statearr_23743_23769[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19188__auto___23751,ch))
;
return ((function (switch__19076__auto__,c__19188__auto___23751,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19077__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19077__auto____0 = (function (){
var statearr_23747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23747[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19077__auto__);

(statearr_23747[(1)] = (1));

return statearr_23747;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19077__auto____1 = (function (state_23720){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_23720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e23748){if((e23748 instanceof Object)){
var ex__19080__auto__ = e23748;
var statearr_23749_23770 = state_23720;
(statearr_23749_23770[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23771 = state_23720;
state_23720 = G__23771;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19077__auto__ = function(state_23720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19077__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19077__auto____1.call(this,state_23720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19077__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19077__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___23751,ch))
})();
var state__19190__auto__ = (function (){var statearr_23750 = f__19189__auto__.call(null);
(statearr_23750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___23751);

return statearr_23750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___23751,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23772_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23772_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23779 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23779){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23777 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23778 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23778;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23777;
}}catch (e23776){if((e23776 instanceof Error)){
var e = e23776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23779], null));
} else {
var e = e23776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23779))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23780){
var map__23787 = p__23780;
var map__23787__$1 = ((((!((map__23787 == null)))?((((map__23787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23787):map__23787);
var opts = map__23787__$1;
var build_id = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23787,map__23787__$1,opts,build_id){
return (function (p__23789){
var vec__23790 = p__23789;
var map__23791 = cljs.core.nth.call(null,vec__23790,(0),null);
var map__23791__$1 = ((((!((map__23791 == null)))?((((map__23791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23791):map__23791);
var msg = map__23791__$1;
var msg_name = cljs.core.get.call(null,map__23791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23790,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23790,map__23791,map__23791__$1,msg,msg_name,_,map__23787,map__23787__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23790,map__23791,map__23791__$1,msg,msg_name,_,map__23787,map__23787__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23787,map__23787__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23797){
var vec__23798 = p__23797;
var map__23799 = cljs.core.nth.call(null,vec__23798,(0),null);
var map__23799__$1 = ((((!((map__23799 == null)))?((((map__23799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23799):map__23799);
var msg = map__23799__$1;
var msg_name = cljs.core.get.call(null,map__23799__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23798,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23801){
var map__23811 = p__23801;
var map__23811__$1 = ((((!((map__23811 == null)))?((((map__23811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23811):map__23811);
var on_compile_warning = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23811,map__23811__$1,on_compile_warning,on_compile_fail){
return (function (p__23813){
var vec__23814 = p__23813;
var map__23815 = cljs.core.nth.call(null,vec__23814,(0),null);
var map__23815__$1 = ((((!((map__23815 == null)))?((((map__23815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23815):map__23815);
var msg = map__23815__$1;
var msg_name = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23814,(1));
var pred__23817 = cljs.core._EQ_;
var expr__23818 = msg_name;
if(cljs.core.truth_(pred__23817.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23818))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23817.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23818))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23811,map__23811__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__,msg_hist,msg_names,msg){
return (function (state_24034){
var state_val_24035 = (state_24034[(1)]);
if((state_val_24035 === (7))){
var inst_23958 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_23958)){
var statearr_24036_24082 = state_24034__$1;
(statearr_24036_24082[(1)] = (8));

} else {
var statearr_24037_24083 = state_24034__$1;
(statearr_24037_24083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (20))){
var inst_24028 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24038_24084 = state_24034__$1;
(statearr_24038_24084[(2)] = inst_24028);

(statearr_24038_24084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (27))){
var inst_24024 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24039_24085 = state_24034__$1;
(statearr_24039_24085[(2)] = inst_24024);

(statearr_24039_24085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (1))){
var inst_23951 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_23951)){
var statearr_24040_24086 = state_24034__$1;
(statearr_24040_24086[(1)] = (2));

} else {
var statearr_24041_24087 = state_24034__$1;
(statearr_24041_24087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (24))){
var inst_24026 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24042_24088 = state_24034__$1;
(statearr_24042_24088[(2)] = inst_24026);

(statearr_24042_24088[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (4))){
var inst_24032 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24034__$1,inst_24032);
} else {
if((state_val_24035 === (15))){
var inst_24030 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24043_24089 = state_24034__$1;
(statearr_24043_24089[(2)] = inst_24030);

(statearr_24043_24089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (21))){
var inst_23989 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24044_24090 = state_24034__$1;
(statearr_24044_24090[(2)] = inst_23989);

(statearr_24044_24090[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (31))){
var inst_24013 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_24013)){
var statearr_24045_24091 = state_24034__$1;
(statearr_24045_24091[(1)] = (34));

} else {
var statearr_24046_24092 = state_24034__$1;
(statearr_24046_24092[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (32))){
var inst_24022 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24047_24093 = state_24034__$1;
(statearr_24047_24093[(2)] = inst_24022);

(statearr_24047_24093[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (33))){
var inst_24011 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24048_24094 = state_24034__$1;
(statearr_24048_24094[(2)] = inst_24011);

(statearr_24048_24094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (13))){
var inst_23972 = figwheel.client.heads_up.clear.call(null);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(16),inst_23972);
} else {
if((state_val_24035 === (22))){
var inst_23993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23994 = figwheel.client.heads_up.append_message.call(null,inst_23993);
var state_24034__$1 = state_24034;
var statearr_24049_24095 = state_24034__$1;
(statearr_24049_24095[(2)] = inst_23994);

(statearr_24049_24095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (36))){
var inst_24020 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24050_24096 = state_24034__$1;
(statearr_24050_24096[(2)] = inst_24020);

(statearr_24050_24096[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (29))){
var inst_24004 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24051_24097 = state_24034__$1;
(statearr_24051_24097[(2)] = inst_24004);

(statearr_24051_24097[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (6))){
var inst_23953 = (state_24034[(7)]);
var state_24034__$1 = state_24034;
var statearr_24052_24098 = state_24034__$1;
(statearr_24052_24098[(2)] = inst_23953);

(statearr_24052_24098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (28))){
var inst_24000 = (state_24034[(2)]);
var inst_24001 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24002 = figwheel.client.heads_up.display_warning.call(null,inst_24001);
var state_24034__$1 = (function (){var statearr_24053 = state_24034;
(statearr_24053[(8)] = inst_24000);

return statearr_24053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(29),inst_24002);
} else {
if((state_val_24035 === (25))){
var inst_23998 = figwheel.client.heads_up.clear.call(null);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(28),inst_23998);
} else {
if((state_val_24035 === (34))){
var inst_24015 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(37),inst_24015);
} else {
if((state_val_24035 === (17))){
var inst_23980 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24054_24099 = state_24034__$1;
(statearr_24054_24099[(2)] = inst_23980);

(statearr_24054_24099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (3))){
var inst_23970 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_23970)){
var statearr_24055_24100 = state_24034__$1;
(statearr_24055_24100[(1)] = (13));

} else {
var statearr_24056_24101 = state_24034__$1;
(statearr_24056_24101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (12))){
var inst_23966 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24057_24102 = state_24034__$1;
(statearr_24057_24102[(2)] = inst_23966);

(statearr_24057_24102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (2))){
var inst_23953 = (state_24034[(7)]);
var inst_23953__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24034__$1 = (function (){var statearr_24058 = state_24034;
(statearr_24058[(7)] = inst_23953__$1);

return statearr_24058;
})();
if(cljs.core.truth_(inst_23953__$1)){
var statearr_24059_24103 = state_24034__$1;
(statearr_24059_24103[(1)] = (5));

} else {
var statearr_24060_24104 = state_24034__$1;
(statearr_24060_24104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (23))){
var inst_23996 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_23996)){
var statearr_24061_24105 = state_24034__$1;
(statearr_24061_24105[(1)] = (25));

} else {
var statearr_24062_24106 = state_24034__$1;
(statearr_24062_24106[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (35))){
var state_24034__$1 = state_24034;
var statearr_24063_24107 = state_24034__$1;
(statearr_24063_24107[(2)] = null);

(statearr_24063_24107[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (19))){
var inst_23991 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_23991)){
var statearr_24064_24108 = state_24034__$1;
(statearr_24064_24108[(1)] = (22));

} else {
var statearr_24065_24109 = state_24034__$1;
(statearr_24065_24109[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (11))){
var inst_23962 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24066_24110 = state_24034__$1;
(statearr_24066_24110[(2)] = inst_23962);

(statearr_24066_24110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (9))){
var inst_23964 = figwheel.client.heads_up.clear.call(null);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(12),inst_23964);
} else {
if((state_val_24035 === (5))){
var inst_23955 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24034__$1 = state_24034;
var statearr_24067_24111 = state_24034__$1;
(statearr_24067_24111[(2)] = inst_23955);

(statearr_24067_24111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (14))){
var inst_23982 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_23982)){
var statearr_24068_24112 = state_24034__$1;
(statearr_24068_24112[(1)] = (18));

} else {
var statearr_24069_24113 = state_24034__$1;
(statearr_24069_24113[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (26))){
var inst_24006 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_24006)){
var statearr_24070_24114 = state_24034__$1;
(statearr_24070_24114[(1)] = (30));

} else {
var statearr_24071_24115 = state_24034__$1;
(statearr_24071_24115[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (16))){
var inst_23974 = (state_24034[(2)]);
var inst_23975 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23976 = figwheel.client.format_messages.call(null,inst_23975);
var inst_23977 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23978 = figwheel.client.heads_up.display_error.call(null,inst_23976,inst_23977);
var state_24034__$1 = (function (){var statearr_24072 = state_24034;
(statearr_24072[(9)] = inst_23974);

return statearr_24072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(17),inst_23978);
} else {
if((state_val_24035 === (30))){
var inst_24008 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24009 = figwheel.client.heads_up.display_warning.call(null,inst_24008);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(33),inst_24009);
} else {
if((state_val_24035 === (10))){
var inst_23968 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24073_24116 = state_24034__$1;
(statearr_24073_24116[(2)] = inst_23968);

(statearr_24073_24116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (18))){
var inst_23984 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23985 = figwheel.client.format_messages.call(null,inst_23984);
var inst_23986 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23987 = figwheel.client.heads_up.display_error.call(null,inst_23985,inst_23986);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(21),inst_23987);
} else {
if((state_val_24035 === (37))){
var inst_24017 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24074_24117 = state_24034__$1;
(statearr_24074_24117[(2)] = inst_24017);

(statearr_24074_24117[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (8))){
var inst_23960 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(11),inst_23960);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19188__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19076__auto__,c__19188__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto____0 = (function (){
var statearr_24078 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24078[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto__);

(statearr_24078[(1)] = (1));

return statearr_24078;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto____1 = (function (state_24034){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_24034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e24079){if((e24079 instanceof Object)){
var ex__19080__auto__ = e24079;
var statearr_24080_24118 = state_24034;
(statearr_24080_24118[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24119 = state_24034;
state_24034 = G__24119;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto__ = function(state_24034){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto____1.call(this,state_24034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__,msg_hist,msg_names,msg))
})();
var state__19190__auto__ = (function (){var statearr_24081 = f__19189__auto__.call(null);
(statearr_24081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_24081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__,msg_hist,msg_names,msg))
);

return c__19188__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19188__auto___24182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___24182,ch){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___24182,ch){
return (function (state_24165){
var state_val_24166 = (state_24165[(1)]);
if((state_val_24166 === (1))){
var state_24165__$1 = state_24165;
var statearr_24167_24183 = state_24165__$1;
(statearr_24167_24183[(2)] = null);

(statearr_24167_24183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24166 === (2))){
var state_24165__$1 = state_24165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24165__$1,(4),ch);
} else {
if((state_val_24166 === (3))){
var inst_24163 = (state_24165[(2)]);
var state_24165__$1 = state_24165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24165__$1,inst_24163);
} else {
if((state_val_24166 === (4))){
var inst_24153 = (state_24165[(7)]);
var inst_24153__$1 = (state_24165[(2)]);
var state_24165__$1 = (function (){var statearr_24168 = state_24165;
(statearr_24168[(7)] = inst_24153__$1);

return statearr_24168;
})();
if(cljs.core.truth_(inst_24153__$1)){
var statearr_24169_24184 = state_24165__$1;
(statearr_24169_24184[(1)] = (5));

} else {
var statearr_24170_24185 = state_24165__$1;
(statearr_24170_24185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24166 === (5))){
var inst_24153 = (state_24165[(7)]);
var inst_24155 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24153);
var state_24165__$1 = state_24165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24165__$1,(8),inst_24155);
} else {
if((state_val_24166 === (6))){
var state_24165__$1 = state_24165;
var statearr_24171_24186 = state_24165__$1;
(statearr_24171_24186[(2)] = null);

(statearr_24171_24186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24166 === (7))){
var inst_24161 = (state_24165[(2)]);
var state_24165__$1 = state_24165;
var statearr_24172_24187 = state_24165__$1;
(statearr_24172_24187[(2)] = inst_24161);

(statearr_24172_24187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24166 === (8))){
var inst_24157 = (state_24165[(2)]);
var state_24165__$1 = (function (){var statearr_24173 = state_24165;
(statearr_24173[(8)] = inst_24157);

return statearr_24173;
})();
var statearr_24174_24188 = state_24165__$1;
(statearr_24174_24188[(2)] = null);

(statearr_24174_24188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19188__auto___24182,ch))
;
return ((function (switch__19076__auto__,c__19188__auto___24182,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19077__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19077__auto____0 = (function (){
var statearr_24178 = [null,null,null,null,null,null,null,null,null];
(statearr_24178[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19077__auto__);

(statearr_24178[(1)] = (1));

return statearr_24178;
});
var figwheel$client$heads_up_plugin_$_state_machine__19077__auto____1 = (function (state_24165){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_24165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e24179){if((e24179 instanceof Object)){
var ex__19080__auto__ = e24179;
var statearr_24180_24189 = state_24165;
(statearr_24180_24189[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24190 = state_24165;
state_24165 = G__24190;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19077__auto__ = function(state_24165){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19077__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19077__auto____1.call(this,state_24165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19077__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19077__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___24182,ch))
})();
var state__19190__auto__ = (function (){var statearr_24181 = f__19189__auto__.call(null);
(statearr_24181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___24182);

return statearr_24181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___24182,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__){
return (function (state_24211){
var state_val_24212 = (state_24211[(1)]);
if((state_val_24212 === (1))){
var inst_24206 = cljs.core.async.timeout.call(null,(3000));
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24211__$1,(2),inst_24206);
} else {
if((state_val_24212 === (2))){
var inst_24208 = (state_24211[(2)]);
var inst_24209 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24211__$1 = (function (){var statearr_24213 = state_24211;
(statearr_24213[(7)] = inst_24208);

return statearr_24213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24211__$1,inst_24209);
} else {
return null;
}
}
});})(c__19188__auto__))
;
return ((function (switch__19076__auto__,c__19188__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19077__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19077__auto____0 = (function (){
var statearr_24217 = [null,null,null,null,null,null,null,null];
(statearr_24217[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19077__auto__);

(statearr_24217[(1)] = (1));

return statearr_24217;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19077__auto____1 = (function (state_24211){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_24211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e24218){if((e24218 instanceof Object)){
var ex__19080__auto__ = e24218;
var statearr_24219_24221 = state_24211;
(statearr_24219_24221[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24222 = state_24211;
state_24211 = G__24222;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19077__auto__ = function(state_24211){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19077__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19077__auto____1.call(this,state_24211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19077__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19077__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__))
})();
var state__19190__auto__ = (function (){var statearr_24220 = f__19189__auto__.call(null);
(statearr_24220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_24220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__))
);

return c__19188__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24223){
var map__24230 = p__24223;
var map__24230__$1 = ((((!((map__24230 == null)))?((((map__24230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24230):map__24230);
var ed = map__24230__$1;
var formatted_exception = cljs.core.get.call(null,map__24230__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24230__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24230__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24232_24236 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24233_24237 = null;
var count__24234_24238 = (0);
var i__24235_24239 = (0);
while(true){
if((i__24235_24239 < count__24234_24238)){
var msg_24240 = cljs.core._nth.call(null,chunk__24233_24237,i__24235_24239);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24240);

var G__24241 = seq__24232_24236;
var G__24242 = chunk__24233_24237;
var G__24243 = count__24234_24238;
var G__24244 = (i__24235_24239 + (1));
seq__24232_24236 = G__24241;
chunk__24233_24237 = G__24242;
count__24234_24238 = G__24243;
i__24235_24239 = G__24244;
continue;
} else {
var temp__4425__auto___24245 = cljs.core.seq.call(null,seq__24232_24236);
if(temp__4425__auto___24245){
var seq__24232_24246__$1 = temp__4425__auto___24245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24232_24246__$1)){
var c__17655__auto___24247 = cljs.core.chunk_first.call(null,seq__24232_24246__$1);
var G__24248 = cljs.core.chunk_rest.call(null,seq__24232_24246__$1);
var G__24249 = c__17655__auto___24247;
var G__24250 = cljs.core.count.call(null,c__17655__auto___24247);
var G__24251 = (0);
seq__24232_24236 = G__24248;
chunk__24233_24237 = G__24249;
count__24234_24238 = G__24250;
i__24235_24239 = G__24251;
continue;
} else {
var msg_24252 = cljs.core.first.call(null,seq__24232_24246__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24252);

var G__24253 = cljs.core.next.call(null,seq__24232_24246__$1);
var G__24254 = null;
var G__24255 = (0);
var G__24256 = (0);
seq__24232_24236 = G__24253;
chunk__24233_24237 = G__24254;
count__24234_24238 = G__24255;
i__24235_24239 = G__24256;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24257){
var map__24260 = p__24257;
var map__24260__$1 = ((((!((map__24260 == null)))?((((map__24260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24260):map__24260);
var w = map__24260__$1;
var message = cljs.core.get.call(null,map__24260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16840__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16840__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16840__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24268 = cljs.core.seq.call(null,plugins);
var chunk__24269 = null;
var count__24270 = (0);
var i__24271 = (0);
while(true){
if((i__24271 < count__24270)){
var vec__24272 = cljs.core._nth.call(null,chunk__24269,i__24271);
var k = cljs.core.nth.call(null,vec__24272,(0),null);
var plugin = cljs.core.nth.call(null,vec__24272,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24274 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24268,chunk__24269,count__24270,i__24271,pl_24274,vec__24272,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24274.call(null,msg_hist);
});})(seq__24268,chunk__24269,count__24270,i__24271,pl_24274,vec__24272,k,plugin))
);
} else {
}

var G__24275 = seq__24268;
var G__24276 = chunk__24269;
var G__24277 = count__24270;
var G__24278 = (i__24271 + (1));
seq__24268 = G__24275;
chunk__24269 = G__24276;
count__24270 = G__24277;
i__24271 = G__24278;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24268);
if(temp__4425__auto__){
var seq__24268__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24268__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__24268__$1);
var G__24279 = cljs.core.chunk_rest.call(null,seq__24268__$1);
var G__24280 = c__17655__auto__;
var G__24281 = cljs.core.count.call(null,c__17655__auto__);
var G__24282 = (0);
seq__24268 = G__24279;
chunk__24269 = G__24280;
count__24270 = G__24281;
i__24271 = G__24282;
continue;
} else {
var vec__24273 = cljs.core.first.call(null,seq__24268__$1);
var k = cljs.core.nth.call(null,vec__24273,(0),null);
var plugin = cljs.core.nth.call(null,vec__24273,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24283 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24268,chunk__24269,count__24270,i__24271,pl_24283,vec__24273,k,plugin,seq__24268__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24283.call(null,msg_hist);
});})(seq__24268,chunk__24269,count__24270,i__24271,pl_24283,vec__24273,k,plugin,seq__24268__$1,temp__4425__auto__))
);
} else {
}

var G__24284 = cljs.core.next.call(null,seq__24268__$1);
var G__24285 = null;
var G__24286 = (0);
var G__24287 = (0);
seq__24268 = G__24284;
chunk__24269 = G__24285;
count__24270 = G__24286;
i__24271 = G__24287;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24288 = [];
var len__17910__auto___24291 = arguments.length;
var i__17911__auto___24292 = (0);
while(true){
if((i__17911__auto___24292 < len__17910__auto___24291)){
args24288.push((arguments[i__17911__auto___24292]));

var G__24293 = (i__17911__auto___24292 + (1));
i__17911__auto___24292 = G__24293;
continue;
} else {
}
break;
}

var G__24290 = args24288.length;
switch (G__24290) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24288.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17917__auto__ = [];
var len__17910__auto___24299 = arguments.length;
var i__17911__auto___24300 = (0);
while(true){
if((i__17911__auto___24300 < len__17910__auto___24299)){
args__17917__auto__.push((arguments[i__17911__auto___24300]));

var G__24301 = (i__17911__auto___24300 + (1));
i__17911__auto___24300 = G__24301;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24296){
var map__24297 = p__24296;
var map__24297__$1 = ((((!((map__24297 == null)))?((((map__24297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24297):map__24297);
var opts = map__24297__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24295){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24295));
});

//# sourceMappingURL=client.js.map?rel=1453073549180