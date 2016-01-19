// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19233 = [];
var len__17910__auto___19239 = arguments.length;
var i__17911__auto___19240 = (0);
while(true){
if((i__17911__auto___19240 < len__17910__auto___19239)){
args19233.push((arguments[i__17911__auto___19240]));

var G__19241 = (i__17911__auto___19240 + (1));
i__17911__auto___19240 = G__19241;
continue;
} else {
}
break;
}

var G__19235 = args19233.length;
switch (G__19235) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19233.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19236 = (function (f,blockable,meta19237){
this.f = f;
this.blockable = blockable;
this.meta19237 = meta19237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19238,meta19237__$1){
var self__ = this;
var _19238__$1 = this;
return (new cljs.core.async.t_cljs$core$async19236(self__.f,self__.blockable,meta19237__$1));
});

cljs.core.async.t_cljs$core$async19236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19238){
var self__ = this;
var _19238__$1 = this;
return self__.meta19237;
});

cljs.core.async.t_cljs$core$async19236.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19237","meta19237",1414826388,null)], null);
});

cljs.core.async.t_cljs$core$async19236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19236";

cljs.core.async.t_cljs$core$async19236.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19236");
});

cljs.core.async.__GT_t_cljs$core$async19236 = (function cljs$core$async$__GT_t_cljs$core$async19236(f__$1,blockable__$1,meta19237){
return (new cljs.core.async.t_cljs$core$async19236(f__$1,blockable__$1,meta19237));
});

}

return (new cljs.core.async.t_cljs$core$async19236(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19245 = [];
var len__17910__auto___19248 = arguments.length;
var i__17911__auto___19249 = (0);
while(true){
if((i__17911__auto___19249 < len__17910__auto___19248)){
args19245.push((arguments[i__17911__auto___19249]));

var G__19250 = (i__17911__auto___19249 + (1));
i__17911__auto___19249 = G__19250;
continue;
} else {
}
break;
}

var G__19247 = args19245.length;
switch (G__19247) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19245.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19252 = [];
var len__17910__auto___19255 = arguments.length;
var i__17911__auto___19256 = (0);
while(true){
if((i__17911__auto___19256 < len__17910__auto___19255)){
args19252.push((arguments[i__17911__auto___19256]));

var G__19257 = (i__17911__auto___19256 + (1));
i__17911__auto___19256 = G__19257;
continue;
} else {
}
break;
}

var G__19254 = args19252.length;
switch (G__19254) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19252.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19259 = [];
var len__17910__auto___19262 = arguments.length;
var i__17911__auto___19263 = (0);
while(true){
if((i__17911__auto___19263 < len__17910__auto___19262)){
args19259.push((arguments[i__17911__auto___19263]));

var G__19264 = (i__17911__auto___19263 + (1));
i__17911__auto___19263 = G__19264;
continue;
} else {
}
break;
}

var G__19261 = args19259.length;
switch (G__19261) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19259.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19266 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19266);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19266,ret){
return (function (){
return fn1.call(null,val_19266);
});})(val_19266,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19267 = [];
var len__17910__auto___19270 = arguments.length;
var i__17911__auto___19271 = (0);
while(true){
if((i__17911__auto___19271 < len__17910__auto___19270)){
args19267.push((arguments[i__17911__auto___19271]));

var G__19272 = (i__17911__auto___19271 + (1));
i__17911__auto___19271 = G__19272;
continue;
} else {
}
break;
}

var G__19269 = args19267.length;
switch (G__19269) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19267.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17755__auto___19274 = n;
var x_19275 = (0);
while(true){
if((x_19275 < n__17755__auto___19274)){
(a[x_19275] = (0));

var G__19276 = (x_19275 + (1));
x_19275 = G__19276;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19277 = (i + (1));
i = G__19277;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19281 = (function (alt_flag,flag,meta19282){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19282 = meta19282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19283,meta19282__$1){
var self__ = this;
var _19283__$1 = this;
return (new cljs.core.async.t_cljs$core$async19281(self__.alt_flag,self__.flag,meta19282__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19283){
var self__ = this;
var _19283__$1 = this;
return self__.meta19282;
});})(flag))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19281.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19282","meta19282",-640987294,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19281";

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19281");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19281 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19281(alt_flag__$1,flag__$1,meta19282){
return (new cljs.core.async.t_cljs$core$async19281(alt_flag__$1,flag__$1,meta19282));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19281(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19287 = (function (alt_handler,flag,cb,meta19288){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19288 = meta19288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19289,meta19288__$1){
var self__ = this;
var _19289__$1 = this;
return (new cljs.core.async.t_cljs$core$async19287(self__.alt_handler,self__.flag,self__.cb,meta19288__$1));
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19289){
var self__ = this;
var _19289__$1 = this;
return self__.meta19288;
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19288","meta19288",-480208350,null)], null);
});

cljs.core.async.t_cljs$core$async19287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19287";

cljs.core.async.t_cljs$core$async19287.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19287");
});

cljs.core.async.__GT_t_cljs$core$async19287 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19287(alt_handler__$1,flag__$1,cb__$1,meta19288){
return (new cljs.core.async.t_cljs$core$async19287(alt_handler__$1,flag__$1,cb__$1,meta19288));
});

}

