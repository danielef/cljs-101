// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23471 = arguments.length;
switch (G__23471) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23472 = (function (f,blockable,meta23473){
this.f = f;
this.blockable = blockable;
this.meta23473 = meta23473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23474,meta23473__$1){
var self__ = this;
var _23474__$1 = this;
return (new cljs.core.async.t_cljs$core$async23472(self__.f,self__.blockable,meta23473__$1));
});

cljs.core.async.t_cljs$core$async23472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23474){
var self__ = this;
var _23474__$1 = this;
return self__.meta23473;
});

cljs.core.async.t_cljs$core$async23472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23473","meta23473",-200710014,null)], null);
});

cljs.core.async.t_cljs$core$async23472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23472";

cljs.core.async.t_cljs$core$async23472.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23472");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23472.
 */
cljs.core.async.__GT_t_cljs$core$async23472 = (function cljs$core$async$__GT_t_cljs$core$async23472(f__$1,blockable__$1,meta23473){
return (new cljs.core.async.t_cljs$core$async23472(f__$1,blockable__$1,meta23473));
});

}

return (new cljs.core.async.t_cljs$core$async23472(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__23478 = arguments.length;
switch (G__23478) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__23481 = arguments.length;
switch (G__23481) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__23484 = arguments.length;
switch (G__23484) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23486 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23486);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23486,ret){
return (function (){
return fn1.call(null,val_23486);
});})(val_23486,ret))
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
var G__23488 = arguments.length;
switch (G__23488) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4376__auto___23490 = n;
var x_23491 = (0);
while(true){
if((x_23491 < n__4376__auto___23490)){
(a[x_23491] = (0));

var G__23492 = (x_23491 + (1));
x_23491 = G__23492;
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

var G__23493 = (i + (1));
i = G__23493;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23494 = (function (flag,meta23495){
this.flag = flag;
this.meta23495 = meta23495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23496,meta23495__$1){
var self__ = this;
var _23496__$1 = this;
return (new cljs.core.async.t_cljs$core$async23494(self__.flag,meta23495__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23496){
var self__ = this;
var _23496__$1 = this;
return self__.meta23495;
});})(flag))
;

cljs.core.async.t_cljs$core$async23494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23494.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23495","meta23495",-29578178,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23494";

cljs.core.async.t_cljs$core$async23494.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23494");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23494.
 */
cljs.core.async.__GT_t_cljs$core$async23494 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23494(flag__$1,meta23495){
return (new cljs.core.async.t_cljs$core$async23494(flag__$1,meta23495));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23494(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23497 = (function (flag,cb,meta23498){
this.flag = flag;
this.cb = cb;
this.meta23498 = meta23498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23499,meta23498__$1){
var self__ = this;
var _23499__$1 = this;
return (new cljs.core.async.t_cljs$core$async23497(self__.flag,self__.cb,meta23498__$1));
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23499){
var self__ = this;
var _23499__$1 = this;
return self__.meta23498;
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23498","meta23498",1786113339,null)], null);
});

cljs.core.async.t_cljs$core$async23497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23497";

cljs.core.async.t_cljs$core$async23497.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23497");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23497.
 */
cljs.core.async.__GT_t_cljs$core$async23497 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23497(flag__$1,cb__$1,meta23498){
return (new cljs.core.async.t_cljs$core$async23497(flag__$1,cb__$1,meta23498));
});

}

return (new cljs.core.async.t_cljs$core$async23497(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23500_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23501_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23501_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23502 = (i + (1));
i = G__23502;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___23508 = arguments.length;
var i__4500__auto___23509 = (0);
while(true){
if((i__4500__auto___23509 < len__4499__auto___23508)){
args__4502__auto__.push((arguments[i__4500__auto___23509]));

var G__23510 = (i__4500__auto___23509 + (1));
i__4500__auto___23509 = G__23510;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23505){
var map__23506 = p__23505;
var map__23506__$1 = ((((!((map__23506 == null)))?(((((map__23506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23506):map__23506);
var opts = map__23506__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23503){
var G__23504 = cljs.core.first.call(null,seq23503);
var seq23503__$1 = cljs.core.next.call(null,seq23503);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23504,seq23503__$1);
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
var G__23512 = arguments.length;
switch (G__23512) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23411__auto___23558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___23558){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___23558){
return (function (state_23536){
var state_val_23537 = (state_23536[(1)]);
if((state_val_23537 === (7))){
var inst_23532 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23538_23559 = state_23536__$1;
(statearr_23538_23559[(2)] = inst_23532);

(statearr_23538_23559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (1))){
var state_23536__$1 = state_23536;
var statearr_23539_23560 = state_23536__$1;
(statearr_23539_23560[(2)] = null);

(statearr_23539_23560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (4))){
var inst_23515 = (state_23536[(7)]);
var inst_23515__$1 = (state_23536[(2)]);
var inst_23516 = (inst_23515__$1 == null);
var state_23536__$1 = (function (){var statearr_23540 = state_23536;
(statearr_23540[(7)] = inst_23515__$1);

return statearr_23540;
})();
if(cljs.core.truth_(inst_23516)){
var statearr_23541_23561 = state_23536__$1;
(statearr_23541_23561[(1)] = (5));

} else {
var statearr_23542_23562 = state_23536__$1;
(statearr_23542_23562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (13))){
var state_23536__$1 = state_23536;
var statearr_23543_23563 = state_23536__$1;
(statearr_23543_23563[(2)] = null);

(statearr_23543_23563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (6))){
var inst_23515 = (state_23536[(7)]);
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23536__$1,(11),to,inst_23515);
} else {
if((state_val_23537 === (3))){
var inst_23534 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23536__$1,inst_23534);
} else {
if((state_val_23537 === (12))){
var state_23536__$1 = state_23536;
var statearr_23544_23564 = state_23536__$1;
(statearr_23544_23564[(2)] = null);

(statearr_23544_23564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (2))){
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23536__$1,(4),from);
} else {
if((state_val_23537 === (11))){
var inst_23525 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
if(cljs.core.truth_(inst_23525)){
var statearr_23545_23565 = state_23536__$1;
(statearr_23545_23565[(1)] = (12));

} else {
var statearr_23546_23566 = state_23536__$1;
(statearr_23546_23566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (9))){
var state_23536__$1 = state_23536;
var statearr_23547_23567 = state_23536__$1;
(statearr_23547_23567[(2)] = null);

(statearr_23547_23567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (5))){
var state_23536__$1 = state_23536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23548_23568 = state_23536__$1;
(statearr_23548_23568[(1)] = (8));

} else {
var statearr_23549_23569 = state_23536__$1;
(statearr_23549_23569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (14))){
var inst_23530 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23550_23570 = state_23536__$1;
(statearr_23550_23570[(2)] = inst_23530);

(statearr_23550_23570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (10))){
var inst_23522 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23551_23571 = state_23536__$1;
(statearr_23551_23571[(2)] = inst_23522);

(statearr_23551_23571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (8))){
var inst_23519 = cljs.core.async.close_BANG_.call(null,to);
var state_23536__$1 = state_23536;
var statearr_23552_23572 = state_23536__$1;
(statearr_23552_23572[(2)] = inst_23519);

(statearr_23552_23572[(1)] = (10));


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
});})(c__23411__auto___23558))
;
return ((function (switch__22892__auto__,c__23411__auto___23558){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_23553 = [null,null,null,null,null,null,null,null];
(statearr_23553[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_23553[(1)] = (1));

return statearr_23553;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_23536){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23554){if((e23554 instanceof Object)){
var ex__22896__auto__ = e23554;
var statearr_23555_23573 = state_23536;
(statearr_23555_23573[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23574 = state_23536;
state_23536 = G__23574;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_23536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_23536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___23558))
})();
var state__23413__auto__ = (function (){var statearr_23556 = f__23412__auto__.call(null);
(statearr_23556[(6)] = c__23411__auto___23558);

return statearr_23556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___23558))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23575){
var vec__23576 = p__23575;
var v = cljs.core.nth.call(null,vec__23576,(0),null);
var p = cljs.core.nth.call(null,vec__23576,(1),null);
var job = vec__23576;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23411__auto___23747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___23747,res,vec__23576,v,p,job,jobs,results){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___23747,res,vec__23576,v,p,job,jobs,results){
return (function (state_23583){
var state_val_23584 = (state_23583[(1)]);
if((state_val_23584 === (1))){
var state_23583__$1 = state_23583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23583__$1,(2),res,v);
} else {
if((state_val_23584 === (2))){
var inst_23580 = (state_23583[(2)]);
var inst_23581 = cljs.core.async.close_BANG_.call(null,res);
var state_23583__$1 = (function (){var statearr_23585 = state_23583;
(statearr_23585[(7)] = inst_23580);

return statearr_23585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23583__$1,inst_23581);
} else {
return null;
}
}
});})(c__23411__auto___23747,res,vec__23576,v,p,job,jobs,results))
;
return ((function (switch__22892__auto__,c__23411__auto___23747,res,vec__23576,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0 = (function (){
var statearr_23586 = [null,null,null,null,null,null,null,null];
(statearr_23586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__);

(statearr_23586[(1)] = (1));

return statearr_23586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1 = (function (state_23583){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23587){if((e23587 instanceof Object)){
var ex__22896__auto__ = e23587;
var statearr_23588_23748 = state_23583;
(statearr_23588_23748[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23749 = state_23583;
state_23583 = G__23749;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = function(state_23583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1.call(this,state_23583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___23747,res,vec__23576,v,p,job,jobs,results))
})();
var state__23413__auto__ = (function (){var statearr_23589 = f__23412__auto__.call(null);
(statearr_23589[(6)] = c__23411__auto___23747);

return statearr_23589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___23747,res,vec__23576,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23590){
var vec__23591 = p__23590;
var v = cljs.core.nth.call(null,vec__23591,(0),null);
var p = cljs.core.nth.call(null,vec__23591,(1),null);
var job = vec__23591;
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
var n__4376__auto___23750 = n;
var __23751 = (0);
while(true){
if((__23751 < n__4376__auto___23750)){
var G__23594_23752 = type;
var G__23594_23753__$1 = (((G__23594_23752 instanceof cljs.core.Keyword))?G__23594_23752.fqn:null);
switch (G__23594_23753__$1) {
case "compute":
var c__23411__auto___23755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23751,c__23411__auto___23755,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (__23751,c__23411__auto___23755,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async){
return (function (state_23607){
var state_val_23608 = (state_23607[(1)]);
if((state_val_23608 === (1))){
var state_23607__$1 = state_23607;
var statearr_23609_23756 = state_23607__$1;
(statearr_23609_23756[(2)] = null);

(statearr_23609_23756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (2))){
var state_23607__$1 = state_23607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23607__$1,(4),jobs);
} else {
if((state_val_23608 === (3))){
var inst_23605 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23607__$1,inst_23605);
} else {
if((state_val_23608 === (4))){
var inst_23597 = (state_23607[(2)]);
var inst_23598 = process.call(null,inst_23597);
var state_23607__$1 = state_23607;
if(cljs.core.truth_(inst_23598)){
var statearr_23610_23757 = state_23607__$1;
(statearr_23610_23757[(1)] = (5));

} else {
var statearr_23611_23758 = state_23607__$1;
(statearr_23611_23758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (5))){
var state_23607__$1 = state_23607;
var statearr_23612_23759 = state_23607__$1;
(statearr_23612_23759[(2)] = null);

(statearr_23612_23759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (6))){
var state_23607__$1 = state_23607;
var statearr_23613_23760 = state_23607__$1;
(statearr_23613_23760[(2)] = null);

(statearr_23613_23760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (7))){
var inst_23603 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23614_23761 = state_23607__$1;
(statearr_23614_23761[(2)] = inst_23603);

(statearr_23614_23761[(1)] = (3));


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
});})(__23751,c__23411__auto___23755,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async))
;
return ((function (__23751,switch__22892__auto__,c__23411__auto___23755,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0 = (function (){
var statearr_23615 = [null,null,null,null,null,null,null];
(statearr_23615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__);

(statearr_23615[(1)] = (1));

return statearr_23615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1 = (function (state_23607){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23616){if((e23616 instanceof Object)){
var ex__22896__auto__ = e23616;
var statearr_23617_23762 = state_23607;
(statearr_23617_23762[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23763 = state_23607;
state_23607 = G__23763;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = function(state_23607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1.call(this,state_23607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__;
})()
;})(__23751,switch__22892__auto__,c__23411__auto___23755,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async))
})();
var state__23413__auto__ = (function (){var statearr_23618 = f__23412__auto__.call(null);
(statearr_23618[(6)] = c__23411__auto___23755);

return statearr_23618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(__23751,c__23411__auto___23755,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async))
);


break;
case "async":
var c__23411__auto___23764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23751,c__23411__auto___23764,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (__23751,c__23411__auto___23764,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async){
return (function (state_23631){
var state_val_23632 = (state_23631[(1)]);
if((state_val_23632 === (1))){
var state_23631__$1 = state_23631;
var statearr_23633_23765 = state_23631__$1;
(statearr_23633_23765[(2)] = null);

(statearr_23633_23765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (2))){
var state_23631__$1 = state_23631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23631__$1,(4),jobs);
} else {
if((state_val_23632 === (3))){
var inst_23629 = (state_23631[(2)]);
var state_23631__$1 = state_23631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23631__$1,inst_23629);
} else {
if((state_val_23632 === (4))){
var inst_23621 = (state_23631[(2)]);
var inst_23622 = async.call(null,inst_23621);
var state_23631__$1 = state_23631;
if(cljs.core.truth_(inst_23622)){
var statearr_23634_23766 = state_23631__$1;
(statearr_23634_23766[(1)] = (5));

} else {
var statearr_23635_23767 = state_23631__$1;
(statearr_23635_23767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (5))){
var state_23631__$1 = state_23631;
var statearr_23636_23768 = state_23631__$1;
(statearr_23636_23768[(2)] = null);

(statearr_23636_23768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (6))){
var state_23631__$1 = state_23631;
var statearr_23637_23769 = state_23631__$1;
(statearr_23637_23769[(2)] = null);

(statearr_23637_23769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (7))){
var inst_23627 = (state_23631[(2)]);
var state_23631__$1 = state_23631;
var statearr_23638_23770 = state_23631__$1;
(statearr_23638_23770[(2)] = inst_23627);

(statearr_23638_23770[(1)] = (3));


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
});})(__23751,c__23411__auto___23764,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async))
;
return ((function (__23751,switch__22892__auto__,c__23411__auto___23764,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0 = (function (){
var statearr_23639 = [null,null,null,null,null,null,null];
(statearr_23639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__);

(statearr_23639[(1)] = (1));

return statearr_23639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1 = (function (state_23631){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23640){if((e23640 instanceof Object)){
var ex__22896__auto__ = e23640;
var statearr_23641_23771 = state_23631;
(statearr_23641_23771[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23772 = state_23631;
state_23631 = G__23772;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = function(state_23631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1.call(this,state_23631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__;
})()
;})(__23751,switch__22892__auto__,c__23411__auto___23764,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async))
})();
var state__23413__auto__ = (function (){var statearr_23642 = f__23412__auto__.call(null);
(statearr_23642[(6)] = c__23411__auto___23764);

return statearr_23642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(__23751,c__23411__auto___23764,G__23594_23752,G__23594_23753__$1,n__4376__auto___23750,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23594_23753__$1)].join('')));

}

var G__23773 = (__23751 + (1));
__23751 = G__23773;
continue;
} else {
}
break;
}

var c__23411__auto___23774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___23774,jobs,results,process,async){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___23774,jobs,results,process,async){
return (function (state_23664){
var state_val_23665 = (state_23664[(1)]);
if((state_val_23665 === (1))){
var state_23664__$1 = state_23664;
var statearr_23666_23775 = state_23664__$1;
(statearr_23666_23775[(2)] = null);

(statearr_23666_23775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23665 === (2))){
var state_23664__$1 = state_23664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23664__$1,(4),from);
} else {
if((state_val_23665 === (3))){
var inst_23662 = (state_23664[(2)]);
var state_23664__$1 = state_23664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23664__$1,inst_23662);
} else {
if((state_val_23665 === (4))){
var inst_23645 = (state_23664[(7)]);
var inst_23645__$1 = (state_23664[(2)]);
var inst_23646 = (inst_23645__$1 == null);
var state_23664__$1 = (function (){var statearr_23667 = state_23664;
(statearr_23667[(7)] = inst_23645__$1);

return statearr_23667;
})();
if(cljs.core.truth_(inst_23646)){
var statearr_23668_23776 = state_23664__$1;
(statearr_23668_23776[(1)] = (5));

} else {
var statearr_23669_23777 = state_23664__$1;
(statearr_23669_23777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23665 === (5))){
var inst_23648 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23664__$1 = state_23664;
var statearr_23670_23778 = state_23664__$1;
(statearr_23670_23778[(2)] = inst_23648);

(statearr_23670_23778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23665 === (6))){
var inst_23645 = (state_23664[(7)]);
var inst_23650 = (state_23664[(8)]);
var inst_23650__$1 = cljs.core.async.chan.call(null,(1));
var inst_23651 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23652 = [inst_23645,inst_23650__$1];
var inst_23653 = (new cljs.core.PersistentVector(null,2,(5),inst_23651,inst_23652,null));
var state_23664__$1 = (function (){var statearr_23671 = state_23664;
(statearr_23671[(8)] = inst_23650__$1);

return statearr_23671;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23664__$1,(8),jobs,inst_23653);
} else {
if((state_val_23665 === (7))){
var inst_23660 = (state_23664[(2)]);
var state_23664__$1 = state_23664;
var statearr_23672_23779 = state_23664__$1;
(statearr_23672_23779[(2)] = inst_23660);

(statearr_23672_23779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23665 === (8))){
var inst_23650 = (state_23664[(8)]);
var inst_23655 = (state_23664[(2)]);
var state_23664__$1 = (function (){var statearr_23673 = state_23664;
(statearr_23673[(9)] = inst_23655);

return statearr_23673;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23664__$1,(9),results,inst_23650);
} else {
if((state_val_23665 === (9))){
var inst_23657 = (state_23664[(2)]);
var state_23664__$1 = (function (){var statearr_23674 = state_23664;
(statearr_23674[(10)] = inst_23657);

return statearr_23674;
})();
var statearr_23675_23780 = state_23664__$1;
(statearr_23675_23780[(2)] = null);

(statearr_23675_23780[(1)] = (2));


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
});})(c__23411__auto___23774,jobs,results,process,async))
;
return ((function (switch__22892__auto__,c__23411__auto___23774,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0 = (function (){
var statearr_23676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__);

(statearr_23676[(1)] = (1));

return statearr_23676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1 = (function (state_23664){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23677){if((e23677 instanceof Object)){
var ex__22896__auto__ = e23677;
var statearr_23678_23781 = state_23664;
(statearr_23678_23781[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23782 = state_23664;
state_23664 = G__23782;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = function(state_23664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1.call(this,state_23664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___23774,jobs,results,process,async))
})();
var state__23413__auto__ = (function (){var statearr_23679 = f__23412__auto__.call(null);
(statearr_23679[(6)] = c__23411__auto___23774);

return statearr_23679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___23774,jobs,results,process,async))
);


var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__,jobs,results,process,async){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__,jobs,results,process,async){
return (function (state_23717){
var state_val_23718 = (state_23717[(1)]);
if((state_val_23718 === (7))){
var inst_23713 = (state_23717[(2)]);
var state_23717__$1 = state_23717;
var statearr_23719_23783 = state_23717__$1;
(statearr_23719_23783[(2)] = inst_23713);

(statearr_23719_23783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (20))){
var state_23717__$1 = state_23717;
var statearr_23720_23784 = state_23717__$1;
(statearr_23720_23784[(2)] = null);

(statearr_23720_23784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (1))){
var state_23717__$1 = state_23717;
var statearr_23721_23785 = state_23717__$1;
(statearr_23721_23785[(2)] = null);

(statearr_23721_23785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (4))){
var inst_23682 = (state_23717[(7)]);
var inst_23682__$1 = (state_23717[(2)]);
var inst_23683 = (inst_23682__$1 == null);
var state_23717__$1 = (function (){var statearr_23722 = state_23717;
(statearr_23722[(7)] = inst_23682__$1);

return statearr_23722;
})();
if(cljs.core.truth_(inst_23683)){
var statearr_23723_23786 = state_23717__$1;
(statearr_23723_23786[(1)] = (5));

} else {
var statearr_23724_23787 = state_23717__$1;
(statearr_23724_23787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (15))){
var inst_23695 = (state_23717[(8)]);
var state_23717__$1 = state_23717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23717__$1,(18),to,inst_23695);
} else {
if((state_val_23718 === (21))){
var inst_23708 = (state_23717[(2)]);
var state_23717__$1 = state_23717;
var statearr_23725_23788 = state_23717__$1;
(statearr_23725_23788[(2)] = inst_23708);

(statearr_23725_23788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (13))){
var inst_23710 = (state_23717[(2)]);
var state_23717__$1 = (function (){var statearr_23726 = state_23717;
(statearr_23726[(9)] = inst_23710);

return statearr_23726;
})();
var statearr_23727_23789 = state_23717__$1;
(statearr_23727_23789[(2)] = null);

(statearr_23727_23789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (6))){
var inst_23682 = (state_23717[(7)]);
var state_23717__$1 = state_23717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23717__$1,(11),inst_23682);
} else {
if((state_val_23718 === (17))){
var inst_23703 = (state_23717[(2)]);
var state_23717__$1 = state_23717;
if(cljs.core.truth_(inst_23703)){
var statearr_23728_23790 = state_23717__$1;
(statearr_23728_23790[(1)] = (19));

} else {
var statearr_23729_23791 = state_23717__$1;
(statearr_23729_23791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (3))){
var inst_23715 = (state_23717[(2)]);
var state_23717__$1 = state_23717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23717__$1,inst_23715);
} else {
if((state_val_23718 === (12))){
var inst_23692 = (state_23717[(10)]);
var state_23717__$1 = state_23717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23717__$1,(14),inst_23692);
} else {
if((state_val_23718 === (2))){
var state_23717__$1 = state_23717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23717__$1,(4),results);
} else {
if((state_val_23718 === (19))){
var state_23717__$1 = state_23717;
var statearr_23730_23792 = state_23717__$1;
(statearr_23730_23792[(2)] = null);

(statearr_23730_23792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (11))){
var inst_23692 = (state_23717[(2)]);
var state_23717__$1 = (function (){var statearr_23731 = state_23717;
(statearr_23731[(10)] = inst_23692);

return statearr_23731;
})();
var statearr_23732_23793 = state_23717__$1;
(statearr_23732_23793[(2)] = null);

(statearr_23732_23793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (9))){
var state_23717__$1 = state_23717;
var statearr_23733_23794 = state_23717__$1;
(statearr_23733_23794[(2)] = null);

(statearr_23733_23794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (5))){
var state_23717__$1 = state_23717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23734_23795 = state_23717__$1;
(statearr_23734_23795[(1)] = (8));

} else {
var statearr_23735_23796 = state_23717__$1;
(statearr_23735_23796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (14))){
var inst_23695 = (state_23717[(8)]);
var inst_23697 = (state_23717[(11)]);
var inst_23695__$1 = (state_23717[(2)]);
var inst_23696 = (inst_23695__$1 == null);
var inst_23697__$1 = cljs.core.not.call(null,inst_23696);
var state_23717__$1 = (function (){var statearr_23736 = state_23717;
(statearr_23736[(8)] = inst_23695__$1);

(statearr_23736[(11)] = inst_23697__$1);

return statearr_23736;
})();
if(inst_23697__$1){
var statearr_23737_23797 = state_23717__$1;
(statearr_23737_23797[(1)] = (15));

} else {
var statearr_23738_23798 = state_23717__$1;
(statearr_23738_23798[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (16))){
var inst_23697 = (state_23717[(11)]);
var state_23717__$1 = state_23717;
var statearr_23739_23799 = state_23717__$1;
(statearr_23739_23799[(2)] = inst_23697);

(statearr_23739_23799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (10))){
var inst_23689 = (state_23717[(2)]);
var state_23717__$1 = state_23717;
var statearr_23740_23800 = state_23717__$1;
(statearr_23740_23800[(2)] = inst_23689);

(statearr_23740_23800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (18))){
var inst_23700 = (state_23717[(2)]);
var state_23717__$1 = state_23717;
var statearr_23741_23801 = state_23717__$1;
(statearr_23741_23801[(2)] = inst_23700);

(statearr_23741_23801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23718 === (8))){
var inst_23686 = cljs.core.async.close_BANG_.call(null,to);
var state_23717__$1 = state_23717;
var statearr_23742_23802 = state_23717__$1;
(statearr_23742_23802[(2)] = inst_23686);

(statearr_23742_23802[(1)] = (10));


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
});})(c__23411__auto__,jobs,results,process,async))
;
return ((function (switch__22892__auto__,c__23411__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0 = (function (){
var statearr_23743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__);

(statearr_23743[(1)] = (1));

return statearr_23743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1 = (function (state_23717){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23744){if((e23744 instanceof Object)){
var ex__22896__auto__ = e23744;
var statearr_23745_23803 = state_23717;
(statearr_23745_23803[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23804 = state_23717;
state_23717 = G__23804;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__ = function(state_23717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1.call(this,state_23717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__,jobs,results,process,async))
})();
var state__23413__auto__ = (function (){var statearr_23746 = f__23412__auto__.call(null);
(statearr_23746[(6)] = c__23411__auto__);

return statearr_23746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__,jobs,results,process,async))
);

return c__23411__auto__;
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
var G__23806 = arguments.length;
switch (G__23806) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__23809 = arguments.length;
switch (G__23809) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__23812 = arguments.length;
switch (G__23812) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23411__auto___23861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___23861,tc,fc){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___23861,tc,fc){
return (function (state_23838){
var state_val_23839 = (state_23838[(1)]);
if((state_val_23839 === (7))){
var inst_23834 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23840_23862 = state_23838__$1;
(statearr_23840_23862[(2)] = inst_23834);

(statearr_23840_23862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (1))){
var state_23838__$1 = state_23838;
var statearr_23841_23863 = state_23838__$1;
(statearr_23841_23863[(2)] = null);

(statearr_23841_23863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (4))){
var inst_23815 = (state_23838[(7)]);
var inst_23815__$1 = (state_23838[(2)]);
var inst_23816 = (inst_23815__$1 == null);
var state_23838__$1 = (function (){var statearr_23842 = state_23838;
(statearr_23842[(7)] = inst_23815__$1);

return statearr_23842;
})();
if(cljs.core.truth_(inst_23816)){
var statearr_23843_23864 = state_23838__$1;
(statearr_23843_23864[(1)] = (5));

} else {
var statearr_23844_23865 = state_23838__$1;
(statearr_23844_23865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (13))){
var state_23838__$1 = state_23838;
var statearr_23845_23866 = state_23838__$1;
(statearr_23845_23866[(2)] = null);

(statearr_23845_23866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (6))){
var inst_23815 = (state_23838[(7)]);
var inst_23821 = p.call(null,inst_23815);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23821)){
var statearr_23846_23867 = state_23838__$1;
(statearr_23846_23867[(1)] = (9));

} else {
var statearr_23847_23868 = state_23838__$1;
(statearr_23847_23868[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (3))){
var inst_23836 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23838__$1,inst_23836);
} else {
if((state_val_23839 === (12))){
var state_23838__$1 = state_23838;
var statearr_23848_23869 = state_23838__$1;
(statearr_23848_23869[(2)] = null);

(statearr_23848_23869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (2))){
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(4),ch);
} else {
if((state_val_23839 === (11))){
var inst_23815 = (state_23838[(7)]);
var inst_23825 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23838__$1,(8),inst_23825,inst_23815);
} else {
if((state_val_23839 === (9))){
var state_23838__$1 = state_23838;
var statearr_23849_23870 = state_23838__$1;
(statearr_23849_23870[(2)] = tc);

(statearr_23849_23870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (5))){
var inst_23818 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23819 = cljs.core.async.close_BANG_.call(null,fc);
var state_23838__$1 = (function (){var statearr_23850 = state_23838;
(statearr_23850[(8)] = inst_23818);

return statearr_23850;
})();
var statearr_23851_23871 = state_23838__$1;
(statearr_23851_23871[(2)] = inst_23819);

(statearr_23851_23871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (14))){
var inst_23832 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23852_23872 = state_23838__$1;
(statearr_23852_23872[(2)] = inst_23832);

(statearr_23852_23872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (10))){
var state_23838__$1 = state_23838;
var statearr_23853_23873 = state_23838__$1;
(statearr_23853_23873[(2)] = fc);

(statearr_23853_23873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (8))){
var inst_23827 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23827)){
var statearr_23854_23874 = state_23838__$1;
(statearr_23854_23874[(1)] = (12));

} else {
var statearr_23855_23875 = state_23838__$1;
(statearr_23855_23875[(1)] = (13));

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
});})(c__23411__auto___23861,tc,fc))
;
return ((function (switch__22892__auto__,c__23411__auto___23861,tc,fc){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_23856 = [null,null,null,null,null,null,null,null,null];
(statearr_23856[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_23856[(1)] = (1));

return statearr_23856;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_23838){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23857){if((e23857 instanceof Object)){
var ex__22896__auto__ = e23857;
var statearr_23858_23876 = state_23838;
(statearr_23858_23876[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23877 = state_23838;
state_23838 = G__23877;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_23838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_23838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___23861,tc,fc))
})();
var state__23413__auto__ = (function (){var statearr_23859 = f__23412__auto__.call(null);
(statearr_23859[(6)] = c__23411__auto___23861);

return statearr_23859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___23861,tc,fc))
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
var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__){
return (function (state_23898){
var state_val_23899 = (state_23898[(1)]);
if((state_val_23899 === (7))){
var inst_23894 = (state_23898[(2)]);
var state_23898__$1 = state_23898;
var statearr_23900_23918 = state_23898__$1;
(statearr_23900_23918[(2)] = inst_23894);

(statearr_23900_23918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (1))){
var inst_23878 = init;
var state_23898__$1 = (function (){var statearr_23901 = state_23898;
(statearr_23901[(7)] = inst_23878);

return statearr_23901;
})();
var statearr_23902_23919 = state_23898__$1;
(statearr_23902_23919[(2)] = null);

(statearr_23902_23919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (4))){
var inst_23881 = (state_23898[(8)]);
var inst_23881__$1 = (state_23898[(2)]);
var inst_23882 = (inst_23881__$1 == null);
var state_23898__$1 = (function (){var statearr_23903 = state_23898;
(statearr_23903[(8)] = inst_23881__$1);

return statearr_23903;
})();
if(cljs.core.truth_(inst_23882)){
var statearr_23904_23920 = state_23898__$1;
(statearr_23904_23920[(1)] = (5));

} else {
var statearr_23905_23921 = state_23898__$1;
(statearr_23905_23921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (6))){
var inst_23885 = (state_23898[(9)]);
var inst_23878 = (state_23898[(7)]);
var inst_23881 = (state_23898[(8)]);
var inst_23885__$1 = f.call(null,inst_23878,inst_23881);
var inst_23886 = cljs.core.reduced_QMARK_.call(null,inst_23885__$1);
var state_23898__$1 = (function (){var statearr_23906 = state_23898;
(statearr_23906[(9)] = inst_23885__$1);

return statearr_23906;
})();
if(inst_23886){
var statearr_23907_23922 = state_23898__$1;
(statearr_23907_23922[(1)] = (8));

} else {
var statearr_23908_23923 = state_23898__$1;
(statearr_23908_23923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (3))){
var inst_23896 = (state_23898[(2)]);
var state_23898__$1 = state_23898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23898__$1,inst_23896);
} else {
if((state_val_23899 === (2))){
var state_23898__$1 = state_23898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23898__$1,(4),ch);
} else {
if((state_val_23899 === (9))){
var inst_23885 = (state_23898[(9)]);
var inst_23878 = inst_23885;
var state_23898__$1 = (function (){var statearr_23909 = state_23898;
(statearr_23909[(7)] = inst_23878);

return statearr_23909;
})();
var statearr_23910_23924 = state_23898__$1;
(statearr_23910_23924[(2)] = null);

(statearr_23910_23924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (5))){
var inst_23878 = (state_23898[(7)]);
var state_23898__$1 = state_23898;
var statearr_23911_23925 = state_23898__$1;
(statearr_23911_23925[(2)] = inst_23878);

(statearr_23911_23925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (10))){
var inst_23892 = (state_23898[(2)]);
var state_23898__$1 = state_23898;
var statearr_23912_23926 = state_23898__$1;
(statearr_23912_23926[(2)] = inst_23892);

(statearr_23912_23926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (8))){
var inst_23885 = (state_23898[(9)]);
var inst_23888 = cljs.core.deref.call(null,inst_23885);
var state_23898__$1 = state_23898;
var statearr_23913_23927 = state_23898__$1;
(statearr_23913_23927[(2)] = inst_23888);

(statearr_23913_23927[(1)] = (10));


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
});})(c__23411__auto__))
;
return ((function (switch__22892__auto__,c__23411__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22893__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22893__auto____0 = (function (){
var statearr_23914 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23914[(0)] = cljs$core$async$reduce_$_state_machine__22893__auto__);

(statearr_23914[(1)] = (1));

return statearr_23914;
});
var cljs$core$async$reduce_$_state_machine__22893__auto____1 = (function (state_23898){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23915){if((e23915 instanceof Object)){
var ex__22896__auto__ = e23915;
var statearr_23916_23928 = state_23898;
(statearr_23916_23928[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23929 = state_23898;
state_23898 = G__23929;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22893__auto__ = function(state_23898){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22893__auto____1.call(this,state_23898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22893__auto____0;
cljs$core$async$reduce_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22893__auto____1;
return cljs$core$async$reduce_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__))
})();
var state__23413__auto__ = (function (){var statearr_23917 = f__23412__auto__.call(null);
(statearr_23917[(6)] = c__23411__auto__);

return statearr_23917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__))
);

return c__23411__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__,f__$1){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__,f__$1){
return (function (state_23935){
var state_val_23936 = (state_23935[(1)]);
if((state_val_23936 === (1))){
var inst_23930 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23935__$1,(2),inst_23930);
} else {
if((state_val_23936 === (2))){
var inst_23932 = (state_23935[(2)]);
var inst_23933 = f__$1.call(null,inst_23932);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23935__$1,inst_23933);
} else {
return null;
}
}
});})(c__23411__auto__,f__$1))
;
return ((function (switch__22892__auto__,c__23411__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22893__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22893__auto____0 = (function (){
var statearr_23937 = [null,null,null,null,null,null,null];
(statearr_23937[(0)] = cljs$core$async$transduce_$_state_machine__22893__auto__);

(statearr_23937[(1)] = (1));

return statearr_23937;
});
var cljs$core$async$transduce_$_state_machine__22893__auto____1 = (function (state_23935){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23938){if((e23938 instanceof Object)){
var ex__22896__auto__ = e23938;
var statearr_23939_23941 = state_23935;
(statearr_23939_23941[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23942 = state_23935;
state_23935 = G__23942;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22893__auto__ = function(state_23935){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22893__auto____1.call(this,state_23935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22893__auto____0;
cljs$core$async$transduce_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22893__auto____1;
return cljs$core$async$transduce_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__,f__$1))
})();
var state__23413__auto__ = (function (){var statearr_23940 = f__23412__auto__.call(null);
(statearr_23940[(6)] = c__23411__auto__);

return statearr_23940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__,f__$1))
);

return c__23411__auto__;
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
var G__23944 = arguments.length;
switch (G__23944) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__){
return (function (state_23969){
var state_val_23970 = (state_23969[(1)]);
if((state_val_23970 === (7))){
var inst_23951 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23971_23992 = state_23969__$1;
(statearr_23971_23992[(2)] = inst_23951);

(statearr_23971_23992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (1))){
var inst_23945 = cljs.core.seq.call(null,coll);
var inst_23946 = inst_23945;
var state_23969__$1 = (function (){var statearr_23972 = state_23969;
(statearr_23972[(7)] = inst_23946);

return statearr_23972;
})();
var statearr_23973_23993 = state_23969__$1;
(statearr_23973_23993[(2)] = null);

(statearr_23973_23993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (4))){
var inst_23946 = (state_23969[(7)]);
var inst_23949 = cljs.core.first.call(null,inst_23946);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23969__$1,(7),ch,inst_23949);
} else {
if((state_val_23970 === (13))){
var inst_23963 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23974_23994 = state_23969__$1;
(statearr_23974_23994[(2)] = inst_23963);

(statearr_23974_23994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (6))){
var inst_23954 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
if(cljs.core.truth_(inst_23954)){
var statearr_23975_23995 = state_23969__$1;
(statearr_23975_23995[(1)] = (8));

} else {
var statearr_23976_23996 = state_23969__$1;
(statearr_23976_23996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (3))){
var inst_23967 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23969__$1,inst_23967);
} else {
if((state_val_23970 === (12))){
var state_23969__$1 = state_23969;
var statearr_23977_23997 = state_23969__$1;
(statearr_23977_23997[(2)] = null);

(statearr_23977_23997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (2))){
var inst_23946 = (state_23969[(7)]);
var state_23969__$1 = state_23969;
if(cljs.core.truth_(inst_23946)){
var statearr_23978_23998 = state_23969__$1;
(statearr_23978_23998[(1)] = (4));

} else {
var statearr_23979_23999 = state_23969__$1;
(statearr_23979_23999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (11))){
var inst_23960 = cljs.core.async.close_BANG_.call(null,ch);
var state_23969__$1 = state_23969;
var statearr_23980_24000 = state_23969__$1;
(statearr_23980_24000[(2)] = inst_23960);

(statearr_23980_24000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (9))){
var state_23969__$1 = state_23969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23981_24001 = state_23969__$1;
(statearr_23981_24001[(1)] = (11));

} else {
var statearr_23982_24002 = state_23969__$1;
(statearr_23982_24002[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (5))){
var inst_23946 = (state_23969[(7)]);
var state_23969__$1 = state_23969;
var statearr_23983_24003 = state_23969__$1;
(statearr_23983_24003[(2)] = inst_23946);

(statearr_23983_24003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (10))){
var inst_23965 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23984_24004 = state_23969__$1;
(statearr_23984_24004[(2)] = inst_23965);

(statearr_23984_24004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (8))){
var inst_23946 = (state_23969[(7)]);
var inst_23956 = cljs.core.next.call(null,inst_23946);
var inst_23946__$1 = inst_23956;
var state_23969__$1 = (function (){var statearr_23985 = state_23969;
(statearr_23985[(7)] = inst_23946__$1);

return statearr_23985;
})();
var statearr_23986_24005 = state_23969__$1;
(statearr_23986_24005[(2)] = null);

(statearr_23986_24005[(1)] = (2));


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
});})(c__23411__auto__))
;
return ((function (switch__22892__auto__,c__23411__auto__){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_23987 = [null,null,null,null,null,null,null,null];
(statearr_23987[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_23987[(1)] = (1));

return statearr_23987;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_23969){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_23969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e23988){if((e23988 instanceof Object)){
var ex__22896__auto__ = e23988;
var statearr_23989_24006 = state_23969;
(statearr_23989_24006[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24007 = state_23969;
state_23969 = G__24007;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_23969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_23969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__))
})();
var state__23413__auto__ = (function (){var statearr_23990 = f__23412__auto__.call(null);
(statearr_23990[(6)] = c__23411__auto__);

return statearr_23990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__))
);

return c__23411__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async24008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24008 = (function (ch,cs,meta24009){
this.ch = ch;
this.cs = cs;
this.meta24009 = meta24009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24010,meta24009__$1){
var self__ = this;
var _24010__$1 = this;
return (new cljs.core.async.t_cljs$core$async24008(self__.ch,self__.cs,meta24009__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24010){
var self__ = this;
var _24010__$1 = this;
return self__.meta24009;
});})(cs))
;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24008.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24009","meta24009",1775778160,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24008";

cljs.core.async.t_cljs$core$async24008.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24008");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24008.
 */
cljs.core.async.__GT_t_cljs$core$async24008 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24008(ch__$1,cs__$1,meta24009){
return (new cljs.core.async.t_cljs$core$async24008(ch__$1,cs__$1,meta24009));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24008(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23411__auto___24230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___24230,cs,m,dchan,dctr,done){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___24230,cs,m,dchan,dctr,done){
return (function (state_24145){
var state_val_24146 = (state_24145[(1)]);
if((state_val_24146 === (7))){
var inst_24141 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24147_24231 = state_24145__$1;
(statearr_24147_24231[(2)] = inst_24141);

(statearr_24147_24231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (20))){
var inst_24044 = (state_24145[(7)]);
var inst_24056 = cljs.core.first.call(null,inst_24044);
var inst_24057 = cljs.core.nth.call(null,inst_24056,(0),null);
var inst_24058 = cljs.core.nth.call(null,inst_24056,(1),null);
var state_24145__$1 = (function (){var statearr_24148 = state_24145;
(statearr_24148[(8)] = inst_24057);

return statearr_24148;
})();
if(cljs.core.truth_(inst_24058)){
var statearr_24149_24232 = state_24145__$1;
(statearr_24149_24232[(1)] = (22));

} else {
var statearr_24150_24233 = state_24145__$1;
(statearr_24150_24233[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (27))){
var inst_24093 = (state_24145[(9)]);
var inst_24086 = (state_24145[(10)]);
var inst_24013 = (state_24145[(11)]);
var inst_24088 = (state_24145[(12)]);
var inst_24093__$1 = cljs.core._nth.call(null,inst_24086,inst_24088);
var inst_24094 = cljs.core.async.put_BANG_.call(null,inst_24093__$1,inst_24013,done);
var state_24145__$1 = (function (){var statearr_24151 = state_24145;
(statearr_24151[(9)] = inst_24093__$1);

return statearr_24151;
})();
if(cljs.core.truth_(inst_24094)){
var statearr_24152_24234 = state_24145__$1;
(statearr_24152_24234[(1)] = (30));

} else {
var statearr_24153_24235 = state_24145__$1;
(statearr_24153_24235[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (1))){
var state_24145__$1 = state_24145;
var statearr_24154_24236 = state_24145__$1;
(statearr_24154_24236[(2)] = null);

(statearr_24154_24236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (24))){
var inst_24044 = (state_24145[(7)]);
var inst_24063 = (state_24145[(2)]);
var inst_24064 = cljs.core.next.call(null,inst_24044);
var inst_24022 = inst_24064;
var inst_24023 = null;
var inst_24024 = (0);
var inst_24025 = (0);
var state_24145__$1 = (function (){var statearr_24155 = state_24145;
(statearr_24155[(13)] = inst_24023);

(statearr_24155[(14)] = inst_24025);

(statearr_24155[(15)] = inst_24022);

(statearr_24155[(16)] = inst_24024);

(statearr_24155[(17)] = inst_24063);

return statearr_24155;
})();
var statearr_24156_24237 = state_24145__$1;
(statearr_24156_24237[(2)] = null);

(statearr_24156_24237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (39))){
var state_24145__$1 = state_24145;
var statearr_24160_24238 = state_24145__$1;
(statearr_24160_24238[(2)] = null);

(statearr_24160_24238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (4))){
var inst_24013 = (state_24145[(11)]);
var inst_24013__$1 = (state_24145[(2)]);
var inst_24014 = (inst_24013__$1 == null);
var state_24145__$1 = (function (){var statearr_24161 = state_24145;
(statearr_24161[(11)] = inst_24013__$1);

return statearr_24161;
})();
if(cljs.core.truth_(inst_24014)){
var statearr_24162_24239 = state_24145__$1;
(statearr_24162_24239[(1)] = (5));

} else {
var statearr_24163_24240 = state_24145__$1;
(statearr_24163_24240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (15))){
var inst_24023 = (state_24145[(13)]);
var inst_24025 = (state_24145[(14)]);
var inst_24022 = (state_24145[(15)]);
var inst_24024 = (state_24145[(16)]);
var inst_24040 = (state_24145[(2)]);
var inst_24041 = (inst_24025 + (1));
var tmp24157 = inst_24023;
var tmp24158 = inst_24022;
var tmp24159 = inst_24024;
var inst_24022__$1 = tmp24158;
var inst_24023__$1 = tmp24157;
var inst_24024__$1 = tmp24159;
var inst_24025__$1 = inst_24041;
var state_24145__$1 = (function (){var statearr_24164 = state_24145;
(statearr_24164[(13)] = inst_24023__$1);

(statearr_24164[(14)] = inst_24025__$1);

(statearr_24164[(15)] = inst_24022__$1);

(statearr_24164[(18)] = inst_24040);

(statearr_24164[(16)] = inst_24024__$1);

return statearr_24164;
})();
var statearr_24165_24241 = state_24145__$1;
(statearr_24165_24241[(2)] = null);

(statearr_24165_24241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (21))){
var inst_24067 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24169_24242 = state_24145__$1;
(statearr_24169_24242[(2)] = inst_24067);

(statearr_24169_24242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (31))){
var inst_24093 = (state_24145[(9)]);
var inst_24097 = done.call(null,null);
var inst_24098 = cljs.core.async.untap_STAR_.call(null,m,inst_24093);
var state_24145__$1 = (function (){var statearr_24170 = state_24145;
(statearr_24170[(19)] = inst_24097);

return statearr_24170;
})();
var statearr_24171_24243 = state_24145__$1;
(statearr_24171_24243[(2)] = inst_24098);

(statearr_24171_24243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (32))){
var inst_24086 = (state_24145[(10)]);
var inst_24085 = (state_24145[(20)]);
var inst_24087 = (state_24145[(21)]);
var inst_24088 = (state_24145[(12)]);
var inst_24100 = (state_24145[(2)]);
var inst_24101 = (inst_24088 + (1));
var tmp24166 = inst_24086;
var tmp24167 = inst_24085;
var tmp24168 = inst_24087;
var inst_24085__$1 = tmp24167;
var inst_24086__$1 = tmp24166;
var inst_24087__$1 = tmp24168;
var inst_24088__$1 = inst_24101;
var state_24145__$1 = (function (){var statearr_24172 = state_24145;
(statearr_24172[(10)] = inst_24086__$1);

(statearr_24172[(20)] = inst_24085__$1);

(statearr_24172[(21)] = inst_24087__$1);

(statearr_24172[(12)] = inst_24088__$1);

(statearr_24172[(22)] = inst_24100);

return statearr_24172;
})();
var statearr_24173_24244 = state_24145__$1;
(statearr_24173_24244[(2)] = null);

(statearr_24173_24244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (40))){
var inst_24113 = (state_24145[(23)]);
var inst_24117 = done.call(null,null);
var inst_24118 = cljs.core.async.untap_STAR_.call(null,m,inst_24113);
var state_24145__$1 = (function (){var statearr_24174 = state_24145;
(statearr_24174[(24)] = inst_24117);

return statearr_24174;
})();
var statearr_24175_24245 = state_24145__$1;
(statearr_24175_24245[(2)] = inst_24118);

(statearr_24175_24245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (33))){
var inst_24104 = (state_24145[(25)]);
var inst_24106 = cljs.core.chunked_seq_QMARK_.call(null,inst_24104);
var state_24145__$1 = state_24145;
if(inst_24106){
var statearr_24176_24246 = state_24145__$1;
(statearr_24176_24246[(1)] = (36));

} else {
var statearr_24177_24247 = state_24145__$1;
(statearr_24177_24247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (13))){
var inst_24034 = (state_24145[(26)]);
var inst_24037 = cljs.core.async.close_BANG_.call(null,inst_24034);
var state_24145__$1 = state_24145;
var statearr_24178_24248 = state_24145__$1;
(statearr_24178_24248[(2)] = inst_24037);

(statearr_24178_24248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (22))){
var inst_24057 = (state_24145[(8)]);
var inst_24060 = cljs.core.async.close_BANG_.call(null,inst_24057);
var state_24145__$1 = state_24145;
var statearr_24179_24249 = state_24145__$1;
(statearr_24179_24249[(2)] = inst_24060);

(statearr_24179_24249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (36))){
var inst_24104 = (state_24145[(25)]);
var inst_24108 = cljs.core.chunk_first.call(null,inst_24104);
var inst_24109 = cljs.core.chunk_rest.call(null,inst_24104);
var inst_24110 = cljs.core.count.call(null,inst_24108);
var inst_24085 = inst_24109;
var inst_24086 = inst_24108;
var inst_24087 = inst_24110;
var inst_24088 = (0);
var state_24145__$1 = (function (){var statearr_24180 = state_24145;
(statearr_24180[(10)] = inst_24086);

(statearr_24180[(20)] = inst_24085);

(statearr_24180[(21)] = inst_24087);

(statearr_24180[(12)] = inst_24088);

return statearr_24180;
})();
var statearr_24181_24250 = state_24145__$1;
(statearr_24181_24250[(2)] = null);

(statearr_24181_24250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (41))){
var inst_24104 = (state_24145[(25)]);
var inst_24120 = (state_24145[(2)]);
var inst_24121 = cljs.core.next.call(null,inst_24104);
var inst_24085 = inst_24121;
var inst_24086 = null;
var inst_24087 = (0);
var inst_24088 = (0);
var state_24145__$1 = (function (){var statearr_24182 = state_24145;
(statearr_24182[(10)] = inst_24086);

(statearr_24182[(20)] = inst_24085);

(statearr_24182[(27)] = inst_24120);

(statearr_24182[(21)] = inst_24087);

(statearr_24182[(12)] = inst_24088);

return statearr_24182;
})();
var statearr_24183_24251 = state_24145__$1;
(statearr_24183_24251[(2)] = null);

(statearr_24183_24251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (43))){
var state_24145__$1 = state_24145;
var statearr_24184_24252 = state_24145__$1;
(statearr_24184_24252[(2)] = null);

(statearr_24184_24252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (29))){
var inst_24129 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24185_24253 = state_24145__$1;
(statearr_24185_24253[(2)] = inst_24129);

(statearr_24185_24253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (44))){
var inst_24138 = (state_24145[(2)]);
var state_24145__$1 = (function (){var statearr_24186 = state_24145;
(statearr_24186[(28)] = inst_24138);

return statearr_24186;
})();
var statearr_24187_24254 = state_24145__$1;
(statearr_24187_24254[(2)] = null);

(statearr_24187_24254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (6))){
var inst_24077 = (state_24145[(29)]);
var inst_24076 = cljs.core.deref.call(null,cs);
var inst_24077__$1 = cljs.core.keys.call(null,inst_24076);
var inst_24078 = cljs.core.count.call(null,inst_24077__$1);
var inst_24079 = cljs.core.reset_BANG_.call(null,dctr,inst_24078);
var inst_24084 = cljs.core.seq.call(null,inst_24077__$1);
var inst_24085 = inst_24084;
var inst_24086 = null;
var inst_24087 = (0);
var inst_24088 = (0);
var state_24145__$1 = (function (){var statearr_24188 = state_24145;
(statearr_24188[(30)] = inst_24079);

(statearr_24188[(10)] = inst_24086);

(statearr_24188[(20)] = inst_24085);

(statearr_24188[(29)] = inst_24077__$1);

(statearr_24188[(21)] = inst_24087);

(statearr_24188[(12)] = inst_24088);

return statearr_24188;
})();
var statearr_24189_24255 = state_24145__$1;
(statearr_24189_24255[(2)] = null);

(statearr_24189_24255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (28))){
var inst_24085 = (state_24145[(20)]);
var inst_24104 = (state_24145[(25)]);
var inst_24104__$1 = cljs.core.seq.call(null,inst_24085);
var state_24145__$1 = (function (){var statearr_24190 = state_24145;
(statearr_24190[(25)] = inst_24104__$1);

return statearr_24190;
})();
if(inst_24104__$1){
var statearr_24191_24256 = state_24145__$1;
(statearr_24191_24256[(1)] = (33));

} else {
var statearr_24192_24257 = state_24145__$1;
(statearr_24192_24257[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (25))){
var inst_24087 = (state_24145[(21)]);
var inst_24088 = (state_24145[(12)]);
var inst_24090 = (inst_24088 < inst_24087);
var inst_24091 = inst_24090;
var state_24145__$1 = state_24145;
if(cljs.core.truth_(inst_24091)){
var statearr_24193_24258 = state_24145__$1;
(statearr_24193_24258[(1)] = (27));

} else {
var statearr_24194_24259 = state_24145__$1;
(statearr_24194_24259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (34))){
var state_24145__$1 = state_24145;
var statearr_24195_24260 = state_24145__$1;
(statearr_24195_24260[(2)] = null);

(statearr_24195_24260[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (17))){
var state_24145__$1 = state_24145;
var statearr_24196_24261 = state_24145__$1;
(statearr_24196_24261[(2)] = null);

(statearr_24196_24261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (3))){
var inst_24143 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24145__$1,inst_24143);
} else {
if((state_val_24146 === (12))){
var inst_24072 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24197_24262 = state_24145__$1;
(statearr_24197_24262[(2)] = inst_24072);

(statearr_24197_24262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (2))){
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24145__$1,(4),ch);
} else {
if((state_val_24146 === (23))){
var state_24145__$1 = state_24145;
var statearr_24198_24263 = state_24145__$1;
(statearr_24198_24263[(2)] = null);

(statearr_24198_24263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (35))){
var inst_24127 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24199_24264 = state_24145__$1;
(statearr_24199_24264[(2)] = inst_24127);

(statearr_24199_24264[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (19))){
var inst_24044 = (state_24145[(7)]);
var inst_24048 = cljs.core.chunk_first.call(null,inst_24044);
var inst_24049 = cljs.core.chunk_rest.call(null,inst_24044);
var inst_24050 = cljs.core.count.call(null,inst_24048);
var inst_24022 = inst_24049;
var inst_24023 = inst_24048;
var inst_24024 = inst_24050;
var inst_24025 = (0);
var state_24145__$1 = (function (){var statearr_24200 = state_24145;
(statearr_24200[(13)] = inst_24023);

(statearr_24200[(14)] = inst_24025);

(statearr_24200[(15)] = inst_24022);

(statearr_24200[(16)] = inst_24024);

return statearr_24200;
})();
var statearr_24201_24265 = state_24145__$1;
(statearr_24201_24265[(2)] = null);

(statearr_24201_24265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (11))){
var inst_24022 = (state_24145[(15)]);
var inst_24044 = (state_24145[(7)]);
var inst_24044__$1 = cljs.core.seq.call(null,inst_24022);
var state_24145__$1 = (function (){var statearr_24202 = state_24145;
(statearr_24202[(7)] = inst_24044__$1);

return statearr_24202;
})();
if(inst_24044__$1){
var statearr_24203_24266 = state_24145__$1;
(statearr_24203_24266[(1)] = (16));

} else {
var statearr_24204_24267 = state_24145__$1;
(statearr_24204_24267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (9))){
var inst_24074 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24205_24268 = state_24145__$1;
(statearr_24205_24268[(2)] = inst_24074);

(statearr_24205_24268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (5))){
var inst_24020 = cljs.core.deref.call(null,cs);
var inst_24021 = cljs.core.seq.call(null,inst_24020);
var inst_24022 = inst_24021;
var inst_24023 = null;
var inst_24024 = (0);
var inst_24025 = (0);
var state_24145__$1 = (function (){var statearr_24206 = state_24145;
(statearr_24206[(13)] = inst_24023);

(statearr_24206[(14)] = inst_24025);

(statearr_24206[(15)] = inst_24022);

(statearr_24206[(16)] = inst_24024);

return statearr_24206;
})();
var statearr_24207_24269 = state_24145__$1;
(statearr_24207_24269[(2)] = null);

(statearr_24207_24269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (14))){
var state_24145__$1 = state_24145;
var statearr_24208_24270 = state_24145__$1;
(statearr_24208_24270[(2)] = null);

(statearr_24208_24270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (45))){
var inst_24135 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24209_24271 = state_24145__$1;
(statearr_24209_24271[(2)] = inst_24135);

(statearr_24209_24271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (26))){
var inst_24077 = (state_24145[(29)]);
var inst_24131 = (state_24145[(2)]);
var inst_24132 = cljs.core.seq.call(null,inst_24077);
var state_24145__$1 = (function (){var statearr_24210 = state_24145;
(statearr_24210[(31)] = inst_24131);

return statearr_24210;
})();
if(inst_24132){
var statearr_24211_24272 = state_24145__$1;
(statearr_24211_24272[(1)] = (42));

} else {
var statearr_24212_24273 = state_24145__$1;
(statearr_24212_24273[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (16))){
var inst_24044 = (state_24145[(7)]);
var inst_24046 = cljs.core.chunked_seq_QMARK_.call(null,inst_24044);
var state_24145__$1 = state_24145;
if(inst_24046){
var statearr_24213_24274 = state_24145__$1;
(statearr_24213_24274[(1)] = (19));

} else {
var statearr_24214_24275 = state_24145__$1;
(statearr_24214_24275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (38))){
var inst_24124 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24215_24276 = state_24145__$1;
(statearr_24215_24276[(2)] = inst_24124);

(statearr_24215_24276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (30))){
var state_24145__$1 = state_24145;
var statearr_24216_24277 = state_24145__$1;
(statearr_24216_24277[(2)] = null);

(statearr_24216_24277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (10))){
var inst_24023 = (state_24145[(13)]);
var inst_24025 = (state_24145[(14)]);
var inst_24033 = cljs.core._nth.call(null,inst_24023,inst_24025);
var inst_24034 = cljs.core.nth.call(null,inst_24033,(0),null);
var inst_24035 = cljs.core.nth.call(null,inst_24033,(1),null);
var state_24145__$1 = (function (){var statearr_24217 = state_24145;
(statearr_24217[(26)] = inst_24034);

return statearr_24217;
})();
if(cljs.core.truth_(inst_24035)){
var statearr_24218_24278 = state_24145__$1;
(statearr_24218_24278[(1)] = (13));

} else {
var statearr_24219_24279 = state_24145__$1;
(statearr_24219_24279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (18))){
var inst_24070 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24220_24280 = state_24145__$1;
(statearr_24220_24280[(2)] = inst_24070);

(statearr_24220_24280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (42))){
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24145__$1,(45),dchan);
} else {
if((state_val_24146 === (37))){
var inst_24013 = (state_24145[(11)]);
var inst_24113 = (state_24145[(23)]);
var inst_24104 = (state_24145[(25)]);
var inst_24113__$1 = cljs.core.first.call(null,inst_24104);
var inst_24114 = cljs.core.async.put_BANG_.call(null,inst_24113__$1,inst_24013,done);
var state_24145__$1 = (function (){var statearr_24221 = state_24145;
(statearr_24221[(23)] = inst_24113__$1);

return statearr_24221;
})();
if(cljs.core.truth_(inst_24114)){
var statearr_24222_24281 = state_24145__$1;
(statearr_24222_24281[(1)] = (39));

} else {
var statearr_24223_24282 = state_24145__$1;
(statearr_24223_24282[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (8))){
var inst_24025 = (state_24145[(14)]);
var inst_24024 = (state_24145[(16)]);
var inst_24027 = (inst_24025 < inst_24024);
var inst_24028 = inst_24027;
var state_24145__$1 = state_24145;
if(cljs.core.truth_(inst_24028)){
var statearr_24224_24283 = state_24145__$1;
(statearr_24224_24283[(1)] = (10));

} else {
var statearr_24225_24284 = state_24145__$1;
(statearr_24225_24284[(1)] = (11));

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
});})(c__23411__auto___24230,cs,m,dchan,dctr,done))
;
return ((function (switch__22892__auto__,c__23411__auto___24230,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22893__auto__ = null;
var cljs$core$async$mult_$_state_machine__22893__auto____0 = (function (){
var statearr_24226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24226[(0)] = cljs$core$async$mult_$_state_machine__22893__auto__);

(statearr_24226[(1)] = (1));

return statearr_24226;
});
var cljs$core$async$mult_$_state_machine__22893__auto____1 = (function (state_24145){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_24145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e24227){if((e24227 instanceof Object)){
var ex__22896__auto__ = e24227;
var statearr_24228_24285 = state_24145;
(statearr_24228_24285[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24286 = state_24145;
state_24145 = G__24286;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22893__auto__ = function(state_24145){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22893__auto____1.call(this,state_24145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22893__auto____0;
cljs$core$async$mult_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22893__auto____1;
return cljs$core$async$mult_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___24230,cs,m,dchan,dctr,done))
})();
var state__23413__auto__ = (function (){var statearr_24229 = f__23412__auto__.call(null);
(statearr_24229[(6)] = c__23411__auto___24230);

return statearr_24229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___24230,cs,m,dchan,dctr,done))
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
var G__24288 = arguments.length;
switch (G__24288) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24300 = arguments.length;
var i__4500__auto___24301 = (0);
while(true){
if((i__4500__auto___24301 < len__4499__auto___24300)){
args__4502__auto__.push((arguments[i__4500__auto___24301]));

var G__24302 = (i__4500__auto___24301 + (1));
i__4500__auto___24301 = G__24302;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24294){
var map__24295 = p__24294;
var map__24295__$1 = ((((!((map__24295 == null)))?(((((map__24295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24295):map__24295);
var opts = map__24295__$1;
var statearr_24297_24303 = state;
(statearr_24297_24303[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24295,map__24295__$1,opts){
return (function (val){
var statearr_24298_24304 = state;
(statearr_24298_24304[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24295,map__24295__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24299_24305 = state;
(statearr_24299_24305[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24290){
var G__24291 = cljs.core.first.call(null,seq24290);
var seq24290__$1 = cljs.core.next.call(null,seq24290);
var G__24292 = cljs.core.first.call(null,seq24290__$1);
var seq24290__$2 = cljs.core.next.call(null,seq24290__$1);
var G__24293 = cljs.core.first.call(null,seq24290__$2);
var seq24290__$3 = cljs.core.next.call(null,seq24290__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24291,G__24292,G__24293,seq24290__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24306 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24307){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24307 = meta24307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24308,meta24307__$1){
var self__ = this;
var _24308__$1 = this;
return (new cljs.core.async.t_cljs$core$async24306(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24307__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24308){
var self__ = this;
var _24308__$1 = this;
return self__.meta24307;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24307","meta24307",1865157764,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24306";

cljs.core.async.t_cljs$core$async24306.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24306");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24306.
 */
cljs.core.async.__GT_t_cljs$core$async24306 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24306(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24307){
return (new cljs.core.async.t_cljs$core$async24306(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24307));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24306(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23411__auto___24470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___24470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___24470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24410){
var state_val_24411 = (state_24410[(1)]);
if((state_val_24411 === (7))){
var inst_24325 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
var statearr_24412_24471 = state_24410__$1;
(statearr_24412_24471[(2)] = inst_24325);

(statearr_24412_24471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (20))){
var inst_24337 = (state_24410[(7)]);
var state_24410__$1 = state_24410;
var statearr_24413_24472 = state_24410__$1;
(statearr_24413_24472[(2)] = inst_24337);

(statearr_24413_24472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (27))){
var state_24410__$1 = state_24410;
var statearr_24414_24473 = state_24410__$1;
(statearr_24414_24473[(2)] = null);

(statearr_24414_24473[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (1))){
var inst_24312 = (state_24410[(8)]);
var inst_24312__$1 = calc_state.call(null);
var inst_24314 = (inst_24312__$1 == null);
var inst_24315 = cljs.core.not.call(null,inst_24314);
var state_24410__$1 = (function (){var statearr_24415 = state_24410;
(statearr_24415[(8)] = inst_24312__$1);

return statearr_24415;
})();
if(inst_24315){
var statearr_24416_24474 = state_24410__$1;
(statearr_24416_24474[(1)] = (2));

} else {
var statearr_24417_24475 = state_24410__$1;
(statearr_24417_24475[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (24))){
var inst_24370 = (state_24410[(9)]);
var inst_24384 = (state_24410[(10)]);
var inst_24361 = (state_24410[(11)]);
var inst_24384__$1 = inst_24361.call(null,inst_24370);
var state_24410__$1 = (function (){var statearr_24418 = state_24410;
(statearr_24418[(10)] = inst_24384__$1);

return statearr_24418;
})();
if(cljs.core.truth_(inst_24384__$1)){
var statearr_24419_24476 = state_24410__$1;
(statearr_24419_24476[(1)] = (29));

} else {
var statearr_24420_24477 = state_24410__$1;
(statearr_24420_24477[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (4))){
var inst_24328 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24328)){
var statearr_24421_24478 = state_24410__$1;
(statearr_24421_24478[(1)] = (8));

} else {
var statearr_24422_24479 = state_24410__$1;
(statearr_24422_24479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (15))){
var inst_24355 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24355)){
var statearr_24423_24480 = state_24410__$1;
(statearr_24423_24480[(1)] = (19));

} else {
var statearr_24424_24481 = state_24410__$1;
(statearr_24424_24481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (21))){
var inst_24360 = (state_24410[(12)]);
var inst_24360__$1 = (state_24410[(2)]);
var inst_24361 = cljs.core.get.call(null,inst_24360__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24362 = cljs.core.get.call(null,inst_24360__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24363 = cljs.core.get.call(null,inst_24360__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24410__$1 = (function (){var statearr_24425 = state_24410;
(statearr_24425[(12)] = inst_24360__$1);

(statearr_24425[(11)] = inst_24361);

(statearr_24425[(13)] = inst_24362);

return statearr_24425;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24410__$1,(22),inst_24363);
} else {
if((state_val_24411 === (31))){
var inst_24392 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24392)){
var statearr_24426_24482 = state_24410__$1;
(statearr_24426_24482[(1)] = (32));

} else {
var statearr_24427_24483 = state_24410__$1;
(statearr_24427_24483[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (32))){
var inst_24369 = (state_24410[(14)]);
var state_24410__$1 = state_24410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24410__$1,(35),out,inst_24369);
} else {
if((state_val_24411 === (33))){
var inst_24360 = (state_24410[(12)]);
var inst_24337 = inst_24360;
var state_24410__$1 = (function (){var statearr_24428 = state_24410;
(statearr_24428[(7)] = inst_24337);

return statearr_24428;
})();
var statearr_24429_24484 = state_24410__$1;
(statearr_24429_24484[(2)] = null);

(statearr_24429_24484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (13))){
var inst_24337 = (state_24410[(7)]);
var inst_24344 = inst_24337.cljs$lang$protocol_mask$partition0$;
var inst_24345 = (inst_24344 & (64));
var inst_24346 = inst_24337.cljs$core$ISeq$;
var inst_24347 = (cljs.core.PROTOCOL_SENTINEL === inst_24346);
var inst_24348 = ((inst_24345) || (inst_24347));
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24348)){
var statearr_24430_24485 = state_24410__$1;
(statearr_24430_24485[(1)] = (16));

} else {
var statearr_24431_24486 = state_24410__$1;
(statearr_24431_24486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (22))){
var inst_24370 = (state_24410[(9)]);
var inst_24369 = (state_24410[(14)]);
var inst_24368 = (state_24410[(2)]);
var inst_24369__$1 = cljs.core.nth.call(null,inst_24368,(0),null);
var inst_24370__$1 = cljs.core.nth.call(null,inst_24368,(1),null);
var inst_24371 = (inst_24369__$1 == null);
var inst_24372 = cljs.core._EQ_.call(null,inst_24370__$1,change);
var inst_24373 = ((inst_24371) || (inst_24372));
var state_24410__$1 = (function (){var statearr_24432 = state_24410;
(statearr_24432[(9)] = inst_24370__$1);

(statearr_24432[(14)] = inst_24369__$1);

return statearr_24432;
})();
if(cljs.core.truth_(inst_24373)){
var statearr_24433_24487 = state_24410__$1;
(statearr_24433_24487[(1)] = (23));

} else {
var statearr_24434_24488 = state_24410__$1;
(statearr_24434_24488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (36))){
var inst_24360 = (state_24410[(12)]);
var inst_24337 = inst_24360;
var state_24410__$1 = (function (){var statearr_24435 = state_24410;
(statearr_24435[(7)] = inst_24337);

return statearr_24435;
})();
var statearr_24436_24489 = state_24410__$1;
(statearr_24436_24489[(2)] = null);

(statearr_24436_24489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (29))){
var inst_24384 = (state_24410[(10)]);
var state_24410__$1 = state_24410;
var statearr_24437_24490 = state_24410__$1;
(statearr_24437_24490[(2)] = inst_24384);

(statearr_24437_24490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (6))){
var state_24410__$1 = state_24410;
var statearr_24438_24491 = state_24410__$1;
(statearr_24438_24491[(2)] = false);

(statearr_24438_24491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (28))){
var inst_24380 = (state_24410[(2)]);
var inst_24381 = calc_state.call(null);
var inst_24337 = inst_24381;
var state_24410__$1 = (function (){var statearr_24439 = state_24410;
(statearr_24439[(15)] = inst_24380);

(statearr_24439[(7)] = inst_24337);

return statearr_24439;
})();
var statearr_24440_24492 = state_24410__$1;
(statearr_24440_24492[(2)] = null);

(statearr_24440_24492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (25))){
var inst_24406 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
var statearr_24441_24493 = state_24410__$1;
(statearr_24441_24493[(2)] = inst_24406);

(statearr_24441_24493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (34))){
var inst_24404 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
var statearr_24442_24494 = state_24410__$1;
(statearr_24442_24494[(2)] = inst_24404);

(statearr_24442_24494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (17))){
var state_24410__$1 = state_24410;
var statearr_24443_24495 = state_24410__$1;
(statearr_24443_24495[(2)] = false);

(statearr_24443_24495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (3))){
var state_24410__$1 = state_24410;
var statearr_24444_24496 = state_24410__$1;
(statearr_24444_24496[(2)] = false);

(statearr_24444_24496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (12))){
var inst_24408 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24410__$1,inst_24408);
} else {
if((state_val_24411 === (2))){
var inst_24312 = (state_24410[(8)]);
var inst_24317 = inst_24312.cljs$lang$protocol_mask$partition0$;
var inst_24318 = (inst_24317 & (64));
var inst_24319 = inst_24312.cljs$core$ISeq$;
var inst_24320 = (cljs.core.PROTOCOL_SENTINEL === inst_24319);
var inst_24321 = ((inst_24318) || (inst_24320));
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24321)){
var statearr_24445_24497 = state_24410__$1;
(statearr_24445_24497[(1)] = (5));

} else {
var statearr_24446_24498 = state_24410__$1;
(statearr_24446_24498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (23))){
var inst_24369 = (state_24410[(14)]);
var inst_24375 = (inst_24369 == null);
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24375)){
var statearr_24447_24499 = state_24410__$1;
(statearr_24447_24499[(1)] = (26));

} else {
var statearr_24448_24500 = state_24410__$1;
(statearr_24448_24500[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (35))){
var inst_24395 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
if(cljs.core.truth_(inst_24395)){
var statearr_24449_24501 = state_24410__$1;
(statearr_24449_24501[(1)] = (36));

} else {
var statearr_24450_24502 = state_24410__$1;
(statearr_24450_24502[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (19))){
var inst_24337 = (state_24410[(7)]);
var inst_24357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24337);
var state_24410__$1 = state_24410;
var statearr_24451_24503 = state_24410__$1;
(statearr_24451_24503[(2)] = inst_24357);

(statearr_24451_24503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (11))){
var inst_24337 = (state_24410[(7)]);
var inst_24341 = (inst_24337 == null);
var inst_24342 = cljs.core.not.call(null,inst_24341);
var state_24410__$1 = state_24410;
if(inst_24342){
var statearr_24452_24504 = state_24410__$1;
(statearr_24452_24504[(1)] = (13));

} else {
var statearr_24453_24505 = state_24410__$1;
(statearr_24453_24505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (9))){
var inst_24312 = (state_24410[(8)]);
var state_24410__$1 = state_24410;
var statearr_24454_24506 = state_24410__$1;
(statearr_24454_24506[(2)] = inst_24312);

(statearr_24454_24506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (5))){
var state_24410__$1 = state_24410;
var statearr_24455_24507 = state_24410__$1;
(statearr_24455_24507[(2)] = true);

(statearr_24455_24507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (14))){
var state_24410__$1 = state_24410;
var statearr_24456_24508 = state_24410__$1;
(statearr_24456_24508[(2)] = false);

(statearr_24456_24508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (26))){
var inst_24370 = (state_24410[(9)]);
var inst_24377 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24370);
var state_24410__$1 = state_24410;
var statearr_24457_24509 = state_24410__$1;
(statearr_24457_24509[(2)] = inst_24377);

(statearr_24457_24509[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (16))){
var state_24410__$1 = state_24410;
var statearr_24458_24510 = state_24410__$1;
(statearr_24458_24510[(2)] = true);

(statearr_24458_24510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (38))){
var inst_24400 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
var statearr_24459_24511 = state_24410__$1;
(statearr_24459_24511[(2)] = inst_24400);

(statearr_24459_24511[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (30))){
var inst_24370 = (state_24410[(9)]);
var inst_24361 = (state_24410[(11)]);
var inst_24362 = (state_24410[(13)]);
var inst_24387 = cljs.core.empty_QMARK_.call(null,inst_24361);
var inst_24388 = inst_24362.call(null,inst_24370);
var inst_24389 = cljs.core.not.call(null,inst_24388);
var inst_24390 = ((inst_24387) && (inst_24389));
var state_24410__$1 = state_24410;
var statearr_24460_24512 = state_24410__$1;
(statearr_24460_24512[(2)] = inst_24390);

(statearr_24460_24512[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (10))){
var inst_24312 = (state_24410[(8)]);
var inst_24333 = (state_24410[(2)]);
var inst_24334 = cljs.core.get.call(null,inst_24333,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24335 = cljs.core.get.call(null,inst_24333,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24336 = cljs.core.get.call(null,inst_24333,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24337 = inst_24312;
var state_24410__$1 = (function (){var statearr_24461 = state_24410;
(statearr_24461[(7)] = inst_24337);

(statearr_24461[(16)] = inst_24336);

(statearr_24461[(17)] = inst_24334);

(statearr_24461[(18)] = inst_24335);

return statearr_24461;
})();
var statearr_24462_24513 = state_24410__$1;
(statearr_24462_24513[(2)] = null);

(statearr_24462_24513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (18))){
var inst_24352 = (state_24410[(2)]);
var state_24410__$1 = state_24410;
var statearr_24463_24514 = state_24410__$1;
(statearr_24463_24514[(2)] = inst_24352);

(statearr_24463_24514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (37))){
var state_24410__$1 = state_24410;
var statearr_24464_24515 = state_24410__$1;
(statearr_24464_24515[(2)] = null);

(statearr_24464_24515[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24411 === (8))){
var inst_24312 = (state_24410[(8)]);
var inst_24330 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24312);
var state_24410__$1 = state_24410;
var statearr_24465_24516 = state_24410__$1;
(statearr_24465_24516[(2)] = inst_24330);

(statearr_24465_24516[(1)] = (10));


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
});})(c__23411__auto___24470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22892__auto__,c__23411__auto___24470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22893__auto__ = null;
var cljs$core$async$mix_$_state_machine__22893__auto____0 = (function (){
var statearr_24466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24466[(0)] = cljs$core$async$mix_$_state_machine__22893__auto__);

(statearr_24466[(1)] = (1));

return statearr_24466;
});
var cljs$core$async$mix_$_state_machine__22893__auto____1 = (function (state_24410){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_24410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e24467){if((e24467 instanceof Object)){
var ex__22896__auto__ = e24467;
var statearr_24468_24517 = state_24410;
(statearr_24468_24517[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24518 = state_24410;
state_24410 = G__24518;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22893__auto__ = function(state_24410){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22893__auto____1.call(this,state_24410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22893__auto____0;
cljs$core$async$mix_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22893__auto____1;
return cljs$core$async$mix_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___24470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23413__auto__ = (function (){var statearr_24469 = f__23412__auto__.call(null);
(statearr_24469[(6)] = c__23411__auto___24470);

return statearr_24469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___24470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24520 = arguments.length;
switch (G__24520) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__24524 = arguments.length;
switch (G__24524) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__24522_SHARP_){
if(cljs.core.truth_(p1__24522_SHARP_.call(null,topic))){
return p1__24522_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24522_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24525 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24526){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24526 = meta24526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24527,meta24526__$1){
var self__ = this;
var _24527__$1 = this;
return (new cljs.core.async.t_cljs$core$async24525(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24526__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24527){
var self__ = this;
var _24527__$1 = this;
return self__.meta24526;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24526","meta24526",25473826,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24525";

cljs.core.async.t_cljs$core$async24525.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24525");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24525.
 */
cljs.core.async.__GT_t_cljs$core$async24525 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24525(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24526){
return (new cljs.core.async.t_cljs$core$async24525(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24526));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24525(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23411__auto___24645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___24645,mults,ensure_mult,p){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___24645,mults,ensure_mult,p){
return (function (state_24599){
var state_val_24600 = (state_24599[(1)]);
if((state_val_24600 === (7))){
var inst_24595 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24601_24646 = state_24599__$1;
(statearr_24601_24646[(2)] = inst_24595);

(statearr_24601_24646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (20))){
var state_24599__$1 = state_24599;
var statearr_24602_24647 = state_24599__$1;
(statearr_24602_24647[(2)] = null);

(statearr_24602_24647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (1))){
var state_24599__$1 = state_24599;
var statearr_24603_24648 = state_24599__$1;
(statearr_24603_24648[(2)] = null);

(statearr_24603_24648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (24))){
var inst_24578 = (state_24599[(7)]);
var inst_24587 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24578);
var state_24599__$1 = state_24599;
var statearr_24604_24649 = state_24599__$1;
(statearr_24604_24649[(2)] = inst_24587);

(statearr_24604_24649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (4))){
var inst_24530 = (state_24599[(8)]);
var inst_24530__$1 = (state_24599[(2)]);
var inst_24531 = (inst_24530__$1 == null);
var state_24599__$1 = (function (){var statearr_24605 = state_24599;
(statearr_24605[(8)] = inst_24530__$1);

return statearr_24605;
})();
if(cljs.core.truth_(inst_24531)){
var statearr_24606_24650 = state_24599__$1;
(statearr_24606_24650[(1)] = (5));

} else {
var statearr_24607_24651 = state_24599__$1;
(statearr_24607_24651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (15))){
var inst_24572 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24608_24652 = state_24599__$1;
(statearr_24608_24652[(2)] = inst_24572);

(statearr_24608_24652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (21))){
var inst_24592 = (state_24599[(2)]);
var state_24599__$1 = (function (){var statearr_24609 = state_24599;
(statearr_24609[(9)] = inst_24592);

return statearr_24609;
})();
var statearr_24610_24653 = state_24599__$1;
(statearr_24610_24653[(2)] = null);

(statearr_24610_24653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (13))){
var inst_24554 = (state_24599[(10)]);
var inst_24556 = cljs.core.chunked_seq_QMARK_.call(null,inst_24554);
var state_24599__$1 = state_24599;
if(inst_24556){
var statearr_24611_24654 = state_24599__$1;
(statearr_24611_24654[(1)] = (16));

} else {
var statearr_24612_24655 = state_24599__$1;
(statearr_24612_24655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (22))){
var inst_24584 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
if(cljs.core.truth_(inst_24584)){
var statearr_24613_24656 = state_24599__$1;
(statearr_24613_24656[(1)] = (23));

} else {
var statearr_24614_24657 = state_24599__$1;
(statearr_24614_24657[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (6))){
var inst_24530 = (state_24599[(8)]);
var inst_24580 = (state_24599[(11)]);
var inst_24578 = (state_24599[(7)]);
var inst_24578__$1 = topic_fn.call(null,inst_24530);
var inst_24579 = cljs.core.deref.call(null,mults);
var inst_24580__$1 = cljs.core.get.call(null,inst_24579,inst_24578__$1);
var state_24599__$1 = (function (){var statearr_24615 = state_24599;
(statearr_24615[(11)] = inst_24580__$1);

(statearr_24615[(7)] = inst_24578__$1);

return statearr_24615;
})();
if(cljs.core.truth_(inst_24580__$1)){
var statearr_24616_24658 = state_24599__$1;
(statearr_24616_24658[(1)] = (19));

} else {
var statearr_24617_24659 = state_24599__$1;
(statearr_24617_24659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (25))){
var inst_24589 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24618_24660 = state_24599__$1;
(statearr_24618_24660[(2)] = inst_24589);

(statearr_24618_24660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (17))){
var inst_24554 = (state_24599[(10)]);
var inst_24563 = cljs.core.first.call(null,inst_24554);
var inst_24564 = cljs.core.async.muxch_STAR_.call(null,inst_24563);
var inst_24565 = cljs.core.async.close_BANG_.call(null,inst_24564);
var inst_24566 = cljs.core.next.call(null,inst_24554);
var inst_24540 = inst_24566;
var inst_24541 = null;
var inst_24542 = (0);
var inst_24543 = (0);
var state_24599__$1 = (function (){var statearr_24619 = state_24599;
(statearr_24619[(12)] = inst_24543);

(statearr_24619[(13)] = inst_24541);

(statearr_24619[(14)] = inst_24540);

(statearr_24619[(15)] = inst_24565);

(statearr_24619[(16)] = inst_24542);

return statearr_24619;
})();
var statearr_24620_24661 = state_24599__$1;
(statearr_24620_24661[(2)] = null);

(statearr_24620_24661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (3))){
var inst_24597 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24599__$1,inst_24597);
} else {
if((state_val_24600 === (12))){
var inst_24574 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24621_24662 = state_24599__$1;
(statearr_24621_24662[(2)] = inst_24574);

(statearr_24621_24662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (2))){
var state_24599__$1 = state_24599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24599__$1,(4),ch);
} else {
if((state_val_24600 === (23))){
var state_24599__$1 = state_24599;
var statearr_24622_24663 = state_24599__$1;
(statearr_24622_24663[(2)] = null);

(statearr_24622_24663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (19))){
var inst_24530 = (state_24599[(8)]);
var inst_24580 = (state_24599[(11)]);
var inst_24582 = cljs.core.async.muxch_STAR_.call(null,inst_24580);
var state_24599__$1 = state_24599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24599__$1,(22),inst_24582,inst_24530);
} else {
if((state_val_24600 === (11))){
var inst_24554 = (state_24599[(10)]);
var inst_24540 = (state_24599[(14)]);
var inst_24554__$1 = cljs.core.seq.call(null,inst_24540);
var state_24599__$1 = (function (){var statearr_24623 = state_24599;
(statearr_24623[(10)] = inst_24554__$1);

return statearr_24623;
})();
if(inst_24554__$1){
var statearr_24624_24664 = state_24599__$1;
(statearr_24624_24664[(1)] = (13));

} else {
var statearr_24625_24665 = state_24599__$1;
(statearr_24625_24665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (9))){
var inst_24576 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24626_24666 = state_24599__$1;
(statearr_24626_24666[(2)] = inst_24576);

(statearr_24626_24666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (5))){
var inst_24537 = cljs.core.deref.call(null,mults);
var inst_24538 = cljs.core.vals.call(null,inst_24537);
var inst_24539 = cljs.core.seq.call(null,inst_24538);
var inst_24540 = inst_24539;
var inst_24541 = null;
var inst_24542 = (0);
var inst_24543 = (0);
var state_24599__$1 = (function (){var statearr_24627 = state_24599;
(statearr_24627[(12)] = inst_24543);

(statearr_24627[(13)] = inst_24541);

(statearr_24627[(14)] = inst_24540);

(statearr_24627[(16)] = inst_24542);

return statearr_24627;
})();
var statearr_24628_24667 = state_24599__$1;
(statearr_24628_24667[(2)] = null);

(statearr_24628_24667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (14))){
var state_24599__$1 = state_24599;
var statearr_24632_24668 = state_24599__$1;
(statearr_24632_24668[(2)] = null);

(statearr_24632_24668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (16))){
var inst_24554 = (state_24599[(10)]);
var inst_24558 = cljs.core.chunk_first.call(null,inst_24554);
var inst_24559 = cljs.core.chunk_rest.call(null,inst_24554);
var inst_24560 = cljs.core.count.call(null,inst_24558);
var inst_24540 = inst_24559;
var inst_24541 = inst_24558;
var inst_24542 = inst_24560;
var inst_24543 = (0);
var state_24599__$1 = (function (){var statearr_24633 = state_24599;
(statearr_24633[(12)] = inst_24543);

(statearr_24633[(13)] = inst_24541);

(statearr_24633[(14)] = inst_24540);

(statearr_24633[(16)] = inst_24542);

return statearr_24633;
})();
var statearr_24634_24669 = state_24599__$1;
(statearr_24634_24669[(2)] = null);

(statearr_24634_24669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (10))){
var inst_24543 = (state_24599[(12)]);
var inst_24541 = (state_24599[(13)]);
var inst_24540 = (state_24599[(14)]);
var inst_24542 = (state_24599[(16)]);
var inst_24548 = cljs.core._nth.call(null,inst_24541,inst_24543);
var inst_24549 = cljs.core.async.muxch_STAR_.call(null,inst_24548);
var inst_24550 = cljs.core.async.close_BANG_.call(null,inst_24549);
var inst_24551 = (inst_24543 + (1));
var tmp24629 = inst_24541;
var tmp24630 = inst_24540;
var tmp24631 = inst_24542;
var inst_24540__$1 = tmp24630;
var inst_24541__$1 = tmp24629;
var inst_24542__$1 = tmp24631;
var inst_24543__$1 = inst_24551;
var state_24599__$1 = (function (){var statearr_24635 = state_24599;
(statearr_24635[(12)] = inst_24543__$1);

(statearr_24635[(13)] = inst_24541__$1);

(statearr_24635[(14)] = inst_24540__$1);

(statearr_24635[(17)] = inst_24550);

(statearr_24635[(16)] = inst_24542__$1);

return statearr_24635;
})();
var statearr_24636_24670 = state_24599__$1;
(statearr_24636_24670[(2)] = null);

(statearr_24636_24670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (18))){
var inst_24569 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24637_24671 = state_24599__$1;
(statearr_24637_24671[(2)] = inst_24569);

(statearr_24637_24671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (8))){
var inst_24543 = (state_24599[(12)]);
var inst_24542 = (state_24599[(16)]);
var inst_24545 = (inst_24543 < inst_24542);
var inst_24546 = inst_24545;
var state_24599__$1 = state_24599;
if(cljs.core.truth_(inst_24546)){
var statearr_24638_24672 = state_24599__$1;
(statearr_24638_24672[(1)] = (10));

} else {
var statearr_24639_24673 = state_24599__$1;
(statearr_24639_24673[(1)] = (11));

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
});})(c__23411__auto___24645,mults,ensure_mult,p))
;
return ((function (switch__22892__auto__,c__23411__auto___24645,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_24640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24640[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_24640[(1)] = (1));

return statearr_24640;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_24599){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_24599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e24641){if((e24641 instanceof Object)){
var ex__22896__auto__ = e24641;
var statearr_24642_24674 = state_24599;
(statearr_24642_24674[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24675 = state_24599;
state_24599 = G__24675;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_24599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_24599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___24645,mults,ensure_mult,p))
})();
var state__23413__auto__ = (function (){var statearr_24643 = f__23412__auto__.call(null);
(statearr_24643[(6)] = c__23411__auto___24645);

return statearr_24643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___24645,mults,ensure_mult,p))
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
var G__24677 = arguments.length;
switch (G__24677) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__24680 = arguments.length;
switch (G__24680) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__24683 = arguments.length;
switch (G__24683) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__23411__auto___24750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___24750,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___24750,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24722){
var state_val_24723 = (state_24722[(1)]);
if((state_val_24723 === (7))){
var state_24722__$1 = state_24722;
var statearr_24724_24751 = state_24722__$1;
(statearr_24724_24751[(2)] = null);

(statearr_24724_24751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (1))){
var state_24722__$1 = state_24722;
var statearr_24725_24752 = state_24722__$1;
(statearr_24725_24752[(2)] = null);

(statearr_24725_24752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (4))){
var inst_24686 = (state_24722[(7)]);
var inst_24688 = (inst_24686 < cnt);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24688)){
var statearr_24726_24753 = state_24722__$1;
(statearr_24726_24753[(1)] = (6));

} else {
var statearr_24727_24754 = state_24722__$1;
(statearr_24727_24754[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (15))){
var inst_24718 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24728_24755 = state_24722__$1;
(statearr_24728_24755[(2)] = inst_24718);

(statearr_24728_24755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (13))){
var inst_24711 = cljs.core.async.close_BANG_.call(null,out);
var state_24722__$1 = state_24722;
var statearr_24729_24756 = state_24722__$1;
(statearr_24729_24756[(2)] = inst_24711);

(statearr_24729_24756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (6))){
var state_24722__$1 = state_24722;
var statearr_24730_24757 = state_24722__$1;
(statearr_24730_24757[(2)] = null);

(statearr_24730_24757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (3))){
var inst_24720 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24722__$1,inst_24720);
} else {
if((state_val_24723 === (12))){
var inst_24708 = (state_24722[(8)]);
var inst_24708__$1 = (state_24722[(2)]);
var inst_24709 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24708__$1);
var state_24722__$1 = (function (){var statearr_24731 = state_24722;
(statearr_24731[(8)] = inst_24708__$1);

return statearr_24731;
})();
if(cljs.core.truth_(inst_24709)){
var statearr_24732_24758 = state_24722__$1;
(statearr_24732_24758[(1)] = (13));

} else {
var statearr_24733_24759 = state_24722__$1;
(statearr_24733_24759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (2))){
var inst_24685 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24686 = (0);
var state_24722__$1 = (function (){var statearr_24734 = state_24722;
(statearr_24734[(7)] = inst_24686);

(statearr_24734[(9)] = inst_24685);

return statearr_24734;
})();
var statearr_24735_24760 = state_24722__$1;
(statearr_24735_24760[(2)] = null);

(statearr_24735_24760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (11))){
var inst_24686 = (state_24722[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24722,(10),Object,null,(9));
var inst_24695 = chs__$1.call(null,inst_24686);
var inst_24696 = done.call(null,inst_24686);
var inst_24697 = cljs.core.async.take_BANG_.call(null,inst_24695,inst_24696);
var state_24722__$1 = state_24722;
var statearr_24736_24761 = state_24722__$1;
(statearr_24736_24761[(2)] = inst_24697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (9))){
var inst_24686 = (state_24722[(7)]);
var inst_24699 = (state_24722[(2)]);
var inst_24700 = (inst_24686 + (1));
var inst_24686__$1 = inst_24700;
var state_24722__$1 = (function (){var statearr_24737 = state_24722;
(statearr_24737[(10)] = inst_24699);

(statearr_24737[(7)] = inst_24686__$1);

return statearr_24737;
})();
var statearr_24738_24762 = state_24722__$1;
(statearr_24738_24762[(2)] = null);

(statearr_24738_24762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (5))){
var inst_24706 = (state_24722[(2)]);
var state_24722__$1 = (function (){var statearr_24739 = state_24722;
(statearr_24739[(11)] = inst_24706);

return statearr_24739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(12),dchan);
} else {
if((state_val_24723 === (14))){
var inst_24708 = (state_24722[(8)]);
var inst_24713 = cljs.core.apply.call(null,f,inst_24708);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24722__$1,(16),out,inst_24713);
} else {
if((state_val_24723 === (16))){
var inst_24715 = (state_24722[(2)]);
var state_24722__$1 = (function (){var statearr_24740 = state_24722;
(statearr_24740[(12)] = inst_24715);

return statearr_24740;
})();
var statearr_24741_24763 = state_24722__$1;
(statearr_24741_24763[(2)] = null);

(statearr_24741_24763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (10))){
var inst_24690 = (state_24722[(2)]);
var inst_24691 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24722__$1 = (function (){var statearr_24742 = state_24722;
(statearr_24742[(13)] = inst_24690);

return statearr_24742;
})();
var statearr_24743_24764 = state_24722__$1;
(statearr_24743_24764[(2)] = inst_24691);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (8))){
var inst_24704 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24744_24765 = state_24722__$1;
(statearr_24744_24765[(2)] = inst_24704);

(statearr_24744_24765[(1)] = (5));


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
});})(c__23411__auto___24750,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22892__auto__,c__23411__auto___24750,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_24745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24745[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_24745[(1)] = (1));

return statearr_24745;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_24722){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_24722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e24746){if((e24746 instanceof Object)){
var ex__22896__auto__ = e24746;
var statearr_24747_24766 = state_24722;
(statearr_24747_24766[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24767 = state_24722;
state_24722 = G__24767;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_24722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_24722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___24750,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23413__auto__ = (function (){var statearr_24748 = f__23412__auto__.call(null);
(statearr_24748[(6)] = c__23411__auto___24750);

return statearr_24748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___24750,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24770 = arguments.length;
switch (G__24770) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23411__auto___24824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___24824,out){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___24824,out){
return (function (state_24802){
var state_val_24803 = (state_24802[(1)]);
if((state_val_24803 === (7))){
var inst_24782 = (state_24802[(7)]);
var inst_24781 = (state_24802[(8)]);
var inst_24781__$1 = (state_24802[(2)]);
var inst_24782__$1 = cljs.core.nth.call(null,inst_24781__$1,(0),null);
var inst_24783 = cljs.core.nth.call(null,inst_24781__$1,(1),null);
var inst_24784 = (inst_24782__$1 == null);
var state_24802__$1 = (function (){var statearr_24804 = state_24802;
(statearr_24804[(7)] = inst_24782__$1);

(statearr_24804[(9)] = inst_24783);

(statearr_24804[(8)] = inst_24781__$1);

return statearr_24804;
})();
if(cljs.core.truth_(inst_24784)){
var statearr_24805_24825 = state_24802__$1;
(statearr_24805_24825[(1)] = (8));

} else {
var statearr_24806_24826 = state_24802__$1;
(statearr_24806_24826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (1))){
var inst_24771 = cljs.core.vec.call(null,chs);
var inst_24772 = inst_24771;
var state_24802__$1 = (function (){var statearr_24807 = state_24802;
(statearr_24807[(10)] = inst_24772);

return statearr_24807;
})();
var statearr_24808_24827 = state_24802__$1;
(statearr_24808_24827[(2)] = null);

(statearr_24808_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (4))){
var inst_24772 = (state_24802[(10)]);
var state_24802__$1 = state_24802;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24802__$1,(7),inst_24772);
} else {
if((state_val_24803 === (6))){
var inst_24798 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24809_24828 = state_24802__$1;
(statearr_24809_24828[(2)] = inst_24798);

(statearr_24809_24828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (3))){
var inst_24800 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24802__$1,inst_24800);
} else {
if((state_val_24803 === (2))){
var inst_24772 = (state_24802[(10)]);
var inst_24774 = cljs.core.count.call(null,inst_24772);
var inst_24775 = (inst_24774 > (0));
var state_24802__$1 = state_24802;
if(cljs.core.truth_(inst_24775)){
var statearr_24811_24829 = state_24802__$1;
(statearr_24811_24829[(1)] = (4));

} else {
var statearr_24812_24830 = state_24802__$1;
(statearr_24812_24830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (11))){
var inst_24772 = (state_24802[(10)]);
var inst_24791 = (state_24802[(2)]);
var tmp24810 = inst_24772;
var inst_24772__$1 = tmp24810;
var state_24802__$1 = (function (){var statearr_24813 = state_24802;
(statearr_24813[(11)] = inst_24791);

(statearr_24813[(10)] = inst_24772__$1);

return statearr_24813;
})();
var statearr_24814_24831 = state_24802__$1;
(statearr_24814_24831[(2)] = null);

(statearr_24814_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (9))){
var inst_24782 = (state_24802[(7)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24802__$1,(11),out,inst_24782);
} else {
if((state_val_24803 === (5))){
var inst_24796 = cljs.core.async.close_BANG_.call(null,out);
var state_24802__$1 = state_24802;
var statearr_24815_24832 = state_24802__$1;
(statearr_24815_24832[(2)] = inst_24796);

(statearr_24815_24832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (10))){
var inst_24794 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24816_24833 = state_24802__$1;
(statearr_24816_24833[(2)] = inst_24794);

(statearr_24816_24833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (8))){
var inst_24782 = (state_24802[(7)]);
var inst_24783 = (state_24802[(9)]);
var inst_24781 = (state_24802[(8)]);
var inst_24772 = (state_24802[(10)]);
var inst_24786 = (function (){var cs = inst_24772;
var vec__24777 = inst_24781;
var v = inst_24782;
var c = inst_24783;
return ((function (cs,vec__24777,v,c,inst_24782,inst_24783,inst_24781,inst_24772,state_val_24803,c__23411__auto___24824,out){
return (function (p1__24768_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24768_SHARP_);
});
;})(cs,vec__24777,v,c,inst_24782,inst_24783,inst_24781,inst_24772,state_val_24803,c__23411__auto___24824,out))
})();
var inst_24787 = cljs.core.filterv.call(null,inst_24786,inst_24772);
var inst_24772__$1 = inst_24787;
var state_24802__$1 = (function (){var statearr_24817 = state_24802;
(statearr_24817[(10)] = inst_24772__$1);

return statearr_24817;
})();
var statearr_24818_24834 = state_24802__$1;
(statearr_24818_24834[(2)] = null);

(statearr_24818_24834[(1)] = (2));


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
});})(c__23411__auto___24824,out))
;
return ((function (switch__22892__auto__,c__23411__auto___24824,out){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_24819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24819[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_24819[(1)] = (1));

return statearr_24819;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_24802){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_24802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e24820){if((e24820 instanceof Object)){
var ex__22896__auto__ = e24820;
var statearr_24821_24835 = state_24802;
(statearr_24821_24835[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24836 = state_24802;
state_24802 = G__24836;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_24802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_24802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___24824,out))
})();
var state__23413__auto__ = (function (){var statearr_24822 = f__23412__auto__.call(null);
(statearr_24822[(6)] = c__23411__auto___24824);

return statearr_24822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___24824,out))
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
var G__24838 = arguments.length;
switch (G__24838) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23411__auto___24883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___24883,out){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___24883,out){
return (function (state_24862){
var state_val_24863 = (state_24862[(1)]);
if((state_val_24863 === (7))){
var inst_24844 = (state_24862[(7)]);
var inst_24844__$1 = (state_24862[(2)]);
var inst_24845 = (inst_24844__$1 == null);
var inst_24846 = cljs.core.not.call(null,inst_24845);
var state_24862__$1 = (function (){var statearr_24864 = state_24862;
(statearr_24864[(7)] = inst_24844__$1);

return statearr_24864;
})();
if(inst_24846){
var statearr_24865_24884 = state_24862__$1;
(statearr_24865_24884[(1)] = (8));

} else {
var statearr_24866_24885 = state_24862__$1;
(statearr_24866_24885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (1))){
var inst_24839 = (0);
var state_24862__$1 = (function (){var statearr_24867 = state_24862;
(statearr_24867[(8)] = inst_24839);

return statearr_24867;
})();
var statearr_24868_24886 = state_24862__$1;
(statearr_24868_24886[(2)] = null);

(statearr_24868_24886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (4))){
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24862__$1,(7),ch);
} else {
if((state_val_24863 === (6))){
var inst_24857 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
var statearr_24869_24887 = state_24862__$1;
(statearr_24869_24887[(2)] = inst_24857);

(statearr_24869_24887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (3))){
var inst_24859 = (state_24862[(2)]);
var inst_24860 = cljs.core.async.close_BANG_.call(null,out);
var state_24862__$1 = (function (){var statearr_24870 = state_24862;
(statearr_24870[(9)] = inst_24859);

return statearr_24870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24862__$1,inst_24860);
} else {
if((state_val_24863 === (2))){
var inst_24839 = (state_24862[(8)]);
var inst_24841 = (inst_24839 < n);
var state_24862__$1 = state_24862;
if(cljs.core.truth_(inst_24841)){
var statearr_24871_24888 = state_24862__$1;
(statearr_24871_24888[(1)] = (4));

} else {
var statearr_24872_24889 = state_24862__$1;
(statearr_24872_24889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (11))){
var inst_24839 = (state_24862[(8)]);
var inst_24849 = (state_24862[(2)]);
var inst_24850 = (inst_24839 + (1));
var inst_24839__$1 = inst_24850;
var state_24862__$1 = (function (){var statearr_24873 = state_24862;
(statearr_24873[(8)] = inst_24839__$1);

(statearr_24873[(10)] = inst_24849);

return statearr_24873;
})();
var statearr_24874_24890 = state_24862__$1;
(statearr_24874_24890[(2)] = null);

(statearr_24874_24890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (9))){
var state_24862__$1 = state_24862;
var statearr_24875_24891 = state_24862__$1;
(statearr_24875_24891[(2)] = null);

(statearr_24875_24891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (5))){
var state_24862__$1 = state_24862;
var statearr_24876_24892 = state_24862__$1;
(statearr_24876_24892[(2)] = null);

(statearr_24876_24892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (10))){
var inst_24854 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
var statearr_24877_24893 = state_24862__$1;
(statearr_24877_24893[(2)] = inst_24854);

(statearr_24877_24893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (8))){
var inst_24844 = (state_24862[(7)]);
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24862__$1,(11),out,inst_24844);
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
});})(c__23411__auto___24883,out))
;
return ((function (switch__22892__auto__,c__23411__auto___24883,out){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_24878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24878[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_24878[(1)] = (1));

return statearr_24878;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_24862){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_24862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e24879){if((e24879 instanceof Object)){
var ex__22896__auto__ = e24879;
var statearr_24880_24894 = state_24862;
(statearr_24880_24894[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24895 = state_24862;
state_24862 = G__24895;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_24862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_24862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___24883,out))
})();
var state__23413__auto__ = (function (){var statearr_24881 = f__23412__auto__.call(null);
(statearr_24881[(6)] = c__23411__auto___24883);

return statearr_24881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___24883,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24897 = (function (f,ch,meta24898){
this.f = f;
this.ch = ch;
this.meta24898 = meta24898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24899,meta24898__$1){
var self__ = this;
var _24899__$1 = this;
return (new cljs.core.async.t_cljs$core$async24897(self__.f,self__.ch,meta24898__$1));
});

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24899){
var self__ = this;
var _24899__$1 = this;
return self__.meta24898;
});

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24900 = (function (f,ch,meta24898,_,fn1,meta24901){
this.f = f;
this.ch = ch;
this.meta24898 = meta24898;
this._ = _;
this.fn1 = fn1;
this.meta24901 = meta24901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24902,meta24901__$1){
var self__ = this;
var _24902__$1 = this;
return (new cljs.core.async.t_cljs$core$async24900(self__.f,self__.ch,self__.meta24898,self__._,self__.fn1,meta24901__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24902){
var self__ = this;
var _24902__$1 = this;
return self__.meta24901;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24896_SHARP_){
return f1.call(null,(((p1__24896_SHARP_ == null))?null:self__.f.call(null,p1__24896_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24900.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24898","meta24898",-2112222469,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24897","cljs.core.async/t_cljs$core$async24897",-1726226776,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24901","meta24901",215699736,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24900";

cljs.core.async.t_cljs$core$async24900.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24900");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24900.
 */
cljs.core.async.__GT_t_cljs$core$async24900 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24900(f__$1,ch__$1,meta24898__$1,___$2,fn1__$1,meta24901){
return (new cljs.core.async.t_cljs$core$async24900(f__$1,ch__$1,meta24898__$1,___$2,fn1__$1,meta24901));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24900(self__.f,self__.ch,self__.meta24898,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24898","meta24898",-2112222469,null)], null);
});

cljs.core.async.t_cljs$core$async24897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24897";

cljs.core.async.t_cljs$core$async24897.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24897");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24897.
 */
cljs.core.async.__GT_t_cljs$core$async24897 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24897(f__$1,ch__$1,meta24898){
return (new cljs.core.async.t_cljs$core$async24897(f__$1,ch__$1,meta24898));
});

}

return (new cljs.core.async.t_cljs$core$async24897(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24903 = (function (f,ch,meta24904){
this.f = f;
this.ch = ch;
this.meta24904 = meta24904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24905,meta24904__$1){
var self__ = this;
var _24905__$1 = this;
return (new cljs.core.async.t_cljs$core$async24903(self__.f,self__.ch,meta24904__$1));
});

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24905){
var self__ = this;
var _24905__$1 = this;
return self__.meta24904;
});

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24904","meta24904",1327938962,null)], null);
});

cljs.core.async.t_cljs$core$async24903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24903";

cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24903");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24903.
 */
cljs.core.async.__GT_t_cljs$core$async24903 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24903(f__$1,ch__$1,meta24904){
return (new cljs.core.async.t_cljs$core$async24903(f__$1,ch__$1,meta24904));
});

}

return (new cljs.core.async.t_cljs$core$async24903(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24906 = (function (p,ch,meta24907){
this.p = p;
this.ch = ch;
this.meta24907 = meta24907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24908,meta24907__$1){
var self__ = this;
var _24908__$1 = this;
return (new cljs.core.async.t_cljs$core$async24906(self__.p,self__.ch,meta24907__$1));
});

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24908){
var self__ = this;
var _24908__$1 = this;
return self__.meta24907;
});

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24907","meta24907",2021739343,null)], null);
});

cljs.core.async.t_cljs$core$async24906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24906";

cljs.core.async.t_cljs$core$async24906.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24906");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24906.
 */
cljs.core.async.__GT_t_cljs$core$async24906 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24906(p__$1,ch__$1,meta24907){
return (new cljs.core.async.t_cljs$core$async24906(p__$1,ch__$1,meta24907));
});

}

return (new cljs.core.async.t_cljs$core$async24906(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24910 = arguments.length;
switch (G__24910) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23411__auto___24950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___24950,out){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___24950,out){
return (function (state_24931){
var state_val_24932 = (state_24931[(1)]);
if((state_val_24932 === (7))){
var inst_24927 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24933_24951 = state_24931__$1;
(statearr_24933_24951[(2)] = inst_24927);

(statearr_24933_24951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (1))){
var state_24931__$1 = state_24931;
var statearr_24934_24952 = state_24931__$1;
(statearr_24934_24952[(2)] = null);

(statearr_24934_24952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (4))){
var inst_24913 = (state_24931[(7)]);
var inst_24913__$1 = (state_24931[(2)]);
var inst_24914 = (inst_24913__$1 == null);
var state_24931__$1 = (function (){var statearr_24935 = state_24931;
(statearr_24935[(7)] = inst_24913__$1);

return statearr_24935;
})();
if(cljs.core.truth_(inst_24914)){
var statearr_24936_24953 = state_24931__$1;
(statearr_24936_24953[(1)] = (5));

} else {
var statearr_24937_24954 = state_24931__$1;
(statearr_24937_24954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (6))){
var inst_24913 = (state_24931[(7)]);
var inst_24918 = p.call(null,inst_24913);
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24918)){
var statearr_24938_24955 = state_24931__$1;
(statearr_24938_24955[(1)] = (8));

} else {
var statearr_24939_24956 = state_24931__$1;
(statearr_24939_24956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (3))){
var inst_24929 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24931__$1,inst_24929);
} else {
if((state_val_24932 === (2))){
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24931__$1,(4),ch);
} else {
if((state_val_24932 === (11))){
var inst_24921 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24940_24957 = state_24931__$1;
(statearr_24940_24957[(2)] = inst_24921);

(statearr_24940_24957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (9))){
var state_24931__$1 = state_24931;
var statearr_24941_24958 = state_24931__$1;
(statearr_24941_24958[(2)] = null);

(statearr_24941_24958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (5))){
var inst_24916 = cljs.core.async.close_BANG_.call(null,out);
var state_24931__$1 = state_24931;
var statearr_24942_24959 = state_24931__$1;
(statearr_24942_24959[(2)] = inst_24916);

(statearr_24942_24959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (10))){
var inst_24924 = (state_24931[(2)]);
var state_24931__$1 = (function (){var statearr_24943 = state_24931;
(statearr_24943[(8)] = inst_24924);

return statearr_24943;
})();
var statearr_24944_24960 = state_24931__$1;
(statearr_24944_24960[(2)] = null);

(statearr_24944_24960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (8))){
var inst_24913 = (state_24931[(7)]);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24931__$1,(11),out,inst_24913);
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
});})(c__23411__auto___24950,out))
;
return ((function (switch__22892__auto__,c__23411__auto___24950,out){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_24945 = [null,null,null,null,null,null,null,null,null];
(statearr_24945[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_24945[(1)] = (1));

return statearr_24945;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_24931){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_24931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e24946){if((e24946 instanceof Object)){
var ex__22896__auto__ = e24946;
var statearr_24947_24961 = state_24931;
(statearr_24947_24961[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24962 = state_24931;
state_24931 = G__24962;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_24931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_24931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___24950,out))
})();
var state__23413__auto__ = (function (){var statearr_24948 = f__23412__auto__.call(null);
(statearr_24948[(6)] = c__23411__auto___24950);

return statearr_24948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___24950,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24964 = arguments.length;
switch (G__24964) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__){
return (function (state_25027){
var state_val_25028 = (state_25027[(1)]);
if((state_val_25028 === (7))){
var inst_25023 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25029_25067 = state_25027__$1;
(statearr_25029_25067[(2)] = inst_25023);

(statearr_25029_25067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (20))){
var inst_24993 = (state_25027[(7)]);
var inst_25004 = (state_25027[(2)]);
var inst_25005 = cljs.core.next.call(null,inst_24993);
var inst_24979 = inst_25005;
var inst_24980 = null;
var inst_24981 = (0);
var inst_24982 = (0);
var state_25027__$1 = (function (){var statearr_25030 = state_25027;
(statearr_25030[(8)] = inst_24979);

(statearr_25030[(9)] = inst_24981);

(statearr_25030[(10)] = inst_24982);

(statearr_25030[(11)] = inst_25004);

(statearr_25030[(12)] = inst_24980);

return statearr_25030;
})();
var statearr_25031_25068 = state_25027__$1;
(statearr_25031_25068[(2)] = null);

(statearr_25031_25068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (1))){
var state_25027__$1 = state_25027;
var statearr_25032_25069 = state_25027__$1;
(statearr_25032_25069[(2)] = null);

(statearr_25032_25069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (4))){
var inst_24968 = (state_25027[(13)]);
var inst_24968__$1 = (state_25027[(2)]);
var inst_24969 = (inst_24968__$1 == null);
var state_25027__$1 = (function (){var statearr_25033 = state_25027;
(statearr_25033[(13)] = inst_24968__$1);

return statearr_25033;
})();
if(cljs.core.truth_(inst_24969)){
var statearr_25034_25070 = state_25027__$1;
(statearr_25034_25070[(1)] = (5));

} else {
var statearr_25035_25071 = state_25027__$1;
(statearr_25035_25071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (15))){
var state_25027__$1 = state_25027;
var statearr_25039_25072 = state_25027__$1;
(statearr_25039_25072[(2)] = null);

(statearr_25039_25072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (21))){
var state_25027__$1 = state_25027;
var statearr_25040_25073 = state_25027__$1;
(statearr_25040_25073[(2)] = null);

(statearr_25040_25073[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (13))){
var inst_24979 = (state_25027[(8)]);
var inst_24981 = (state_25027[(9)]);
var inst_24982 = (state_25027[(10)]);
var inst_24980 = (state_25027[(12)]);
var inst_24989 = (state_25027[(2)]);
var inst_24990 = (inst_24982 + (1));
var tmp25036 = inst_24979;
var tmp25037 = inst_24981;
var tmp25038 = inst_24980;
var inst_24979__$1 = tmp25036;
var inst_24980__$1 = tmp25038;
var inst_24981__$1 = tmp25037;
var inst_24982__$1 = inst_24990;
var state_25027__$1 = (function (){var statearr_25041 = state_25027;
(statearr_25041[(8)] = inst_24979__$1);

(statearr_25041[(9)] = inst_24981__$1);

(statearr_25041[(10)] = inst_24982__$1);

(statearr_25041[(12)] = inst_24980__$1);

(statearr_25041[(14)] = inst_24989);

return statearr_25041;
})();
var statearr_25042_25074 = state_25027__$1;
(statearr_25042_25074[(2)] = null);

(statearr_25042_25074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (22))){
var state_25027__$1 = state_25027;
var statearr_25043_25075 = state_25027__$1;
(statearr_25043_25075[(2)] = null);

(statearr_25043_25075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (6))){
var inst_24968 = (state_25027[(13)]);
var inst_24977 = f.call(null,inst_24968);
var inst_24978 = cljs.core.seq.call(null,inst_24977);
var inst_24979 = inst_24978;
var inst_24980 = null;
var inst_24981 = (0);
var inst_24982 = (0);
var state_25027__$1 = (function (){var statearr_25044 = state_25027;
(statearr_25044[(8)] = inst_24979);

(statearr_25044[(9)] = inst_24981);

(statearr_25044[(10)] = inst_24982);

(statearr_25044[(12)] = inst_24980);

return statearr_25044;
})();
var statearr_25045_25076 = state_25027__$1;
(statearr_25045_25076[(2)] = null);

(statearr_25045_25076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (17))){
var inst_24993 = (state_25027[(7)]);
var inst_24997 = cljs.core.chunk_first.call(null,inst_24993);
var inst_24998 = cljs.core.chunk_rest.call(null,inst_24993);
var inst_24999 = cljs.core.count.call(null,inst_24997);
var inst_24979 = inst_24998;
var inst_24980 = inst_24997;
var inst_24981 = inst_24999;
var inst_24982 = (0);
var state_25027__$1 = (function (){var statearr_25046 = state_25027;
(statearr_25046[(8)] = inst_24979);

(statearr_25046[(9)] = inst_24981);

(statearr_25046[(10)] = inst_24982);

(statearr_25046[(12)] = inst_24980);

return statearr_25046;
})();
var statearr_25047_25077 = state_25027__$1;
(statearr_25047_25077[(2)] = null);

(statearr_25047_25077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (3))){
var inst_25025 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25027__$1,inst_25025);
} else {
if((state_val_25028 === (12))){
var inst_25013 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25048_25078 = state_25027__$1;
(statearr_25048_25078[(2)] = inst_25013);

(statearr_25048_25078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (2))){
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25027__$1,(4),in$);
} else {
if((state_val_25028 === (23))){
var inst_25021 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25049_25079 = state_25027__$1;
(statearr_25049_25079[(2)] = inst_25021);

(statearr_25049_25079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (19))){
var inst_25008 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25050_25080 = state_25027__$1;
(statearr_25050_25080[(2)] = inst_25008);

(statearr_25050_25080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (11))){
var inst_24979 = (state_25027[(8)]);
var inst_24993 = (state_25027[(7)]);
var inst_24993__$1 = cljs.core.seq.call(null,inst_24979);
var state_25027__$1 = (function (){var statearr_25051 = state_25027;
(statearr_25051[(7)] = inst_24993__$1);

return statearr_25051;
})();
if(inst_24993__$1){
var statearr_25052_25081 = state_25027__$1;
(statearr_25052_25081[(1)] = (14));

} else {
var statearr_25053_25082 = state_25027__$1;
(statearr_25053_25082[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (9))){
var inst_25015 = (state_25027[(2)]);
var inst_25016 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25027__$1 = (function (){var statearr_25054 = state_25027;
(statearr_25054[(15)] = inst_25015);

return statearr_25054;
})();
if(cljs.core.truth_(inst_25016)){
var statearr_25055_25083 = state_25027__$1;
(statearr_25055_25083[(1)] = (21));

} else {
var statearr_25056_25084 = state_25027__$1;
(statearr_25056_25084[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (5))){
var inst_24971 = cljs.core.async.close_BANG_.call(null,out);
var state_25027__$1 = state_25027;
var statearr_25057_25085 = state_25027__$1;
(statearr_25057_25085[(2)] = inst_24971);

(statearr_25057_25085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (14))){
var inst_24993 = (state_25027[(7)]);
var inst_24995 = cljs.core.chunked_seq_QMARK_.call(null,inst_24993);
var state_25027__$1 = state_25027;
if(inst_24995){
var statearr_25058_25086 = state_25027__$1;
(statearr_25058_25086[(1)] = (17));

} else {
var statearr_25059_25087 = state_25027__$1;
(statearr_25059_25087[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (16))){
var inst_25011 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25060_25088 = state_25027__$1;
(statearr_25060_25088[(2)] = inst_25011);

(statearr_25060_25088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (10))){
var inst_24982 = (state_25027[(10)]);
var inst_24980 = (state_25027[(12)]);
var inst_24987 = cljs.core._nth.call(null,inst_24980,inst_24982);
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25027__$1,(13),out,inst_24987);
} else {
if((state_val_25028 === (18))){
var inst_24993 = (state_25027[(7)]);
var inst_25002 = cljs.core.first.call(null,inst_24993);
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25027__$1,(20),out,inst_25002);
} else {
if((state_val_25028 === (8))){
var inst_24981 = (state_25027[(9)]);
var inst_24982 = (state_25027[(10)]);
var inst_24984 = (inst_24982 < inst_24981);
var inst_24985 = inst_24984;
var state_25027__$1 = state_25027;
if(cljs.core.truth_(inst_24985)){
var statearr_25061_25089 = state_25027__$1;
(statearr_25061_25089[(1)] = (10));

} else {
var statearr_25062_25090 = state_25027__$1;
(statearr_25062_25090[(1)] = (11));

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
});})(c__23411__auto__))
;
return ((function (switch__22892__auto__,c__23411__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22893__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22893__auto____0 = (function (){
var statearr_25063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25063[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22893__auto__);

(statearr_25063[(1)] = (1));

return statearr_25063;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22893__auto____1 = (function (state_25027){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_25027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e25064){if((e25064 instanceof Object)){
var ex__22896__auto__ = e25064;
var statearr_25065_25091 = state_25027;
(statearr_25065_25091[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25092 = state_25027;
state_25027 = G__25092;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22893__auto__ = function(state_25027){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22893__auto____1.call(this,state_25027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22893__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22893__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__))
})();
var state__23413__auto__ = (function (){var statearr_25066 = f__23412__auto__.call(null);
(statearr_25066[(6)] = c__23411__auto__);

return statearr_25066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__))
);

return c__23411__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25094 = arguments.length;
switch (G__25094) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__25097 = arguments.length;
switch (G__25097) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__25100 = arguments.length;
switch (G__25100) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23411__auto___25147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___25147,out){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___25147,out){
return (function (state_25124){
var state_val_25125 = (state_25124[(1)]);
if((state_val_25125 === (7))){
var inst_25119 = (state_25124[(2)]);
var state_25124__$1 = state_25124;
var statearr_25126_25148 = state_25124__$1;
(statearr_25126_25148[(2)] = inst_25119);

(statearr_25126_25148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (1))){
var inst_25101 = null;
var state_25124__$1 = (function (){var statearr_25127 = state_25124;
(statearr_25127[(7)] = inst_25101);

return statearr_25127;
})();
var statearr_25128_25149 = state_25124__$1;
(statearr_25128_25149[(2)] = null);

(statearr_25128_25149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (4))){
var inst_25104 = (state_25124[(8)]);
var inst_25104__$1 = (state_25124[(2)]);
var inst_25105 = (inst_25104__$1 == null);
var inst_25106 = cljs.core.not.call(null,inst_25105);
var state_25124__$1 = (function (){var statearr_25129 = state_25124;
(statearr_25129[(8)] = inst_25104__$1);

return statearr_25129;
})();
if(inst_25106){
var statearr_25130_25150 = state_25124__$1;
(statearr_25130_25150[(1)] = (5));

} else {
var statearr_25131_25151 = state_25124__$1;
(statearr_25131_25151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (6))){
var state_25124__$1 = state_25124;
var statearr_25132_25152 = state_25124__$1;
(statearr_25132_25152[(2)] = null);

(statearr_25132_25152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (3))){
var inst_25121 = (state_25124[(2)]);
var inst_25122 = cljs.core.async.close_BANG_.call(null,out);
var state_25124__$1 = (function (){var statearr_25133 = state_25124;
(statearr_25133[(9)] = inst_25121);

return statearr_25133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25124__$1,inst_25122);
} else {
if((state_val_25125 === (2))){
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25124__$1,(4),ch);
} else {
if((state_val_25125 === (11))){
var inst_25104 = (state_25124[(8)]);
var inst_25113 = (state_25124[(2)]);
var inst_25101 = inst_25104;
var state_25124__$1 = (function (){var statearr_25134 = state_25124;
(statearr_25134[(7)] = inst_25101);

(statearr_25134[(10)] = inst_25113);

return statearr_25134;
})();
var statearr_25135_25153 = state_25124__$1;
(statearr_25135_25153[(2)] = null);

(statearr_25135_25153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (9))){
var inst_25104 = (state_25124[(8)]);
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25124__$1,(11),out,inst_25104);
} else {
if((state_val_25125 === (5))){
var inst_25104 = (state_25124[(8)]);
var inst_25101 = (state_25124[(7)]);
var inst_25108 = cljs.core._EQ_.call(null,inst_25104,inst_25101);
var state_25124__$1 = state_25124;
if(inst_25108){
var statearr_25137_25154 = state_25124__$1;
(statearr_25137_25154[(1)] = (8));

} else {
var statearr_25138_25155 = state_25124__$1;
(statearr_25138_25155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (10))){
var inst_25116 = (state_25124[(2)]);
var state_25124__$1 = state_25124;
var statearr_25139_25156 = state_25124__$1;
(statearr_25139_25156[(2)] = inst_25116);

(statearr_25139_25156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (8))){
var inst_25101 = (state_25124[(7)]);
var tmp25136 = inst_25101;
var inst_25101__$1 = tmp25136;
var state_25124__$1 = (function (){var statearr_25140 = state_25124;
(statearr_25140[(7)] = inst_25101__$1);

return statearr_25140;
})();
var statearr_25141_25157 = state_25124__$1;
(statearr_25141_25157[(2)] = null);

(statearr_25141_25157[(1)] = (2));


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
});})(c__23411__auto___25147,out))
;
return ((function (switch__22892__auto__,c__23411__auto___25147,out){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_25142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25142[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_25142[(1)] = (1));

return statearr_25142;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_25124){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_25124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e25143){if((e25143 instanceof Object)){
var ex__22896__auto__ = e25143;
var statearr_25144_25158 = state_25124;
(statearr_25144_25158[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25159 = state_25124;
state_25124 = G__25159;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_25124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_25124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___25147,out))
})();
var state__23413__auto__ = (function (){var statearr_25145 = f__23412__auto__.call(null);
(statearr_25145[(6)] = c__23411__auto___25147);

return statearr_25145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___25147,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25161 = arguments.length;
switch (G__25161) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23411__auto___25227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___25227,out){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___25227,out){
return (function (state_25199){
var state_val_25200 = (state_25199[(1)]);
if((state_val_25200 === (7))){
var inst_25195 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
var statearr_25201_25228 = state_25199__$1;
(statearr_25201_25228[(2)] = inst_25195);

(statearr_25201_25228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (1))){
var inst_25162 = (new Array(n));
var inst_25163 = inst_25162;
var inst_25164 = (0);
var state_25199__$1 = (function (){var statearr_25202 = state_25199;
(statearr_25202[(7)] = inst_25164);

(statearr_25202[(8)] = inst_25163);

return statearr_25202;
})();
var statearr_25203_25229 = state_25199__$1;
(statearr_25203_25229[(2)] = null);

(statearr_25203_25229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (4))){
var inst_25167 = (state_25199[(9)]);
var inst_25167__$1 = (state_25199[(2)]);
var inst_25168 = (inst_25167__$1 == null);
var inst_25169 = cljs.core.not.call(null,inst_25168);
var state_25199__$1 = (function (){var statearr_25204 = state_25199;
(statearr_25204[(9)] = inst_25167__$1);

return statearr_25204;
})();
if(inst_25169){
var statearr_25205_25230 = state_25199__$1;
(statearr_25205_25230[(1)] = (5));

} else {
var statearr_25206_25231 = state_25199__$1;
(statearr_25206_25231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (15))){
var inst_25189 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
var statearr_25207_25232 = state_25199__$1;
(statearr_25207_25232[(2)] = inst_25189);

(statearr_25207_25232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (13))){
var state_25199__$1 = state_25199;
var statearr_25208_25233 = state_25199__$1;
(statearr_25208_25233[(2)] = null);

(statearr_25208_25233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (6))){
var inst_25164 = (state_25199[(7)]);
var inst_25185 = (inst_25164 > (0));
var state_25199__$1 = state_25199;
if(cljs.core.truth_(inst_25185)){
var statearr_25209_25234 = state_25199__$1;
(statearr_25209_25234[(1)] = (12));

} else {
var statearr_25210_25235 = state_25199__$1;
(statearr_25210_25235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (3))){
var inst_25197 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25199__$1,inst_25197);
} else {
if((state_val_25200 === (12))){
var inst_25163 = (state_25199[(8)]);
var inst_25187 = cljs.core.vec.call(null,inst_25163);
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25199__$1,(15),out,inst_25187);
} else {
if((state_val_25200 === (2))){
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25199__$1,(4),ch);
} else {
if((state_val_25200 === (11))){
var inst_25179 = (state_25199[(2)]);
var inst_25180 = (new Array(n));
var inst_25163 = inst_25180;
var inst_25164 = (0);
var state_25199__$1 = (function (){var statearr_25211 = state_25199;
(statearr_25211[(7)] = inst_25164);

(statearr_25211[(8)] = inst_25163);

(statearr_25211[(10)] = inst_25179);

return statearr_25211;
})();
var statearr_25212_25236 = state_25199__$1;
(statearr_25212_25236[(2)] = null);

(statearr_25212_25236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (9))){
var inst_25163 = (state_25199[(8)]);
var inst_25177 = cljs.core.vec.call(null,inst_25163);
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25199__$1,(11),out,inst_25177);
} else {
if((state_val_25200 === (5))){
var inst_25164 = (state_25199[(7)]);
var inst_25172 = (state_25199[(11)]);
var inst_25163 = (state_25199[(8)]);
var inst_25167 = (state_25199[(9)]);
var inst_25171 = (inst_25163[inst_25164] = inst_25167);
var inst_25172__$1 = (inst_25164 + (1));
var inst_25173 = (inst_25172__$1 < n);
var state_25199__$1 = (function (){var statearr_25213 = state_25199;
(statearr_25213[(12)] = inst_25171);

(statearr_25213[(11)] = inst_25172__$1);

return statearr_25213;
})();
if(cljs.core.truth_(inst_25173)){
var statearr_25214_25237 = state_25199__$1;
(statearr_25214_25237[(1)] = (8));

} else {
var statearr_25215_25238 = state_25199__$1;
(statearr_25215_25238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (14))){
var inst_25192 = (state_25199[(2)]);
var inst_25193 = cljs.core.async.close_BANG_.call(null,out);
var state_25199__$1 = (function (){var statearr_25217 = state_25199;
(statearr_25217[(13)] = inst_25192);

return statearr_25217;
})();
var statearr_25218_25239 = state_25199__$1;
(statearr_25218_25239[(2)] = inst_25193);

(statearr_25218_25239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (10))){
var inst_25183 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
var statearr_25219_25240 = state_25199__$1;
(statearr_25219_25240[(2)] = inst_25183);

(statearr_25219_25240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (8))){
var inst_25172 = (state_25199[(11)]);
var inst_25163 = (state_25199[(8)]);
var tmp25216 = inst_25163;
var inst_25163__$1 = tmp25216;
var inst_25164 = inst_25172;
var state_25199__$1 = (function (){var statearr_25220 = state_25199;
(statearr_25220[(7)] = inst_25164);

(statearr_25220[(8)] = inst_25163__$1);

return statearr_25220;
})();
var statearr_25221_25241 = state_25199__$1;
(statearr_25221_25241[(2)] = null);

(statearr_25221_25241[(1)] = (2));


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
});})(c__23411__auto___25227,out))
;
return ((function (switch__22892__auto__,c__23411__auto___25227,out){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_25222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25222[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_25222[(1)] = (1));

return statearr_25222;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_25199){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_25199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e25223){if((e25223 instanceof Object)){
var ex__22896__auto__ = e25223;
var statearr_25224_25242 = state_25199;
(statearr_25224_25242[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25243 = state_25199;
state_25199 = G__25243;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_25199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_25199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___25227,out))
})();
var state__23413__auto__ = (function (){var statearr_25225 = f__23412__auto__.call(null);
(statearr_25225[(6)] = c__23411__auto___25227);

return statearr_25225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___25227,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25245 = arguments.length;
switch (G__25245) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23411__auto___25315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___25315,out){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___25315,out){
return (function (state_25287){
var state_val_25288 = (state_25287[(1)]);
if((state_val_25288 === (7))){
var inst_25283 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25289_25316 = state_25287__$1;
(statearr_25289_25316[(2)] = inst_25283);

(statearr_25289_25316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (1))){
var inst_25246 = [];
var inst_25247 = inst_25246;
var inst_25248 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25287__$1 = (function (){var statearr_25290 = state_25287;
(statearr_25290[(7)] = inst_25247);

(statearr_25290[(8)] = inst_25248);

return statearr_25290;
})();
var statearr_25291_25317 = state_25287__$1;
(statearr_25291_25317[(2)] = null);

(statearr_25291_25317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (4))){
var inst_25251 = (state_25287[(9)]);
var inst_25251__$1 = (state_25287[(2)]);
var inst_25252 = (inst_25251__$1 == null);
var inst_25253 = cljs.core.not.call(null,inst_25252);
var state_25287__$1 = (function (){var statearr_25292 = state_25287;
(statearr_25292[(9)] = inst_25251__$1);

return statearr_25292;
})();
if(inst_25253){
var statearr_25293_25318 = state_25287__$1;
(statearr_25293_25318[(1)] = (5));

} else {
var statearr_25294_25319 = state_25287__$1;
(statearr_25294_25319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (15))){
var inst_25277 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25295_25320 = state_25287__$1;
(statearr_25295_25320[(2)] = inst_25277);

(statearr_25295_25320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (13))){
var state_25287__$1 = state_25287;
var statearr_25296_25321 = state_25287__$1;
(statearr_25296_25321[(2)] = null);

(statearr_25296_25321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (6))){
var inst_25247 = (state_25287[(7)]);
var inst_25272 = inst_25247.length;
var inst_25273 = (inst_25272 > (0));
var state_25287__$1 = state_25287;
if(cljs.core.truth_(inst_25273)){
var statearr_25297_25322 = state_25287__$1;
(statearr_25297_25322[(1)] = (12));

} else {
var statearr_25298_25323 = state_25287__$1;
(statearr_25298_25323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (3))){
var inst_25285 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25287__$1,inst_25285);
} else {
if((state_val_25288 === (12))){
var inst_25247 = (state_25287[(7)]);
var inst_25275 = cljs.core.vec.call(null,inst_25247);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25287__$1,(15),out,inst_25275);
} else {
if((state_val_25288 === (2))){
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25287__$1,(4),ch);
} else {
if((state_val_25288 === (11))){
var inst_25255 = (state_25287[(10)]);
var inst_25251 = (state_25287[(9)]);
var inst_25265 = (state_25287[(2)]);
var inst_25266 = [];
var inst_25267 = inst_25266.push(inst_25251);
var inst_25247 = inst_25266;
var inst_25248 = inst_25255;
var state_25287__$1 = (function (){var statearr_25299 = state_25287;
(statearr_25299[(7)] = inst_25247);

(statearr_25299[(11)] = inst_25265);

(statearr_25299[(12)] = inst_25267);

(statearr_25299[(8)] = inst_25248);

return statearr_25299;
})();
var statearr_25300_25324 = state_25287__$1;
(statearr_25300_25324[(2)] = null);

(statearr_25300_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (9))){
var inst_25247 = (state_25287[(7)]);
var inst_25263 = cljs.core.vec.call(null,inst_25247);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25287__$1,(11),out,inst_25263);
} else {
if((state_val_25288 === (5))){
var inst_25255 = (state_25287[(10)]);
var inst_25248 = (state_25287[(8)]);
var inst_25251 = (state_25287[(9)]);
var inst_25255__$1 = f.call(null,inst_25251);
var inst_25256 = cljs.core._EQ_.call(null,inst_25255__$1,inst_25248);
var inst_25257 = cljs.core.keyword_identical_QMARK_.call(null,inst_25248,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25258 = ((inst_25256) || (inst_25257));
var state_25287__$1 = (function (){var statearr_25301 = state_25287;
(statearr_25301[(10)] = inst_25255__$1);

return statearr_25301;
})();
if(cljs.core.truth_(inst_25258)){
var statearr_25302_25325 = state_25287__$1;
(statearr_25302_25325[(1)] = (8));

} else {
var statearr_25303_25326 = state_25287__$1;
(statearr_25303_25326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (14))){
var inst_25280 = (state_25287[(2)]);
var inst_25281 = cljs.core.async.close_BANG_.call(null,out);
var state_25287__$1 = (function (){var statearr_25305 = state_25287;
(statearr_25305[(13)] = inst_25280);

return statearr_25305;
})();
var statearr_25306_25327 = state_25287__$1;
(statearr_25306_25327[(2)] = inst_25281);

(statearr_25306_25327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (10))){
var inst_25270 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25307_25328 = state_25287__$1;
(statearr_25307_25328[(2)] = inst_25270);

(statearr_25307_25328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (8))){
var inst_25247 = (state_25287[(7)]);
var inst_25255 = (state_25287[(10)]);
var inst_25251 = (state_25287[(9)]);
var inst_25260 = inst_25247.push(inst_25251);
var tmp25304 = inst_25247;
var inst_25247__$1 = tmp25304;
var inst_25248 = inst_25255;
var state_25287__$1 = (function (){var statearr_25308 = state_25287;
(statearr_25308[(7)] = inst_25247__$1);

(statearr_25308[(14)] = inst_25260);

(statearr_25308[(8)] = inst_25248);

return statearr_25308;
})();
var statearr_25309_25329 = state_25287__$1;
(statearr_25309_25329[(2)] = null);

(statearr_25309_25329[(1)] = (2));


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
});})(c__23411__auto___25315,out))
;
return ((function (switch__22892__auto__,c__23411__auto___25315,out){
return (function() {
var cljs$core$async$state_machine__22893__auto__ = null;
var cljs$core$async$state_machine__22893__auto____0 = (function (){
var statearr_25310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25310[(0)] = cljs$core$async$state_machine__22893__auto__);

(statearr_25310[(1)] = (1));

return statearr_25310;
});
var cljs$core$async$state_machine__22893__auto____1 = (function (state_25287){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_25287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e25311){if((e25311 instanceof Object)){
var ex__22896__auto__ = e25311;
var statearr_25312_25330 = state_25287;
(statearr_25312_25330[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25331 = state_25287;
state_25287 = G__25331;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
cljs$core$async$state_machine__22893__auto__ = function(state_25287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22893__auto____1.call(this,state_25287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22893__auto____0;
cljs$core$async$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22893__auto____1;
return cljs$core$async$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___25315,out))
})();
var state__23413__auto__ = (function (){var statearr_25313 = f__23412__auto__.call(null);
(statearr_25313[(6)] = c__23411__auto___25315);

return statearr_25313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___25315,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1522701076161
