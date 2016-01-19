// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16852__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16852__auto__){
return or__16852__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16852__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22132_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22132_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22137 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22138 = null;
var count__22139 = (0);
var i__22140 = (0);
while(true){
if((i__22140 < count__22139)){
var n = cljs.core._nth.call(null,chunk__22138,i__22140);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22141 = seq__22137;
var G__22142 = chunk__22138;
var G__22143 = count__22139;
var G__22144 = (i__22140 + (1));
seq__22137 = G__22141;
chunk__22138 = G__22142;
count__22139 = G__22143;
i__22140 = G__22144;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22137);
if(temp__4425__auto__){
var seq__22137__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22137__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__22137__$1);
var G__22145 = cljs.core.chunk_rest.call(null,seq__22137__$1);
var G__22146 = c__17655__auto__;
var G__22147 = cljs.core.count.call(null,c__17655__auto__);
var G__22148 = (0);
seq__22137 = G__22145;
chunk__22138 = G__22146;
count__22139 = G__22147;
i__22140 = G__22148;
continue;
} else {
var n = cljs.core.first.call(null,seq__22137__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22149 = cljs.core.next.call(null,seq__22137__$1);
var G__22150 = null;
var G__22151 = (0);
var G__22152 = (0);
seq__22137 = G__22149;
chunk__22138 = G__22150;
count__22139 = G__22151;
i__22140 = G__22152;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22191_22198 = cljs.core.seq.call(null,deps);
var chunk__22192_22199 = null;
var count__22193_22200 = (0);
var i__22194_22201 = (0);
while(true){
if((i__22194_22201 < count__22193_22200)){
var dep_22202 = cljs.core._nth.call(null,chunk__22192_22199,i__22194_22201);
topo_sort_helper_STAR_.call(null,dep_22202,(depth + (1)),state);

var G__22203 = seq__22191_22198;
var G__22204 = chunk__22192_22199;
var G__22205 = count__22193_22200;
var G__22206 = (i__22194_22201 + (1));
seq__22191_22198 = G__22203;
chunk__22192_22199 = G__22204;
count__22193_22200 = G__22205;
i__22194_22201 = G__22206;
continue;
} else {
var temp__4425__auto___22207 = cljs.core.seq.call(null,seq__22191_22198);
if(temp__4425__auto___22207){
var seq__22191_22208__$1 = temp__4425__auto___22207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22191_22208__$1)){
var c__17655__auto___22209 = cljs.core.chunk_first.call(null,seq__22191_22208__$1);
var G__22210 = cljs.core.chunk_rest.call(null,seq__22191_22208__$1);
var G__22211 = c__17655__auto___22209;
var G__22212 = cljs.core.count.call(null,c__17655__auto___22209);
var G__22213 = (0);
seq__22191_22198 = G__22210;
chunk__22192_22199 = G__22211;
count__22193_22200 = G__22212;
i__22194_22201 = G__22213;
continue;
} else {
var dep_22214 = cljs.core.first.call(null,seq__22191_22208__$1);
topo_sort_helper_STAR_.call(null,dep_22214,(depth + (1)),state);

var G__22215 = cljs.core.next.call(null,seq__22191_22208__$1);
var G__22216 = null;
var G__22217 = (0);
var G__22218 = (0);
seq__22191_22198 = G__22215;
chunk__22192_22199 = G__22216;
count__22193_22200 = G__22217;
i__22194_22201 = G__22218;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22195){
var vec__22197 = p__22195;
var x = cljs.core.nth.call(null,vec__22197,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22197,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22197,x,xs,get_deps__$1){
return (function (p1__22153_SHARP_){
return clojure.set.difference.call(null,p1__22153_SHARP_,x);
});})(vec__22197,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22231 = cljs.core.seq.call(null,provides);
var chunk__22232 = null;
var count__22233 = (0);
var i__22234 = (0);
while(true){
if((i__22234 < count__22233)){
var prov = cljs.core._nth.call(null,chunk__22232,i__22234);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22235_22243 = cljs.core.seq.call(null,requires);
var chunk__22236_22244 = null;
var count__22237_22245 = (0);
var i__22238_22246 = (0);
while(true){
if((i__22238_22246 < count__22237_22245)){
var req_22247 = cljs.core._nth.call(null,chunk__22236_22244,i__22238_22246);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22247,prov);

var G__22248 = seq__22235_22243;
var G__22249 = chunk__22236_22244;
var G__22250 = count__22237_22245;
var G__22251 = (i__22238_22246 + (1));
seq__22235_22243 = G__22248;
chunk__22236_22244 = G__22249;
count__22237_22245 = G__22250;
i__22238_22246 = G__22251;
continue;
} else {
var temp__4425__auto___22252 = cljs.core.seq.call(null,seq__22235_22243);
if(temp__4425__auto___22252){
var seq__22235_22253__$1 = temp__4425__auto___22252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22235_22253__$1)){
var c__17655__auto___22254 = cljs.core.chunk_first.call(null,seq__22235_22253__$1);
var G__22255 = cljs.core.chunk_rest.call(null,seq__22235_22253__$1);
var G__22256 = c__17655__auto___22254;
var G__22257 = cljs.core.count.call(null,c__17655__auto___22254);
var G__22258 = (0);
seq__22235_22243 = G__22255;
chunk__22236_22244 = G__22256;
count__22237_22245 = G__22257;
i__22238_22246 = G__22258;
continue;
} else {
var req_22259 = cljs.core.first.call(null,seq__22235_22253__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22259,prov);

var G__22260 = cljs.core.next.call(null,seq__22235_22253__$1);
var G__22261 = null;
var G__22262 = (0);
var G__22263 = (0);
seq__22235_22243 = G__22260;
chunk__22236_22244 = G__22261;
count__22237_22245 = G__22262;
i__22238_22246 = G__22263;
continue;
}
} else {
}
}
break;
}

var G__22264 = seq__22231;
var G__22265 = chunk__22232;
var G__22266 = count__22233;
var G__22267 = (i__22234 + (1));
seq__22231 = G__22264;
chunk__22232 = G__22265;
count__22233 = G__22266;
i__22234 = G__22267;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22231);
if(temp__4425__auto__){
var seq__22231__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22231__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__22231__$1);
var G__22268 = cljs.core.chunk_rest.call(null,seq__22231__$1);
var G__22269 = c__17655__auto__;
var G__22270 = cljs.core.count.call(null,c__17655__auto__);
var G__22271 = (0);
seq__22231 = G__22268;
chunk__22232 = G__22269;
count__22233 = G__22270;
i__22234 = G__22271;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22231__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22239_22272 = cljs.core.seq.call(null,requires);
var chunk__22240_22273 = null;
var count__22241_22274 = (0);
var i__22242_22275 = (0);
while(true){
if((i__22242_22275 < count__22241_22274)){
var req_22276 = cljs.core._nth.call(null,chunk__22240_22273,i__22242_22275);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22276,prov);

var G__22277 = seq__22239_22272;
var G__22278 = chunk__22240_22273;
var G__22279 = count__22241_22274;
var G__22280 = (i__22242_22275 + (1));
seq__22239_22272 = G__22277;
chunk__22240_22273 = G__22278;
count__22241_22274 = G__22279;
i__22242_22275 = G__22280;
continue;
} else {
var temp__4425__auto___22281__$1 = cljs.core.seq.call(null,seq__22239_22272);
if(temp__4425__auto___22281__$1){
var seq__22239_22282__$1 = temp__4425__auto___22281__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22239_22282__$1)){
var c__17655__auto___22283 = cljs.core.chunk_first.call(null,seq__22239_22282__$1);
var G__22284 = cljs.core.chunk_rest.call(null,seq__22239_22282__$1);
var G__22285 = c__17655__auto___22283;
var G__22286 = cljs.core.count.call(null,c__17655__auto___22283);
var G__22287 = (0);
seq__22239_22272 = G__22284;
chunk__22240_22273 = G__22285;
count__22241_22274 = G__22286;
i__22242_22275 = G__22287;
continue;
} else {
var req_22288 = cljs.core.first.call(null,seq__22239_22282__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22288,prov);

var G__22289 = cljs.core.next.call(null,seq__22239_22282__$1);
var G__22290 = null;
var G__22291 = (0);
var G__22292 = (0);
seq__22239_22272 = G__22289;
chunk__22240_22273 = G__22290;
count__22241_22274 = G__22291;
i__22242_22275 = G__22292;
continue;
}
} else {
}
}
break;
}