return (new cljs.core.async.t_cljs$core$async19287(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19290_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19291_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19291_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16852__auto__ = wport;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19292 = (i + (1));
i = G__19292;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16852__auto__ = ret;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16840__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16840__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17917__auto__ = [];
var len__17910__auto___19298 = arguments.length;
var i__17911__auto___19299 = (0);
while(true){
if((i__17911__auto___19299 < len__17910__auto___19298)){
args__17917__auto__.push((arguments[i__17911__auto___19299]));

var G__19300 = (i__17911__auto___19299 + (1));
i__17911__auto___19299 = G__19300;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19295){
var map__19296 = p__19295;
var map__19296__$1 = ((((!((map__19296 == null)))?((((map__19296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19296):map__19296);
var opts = map__19296__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19293){
var G__19294 = cljs.core.first.call(null,seq19293);
var seq19293__$1 = cljs.core.next.call(null,seq19293);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19294,seq19293__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19301 = [];
var len__17910__auto___19351 = arguments.length;
var i__17911__auto___19352 = (0);
while(true){
if((i__17911__auto___19352 < len__17910__auto___19351)){
args19301.push((arguments[i__17911__auto___19352]));

var G__19353 = (i__17911__auto___19352 + (1));
i__17911__auto___19352 = G__19353;
continue;
} else {
}
break;
}

var G__19303 = args19301.length;
switch (G__19303) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19301.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19188__auto___19355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___19355){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___19355){
return (function (state_19327){
var state_val_19328 = (state_19327[(1)]);
if((state_val_19328 === (7))){
var inst_19323 = (state_19327[(2)]);
var state_19327__$1 = state_19327;
var statearr_19329_19356 = state_19327__$1;
(statearr_19329_19356[(2)] = inst_19323);

(statearr_19329_19356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (1))){
var state_19327__$1 = state_19327;
var statearr_19330_19357 = state_19327__$1;
(statearr_19330_19357[(2)] = null);

(statearr_19330_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (4))){
var inst_19306 = (state_19327[(7)]);
var inst_19306__$1 = (state_19327[(2)]);
var inst_19307 = (inst_19306__$1 == null);
var state_19327__$1 = (function (){var statearr_19331 = state_19327;
(statearr_19331[(7)] = inst_19306__$1);

return statearr_19331;
})();
if(cljs.core.truth_(inst_19307)){
var statearr_19332_19358 = state_19327__$1;
(statearr_19332_19358[(1)] = (5));

} else {
var statearr_19333_19359 = state_19327__$1;
(statearr_19333_19359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (13))){
var state_19327__$1 = state_19327;
var statearr_19334_19360 = state_19327__$1;
(statearr_19334_19360[(2)] = null);

(statearr_19334_19360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (6))){
var inst_19306 = (state_19327[(7)]);
var state_19327__$1 = state_19327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19327__$1,(11),to,inst_19306);
} else {
if((state_val_19328 === (3))){
var inst_19325 = (state_19327[(2)]);
var state_19327__$1 = state_19327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19327__$1,inst_19325);
} else {
if((state_val_19328 === (12))){
var state_19327__$1 = state_19327;
var statearr_19335_19361 = state_19327__$1;
(statearr_19335_19361[(2)] = null);

(statearr_19335_19361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (2))){
var state_19327__$1 = state_19327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19327__$1,(4),from);
} else {
if((state_val_19328 === (11))){
var inst_19316 = (state_19327[(2)]);
var state_19327__$1 = state_19327;
if(cljs.core.truth_(inst_19316)){
var statearr_19336_19362 = state_19327__$1;
(statearr_19336_19362[(1)] = (12));

} else {
var statearr_19337_19363 = state_19327__$1;
(statearr_19337_19363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (9))){
var state_19327__$1 = state_19327;
var statearr_19338_19364 = state_19327__$1;
(statearr_19338_19364[(2)] = null);

(statearr_19338_19364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (5))){
var state_19327__$1 = state_19327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19339_19365 = state_19327__$1;
(statearr_19339_19365[(1)] = (8));

} else {
var statearr_19340_19366 = state_19327__$1;
(statearr_19340_19366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (14))){
var inst_19321 = (state_19327[(2)]);
var state_19327__$1 = state_19327;
var statearr_19341_19367 = state_19327__$1;
(statearr_19341_19367[(2)] = inst_19321);

(statearr_19341_19367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (10))){
var inst_19313 = (state_19327[(2)]);
var state_19327__$1 = state_19327;
var statearr_19342_19368 = state_19327__$1;
(statearr_19342_19368[(2)] = inst_19313);

(statearr_19342_19368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (8))){
var inst_19310 = cljs.core.async.close_BANG_.call(null,to);
var state_19327__$1 = state_19327;
var statearr_19343_19369 = state_19327__$1;
(statearr_19343_19369[(2)] = inst_19310);

(statearr_19343_19369[(1)] = (10));


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
});})(c__19188__auto___19355))
;
return ((function (switch__19076__auto__,c__19188__auto___19355){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_19347 = [null,null,null,null,null,null,null,null];
(statearr_19347[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_19347[(1)] = (1));

return statearr_19347;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_19327){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19348){if((e19348 instanceof Object)){
var ex__19080__auto__ = e19348;
var statearr_19349_19370 = state_19327;
(statearr_19349_19370[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19371 = state_19327;
state_19327 = G__19371;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_19327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_19327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___19355))
})();
var state__19190__auto__ = (function (){var statearr_19350 = f__19189__auto__.call(null);
(statearr_19350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___19355);

return statearr_19350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___19355))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19555){
var vec__19556 = p__19555;
var v = cljs.core.nth.call(null,vec__19556,(0),null);
var p = cljs.core.nth.call(null,vec__19556,(1),null);
var job = vec__19556;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19188__auto___19738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___19738,res,vec__19556,v,p,job,jobs,results){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___19738,res,vec__19556,v,p,job,jobs,results){
return (function (state_19561){
var state_val_19562 = (state_19561[(1)]);
if((state_val_19562 === (1))){
var state_19561__$1 = state_19561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19561__$1,(2),res,v);
} else {
if((state_val_19562 === (2))){
var inst_19558 = (state_19561[(2)]);
var inst_19559 = cljs.core.async.close_BANG_.call(null,res);
var state_19561__$1 = (function (){var statearr_19563 = state_19561;
(statearr_19563[(7)] = inst_19558);

return statearr_19563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19561__$1,inst_19559);
} else {
return null;
}
}
});})(c__19188__auto___19738,res,vec__19556,v,p,job,jobs,results))
;
return ((function (switch__19076__auto__,c__19188__auto___19738,res,vec__19556,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0 = (function (){
var statearr_19567 = [null,null,null,null,null,null,null,null];
(statearr_19567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__);

(statearr_19567[(1)] = (1));

return statearr_19567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1 = (function (state_19561){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19568){if((e19568 instanceof Object)){
var ex__19080__auto__ = e19568;
var statearr_19569_19739 = state_19561;
(statearr_19569_19739[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19740 = state_19561;
state_19561 = G__19740;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = function(state_19561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1.call(this,state_19561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___19738,res,vec__19556,v,p,job,jobs,results))
})();
var state__19190__auto__ = (function (){var statearr_19570 = f__19189__auto__.call(null);
(statearr_19570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___19738);

return statearr_19570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___19738,res,vec__19556,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19571){
var vec__19572 = p__19571;
var v = cljs.core.nth.call(null,vec__19572,(0),null);
var p = cljs.core.nth.call(null,vec__19572,(1),null);
var job = vec__19572;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17755__auto___19741 = n;
var __19742 = (0);
while(true){
if((__19742 < n__17755__auto___19741)){
var G__19573_19743 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19573_19743) {
case "compute":
var c__19188__auto___19745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19742,c__19188__auto___19745,G__19573_19743,n__17755__auto___19741,jobs,results,process,async){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (__19742,c__19188__auto___19745,G__19573_19743,n__17755__auto___19741,jobs,results,process,async){
return (function (state_19586){
var state_val_19587 = (state_19586[(1)]);
if((state_val_19587 === (1))){
var state_19586__$1 = state_19586;
var statearr_19588_19746 = state_19586__$1;
(statearr_19588_19746[(2)] = null);

(statearr_19588_19746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (2))){
var state_19586__$1 = state_19586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19586__$1,(4),jobs);
} else {
if((state_val_19587 === (3))){
var inst_19584 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19586__$1,inst_19584);
} else {
if((state_val_19587 === (4))){
var inst_19576 = (state_19586[(2)]);
var inst_19577 = process.call(null,inst_19576);
var state_19586__$1 = state_19586;
if(cljs.core.truth_(inst_19577)){
var statearr_19589_19747 = state_19586__$1;
(statearr_19589_19747[(1)] = (5));

} else {
var statearr_19590_19748 = state_19586__$1;
(statearr_19590_19748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (5))){
var state_19586__$1 = state_19586;
var statearr_19591_19749 = state_19586__$1;
(statearr_19591_19749[(2)] = null);

(statearr_19591_19749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (6))){
var state_19586__$1 = state_19586;
var statearr_19592_19750 = state_19586__$1;
(statearr_19592_19750[(2)] = null);

(statearr_19592_19750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (7))){
var inst_19582 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
var statearr_19593_19751 = state_19586__$1;
(statearr_19593_19751[(2)] = inst_19582);

(statearr_19593_19751[(1)] = (3));


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
});})(__19742,c__19188__auto___19745,G__19573_19743,n__17755__auto___19741,jobs,results,process,async))
;
return ((function (__19742,switch__19076__auto__,c__19188__auto___19745,G__19573_19743,n__17755__auto___19741,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0 = (function (){
var statearr_19597 = [null,null,null,null,null,null,null];
(statearr_19597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__);

(statearr_19597[(1)] = (1));

return statearr_19597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1 = (function (state_19586){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19598){if((e19598 instanceof Object)){
var ex__19080__auto__ = e19598;
var statearr_19599_19752 = state_19586;
(statearr_19599_19752[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19753 = state_19586;
state_19586 = G__19753;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = function(state_19586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1.call(this,state_19586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__;
})()
;})(__19742,switch__19076__auto__,c__19188__auto___19745,G__19573_19743,n__17755__auto___19741,jobs,results,process,async))
})();
var state__19190__auto__ = (function (){var statearr_19600 = f__19189__auto__.call(null);
(statearr_19600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___19745);

return statearr_19600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(__19742,c__19188__auto___19745,G__19573_19743,n__17755__auto___19741,jobs,results,process,async))
);


break;
case "async":
var c__19188__auto___19754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19742,c__19188__auto___19754,G__19573_19743,n__17755__auto___19741,jobs,results,process,async){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (__19742,c__19188__auto___19754,G__19573_19743,n__17755__auto___19741,jobs,results,process,async){
return (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (1))){
var state_19613__$1 = state_19613;
var statearr_19615_19755 = state_19613__$1;
(statearr_19615_19755[(2)] = null);

(statearr_19615_19755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (2))){
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19613__$1,(4),jobs);
} else {
if((state_val_19614 === (3))){
var inst_19611 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19613__$1,inst_19611);
} else {
if((state_val_19614 === (4))){
var inst_19603 = (state_19613[(2)]);
var inst_19604 = async.call(null,inst_19603);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19604)){
var statearr_19616_19756 = state_19613__$1;
(statearr_19616_19756[(1)] = (5));

} else {
var statearr_19617_19757 = state_19613__$1;
(statearr_19617_19757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (5))){
var state_19613__$1 = state_19613;
var statearr_19618_19758 = state_19613__$1;
(statearr_19618_19758[(2)] = null);

(statearr_19618_19758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (6))){
var state_19613__$1 = state_19613;
var statearr_19619_19759 = state_19613__$1;
(statearr_19619_19759[(2)] = null);

(statearr_19619_19759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (7))){
var inst_19609 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19620_19760 = state_19613__$1;
(statearr_19620_19760[(2)] = inst_19609);

(statearr_19620_19760[(1)] = (3));


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
});})(__19742,c__19188__auto___19754,G__19573_19743,n__17755__auto___19741,jobs,results,process,async))
;
return ((function (__19742,switch__19076__auto__,c__19188__auto___19754,G__19573_19743,n__17755__auto___19741,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0 = (function (){
var statearr_19624 = [null,null,null,null,null,null,null];
(statearr_19624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__);

(statearr_19624[(1)] = (1));

return statearr_19624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1 = (function (state_19613){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19625){if((e19625 instanceof Object)){
var ex__19080__auto__ = e19625;
var statearr_19626_19761 = state_19613;
(statearr_19626_19761[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19762 = state_19613;
state_19613 = G__19762;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__;
})()
;})(__19742,switch__19076__auto__,c__19188__auto___19754,G__19573_19743,n__17755__auto___19741,jobs,results,process,async))
})();
var state__19190__auto__ = (function (){var statearr_19627 = f__19189__auto__.call(null);
(statearr_19627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___19754);

return statearr_19627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(__19742,c__19188__auto___19754,G__19573_19743,n__17755__auto___19741,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19763 = (__19742 + (1));
__19742 = G__19763;
continue;
} else {
}
break;
}

var c__19188__auto___19764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___19764,jobs,results,process,async){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___19764,jobs,results,process,async){
return (function (state_19649){
var state_val_19650 = (state_19649[(1)]);
if((state_val_19650 === (1))){
var state_19649__$1 = state_19649;
var statearr_19651_19765 = state_19649__$1;
(statearr_19651_19765[(2)] = null);

(statearr_19651_19765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (2))){
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19649__$1,(4),from);
} else {
if((state_val_19650 === (3))){
var inst_19647 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19649__$1,inst_19647);
} else {
if((state_val_19650 === (4))){
var inst_19630 = (state_19649[(7)]);
var inst_19630__$1 = (state_19649[(2)]);
var inst_19631 = (inst_19630__$1 == null);
var state_19649__$1 = (function (){var statearr_19652 = state_19649;
(statearr_19652[(7)] = inst_19630__$1);

return statearr_19652;
})();
if(cljs.core.truth_(inst_19631)){
var statearr_19653_19766 = state_19649__$1;
(statearr_19653_19766[(1)] = (5));

} else {
var statearr_19654_19767 = state_19649__$1;
(statearr_19654_19767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (5))){
var inst_19633 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19649__$1 = state_19649;
var statearr_19655_19768 = state_19649__$1;
(statearr_19655_19768[(2)] = inst_19633);

(statearr_19655_19768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (6))){
var inst_19630 = (state_19649[(7)]);
var inst_19635 = (state_19649[(8)]);
var inst_19635__$1 = cljs.core.async.chan.call(null,(1));
var inst_19636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19637 = [inst_19630,inst_19635__$1];
var inst_19638 = (new cljs.core.PersistentVector(null,2,(5),inst_19636,inst_19637,null));
var state_19649__$1 = (function (){var statearr_19656 = state_19649;
(statearr_19656[(8)] = inst_19635__$1);

return statearr_19656;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19649__$1,(8),jobs,inst_19638);
} else {
if((state_val_19650 === (7))){
var inst_19645 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19657_19769 = state_19649__$1;
(statearr_19657_19769[(2)] = inst_19645);

(statearr_19657_19769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (8))){
var inst_19635 = (state_19649[(8)]);
var inst_19640 = (state_19649[(2)]);
var state_19649__$1 = (function (){var statearr_19658 = state_19649;
(statearr_19658[(9)] = inst_19640);

return statearr_19658;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19649__$1,(9),results,inst_19635);
} else {
if((state_val_19650 === (9))){
var inst_19642 = (state_19649[(2)]);
var state_19649__$1 = (function (){var statearr_19659 = state_19649;
(statearr_19659[(10)] = inst_19642);

return statearr_19659;
})();
var statearr_19660_19770 = state_19649__$1;
(statearr_19660_19770[(2)] = null);

(statearr_19660_19770[(1)] = (2));


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
});})(c__19188__auto___19764,jobs,results,process,async))
;
return ((function (switch__19076__auto__,c__19188__auto___19764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0 = (function (){
var statearr_19664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__);

(statearr_19664[(1)] = (1));

return statearr_19664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1 = (function (state_19649){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19665){if((e19665 instanceof Object)){
var ex__19080__auto__ = e19665;
var statearr_19666_19771 = state_19649;
(statearr_19666_19771[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19772 = state_19649;
state_19649 = G__19772;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = function(state_19649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1.call(this,state_19649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___19764,jobs,results,process,async))
})();
var state__19190__auto__ = (function (){var statearr_19667 = f__19189__auto__.call(null);
(statearr_19667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___19764);

return statearr_19667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___19764,jobs,results,process,async))
);


var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__,jobs,results,process,async){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__,jobs,results,process,async){
return (function (state_19705){
var state_val_19706 = (state_19705[(1)]);
if((state_val_19706 === (7))){
var inst_19701 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
var statearr_19707_19773 = state_19705__$1;
(statearr_19707_19773[(2)] = inst_19701);

(statearr_19707_19773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (20))){
var state_19705__$1 = state_19705;
var statearr_19708_19774 = state_19705__$1;
(statearr_19708_19774[(2)] = null);

(statearr_19708_19774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (1))){
var state_19705__$1 = state_19705;
var statearr_19709_19775 = state_19705__$1;
(statearr_19709_19775[(2)] = null);

(statearr_19709_19775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (4))){
var inst_19670 = (state_19705[(7)]);
var inst_19670__$1 = (state_19705[(2)]);
var inst_19671 = (inst_19670__$1 == null);
var state_19705__$1 = (function (){var statearr_19710 = state_19705;
(statearr_19710[(7)] = inst_19670__$1);

return statearr_19710;
})();
if(cljs.core.truth_(inst_19671)){
var statearr_19711_19776 = state_19705__$1;
(statearr_19711_19776[(1)] = (5));

} else {
var statearr_19712_19777 = state_19705__$1;
(statearr_19712_19777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (15))){
var inst_19683 = (state_19705[(8)]);
var state_19705__$1 = state_19705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19705__$1,(18),to,inst_19683);
} else {
if((state_val_19706 === (21))){
var inst_19696 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
var statearr_19713_19778 = state_19705__$1;
(statearr_19713_19778[(2)] = inst_19696);

(statearr_19713_19778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (13))){
var inst_19698 = (state_19705[(2)]);
var state_19705__$1 = (function (){var statearr_19714 = state_19705;
(statearr_19714[(9)] = inst_19698);

return statearr_19714;
})();
var statearr_19715_19779 = state_19705__$1;
(statearr_19715_19779[(2)] = null);

(statearr_19715_19779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (6))){
var inst_19670 = (state_19705[(7)]);
var state_19705__$1 = state_19705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19705__$1,(11),inst_19670);
} else {
if((state_val_19706 === (17))){
var inst_19691 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
if(cljs.core.truth_(inst_19691)){
var statearr_19716_19780 = state_19705__$1;
(statearr_19716_19780[(1)] = (19));

} else {
var statearr_19717_19781 = state_19705__$1;
(statearr_19717_19781[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (3))){
var inst_19703 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19705__$1,inst_19703);
} else {
if((state_val_19706 === (12))){
var inst_19680 = (state_19705[(10)]);
var state_19705__$1 = state_19705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19705__$1,(14),inst_19680);
} else {
if((state_val_19706 === (2))){
var state_19705__$1 = state_19705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19705__$1,(4),results);
} else {
if((state_val_19706 === (19))){
var state_19705__$1 = state_19705;
var statearr_19718_19782 = state_19705__$1;
(statearr_19718_19782[(2)] = null);

(statearr_19718_19782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (11))){
var inst_19680 = (state_19705[(2)]);
var state_19705__$1 = (function (){var statearr_19719 = state_19705;
(statearr_19719[(10)] = inst_19680);

return statearr_19719;
})();
var statearr_19720_19783 = state_19705__$1;
(statearr_19720_19783[(2)] = null);

(statearr_19720_19783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (9))){
var state_19705__$1 = state_19705;
var statearr_19721_19784 = state_19705__$1;
(statearr_19721_19784[(2)] = null);

(statearr_19721_19784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (5))){
var state_19705__$1 = state_19705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19722_19785 = state_19705__$1;
(statearr_19722_19785[(1)] = (8));

} else {
var statearr_19723_19786 = state_19705__$1;
(statearr_19723_19786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (14))){
var inst_19685 = (state_19705[(11)]);
var inst_19683 = (state_19705[(8)]);
var inst_19683__$1 = (state_19705[(2)]);
var inst_19684 = (inst_19683__$1 == null);
var inst_19685__$1 = cljs.core.not.call(null,inst_19684);
var state_19705__$1 = (function (){var statearr_19724 = state_19705;
(statearr_19724[(11)] = inst_19685__$1);

(statearr_19724[(8)] = inst_19683__$1);

return statearr_19724;
})();
if(inst_19685__$1){
var statearr_19725_19787 = state_19705__$1;
(statearr_19725_19787[(1)] = (15));

} else {
var statearr_19726_19788 = state_19705__$1;
(statearr_19726_19788[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (16))){
var inst_19685 = (state_19705[(11)]);
var state_19705__$1 = state_19705;
var statearr_19727_19789 = state_19705__$1;
(statearr_19727_19789[(2)] = inst_19685);

(statearr_19727_19789[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (10))){
var inst_19677 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
var statearr_19728_19790 = state_19705__$1;
(statearr_19728_19790[(2)] = inst_19677);

(statearr_19728_19790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (18))){
var inst_19688 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
var statearr_19729_19791 = state_19705__$1;
(statearr_19729_19791[(2)] = inst_19688);

(statearr_19729_19791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19706 === (8))){
var inst_19674 = cljs.core.async.close_BANG_.call(null,to);
var state_19705__$1 = state_19705;
var statearr_19730_19792 = state_19705__$1;
(statearr_19730_19792[(2)] = inst_19674);

(statearr_19730_19792[(1)] = (10));


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
});})(c__19188__auto__,jobs,results,process,async))
;
return ((function (switch__19076__auto__,c__19188__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0 = (function (){
var statearr_19734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__);

(statearr_19734[(1)] = (1));

return statearr_19734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1 = (function (state_19705){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19735){if((e19735 instanceof Object)){
var ex__19080__auto__ = e19735;
var statearr_19736_19793 = state_19705;
(statearr_19736_19793[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19794 = state_19705;
state_19705 = G__19794;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__ = function(state_19705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1.call(this,state_19705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__,jobs,results,process,async))
})();
var state__19190__auto__ = (function (){var statearr_19737 = f__19189__auto__.call(null);
(statearr_19737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_19737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__,jobs,results,process,async))
);

return c__19188__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19795 = [];
var len__17910__auto___19798 = arguments.length;
var i__17911__auto___19799 = (0);
while(true){
if((i__17911__auto___19799 < len__17910__auto___19798)){
args19795.push((arguments[i__17911__auto___19799]));

var G__19800 = (i__17911__auto___19799 + (1));
i__17911__auto___19799 = G__19800;
continue;
} else {
}
break;
}

var G__19797 = args19795.length;
switch (G__19797) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19795.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19802 = [];
var len__17910__auto___19805 = arguments.length;
var i__17911__auto___19806 = (0);
while(true){
if((i__17911__auto___19806 < len__17910__auto___19805)){
args19802.push((arguments[i__17911__auto___19806]));

var G__19807 = (i__17911__auto___19806 + (1));
i__17911__auto___19806 = G__19807;
continue;
} else {
}
break;
}

var G__19804 = args19802.length;
switch (G__19804) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19802.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19809 = [];
var len__17910__auto___19862 = arguments.length;
var i__17911__auto___19863 = (0);
while(true){
if((i__17911__auto___19863 < len__17910__auto___19862)){
args19809.push((arguments[i__17911__auto___19863]));

var G__19864 = (i__17911__auto___19863 + (1));
i__17911__auto___19863 = G__19864;
continue;
} else {
}
break;
}

var G__19811 = args19809.length;
switch (G__19811) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19809.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19188__auto___19866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___19866,tc,fc){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___19866,tc,fc){
return (function (state_19837){
var state_val_19838 = (state_19837[(1)]);
if((state_val_19838 === (7))){
var inst_19833 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
var statearr_19839_19867 = state_19837__$1;
(statearr_19839_19867[(2)] = inst_19833);

(statearr_19839_19867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (1))){
var state_19837__$1 = state_19837;
var statearr_19840_19868 = state_19837__$1;
(statearr_19840_19868[(2)] = null);

(statearr_19840_19868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (4))){
var inst_19814 = (state_19837[(7)]);
var inst_19814__$1 = (state_19837[(2)]);
var inst_19815 = (inst_19814__$1 == null);
var state_19837__$1 = (function (){var statearr_19841 = state_19837;
(statearr_19841[(7)] = inst_19814__$1);

return statearr_19841;
})();
if(cljs.core.truth_(inst_19815)){
var statearr_19842_19869 = state_19837__$1;
(statearr_19842_19869[(1)] = (5));

} else {
var statearr_19843_19870 = state_19837__$1;
(statearr_19843_19870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (13))){
var state_19837__$1 = state_19837;
var statearr_19844_19871 = state_19837__$1;
(statearr_19844_19871[(2)] = null);

(statearr_19844_19871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (6))){
var inst_19814 = (state_19837[(7)]);
var inst_19820 = p.call(null,inst_19814);
var state_19837__$1 = state_19837;
if(cljs.core.truth_(inst_19820)){
var statearr_19845_19872 = state_19837__$1;
(statearr_19845_19872[(1)] = (9));

} else {
var statearr_19846_19873 = state_19837__$1;
(statearr_19846_19873[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (3))){
var inst_19835 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19837__$1,inst_19835);
} else {
if((state_val_19838 === (12))){
var state_19837__$1 = state_19837;
var statearr_19847_19874 = state_19837__$1;
(statearr_19847_19874[(2)] = null);

(statearr_19847_19874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (2))){
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19837__$1,(4),ch);
} else {
if((state_val_19838 === (11))){
var inst_19814 = (state_19837[(7)]);
var inst_19824 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19837__$1,(8),inst_19824,inst_19814);
} else {
if((state_val_19838 === (9))){
var state_19837__$1 = state_19837;
var statearr_19848_19875 = state_19837__$1;
(statearr_19848_19875[(2)] = tc);

(statearr_19848_19875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (5))){
var inst_19817 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19818 = cljs.core.async.close_BANG_.call(null,fc);
var state_19837__$1 = (function (){var statearr_19849 = state_19837;
(statearr_19849[(8)] = inst_19817);

return statearr_19849;
})();
var statearr_19850_19876 = state_19837__$1;
(statearr_19850_19876[(2)] = inst_19818);

(statearr_19850_19876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (14))){
var inst_19831 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
var statearr_19851_19877 = state_19837__$1;
(statearr_19851_19877[(2)] = inst_19831);

(statearr_19851_19877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (10))){
var state_19837__$1 = state_19837;
var statearr_19852_19878 = state_19837__$1;
(statearr_19852_19878[(2)] = fc);

(statearr_19852_19878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (8))){
var inst_19826 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
if(cljs.core.truth_(inst_19826)){
var statearr_19853_19879 = state_19837__$1;
(statearr_19853_19879[(1)] = (12));

} else {
var statearr_19854_19880 = state_19837__$1;
(statearr_19854_19880[(1)] = (13));

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
});})(c__19188__auto___19866,tc,fc))
;
return ((function (switch__19076__auto__,c__19188__auto___19866,tc,fc){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_19858 = [null,null,null,null,null,null,null,null,null];
(statearr_19858[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_19858[(1)] = (1));

return statearr_19858;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_19837){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19859){if((e19859 instanceof Object)){
var ex__19080__auto__ = e19859;
var statearr_19860_19881 = state_19837;
(statearr_19860_19881[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19882 = state_19837;
state_19837 = G__19882;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_19837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_19837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___19866,tc,fc))
})();
var state__19190__auto__ = (function (){var statearr_19861 = f__19189__auto__.call(null);
(statearr_19861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___19866);

return statearr_19861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___19866,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__){
return (function (state_19946){
var state_val_19947 = (state_19946[(1)]);
if((state_val_19947 === (7))){
var inst_19942 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
var statearr_19948_19969 = state_19946__$1;
(statearr_19948_19969[(2)] = inst_19942);

(statearr_19948_19969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (1))){
var inst_19926 = init;
var state_19946__$1 = (function (){var statearr_19949 = state_19946;
(statearr_19949[(7)] = inst_19926);

return statearr_19949;
})();
var statearr_19950_19970 = state_19946__$1;
(statearr_19950_19970[(2)] = null);

(statearr_19950_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (4))){
var inst_19929 = (state_19946[(8)]);
var inst_19929__$1 = (state_19946[(2)]);
var inst_19930 = (inst_19929__$1 == null);
var state_19946__$1 = (function (){var statearr_19951 = state_19946;
(statearr_19951[(8)] = inst_19929__$1);

return statearr_19951;
})();
if(cljs.core.truth_(inst_19930)){
var statearr_19952_19971 = state_19946__$1;
(statearr_19952_19971[(1)] = (5));

} else {
var statearr_19953_19972 = state_19946__$1;
(statearr_19953_19972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (6))){
var inst_19926 = (state_19946[(7)]);
var inst_19929 = (state_19946[(8)]);
var inst_19933 = (state_19946[(9)]);
var inst_19933__$1 = f.call(null,inst_19926,inst_19929);
var inst_19934 = cljs.core.reduced_QMARK_.call(null,inst_19933__$1);
var state_19946__$1 = (function (){var statearr_19954 = state_19946;
(statearr_19954[(9)] = inst_19933__$1);

return statearr_19954;
})();
if(inst_19934){
var statearr_19955_19973 = state_19946__$1;
(statearr_19955_19973[(1)] = (8));

} else {
var statearr_19956_19974 = state_19946__$1;
(statearr_19956_19974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (3))){
var inst_19944 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19946__$1,inst_19944);
} else {
if((state_val_19947 === (2))){
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19946__$1,(4),ch);
} else {
if((state_val_19947 === (9))){
var inst_19933 = (state_19946[(9)]);
var inst_19926 = inst_19933;
var state_19946__$1 = (function (){var statearr_19957 = state_19946;
(statearr_19957[(7)] = inst_19926);

return statearr_19957;
})();
var statearr_19958_19975 = state_19946__$1;
(statearr_19958_19975[(2)] = null);

(statearr_19958_19975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (5))){
var inst_19926 = (state_19946[(7)]);
var state_19946__$1 = state_19946;
var statearr_19959_19976 = state_19946__$1;
(statearr_19959_19976[(2)] = inst_19926);

(statearr_19959_19976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (10))){
var inst_19940 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
var statearr_19960_19977 = state_19946__$1;
(statearr_19960_19977[(2)] = inst_19940);

(statearr_19960_19977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (8))){
var inst_19933 = (state_19946[(9)]);
var inst_19936 = cljs.core.deref.call(null,inst_19933);
var state_19946__$1 = state_19946;
var statearr_19961_19978 = state_19946__$1;
(statearr_19961_19978[(2)] = inst_19936);

(statearr_19961_19978[(1)] = (10));


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
});})(c__19188__auto__))
;
return ((function (switch__19076__auto__,c__19188__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19077__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19077__auto____0 = (function (){
var statearr_19965 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19965[(0)] = cljs$core$async$reduce_$_state_machine__19077__auto__);

(statearr_19965[(1)] = (1));

return statearr_19965;
});
var cljs$core$async$reduce_$_state_machine__19077__auto____1 = (function (state_19946){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_19946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e19966){if((e19966 instanceof Object)){
var ex__19080__auto__ = e19966;
var statearr_19967_19979 = state_19946;
(statearr_19967_19979[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19980 = state_19946;
state_19946 = G__19980;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19077__auto__ = function(state_19946){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19077__auto____1.call(this,state_19946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19077__auto____0;
cljs$core$async$reduce_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19077__auto____1;
return cljs$core$async$reduce_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__))
})();
var state__19190__auto__ = (function (){var statearr_19968 = f__19189__auto__.call(null);
(statearr_19968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_19968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__))
);

return c__19188__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19981 = [];
var len__17910__auto___20033 = arguments.length;
var i__17911__auto___20034 = (0);
while(true){
if((i__17911__auto___20034 < len__17910__auto___20033)){
args19981.push((arguments[i__17911__auto___20034]));

var G__20035 = (i__17911__auto___20034 + (1));
i__17911__auto___20034 = G__20035;
continue;
} else {
}
break;
}

var G__19983 = args19981.length;
switch (G__19983) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19981.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__){
return (function (state_20008){
var state_val_20009 = (state_20008[(1)]);
if((state_val_20009 === (7))){
var inst_19990 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20010_20037 = state_20008__$1;
(statearr_20010_20037[(2)] = inst_19990);

(statearr_20010_20037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (1))){
var inst_19984 = cljs.core.seq.call(null,coll);
var inst_19985 = inst_19984;
var state_20008__$1 = (function (){var statearr_20011 = state_20008;
(statearr_20011[(7)] = inst_19985);

return statearr_20011;
})();
var statearr_20012_20038 = state_20008__$1;
(statearr_20012_20038[(2)] = null);

(statearr_20012_20038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (4))){
var inst_19985 = (state_20008[(7)]);
var inst_19988 = cljs.core.first.call(null,inst_19985);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20008__$1,(7),ch,inst_19988);
} else {
if((state_val_20009 === (13))){
var inst_20002 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20013_20039 = state_20008__$1;
(statearr_20013_20039[(2)] = inst_20002);

(statearr_20013_20039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (6))){
var inst_19993 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
if(cljs.core.truth_(inst_19993)){
var statearr_20014_20040 = state_20008__$1;
(statearr_20014_20040[(1)] = (8));

} else {
var statearr_20015_20041 = state_20008__$1;
(statearr_20015_20041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (3))){
var inst_20006 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20008__$1,inst_20006);
} else {
if((state_val_20009 === (12))){
var state_20008__$1 = state_20008;
var statearr_20016_20042 = state_20008__$1;
(statearr_20016_20042[(2)] = null);

(statearr_20016_20042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (2))){
var inst_19985 = (state_20008[(7)]);
var state_20008__$1 = state_20008;
if(cljs.core.truth_(inst_19985)){
var statearr_20017_20043 = state_20008__$1;
(statearr_20017_20043[(1)] = (4));

} else {
var statearr_20018_20044 = state_20008__$1;
(statearr_20018_20044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (11))){
var inst_19999 = cljs.core.async.close_BANG_.call(null,ch);
var state_20008__$1 = state_20008;
var statearr_20019_20045 = state_20008__$1;
(statearr_20019_20045[(2)] = inst_19999);

(statearr_20019_20045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (9))){
var state_20008__$1 = state_20008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20020_20046 = state_20008__$1;
(statearr_20020_20046[(1)] = (11));

} else {
var statearr_20021_20047 = state_20008__$1;
(statearr_20021_20047[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (5))){
var inst_19985 = (state_20008[(7)]);
var state_20008__$1 = state_20008;
var statearr_20022_20048 = state_20008__$1;
(statearr_20022_20048[(2)] = inst_19985);

(statearr_20022_20048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (10))){
var inst_20004 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20023_20049 = state_20008__$1;
(statearr_20023_20049[(2)] = inst_20004);

(statearr_20023_20049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (8))){
var inst_19985 = (state_20008[(7)]);
var inst_19995 = cljs.core.next.call(null,inst_19985);
var inst_19985__$1 = inst_19995;
var state_20008__$1 = (function (){var statearr_20024 = state_20008;
(statearr_20024[(7)] = inst_19985__$1);

return statearr_20024;
})();
var statearr_20025_20050 = state_20008__$1;
(statearr_20025_20050[(2)] = null);

(statearr_20025_20050[(1)] = (2));


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
});})(c__19188__auto__))
;
return ((function (switch__19076__auto__,c__19188__auto__){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_20029 = [null,null,null,null,null,null,null,null];
(statearr_20029[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_20029[(1)] = (1));

return statearr_20029;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_20008){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_20008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e20030){if((e20030 instanceof Object)){
var ex__19080__auto__ = e20030;
var statearr_20031_20051 = state_20008;
(statearr_20031_20051[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20052 = state_20008;
state_20008 = G__20052;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_20008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_20008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__))
})();
var state__19190__auto__ = (function (){var statearr_20032 = f__19189__auto__.call(null);
(statearr_20032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_20032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__))
);

return c__19188__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17507__auto__ = (((_ == null))?null:_);
var m__17508__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,_);
} else {
var m__17508__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20274 = (function (mult,ch,cs,meta20275){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20275 = meta20275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20276,meta20275__$1){
var self__ = this;
var _20276__$1 = this;
return (new cljs.core.async.t_cljs$core$async20274(self__.mult,self__.ch,self__.cs,meta20275__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20276){
var self__ = this;
var _20276__$1 = this;
return self__.meta20275;
});})(cs))
;

cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20274.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20275","meta20275",-169769384,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20274";

cljs.core.async.t_cljs$core$async20274.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20274");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20274 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20274(mult__$1,ch__$1,cs__$1,meta20275){
return (new cljs.core.async.t_cljs$core$async20274(mult__$1,ch__$1,cs__$1,meta20275));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20274(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19188__auto___20495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___20495,cs,m,dchan,dctr,done){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___20495,cs,m,dchan,dctr,done){
return (function (state_20407){
var state_val_20408 = (state_20407[(1)]);
if((state_val_20408 === (7))){
var inst_20403 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20409_20496 = state_20407__$1;
(statearr_20409_20496[(2)] = inst_20403);

(statearr_20409_20496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (20))){
var inst_20308 = (state_20407[(7)]);
var inst_20318 = cljs.core.first.call(null,inst_20308);
var inst_20319 = cljs.core.nth.call(null,inst_20318,(0),null);
var inst_20320 = cljs.core.nth.call(null,inst_20318,(1),null);
var state_20407__$1 = (function (){var statearr_20410 = state_20407;
(statearr_20410[(8)] = inst_20319);

return statearr_20410;
})();
if(cljs.core.truth_(inst_20320)){
var statearr_20411_20497 = state_20407__$1;
(statearr_20411_20497[(1)] = (22));

} else {
var statearr_20412_20498 = state_20407__$1;
(statearr_20412_20498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (27))){
var inst_20350 = (state_20407[(9)]);
var inst_20348 = (state_20407[(10)]);
var inst_20279 = (state_20407[(11)]);
var inst_20355 = (state_20407[(12)]);
var inst_20355__$1 = cljs.core._nth.call(null,inst_20348,inst_20350);
var inst_20356 = cljs.core.async.put_BANG_.call(null,inst_20355__$1,inst_20279,done);
var state_20407__$1 = (function (){var statearr_20413 = state_20407;
(statearr_20413[(12)] = inst_20355__$1);

return statearr_20413;
})();
if(cljs.core.truth_(inst_20356)){
var statearr_20414_20499 = state_20407__$1;
(statearr_20414_20499[(1)] = (30));

} else {
var statearr_20415_20500 = state_20407__$1;
(statearr_20415_20500[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (1))){
var state_20407__$1 = state_20407;
var statearr_20416_20501 = state_20407__$1;
(statearr_20416_20501[(2)] = null);

(statearr_20416_20501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (24))){
var inst_20308 = (state_20407[(7)]);
var inst_20325 = (state_20407[(2)]);
var inst_20326 = cljs.core.next.call(null,inst_20308);
var inst_20288 = inst_20326;
var inst_20289 = null;
var inst_20290 = (0);
var inst_20291 = (0);
var state_20407__$1 = (function (){var statearr_20417 = state_20407;
(statearr_20417[(13)] = inst_20291);

(statearr_20417[(14)] = inst_20288);

(statearr_20417[(15)] = inst_20325);

(statearr_20417[(16)] = inst_20289);

(statearr_20417[(17)] = inst_20290);

return statearr_20417;
})();
var statearr_20418_20502 = state_20407__$1;
(statearr_20418_20502[(2)] = null);

(statearr_20418_20502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (39))){
var state_20407__$1 = state_20407;
var statearr_20422_20503 = state_20407__$1;
(statearr_20422_20503[(2)] = null);

(statearr_20422_20503[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (4))){
var inst_20279 = (state_20407[(11)]);
var inst_20279__$1 = (state_20407[(2)]);
var inst_20280 = (inst_20279__$1 == null);
var state_20407__$1 = (function (){var statearr_20423 = state_20407;
(statearr_20423[(11)] = inst_20279__$1);

return statearr_20423;
})();
if(cljs.core.truth_(inst_20280)){
var statearr_20424_20504 = state_20407__$1;
(statearr_20424_20504[(1)] = (5));

} else {
var statearr_20425_20505 = state_20407__$1;
(statearr_20425_20505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (15))){
var inst_20291 = (state_20407[(13)]);
var inst_20288 = (state_20407[(14)]);
var inst_20289 = (state_20407[(16)]);
var inst_20290 = (state_20407[(17)]);
var inst_20304 = (state_20407[(2)]);
var inst_20305 = (inst_20291 + (1));
var tmp20419 = inst_20288;
var tmp20420 = inst_20289;
var tmp20421 = inst_20290;
var inst_20288__$1 = tmp20419;
var inst_20289__$1 = tmp20420;
var inst_20290__$1 = tmp20421;
var inst_20291__$1 = inst_20305;
var state_20407__$1 = (function (){var statearr_20426 = state_20407;
(statearr_20426[(13)] = inst_20291__$1);

(statearr_20426[(14)] = inst_20288__$1);

(statearr_20426[(16)] = inst_20289__$1);

(statearr_20426[(17)] = inst_20290__$1);

(statearr_20426[(18)] = inst_20304);

return statearr_20426;
})();
var statearr_20427_20506 = state_20407__$1;
(statearr_20427_20506[(2)] = null);

(statearr_20427_20506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (21))){
var inst_20329 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20431_20507 = state_20407__$1;
(statearr_20431_20507[(2)] = inst_20329);

(statearr_20431_20507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (31))){
var inst_20355 = (state_20407[(12)]);
var inst_20359 = done.call(null,null);
var inst_20360 = cljs.core.async.untap_STAR_.call(null,m,inst_20355);
var state_20407__$1 = (function (){var statearr_20432 = state_20407;
(statearr_20432[(19)] = inst_20359);

return statearr_20432;
})();
var statearr_20433_20508 = state_20407__$1;
(statearr_20433_20508[(2)] = inst_20360);

(statearr_20433_20508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (32))){
var inst_20350 = (state_20407[(9)]);
var inst_20348 = (state_20407[(10)]);
var inst_20349 = (state_20407[(20)]);
var inst_20347 = (state_20407[(21)]);
var inst_20362 = (state_20407[(2)]);
var inst_20363 = (inst_20350 + (1));
var tmp20428 = inst_20348;
var tmp20429 = inst_20349;
var tmp20430 = inst_20347;
var inst_20347__$1 = tmp20430;
var inst_20348__$1 = tmp20428;
var inst_20349__$1 = tmp20429;
var inst_20350__$1 = inst_20363;
var state_20407__$1 = (function (){var statearr_20434 = state_20407;
(statearr_20434[(9)] = inst_20350__$1);

(statearr_20434[(10)] = inst_20348__$1);

(statearr_20434[(22)] = inst_20362);

(statearr_20434[(20)] = inst_20349__$1);

(statearr_20434[(21)] = inst_20347__$1);

return statearr_20434;
})();
var statearr_20435_20509 = state_20407__$1;
(statearr_20435_20509[(2)] = null);

(statearr_20435_20509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (40))){
var inst_20375 = (state_20407[(23)]);
var inst_20379 = done.call(null,null);
var inst_20380 = cljs.core.async.untap_STAR_.call(null,m,inst_20375);
var state_20407__$1 = (function (){var statearr_20436 = state_20407;
(statearr_20436[(24)] = inst_20379);

return statearr_20436;
})();
var statearr_20437_20510 = state_20407__$1;
(statearr_20437_20510[(2)] = inst_20380);

(statearr_20437_20510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (33))){
var inst_20366 = (state_20407[(25)]);
var inst_20368 = cljs.core.chunked_seq_QMARK_.call(null,inst_20366);
var state_20407__$1 = state_20407;
if(inst_20368){
var statearr_20438_20511 = state_20407__$1;
(statearr_20438_20511[(1)] = (36));

} else {
var statearr_20439_20512 = state_20407__$1;
(statearr_20439_20512[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (13))){
var inst_20298 = (state_20407[(26)]);
var inst_20301 = cljs.core.async.close_BANG_.call(null,inst_20298);
var state_20407__$1 = state_20407;
var statearr_20440_20513 = state_20407__$1;
(statearr_20440_20513[(2)] = inst_20301);

(statearr_20440_20513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (22))){
var inst_20319 = (state_20407[(8)]);
var inst_20322 = cljs.core.async.close_BANG_.call(null,inst_20319);
var state_20407__$1 = state_20407;
var statearr_20441_20514 = state_20407__$1;
(statearr_20441_20514[(2)] = inst_20322);

(statearr_20441_20514[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (36))){
var inst_20366 = (state_20407[(25)]);
var inst_20370 = cljs.core.chunk_first.call(null,inst_20366);
var inst_20371 = cljs.core.chunk_rest.call(null,inst_20366);
var inst_20372 = cljs.core.count.call(null,inst_20370);
var inst_20347 = inst_20371;
var inst_20348 = inst_20370;
var inst_20349 = inst_20372;
var inst_20350 = (0);
var state_20407__$1 = (function (){var statearr_20442 = state_20407;
(statearr_20442[(9)] = inst_20350);

(statearr_20442[(10)] = inst_20348);

(statearr_20442[(20)] = inst_20349);

(statearr_20442[(21)] = inst_20347);

return statearr_20442;
})();
var statearr_20443_20515 = state_20407__$1;
(statearr_20443_20515[(2)] = null);

(statearr_20443_20515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (41))){
var inst_20366 = (state_20407[(25)]);
var inst_20382 = (state_20407[(2)]);
var inst_20383 = cljs.core.next.call(null,inst_20366);
var inst_20347 = inst_20383;
var inst_20348 = null;
var inst_20349 = (0);
var inst_20350 = (0);
var state_20407__$1 = (function (){var statearr_20444 = state_20407;
(statearr_20444[(9)] = inst_20350);

(statearr_20444[(10)] = inst_20348);

(statearr_20444[(27)] = inst_20382);

(statearr_20444[(20)] = inst_20349);

(statearr_20444[(21)] = inst_20347);

return statearr_20444;
})();
var statearr_20445_20516 = state_20407__$1;
(statearr_20445_20516[(2)] = null);

(statearr_20445_20516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (43))){
var state_20407__$1 = state_20407;
var statearr_20446_20517 = state_20407__$1;
(statearr_20446_20517[(2)] = null);

(statearr_20446_20517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (29))){
var inst_20391 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20447_20518 = state_20407__$1;
(statearr_20447_20518[(2)] = inst_20391);

(statearr_20447_20518[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (44))){
var inst_20400 = (state_20407[(2)]);
var state_20407__$1 = (function (){var statearr_20448 = state_20407;
(statearr_20448[(28)] = inst_20400);

return statearr_20448;
})();
var statearr_20449_20519 = state_20407__$1;
(statearr_20449_20519[(2)] = null);

(statearr_20449_20519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (6))){
var inst_20339 = (state_20407[(29)]);
var inst_20338 = cljs.core.deref.call(null,cs);
var inst_20339__$1 = cljs.core.keys.call(null,inst_20338);
var inst_20340 = cljs.core.count.call(null,inst_20339__$1);
var inst_20341 = cljs.core.reset_BANG_.call(null,dctr,inst_20340);
var inst_20346 = cljs.core.seq.call(null,inst_20339__$1);
var inst_20347 = inst_20346;
var inst_20348 = null;
var inst_20349 = (0);
var inst_20350 = (0);
var state_20407__$1 = (function (){var statearr_20450 = state_20407;
(statearr_20450[(9)] = inst_20350);

(statearr_20450[(10)] = inst_20348);

(statearr_20450[(20)] = inst_20349);

(statearr_20450[(30)] = inst_20341);

(statearr_20450[(29)] = inst_20339__$1);

(statearr_20450[(21)] = inst_20347);

return statearr_20450;
})();
var statearr_20451_20520 = state_20407__$1;
(statearr_20451_20520[(2)] = null);

(statearr_20451_20520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (28))){
var inst_20366 = (state_20407[(25)]);
var inst_20347 = (state_20407[(21)]);
var inst_20366__$1 = cljs.core.seq.call(null,inst_20347);
var state_20407__$1 = (function (){var statearr_20452 = state_20407;
(statearr_20452[(25)] = inst_20366__$1);

return statearr_20452;
})();
if(inst_20366__$1){
var statearr_20453_20521 = state_20407__$1;
(statearr_20453_20521[(1)] = (33));

} else {
var statearr_20454_20522 = state_20407__$1;
(statearr_20454_20522[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (25))){
var inst_20350 = (state_20407[(9)]);
var inst_20349 = (state_20407[(20)]);
var inst_20352 = (inst_20350 < inst_20349);
var inst_20353 = inst_20352;
var state_20407__$1 = state_20407;
if(cljs.core.truth_(inst_20353)){
var statearr_20455_20523 = state_20407__$1;
(statearr_20455_20523[(1)] = (27));

} else {
var statearr_20456_20524 = state_20407__$1;
(statearr_20456_20524[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (34))){
var state_20407__$1 = state_20407;
var statearr_20457_20525 = state_20407__$1;
(statearr_20457_20525[(2)] = null);

(statearr_20457_20525[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (17))){
var state_20407__$1 = state_20407;
var statearr_20458_20526 = state_20407__$1;
(statearr_20458_20526[(2)] = null);

(statearr_20458_20526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (3))){
var inst_20405 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20407__$1,inst_20405);
} else {
if((state_val_20408 === (12))){
var inst_20334 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20459_20527 = state_20407__$1;
(statearr_20459_20527[(2)] = inst_20334);

(statearr_20459_20527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (2))){
var state_20407__$1 = state_20407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20407__$1,(4),ch);
} else {
if((state_val_20408 === (23))){
var state_20407__$1 = state_20407;
var statearr_20460_20528 = state_20407__$1;
(statearr_20460_20528[(2)] = null);

(statearr_20460_20528[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (35))){
var inst_20389 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20461_20529 = state_20407__$1;
(statearr_20461_20529[(2)] = inst_20389);

(statearr_20461_20529[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (19))){
var inst_20308 = (state_20407[(7)]);
var inst_20312 = cljs.core.chunk_first.call(null,inst_20308);
var inst_20313 = cljs.core.chunk_rest.call(null,inst_20308);
var inst_20314 = cljs.core.count.call(null,inst_20312);
var inst_20288 = inst_20313;
var inst_20289 = inst_20312;
var inst_20290 = inst_20314;
var inst_20291 = (0);
var state_20407__$1 = (function (){var statearr_20462 = state_20407;
(statearr_20462[(13)] = inst_20291);

(statearr_20462[(14)] = inst_20288);

(statearr_20462[(16)] = inst_20289);

(statearr_20462[(17)] = inst_20290);

return statearr_20462;
})();
var statearr_20463_20530 = state_20407__$1;
(statearr_20463_20530[(2)] = null);

(statearr_20463_20530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (11))){
var inst_20308 = (state_20407[(7)]);
var inst_20288 = (state_20407[(14)]);
var inst_20308__$1 = cljs.core.seq.call(null,inst_20288);
var state_20407__$1 = (function (){var statearr_20464 = state_20407;
(statearr_20464[(7)] = inst_20308__$1);

return statearr_20464;
})();
if(inst_20308__$1){
var statearr_20465_20531 = state_20407__$1;
(statearr_20465_20531[(1)] = (16));

} else {
var statearr_20466_20532 = state_20407__$1;
(statearr_20466_20532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (9))){
var inst_20336 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20467_20533 = state_20407__$1;
(statearr_20467_20533[(2)] = inst_20336);

(statearr_20467_20533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (5))){
var inst_20286 = cljs.core.deref.call(null,cs);
var inst_20287 = cljs.core.seq.call(null,inst_20286);
var inst_20288 = inst_20287;
var inst_20289 = null;
var inst_20290 = (0);
var inst_20291 = (0);
var state_20407__$1 = (function (){var statearr_20468 = state_20407;
(statearr_20468[(13)] = inst_20291);

(statearr_20468[(14)] = inst_20288);

(statearr_20468[(16)] = inst_20289);

(statearr_20468[(17)] = inst_20290);

return statearr_20468;
})();
var statearr_20469_20534 = state_20407__$1;
(statearr_20469_20534[(2)] = null);

(statearr_20469_20534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (14))){
var state_20407__$1 = state_20407;
var statearr_20470_20535 = state_20407__$1;
(statearr_20470_20535[(2)] = null);

(statearr_20470_20535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (45))){
var inst_20397 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20471_20536 = state_20407__$1;
(statearr_20471_20536[(2)] = inst_20397);

(statearr_20471_20536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (26))){
var inst_20339 = (state_20407[(29)]);
var inst_20393 = (state_20407[(2)]);
var inst_20394 = cljs.core.seq.call(null,inst_20339);
var state_20407__$1 = (function (){var statearr_20472 = state_20407;
(statearr_20472[(31)] = inst_20393);

return statearr_20472;
})();
if(inst_20394){
var statearr_20473_20537 = state_20407__$1;
(statearr_20473_20537[(1)] = (42));

} else {
var statearr_20474_20538 = state_20407__$1;
(statearr_20474_20538[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (16))){
var inst_20308 = (state_20407[(7)]);
var inst_20310 = cljs.core.chunked_seq_QMARK_.call(null,inst_20308);
var state_20407__$1 = state_20407;
if(inst_20310){
var statearr_20475_20539 = state_20407__$1;
(statearr_20475_20539[(1)] = (19));

} else {
var statearr_20476_20540 = state_20407__$1;
(statearr_20476_20540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (38))){
var inst_20386 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20477_20541 = state_20407__$1;
(statearr_20477_20541[(2)] = inst_20386);

(statearr_20477_20541[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (30))){
var state_20407__$1 = state_20407;
var statearr_20478_20542 = state_20407__$1;
(statearr_20478_20542[(2)] = null);

(statearr_20478_20542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (10))){
var inst_20291 = (state_20407[(13)]);
var inst_20289 = (state_20407[(16)]);
var inst_20297 = cljs.core._nth.call(null,inst_20289,inst_20291);
var inst_20298 = cljs.core.nth.call(null,inst_20297,(0),null);
var inst_20299 = cljs.core.nth.call(null,inst_20297,(1),null);
var state_20407__$1 = (function (){var statearr_20479 = state_20407;
(statearr_20479[(26)] = inst_20298);

return statearr_20479;
})();
if(cljs.core.truth_(inst_20299)){
var statearr_20480_20543 = state_20407__$1;
(statearr_20480_20543[(1)] = (13));

} else {
var statearr_20481_20544 = state_20407__$1;
(statearr_20481_20544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (18))){
var inst_20332 = (state_20407[(2)]);
var state_20407__$1 = state_20407;
var statearr_20482_20545 = state_20407__$1;
(statearr_20482_20545[(2)] = inst_20332);

(statearr_20482_20545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (42))){
var state_20407__$1 = state_20407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20407__$1,(45),dchan);
} else {
if((state_val_20408 === (37))){
var inst_20279 = (state_20407[(11)]);
var inst_20366 = (state_20407[(25)]);
var inst_20375 = (state_20407[(23)]);
var inst_20375__$1 = cljs.core.first.call(null,inst_20366);
var inst_20376 = cljs.core.async.put_BANG_.call(null,inst_20375__$1,inst_20279,done);
var state_20407__$1 = (function (){var statearr_20483 = state_20407;
(statearr_20483[(23)] = inst_20375__$1);

return statearr_20483;
})();
if(cljs.core.truth_(inst_20376)){
var statearr_20484_20546 = state_20407__$1;
(statearr_20484_20546[(1)] = (39));

} else {
var statearr_20485_20547 = state_20407__$1;
(statearr_20485_20547[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20408 === (8))){
var inst_20291 = (state_20407[(13)]);
var inst_20290 = (state_20407[(17)]);
var inst_20293 = (inst_20291 < inst_20290);
var inst_20294 = inst_20293;
var state_20407__$1 = state_20407;
if(cljs.core.truth_(inst_20294)){
var statearr_20486_20548 = state_20407__$1;
(statearr_20486_20548[(1)] = (10));

} else {
var statearr_20487_20549 = state_20407__$1;
(statearr_20487_20549[(1)] = (11));

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
});})(c__19188__auto___20495,cs,m,dchan,dctr,done))
;
return ((function (switch__19076__auto__,c__19188__auto___20495,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19077__auto__ = null;
var cljs$core$async$mult_$_state_machine__19077__auto____0 = (function (){
var statearr_20491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20491[(0)] = cljs$core$async$mult_$_state_machine__19077__auto__);

(statearr_20491[(1)] = (1));

return statearr_20491;
});
var cljs$core$async$mult_$_state_machine__19077__auto____1 = (function (state_20407){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_20407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e20492){if((e20492 instanceof Object)){
var ex__19080__auto__ = e20492;
var statearr_20493_20550 = state_20407;
(statearr_20493_20550[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20551 = state_20407;
state_20407 = G__20551;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19077__auto__ = function(state_20407){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19077__auto____1.call(this,state_20407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19077__auto____0;
cljs$core$async$mult_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19077__auto____1;
return cljs$core$async$mult_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___20495,cs,m,dchan,dctr,done))
})();
var state__19190__auto__ = (function (){var statearr_20494 = f__19189__auto__.call(null);
(statearr_20494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___20495);

return statearr_20494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___20495,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20552 = [];
var len__17910__auto___20555 = arguments.length;
var i__17911__auto___20556 = (0);
while(true){
if((i__17911__auto___20556 < len__17910__auto___20555)){
args20552.push((arguments[i__17911__auto___20556]));

var G__20557 = (i__17911__auto___20556 + (1));
i__17911__auto___20556 = G__20557;
continue;
} else {
}
break;
}

var G__20554 = args20552.length;
switch (G__20554) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20552.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,state_map);
} else {
var m__17508__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,mode);
} else {
var m__17508__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17917__auto__ = [];
var len__17910__auto___20569 = arguments.length;
var i__17911__auto___20570 = (0);
while(true){
if((i__17911__auto___20570 < len__17910__auto___20569)){
args__17917__auto__.push((arguments[i__17911__auto___20570]));

var G__20571 = (i__17911__auto___20570 + (1));
i__17911__auto___20570 = G__20571;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((3) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17918__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20563){
var map__20564 = p__20563;
var map__20564__$1 = ((((!((map__20564 == null)))?((((map__20564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20564):map__20564);
var opts = map__20564__$1;
var statearr_20566_20572 = state;
(statearr_20566_20572[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20564,map__20564__$1,opts){
return (function (val){
var statearr_20567_20573 = state;
(statearr_20567_20573[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20564,map__20564__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20568_20574 = state;
(statearr_20568_20574[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20559){
var G__20560 = cljs.core.first.call(null,seq20559);
var seq20559__$1 = cljs.core.next.call(null,seq20559);
var G__20561 = cljs.core.first.call(null,seq20559__$1);
var seq20559__$2 = cljs.core.next.call(null,seq20559__$1);
var G__20562 = cljs.core.first.call(null,seq20559__$2);
var seq20559__$3 = cljs.core.next.call(null,seq20559__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20560,G__20561,G__20562,seq20559__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20738 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20739){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20739 = meta20739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20740,meta20739__$1){
var self__ = this;
var _20740__$1 = this;
return (new cljs.core.async.t_cljs$core$async20738(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20739__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20740){
var self__ = this;
var _20740__$1 = this;
return self__.meta20739;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20739","meta20739",1743723982,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20738";

cljs.core.async.t_cljs$core$async20738.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20738");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20738 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20738(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20739){
return (new cljs.core.async.t_cljs$core$async20738(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20739));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20738(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19188__auto___20901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___20901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___20901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20838){
var state_val_20839 = (state_20838[(1)]);
if((state_val_20839 === (7))){
var inst_20756 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20840_20902 = state_20838__$1;
(statearr_20840_20902[(2)] = inst_20756);

(statearr_20840_20902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (20))){
var inst_20768 = (state_20838[(7)]);
var state_20838__$1 = state_20838;
var statearr_20841_20903 = state_20838__$1;
(statearr_20841_20903[(2)] = inst_20768);

(statearr_20841_20903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (27))){
var state_20838__$1 = state_20838;
var statearr_20842_20904 = state_20838__$1;
(statearr_20842_20904[(2)] = null);

(statearr_20842_20904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (1))){
var inst_20744 = (state_20838[(8)]);
var inst_20744__$1 = calc_state.call(null);
var inst_20746 = (inst_20744__$1 == null);
var inst_20747 = cljs.core.not.call(null,inst_20746);
var state_20838__$1 = (function (){var statearr_20843 = state_20838;
(statearr_20843[(8)] = inst_20744__$1);

return statearr_20843;
})();
if(inst_20747){
var statearr_20844_20905 = state_20838__$1;
(statearr_20844_20905[(1)] = (2));

} else {
var statearr_20845_20906 = state_20838__$1;
(statearr_20845_20906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (24))){
var inst_20798 = (state_20838[(9)]);
var inst_20791 = (state_20838[(10)]);
var inst_20812 = (state_20838[(11)]);
var inst_20812__$1 = inst_20791.call(null,inst_20798);
var state_20838__$1 = (function (){var statearr_20846 = state_20838;
(statearr_20846[(11)] = inst_20812__$1);

return statearr_20846;
})();
if(cljs.core.truth_(inst_20812__$1)){
var statearr_20847_20907 = state_20838__$1;
(statearr_20847_20907[(1)] = (29));

} else {
var statearr_20848_20908 = state_20838__$1;
(statearr_20848_20908[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (4))){
var inst_20759 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20759)){
var statearr_20849_20909 = state_20838__$1;
(statearr_20849_20909[(1)] = (8));

} else {
var statearr_20850_20910 = state_20838__$1;
(statearr_20850_20910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (15))){
var inst_20785 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20785)){
var statearr_20851_20911 = state_20838__$1;
(statearr_20851_20911[(1)] = (19));

} else {
var statearr_20852_20912 = state_20838__$1;
(statearr_20852_20912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (21))){
var inst_20790 = (state_20838[(12)]);
var inst_20790__$1 = (state_20838[(2)]);
var inst_20791 = cljs.core.get.call(null,inst_20790__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20792 = cljs.core.get.call(null,inst_20790__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20793 = cljs.core.get.call(null,inst_20790__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20838__$1 = (function (){var statearr_20853 = state_20838;
(statearr_20853[(12)] = inst_20790__$1);

(statearr_20853[(13)] = inst_20792);

(statearr_20853[(10)] = inst_20791);

return statearr_20853;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20838__$1,(22),inst_20793);
} else {
if((state_val_20839 === (31))){
var inst_20820 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20820)){
var statearr_20854_20913 = state_20838__$1;
(statearr_20854_20913[(1)] = (32));

} else {
var statearr_20855_20914 = state_20838__$1;
(statearr_20855_20914[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (32))){
var inst_20797 = (state_20838[(14)]);
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20838__$1,(35),out,inst_20797);
} else {
if((state_val_20839 === (33))){
var inst_20790 = (state_20838[(12)]);
var inst_20768 = inst_20790;
var state_20838__$1 = (function (){var statearr_20856 = state_20838;
(statearr_20856[(7)] = inst_20768);

return statearr_20856;
})();
var statearr_20857_20915 = state_20838__$1;
(statearr_20857_20915[(2)] = null);

(statearr_20857_20915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (13))){
var inst_20768 = (state_20838[(7)]);
var inst_20775 = inst_20768.cljs$lang$protocol_mask$partition0$;
var inst_20776 = (inst_20775 & (64));
var inst_20777 = inst_20768.cljs$core$ISeq$;
var inst_20778 = (inst_20776) || (inst_20777);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20778)){
var statearr_20858_20916 = state_20838__$1;
(statearr_20858_20916[(1)] = (16));

} else {
var statearr_20859_20917 = state_20838__$1;
(statearr_20859_20917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (22))){
var inst_20798 = (state_20838[(9)]);
var inst_20797 = (state_20838[(14)]);
var inst_20796 = (state_20838[(2)]);
var inst_20797__$1 = cljs.core.nth.call(null,inst_20796,(0),null);
var inst_20798__$1 = cljs.core.nth.call(null,inst_20796,(1),null);
var inst_20799 = (inst_20797__$1 == null);
var inst_20800 = cljs.core._EQ_.call(null,inst_20798__$1,change);
var inst_20801 = (inst_20799) || (inst_20800);
var state_20838__$1 = (function (){var statearr_20860 = state_20838;
(statearr_20860[(9)] = inst_20798__$1);

(statearr_20860[(14)] = inst_20797__$1);

return statearr_20860;
})();
if(cljs.core.truth_(inst_20801)){
var statearr_20861_20918 = state_20838__$1;
(statearr_20861_20918[(1)] = (23));

} else {
var statearr_20862_20919 = state_20838__$1;
(statearr_20862_20919[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (36))){
var inst_20790 = (state_20838[(12)]);
var inst_20768 = inst_20790;
var state_20838__$1 = (function (){var statearr_20863 = state_20838;
(statearr_20863[(7)] = inst_20768);

return statearr_20863;
})();
var statearr_20864_20920 = state_20838__$1;
(statearr_20864_20920[(2)] = null);

(statearr_20864_20920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (29))){
var inst_20812 = (state_20838[(11)]);
var state_20838__$1 = state_20838;
var statearr_20865_20921 = state_20838__$1;
(statearr_20865_20921[(2)] = inst_20812);

(statearr_20865_20921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (6))){
var state_20838__$1 = state_20838;
var statearr_20866_20922 = state_20838__$1;
(statearr_20866_20922[(2)] = false);

(statearr_20866_20922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (28))){
var inst_20808 = (state_20838[(2)]);
var inst_20809 = calc_state.call(null);
var inst_20768 = inst_20809;
var state_20838__$1 = (function (){var statearr_20867 = state_20838;
(statearr_20867[(7)] = inst_20768);

(statearr_20867[(15)] = inst_20808);

return statearr_20867;
})();
var statearr_20868_20923 = state_20838__$1;
(statearr_20868_20923[(2)] = null);

(statearr_20868_20923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (25))){
var inst_20834 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20869_20924 = state_20838__$1;
(statearr_20869_20924[(2)] = inst_20834);

(statearr_20869_20924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (34))){
var inst_20832 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20870_20925 = state_20838__$1;
(statearr_20870_20925[(2)] = inst_20832);

(statearr_20870_20925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (17))){
var state_20838__$1 = state_20838;
var statearr_20871_20926 = state_20838__$1;
(statearr_20871_20926[(2)] = false);

(statearr_20871_20926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (3))){
var state_20838__$1 = state_20838;
var statearr_20872_20927 = state_20838__$1;
(statearr_20872_20927[(2)] = false);

(statearr_20872_20927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (12))){
var inst_20836 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20838__$1,inst_20836);
} else {
if((state_val_20839 === (2))){
var inst_20744 = (state_20838[(8)]);
var inst_20749 = inst_20744.cljs$lang$protocol_mask$partition0$;
var inst_20750 = (inst_20749 & (64));
var inst_20751 = inst_20744.cljs$core$ISeq$;
var inst_20752 = (inst_20750) || (inst_20751);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20752)){
var statearr_20873_20928 = state_20838__$1;
(statearr_20873_20928[(1)] = (5));

} else {
var statearr_20874_20929 = state_20838__$1;
(statearr_20874_20929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (23))){
var inst_20797 = (state_20838[(14)]);
var inst_20803 = (inst_20797 == null);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20803)){
var statearr_20875_20930 = state_20838__$1;
(statearr_20875_20930[(1)] = (26));

} else {
var statearr_20876_20931 = state_20838__$1;
(statearr_20876_20931[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (35))){
var inst_20823 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20823)){
var statearr_20877_20932 = state_20838__$1;
(statearr_20877_20932[(1)] = (36));

} else {
var statearr_20878_20933 = state_20838__$1;
(statearr_20878_20933[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (19))){
var inst_20768 = (state_20838[(7)]);
var inst_20787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20768);
var state_20838__$1 = state_20838;
var statearr_20879_20934 = state_20838__$1;
(statearr_20879_20934[(2)] = inst_20787);

(statearr_20879_20934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (11))){
var inst_20768 = (state_20838[(7)]);
var inst_20772 = (inst_20768 == null);
var inst_20773 = cljs.core.not.call(null,inst_20772);
var state_20838__$1 = state_20838;
if(inst_20773){
var statearr_20880_20935 = state_20838__$1;
(statearr_20880_20935[(1)] = (13));

} else {
var statearr_20881_20936 = state_20838__$1;
(statearr_20881_20936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (9))){
var inst_20744 = (state_20838[(8)]);
var state_20838__$1 = state_20838;
var statearr_20882_20937 = state_20838__$1;
(statearr_20882_20937[(2)] = inst_20744);

(statearr_20882_20937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (5))){
var state_20838__$1 = state_20838;
var statearr_20883_20938 = state_20838__$1;
(statearr_20883_20938[(2)] = true);

(statearr_20883_20938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (14))){
var state_20838__$1 = state_20838;
var statearr_20884_20939 = state_20838__$1;
(statearr_20884_20939[(2)] = false);

(statearr_20884_20939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (26))){
var inst_20798 = (state_20838[(9)]);
var inst_20805 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20798);
var state_20838__$1 = state_20838;
var statearr_20885_20940 = state_20838__$1;
(statearr_20885_20940[(2)] = inst_20805);

(statearr_20885_20940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (16))){
var state_20838__$1 = state_20838;
var statearr_20886_20941 = state_20838__$1;
(statearr_20886_20941[(2)] = true);

(statearr_20886_20941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (38))){
var inst_20828 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20887_20942 = state_20838__$1;
(statearr_20887_20942[(2)] = inst_20828);

(statearr_20887_20942[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (30))){
var inst_20798 = (state_20838[(9)]);
var inst_20792 = (state_20838[(13)]);
var inst_20791 = (state_20838[(10)]);
var inst_20815 = cljs.core.empty_QMARK_.call(null,inst_20791);
var inst_20816 = inst_20792.call(null,inst_20798);
var inst_20817 = cljs.core.not.call(null,inst_20816);
var inst_20818 = (inst_20815) && (inst_20817);
var state_20838__$1 = state_20838;
var statearr_20888_20943 = state_20838__$1;
(statearr_20888_20943[(2)] = inst_20818);

(statearr_20888_20943[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (10))){
var inst_20744 = (state_20838[(8)]);
var inst_20764 = (state_20838[(2)]);
var inst_20765 = cljs.core.get.call(null,inst_20764,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20766 = cljs.core.get.call(null,inst_20764,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20767 = cljs.core.get.call(null,inst_20764,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20768 = inst_20744;
var state_20838__$1 = (function (){var statearr_20889 = state_20838;
(statearr_20889[(16)] = inst_20766);

(statearr_20889[(17)] = inst_20765);

(statearr_20889[(18)] = inst_20767);

(statearr_20889[(7)] = inst_20768);

return statearr_20889;
})();
var statearr_20890_20944 = state_20838__$1;
(statearr_20890_20944[(2)] = null);

(statearr_20890_20944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (18))){
var inst_20782 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20891_20945 = state_20838__$1;
(statearr_20891_20945[(2)] = inst_20782);

(statearr_20891_20945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (37))){
var state_20838__$1 = state_20838;
var statearr_20892_20946 = state_20838__$1;
(statearr_20892_20946[(2)] = null);

(statearr_20892_20946[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (8))){
var inst_20744 = (state_20838[(8)]);
var inst_20761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20744);
var state_20838__$1 = state_20838;
var statearr_20893_20947 = state_20838__$1;
(statearr_20893_20947[(2)] = inst_20761);

(statearr_20893_20947[(1)] = (10));


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
});})(c__19188__auto___20901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19076__auto__,c__19188__auto___20901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19077__auto__ = null;
var cljs$core$async$mix_$_state_machine__19077__auto____0 = (function (){
var statearr_20897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20897[(0)] = cljs$core$async$mix_$_state_machine__19077__auto__);

(statearr_20897[(1)] = (1));

return statearr_20897;
});
var cljs$core$async$mix_$_state_machine__19077__auto____1 = (function (state_20838){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_20838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e20898){if((e20898 instanceof Object)){
var ex__19080__auto__ = e20898;
var statearr_20899_20948 = state_20838;
(statearr_20899_20948[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20949 = state_20838;
state_20838 = G__20949;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19077__auto__ = function(state_20838){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19077__auto____1.call(this,state_20838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19077__auto____0;
cljs$core$async$mix_$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19077__auto____1;
return cljs$core$async$mix_$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___20901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19190__auto__ = (function (){var statearr_20900 = f__19189__auto__.call(null);
(statearr_20900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___20901);

return statearr_20900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___20901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20950 = [];
var len__17910__auto___20953 = arguments.length;
var i__17911__auto___20954 = (0);
while(true){
if((i__17911__auto___20954 < len__17910__auto___20953)){
args20950.push((arguments[i__17911__auto___20954]));

var G__20955 = (i__17911__auto___20954 + (1));
i__17911__auto___20954 = G__20955;
continue;
} else {
}
break;
}

var G__20952 = args20950.length;
switch (G__20952) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20950.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20958 = [];
var len__17910__auto___21083 = arguments.length;
var i__17911__auto___21084 = (0);
while(true){
if((i__17911__auto___21084 < len__17910__auto___21083)){
args20958.push((arguments[i__17911__auto___21084]));

var G__21085 = (i__17911__auto___21084 + (1));
i__17911__auto___21084 = G__21085;
continue;
} else {
}
break;
}

var G__20960 = args20958.length;
switch (G__20960) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20958.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16852__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16852__auto__,mults){
return (function (p1__20957_SHARP_){
if(cljs.core.truth_(p1__20957_SHARP_.call(null,topic))){
return p1__20957_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20957_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16852__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20961 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20962){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20962 = meta20962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20963,meta20962__$1){
var self__ = this;
var _20963__$1 = this;
return (new cljs.core.async.t_cljs$core$async20961(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20962__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20963){
var self__ = this;
var _20963__$1 = this;
return self__.meta20962;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20962","meta20962",1391000986,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20961";

cljs.core.async.t_cljs$core$async20961.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20961");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20961 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20961(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20962){
return (new cljs.core.async.t_cljs$core$async20961(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20962));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20961(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19188__auto___21087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21087,mults,ensure_mult,p){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21087,mults,ensure_mult,p){
return (function (state_21035){
var state_val_21036 = (state_21035[(1)]);
if((state_val_21036 === (7))){
var inst_21031 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21037_21088 = state_21035__$1;
(statearr_21037_21088[(2)] = inst_21031);

(statearr_21037_21088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (20))){
var state_21035__$1 = state_21035;
var statearr_21038_21089 = state_21035__$1;
(statearr_21038_21089[(2)] = null);

(statearr_21038_21089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (1))){
var state_21035__$1 = state_21035;
var statearr_21039_21090 = state_21035__$1;
(statearr_21039_21090[(2)] = null);

(statearr_21039_21090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (24))){
var inst_21014 = (state_21035[(7)]);
var inst_21023 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21014);
var state_21035__$1 = state_21035;
var statearr_21040_21091 = state_21035__$1;
(statearr_21040_21091[(2)] = inst_21023);

(statearr_21040_21091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (4))){
var inst_20966 = (state_21035[(8)]);
var inst_20966__$1 = (state_21035[(2)]);
var inst_20967 = (inst_20966__$1 == null);
var state_21035__$1 = (function (){var statearr_21041 = state_21035;
(statearr_21041[(8)] = inst_20966__$1);

return statearr_21041;
})();
if(cljs.core.truth_(inst_20967)){
var statearr_21042_21092 = state_21035__$1;
(statearr_21042_21092[(1)] = (5));

} else {
var statearr_21043_21093 = state_21035__$1;
(statearr_21043_21093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (15))){
var inst_21008 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21044_21094 = state_21035__$1;
(statearr_21044_21094[(2)] = inst_21008);

(statearr_21044_21094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (21))){
var inst_21028 = (state_21035[(2)]);
var state_21035__$1 = (function (){var statearr_21045 = state_21035;
(statearr_21045[(9)] = inst_21028);

return statearr_21045;
})();
var statearr_21046_21095 = state_21035__$1;
(statearr_21046_21095[(2)] = null);

(statearr_21046_21095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (13))){
var inst_20990 = (state_21035[(10)]);
var inst_20992 = cljs.core.chunked_seq_QMARK_.call(null,inst_20990);
var state_21035__$1 = state_21035;
if(inst_20992){
var statearr_21047_21096 = state_21035__$1;
(statearr_21047_21096[(1)] = (16));

} else {
var statearr_21048_21097 = state_21035__$1;
(statearr_21048_21097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (22))){
var inst_21020 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
if(cljs.core.truth_(inst_21020)){
var statearr_21049_21098 = state_21035__$1;
(statearr_21049_21098[(1)] = (23));

} else {
var statearr_21050_21099 = state_21035__$1;
(statearr_21050_21099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (6))){
var inst_20966 = (state_21035[(8)]);
var inst_21016 = (state_21035[(11)]);
var inst_21014 = (state_21035[(7)]);
var inst_21014__$1 = topic_fn.call(null,inst_20966);
var inst_21015 = cljs.core.deref.call(null,mults);
var inst_21016__$1 = cljs.core.get.call(null,inst_21015,inst_21014__$1);
var state_21035__$1 = (function (){var statearr_21051 = state_21035;
(statearr_21051[(11)] = inst_21016__$1);

(statearr_21051[(7)] = inst_21014__$1);

return statearr_21051;
})();
if(cljs.core.truth_(inst_21016__$1)){
var statearr_21052_21100 = state_21035__$1;
(statearr_21052_21100[(1)] = (19));

} else {
var statearr_21053_21101 = state_21035__$1;
(statearr_21053_21101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (25))){
var inst_21025 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21054_21102 = state_21035__$1;
(statearr_21054_21102[(2)] = inst_21025);

(statearr_21054_21102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (17))){
var inst_20990 = (state_21035[(10)]);
var inst_20999 = cljs.core.first.call(null,inst_20990);
var inst_21000 = cljs.core.async.muxch_STAR_.call(null,inst_20999);
var inst_21001 = cljs.core.async.close_BANG_.call(null,inst_21000);
var inst_21002 = cljs.core.next.call(null,inst_20990);
var inst_20976 = inst_21002;
var inst_20977 = null;
var inst_20978 = (0);
var inst_20979 = (0);
var state_21035__$1 = (function (){var statearr_21055 = state_21035;
(statearr_21055[(12)] = inst_20976);

(statearr_21055[(13)] = inst_21001);

(statearr_21055[(14)] = inst_20979);

(statearr_21055[(15)] = inst_20978);

(statearr_21055[(16)] = inst_20977);

return statearr_21055;
})();
var statearr_21056_21103 = state_21035__$1;
(statearr_21056_21103[(2)] = null);

(statearr_21056_21103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (3))){
var inst_21033 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21035__$1,inst_21033);
} else {
if((state_val_21036 === (12))){
var inst_21010 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21057_21104 = state_21035__$1;
(statearr_21057_21104[(2)] = inst_21010);

(statearr_21057_21104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (2))){
var state_21035__$1 = state_21035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21035__$1,(4),ch);
} else {
if((state_val_21036 === (23))){
var state_21035__$1 = state_21035;
var statearr_21058_21105 = state_21035__$1;
(statearr_21058_21105[(2)] = null);

(statearr_21058_21105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (19))){
var inst_20966 = (state_21035[(8)]);
var inst_21016 = (state_21035[(11)]);
var inst_21018 = cljs.core.async.muxch_STAR_.call(null,inst_21016);
var state_21035__$1 = state_21035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21035__$1,(22),inst_21018,inst_20966);
} else {
if((state_val_21036 === (11))){
var inst_20976 = (state_21035[(12)]);
var inst_20990 = (state_21035[(10)]);
var inst_20990__$1 = cljs.core.seq.call(null,inst_20976);
var state_21035__$1 = (function (){var statearr_21059 = state_21035;
(statearr_21059[(10)] = inst_20990__$1);

return statearr_21059;
})();
if(inst_20990__$1){
var statearr_21060_21106 = state_21035__$1;
(statearr_21060_21106[(1)] = (13));

} else {
var statearr_21061_21107 = state_21035__$1;
(statearr_21061_21107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (9))){
var inst_21012 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21062_21108 = state_21035__$1;
(statearr_21062_21108[(2)] = inst_21012);

(statearr_21062_21108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (5))){
var inst_20973 = cljs.core.deref.call(null,mults);
var inst_20974 = cljs.core.vals.call(null,inst_20973);
var inst_20975 = cljs.core.seq.call(null,inst_20974);
var inst_20976 = inst_20975;
var inst_20977 = null;
var inst_20978 = (0);
var inst_20979 = (0);
var state_21035__$1 = (function (){var statearr_21063 = state_21035;
(statearr_21063[(12)] = inst_20976);

(statearr_21063[(14)] = inst_20979);

(statearr_21063[(15)] = inst_20978);

(statearr_21063[(16)] = inst_20977);

return statearr_21063;
})();
var statearr_21064_21109 = state_21035__$1;
(statearr_21064_21109[(2)] = null);

(statearr_21064_21109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (14))){
var state_21035__$1 = state_21035;
var statearr_21068_21110 = state_21035__$1;
(statearr_21068_21110[(2)] = null);

(statearr_21068_21110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (16))){
var inst_20990 = (state_21035[(10)]);
var inst_20994 = cljs.core.chunk_first.call(null,inst_20990);
var inst_20995 = cljs.core.chunk_rest.call(null,inst_20990);
var inst_20996 = cljs.core.count.call(null,inst_20994);
var inst_20976 = inst_20995;
var inst_20977 = inst_20994;
var inst_20978 = inst_20996;
var inst_20979 = (0);
var state_21035__$1 = (function (){var statearr_21069 = state_21035;
(statearr_21069[(12)] = inst_20976);

(statearr_21069[(14)] = inst_20979);

(statearr_21069[(15)] = inst_20978);

(statearr_21069[(16)] = inst_20977);

return statearr_21069;
})();
var statearr_21070_21111 = state_21035__$1;
(statearr_21070_21111[(2)] = null);

(statearr_21070_21111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (10))){
var inst_20976 = (state_21035[(12)]);
var inst_20979 = (state_21035[(14)]);
var inst_20978 = (state_21035[(15)]);
var inst_20977 = (state_21035[(16)]);
var inst_20984 = cljs.core._nth.call(null,inst_20977,inst_20979);
var inst_20985 = cljs.core.async.muxch_STAR_.call(null,inst_20984);
var inst_20986 = cljs.core.async.close_BANG_.call(null,inst_20985);
var inst_20987 = (inst_20979 + (1));
var tmp21065 = inst_20976;
var tmp21066 = inst_20978;
var tmp21067 = inst_20977;
var inst_20976__$1 = tmp21065;
var inst_20977__$1 = tmp21067;
var inst_20978__$1 = tmp21066;
var inst_20979__$1 = inst_20987;
var state_21035__$1 = (function (){var statearr_21071 = state_21035;
(statearr_21071[(12)] = inst_20976__$1);

(statearr_21071[(14)] = inst_20979__$1);

(statearr_21071[(17)] = inst_20986);

(statearr_21071[(15)] = inst_20978__$1);

(statearr_21071[(16)] = inst_20977__$1);

return statearr_21071;
})();
var statearr_21072_21112 = state_21035__$1;
(statearr_21072_21112[(2)] = null);

(statearr_21072_21112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (18))){
var inst_21005 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21073_21113 = state_21035__$1;
(statearr_21073_21113[(2)] = inst_21005);

(statearr_21073_21113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (8))){
var inst_20979 = (state_21035[(14)]);
var inst_20978 = (state_21035[(15)]);
var inst_20981 = (inst_20979 < inst_20978);
var inst_20982 = inst_20981;
var state_21035__$1 = state_21035;
if(cljs.core.truth_(inst_20982)){
var statearr_21074_21114 = state_21035__$1;
(statearr_21074_21114[(1)] = (10));

} else {
var statearr_21075_21115 = state_21035__$1;
(statearr_21075_21115[(1)] = (11));

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
});})(c__19188__auto___21087,mults,ensure_mult,p))
;
return ((function (switch__19076__auto__,c__19188__auto___21087,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21079[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21079[(1)] = (1));

return statearr_21079;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21035){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21080){if((e21080 instanceof Object)){
var ex__19080__auto__ = e21080;
var statearr_21081_21116 = state_21035;
(statearr_21081_21116[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21117 = state_21035;
state_21035 = G__21117;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21087,mults,ensure_mult,p))
})();
var state__19190__auto__ = (function (){var statearr_21082 = f__19189__auto__.call(null);
(statearr_21082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21087);

return statearr_21082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21087,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21118 = [];
var len__17910__auto___21121 = arguments.length;
var i__17911__auto___21122 = (0);
while(true){
if((i__17911__auto___21122 < len__17910__auto___21121)){
args21118.push((arguments[i__17911__auto___21122]));

var G__21123 = (i__17911__auto___21122 + (1));
i__17911__auto___21122 = G__21123;
continue;
} else {
}
break;
}

var G__21120 = args21118.length;
switch (G__21120) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21118.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21125 = [];
var len__17910__auto___21128 = arguments.length;
var i__17911__auto___21129 = (0);
while(true){
if((i__17911__auto___21129 < len__17910__auto___21128)){
args21125.push((arguments[i__17911__auto___21129]));

var G__21130 = (i__17911__auto___21129 + (1));
i__17911__auto___21129 = G__21130;
continue;
} else {
}
break;
}

var G__21127 = args21125.length;
switch (G__21127) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21125.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21132 = [];
var len__17910__auto___21203 = arguments.length;
var i__17911__auto___21204 = (0);
while(true){
if((i__17911__auto___21204 < len__17910__auto___21203)){
args21132.push((arguments[i__17911__auto___21204]));

var G__21205 = (i__17911__auto___21204 + (1));
i__17911__auto___21204 = G__21205;
continue;
} else {
}
break;
}

var G__21134 = args21132.length;
switch (G__21134) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21132.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19188__auto___21207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21207,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21207,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21173){
var state_val_21174 = (state_21173[(1)]);
if((state_val_21174 === (7))){
var state_21173__$1 = state_21173;
var statearr_21175_21208 = state_21173__$1;
(statearr_21175_21208[(2)] = null);

(statearr_21175_21208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (1))){
var state_21173__$1 = state_21173;
var statearr_21176_21209 = state_21173__$1;
(statearr_21176_21209[(2)] = null);

(statearr_21176_21209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (4))){
var inst_21137 = (state_21173[(7)]);
var inst_21139 = (inst_21137 < cnt);
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21139)){
var statearr_21177_21210 = state_21173__$1;
(statearr_21177_21210[(1)] = (6));

} else {
var statearr_21178_21211 = state_21173__$1;
(statearr_21178_21211[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (15))){
var inst_21169 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
var statearr_21179_21212 = state_21173__$1;
(statearr_21179_21212[(2)] = inst_21169);

(statearr_21179_21212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (13))){
var inst_21162 = cljs.core.async.close_BANG_.call(null,out);
var state_21173__$1 = state_21173;
var statearr_21180_21213 = state_21173__$1;
(statearr_21180_21213[(2)] = inst_21162);

(statearr_21180_21213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (6))){
var state_21173__$1 = state_21173;
var statearr_21181_21214 = state_21173__$1;
(statearr_21181_21214[(2)] = null);

(statearr_21181_21214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (3))){
var inst_21171 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21173__$1,inst_21171);
} else {
if((state_val_21174 === (12))){
var inst_21159 = (state_21173[(8)]);
var inst_21159__$1 = (state_21173[(2)]);
var inst_21160 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21159__$1);
var state_21173__$1 = (function (){var statearr_21182 = state_21173;
(statearr_21182[(8)] = inst_21159__$1);

return statearr_21182;
})();
if(cljs.core.truth_(inst_21160)){
var statearr_21183_21215 = state_21173__$1;
(statearr_21183_21215[(1)] = (13));

} else {
var statearr_21184_21216 = state_21173__$1;
(statearr_21184_21216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (2))){
var inst_21136 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21137 = (0);
var state_21173__$1 = (function (){var statearr_21185 = state_21173;
(statearr_21185[(7)] = inst_21137);

(statearr_21185[(9)] = inst_21136);

return statearr_21185;
})();
var statearr_21186_21217 = state_21173__$1;
(statearr_21186_21217[(2)] = null);

(statearr_21186_21217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (11))){
var inst_21137 = (state_21173[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21173,(10),Object,null,(9));
var inst_21146 = chs__$1.call(null,inst_21137);
var inst_21147 = done.call(null,inst_21137);
var inst_21148 = cljs.core.async.take_BANG_.call(null,inst_21146,inst_21147);
var state_21173__$1 = state_21173;
var statearr_21187_21218 = state_21173__$1;
(statearr_21187_21218[(2)] = inst_21148);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21173__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (9))){
var inst_21137 = (state_21173[(7)]);
var inst_21150 = (state_21173[(2)]);
var inst_21151 = (inst_21137 + (1));
var inst_21137__$1 = inst_21151;
var state_21173__$1 = (function (){var statearr_21188 = state_21173;
(statearr_21188[(7)] = inst_21137__$1);

(statearr_21188[(10)] = inst_21150);

return statearr_21188;
})();
var statearr_21189_21219 = state_21173__$1;
(statearr_21189_21219[(2)] = null);

(statearr_21189_21219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (5))){
var inst_21157 = (state_21173[(2)]);
var state_21173__$1 = (function (){var statearr_21190 = state_21173;
(statearr_21190[(11)] = inst_21157);

return statearr_21190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21173__$1,(12),dchan);
} else {
if((state_val_21174 === (14))){
var inst_21159 = (state_21173[(8)]);
var inst_21164 = cljs.core.apply.call(null,f,inst_21159);
var state_21173__$1 = state_21173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21173__$1,(16),out,inst_21164);
} else {
if((state_val_21174 === (16))){
var inst_21166 = (state_21173[(2)]);
var state_21173__$1 = (function (){var statearr_21191 = state_21173;
(statearr_21191[(12)] = inst_21166);

return statearr_21191;
})();
var statearr_21192_21220 = state_21173__$1;
(statearr_21192_21220[(2)] = null);

(statearr_21192_21220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (10))){
var inst_21141 = (state_21173[(2)]);
var inst_21142 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21173__$1 = (function (){var statearr_21193 = state_21173;
(statearr_21193[(13)] = inst_21141);

return statearr_21193;
})();
var statearr_21194_21221 = state_21173__$1;
(statearr_21194_21221[(2)] = inst_21142);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21173__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (8))){
var inst_21155 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
var statearr_21195_21222 = state_21173__$1;
(statearr_21195_21222[(2)] = inst_21155);

(statearr_21195_21222[(1)] = (5));


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
});})(c__19188__auto___21207,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19076__auto__,c__19188__auto___21207,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21199[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21199[(1)] = (1));

return statearr_21199;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21173){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21200){if((e21200 instanceof Object)){
var ex__19080__auto__ = e21200;
var statearr_21201_21223 = state_21173;
(statearr_21201_21223[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21224 = state_21173;
state_21173 = G__21224;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21207,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19190__auto__ = (function (){var statearr_21202 = f__19189__auto__.call(null);
(statearr_21202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21207);

return statearr_21202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21207,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21226 = [];
var len__17910__auto___21282 = arguments.length;
var i__17911__auto___21283 = (0);
while(true){
if((i__17911__auto___21283 < len__17910__auto___21282)){
args21226.push((arguments[i__17911__auto___21283]));

var G__21284 = (i__17911__auto___21283 + (1));
i__17911__auto___21283 = G__21284;
continue;
} else {
}
break;
}

var G__21228 = args21226.length;
switch (G__21228) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21226.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19188__auto___21287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21287,out){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21287,out){
return (function (state_21258){
var state_val_21259 = (state_21258[(1)]);
if((state_val_21259 === (7))){
var inst_21237 = (state_21258[(7)]);
var inst_21238 = (state_21258[(8)]);
var inst_21237__$1 = (state_21258[(2)]);
var inst_21238__$1 = cljs.core.nth.call(null,inst_21237__$1,(0),null);
var inst_21239 = cljs.core.nth.call(null,inst_21237__$1,(1),null);
var inst_21240 = (inst_21238__$1 == null);
var state_21258__$1 = (function (){var statearr_21260 = state_21258;
(statearr_21260[(7)] = inst_21237__$1);

(statearr_21260[(8)] = inst_21238__$1);

(statearr_21260[(9)] = inst_21239);

return statearr_21260;
})();
if(cljs.core.truth_(inst_21240)){
var statearr_21261_21288 = state_21258__$1;
(statearr_21261_21288[(1)] = (8));

} else {
var statearr_21262_21289 = state_21258__$1;
(statearr_21262_21289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (1))){
var inst_21229 = cljs.core.vec.call(null,chs);
var inst_21230 = inst_21229;
var state_21258__$1 = (function (){var statearr_21263 = state_21258;
(statearr_21263[(10)] = inst_21230);

return statearr_21263;
})();
var statearr_21264_21290 = state_21258__$1;
(statearr_21264_21290[(2)] = null);

(statearr_21264_21290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (4))){
var inst_21230 = (state_21258[(10)]);
var state_21258__$1 = state_21258;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21258__$1,(7),inst_21230);
} else {
if((state_val_21259 === (6))){
var inst_21254 = (state_21258[(2)]);
var state_21258__$1 = state_21258;
var statearr_21265_21291 = state_21258__$1;
(statearr_21265_21291[(2)] = inst_21254);

(statearr_21265_21291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (3))){
var inst_21256 = (state_21258[(2)]);
var state_21258__$1 = state_21258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21258__$1,inst_21256);
} else {
if((state_val_21259 === (2))){
var inst_21230 = (state_21258[(10)]);
var inst_21232 = cljs.core.count.call(null,inst_21230);
var inst_21233 = (inst_21232 > (0));
var state_21258__$1 = state_21258;
if(cljs.core.truth_(inst_21233)){
var statearr_21267_21292 = state_21258__$1;
(statearr_21267_21292[(1)] = (4));

} else {
var statearr_21268_21293 = state_21258__$1;
(statearr_21268_21293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (11))){
var inst_21230 = (state_21258[(10)]);
var inst_21247 = (state_21258[(2)]);
var tmp21266 = inst_21230;
var inst_21230__$1 = tmp21266;
var state_21258__$1 = (function (){var statearr_21269 = state_21258;
(statearr_21269[(11)] = inst_21247);

(statearr_21269[(10)] = inst_21230__$1);

return statearr_21269;
})();
var statearr_21270_21294 = state_21258__$1;
(statearr_21270_21294[(2)] = null);

(statearr_21270_21294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (9))){
var inst_21238 = (state_21258[(8)]);
var state_21258__$1 = state_21258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21258__$1,(11),out,inst_21238);
} else {
if((state_val_21259 === (5))){
var inst_21252 = cljs.core.async.close_BANG_.call(null,out);
var state_21258__$1 = state_21258;
var statearr_21271_21295 = state_21258__$1;
(statearr_21271_21295[(2)] = inst_21252);

(statearr_21271_21295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (10))){
var inst_21250 = (state_21258[(2)]);
var state_21258__$1 = state_21258;
var statearr_21272_21296 = state_21258__$1;
(statearr_21272_21296[(2)] = inst_21250);

(statearr_21272_21296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (8))){
var inst_21237 = (state_21258[(7)]);
var inst_21238 = (state_21258[(8)]);
var inst_21230 = (state_21258[(10)]);
var inst_21239 = (state_21258[(9)]);
var inst_21242 = (function (){var cs = inst_21230;
var vec__21235 = inst_21237;
var v = inst_21238;
var c = inst_21239;
return ((function (cs,vec__21235,v,c,inst_21237,inst_21238,inst_21230,inst_21239,state_val_21259,c__19188__auto___21287,out){
return (function (p1__21225_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21225_SHARP_);
});
;})(cs,vec__21235,v,c,inst_21237,inst_21238,inst_21230,inst_21239,state_val_21259,c__19188__auto___21287,out))
})();
var inst_21243 = cljs.core.filterv.call(null,inst_21242,inst_21230);
var inst_21230__$1 = inst_21243;
var state_21258__$1 = (function (){var statearr_21273 = state_21258;
(statearr_21273[(10)] = inst_21230__$1);

return statearr_21273;
})();
var statearr_21274_21297 = state_21258__$1;
(statearr_21274_21297[(2)] = null);

(statearr_21274_21297[(1)] = (2));


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
});})(c__19188__auto___21287,out))
;
return ((function (switch__19076__auto__,c__19188__auto___21287,out){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21278[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21278[(1)] = (1));

return statearr_21278;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21258){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21279){if((e21279 instanceof Object)){
var ex__19080__auto__ = e21279;
var statearr_21280_21298 = state_21258;
(statearr_21280_21298[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21299 = state_21258;
state_21258 = G__21299;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21287,out))
})();
var state__19190__auto__ = (function (){var statearr_21281 = f__19189__auto__.call(null);
(statearr_21281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21287);

return statearr_21281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21287,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21300 = [];
var len__17910__auto___21349 = arguments.length;
var i__17911__auto___21350 = (0);
while(true){
if((i__17911__auto___21350 < len__17910__auto___21349)){
args21300.push((arguments[i__17911__auto___21350]));

var G__21351 = (i__17911__auto___21350 + (1));
i__17911__auto___21350 = G__21351;
continue;
} else {
}
break;
}

var G__21302 = args21300.length;
switch (G__21302) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21300.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19188__auto___21353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21353,out){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21353,out){
return (function (state_21326){
var state_val_21327 = (state_21326[(1)]);
if((state_val_21327 === (7))){
var inst_21308 = (state_21326[(7)]);
var inst_21308__$1 = (state_21326[(2)]);
var inst_21309 = (inst_21308__$1 == null);
var inst_21310 = cljs.core.not.call(null,inst_21309);
var state_21326__$1 = (function (){var statearr_21328 = state_21326;
(statearr_21328[(7)] = inst_21308__$1);

return statearr_21328;
})();
if(inst_21310){
var statearr_21329_21354 = state_21326__$1;
(statearr_21329_21354[(1)] = (8));

} else {
var statearr_21330_21355 = state_21326__$1;
(statearr_21330_21355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (1))){
var inst_21303 = (0);
var state_21326__$1 = (function (){var statearr_21331 = state_21326;
(statearr_21331[(8)] = inst_21303);

return statearr_21331;
})();
var statearr_21332_21356 = state_21326__$1;
(statearr_21332_21356[(2)] = null);

(statearr_21332_21356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (4))){
var state_21326__$1 = state_21326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21326__$1,(7),ch);
} else {
if((state_val_21327 === (6))){
var inst_21321 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
var statearr_21333_21357 = state_21326__$1;
(statearr_21333_21357[(2)] = inst_21321);

(statearr_21333_21357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (3))){
var inst_21323 = (state_21326[(2)]);
var inst_21324 = cljs.core.async.close_BANG_.call(null,out);
var state_21326__$1 = (function (){var statearr_21334 = state_21326;
(statearr_21334[(9)] = inst_21323);

return statearr_21334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21326__$1,inst_21324);
} else {
if((state_val_21327 === (2))){
var inst_21303 = (state_21326[(8)]);
var inst_21305 = (inst_21303 < n);
var state_21326__$1 = state_21326;
if(cljs.core.truth_(inst_21305)){
var statearr_21335_21358 = state_21326__$1;
(statearr_21335_21358[(1)] = (4));

} else {
var statearr_21336_21359 = state_21326__$1;
(statearr_21336_21359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (11))){
var inst_21303 = (state_21326[(8)]);
var inst_21313 = (state_21326[(2)]);
var inst_21314 = (inst_21303 + (1));
var inst_21303__$1 = inst_21314;
var state_21326__$1 = (function (){var statearr_21337 = state_21326;
(statearr_21337[(10)] = inst_21313);

(statearr_21337[(8)] = inst_21303__$1);

return statearr_21337;
})();
var statearr_21338_21360 = state_21326__$1;
(statearr_21338_21360[(2)] = null);

(statearr_21338_21360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (9))){
var state_21326__$1 = state_21326;
var statearr_21339_21361 = state_21326__$1;
(statearr_21339_21361[(2)] = null);

(statearr_21339_21361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (5))){
var state_21326__$1 = state_21326;
var statearr_21340_21362 = state_21326__$1;
(statearr_21340_21362[(2)] = null);

(statearr_21340_21362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (10))){
var inst_21318 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
var statearr_21341_21363 = state_21326__$1;
(statearr_21341_21363[(2)] = inst_21318);

(statearr_21341_21363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (8))){
var inst_21308 = (state_21326[(7)]);
var state_21326__$1 = state_21326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21326__$1,(11),out,inst_21308);
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
});})(c__19188__auto___21353,out))
;
return ((function (switch__19076__auto__,c__19188__auto___21353,out){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21345[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21345[(1)] = (1));

return statearr_21345;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21326){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21346){if((e21346 instanceof Object)){
var ex__19080__auto__ = e21346;
var statearr_21347_21364 = state_21326;
(statearr_21347_21364[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21365 = state_21326;
state_21326 = G__21365;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21353,out))
})();
var state__19190__auto__ = (function (){var statearr_21348 = f__19189__auto__.call(null);
(statearr_21348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21353);

return statearr_21348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21353,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21373 = (function (map_LT_,f,ch,meta21374){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21374 = meta21374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21375,meta21374__$1){
var self__ = this;
var _21375__$1 = this;
return (new cljs.core.async.t_cljs$core$async21373(self__.map_LT_,self__.f,self__.ch,meta21374__$1));
});

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21375){
var self__ = this;
var _21375__$1 = this;
return self__.meta21374;
});

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21376 = (function (map_LT_,f,ch,meta21374,_,fn1,meta21377){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21374 = meta21374;
this._ = _;
this.fn1 = fn1;
this.meta21377 = meta21377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21378,meta21377__$1){
var self__ = this;
var _21378__$1 = this;
return (new cljs.core.async.t_cljs$core$async21376(self__.map_LT_,self__.f,self__.ch,self__.meta21374,self__._,self__.fn1,meta21377__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21378){
var self__ = this;
var _21378__$1 = this;
return self__.meta21377;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21376.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21366_SHARP_){
return f1.call(null,(((p1__21366_SHARP_ == null))?null:self__.f.call(null,p1__21366_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21376.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21374","meta21374",-1828458488,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21373","cljs.core.async/t_cljs$core$async21373",-1117398070,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21377","meta21377",265400577,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21376";

cljs.core.async.t_cljs$core$async21376.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21376");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21376 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21376(map_LT___$1,f__$1,ch__$1,meta21374__$1,___$2,fn1__$1,meta21377){
return (new cljs.core.async.t_cljs$core$async21376(map_LT___$1,f__$1,ch__$1,meta21374__$1,___$2,fn1__$1,meta21377));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21376(self__.map_LT_,self__.f,self__.ch,self__.meta21374,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16840__auto__ = ret;
if(cljs.core.truth_(and__16840__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16840__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21374","meta21374",-1828458488,null)], null);
});

cljs.core.async.t_cljs$core$async21373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21373";

cljs.core.async.t_cljs$core$async21373.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21373");
});

cljs.core.async.__GT_t_cljs$core$async21373 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21373(map_LT___$1,f__$1,ch__$1,meta21374){
return (new cljs.core.async.t_cljs$core$async21373(map_LT___$1,f__$1,ch__$1,meta21374));
});

}

return (new cljs.core.async.t_cljs$core$async21373(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21382 = (function (map_GT_,f,ch,meta21383){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21383 = meta21383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21384,meta21383__$1){
var self__ = this;
var _21384__$1 = this;
return (new cljs.core.async.t_cljs$core$async21382(self__.map_GT_,self__.f,self__.ch,meta21383__$1));
});

cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21384){
var self__ = this;
var _21384__$1 = this;
return self__.meta21383;
});

cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21383","meta21383",1170842235,null)], null);
});

cljs.core.async.t_cljs$core$async21382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21382";

cljs.core.async.t_cljs$core$async21382.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21382");
});

cljs.core.async.__GT_t_cljs$core$async21382 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21382(map_GT___$1,f__$1,ch__$1,meta21383){
return (new cljs.core.async.t_cljs$core$async21382(map_GT___$1,f__$1,ch__$1,meta21383));
});

}

return (new cljs.core.async.t_cljs$core$async21382(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21388 = (function (filter_GT_,p,ch,meta21389){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21389 = meta21389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21390,meta21389__$1){
var self__ = this;
var _21390__$1 = this;
return (new cljs.core.async.t_cljs$core$async21388(self__.filter_GT_,self__.p,self__.ch,meta21389__$1));
});

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21390){
var self__ = this;
var _21390__$1 = this;
return self__.meta21389;
});

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21389","meta21389",1352643908,null)], null);
});

cljs.core.async.t_cljs$core$async21388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21388";

cljs.core.async.t_cljs$core$async21388.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21388");
});

cljs.core.async.__GT_t_cljs$core$async21388 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21388(filter_GT___$1,p__$1,ch__$1,meta21389){
return (new cljs.core.async.t_cljs$core$async21388(filter_GT___$1,p__$1,ch__$1,meta21389));
});

}

return (new cljs.core.async.t_cljs$core$async21388(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21391 = [];
var len__17910__auto___21435 = arguments.length;
var i__17911__auto___21436 = (0);
while(true){
if((i__17911__auto___21436 < len__17910__auto___21435)){
args21391.push((arguments[i__17911__auto___21436]));

var G__21437 = (i__17911__auto___21436 + (1));
i__17911__auto___21436 = G__21437;
continue;
} else {
}
break;
}

var G__21393 = args21391.length;
switch (G__21393) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21391.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19188__auto___21439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21439,out){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21439,out){
return (function (state_21414){
var state_val_21415 = (state_21414[(1)]);
if((state_val_21415 === (7))){
var inst_21410 = (state_21414[(2)]);
var state_21414__$1 = state_21414;
var statearr_21416_21440 = state_21414__$1;
(statearr_21416_21440[(2)] = inst_21410);

(statearr_21416_21440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (1))){
var state_21414__$1 = state_21414;
var statearr_21417_21441 = state_21414__$1;
(statearr_21417_21441[(2)] = null);

(statearr_21417_21441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (4))){
var inst_21396 = (state_21414[(7)]);
var inst_21396__$1 = (state_21414[(2)]);
var inst_21397 = (inst_21396__$1 == null);
var state_21414__$1 = (function (){var statearr_21418 = state_21414;
(statearr_21418[(7)] = inst_21396__$1);

return statearr_21418;
})();
if(cljs.core.truth_(inst_21397)){
var statearr_21419_21442 = state_21414__$1;
(statearr_21419_21442[(1)] = (5));

} else {
var statearr_21420_21443 = state_21414__$1;
(statearr_21420_21443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (6))){
var inst_21396 = (state_21414[(7)]);
var inst_21401 = p.call(null,inst_21396);
var state_21414__$1 = state_21414;
if(cljs.core.truth_(inst_21401)){
var statearr_21421_21444 = state_21414__$1;
(statearr_21421_21444[(1)] = (8));

} else {
var statearr_21422_21445 = state_21414__$1;
(statearr_21422_21445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (3))){
var inst_21412 = (state_21414[(2)]);
var state_21414__$1 = state_21414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21414__$1,inst_21412);
} else {
if((state_val_21415 === (2))){
var state_21414__$1 = state_21414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21414__$1,(4),ch);
} else {
if((state_val_21415 === (11))){
var inst_21404 = (state_21414[(2)]);
var state_21414__$1 = state_21414;
var statearr_21423_21446 = state_21414__$1;
(statearr_21423_21446[(2)] = inst_21404);

(statearr_21423_21446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (9))){
var state_21414__$1 = state_21414;
var statearr_21424_21447 = state_21414__$1;
(statearr_21424_21447[(2)] = null);

(statearr_21424_21447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (5))){
var inst_21399 = cljs.core.async.close_BANG_.call(null,out);
var state_21414__$1 = state_21414;
var statearr_21425_21448 = state_21414__$1;
(statearr_21425_21448[(2)] = inst_21399);

(statearr_21425_21448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (10))){
var inst_21407 = (state_21414[(2)]);
var state_21414__$1 = (function (){var statearr_21426 = state_21414;
(statearr_21426[(8)] = inst_21407);

return statearr_21426;
})();
var statearr_21427_21449 = state_21414__$1;
(statearr_21427_21449[(2)] = null);

(statearr_21427_21449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (8))){
var inst_21396 = (state_21414[(7)]);
var state_21414__$1 = state_21414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21414__$1,(11),out,inst_21396);
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
});})(c__19188__auto___21439,out))
;
return ((function (switch__19076__auto__,c__19188__auto___21439,out){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21431 = [null,null,null,null,null,null,null,null,null];
(statearr_21431[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21431[(1)] = (1));

return statearr_21431;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21414){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21432){if((e21432 instanceof Object)){
var ex__19080__auto__ = e21432;
var statearr_21433_21450 = state_21414;
(statearr_21433_21450[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21451 = state_21414;
state_21414 = G__21451;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21439,out))
})();
var state__19190__auto__ = (function (){var statearr_21434 = f__19189__auto__.call(null);
(statearr_21434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21439);

return statearr_21434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21439,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21452 = [];
var len__17910__auto___21455 = arguments.length;
var i__17911__auto___21456 = (0);
while(true){
if((i__17911__auto___21456 < len__17910__auto___21455)){
args21452.push((arguments[i__17911__auto___21456]));

var G__21457 = (i__17911__auto___21456 + (1));
i__17911__auto___21456 = G__21457;
continue;
} else {
}
break;
}

var G__21454 = args21452.length;
switch (G__21454) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21452.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto__){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto__){
return (function (state_21624){
var state_val_21625 = (state_21624[(1)]);
if((state_val_21625 === (7))){
var inst_21620 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21626_21667 = state_21624__$1;
(statearr_21626_21667[(2)] = inst_21620);

(statearr_21626_21667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (20))){
var inst_21590 = (state_21624[(7)]);
var inst_21601 = (state_21624[(2)]);
var inst_21602 = cljs.core.next.call(null,inst_21590);
var inst_21576 = inst_21602;
var inst_21577 = null;
var inst_21578 = (0);
var inst_21579 = (0);
var state_21624__$1 = (function (){var statearr_21627 = state_21624;
(statearr_21627[(8)] = inst_21578);

(statearr_21627[(9)] = inst_21579);

(statearr_21627[(10)] = inst_21577);

(statearr_21627[(11)] = inst_21601);

(statearr_21627[(12)] = inst_21576);

return statearr_21627;
})();
var statearr_21628_21668 = state_21624__$1;
(statearr_21628_21668[(2)] = null);

(statearr_21628_21668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (1))){
var state_21624__$1 = state_21624;
var statearr_21629_21669 = state_21624__$1;
(statearr_21629_21669[(2)] = null);

(statearr_21629_21669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (4))){
var inst_21565 = (state_21624[(13)]);
var inst_21565__$1 = (state_21624[(2)]);
var inst_21566 = (inst_21565__$1 == null);
var state_21624__$1 = (function (){var statearr_21630 = state_21624;
(statearr_21630[(13)] = inst_21565__$1);

return statearr_21630;
})();
if(cljs.core.truth_(inst_21566)){
var statearr_21631_21670 = state_21624__$1;
(statearr_21631_21670[(1)] = (5));

} else {
var statearr_21632_21671 = state_21624__$1;
(statearr_21632_21671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (15))){
var state_21624__$1 = state_21624;
var statearr_21636_21672 = state_21624__$1;
(statearr_21636_21672[(2)] = null);

(statearr_21636_21672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (21))){
var state_21624__$1 = state_21624;
var statearr_21637_21673 = state_21624__$1;
(statearr_21637_21673[(2)] = null);

(statearr_21637_21673[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (13))){
var inst_21578 = (state_21624[(8)]);
var inst_21579 = (state_21624[(9)]);
var inst_21577 = (state_21624[(10)]);
var inst_21576 = (state_21624[(12)]);
var inst_21586 = (state_21624[(2)]);
var inst_21587 = (inst_21579 + (1));
var tmp21633 = inst_21578;
var tmp21634 = inst_21577;
var tmp21635 = inst_21576;
var inst_21576__$1 = tmp21635;
var inst_21577__$1 = tmp21634;
var inst_21578__$1 = tmp21633;
var inst_21579__$1 = inst_21587;
var state_21624__$1 = (function (){var statearr_21638 = state_21624;
(statearr_21638[(8)] = inst_21578__$1);

(statearr_21638[(9)] = inst_21579__$1);

(statearr_21638[(10)] = inst_21577__$1);

(statearr_21638[(14)] = inst_21586);

(statearr_21638[(12)] = inst_21576__$1);

return statearr_21638;
})();
var statearr_21639_21674 = state_21624__$1;
(statearr_21639_21674[(2)] = null);

(statearr_21639_21674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (22))){
var state_21624__$1 = state_21624;
var statearr_21640_21675 = state_21624__$1;
(statearr_21640_21675[(2)] = null);

(statearr_21640_21675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (6))){
var inst_21565 = (state_21624[(13)]);
var inst_21574 = f.call(null,inst_21565);
var inst_21575 = cljs.core.seq.call(null,inst_21574);
var inst_21576 = inst_21575;
var inst_21577 = null;
var inst_21578 = (0);
var inst_21579 = (0);
var state_21624__$1 = (function (){var statearr_21641 = state_21624;
(statearr_21641[(8)] = inst_21578);

(statearr_21641[(9)] = inst_21579);

(statearr_21641[(10)] = inst_21577);

(statearr_21641[(12)] = inst_21576);

return statearr_21641;
})();
var statearr_21642_21676 = state_21624__$1;
(statearr_21642_21676[(2)] = null);

(statearr_21642_21676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (17))){
var inst_21590 = (state_21624[(7)]);
var inst_21594 = cljs.core.chunk_first.call(null,inst_21590);
var inst_21595 = cljs.core.chunk_rest.call(null,inst_21590);
var inst_21596 = cljs.core.count.call(null,inst_21594);
var inst_21576 = inst_21595;
var inst_21577 = inst_21594;
var inst_21578 = inst_21596;
var inst_21579 = (0);
var state_21624__$1 = (function (){var statearr_21643 = state_21624;
(statearr_21643[(8)] = inst_21578);

(statearr_21643[(9)] = inst_21579);

(statearr_21643[(10)] = inst_21577);

(statearr_21643[(12)] = inst_21576);

return statearr_21643;
})();
var statearr_21644_21677 = state_21624__$1;
(statearr_21644_21677[(2)] = null);

(statearr_21644_21677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (3))){
var inst_21622 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21624__$1,inst_21622);
} else {
if((state_val_21625 === (12))){
var inst_21610 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21645_21678 = state_21624__$1;
(statearr_21645_21678[(2)] = inst_21610);

(statearr_21645_21678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (2))){
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21624__$1,(4),in$);
} else {
if((state_val_21625 === (23))){
var inst_21618 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21646_21679 = state_21624__$1;
(statearr_21646_21679[(2)] = inst_21618);

(statearr_21646_21679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (19))){
var inst_21605 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21647_21680 = state_21624__$1;
(statearr_21647_21680[(2)] = inst_21605);

(statearr_21647_21680[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (11))){
var inst_21590 = (state_21624[(7)]);
var inst_21576 = (state_21624[(12)]);
var inst_21590__$1 = cljs.core.seq.call(null,inst_21576);
var state_21624__$1 = (function (){var statearr_21648 = state_21624;
(statearr_21648[(7)] = inst_21590__$1);

return statearr_21648;
})();
if(inst_21590__$1){
var statearr_21649_21681 = state_21624__$1;
(statearr_21649_21681[(1)] = (14));

} else {
var statearr_21650_21682 = state_21624__$1;
(statearr_21650_21682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (9))){
var inst_21612 = (state_21624[(2)]);
var inst_21613 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21624__$1 = (function (){var statearr_21651 = state_21624;
(statearr_21651[(15)] = inst_21612);

return statearr_21651;
})();
if(cljs.core.truth_(inst_21613)){
var statearr_21652_21683 = state_21624__$1;
(statearr_21652_21683[(1)] = (21));

} else {
var statearr_21653_21684 = state_21624__$1;
(statearr_21653_21684[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (5))){
var inst_21568 = cljs.core.async.close_BANG_.call(null,out);
var state_21624__$1 = state_21624;
var statearr_21654_21685 = state_21624__$1;
(statearr_21654_21685[(2)] = inst_21568);

(statearr_21654_21685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (14))){
var inst_21590 = (state_21624[(7)]);
var inst_21592 = cljs.core.chunked_seq_QMARK_.call(null,inst_21590);
var state_21624__$1 = state_21624;
if(inst_21592){
var statearr_21655_21686 = state_21624__$1;
(statearr_21655_21686[(1)] = (17));

} else {
var statearr_21656_21687 = state_21624__$1;
(statearr_21656_21687[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (16))){
var inst_21608 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21657_21688 = state_21624__$1;
(statearr_21657_21688[(2)] = inst_21608);

(statearr_21657_21688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (10))){
var inst_21579 = (state_21624[(9)]);
var inst_21577 = (state_21624[(10)]);
var inst_21584 = cljs.core._nth.call(null,inst_21577,inst_21579);
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21624__$1,(13),out,inst_21584);
} else {
if((state_val_21625 === (18))){
var inst_21590 = (state_21624[(7)]);
var inst_21599 = cljs.core.first.call(null,inst_21590);
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21624__$1,(20),out,inst_21599);
} else {
if((state_val_21625 === (8))){
var inst_21578 = (state_21624[(8)]);
var inst_21579 = (state_21624[(9)]);
var inst_21581 = (inst_21579 < inst_21578);
var inst_21582 = inst_21581;
var state_21624__$1 = state_21624;
if(cljs.core.truth_(inst_21582)){
var statearr_21658_21689 = state_21624__$1;
(statearr_21658_21689[(1)] = (10));

} else {
var statearr_21659_21690 = state_21624__$1;
(statearr_21659_21690[(1)] = (11));

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
});})(c__19188__auto__))
;
return ((function (switch__19076__auto__,c__19188__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19077__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19077__auto____0 = (function (){
var statearr_21663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21663[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19077__auto__);

(statearr_21663[(1)] = (1));

return statearr_21663;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19077__auto____1 = (function (state_21624){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21664){if((e21664 instanceof Object)){
var ex__19080__auto__ = e21664;
var statearr_21665_21691 = state_21624;
(statearr_21665_21691[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21692 = state_21624;
state_21624 = G__21692;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19077__auto__ = function(state_21624){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19077__auto____1.call(this,state_21624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19077__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19077__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto__))
})();
var state__19190__auto__ = (function (){var statearr_21666 = f__19189__auto__.call(null);
(statearr_21666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto__);

return statearr_21666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto__))
);

return c__19188__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21693 = [];
var len__17910__auto___21696 = arguments.length;
var i__17911__auto___21697 = (0);
while(true){
if((i__17911__auto___21697 < len__17910__auto___21696)){
args21693.push((arguments[i__17911__auto___21697]));

var G__21698 = (i__17911__auto___21697 + (1));
i__17911__auto___21697 = G__21698;
continue;
} else {
}
break;
}

var G__21695 = args21693.length;
switch (G__21695) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21693.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21700 = [];
var len__17910__auto___21703 = arguments.length;
var i__17911__auto___21704 = (0);
while(true){
if((i__17911__auto___21704 < len__17910__auto___21703)){
args21700.push((arguments[i__17911__auto___21704]));

var G__21705 = (i__17911__auto___21704 + (1));
i__17911__auto___21704 = G__21705;
continue;
} else {
}
break;
}

var G__21702 = args21700.length;
switch (G__21702) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21700.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21707 = [];
var len__17910__auto___21758 = arguments.length;
var i__17911__auto___21759 = (0);
while(true){
if((i__17911__auto___21759 < len__17910__auto___21758)){
args21707.push((arguments[i__17911__auto___21759]));

var G__21760 = (i__17911__auto___21759 + (1));
i__17911__auto___21759 = G__21760;
continue;
} else {
}
break;
}

var G__21709 = args21707.length;
switch (G__21709) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21707.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19188__auto___21762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21762,out){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21762,out){
return (function (state_21733){
var state_val_21734 = (state_21733[(1)]);
if((state_val_21734 === (7))){
var inst_21728 = (state_21733[(2)]);
var state_21733__$1 = state_21733;
var statearr_21735_21763 = state_21733__$1;
(statearr_21735_21763[(2)] = inst_21728);

(statearr_21735_21763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (1))){
var inst_21710 = null;
var state_21733__$1 = (function (){var statearr_21736 = state_21733;
(statearr_21736[(7)] = inst_21710);

return statearr_21736;
})();
var statearr_21737_21764 = state_21733__$1;
(statearr_21737_21764[(2)] = null);

(statearr_21737_21764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (4))){
var inst_21713 = (state_21733[(8)]);
var inst_21713__$1 = (state_21733[(2)]);
var inst_21714 = (inst_21713__$1 == null);
var inst_21715 = cljs.core.not.call(null,inst_21714);
var state_21733__$1 = (function (){var statearr_21738 = state_21733;
(statearr_21738[(8)] = inst_21713__$1);

return statearr_21738;
})();
if(inst_21715){
var statearr_21739_21765 = state_21733__$1;
(statearr_21739_21765[(1)] = (5));

} else {
var statearr_21740_21766 = state_21733__$1;
(statearr_21740_21766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (6))){
var state_21733__$1 = state_21733;
var statearr_21741_21767 = state_21733__$1;
(statearr_21741_21767[(2)] = null);

(statearr_21741_21767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (3))){
var inst_21730 = (state_21733[(2)]);
var inst_21731 = cljs.core.async.close_BANG_.call(null,out);
var state_21733__$1 = (function (){var statearr_21742 = state_21733;
(statearr_21742[(9)] = inst_21730);

return statearr_21742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21733__$1,inst_21731);
} else {
if((state_val_21734 === (2))){
var state_21733__$1 = state_21733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21733__$1,(4),ch);
} else {
if((state_val_21734 === (11))){
var inst_21713 = (state_21733[(8)]);
var inst_21722 = (state_21733[(2)]);
var inst_21710 = inst_21713;
var state_21733__$1 = (function (){var statearr_21743 = state_21733;
(statearr_21743[(10)] = inst_21722);

(statearr_21743[(7)] = inst_21710);

return statearr_21743;
})();
var statearr_21744_21768 = state_21733__$1;
(statearr_21744_21768[(2)] = null);

(statearr_21744_21768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (9))){
var inst_21713 = (state_21733[(8)]);
var state_21733__$1 = state_21733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21733__$1,(11),out,inst_21713);
} else {
if((state_val_21734 === (5))){
var inst_21713 = (state_21733[(8)]);
var inst_21710 = (state_21733[(7)]);
var inst_21717 = cljs.core._EQ_.call(null,inst_21713,inst_21710);
var state_21733__$1 = state_21733;
if(inst_21717){
var statearr_21746_21769 = state_21733__$1;
(statearr_21746_21769[(1)] = (8));

} else {
var statearr_21747_21770 = state_21733__$1;
(statearr_21747_21770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (10))){
var inst_21725 = (state_21733[(2)]);
var state_21733__$1 = state_21733;
var statearr_21748_21771 = state_21733__$1;
(statearr_21748_21771[(2)] = inst_21725);

(statearr_21748_21771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (8))){
var inst_21710 = (state_21733[(7)]);
var tmp21745 = inst_21710;
var inst_21710__$1 = tmp21745;
var state_21733__$1 = (function (){var statearr_21749 = state_21733;
(statearr_21749[(7)] = inst_21710__$1);

return statearr_21749;
})();
var statearr_21750_21772 = state_21733__$1;
(statearr_21750_21772[(2)] = null);

(statearr_21750_21772[(1)] = (2));


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
});})(c__19188__auto___21762,out))
;
return ((function (switch__19076__auto__,c__19188__auto___21762,out){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21754[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21754[(1)] = (1));

return statearr_21754;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21733){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21755){if((e21755 instanceof Object)){
var ex__19080__auto__ = e21755;
var statearr_21756_21773 = state_21733;
(statearr_21756_21773[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21774 = state_21733;
state_21733 = G__21774;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21762,out))
})();
var state__19190__auto__ = (function (){var statearr_21757 = f__19189__auto__.call(null);
(statearr_21757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21762);

return statearr_21757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21762,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21775 = [];
var len__17910__auto___21845 = arguments.length;
var i__17911__auto___21846 = (0);
while(true){
if((i__17911__auto___21846 < len__17910__auto___21845)){
args21775.push((arguments[i__17911__auto___21846]));

var G__21847 = (i__17911__auto___21846 + (1));
i__17911__auto___21846 = G__21847;
continue;
} else {
}
break;
}

var G__21777 = args21775.length;
switch (G__21777) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21775.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19188__auto___21849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21849,out){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21849,out){
return (function (state_21815){
var state_val_21816 = (state_21815[(1)]);
if((state_val_21816 === (7))){
var inst_21811 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
var statearr_21817_21850 = state_21815__$1;
(statearr_21817_21850[(2)] = inst_21811);

(statearr_21817_21850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (1))){
var inst_21778 = (new Array(n));
var inst_21779 = inst_21778;
var inst_21780 = (0);
var state_21815__$1 = (function (){var statearr_21818 = state_21815;
(statearr_21818[(7)] = inst_21780);

(statearr_21818[(8)] = inst_21779);

return statearr_21818;
})();
var statearr_21819_21851 = state_21815__$1;
(statearr_21819_21851[(2)] = null);

(statearr_21819_21851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (4))){
var inst_21783 = (state_21815[(9)]);
var inst_21783__$1 = (state_21815[(2)]);
var inst_21784 = (inst_21783__$1 == null);
var inst_21785 = cljs.core.not.call(null,inst_21784);
var state_21815__$1 = (function (){var statearr_21820 = state_21815;
(statearr_21820[(9)] = inst_21783__$1);

return statearr_21820;
})();
if(inst_21785){
var statearr_21821_21852 = state_21815__$1;
(statearr_21821_21852[(1)] = (5));

} else {
var statearr_21822_21853 = state_21815__$1;
(statearr_21822_21853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (15))){
var inst_21805 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
var statearr_21823_21854 = state_21815__$1;
(statearr_21823_21854[(2)] = inst_21805);

(statearr_21823_21854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (13))){
var state_21815__$1 = state_21815;
var statearr_21824_21855 = state_21815__$1;
(statearr_21824_21855[(2)] = null);

(statearr_21824_21855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (6))){
var inst_21780 = (state_21815[(7)]);
var inst_21801 = (inst_21780 > (0));
var state_21815__$1 = state_21815;
if(cljs.core.truth_(inst_21801)){
var statearr_21825_21856 = state_21815__$1;
(statearr_21825_21856[(1)] = (12));

} else {
var statearr_21826_21857 = state_21815__$1;
(statearr_21826_21857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (3))){
var inst_21813 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21815__$1,inst_21813);
} else {
if((state_val_21816 === (12))){
var inst_21779 = (state_21815[(8)]);
var inst_21803 = cljs.core.vec.call(null,inst_21779);
var state_21815__$1 = state_21815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21815__$1,(15),out,inst_21803);
} else {
if((state_val_21816 === (2))){
var state_21815__$1 = state_21815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21815__$1,(4),ch);
} else {
if((state_val_21816 === (11))){
var inst_21795 = (state_21815[(2)]);
var inst_21796 = (new Array(n));
var inst_21779 = inst_21796;
var inst_21780 = (0);
var state_21815__$1 = (function (){var statearr_21827 = state_21815;
(statearr_21827[(10)] = inst_21795);

(statearr_21827[(7)] = inst_21780);

(statearr_21827[(8)] = inst_21779);

return statearr_21827;
})();
var statearr_21828_21858 = state_21815__$1;
(statearr_21828_21858[(2)] = null);

(statearr_21828_21858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (9))){
var inst_21779 = (state_21815[(8)]);
var inst_21793 = cljs.core.vec.call(null,inst_21779);
var state_21815__$1 = state_21815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21815__$1,(11),out,inst_21793);
} else {
if((state_val_21816 === (5))){
var inst_21780 = (state_21815[(7)]);
var inst_21788 = (state_21815[(11)]);
var inst_21779 = (state_21815[(8)]);
var inst_21783 = (state_21815[(9)]);
var inst_21787 = (inst_21779[inst_21780] = inst_21783);
var inst_21788__$1 = (inst_21780 + (1));
var inst_21789 = (inst_21788__$1 < n);
var state_21815__$1 = (function (){var statearr_21829 = state_21815;
(statearr_21829[(11)] = inst_21788__$1);

(statearr_21829[(12)] = inst_21787);

return statearr_21829;
})();
if(cljs.core.truth_(inst_21789)){
var statearr_21830_21859 = state_21815__$1;
(statearr_21830_21859[(1)] = (8));

} else {
var statearr_21831_21860 = state_21815__$1;
(statearr_21831_21860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (14))){
var inst_21808 = (state_21815[(2)]);
var inst_21809 = cljs.core.async.close_BANG_.call(null,out);
var state_21815__$1 = (function (){var statearr_21833 = state_21815;
(statearr_21833[(13)] = inst_21808);

return statearr_21833;
})();
var statearr_21834_21861 = state_21815__$1;
(statearr_21834_21861[(2)] = inst_21809);

(statearr_21834_21861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (10))){
var inst_21799 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
var statearr_21835_21862 = state_21815__$1;
(statearr_21835_21862[(2)] = inst_21799);

(statearr_21835_21862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (8))){
var inst_21788 = (state_21815[(11)]);
var inst_21779 = (state_21815[(8)]);
var tmp21832 = inst_21779;
var inst_21779__$1 = tmp21832;
var inst_21780 = inst_21788;
var state_21815__$1 = (function (){var statearr_21836 = state_21815;
(statearr_21836[(7)] = inst_21780);

(statearr_21836[(8)] = inst_21779__$1);

return statearr_21836;
})();
var statearr_21837_21863 = state_21815__$1;
(statearr_21837_21863[(2)] = null);

(statearr_21837_21863[(1)] = (2));


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
});})(c__19188__auto___21849,out))
;
return ((function (switch__19076__auto__,c__19188__auto___21849,out){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21841[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21841[(1)] = (1));

return statearr_21841;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21815){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21842){if((e21842 instanceof Object)){
var ex__19080__auto__ = e21842;
var statearr_21843_21864 = state_21815;
(statearr_21843_21864[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21865 = state_21815;
state_21815 = G__21865;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21849,out))
})();
var state__19190__auto__ = (function (){var statearr_21844 = f__19189__auto__.call(null);
(statearr_21844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21849);

return statearr_21844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21849,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21866 = [];
var len__17910__auto___21940 = arguments.length;
var i__17911__auto___21941 = (0);
while(true){
if((i__17911__auto___21941 < len__17910__auto___21940)){
args21866.push((arguments[i__17911__auto___21941]));

var G__21942 = (i__17911__auto___21941 + (1));
i__17911__auto___21941 = G__21942;
continue;
} else {
}
break;
}

var G__21868 = args21866.length;
switch (G__21868) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21866.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19188__auto___21944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19188__auto___21944,out){
return (function (){
var f__19189__auto__ = (function (){var switch__19076__auto__ = ((function (c__19188__auto___21944,out){
return (function (state_21910){
var state_val_21911 = (state_21910[(1)]);
if((state_val_21911 === (7))){
var inst_21906 = (state_21910[(2)]);
var state_21910__$1 = state_21910;
var statearr_21912_21945 = state_21910__$1;
(statearr_21912_21945[(2)] = inst_21906);

(statearr_21912_21945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (1))){
var inst_21869 = [];
var inst_21870 = inst_21869;
var inst_21871 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21910__$1 = (function (){var statearr_21913 = state_21910;
(statearr_21913[(7)] = inst_21871);

(statearr_21913[(8)] = inst_21870);

return statearr_21913;
})();
var statearr_21914_21946 = state_21910__$1;
(statearr_21914_21946[(2)] = null);

(statearr_21914_21946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (4))){
var inst_21874 = (state_21910[(9)]);
var inst_21874__$1 = (state_21910[(2)]);
var inst_21875 = (inst_21874__$1 == null);
var inst_21876 = cljs.core.not.call(null,inst_21875);
var state_21910__$1 = (function (){var statearr_21915 = state_21910;
(statearr_21915[(9)] = inst_21874__$1);

return statearr_21915;
})();
if(inst_21876){
var statearr_21916_21947 = state_21910__$1;
(statearr_21916_21947[(1)] = (5));

} else {
var statearr_21917_21948 = state_21910__$1;
(statearr_21917_21948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (15))){
var inst_21900 = (state_21910[(2)]);
var state_21910__$1 = state_21910;
var statearr_21918_21949 = state_21910__$1;
(statearr_21918_21949[(2)] = inst_21900);

(statearr_21918_21949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (13))){
var state_21910__$1 = state_21910;
var statearr_21919_21950 = state_21910__$1;
(statearr_21919_21950[(2)] = null);

(statearr_21919_21950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (6))){
var inst_21870 = (state_21910[(8)]);
var inst_21895 = inst_21870.length;
var inst_21896 = (inst_21895 > (0));
var state_21910__$1 = state_21910;
if(cljs.core.truth_(inst_21896)){
var statearr_21920_21951 = state_21910__$1;
(statearr_21920_21951[(1)] = (12));

} else {
var statearr_21921_21952 = state_21910__$1;
(statearr_21921_21952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (3))){
var inst_21908 = (state_21910[(2)]);
var state_21910__$1 = state_21910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21910__$1,inst_21908);
} else {
if((state_val_21911 === (12))){
var inst_21870 = (state_21910[(8)]);
var inst_21898 = cljs.core.vec.call(null,inst_21870);
var state_21910__$1 = state_21910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21910__$1,(15),out,inst_21898);
} else {
if((state_val_21911 === (2))){
var state_21910__$1 = state_21910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21910__$1,(4),ch);
} else {
if((state_val_21911 === (11))){
var inst_21878 = (state_21910[(10)]);
var inst_21874 = (state_21910[(9)]);
var inst_21888 = (state_21910[(2)]);
var inst_21889 = [];
var inst_21890 = inst_21889.push(inst_21874);
var inst_21870 = inst_21889;
var inst_21871 = inst_21878;
var state_21910__$1 = (function (){var statearr_21922 = state_21910;
(statearr_21922[(11)] = inst_21888);

(statearr_21922[(7)] = inst_21871);

(statearr_21922[(8)] = inst_21870);

(statearr_21922[(12)] = inst_21890);

return statearr_21922;
})();
var statearr_21923_21953 = state_21910__$1;
(statearr_21923_21953[(2)] = null);

(statearr_21923_21953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (9))){
var inst_21870 = (state_21910[(8)]);
var inst_21886 = cljs.core.vec.call(null,inst_21870);
var state_21910__$1 = state_21910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21910__$1,(11),out,inst_21886);
} else {
if((state_val_21911 === (5))){
var inst_21871 = (state_21910[(7)]);
var inst_21878 = (state_21910[(10)]);
var inst_21874 = (state_21910[(9)]);
var inst_21878__$1 = f.call(null,inst_21874);
var inst_21879 = cljs.core._EQ_.call(null,inst_21878__$1,inst_21871);
var inst_21880 = cljs.core.keyword_identical_QMARK_.call(null,inst_21871,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21881 = (inst_21879) || (inst_21880);
var state_21910__$1 = (function (){var statearr_21924 = state_21910;
(statearr_21924[(10)] = inst_21878__$1);

return statearr_21924;
})();
if(cljs.core.truth_(inst_21881)){
var statearr_21925_21954 = state_21910__$1;
(statearr_21925_21954[(1)] = (8));

} else {
var statearr_21926_21955 = state_21910__$1;
(statearr_21926_21955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (14))){
var inst_21903 = (state_21910[(2)]);
var inst_21904 = cljs.core.async.close_BANG_.call(null,out);
var state_21910__$1 = (function (){var statearr_21928 = state_21910;
(statearr_21928[(13)] = inst_21903);

return statearr_21928;
})();
var statearr_21929_21956 = state_21910__$1;
(statearr_21929_21956[(2)] = inst_21904);

(statearr_21929_21956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (10))){
var inst_21893 = (state_21910[(2)]);
var state_21910__$1 = state_21910;
var statearr_21930_21957 = state_21910__$1;
(statearr_21930_21957[(2)] = inst_21893);

(statearr_21930_21957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21911 === (8))){
var inst_21878 = (state_21910[(10)]);
var inst_21870 = (state_21910[(8)]);
var inst_21874 = (state_21910[(9)]);
var inst_21883 = inst_21870.push(inst_21874);
var tmp21927 = inst_21870;
var inst_21870__$1 = tmp21927;
var inst_21871 = inst_21878;
var state_21910__$1 = (function (){var statearr_21931 = state_21910;
(statearr_21931[(7)] = inst_21871);

(statearr_21931[(8)] = inst_21870__$1);

(statearr_21931[(14)] = inst_21883);

return statearr_21931;
})();
var statearr_21932_21958 = state_21910__$1;
(statearr_21932_21958[(2)] = null);

(statearr_21932_21958[(1)] = (2));


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
});})(c__19188__auto___21944,out))
;
return ((function (switch__19076__auto__,c__19188__auto___21944,out){
return (function() {
var cljs$core$async$state_machine__19077__auto__ = null;
var cljs$core$async$state_machine__19077__auto____0 = (function (){
var statearr_21936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21936[(0)] = cljs$core$async$state_machine__19077__auto__);

(statearr_21936[(1)] = (1));

return statearr_21936;
});
var cljs$core$async$state_machine__19077__auto____1 = (function (state_21910){
while(true){
var ret_value__19078__auto__ = (function (){try{while(true){
var result__19079__auto__ = switch__19076__auto__.call(null,state_21910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19079__auto__;
}
break;
}
}catch (e21937){if((e21937 instanceof Object)){
var ex__19080__auto__ = e21937;
var statearr_21938_21959 = state_21910;
(statearr_21938_21959[(5)] = ex__19080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21960 = state_21910;
state_21910 = G__21960;
continue;
} else {
return ret_value__19078__auto__;
}
break;
}
});
cljs$core$async$state_machine__19077__auto__ = function(state_21910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19077__auto____1.call(this,state_21910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19077__auto____0;
cljs$core$async$state_machine__19077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19077__auto____1;
return cljs$core$async$state_machine__19077__auto__;
})()
;})(switch__19076__auto__,c__19188__auto___21944,out))
})();
var state__19190__auto__ = (function (){var statearr_21939 = f__19189__auto__.call(null);
(statearr_21939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19188__auto___21944);

return statearr_21939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19190__auto__);
});})(c__19188__auto___21944,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453073546465