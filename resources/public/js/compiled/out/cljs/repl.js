// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23156_23170 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23157_23171 = null;
var count__23158_23172 = (0);
var i__23159_23173 = (0);
while(true){
if((i__23159_23173 < count__23158_23172)){
var f_23174 = cljs.core._nth.call(null,chunk__23157_23171,i__23159_23173);
cljs.core.println.call(null,"  ",f_23174);

var G__23175 = seq__23156_23170;
var G__23176 = chunk__23157_23171;
var G__23177 = count__23158_23172;
var G__23178 = (i__23159_23173 + (1));
seq__23156_23170 = G__23175;
chunk__23157_23171 = G__23176;
count__23158_23172 = G__23177;
i__23159_23173 = G__23178;
continue;
} else {
var temp__4425__auto___23179 = cljs.core.seq.call(null,seq__23156_23170);
if(temp__4425__auto___23179){
var seq__23156_23180__$1 = temp__4425__auto___23179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23156_23180__$1)){
var c__17655__auto___23181 = cljs.core.chunk_first.call(null,seq__23156_23180__$1);
var G__23182 = cljs.core.chunk_rest.call(null,seq__23156_23180__$1);
var G__23183 = c__17655__auto___23181;
var G__23184 = cljs.core.count.call(null,c__17655__auto___23181);
var G__23185 = (0);
seq__23156_23170 = G__23182;
chunk__23157_23171 = G__23183;
count__23158_23172 = G__23184;
i__23159_23173 = G__23185;
continue;
} else {
var f_23186 = cljs.core.first.call(null,seq__23156_23180__$1);
cljs.core.println.call(null,"  ",f_23186);

var G__23187 = cljs.core.next.call(null,seq__23156_23180__$1);
var G__23188 = null;
var G__23189 = (0);
var G__23190 = (0);
seq__23156_23170 = G__23187;
chunk__23157_23171 = G__23188;
count__23158_23172 = G__23189;
i__23159_23173 = G__23190;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23191 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23191);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23191)))?cljs.core.second.call(null,arglists_23191):arglists_23191));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23161 = null;
var count__23162 = (0);
var i__23163 = (0);
while(true){
if((i__23163 < count__23162)){
var vec__23164 = cljs.core._nth.call(null,chunk__23161,i__23163);
var name = cljs.core.nth.call(null,vec__23164,(0),null);
var map__23165 = cljs.core.nth.call(null,vec__23164,(1),null);
var map__23165__$1 = ((((!((map__23165 == null)))?((((map__23165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23165):map__23165);
var doc = cljs.core.get.call(null,map__23165__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23165__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23192 = seq__23160;
var G__23193 = chunk__23161;
var G__23194 = count__23162;
var G__23195 = (i__23163 + (1));
seq__23160 = G__23192;
chunk__23161 = G__23193;
count__23162 = G__23194;
i__23163 = G__23195;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23160);
if(temp__4425__auto__){
var seq__23160__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23160__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__23160__$1);
var G__23196 = cljs.core.chunk_rest.call(null,seq__23160__$1);
var G__23197 = c__17655__auto__;
var G__23198 = cljs.core.count.call(null,c__17655__auto__);
var G__23199 = (0);
seq__23160 = G__23196;
chunk__23161 = G__23197;
count__23162 = G__23198;
i__23163 = G__23199;
continue;
} else {
var vec__23167 = cljs.core.first.call(null,seq__23160__$1);
var name = cljs.core.nth.call(null,vec__23167,(0),null);
var map__23168 = cljs.core.nth.call(null,vec__23167,(1),null);
var map__23168__$1 = ((((!((map__23168 == null)))?((((map__23168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23168):map__23168);
var doc = cljs.core.get.call(null,map__23168__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23168__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23200 = cljs.core.next.call(null,seq__23160__$1);
var G__23201 = null;
var G__23202 = (0);
var G__23203 = (0);
seq__23160 = G__23200;
chunk__23161 = G__23201;
count__23162 = G__23202;
i__23163 = G__23203;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1453073547911