var G__22293 = cljs.core.next.call(null,seq__22231__$1);
var G__22294 = null;
var G__22295 = (0);
var G__22296 = (0);
seq__22231 = G__22293;
chunk__22232 = G__22294;
count__22233 = G__22295;
i__22234 = G__22296;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22301_22305 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22302_22306 = null;
var count__22303_22307 = (0);
var i__22304_22308 = (0);
while(true){
if((i__22304_22308 < count__22303_22307)){
var ns_22309 = cljs.core._nth.call(null,chunk__22302_22306,i__22304_22308);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22309);

var G__22310 = seq__22301_22305;
var G__22311 = chunk__22302_22306;
var G__22312 = count__22303_22307;
var G__22313 = (i__22304_22308 + (1));
seq__22301_22305 = G__22310;
chunk__22302_22306 = G__22311;
count__22303_22307 = G__22312;
i__22304_22308 = G__22313;
continue;
} else {
var temp__4425__auto___22314 = cljs.core.seq.call(null,seq__22301_22305);
if(temp__4425__auto___22314){
var seq__22301_22315__$1 = temp__4425__auto___22314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22301_22315__$1)){
var c__17655__auto___22316 = cljs.core.chunk_first.call(null,seq__22301_22315__$1);
var G__22317 = cljs.core.chunk_rest.call(null,seq__22301_22315__$1);
var G__22318 = c__17655__auto___22316;
var G__22319 = cljs.core.count.call(null,c__17655__auto___22316);
var G__22320 = (0);
seq__22301_22305 = G__22317;
chunk__22302_22306 = G__22318;
count__22303_22307 = G__22319;
i__22304_22308 = G__22320;
continue;
} else {
var ns_22321 = cljs.core.first.call(null,seq__22301_22315__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22321);

var G__22322 = cljs.core.next.call(null,seq__22301_22315__$1);
var G__22323 = null;
var G__22324 = (0);
var G__22325 = (0);
seq__22301_22305 = G__22322;
chunk__22302_22306 = G__22323;
count__22303_22307 = G__22324;
i__22304_22308 = G__22325;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16852__auto__ = goog.require__;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22326__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22327__i = 0, G__22327__a = new Array(arguments.length -  0);
while (G__22327__i < G__22327__a.length) {G__22327__a[G__22327__i] = arguments[G__22327__i + 0]; ++G__22327__i;}
  args = new cljs.core.IndexedSeq(G__22327__a,0);
} 
return G__22326__delegate.call(this,args);};
G__22326.cljs$lang$maxFixedArity = 0;
G__22326.cljs$lang$applyTo = (function (arglist__22328){
var args = cljs.core.seq(arglist__22328);
return G__22326__delegate(args);
});
G__22326.cljs$core$IFn$_invoke$arity$variadic = G__22326__delegate;
return G__22326;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22330 = cljs.core._EQ_;
var expr__22331 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22330.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22331))){
var path_parts = ((function (pred__22330,expr__22331){
return (function (p1__22329_SHARP_){
return clojure.string.split.call(null,p1__22329_SHARP_,/[\/\\]/);
});})(pred__22330,expr__22331))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22330,expr__22331){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22333){if((e22333 instanceof Error)){
var e = e22333;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22333;

}
}})());
});
;})(path_parts,sep,root,pred__22330,expr__22331))
} else {
if(cljs.core.truth_(pred__22330.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22331))){
return ((function (pred__22330,expr__22331){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22330,expr__22331){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22330,expr__22331))
);

return deferred.addErrback(((function (deferred,pred__22330,expr__22331){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22330,expr__22331))
);
});
;})(pred__22330,expr__22331))
} else {
return ((function (pred__22330,expr__22331){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22330,expr__22331))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22334,callback){
var map__22337 = p__22334;
var map__22337__$1 = ((((!((map__22337 == null)))?((((map__22337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22337):map__22337);
var file_msg = map__22337__$1;
var request_url = cljs.core.get.call(null,map__22337__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22337,map__22337__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22337,map__22337__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__){
return (function (state_22361){
var state_val_22362 = (state_22361[(1)]);
if((state_val_22362 === (7))){
var inst_22357 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
var statearr_22363_22383 = state_22361__$1;
(statearr_22363_22383[(2)] = inst_22357);

(statearr_22363_22383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (1))){
var state_22361__$1 = state_22361;
var statearr_22364_22384 = state_22361__$1;
(statearr_22364_22384[(2)] = null);

(statearr_22364_22384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (4))){
var inst_22341 = (state_22361[(7)]);
var inst_22341__$1 = (state_22361[(2)]);
var state_22361__$1 = (function (){var statearr_22365 = state_22361;
(statearr_22365[(7)] = inst_22341__$1);

return statearr_22365;
})();
if(cljs.core.truth_(inst_22341__$1)){
var statearr_22366_22385 = state_22361__$1;
(statearr_22366_22385[(1)] = (5));

} else {
var statearr_22367_22386 = state_22361__$1;
(statearr_22367_22386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (6))){
var state_22361__$1 = state_22361;
var statearr_22368_22387 = state_22361__$1;
(statearr_22368_22387[(2)] = null);

(statearr_22368_22387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (3))){
var inst_22359 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22361__$1,inst_22359);
} else {
if((state_val_22362 === (2))){
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22361__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22362 === (11))){
var inst_22353 = (state_22361[(2)]);
var state_22361__$1 = (function (){var statearr_22369 = state_22361;
(statearr_22369[(8)] = inst_22353);

return statearr_22369;
})();
var statearr_22370_22388 = state_22361__$1;
(statearr_22370_22388[(2)] = null);

(statearr_22370_22388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (9))){
var inst_22347 = (state_22361[(9)]);
var inst_22345 = (state_22361[(10)]);
var inst_22349 = inst_22347.call(null,inst_22345);
var state_22361__$1 = state_22361;
var statearr_22371_22389 = state_22361__$1;
(statearr_22371_22389[(2)] = inst_22349);

(statearr_22371_22389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (5))){
var inst_22341 = (state_22361[(7)]);
var inst_22343 = figwheel.client.file_reloading.blocking_load.call(null,inst_22341);
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22361__$1,(8),inst_22343);
} else {
if((state_val_22362 === (10))){
var inst_22345 = (state_22361[(10)]);
var inst_22351 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22345);
var state_22361__$1 = state_22361;
var statearr_22372_22390 = state_22361__$1;
(statearr_22372_22390[(2)] = inst_22351);

(statearr_22372_22390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (8))){
var inst_22347 = (state_22361[(9)]);
var inst_22341 = (state_22361[(7)]);
var inst_22345 = (state_22361[(2)]);
var inst_22346 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22347__$1 = cljs.core.get.call(null,inst_22346,inst_22341);
var state_22361__$1 = (function (){var statearr_22373 = state_22361;
(statearr_22373[(9)] = inst_22347__$1);

(statearr_22373[(10)] = inst_22345);

return statearr_22373;
})();
if(cljs.core.truth_(inst_22347__$1)){
var statearr_22374_22391 = state_22361__$1;
(statearr_22374_22391[(1)] = (9));

} else {
var statearr_22375_22392 = state_22361__$1;
(statearr_22375_22392[(1)] = (10));

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
});})(c__19188__auto__))
;
return ((function (switch__19076__auto__,c__19188__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19077__auto__ = null;
var figwheel$client$file_reloading$state_machine__19077__auto____0 = (function (){
var statearr_22379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22379[(0)] = figwheel$client$file_reloading$state_machine__19077__auto__);

(statearr_22379[(1)] = (1));

return statearr_22379;
});
var figwheel$client$file_reloading$state_machine__19077__auto____1 = (function (state_22361){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_22361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e22380){if((e22380 instanceof Object)){
var ex__19080__auto__ = e22380;
var statearr_22381_22393 = state_22361;
(statearr_22381_22393[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22394 = state_22361;
state_22361 = G__22394;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19077__auto__ = function(state_22361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19077__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19077__auto____1.call(this,state_22361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19077__auto____0;
figwheel$client$file_reloading$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19077__auto____1;
return figwheel$client$file_reloading$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__))
})();
var state__19190__auto__ = (function (){var statearr_22382 = f__19189__auto__.call(null);
(statearr_22382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_22382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__))
);

return c__19188__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22395,callback){
var map__22398 = p__22395;
var map__22398__$1 = ((((!((map__22398 == null)))?((((map__22398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22398):map__22398);
var file_msg = map__22398__$1;
var namespace = cljs.core.get.call(null,map__22398__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22398,map__22398__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22398,map__22398__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22400){
var map__22403 = p__22400;
var map__22403__$1 = ((((!((map__22403 == null)))?((((map__22403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22403):map__22403);
var file_msg = map__22403__$1;
var namespace = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16840__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16840__auto__){
var or__16852__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
var or__16852__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto____$1)){
return or__16852__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16840__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22405,callback){
var map__22408 = p__22405;
var map__22408__$1 = ((((!((map__22408 == null)))?((((map__22408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22408):map__22408);
var file_msg = map__22408__$1;
var request_url = cljs.core.get.call(null,map__22408__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19188__auto___22496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___22496,out){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___22496,out){
return (function (state_22478){
var state_val_22479 = (state_22478[(1)]);
if((state_val_22479 === (1))){
var inst_22456 = cljs.core.nth.call(null,files,(0),null);
var inst_22457 = cljs.core.nthnext.call(null,files,(1));
var inst_22458 = files;
var state_22478__$1 = (function (){var statearr_22480 = state_22478;
(statearr_22480[(7)] = inst_22456);

(statearr_22480[(8)] = inst_22457);

(statearr_22480[(9)] = inst_22458);

return statearr_22480;
})();
var statearr_22481_22497 = state_22478__$1;
(statearr_22481_22497[(2)] = null);

(statearr_22481_22497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (2))){
var inst_22461 = (state_22478[(10)]);
var inst_22458 = (state_22478[(9)]);
var inst_22461__$1 = cljs.core.nth.call(null,inst_22458,(0),null);
var inst_22462 = cljs.core.nthnext.call(null,inst_22458,(1));
var inst_22463 = (inst_22461__$1 == null);
var inst_22464 = cljs.core.not.call(null,inst_22463);
var state_22478__$1 = (function (){var statearr_22482 = state_22478;
(statearr_22482[(11)] = inst_22462);

(statearr_22482[(10)] = inst_22461__$1);

return statearr_22482;
})();
if(inst_22464){
var statearr_22483_22498 = state_22478__$1;
(statearr_22483_22498[(1)] = (4));

} else {
var statearr_22484_22499 = state_22478__$1;
(statearr_22484_22499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (3))){
var inst_22476 = (state_22478[(2)]);
var state_22478__$1 = state_22478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22478__$1,inst_22476);
} else {
if((state_val_22479 === (4))){
var inst_22461 = (state_22478[(10)]);
var inst_22466 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22461);
var state_22478__$1 = state_22478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22478__$1,(7),inst_22466);
} else {
if((state_val_22479 === (5))){
var inst_22472 = cljs.core.async.close_BANG_.call(null,out);
var state_22478__$1 = state_22478;
var statearr_22485_22500 = state_22478__$1;
(statearr_22485_22500[(2)] = inst_22472);

(statearr_22485_22500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (6))){
var inst_22474 = (state_22478[(2)]);
var state_22478__$1 = state_22478;
var statearr_22486_22501 = state_22478__$1;
(statearr_22486_22501[(2)] = inst_22474);

(statearr_22486_22501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (7))){
var inst_22462 = (state_22478[(11)]);
var inst_22468 = (state_22478[(2)]);
var inst_22469 = cljs.core.async.put_BANG_.call(null,out,inst_22468);
var inst_22458 = inst_22462;
var state_22478__$1 = (function (){var statearr_22487 = state_22478;
(statearr_22487[(12)] = inst_22469);

(statearr_22487[(9)] = inst_22458);

return statearr_22487;
})();
var statearr_22488_22502 = state_22478__$1;
(statearr_22488_22502[(2)] = null);

(statearr_22488_22502[(1)] = (2));


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
});})(c__19188__auto___22496,out))
;
return ((function (switch__19076__auto__,c__19188__auto___22496,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto____0 = (function (){
var statearr_22492 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22492[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto__);

(statearr_22492[(1)] = (1));

return statearr_22492;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto____1 = (function (state_22478){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_22478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e22493){if((e22493 instanceof Object)){
var ex__19080__auto__ = e22493;
var statearr_22494_22503 = state_22478;
(statearr_22494_22503[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22504 = state_22478;
state_22478 = G__22504;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto__ = function(state_22478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto____1.call(this,state_22478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___22496,out))
})();
var state__19190__auto__ = (function (){var statearr_22495 = f__19189__auto__.call(null);
(statearr_22495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___22496);

return statearr_22495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___22496,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22505,opts){
var map__22509 = p__22505;
var map__22509__$1 = ((((!((map__22509 == null)))?((((map__22509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22509):map__22509);
var eval_body__$1 = cljs.core.get.call(null,map__22509__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16840__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16840__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16840__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22511){var e = e22511;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22512_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22512_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22517){
var vec__22518 = p__22517;
var k = cljs.core.nth.call(null,vec__22518,(0),null);
var v = cljs.core.nth.call(null,vec__22518,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22519){
var vec__22520 = p__22519;
var k = cljs.core.nth.call(null,vec__22520,(0),null);
var v = cljs.core.nth.call(null,vec__22520,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22524,p__22525){
var map__22772 = p__22524;
var map__22772__$1 = ((((!((map__22772 == null)))?((((map__22772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22772):map__22772);
var opts = map__22772__$1;
var before_jsload = cljs.core.get.call(null,map__22772__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22772__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22772__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22773 = p__22525;
var map__22773__$1 = ((((!((map__22773 == null)))?((((map__22773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22773):map__22773);
var msg = map__22773__$1;
var files = cljs.core.get.call(null,map__22773__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22773__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22773__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22926){
var state_val_22927 = (state_22926[(1)]);
if((state_val_22927 === (7))){
var inst_22787 = (state_22926[(7)]);
var inst_22788 = (state_22926[(8)]);
var inst_22790 = (state_22926[(9)]);
var inst_22789 = (state_22926[(10)]);
var inst_22795 = cljs.core._nth.call(null,inst_22788,inst_22790);
var inst_22796 = figwheel.client.file_reloading.eval_body.call(null,inst_22795,opts);
var inst_22797 = (inst_22790 + (1));
var tmp22928 = inst_22787;
var tmp22929 = inst_22788;
var tmp22930 = inst_22789;
var inst_22787__$1 = tmp22928;
var inst_22788__$1 = tmp22929;
var inst_22789__$1 = tmp22930;
var inst_22790__$1 = inst_22797;
var state_22926__$1 = (function (){var statearr_22931 = state_22926;
(statearr_22931[(7)] = inst_22787__$1);

(statearr_22931[(8)] = inst_22788__$1);

(statearr_22931[(9)] = inst_22790__$1);

(statearr_22931[(10)] = inst_22789__$1);

(statearr_22931[(11)] = inst_22796);

return statearr_22931;
})();
var statearr_22932_23018 = state_22926__$1;
(statearr_22932_23018[(2)] = null);

(statearr_22932_23018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (20))){
var inst_22830 = (state_22926[(12)]);
var inst_22838 = figwheel.client.file_reloading.sort_files.call(null,inst_22830);
var state_22926__$1 = state_22926;
var statearr_22933_23019 = state_22926__$1;
(statearr_22933_23019[(2)] = inst_22838);

(statearr_22933_23019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (27))){
var state_22926__$1 = state_22926;
var statearr_22934_23020 = state_22926__$1;
(statearr_22934_23020[(2)] = null);

(statearr_22934_23020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (1))){
var inst_22779 = (state_22926[(13)]);
var inst_22776 = before_jsload.call(null,files);
var inst_22777 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22778 = (function (){return ((function (inst_22779,inst_22776,inst_22777,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22521_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22521_SHARP_);
});
;})(inst_22779,inst_22776,inst_22777,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22779__$1 = cljs.core.filter.call(null,inst_22778,files);
var inst_22780 = cljs.core.not_empty.call(null,inst_22779__$1);
var state_22926__$1 = (function (){var statearr_22935 = state_22926;
(statearr_22935[(13)] = inst_22779__$1);

(statearr_22935[(14)] = inst_22777);

(statearr_22935[(15)] = inst_22776);

return statearr_22935;
})();
if(cljs.core.truth_(inst_22780)){
var statearr_22936_23021 = state_22926__$1;
(statearr_22936_23021[(1)] = (2));

} else {
var statearr_22937_23022 = state_22926__$1;
(statearr_22937_23022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (24))){
var state_22926__$1 = state_22926;
var statearr_22938_23023 = state_22926__$1;
(statearr_22938_23023[(2)] = null);

(statearr_22938_23023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (39))){
var inst_22880 = (state_22926[(16)]);
var state_22926__$1 = state_22926;
var statearr_22939_23024 = state_22926__$1;
(statearr_22939_23024[(2)] = inst_22880);

(statearr_22939_23024[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (46))){
var inst_22921 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22940_23025 = state_22926__$1;
(statearr_22940_23025[(2)] = inst_22921);

(statearr_22940_23025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (4))){
var inst_22824 = (state_22926[(2)]);
var inst_22825 = cljs.core.List.EMPTY;
var inst_22826 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22825);
var inst_22827 = (function (){return ((function (inst_22824,inst_22825,inst_22826,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22522_SHARP_){
var and__16840__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22522_SHARP_);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22522_SHARP_));
} else {
return and__16840__auto__;
}
});
;})(inst_22824,inst_22825,inst_22826,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22828 = cljs.core.filter.call(null,inst_22827,files);
var inst_22829 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22830 = cljs.core.concat.call(null,inst_22828,inst_22829);
var state_22926__$1 = (function (){var statearr_22941 = state_22926;
(statearr_22941[(17)] = inst_22824);

(statearr_22941[(12)] = inst_22830);

(statearr_22941[(18)] = inst_22826);

return statearr_22941;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22942_23026 = state_22926__$1;
(statearr_22942_23026[(1)] = (16));

} else {
var statearr_22943_23027 = state_22926__$1;
(statearr_22943_23027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (15))){
var inst_22814 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22944_23028 = state_22926__$1;
(statearr_22944_23028[(2)] = inst_22814);

(statearr_22944_23028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (21))){
var inst_22840 = (state_22926[(19)]);
var inst_22840__$1 = (state_22926[(2)]);
var inst_22841 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22840__$1);
var state_22926__$1 = (function (){var statearr_22945 = state_22926;
(statearr_22945[(19)] = inst_22840__$1);

return statearr_22945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22926__$1,(22),inst_22841);
} else {
if((state_val_22927 === (31))){
var inst_22924 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22926__$1,inst_22924);
} else {
if((state_val_22927 === (32))){
var inst_22880 = (state_22926[(16)]);
var inst_22885 = inst_22880.cljs$lang$protocol_mask$partition0$;
var inst_22886 = (inst_22885 & (64));
var inst_22887 = inst_22880.cljs$core$ISeq$;
var inst_22888 = (inst_22886) || (inst_22887);
var state_22926__$1 = state_22926;
if(cljs.core.truth_(inst_22888)){
var statearr_22946_23029 = state_22926__$1;
(statearr_22946_23029[(1)] = (35));

} else {
var statearr_22947_23030 = state_22926__$1;
(statearr_22947_23030[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (40))){
var inst_22901 = (state_22926[(20)]);
var inst_22900 = (state_22926[(2)]);
var inst_22901__$1 = cljs.core.get.call(null,inst_22900,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22902 = cljs.core.get.call(null,inst_22900,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22903 = cljs.core.not_empty.call(null,inst_22901__$1);
var state_22926__$1 = (function (){var statearr_22948 = state_22926;
(statearr_22948[(20)] = inst_22901__$1);

(statearr_22948[(21)] = inst_22902);

return statearr_22948;
})();
if(cljs.core.truth_(inst_22903)){
var statearr_22949_23031 = state_22926__$1;
(statearr_22949_23031[(1)] = (41));

} else {
var statearr_22950_23032 = state_22926__$1;
(statearr_22950_23032[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (33))){
var state_22926__$1 = state_22926;
var statearr_22951_23033 = state_22926__$1;
(statearr_22951_23033[(2)] = false);

(statearr_22951_23033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (13))){
var inst_22800 = (state_22926[(22)]);
var inst_22804 = cljs.core.chunk_first.call(null,inst_22800);
var inst_22805 = cljs.core.chunk_rest.call(null,inst_22800);
var inst_22806 = cljs.core.count.call(null,inst_22804);
var inst_22787 = inst_22805;
var inst_22788 = inst_22804;
var inst_22789 = inst_22806;
var inst_22790 = (0);
var state_22926__$1 = (function (){var statearr_22952 = state_22926;
(statearr_22952[(7)] = inst_22787);

(statearr_22952[(8)] = inst_22788);

(statearr_22952[(9)] = inst_22790);

(statearr_22952[(10)] = inst_22789);

return statearr_22952;
})();
var statearr_22953_23034 = state_22926__$1;
(statearr_22953_23034[(2)] = null);

(statearr_22953_23034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (22))){
var inst_22843 = (state_22926[(23)]);
var inst_22840 = (state_22926[(19)]);
var inst_22848 = (state_22926[(24)]);
var inst_22844 = (state_22926[(25)]);
var inst_22843__$1 = (state_22926[(2)]);
var inst_22844__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22843__$1);
var inst_22845 = (function (){var all_files = inst_22840;
var res_SINGLEQUOTE_ = inst_22843__$1;
var res = inst_22844__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22843,inst_22840,inst_22848,inst_22844,inst_22843__$1,inst_22844__$1,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22523_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22523_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22843,inst_22840,inst_22848,inst_22844,inst_22843__$1,inst_22844__$1,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22846 = cljs.core.filter.call(null,inst_22845,inst_22843__$1);
var inst_22847 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22848__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22847);
var inst_22849 = cljs.core.not_empty.call(null,inst_22848__$1);
var state_22926__$1 = (function (){var statearr_22954 = state_22926;
(statearr_22954[(23)] = inst_22843__$1);

(statearr_22954[(26)] = inst_22846);

(statearr_22954[(24)] = inst_22848__$1);

(statearr_22954[(25)] = inst_22844__$1);

return statearr_22954;
})();
if(cljs.core.truth_(inst_22849)){
var statearr_22955_23035 = state_22926__$1;
(statearr_22955_23035[(1)] = (23));

} else {
var statearr_22956_23036 = state_22926__$1;
(statearr_22956_23036[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (36))){
var state_22926__$1 = state_22926;
var statearr_22957_23037 = state_22926__$1;
(statearr_22957_23037[(2)] = false);

(statearr_22957_23037[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (41))){
var inst_22901 = (state_22926[(20)]);
var inst_22905 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22906 = cljs.core.map.call(null,inst_22905,inst_22901);
var inst_22907 = cljs.core.pr_str.call(null,inst_22906);
var inst_22908 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22907)].join('');
var inst_22909 = figwheel.client.utils.log.call(null,inst_22908);
var state_22926__$1 = state_22926;
var statearr_22958_23038 = state_22926__$1;
(statearr_22958_23038[(2)] = inst_22909);

(statearr_22958_23038[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (43))){
var inst_22902 = (state_22926[(21)]);
var inst_22912 = (state_22926[(2)]);
var inst_22913 = cljs.core.not_empty.call(null,inst_22902);
var state_22926__$1 = (function (){var statearr_22959 = state_22926;
(statearr_22959[(27)] = inst_22912);

return statearr_22959;
})();
if(cljs.core.truth_(inst_22913)){
var statearr_22960_23039 = state_22926__$1;
(statearr_22960_23039[(1)] = (44));

} else {
var statearr_22961_23040 = state_22926__$1;
(statearr_22961_23040[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (29))){
var inst_22843 = (state_22926[(23)]);
var inst_22846 = (state_22926[(26)]);
var inst_22880 = (state_22926[(16)]);
var inst_22840 = (state_22926[(19)]);
var inst_22848 = (state_22926[(24)]);
var inst_22844 = (state_22926[(25)]);
var inst_22876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22879 = (function (){var all_files = inst_22840;
var res_SINGLEQUOTE_ = inst_22843;
var res = inst_22844;
var files_not_loaded = inst_22846;
var dependencies_that_loaded = inst_22848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22880,inst_22840,inst_22848,inst_22844,inst_22876,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22878){
var map__22962 = p__22878;
var map__22962__$1 = ((((!((map__22962 == null)))?((((map__22962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22962):map__22962);
var namespace = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22880,inst_22840,inst_22848,inst_22844,inst_22876,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22880__$1 = cljs.core.group_by.call(null,inst_22879,inst_22846);
var inst_22882 = (inst_22880__$1 == null);
var inst_22883 = cljs.core.not.call(null,inst_22882);
var state_22926__$1 = (function (){var statearr_22964 = state_22926;
(statearr_22964[(16)] = inst_22880__$1);

(statearr_22964[(28)] = inst_22876);

return statearr_22964;
})();
if(inst_22883){
var statearr_22965_23041 = state_22926__$1;
(statearr_22965_23041[(1)] = (32));

} else {
var statearr_22966_23042 = state_22926__$1;
(statearr_22966_23042[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (44))){
var inst_22902 = (state_22926[(21)]);
var inst_22915 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22902);
var inst_22916 = cljs.core.pr_str.call(null,inst_22915);
var inst_22917 = [cljs.core.str("not required: "),cljs.core.str(inst_22916)].join('');
var inst_22918 = figwheel.client.utils.log.call(null,inst_22917);
var state_22926__$1 = state_22926;
var statearr_22967_23043 = state_22926__$1;
(statearr_22967_23043[(2)] = inst_22918);

(statearr_22967_23043[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (6))){
var inst_22821 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22968_23044 = state_22926__$1;
(statearr_22968_23044[(2)] = inst_22821);

(statearr_22968_23044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (28))){
var inst_22846 = (state_22926[(26)]);
var inst_22873 = (state_22926[(2)]);
var inst_22874 = cljs.core.not_empty.call(null,inst_22846);
var state_22926__$1 = (function (){var statearr_22969 = state_22926;
(statearr_22969[(29)] = inst_22873);

return statearr_22969;
})();
if(cljs.core.truth_(inst_22874)){
var statearr_22970_23045 = state_22926__$1;
(statearr_22970_23045[(1)] = (29));

} else {
var statearr_22971_23046 = state_22926__$1;
(statearr_22971_23046[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (25))){
var inst_22844 = (state_22926[(25)]);
var inst_22860 = (state_22926[(2)]);
var inst_22861 = cljs.core.not_empty.call(null,inst_22844);
var state_22926__$1 = (function (){var statearr_22972 = state_22926;
(statearr_22972[(30)] = inst_22860);

return statearr_22972;
})();
if(cljs.core.truth_(inst_22861)){
var statearr_22973_23047 = state_22926__$1;
(statearr_22973_23047[(1)] = (26));

} else {
var statearr_22974_23048 = state_22926__$1;
(statearr_22974_23048[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (34))){
var inst_22895 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
if(cljs.core.truth_(inst_22895)){
var statearr_22975_23049 = state_22926__$1;
(statearr_22975_23049[(1)] = (38));

} else {
var statearr_22976_23050 = state_22926__$1;
(statearr_22976_23050[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (17))){
var state_22926__$1 = state_22926;
var statearr_22977_23051 = state_22926__$1;
(statearr_22977_23051[(2)] = recompile_dependents);

(statearr_22977_23051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (3))){
var state_22926__$1 = state_22926;
var statearr_22978_23052 = state_22926__$1;
(statearr_22978_23052[(2)] = null);

(statearr_22978_23052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (12))){
var inst_22817 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22979_23053 = state_22926__$1;
(statearr_22979_23053[(2)] = inst_22817);

(statearr_22979_23053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (2))){
var inst_22779 = (state_22926[(13)]);
var inst_22786 = cljs.core.seq.call(null,inst_22779);
var inst_22787 = inst_22786;
var inst_22788 = null;
var inst_22789 = (0);
var inst_22790 = (0);
var state_22926__$1 = (function (){var statearr_22980 = state_22926;
(statearr_22980[(7)] = inst_22787);

(statearr_22980[(8)] = inst_22788);

(statearr_22980[(9)] = inst_22790);

(statearr_22980[(10)] = inst_22789);

return statearr_22980;
})();
var statearr_22981_23054 = state_22926__$1;
(statearr_22981_23054[(2)] = null);

(statearr_22981_23054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (23))){
var inst_22843 = (state_22926[(23)]);
var inst_22846 = (state_22926[(26)]);
var inst_22840 = (state_22926[(19)]);
var inst_22848 = (state_22926[(24)]);
var inst_22844 = (state_22926[(25)]);
var inst_22851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22853 = (function (){var all_files = inst_22840;
var res_SINGLEQUOTE_ = inst_22843;
var res = inst_22844;
var files_not_loaded = inst_22846;
var dependencies_that_loaded = inst_22848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22840,inst_22848,inst_22844,inst_22851,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22852){
var map__22982 = p__22852;
var map__22982__$1 = ((((!((map__22982 == null)))?((((map__22982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22982):map__22982);
var request_url = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22840,inst_22848,inst_22844,inst_22851,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22854 = cljs.core.reverse.call(null,inst_22848);
var inst_22855 = cljs.core.map.call(null,inst_22853,inst_22854);
var inst_22856 = cljs.core.pr_str.call(null,inst_22855);
var inst_22857 = figwheel.client.utils.log.call(null,inst_22856);
var state_22926__$1 = (function (){var statearr_22984 = state_22926;
(statearr_22984[(31)] = inst_22851);

return statearr_22984;
})();
var statearr_22985_23055 = state_22926__$1;
(statearr_22985_23055[(2)] = inst_22857);

(statearr_22985_23055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (35))){
var state_22926__$1 = state_22926;
var statearr_22986_23056 = state_22926__$1;
(statearr_22986_23056[(2)] = true);

(statearr_22986_23056[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (19))){
var inst_22830 = (state_22926[(12)]);
var inst_22836 = figwheel.client.file_reloading.expand_files.call(null,inst_22830);
var state_22926__$1 = state_22926;
var statearr_22987_23057 = state_22926__$1;
(statearr_22987_23057[(2)] = inst_22836);

(statearr_22987_23057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (11))){
var state_22926__$1 = state_22926;
var statearr_22988_23058 = state_22926__$1;
(statearr_22988_23058[(2)] = null);

(statearr_22988_23058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (9))){
var inst_22819 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22989_23059 = state_22926__$1;
(statearr_22989_23059[(2)] = inst_22819);

(statearr_22989_23059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (5))){
var inst_22790 = (state_22926[(9)]);
var inst_22789 = (state_22926[(10)]);
var inst_22792 = (inst_22790 < inst_22789);
var inst_22793 = inst_22792;
var state_22926__$1 = state_22926;
if(cljs.core.truth_(inst_22793)){
var statearr_22990_23060 = state_22926__$1;
(statearr_22990_23060[(1)] = (7));

} else {
var statearr_22991_23061 = state_22926__$1;
(statearr_22991_23061[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (14))){
var inst_22800 = (state_22926[(22)]);
var inst_22809 = cljs.core.first.call(null,inst_22800);
var inst_22810 = figwheel.client.file_reloading.eval_body.call(null,inst_22809,opts);
var inst_22811 = cljs.core.next.call(null,inst_22800);
var inst_22787 = inst_22811;
var inst_22788 = null;
var inst_22789 = (0);
var inst_22790 = (0);
var state_22926__$1 = (function (){var statearr_22992 = state_22926;
(statearr_22992[(7)] = inst_22787);

(statearr_22992[(8)] = inst_22788);

(statearr_22992[(9)] = inst_22790);

(statearr_22992[(10)] = inst_22789);

(statearr_22992[(32)] = inst_22810);

return statearr_22992;
})();
var statearr_22993_23062 = state_22926__$1;
(statearr_22993_23062[(2)] = null);

(statearr_22993_23062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (45))){
var state_22926__$1 = state_22926;
var statearr_22994_23063 = state_22926__$1;
(statearr_22994_23063[(2)] = null);

(statearr_22994_23063[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (26))){
var inst_22843 = (state_22926[(23)]);
var inst_22846 = (state_22926[(26)]);
var inst_22840 = (state_22926[(19)]);
var inst_22848 = (state_22926[(24)]);
var inst_22844 = (state_22926[(25)]);
var inst_22863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22865 = (function (){var all_files = inst_22840;
var res_SINGLEQUOTE_ = inst_22843;
var res = inst_22844;
var files_not_loaded = inst_22846;
var dependencies_that_loaded = inst_22848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22840,inst_22848,inst_22844,inst_22863,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22864){
var map__22995 = p__22864;
var map__22995__$1 = ((((!((map__22995 == null)))?((((map__22995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22995):map__22995);
var namespace = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22840,inst_22848,inst_22844,inst_22863,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22866 = cljs.core.map.call(null,inst_22865,inst_22844);
var inst_22867 = cljs.core.pr_str.call(null,inst_22866);
var inst_22868 = figwheel.client.utils.log.call(null,inst_22867);
var inst_22869 = (function (){var all_files = inst_22840;
var res_SINGLEQUOTE_ = inst_22843;
var res = inst_22844;
var files_not_loaded = inst_22846;
var dependencies_that_loaded = inst_22848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22840,inst_22848,inst_22844,inst_22863,inst_22865,inst_22866,inst_22867,inst_22868,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22843,inst_22846,inst_22840,inst_22848,inst_22844,inst_22863,inst_22865,inst_22866,inst_22867,inst_22868,state_val_22927,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22870 = setTimeout(inst_22869,(10));
var state_22926__$1 = (function (){var statearr_22997 = state_22926;
(statearr_22997[(33)] = inst_22868);

(statearr_22997[(34)] = inst_22863);

return statearr_22997;
})();
var statearr_22998_23064 = state_22926__$1;
(statearr_22998_23064[(2)] = inst_22870);

(statearr_22998_23064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (16))){
var state_22926__$1 = state_22926;
var statearr_22999_23065 = state_22926__$1;
(statearr_22999_23065[(2)] = reload_dependents);

(statearr_22999_23065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (38))){
var inst_22880 = (state_22926[(16)]);
var inst_22897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22880);
var state_22926__$1 = state_22926;
var statearr_23000_23066 = state_22926__$1;
(statearr_23000_23066[(2)] = inst_22897);

(statearr_23000_23066[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (30))){
var state_22926__$1 = state_22926;
var statearr_23001_23067 = state_22926__$1;
(statearr_23001_23067[(2)] = null);

(statearr_23001_23067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (10))){
var inst_22800 = (state_22926[(22)]);
var inst_22802 = cljs.core.chunked_seq_QMARK_.call(null,inst_22800);
var state_22926__$1 = state_22926;
if(inst_22802){
var statearr_23002_23068 = state_22926__$1;
(statearr_23002_23068[(1)] = (13));

} else {
var statearr_23003_23069 = state_22926__$1;
(statearr_23003_23069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (18))){
var inst_22834 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
if(cljs.core.truth_(inst_22834)){
var statearr_23004_23070 = state_22926__$1;
(statearr_23004_23070[(1)] = (19));

} else {
var statearr_23005_23071 = state_22926__$1;
(statearr_23005_23071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (42))){
var state_22926__$1 = state_22926;
var statearr_23006_23072 = state_22926__$1;
(statearr_23006_23072[(2)] = null);

(statearr_23006_23072[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (37))){
var inst_22892 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_23007_23073 = state_22926__$1;
(statearr_23007_23073[(2)] = inst_22892);

(statearr_23007_23073[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (8))){
var inst_22787 = (state_22926[(7)]);
var inst_22800 = (state_22926[(22)]);
var inst_22800__$1 = cljs.core.seq.call(null,inst_22787);
var state_22926__$1 = (function (){var statearr_23008 = state_22926;
(statearr_23008[(22)] = inst_22800__$1);

return statearr_23008;
})();
if(inst_22800__$1){
var statearr_23009_23074 = state_22926__$1;
(statearr_23009_23074[(1)] = (10));

} else {
var statearr_23010_23075 = state_22926__$1;
(statearr_23010_23075[(1)] = (11));

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
});})(c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19076__auto__,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto____0 = (function (){
var statearr_23014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23014[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto__);

(statearr_23014[(1)] = (1));

return statearr_23014;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto____1 = (function (state_22926){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_22926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e23015){if((e23015 instanceof Object)){
var ex__19080__auto__ = e23015;
var statearr_23016_23076 = state_22926;
(statearr_23016_23076[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23077 = state_22926;
state_22926 = G__23077;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto__ = function(state_22926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto____1.call(this,state_22926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19190__auto__ = (function (){var statearr_23017 = f__19189__auto__.call(null);
(statearr_23017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_23017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__,map__22772,map__22772__$1,opts,before_jsload,on_jsload,reload_dependents,map__22773,map__22773__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19188__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23080,link){
var map__23083 = p__23080;
var map__23083__$1 = ((((!((map__23083 == null)))?((((map__23083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23083):map__23083);
var file = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23083,map__23083__$1,file){
return (function (p1__23078_SHARP_,p2__23079_SHARP_){
if(cljs.core._EQ_.call(null,p1__23078_SHARP_,p2__23079_SHARP_)){
return p1__23078_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23083,map__23083__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23089){
var map__23090 = p__23089;
var map__23090__$1 = ((((!((map__23090 == null)))?((((map__23090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23090):map__23090);
var match_length = cljs.core.get.call(null,map__23090__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23090__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23085_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23085_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23092 = [];
var len__17910__auto___23095 = arguments.length;
var i__17911__auto___23096 = (0);
while(true){
if((i__17911__auto___23096 < len__17910__auto___23095)){
args23092.push((arguments[i__17911__auto___23096]));

var G__23097 = (i__17911__auto___23096 + (1));
i__17911__auto___23096 = G__23097;
continue;
} else {
}
break;
}

var G__23094 = args23092.length;
switch (G__23094) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23092.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23099_SHARP_,p2__23100_SHARP_){
return cljs.core.assoc.call(null,p1__23099_SHARP_,cljs.core.get.call(null,p2__23100_SHARP_,key),p2__23100_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23101){
var map__23104 = p__23101;
var map__23104__$1 = ((((!((map__23104 == null)))?((((map__23104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23104):map__23104);
var f_data = map__23104__$1;
var file = cljs.core.get.call(null,map__23104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23106,files_msg){
var map__23113 = p__23106;
var map__23113__$1 = ((((!((map__23113 == null)))?((((map__23113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23113):map__23113);
var opts = map__23113__$1;
var on_cssload = cljs.core.get.call(null,map__23113__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23115_23119 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23116_23120 = null;
var count__23117_23121 = (0);
var i__23118_23122 = (0);
while(true){
if((i__23118_23122 < count__23117_23121)){
var f_23123 = cljs.core._nth.call(null,chunk__23116_23120,i__23118_23122);
figwheel.client.file_reloading.reload_css_file.call(null,f_23123);

var G__23124 = seq__23115_23119;
var G__23125 = chunk__23116_23120;
var G__23126 = count__23117_23121;
var G__23127 = (i__23118_23122 + (1));
seq__23115_23119 = G__23124;
chunk__23116_23120 = G__23125;
count__23117_23121 = G__23126;
i__23118_23122 = G__23127;
continue;
} else {
var temp__4425__auto___23128 = cljs.core.seq.call(null,seq__23115_23119);
if(temp__4425__auto___23128){
var seq__23115_23129__$1 = temp__4425__auto___23128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23115_23129__$1)){
var c__17655__auto___23130 = cljs.core.chunk_first.call(null,seq__23115_23129__$1);
var G__23131 = cljs.core.chunk_rest.call(null,seq__23115_23129__$1);
var G__23132 = c__17655__auto___23130;
var G__23133 = cljs.core.count.call(null,c__17655__auto___23130);
var G__23134 = (0);
seq__23115_23119 = G__23131;
chunk__23116_23120 = G__23132;
count__23117_23121 = G__23133;
i__23118_23122 = G__23134;
continue;
} else {
var f_23135 = cljs.core.first.call(null,seq__23115_23129__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23135);

var G__23136 = cljs.core.next.call(null,seq__23115_23129__$1);
var G__23137 = null;
var G__23138 = (0);
var G__23139 = (0);
seq__23115_23119 = G__23136;
chunk__23116_23120 = G__23137;
count__23117_23121 = G__23138;
i__23118_23122 = G__23139;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23113,map__23113__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23113,map__23113__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453073547790