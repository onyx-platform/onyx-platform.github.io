// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t38092 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38092 = (function (fn_handler,f,meta38093){
this.fn_handler = fn_handler;
this.f = f;
this.meta38093 = meta38093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38094,meta38093__$1){
var self__ = this;
var _38094__$1 = this;
return (new cljs.core.async.t38092(self__.fn_handler,self__.f,meta38093__$1));
});

cljs.core.async.t38092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38094){
var self__ = this;
var _38094__$1 = this;
return self__.meta38093;
});

cljs.core.async.t38092.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t38092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t38092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta38093","meta38093",-130545774,null)], null);
});

cljs.core.async.t38092.cljs$lang$type = true;

cljs.core.async.t38092.cljs$lang$ctorStr = "cljs.core.async/t38092";

cljs.core.async.t38092.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t38092");
});

cljs.core.async.__GT_t38092 = (function cljs$core$async$fn_handler_$___GT_t38092(fn_handler__$1,f__$1,meta38093){
return (new cljs.core.async.t38092(fn_handler__$1,f__$1,meta38093));
});

}

return (new cljs.core.async.t38092(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
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
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args38097 = [];
var len__19923__auto___38105 = arguments.length;
var i__19924__auto___38106 = (0);
while(true){
if((i__19924__auto___38106 < len__19923__auto___38105)){
args38097.push((arguments[i__19924__auto___38106]));

var G__38107 = (i__19924__auto___38106 + (1));
i__19924__auto___38106 = G__38107;
continue;
} else {
}
break;
}

var G__38099 = args38097.length;
switch (G__38099) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38097.length)].join('')));

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
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args38110 = [];
var len__19923__auto___38115 = arguments.length;
var i__19924__auto___38116 = (0);
while(true){
if((i__19924__auto___38116 < len__19923__auto___38115)){
args38110.push((arguments[i__19924__auto___38116]));

var G__38117 = (i__19924__auto___38116 + (1));
i__19924__auto___38116 = G__38117;
continue;
} else {
}
break;
}

var G__38112 = args38110.length;
switch (G__38112) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38110.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38120 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38120);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38120,ret){
return (function (){
return fn1.call(null,val_38120);
});})(val_38120,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args38121 = [];
var len__19923__auto___38124 = arguments.length;
var i__19924__auto___38125 = (0);
while(true){
if((i__19924__auto___38125 < len__19923__auto___38124)){
args38121.push((arguments[i__19924__auto___38125]));

var G__38126 = (i__19924__auto___38125 + (1));
i__19924__auto___38125 = G__38126;
continue;
} else {
}
break;
}

var G__38123 = args38121.length;
switch (G__38123) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38121.length)].join('')));

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
var n__19768__auto___38128 = n;
var x_38129 = (0);
while(true){
if((x_38129 < n__19768__auto___38128)){
(a[x_38129] = (0));

var G__38130 = (x_38129 + (1));
x_38129 = G__38130;
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

var G__38132 = (i + (1));
i = G__38132;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t38142 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38142 = (function (alt_flag,flag,meta38143){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta38143 = meta38143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38144,meta38143__$1){
var self__ = this;
var _38144__$1 = this;
return (new cljs.core.async.t38142(self__.alt_flag,self__.flag,meta38143__$1));
});})(flag))
;

cljs.core.async.t38142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38144){
var self__ = this;
var _38144__$1 = this;
return self__.meta38143;
});})(flag))
;

cljs.core.async.t38142.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t38142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t38142.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38143","meta38143",589722878,null)], null);
});})(flag))
;

cljs.core.async.t38142.cljs$lang$type = true;

cljs.core.async.t38142.cljs$lang$ctorStr = "cljs.core.async/t38142";

cljs.core.async.t38142.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t38142");
});})(flag))
;

cljs.core.async.__GT_t38142 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t38142(alt_flag__$1,flag__$1,meta38143){
return (new cljs.core.async.t38142(alt_flag__$1,flag__$1,meta38143));
});})(flag))
;

}

return (new cljs.core.async.t38142(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t38152 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38152 = (function (alt_handler,flag,cb,meta38153){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta38153 = meta38153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38154,meta38153__$1){
var self__ = this;
var _38154__$1 = this;
return (new cljs.core.async.t38152(self__.alt_handler,self__.flag,self__.cb,meta38153__$1));
});

cljs.core.async.t38152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38154){
var self__ = this;
var _38154__$1 = this;
return self__.meta38153;
});

cljs.core.async.t38152.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t38152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t38152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38153","meta38153",421627477,null)], null);
});

cljs.core.async.t38152.cljs$lang$type = true;

cljs.core.async.t38152.cljs$lang$ctorStr = "cljs.core.async/t38152";

cljs.core.async.t38152.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t38152");
});

cljs.core.async.__GT_t38152 = (function cljs$core$async$alt_handler_$___GT_t38152(alt_handler__$1,flag__$1,cb__$1,meta38153){
return (new cljs.core.async.t38152(alt_handler__$1,flag__$1,cb__$1,meta38153));
});

}

return (new cljs.core.async.t38152(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38162_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38162_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38163_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38163_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18884__auto__ = wport;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38167 = (i + (1));
i = G__38167;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18884__auto__ = ret;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18872__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18872__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18872__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__19930__auto__ = [];
var len__19923__auto___38173 = arguments.length;
var i__19924__auto___38174 = (0);
while(true){
if((i__19924__auto___38174 < len__19923__auto___38173)){
args__19930__auto__.push((arguments[i__19924__auto___38174]));

var G__38175 = (i__19924__auto___38174 + (1));
i__19924__auto___38174 = G__38175;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38170){
var map__38171 = p__38170;
var map__38171__$1 = ((((!((map__38171 == null)))?((((map__38171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38171):map__38171);
var opts = map__38171__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38168){
var G__38169 = cljs.core.first.call(null,seq38168);
var seq38168__$1 = cljs.core.next.call(null,seq38168);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38169,seq38168__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args38176 = [];
var len__19923__auto___38226 = arguments.length;
var i__19924__auto___38227 = (0);
while(true){
if((i__19924__auto___38227 < len__19923__auto___38226)){
args38176.push((arguments[i__19924__auto___38227]));

var G__38228 = (i__19924__auto___38227 + (1));
i__19924__auto___38227 = G__38228;
continue;
} else {
}
break;
}

var G__38178 = args38176.length;
switch (G__38178) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38176.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27278__auto___38230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___38230){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___38230){
return (function (state_38202){
var state_val_38203 = (state_38202[(1)]);
if((state_val_38203 === (7))){
var inst_38198 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38204_38231 = state_38202__$1;
(statearr_38204_38231[(2)] = inst_38198);

(statearr_38204_38231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (1))){
var state_38202__$1 = state_38202;
var statearr_38205_38232 = state_38202__$1;
(statearr_38205_38232[(2)] = null);

(statearr_38205_38232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (4))){
var inst_38181 = (state_38202[(7)]);
var inst_38181__$1 = (state_38202[(2)]);
var inst_38182 = (inst_38181__$1 == null);
var state_38202__$1 = (function (){var statearr_38206 = state_38202;
(statearr_38206[(7)] = inst_38181__$1);

return statearr_38206;
})();
if(cljs.core.truth_(inst_38182)){
var statearr_38207_38233 = state_38202__$1;
(statearr_38207_38233[(1)] = (5));

} else {
var statearr_38208_38234 = state_38202__$1;
(statearr_38208_38234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (13))){
var state_38202__$1 = state_38202;
var statearr_38209_38235 = state_38202__$1;
(statearr_38209_38235[(2)] = null);

(statearr_38209_38235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (6))){
var inst_38181 = (state_38202[(7)]);
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38202__$1,(11),to,inst_38181);
} else {
if((state_val_38203 === (3))){
var inst_38200 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38202__$1,inst_38200);
} else {
if((state_val_38203 === (12))){
var state_38202__$1 = state_38202;
var statearr_38210_38236 = state_38202__$1;
(statearr_38210_38236[(2)] = null);

(statearr_38210_38236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (2))){
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38202__$1,(4),from);
} else {
if((state_val_38203 === (11))){
var inst_38191 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
if(cljs.core.truth_(inst_38191)){
var statearr_38211_38237 = state_38202__$1;
(statearr_38211_38237[(1)] = (12));

} else {
var statearr_38212_38238 = state_38202__$1;
(statearr_38212_38238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (9))){
var state_38202__$1 = state_38202;
var statearr_38213_38239 = state_38202__$1;
(statearr_38213_38239[(2)] = null);

(statearr_38213_38239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (5))){
var state_38202__$1 = state_38202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38214_38240 = state_38202__$1;
(statearr_38214_38240[(1)] = (8));

} else {
var statearr_38215_38241 = state_38202__$1;
(statearr_38215_38241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (14))){
var inst_38196 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38216_38242 = state_38202__$1;
(statearr_38216_38242[(2)] = inst_38196);

(statearr_38216_38242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (10))){
var inst_38188 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38217_38243 = state_38202__$1;
(statearr_38217_38243[(2)] = inst_38188);

(statearr_38217_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (8))){
var inst_38185 = cljs.core.async.close_BANG_.call(null,to);
var state_38202__$1 = state_38202;
var statearr_38218_38245 = state_38202__$1;
(statearr_38218_38245[(2)] = inst_38185);

(statearr_38218_38245[(1)] = (10));


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
});})(c__27278__auto___38230))
;
return ((function (switch__27213__auto__,c__27278__auto___38230){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_38222 = [null,null,null,null,null,null,null,null];
(statearr_38222[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_38222[(1)] = (1));

return statearr_38222;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_38202){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38223){if((e38223 instanceof Object)){
var ex__27217__auto__ = e38223;
var statearr_38224_38248 = state_38202;
(statearr_38224_38248[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38249 = state_38202;
state_38202 = G__38249;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_38202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_38202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___38230))
})();
var state__27280__auto__ = (function (){var statearr_38225 = f__27279__auto__.call(null);
(statearr_38225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___38230);

return statearr_38225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___38230))
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
return (function (p__38448){
var vec__38449 = p__38448;
var v = cljs.core.nth.call(null,vec__38449,(0),null);
var p = cljs.core.nth.call(null,vec__38449,(1),null);
var job = vec__38449;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27278__auto___38633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___38633,res,vec__38449,v,p,job,jobs,results){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___38633,res,vec__38449,v,p,job,jobs,results){
return (function (state_38454){
var state_val_38455 = (state_38454[(1)]);
if((state_val_38455 === (1))){
var state_38454__$1 = state_38454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38454__$1,(2),res,v);
} else {
if((state_val_38455 === (2))){
var inst_38451 = (state_38454[(2)]);
var inst_38452 = cljs.core.async.close_BANG_.call(null,res);
var state_38454__$1 = (function (){var statearr_38456 = state_38454;
(statearr_38456[(7)] = inst_38451);

return statearr_38456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38454__$1,inst_38452);
} else {
return null;
}
}
});})(c__27278__auto___38633,res,vec__38449,v,p,job,jobs,results))
;
return ((function (switch__27213__auto__,c__27278__auto___38633,res,vec__38449,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0 = (function (){
var statearr_38460 = [null,null,null,null,null,null,null,null];
(statearr_38460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__);

(statearr_38460[(1)] = (1));

return statearr_38460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1 = (function (state_38454){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38461){if((e38461 instanceof Object)){
var ex__27217__auto__ = e38461;
var statearr_38462_38635 = state_38454;
(statearr_38462_38635[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38636 = state_38454;
state_38454 = G__38636;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = function(state_38454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1.call(this,state_38454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___38633,res,vec__38449,v,p,job,jobs,results))
})();
var state__27280__auto__ = (function (){var statearr_38463 = f__27279__auto__.call(null);
(statearr_38463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___38633);

return statearr_38463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___38633,res,vec__38449,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38465){
var vec__38466 = p__38465;
var v = cljs.core.nth.call(null,vec__38466,(0),null);
var p = cljs.core.nth.call(null,vec__38466,(1),null);
var job = vec__38466;
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
var n__19768__auto___38637 = n;
var __38638 = (0);
while(true){
if((__38638 < n__19768__auto___38637)){
var G__38467_38639 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38467_38639) {
case "compute":
var c__27278__auto___38641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38638,c__27278__auto___38641,G__38467_38639,n__19768__auto___38637,jobs,results,process,async){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (__38638,c__27278__auto___38641,G__38467_38639,n__19768__auto___38637,jobs,results,process,async){
return (function (state_38480){
var state_val_38481 = (state_38480[(1)]);
if((state_val_38481 === (1))){
var state_38480__$1 = state_38480;
var statearr_38482_38642 = state_38480__$1;
(statearr_38482_38642[(2)] = null);

(statearr_38482_38642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (2))){
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38480__$1,(4),jobs);
} else {
if((state_val_38481 === (3))){
var inst_38478 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38480__$1,inst_38478);
} else {
if((state_val_38481 === (4))){
var inst_38470 = (state_38480[(2)]);
var inst_38471 = process.call(null,inst_38470);
var state_38480__$1 = state_38480;
if(cljs.core.truth_(inst_38471)){
var statearr_38483_38643 = state_38480__$1;
(statearr_38483_38643[(1)] = (5));

} else {
var statearr_38484_38644 = state_38480__$1;
(statearr_38484_38644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (5))){
var state_38480__$1 = state_38480;
var statearr_38485_38645 = state_38480__$1;
(statearr_38485_38645[(2)] = null);

(statearr_38485_38645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (6))){
var state_38480__$1 = state_38480;
var statearr_38486_38646 = state_38480__$1;
(statearr_38486_38646[(2)] = null);

(statearr_38486_38646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (7))){
var inst_38476 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38487_38647 = state_38480__$1;
(statearr_38487_38647[(2)] = inst_38476);

(statearr_38487_38647[(1)] = (3));


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
});})(__38638,c__27278__auto___38641,G__38467_38639,n__19768__auto___38637,jobs,results,process,async))
;
return ((function (__38638,switch__27213__auto__,c__27278__auto___38641,G__38467_38639,n__19768__auto___38637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0 = (function (){
var statearr_38491 = [null,null,null,null,null,null,null];
(statearr_38491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__);

(statearr_38491[(1)] = (1));

return statearr_38491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1 = (function (state_38480){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38492){if((e38492 instanceof Object)){
var ex__27217__auto__ = e38492;
var statearr_38493_38648 = state_38480;
(statearr_38493_38648[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38649 = state_38480;
state_38480 = G__38649;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = function(state_38480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1.call(this,state_38480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__;
})()
;})(__38638,switch__27213__auto__,c__27278__auto___38641,G__38467_38639,n__19768__auto___38637,jobs,results,process,async))
})();
var state__27280__auto__ = (function (){var statearr_38494 = f__27279__auto__.call(null);
(statearr_38494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___38641);

return statearr_38494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(__38638,c__27278__auto___38641,G__38467_38639,n__19768__auto___38637,jobs,results,process,async))
);


break;
case "async":
var c__27278__auto___38650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38638,c__27278__auto___38650,G__38467_38639,n__19768__auto___38637,jobs,results,process,async){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (__38638,c__27278__auto___38650,G__38467_38639,n__19768__auto___38637,jobs,results,process,async){
return (function (state_38507){
var state_val_38508 = (state_38507[(1)]);
if((state_val_38508 === (1))){
var state_38507__$1 = state_38507;
var statearr_38509_38651 = state_38507__$1;
(statearr_38509_38651[(2)] = null);

(statearr_38509_38651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (2))){
var state_38507__$1 = state_38507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38507__$1,(4),jobs);
} else {
if((state_val_38508 === (3))){
var inst_38505 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38507__$1,inst_38505);
} else {
if((state_val_38508 === (4))){
var inst_38497 = (state_38507[(2)]);
var inst_38498 = async.call(null,inst_38497);
var state_38507__$1 = state_38507;
if(cljs.core.truth_(inst_38498)){
var statearr_38510_38652 = state_38507__$1;
(statearr_38510_38652[(1)] = (5));

} else {
var statearr_38511_38653 = state_38507__$1;
(statearr_38511_38653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (5))){
var state_38507__$1 = state_38507;
var statearr_38512_38654 = state_38507__$1;
(statearr_38512_38654[(2)] = null);

(statearr_38512_38654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (6))){
var state_38507__$1 = state_38507;
var statearr_38513_38661 = state_38507__$1;
(statearr_38513_38661[(2)] = null);

(statearr_38513_38661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (7))){
var inst_38503 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38514_38663 = state_38507__$1;
(statearr_38514_38663[(2)] = inst_38503);

(statearr_38514_38663[(1)] = (3));


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
});})(__38638,c__27278__auto___38650,G__38467_38639,n__19768__auto___38637,jobs,results,process,async))
;
return ((function (__38638,switch__27213__auto__,c__27278__auto___38650,G__38467_38639,n__19768__auto___38637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0 = (function (){
var statearr_38518 = [null,null,null,null,null,null,null];
(statearr_38518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__);

(statearr_38518[(1)] = (1));

return statearr_38518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1 = (function (state_38507){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38519){if((e38519 instanceof Object)){
var ex__27217__auto__ = e38519;
var statearr_38520_38664 = state_38507;
(statearr_38520_38664[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38665 = state_38507;
state_38507 = G__38665;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = function(state_38507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1.call(this,state_38507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__;
})()
;})(__38638,switch__27213__auto__,c__27278__auto___38650,G__38467_38639,n__19768__auto___38637,jobs,results,process,async))
})();
var state__27280__auto__ = (function (){var statearr_38521 = f__27279__auto__.call(null);
(statearr_38521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___38650);

return statearr_38521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(__38638,c__27278__auto___38650,G__38467_38639,n__19768__auto___38637,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38666 = (__38638 + (1));
__38638 = G__38666;
continue;
} else {
}
break;
}

var c__27278__auto___38667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___38667,jobs,results,process,async){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___38667,jobs,results,process,async){
return (function (state_38543){
var state_val_38544 = (state_38543[(1)]);
if((state_val_38544 === (1))){
var state_38543__$1 = state_38543;
var statearr_38545_38668 = state_38543__$1;
(statearr_38545_38668[(2)] = null);

(statearr_38545_38668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38544 === (2))){
var state_38543__$1 = state_38543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38543__$1,(4),from);
} else {
if((state_val_38544 === (3))){
var inst_38541 = (state_38543[(2)]);
var state_38543__$1 = state_38543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38543__$1,inst_38541);
} else {
if((state_val_38544 === (4))){
var inst_38524 = (state_38543[(7)]);
var inst_38524__$1 = (state_38543[(2)]);
var inst_38525 = (inst_38524__$1 == null);
var state_38543__$1 = (function (){var statearr_38546 = state_38543;
(statearr_38546[(7)] = inst_38524__$1);

return statearr_38546;
})();
if(cljs.core.truth_(inst_38525)){
var statearr_38547_38671 = state_38543__$1;
(statearr_38547_38671[(1)] = (5));

} else {
var statearr_38548_38672 = state_38543__$1;
(statearr_38548_38672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38544 === (5))){
var inst_38527 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38543__$1 = state_38543;
var statearr_38549_38674 = state_38543__$1;
(statearr_38549_38674[(2)] = inst_38527);

(statearr_38549_38674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38544 === (6))){
var inst_38529 = (state_38543[(8)]);
var inst_38524 = (state_38543[(7)]);
var inst_38529__$1 = cljs.core.async.chan.call(null,(1));
var inst_38530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38531 = [inst_38524,inst_38529__$1];
var inst_38532 = (new cljs.core.PersistentVector(null,2,(5),inst_38530,inst_38531,null));
var state_38543__$1 = (function (){var statearr_38550 = state_38543;
(statearr_38550[(8)] = inst_38529__$1);

return statearr_38550;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38543__$1,(8),jobs,inst_38532);
} else {
if((state_val_38544 === (7))){
var inst_38539 = (state_38543[(2)]);
var state_38543__$1 = state_38543;
var statearr_38551_38680 = state_38543__$1;
(statearr_38551_38680[(2)] = inst_38539);

(statearr_38551_38680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38544 === (8))){
var inst_38529 = (state_38543[(8)]);
var inst_38534 = (state_38543[(2)]);
var state_38543__$1 = (function (){var statearr_38552 = state_38543;
(statearr_38552[(9)] = inst_38534);

return statearr_38552;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38543__$1,(9),results,inst_38529);
} else {
if((state_val_38544 === (9))){
var inst_38536 = (state_38543[(2)]);
var state_38543__$1 = (function (){var statearr_38553 = state_38543;
(statearr_38553[(10)] = inst_38536);

return statearr_38553;
})();
var statearr_38554_38681 = state_38543__$1;
(statearr_38554_38681[(2)] = null);

(statearr_38554_38681[(1)] = (2));


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
});})(c__27278__auto___38667,jobs,results,process,async))
;
return ((function (switch__27213__auto__,c__27278__auto___38667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0 = (function (){
var statearr_38558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__);

(statearr_38558[(1)] = (1));

return statearr_38558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1 = (function (state_38543){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38559){if((e38559 instanceof Object)){
var ex__27217__auto__ = e38559;
var statearr_38560_38684 = state_38543;
(statearr_38560_38684[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38685 = state_38543;
state_38543 = G__38685;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = function(state_38543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1.call(this,state_38543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___38667,jobs,results,process,async))
})();
var state__27280__auto__ = (function (){var statearr_38561 = f__27279__auto__.call(null);
(statearr_38561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___38667);

return statearr_38561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___38667,jobs,results,process,async))
);


var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__,jobs,results,process,async){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__,jobs,results,process,async){
return (function (state_38599){
var state_val_38600 = (state_38599[(1)]);
if((state_val_38600 === (7))){
var inst_38595 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38601_38688 = state_38599__$1;
(statearr_38601_38688[(2)] = inst_38595);

(statearr_38601_38688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (20))){
var state_38599__$1 = state_38599;
var statearr_38602_38689 = state_38599__$1;
(statearr_38602_38689[(2)] = null);

(statearr_38602_38689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (1))){
var state_38599__$1 = state_38599;
var statearr_38603_38690 = state_38599__$1;
(statearr_38603_38690[(2)] = null);

(statearr_38603_38690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (4))){
var inst_38564 = (state_38599[(7)]);
var inst_38564__$1 = (state_38599[(2)]);
var inst_38565 = (inst_38564__$1 == null);
var state_38599__$1 = (function (){var statearr_38604 = state_38599;
(statearr_38604[(7)] = inst_38564__$1);

return statearr_38604;
})();
if(cljs.core.truth_(inst_38565)){
var statearr_38605_38694 = state_38599__$1;
(statearr_38605_38694[(1)] = (5));

} else {
var statearr_38606_38695 = state_38599__$1;
(statearr_38606_38695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (15))){
var inst_38577 = (state_38599[(8)]);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38599__$1,(18),to,inst_38577);
} else {
if((state_val_38600 === (21))){
var inst_38590 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38607_38698 = state_38599__$1;
(statearr_38607_38698[(2)] = inst_38590);

(statearr_38607_38698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (13))){
var inst_38592 = (state_38599[(2)]);
var state_38599__$1 = (function (){var statearr_38608 = state_38599;
(statearr_38608[(9)] = inst_38592);

return statearr_38608;
})();
var statearr_38609_38699 = state_38599__$1;
(statearr_38609_38699[(2)] = null);

(statearr_38609_38699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (6))){
var inst_38564 = (state_38599[(7)]);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38599__$1,(11),inst_38564);
} else {
if((state_val_38600 === (17))){
var inst_38585 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
if(cljs.core.truth_(inst_38585)){
var statearr_38610_38701 = state_38599__$1;
(statearr_38610_38701[(1)] = (19));

} else {
var statearr_38611_38702 = state_38599__$1;
(statearr_38611_38702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (3))){
var inst_38597 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38599__$1,inst_38597);
} else {
if((state_val_38600 === (12))){
var inst_38574 = (state_38599[(10)]);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38599__$1,(14),inst_38574);
} else {
if((state_val_38600 === (2))){
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38599__$1,(4),results);
} else {
if((state_val_38600 === (19))){
var state_38599__$1 = state_38599;
var statearr_38612_38710 = state_38599__$1;
(statearr_38612_38710[(2)] = null);

(statearr_38612_38710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (11))){
var inst_38574 = (state_38599[(2)]);
var state_38599__$1 = (function (){var statearr_38613 = state_38599;
(statearr_38613[(10)] = inst_38574);

return statearr_38613;
})();
var statearr_38614_38711 = state_38599__$1;
(statearr_38614_38711[(2)] = null);

(statearr_38614_38711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (9))){
var state_38599__$1 = state_38599;
var statearr_38615_38712 = state_38599__$1;
(statearr_38615_38712[(2)] = null);

(statearr_38615_38712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (5))){
var state_38599__$1 = state_38599;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38616_38713 = state_38599__$1;
(statearr_38616_38713[(1)] = (8));

} else {
var statearr_38617_38714 = state_38599__$1;
(statearr_38617_38714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (14))){
var inst_38577 = (state_38599[(8)]);
var inst_38579 = (state_38599[(11)]);
var inst_38577__$1 = (state_38599[(2)]);
var inst_38578 = (inst_38577__$1 == null);
var inst_38579__$1 = cljs.core.not.call(null,inst_38578);
var state_38599__$1 = (function (){var statearr_38618 = state_38599;
(statearr_38618[(8)] = inst_38577__$1);

(statearr_38618[(11)] = inst_38579__$1);

return statearr_38618;
})();
if(inst_38579__$1){
var statearr_38619_38715 = state_38599__$1;
(statearr_38619_38715[(1)] = (15));

} else {
var statearr_38620_38716 = state_38599__$1;
(statearr_38620_38716[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (16))){
var inst_38579 = (state_38599[(11)]);
var state_38599__$1 = state_38599;
var statearr_38621_38718 = state_38599__$1;
(statearr_38621_38718[(2)] = inst_38579);

(statearr_38621_38718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (10))){
var inst_38571 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38622_38719 = state_38599__$1;
(statearr_38622_38719[(2)] = inst_38571);

(statearr_38622_38719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (18))){
var inst_38582 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38623_38720 = state_38599__$1;
(statearr_38623_38720[(2)] = inst_38582);

(statearr_38623_38720[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (8))){
var inst_38568 = cljs.core.async.close_BANG_.call(null,to);
var state_38599__$1 = state_38599;
var statearr_38624_38722 = state_38599__$1;
(statearr_38624_38722[(2)] = inst_38568);

(statearr_38624_38722[(1)] = (10));


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
});})(c__27278__auto__,jobs,results,process,async))
;
return ((function (switch__27213__auto__,c__27278__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0 = (function (){
var statearr_38628 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__);

(statearr_38628[(1)] = (1));

return statearr_38628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1 = (function (state_38599){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38629){if((e38629 instanceof Object)){
var ex__27217__auto__ = e38629;
var statearr_38630_38730 = state_38599;
(statearr_38630_38730[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38731 = state_38599;
state_38599 = G__38731;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__ = function(state_38599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1.call(this,state_38599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__,jobs,results,process,async))
})();
var state__27280__auto__ = (function (){var statearr_38631 = f__27279__auto__.call(null);
(statearr_38631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_38631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__,jobs,results,process,async))
);

return c__27278__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args38732 = [];
var len__19923__auto___38735 = arguments.length;
var i__19924__auto___38736 = (0);
while(true){
if((i__19924__auto___38736 < len__19923__auto___38735)){
args38732.push((arguments[i__19924__auto___38736]));

var G__38737 = (i__19924__auto___38736 + (1));
i__19924__auto___38736 = G__38737;
continue;
} else {
}
break;
}

var G__38734 = args38732.length;
switch (G__38734) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38732.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args38741 = [];
var len__19923__auto___38749 = arguments.length;
var i__19924__auto___38750 = (0);
while(true){
if((i__19924__auto___38750 < len__19923__auto___38749)){
args38741.push((arguments[i__19924__auto___38750]));

var G__38751 = (i__19924__auto___38750 + (1));
i__19924__auto___38750 = G__38751;
continue;
} else {
}
break;
}

var G__38746 = args38741.length;
switch (G__38746) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38741.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args38761 = [];
var len__19923__auto___38838 = arguments.length;
var i__19924__auto___38839 = (0);
while(true){
if((i__19924__auto___38839 < len__19923__auto___38838)){
args38761.push((arguments[i__19924__auto___38839]));

var G__38840 = (i__19924__auto___38839 + (1));
i__19924__auto___38839 = G__38840;
continue;
} else {
}
break;
}

var G__38767 = args38761.length;
switch (G__38767) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38761.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27278__auto___38844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___38844,tc,fc){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___38844,tc,fc){
return (function (state_38794){
var state_val_38795 = (state_38794[(1)]);
if((state_val_38795 === (7))){
var inst_38790 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
var statearr_38797_38846 = state_38794__$1;
(statearr_38797_38846[(2)] = inst_38790);

(statearr_38797_38846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (1))){
var state_38794__$1 = state_38794;
var statearr_38798_38848 = state_38794__$1;
(statearr_38798_38848[(2)] = null);

(statearr_38798_38848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (4))){
var inst_38770 = (state_38794[(7)]);
var inst_38770__$1 = (state_38794[(2)]);
var inst_38771 = (inst_38770__$1 == null);
var state_38794__$1 = (function (){var statearr_38799 = state_38794;
(statearr_38799[(7)] = inst_38770__$1);

return statearr_38799;
})();
if(cljs.core.truth_(inst_38771)){
var statearr_38800_38851 = state_38794__$1;
(statearr_38800_38851[(1)] = (5));

} else {
var statearr_38801_38852 = state_38794__$1;
(statearr_38801_38852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (13))){
var state_38794__$1 = state_38794;
var statearr_38802_38854 = state_38794__$1;
(statearr_38802_38854[(2)] = null);

(statearr_38802_38854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (6))){
var inst_38770 = (state_38794[(7)]);
var inst_38777 = p.call(null,inst_38770);
var state_38794__$1 = state_38794;
if(cljs.core.truth_(inst_38777)){
var statearr_38803_38857 = state_38794__$1;
(statearr_38803_38857[(1)] = (9));

} else {
var statearr_38804_38859 = state_38794__$1;
(statearr_38804_38859[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (3))){
var inst_38792 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38794__$1,inst_38792);
} else {
if((state_val_38795 === (12))){
var state_38794__$1 = state_38794;
var statearr_38812_38863 = state_38794__$1;
(statearr_38812_38863[(2)] = null);

(statearr_38812_38863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (2))){
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38794__$1,(4),ch);
} else {
if((state_val_38795 === (11))){
var inst_38770 = (state_38794[(7)]);
var inst_38781 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38794__$1,(8),inst_38781,inst_38770);
} else {
if((state_val_38795 === (9))){
var state_38794__$1 = state_38794;
var statearr_38814_38867 = state_38794__$1;
(statearr_38814_38867[(2)] = tc);

(statearr_38814_38867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (5))){
var inst_38773 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38775 = cljs.core.async.close_BANG_.call(null,fc);
var state_38794__$1 = (function (){var statearr_38815 = state_38794;
(statearr_38815[(8)] = inst_38773);

return statearr_38815;
})();
var statearr_38816_38868 = state_38794__$1;
(statearr_38816_38868[(2)] = inst_38775);

(statearr_38816_38868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (14))){
var inst_38788 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
var statearr_38818_38869 = state_38794__$1;
(statearr_38818_38869[(2)] = inst_38788);

(statearr_38818_38869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (10))){
var state_38794__$1 = state_38794;
var statearr_38819_38870 = state_38794__$1;
(statearr_38819_38870[(2)] = fc);

(statearr_38819_38870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (8))){
var inst_38783 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
if(cljs.core.truth_(inst_38783)){
var statearr_38820_38871 = state_38794__$1;
(statearr_38820_38871[(1)] = (12));

} else {
var statearr_38821_38872 = state_38794__$1;
(statearr_38821_38872[(1)] = (13));

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
});})(c__27278__auto___38844,tc,fc))
;
return ((function (switch__27213__auto__,c__27278__auto___38844,tc,fc){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_38832 = [null,null,null,null,null,null,null,null,null];
(statearr_38832[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_38832[(1)] = (1));

return statearr_38832;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_38794){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38833){if((e38833 instanceof Object)){
var ex__27217__auto__ = e38833;
var statearr_38835_38873 = state_38794;
(statearr_38835_38873[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38875 = state_38794;
state_38794 = G__38875;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_38794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_38794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___38844,tc,fc))
})();
var state__27280__auto__ = (function (){var statearr_38836 = f__27279__auto__.call(null);
(statearr_38836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___38844);

return statearr_38836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___38844,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__){
return (function (state_38930){
var state_val_38931 = (state_38930[(1)]);
if((state_val_38931 === (1))){
var inst_38916 = init;
var state_38930__$1 = (function (){var statearr_38933 = state_38930;
(statearr_38933[(7)] = inst_38916);

return statearr_38933;
})();
var statearr_38934_38960 = state_38930__$1;
(statearr_38934_38960[(2)] = null);

(statearr_38934_38960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (2))){
var state_38930__$1 = state_38930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38930__$1,(4),ch);
} else {
if((state_val_38931 === (3))){
var inst_38928 = (state_38930[(2)]);
var state_38930__$1 = state_38930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38930__$1,inst_38928);
} else {
if((state_val_38931 === (4))){
var inst_38919 = (state_38930[(8)]);
var inst_38919__$1 = (state_38930[(2)]);
var inst_38920 = (inst_38919__$1 == null);
var state_38930__$1 = (function (){var statearr_38935 = state_38930;
(statearr_38935[(8)] = inst_38919__$1);

return statearr_38935;
})();
if(cljs.core.truth_(inst_38920)){
var statearr_38936_38970 = state_38930__$1;
(statearr_38936_38970[(1)] = (5));

} else {
var statearr_38937_38971 = state_38930__$1;
(statearr_38937_38971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (5))){
var inst_38916 = (state_38930[(7)]);
var state_38930__$1 = state_38930;
var statearr_38938_38972 = state_38930__$1;
(statearr_38938_38972[(2)] = inst_38916);

(statearr_38938_38972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (6))){
var inst_38916 = (state_38930[(7)]);
var inst_38919 = (state_38930[(8)]);
var inst_38923 = f.call(null,inst_38916,inst_38919);
var inst_38916__$1 = inst_38923;
var state_38930__$1 = (function (){var statearr_38939 = state_38930;
(statearr_38939[(7)] = inst_38916__$1);

return statearr_38939;
})();
var statearr_38940_38973 = state_38930__$1;
(statearr_38940_38973[(2)] = null);

(statearr_38940_38973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (7))){
var inst_38926 = (state_38930[(2)]);
var state_38930__$1 = state_38930;
var statearr_38941_38976 = state_38930__$1;
(statearr_38941_38976[(2)] = inst_38926);

(statearr_38941_38976[(1)] = (3));


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
});})(c__27278__auto__))
;
return ((function (switch__27213__auto__,c__27278__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27214__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27214__auto____0 = (function (){
var statearr_38945 = [null,null,null,null,null,null,null,null,null];
(statearr_38945[(0)] = cljs$core$async$reduce_$_state_machine__27214__auto__);

(statearr_38945[(1)] = (1));

return statearr_38945;
});
var cljs$core$async$reduce_$_state_machine__27214__auto____1 = (function (state_38930){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_38930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e38947){if((e38947 instanceof Object)){
var ex__27217__auto__ = e38947;
var statearr_38948_38981 = state_38930;
(statearr_38948_38981[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38982 = state_38930;
state_38930 = G__38982;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27214__auto__ = function(state_38930){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27214__auto____1.call(this,state_38930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27214__auto____0;
cljs$core$async$reduce_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27214__auto____1;
return cljs$core$async$reduce_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__))
})();
var state__27280__auto__ = (function (){var statearr_38950 = f__27279__auto__.call(null);
(statearr_38950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_38950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__))
);

return c__27278__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args38983 = [];
var len__19923__auto___39045 = arguments.length;
var i__19924__auto___39046 = (0);
while(true){
if((i__19924__auto___39046 < len__19923__auto___39045)){
args38983.push((arguments[i__19924__auto___39046]));

var G__39047 = (i__19924__auto___39046 + (1));
i__19924__auto___39046 = G__39047;
continue;
} else {
}
break;
}

var G__38987 = args38983.length;
switch (G__38987) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38983.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__){
return (function (state_39013){
var state_val_39014 = (state_39013[(1)]);
if((state_val_39014 === (7))){
var inst_38994 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39015_39057 = state_39013__$1;
(statearr_39015_39057[(2)] = inst_38994);

(statearr_39015_39057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (1))){
var inst_38988 = cljs.core.seq.call(null,coll);
var inst_38989 = inst_38988;
var state_39013__$1 = (function (){var statearr_39016 = state_39013;
(statearr_39016[(7)] = inst_38989);

return statearr_39016;
})();
var statearr_39017_39059 = state_39013__$1;
(statearr_39017_39059[(2)] = null);

(statearr_39017_39059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (4))){
var inst_38989 = (state_39013[(7)]);
var inst_38992 = cljs.core.first.call(null,inst_38989);
var state_39013__$1 = state_39013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39013__$1,(7),ch,inst_38992);
} else {
if((state_val_39014 === (13))){
var inst_39006 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39018_39061 = state_39013__$1;
(statearr_39018_39061[(2)] = inst_39006);

(statearr_39018_39061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (6))){
var inst_38997 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38997)){
var statearr_39019_39063 = state_39013__$1;
(statearr_39019_39063[(1)] = (8));

} else {
var statearr_39020_39064 = state_39013__$1;
(statearr_39020_39064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (3))){
var inst_39010 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39013__$1,inst_39010);
} else {
if((state_val_39014 === (12))){
var state_39013__$1 = state_39013;
var statearr_39021_39066 = state_39013__$1;
(statearr_39021_39066[(2)] = null);

(statearr_39021_39066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (2))){
var inst_38989 = (state_39013[(7)]);
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38989)){
var statearr_39022_39071 = state_39013__$1;
(statearr_39022_39071[(1)] = (4));

} else {
var statearr_39024_39072 = state_39013__$1;
(statearr_39024_39072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (11))){
var inst_39003 = cljs.core.async.close_BANG_.call(null,ch);
var state_39013__$1 = state_39013;
var statearr_39025_39077 = state_39013__$1;
(statearr_39025_39077[(2)] = inst_39003);

(statearr_39025_39077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (9))){
var state_39013__$1 = state_39013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39026_39078 = state_39013__$1;
(statearr_39026_39078[(1)] = (11));

} else {
var statearr_39027_39079 = state_39013__$1;
(statearr_39027_39079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (5))){
var inst_38989 = (state_39013[(7)]);
var state_39013__$1 = state_39013;
var statearr_39028_39080 = state_39013__$1;
(statearr_39028_39080[(2)] = inst_38989);

(statearr_39028_39080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (10))){
var inst_39008 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39029_39084 = state_39013__$1;
(statearr_39029_39084[(2)] = inst_39008);

(statearr_39029_39084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (8))){
var inst_38989 = (state_39013[(7)]);
var inst_38999 = cljs.core.next.call(null,inst_38989);
var inst_38989__$1 = inst_38999;
var state_39013__$1 = (function (){var statearr_39030 = state_39013;
(statearr_39030[(7)] = inst_38989__$1);

return statearr_39030;
})();
var statearr_39031_39086 = state_39013__$1;
(statearr_39031_39086[(2)] = null);

(statearr_39031_39086[(1)] = (2));


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
});})(c__27278__auto__))
;
return ((function (switch__27213__auto__,c__27278__auto__){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_39037 = [null,null,null,null,null,null,null,null];
(statearr_39037[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_39037[(1)] = (1));

return statearr_39037;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_39013){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_39013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e39038){if((e39038 instanceof Object)){
var ex__27217__auto__ = e39038;
var statearr_39039_39089 = state_39013;
(statearr_39039_39089[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39091 = state_39013;
state_39013 = G__39091;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_39013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_39013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__))
})();
var state__27280__auto__ = (function (){var statearr_39040 = f__27279__auto__.call(null);
(statearr_39040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_39040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__))
);

return c__27278__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19520__auto__ = (((_ == null))?null:_);
var m__19521__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,_);
} else {
var m__19521__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19521__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m,ch);
} else {
var m__19521__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m,ch);
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
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m);
} else {
var m__19521__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t39369 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39369 = (function (mult,ch,cs,meta39370){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta39370 = meta39370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t39369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39371,meta39370__$1){
var self__ = this;
var _39371__$1 = this;
return (new cljs.core.async.t39369(self__.mult,self__.ch,self__.cs,meta39370__$1));
});})(cs))
;

cljs.core.async.t39369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39371){
var self__ = this;
var _39371__$1 = this;
return self__.meta39370;
});})(cs))
;

cljs.core.async.t39369.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t39369.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t39369.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t39369.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t39369.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t39369.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39370","meta39370",1376264025,null)], null);
});})(cs))
;

cljs.core.async.t39369.cljs$lang$type = true;

cljs.core.async.t39369.cljs$lang$ctorStr = "cljs.core.async/t39369";

cljs.core.async.t39369.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t39369");
});})(cs))
;

cljs.core.async.__GT_t39369 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t39369(mult__$1,ch__$1,cs__$1,meta39370){
return (new cljs.core.async.t39369(mult__$1,ch__$1,cs__$1,meta39370));
});})(cs))
;

}

return (new cljs.core.async.t39369(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27278__auto___39632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___39632,cs,m,dchan,dctr,done){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___39632,cs,m,dchan,dctr,done){
return (function (state_39514){
var state_val_39515 = (state_39514[(1)]);
if((state_val_39515 === (7))){
var inst_39510 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39516_39639 = state_39514__$1;
(statearr_39516_39639[(2)] = inst_39510);

(statearr_39516_39639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (20))){
var inst_39411 = (state_39514[(7)]);
var inst_39421 = cljs.core.first.call(null,inst_39411);
var inst_39422 = cljs.core.nth.call(null,inst_39421,(0),null);
var inst_39423 = cljs.core.nth.call(null,inst_39421,(1),null);
var state_39514__$1 = (function (){var statearr_39518 = state_39514;
(statearr_39518[(8)] = inst_39422);

return statearr_39518;
})();
if(cljs.core.truth_(inst_39423)){
var statearr_39519_39640 = state_39514__$1;
(statearr_39519_39640[(1)] = (22));

} else {
var statearr_39520_39641 = state_39514__$1;
(statearr_39520_39641[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (27))){
var inst_39457 = (state_39514[(9)]);
var inst_39455 = (state_39514[(10)]);
var inst_39379 = (state_39514[(11)]);
var inst_39462 = (state_39514[(12)]);
var inst_39462__$1 = cljs.core._nth.call(null,inst_39455,inst_39457);
var inst_39463 = cljs.core.async.put_BANG_.call(null,inst_39462__$1,inst_39379,done);
var state_39514__$1 = (function (){var statearr_39525 = state_39514;
(statearr_39525[(12)] = inst_39462__$1);

return statearr_39525;
})();
if(cljs.core.truth_(inst_39463)){
var statearr_39526_39642 = state_39514__$1;
(statearr_39526_39642[(1)] = (30));

} else {
var statearr_39527_39643 = state_39514__$1;
(statearr_39527_39643[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (1))){
var state_39514__$1 = state_39514;
var statearr_39528_39646 = state_39514__$1;
(statearr_39528_39646[(2)] = null);

(statearr_39528_39646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (24))){
var inst_39411 = (state_39514[(7)]);
var inst_39428 = (state_39514[(2)]);
var inst_39429 = cljs.core.next.call(null,inst_39411);
var inst_39390 = inst_39429;
var inst_39391 = null;
var inst_39392 = (0);
var inst_39393 = (0);
var state_39514__$1 = (function (){var statearr_39529 = state_39514;
(statearr_39529[(13)] = inst_39390);

(statearr_39529[(14)] = inst_39392);

(statearr_39529[(15)] = inst_39393);

(statearr_39529[(16)] = inst_39428);

(statearr_39529[(17)] = inst_39391);

return statearr_39529;
})();
var statearr_39530_39651 = state_39514__$1;
(statearr_39530_39651[(2)] = null);

(statearr_39530_39651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (39))){
var state_39514__$1 = state_39514;
var statearr_39534_39652 = state_39514__$1;
(statearr_39534_39652[(2)] = null);

(statearr_39534_39652[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (4))){
var inst_39379 = (state_39514[(11)]);
var inst_39379__$1 = (state_39514[(2)]);
var inst_39380 = (inst_39379__$1 == null);
var state_39514__$1 = (function (){var statearr_39535 = state_39514;
(statearr_39535[(11)] = inst_39379__$1);

return statearr_39535;
})();
if(cljs.core.truth_(inst_39380)){
var statearr_39536_39653 = state_39514__$1;
(statearr_39536_39653[(1)] = (5));

} else {
var statearr_39537_39654 = state_39514__$1;
(statearr_39537_39654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (15))){
var inst_39390 = (state_39514[(13)]);
var inst_39392 = (state_39514[(14)]);
var inst_39393 = (state_39514[(15)]);
var inst_39391 = (state_39514[(17)]);
var inst_39406 = (state_39514[(2)]);
var inst_39408 = (inst_39393 + (1));
var tmp39531 = inst_39390;
var tmp39532 = inst_39392;
var tmp39533 = inst_39391;
var inst_39390__$1 = tmp39531;
var inst_39391__$1 = tmp39533;
var inst_39392__$1 = tmp39532;
var inst_39393__$1 = inst_39408;
var state_39514__$1 = (function (){var statearr_39538 = state_39514;
(statearr_39538[(13)] = inst_39390__$1);

(statearr_39538[(14)] = inst_39392__$1);

(statearr_39538[(15)] = inst_39393__$1);

(statearr_39538[(18)] = inst_39406);

(statearr_39538[(17)] = inst_39391__$1);

return statearr_39538;
})();
var statearr_39539_39655 = state_39514__$1;
(statearr_39539_39655[(2)] = null);

(statearr_39539_39655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (21))){
var inst_39432 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39543_39656 = state_39514__$1;
(statearr_39543_39656[(2)] = inst_39432);

(statearr_39543_39656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (31))){
var inst_39462 = (state_39514[(12)]);
var inst_39466 = done.call(null,null);
var inst_39467 = cljs.core.async.untap_STAR_.call(null,m,inst_39462);
var state_39514__$1 = (function (){var statearr_39544 = state_39514;
(statearr_39544[(19)] = inst_39466);

return statearr_39544;
})();
var statearr_39545_39657 = state_39514__$1;
(statearr_39545_39657[(2)] = inst_39467);

(statearr_39545_39657[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (32))){
var inst_39457 = (state_39514[(9)]);
var inst_39455 = (state_39514[(10)]);
var inst_39454 = (state_39514[(20)]);
var inst_39456 = (state_39514[(21)]);
var inst_39469 = (state_39514[(2)]);
var inst_39470 = (inst_39457 + (1));
var tmp39540 = inst_39455;
var tmp39541 = inst_39454;
var tmp39542 = inst_39456;
var inst_39454__$1 = tmp39541;
var inst_39455__$1 = tmp39540;
var inst_39456__$1 = tmp39542;
var inst_39457__$1 = inst_39470;
var state_39514__$1 = (function (){var statearr_39546 = state_39514;
(statearr_39546[(9)] = inst_39457__$1);

(statearr_39546[(10)] = inst_39455__$1);

(statearr_39546[(20)] = inst_39454__$1);

(statearr_39546[(22)] = inst_39469);

(statearr_39546[(21)] = inst_39456__$1);

return statearr_39546;
})();
var statearr_39547_39658 = state_39514__$1;
(statearr_39547_39658[(2)] = null);

(statearr_39547_39658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (40))){
var inst_39482 = (state_39514[(23)]);
var inst_39486 = done.call(null,null);
var inst_39487 = cljs.core.async.untap_STAR_.call(null,m,inst_39482);
var state_39514__$1 = (function (){var statearr_39551 = state_39514;
(statearr_39551[(24)] = inst_39486);

return statearr_39551;
})();
var statearr_39552_39659 = state_39514__$1;
(statearr_39552_39659[(2)] = inst_39487);

(statearr_39552_39659[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (33))){
var inst_39473 = (state_39514[(25)]);
var inst_39475 = cljs.core.chunked_seq_QMARK_.call(null,inst_39473);
var state_39514__$1 = state_39514;
if(inst_39475){
var statearr_39554_39661 = state_39514__$1;
(statearr_39554_39661[(1)] = (36));

} else {
var statearr_39555_39662 = state_39514__$1;
(statearr_39555_39662[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (13))){
var inst_39400 = (state_39514[(26)]);
var inst_39403 = cljs.core.async.close_BANG_.call(null,inst_39400);
var state_39514__$1 = state_39514;
var statearr_39556_39663 = state_39514__$1;
(statearr_39556_39663[(2)] = inst_39403);

(statearr_39556_39663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (22))){
var inst_39422 = (state_39514[(8)]);
var inst_39425 = cljs.core.async.close_BANG_.call(null,inst_39422);
var state_39514__$1 = state_39514;
var statearr_39558_39664 = state_39514__$1;
(statearr_39558_39664[(2)] = inst_39425);

(statearr_39558_39664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (36))){
var inst_39473 = (state_39514[(25)]);
var inst_39477 = cljs.core.chunk_first.call(null,inst_39473);
var inst_39478 = cljs.core.chunk_rest.call(null,inst_39473);
var inst_39479 = cljs.core.count.call(null,inst_39477);
var inst_39454 = inst_39478;
var inst_39455 = inst_39477;
var inst_39456 = inst_39479;
var inst_39457 = (0);
var state_39514__$1 = (function (){var statearr_39559 = state_39514;
(statearr_39559[(9)] = inst_39457);

(statearr_39559[(10)] = inst_39455);

(statearr_39559[(20)] = inst_39454);

(statearr_39559[(21)] = inst_39456);

return statearr_39559;
})();
var statearr_39560_39665 = state_39514__$1;
(statearr_39560_39665[(2)] = null);

(statearr_39560_39665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (41))){
var inst_39473 = (state_39514[(25)]);
var inst_39489 = (state_39514[(2)]);
var inst_39490 = cljs.core.next.call(null,inst_39473);
var inst_39454 = inst_39490;
var inst_39455 = null;
var inst_39456 = (0);
var inst_39457 = (0);
var state_39514__$1 = (function (){var statearr_39562 = state_39514;
(statearr_39562[(9)] = inst_39457);

(statearr_39562[(10)] = inst_39455);

(statearr_39562[(20)] = inst_39454);

(statearr_39562[(27)] = inst_39489);

(statearr_39562[(21)] = inst_39456);

return statearr_39562;
})();
var statearr_39563_39666 = state_39514__$1;
(statearr_39563_39666[(2)] = null);

(statearr_39563_39666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (43))){
var state_39514__$1 = state_39514;
var statearr_39565_39667 = state_39514__$1;
(statearr_39565_39667[(2)] = null);

(statearr_39565_39667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (29))){
var inst_39498 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39566_39668 = state_39514__$1;
(statearr_39566_39668[(2)] = inst_39498);

(statearr_39566_39668[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (44))){
var inst_39507 = (state_39514[(2)]);
var state_39514__$1 = (function (){var statearr_39568 = state_39514;
(statearr_39568[(28)] = inst_39507);

return statearr_39568;
})();
var statearr_39569_39669 = state_39514__$1;
(statearr_39569_39669[(2)] = null);

(statearr_39569_39669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (6))){
var inst_39442 = (state_39514[(29)]);
var inst_39441 = cljs.core.deref.call(null,cs);
var inst_39442__$1 = cljs.core.keys.call(null,inst_39441);
var inst_39447 = cljs.core.count.call(null,inst_39442__$1);
var inst_39448 = cljs.core.reset_BANG_.call(null,dctr,inst_39447);
var inst_39453 = cljs.core.seq.call(null,inst_39442__$1);
var inst_39454 = inst_39453;
var inst_39455 = null;
var inst_39456 = (0);
var inst_39457 = (0);
var state_39514__$1 = (function (){var statearr_39570 = state_39514;
(statearr_39570[(29)] = inst_39442__$1);

(statearr_39570[(9)] = inst_39457);

(statearr_39570[(30)] = inst_39448);

(statearr_39570[(10)] = inst_39455);

(statearr_39570[(20)] = inst_39454);

(statearr_39570[(21)] = inst_39456);

return statearr_39570;
})();
var statearr_39571_39670 = state_39514__$1;
(statearr_39571_39670[(2)] = null);

(statearr_39571_39670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (28))){
var inst_39454 = (state_39514[(20)]);
var inst_39473 = (state_39514[(25)]);
var inst_39473__$1 = cljs.core.seq.call(null,inst_39454);
var state_39514__$1 = (function (){var statearr_39572 = state_39514;
(statearr_39572[(25)] = inst_39473__$1);

return statearr_39572;
})();
if(inst_39473__$1){
var statearr_39573_39671 = state_39514__$1;
(statearr_39573_39671[(1)] = (33));

} else {
var statearr_39574_39672 = state_39514__$1;
(statearr_39574_39672[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (25))){
var inst_39457 = (state_39514[(9)]);
var inst_39456 = (state_39514[(21)]);
var inst_39459 = (inst_39457 < inst_39456);
var inst_39460 = inst_39459;
var state_39514__$1 = state_39514;
if(cljs.core.truth_(inst_39460)){
var statearr_39575_39673 = state_39514__$1;
(statearr_39575_39673[(1)] = (27));

} else {
var statearr_39576_39674 = state_39514__$1;
(statearr_39576_39674[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (34))){
var state_39514__$1 = state_39514;
var statearr_39577_39675 = state_39514__$1;
(statearr_39577_39675[(2)] = null);

(statearr_39577_39675[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (17))){
var state_39514__$1 = state_39514;
var statearr_39578_39676 = state_39514__$1;
(statearr_39578_39676[(2)] = null);

(statearr_39578_39676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (3))){
var inst_39512 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39514__$1,inst_39512);
} else {
if((state_val_39515 === (12))){
var inst_39437 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39579_39677 = state_39514__$1;
(statearr_39579_39677[(2)] = inst_39437);

(statearr_39579_39677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (2))){
var state_39514__$1 = state_39514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39514__$1,(4),ch);
} else {
if((state_val_39515 === (23))){
var state_39514__$1 = state_39514;
var statearr_39580_39678 = state_39514__$1;
(statearr_39580_39678[(2)] = null);

(statearr_39580_39678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (35))){
var inst_39496 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39583_39679 = state_39514__$1;
(statearr_39583_39679[(2)] = inst_39496);

(statearr_39583_39679[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (19))){
var inst_39411 = (state_39514[(7)]);
var inst_39415 = cljs.core.chunk_first.call(null,inst_39411);
var inst_39416 = cljs.core.chunk_rest.call(null,inst_39411);
var inst_39417 = cljs.core.count.call(null,inst_39415);
var inst_39390 = inst_39416;
var inst_39391 = inst_39415;
var inst_39392 = inst_39417;
var inst_39393 = (0);
var state_39514__$1 = (function (){var statearr_39584 = state_39514;
(statearr_39584[(13)] = inst_39390);

(statearr_39584[(14)] = inst_39392);

(statearr_39584[(15)] = inst_39393);

(statearr_39584[(17)] = inst_39391);

return statearr_39584;
})();
var statearr_39585_39680 = state_39514__$1;
(statearr_39585_39680[(2)] = null);

(statearr_39585_39680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (11))){
var inst_39390 = (state_39514[(13)]);
var inst_39411 = (state_39514[(7)]);
var inst_39411__$1 = cljs.core.seq.call(null,inst_39390);
var state_39514__$1 = (function (){var statearr_39586 = state_39514;
(statearr_39586[(7)] = inst_39411__$1);

return statearr_39586;
})();
if(inst_39411__$1){
var statearr_39587_39683 = state_39514__$1;
(statearr_39587_39683[(1)] = (16));

} else {
var statearr_39588_39685 = state_39514__$1;
(statearr_39588_39685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (9))){
var inst_39439 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39589_39686 = state_39514__$1;
(statearr_39589_39686[(2)] = inst_39439);

(statearr_39589_39686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (5))){
var inst_39388 = cljs.core.deref.call(null,cs);
var inst_39389 = cljs.core.seq.call(null,inst_39388);
var inst_39390 = inst_39389;
var inst_39391 = null;
var inst_39392 = (0);
var inst_39393 = (0);
var state_39514__$1 = (function (){var statearr_39590 = state_39514;
(statearr_39590[(13)] = inst_39390);

(statearr_39590[(14)] = inst_39392);

(statearr_39590[(15)] = inst_39393);

(statearr_39590[(17)] = inst_39391);

return statearr_39590;
})();
var statearr_39591_39687 = state_39514__$1;
(statearr_39591_39687[(2)] = null);

(statearr_39591_39687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (14))){
var state_39514__$1 = state_39514;
var statearr_39593_39688 = state_39514__$1;
(statearr_39593_39688[(2)] = null);

(statearr_39593_39688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (45))){
var inst_39504 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39595_39690 = state_39514__$1;
(statearr_39595_39690[(2)] = inst_39504);

(statearr_39595_39690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (26))){
var inst_39442 = (state_39514[(29)]);
var inst_39500 = (state_39514[(2)]);
var inst_39501 = cljs.core.seq.call(null,inst_39442);
var state_39514__$1 = (function (){var statearr_39596 = state_39514;
(statearr_39596[(31)] = inst_39500);

return statearr_39596;
})();
if(inst_39501){
var statearr_39597_39693 = state_39514__$1;
(statearr_39597_39693[(1)] = (42));

} else {
var statearr_39598_39694 = state_39514__$1;
(statearr_39598_39694[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (16))){
var inst_39411 = (state_39514[(7)]);
var inst_39413 = cljs.core.chunked_seq_QMARK_.call(null,inst_39411);
var state_39514__$1 = state_39514;
if(inst_39413){
var statearr_39600_39697 = state_39514__$1;
(statearr_39600_39697[(1)] = (19));

} else {
var statearr_39601_39698 = state_39514__$1;
(statearr_39601_39698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (38))){
var inst_39493 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39602_39699 = state_39514__$1;
(statearr_39602_39699[(2)] = inst_39493);

(statearr_39602_39699[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (30))){
var state_39514__$1 = state_39514;
var statearr_39603_39700 = state_39514__$1;
(statearr_39603_39700[(2)] = null);

(statearr_39603_39700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (10))){
var inst_39393 = (state_39514[(15)]);
var inst_39391 = (state_39514[(17)]);
var inst_39399 = cljs.core._nth.call(null,inst_39391,inst_39393);
var inst_39400 = cljs.core.nth.call(null,inst_39399,(0),null);
var inst_39401 = cljs.core.nth.call(null,inst_39399,(1),null);
var state_39514__$1 = (function (){var statearr_39604 = state_39514;
(statearr_39604[(26)] = inst_39400);

return statearr_39604;
})();
if(cljs.core.truth_(inst_39401)){
var statearr_39605_39703 = state_39514__$1;
(statearr_39605_39703[(1)] = (13));

} else {
var statearr_39606_39704 = state_39514__$1;
(statearr_39606_39704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (18))){
var inst_39435 = (state_39514[(2)]);
var state_39514__$1 = state_39514;
var statearr_39607_39705 = state_39514__$1;
(statearr_39607_39705[(2)] = inst_39435);

(statearr_39607_39705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (42))){
var state_39514__$1 = state_39514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39514__$1,(45),dchan);
} else {
if((state_val_39515 === (37))){
var inst_39482 = (state_39514[(23)]);
var inst_39379 = (state_39514[(11)]);
var inst_39473 = (state_39514[(25)]);
var inst_39482__$1 = cljs.core.first.call(null,inst_39473);
var inst_39483 = cljs.core.async.put_BANG_.call(null,inst_39482__$1,inst_39379,done);
var state_39514__$1 = (function (){var statearr_39608 = state_39514;
(statearr_39608[(23)] = inst_39482__$1);

return statearr_39608;
})();
if(cljs.core.truth_(inst_39483)){
var statearr_39609_39708 = state_39514__$1;
(statearr_39609_39708[(1)] = (39));

} else {
var statearr_39610_39709 = state_39514__$1;
(statearr_39610_39709[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39515 === (8))){
var inst_39392 = (state_39514[(14)]);
var inst_39393 = (state_39514[(15)]);
var inst_39395 = (inst_39393 < inst_39392);
var inst_39396 = inst_39395;
var state_39514__$1 = state_39514;
if(cljs.core.truth_(inst_39396)){
var statearr_39611_39710 = state_39514__$1;
(statearr_39611_39710[(1)] = (10));

} else {
var statearr_39612_39711 = state_39514__$1;
(statearr_39612_39711[(1)] = (11));

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
});})(c__27278__auto___39632,cs,m,dchan,dctr,done))
;
return ((function (switch__27213__auto__,c__27278__auto___39632,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27214__auto__ = null;
var cljs$core$async$mult_$_state_machine__27214__auto____0 = (function (){
var statearr_39616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39616[(0)] = cljs$core$async$mult_$_state_machine__27214__auto__);

(statearr_39616[(1)] = (1));

return statearr_39616;
});
var cljs$core$async$mult_$_state_machine__27214__auto____1 = (function (state_39514){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_39514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e39617){if((e39617 instanceof Object)){
var ex__27217__auto__ = e39617;
var statearr_39618_39715 = state_39514;
(statearr_39618_39715[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39716 = state_39514;
state_39514 = G__39716;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27214__auto__ = function(state_39514){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27214__auto____1.call(this,state_39514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27214__auto____0;
cljs$core$async$mult_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27214__auto____1;
return cljs$core$async$mult_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___39632,cs,m,dchan,dctr,done))
})();
var state__27280__auto__ = (function (){var statearr_39619 = f__27279__auto__.call(null);
(statearr_39619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___39632);

return statearr_39619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___39632,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args39719 = [];
var len__19923__auto___39722 = arguments.length;
var i__19924__auto___39723 = (0);
while(true){
if((i__19924__auto___39723 < len__19923__auto___39722)){
args39719.push((arguments[i__19924__auto___39723]));

var G__39724 = (i__19924__auto___39723 + (1));
i__19924__auto___39723 = G__39724;
continue;
} else {
}
break;
}

var G__39721 = args39719.length;
switch (G__39721) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39719.length)].join('')));

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

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m,ch);
} else {
var m__19521__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m,ch);
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
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m,ch);
} else {
var m__19521__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m,ch);
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
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m);
} else {
var m__19521__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m);
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
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m,state_map);
} else {
var m__19521__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m,state_map);
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
var x__19520__auto__ = (((m == null))?null:m);
var m__19521__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,m,mode);
} else {
var m__19521__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__19930__auto__ = [];
var len__19923__auto___39739 = arguments.length;
var i__19924__auto___39740 = (0);
while(true){
if((i__19924__auto___39740 < len__19923__auto___39739)){
args__19930__auto__.push((arguments[i__19924__auto___39740]));

var G__39741 = (i__19924__auto___39740 + (1));
i__19924__auto___39740 = G__39741;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((3) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39733){
var map__39734 = p__39733;
var map__39734__$1 = ((((!((map__39734 == null)))?((((map__39734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39734):map__39734);
var opts = map__39734__$1;
var statearr_39736_39742 = state;
(statearr_39736_39742[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__39734,map__39734__$1,opts){
return (function (val){
var statearr_39737_39743 = state;
(statearr_39737_39743[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39734,map__39734__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_39738_39744 = state;
(statearr_39738_39744[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39729){
var G__39730 = cljs.core.first.call(null,seq39729);
var seq39729__$1 = cljs.core.next.call(null,seq39729);
var G__39731 = cljs.core.first.call(null,seq39729__$1);
var seq39729__$2 = cljs.core.next.call(null,seq39729__$1);
var G__39732 = cljs.core.first.call(null,seq39729__$2);
var seq39729__$3 = cljs.core.next.call(null,seq39729__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39730,G__39731,G__39732,seq39729__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t39908 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39908 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39909){
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
this.meta39909 = meta39909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t39908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39910,meta39909__$1){
var self__ = this;
var _39910__$1 = this;
return (new cljs.core.async.t39908(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39909__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39910){
var self__ = this;
var _39910__$1 = this;
return self__.meta39909;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t39908.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t39908.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39909","meta39909",-578105731,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39908.cljs$lang$type = true;

cljs.core.async.t39908.cljs$lang$ctorStr = "cljs.core.async/t39908";

cljs.core.async.t39908.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t39908");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t39908 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t39908(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39909){
return (new cljs.core.async.t39908(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39909));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t39908(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27278__auto___40071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___40071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___40071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40008){
var state_val_40009 = (state_40008[(1)]);
if((state_val_40009 === (7))){
var inst_39926 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
var statearr_40010_40072 = state_40008__$1;
(statearr_40010_40072[(2)] = inst_39926);

(statearr_40010_40072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (20))){
var inst_39938 = (state_40008[(7)]);
var state_40008__$1 = state_40008;
var statearr_40011_40073 = state_40008__$1;
(statearr_40011_40073[(2)] = inst_39938);

(statearr_40011_40073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (27))){
var state_40008__$1 = state_40008;
var statearr_40012_40074 = state_40008__$1;
(statearr_40012_40074[(2)] = null);

(statearr_40012_40074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (1))){
var inst_39914 = (state_40008[(8)]);
var inst_39914__$1 = calc_state.call(null);
var inst_39916 = (inst_39914__$1 == null);
var inst_39917 = cljs.core.not.call(null,inst_39916);
var state_40008__$1 = (function (){var statearr_40013 = state_40008;
(statearr_40013[(8)] = inst_39914__$1);

return statearr_40013;
})();
if(inst_39917){
var statearr_40014_40075 = state_40008__$1;
(statearr_40014_40075[(1)] = (2));

} else {
var statearr_40015_40076 = state_40008__$1;
(statearr_40015_40076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (24))){
var inst_39968 = (state_40008[(9)]);
var inst_39982 = (state_40008[(10)]);
var inst_39961 = (state_40008[(11)]);
var inst_39982__$1 = inst_39961.call(null,inst_39968);
var state_40008__$1 = (function (){var statearr_40016 = state_40008;
(statearr_40016[(10)] = inst_39982__$1);

return statearr_40016;
})();
if(cljs.core.truth_(inst_39982__$1)){
var statearr_40017_40077 = state_40008__$1;
(statearr_40017_40077[(1)] = (29));

} else {
var statearr_40018_40078 = state_40008__$1;
(statearr_40018_40078[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (4))){
var inst_39929 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
if(cljs.core.truth_(inst_39929)){
var statearr_40019_40079 = state_40008__$1;
(statearr_40019_40079[(1)] = (8));

} else {
var statearr_40020_40080 = state_40008__$1;
(statearr_40020_40080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (15))){
var inst_39955 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
if(cljs.core.truth_(inst_39955)){
var statearr_40021_40081 = state_40008__$1;
(statearr_40021_40081[(1)] = (19));

} else {
var statearr_40022_40082 = state_40008__$1;
(statearr_40022_40082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (21))){
var inst_39960 = (state_40008[(12)]);
var inst_39960__$1 = (state_40008[(2)]);
var inst_39961 = cljs.core.get.call(null,inst_39960__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39962 = cljs.core.get.call(null,inst_39960__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39963 = cljs.core.get.call(null,inst_39960__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40008__$1 = (function (){var statearr_40023 = state_40008;
(statearr_40023[(13)] = inst_39962);

(statearr_40023[(11)] = inst_39961);

(statearr_40023[(12)] = inst_39960__$1);

return statearr_40023;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40008__$1,(22),inst_39963);
} else {
if((state_val_40009 === (31))){
var inst_39990 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
if(cljs.core.truth_(inst_39990)){
var statearr_40024_40083 = state_40008__$1;
(statearr_40024_40083[(1)] = (32));

} else {
var statearr_40025_40084 = state_40008__$1;
(statearr_40025_40084[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (32))){
var inst_39967 = (state_40008[(14)]);
var state_40008__$1 = state_40008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40008__$1,(35),out,inst_39967);
} else {
if((state_val_40009 === (33))){
var inst_39960 = (state_40008[(12)]);
var inst_39938 = inst_39960;
var state_40008__$1 = (function (){var statearr_40026 = state_40008;
(statearr_40026[(7)] = inst_39938);

return statearr_40026;
})();
var statearr_40027_40085 = state_40008__$1;
(statearr_40027_40085[(2)] = null);

(statearr_40027_40085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (13))){
var inst_39938 = (state_40008[(7)]);
var inst_39945 = inst_39938.cljs$lang$protocol_mask$partition0$;
var inst_39946 = (inst_39945 & (64));
var inst_39947 = inst_39938.cljs$core$ISeq$;
var inst_39948 = (inst_39946) || (inst_39947);
var state_40008__$1 = state_40008;
if(cljs.core.truth_(inst_39948)){
var statearr_40028_40086 = state_40008__$1;
(statearr_40028_40086[(1)] = (16));

} else {
var statearr_40029_40087 = state_40008__$1;
(statearr_40029_40087[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (22))){
var inst_39968 = (state_40008[(9)]);
var inst_39967 = (state_40008[(14)]);
var inst_39966 = (state_40008[(2)]);
var inst_39967__$1 = cljs.core.nth.call(null,inst_39966,(0),null);
var inst_39968__$1 = cljs.core.nth.call(null,inst_39966,(1),null);
var inst_39969 = (inst_39967__$1 == null);
var inst_39970 = cljs.core._EQ_.call(null,inst_39968__$1,change);
var inst_39971 = (inst_39969) || (inst_39970);
var state_40008__$1 = (function (){var statearr_40030 = state_40008;
(statearr_40030[(9)] = inst_39968__$1);

(statearr_40030[(14)] = inst_39967__$1);

return statearr_40030;
})();
if(cljs.core.truth_(inst_39971)){
var statearr_40031_40088 = state_40008__$1;
(statearr_40031_40088[(1)] = (23));

} else {
var statearr_40032_40089 = state_40008__$1;
(statearr_40032_40089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (36))){
var inst_39960 = (state_40008[(12)]);
var inst_39938 = inst_39960;
var state_40008__$1 = (function (){var statearr_40033 = state_40008;
(statearr_40033[(7)] = inst_39938);

return statearr_40033;
})();
var statearr_40034_40090 = state_40008__$1;
(statearr_40034_40090[(2)] = null);

(statearr_40034_40090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (29))){
var inst_39982 = (state_40008[(10)]);
var state_40008__$1 = state_40008;
var statearr_40035_40091 = state_40008__$1;
(statearr_40035_40091[(2)] = inst_39982);

(statearr_40035_40091[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (6))){
var state_40008__$1 = state_40008;
var statearr_40036_40092 = state_40008__$1;
(statearr_40036_40092[(2)] = false);

(statearr_40036_40092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (28))){
var inst_39978 = (state_40008[(2)]);
var inst_39979 = calc_state.call(null);
var inst_39938 = inst_39979;
var state_40008__$1 = (function (){var statearr_40037 = state_40008;
(statearr_40037[(15)] = inst_39978);

(statearr_40037[(7)] = inst_39938);

return statearr_40037;
})();
var statearr_40038_40093 = state_40008__$1;
(statearr_40038_40093[(2)] = null);

(statearr_40038_40093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (25))){
var inst_40004 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
var statearr_40039_40094 = state_40008__$1;
(statearr_40039_40094[(2)] = inst_40004);

(statearr_40039_40094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (34))){
var inst_40002 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
var statearr_40040_40095 = state_40008__$1;
(statearr_40040_40095[(2)] = inst_40002);

(statearr_40040_40095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (17))){
var state_40008__$1 = state_40008;
var statearr_40041_40096 = state_40008__$1;
(statearr_40041_40096[(2)] = false);

(statearr_40041_40096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (3))){
var state_40008__$1 = state_40008;
var statearr_40042_40097 = state_40008__$1;
(statearr_40042_40097[(2)] = false);

(statearr_40042_40097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (12))){
var inst_40006 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40008__$1,inst_40006);
} else {
if((state_val_40009 === (2))){
var inst_39914 = (state_40008[(8)]);
var inst_39919 = inst_39914.cljs$lang$protocol_mask$partition0$;
var inst_39920 = (inst_39919 & (64));
var inst_39921 = inst_39914.cljs$core$ISeq$;
var inst_39922 = (inst_39920) || (inst_39921);
var state_40008__$1 = state_40008;
if(cljs.core.truth_(inst_39922)){
var statearr_40043_40098 = state_40008__$1;
(statearr_40043_40098[(1)] = (5));

} else {
var statearr_40044_40099 = state_40008__$1;
(statearr_40044_40099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (23))){
var inst_39967 = (state_40008[(14)]);
var inst_39973 = (inst_39967 == null);
var state_40008__$1 = state_40008;
if(cljs.core.truth_(inst_39973)){
var statearr_40045_40100 = state_40008__$1;
(statearr_40045_40100[(1)] = (26));

} else {
var statearr_40046_40101 = state_40008__$1;
(statearr_40046_40101[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (35))){
var inst_39993 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
if(cljs.core.truth_(inst_39993)){
var statearr_40047_40102 = state_40008__$1;
(statearr_40047_40102[(1)] = (36));

} else {
var statearr_40048_40103 = state_40008__$1;
(statearr_40048_40103[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (19))){
var inst_39938 = (state_40008[(7)]);
var inst_39957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39938);
var state_40008__$1 = state_40008;
var statearr_40049_40104 = state_40008__$1;
(statearr_40049_40104[(2)] = inst_39957);

(statearr_40049_40104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (11))){
var inst_39938 = (state_40008[(7)]);
var inst_39942 = (inst_39938 == null);
var inst_39943 = cljs.core.not.call(null,inst_39942);
var state_40008__$1 = state_40008;
if(inst_39943){
var statearr_40050_40105 = state_40008__$1;
(statearr_40050_40105[(1)] = (13));

} else {
var statearr_40051_40106 = state_40008__$1;
(statearr_40051_40106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (9))){
var inst_39914 = (state_40008[(8)]);
var state_40008__$1 = state_40008;
var statearr_40052_40107 = state_40008__$1;
(statearr_40052_40107[(2)] = inst_39914);

(statearr_40052_40107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (5))){
var state_40008__$1 = state_40008;
var statearr_40053_40108 = state_40008__$1;
(statearr_40053_40108[(2)] = true);

(statearr_40053_40108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (14))){
var state_40008__$1 = state_40008;
var statearr_40054_40109 = state_40008__$1;
(statearr_40054_40109[(2)] = false);

(statearr_40054_40109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (26))){
var inst_39968 = (state_40008[(9)]);
var inst_39975 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39968);
var state_40008__$1 = state_40008;
var statearr_40055_40110 = state_40008__$1;
(statearr_40055_40110[(2)] = inst_39975);

(statearr_40055_40110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (16))){
var state_40008__$1 = state_40008;
var statearr_40056_40111 = state_40008__$1;
(statearr_40056_40111[(2)] = true);

(statearr_40056_40111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (38))){
var inst_39998 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
var statearr_40057_40112 = state_40008__$1;
(statearr_40057_40112[(2)] = inst_39998);

(statearr_40057_40112[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (30))){
var inst_39968 = (state_40008[(9)]);
var inst_39962 = (state_40008[(13)]);
var inst_39961 = (state_40008[(11)]);
var inst_39985 = cljs.core.empty_QMARK_.call(null,inst_39961);
var inst_39986 = inst_39962.call(null,inst_39968);
var inst_39987 = cljs.core.not.call(null,inst_39986);
var inst_39988 = (inst_39985) && (inst_39987);
var state_40008__$1 = state_40008;
var statearr_40058_40113 = state_40008__$1;
(statearr_40058_40113[(2)] = inst_39988);

(statearr_40058_40113[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (10))){
var inst_39914 = (state_40008[(8)]);
var inst_39934 = (state_40008[(2)]);
var inst_39935 = cljs.core.get.call(null,inst_39934,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39936 = cljs.core.get.call(null,inst_39934,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39937 = cljs.core.get.call(null,inst_39934,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39938 = inst_39914;
var state_40008__$1 = (function (){var statearr_40059 = state_40008;
(statearr_40059[(7)] = inst_39938);

(statearr_40059[(16)] = inst_39936);

(statearr_40059[(17)] = inst_39935);

(statearr_40059[(18)] = inst_39937);

return statearr_40059;
})();
var statearr_40060_40114 = state_40008__$1;
(statearr_40060_40114[(2)] = null);

(statearr_40060_40114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (18))){
var inst_39952 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
var statearr_40061_40115 = state_40008__$1;
(statearr_40061_40115[(2)] = inst_39952);

(statearr_40061_40115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (37))){
var state_40008__$1 = state_40008;
var statearr_40062_40116 = state_40008__$1;
(statearr_40062_40116[(2)] = null);

(statearr_40062_40116[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40009 === (8))){
var inst_39914 = (state_40008[(8)]);
var inst_39931 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39914);
var state_40008__$1 = state_40008;
var statearr_40063_40117 = state_40008__$1;
(statearr_40063_40117[(2)] = inst_39931);

(statearr_40063_40117[(1)] = (10));


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
});})(c__27278__auto___40071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27213__auto__,c__27278__auto___40071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27214__auto__ = null;
var cljs$core$async$mix_$_state_machine__27214__auto____0 = (function (){
var statearr_40067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40067[(0)] = cljs$core$async$mix_$_state_machine__27214__auto__);

(statearr_40067[(1)] = (1));

return statearr_40067;
});
var cljs$core$async$mix_$_state_machine__27214__auto____1 = (function (state_40008){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40068){if((e40068 instanceof Object)){
var ex__27217__auto__ = e40068;
var statearr_40069_40118 = state_40008;
(statearr_40069_40118[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40119 = state_40008;
state_40008 = G__40119;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27214__auto__ = function(state_40008){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27214__auto____1.call(this,state_40008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27214__auto____0;
cljs$core$async$mix_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27214__auto____1;
return cljs$core$async$mix_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___40071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27280__auto__ = (function (){var statearr_40070 = f__27279__auto__.call(null);
(statearr_40070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___40071);

return statearr_40070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___40071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19520__auto__ = (((p == null))?null:p);
var m__19521__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19521__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19520__auto__ = (((p == null))?null:p);
var m__19521__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,p,v,ch);
} else {
var m__19521__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args40122 = [];
var len__19923__auto___40125 = arguments.length;
var i__19924__auto___40126 = (0);
while(true){
if((i__19924__auto___40126 < len__19923__auto___40125)){
args40122.push((arguments[i__19924__auto___40126]));

var G__40127 = (i__19924__auto___40126 + (1));
i__19924__auto___40126 = G__40127;
continue;
} else {
}
break;
}

var G__40124 = args40122.length;
switch (G__40124) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40122.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19520__auto__ = (((p == null))?null:p);
var m__19521__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,p);
} else {
var m__19521__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,p);
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
var x__19520__auto__ = (((p == null))?null:p);
var m__19521__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,p,v);
} else {
var m__19521__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args40130 = [];
var len__19923__auto___40255 = arguments.length;
var i__19924__auto___40256 = (0);
while(true){
if((i__19924__auto___40256 < len__19923__auto___40255)){
args40130.push((arguments[i__19924__auto___40256]));

var G__40257 = (i__19924__auto___40256 + (1));
i__19924__auto___40256 = G__40257;
continue;
} else {
}
break;
}

var G__40132 = args40130.length;
switch (G__40132) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40130.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18884__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18884__auto__,mults){
return (function (p1__40129_SHARP_){
if(cljs.core.truth_(p1__40129_SHARP_.call(null,topic))){
return p1__40129_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40129_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18884__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t40133 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40133 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40134){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40134 = meta40134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40135,meta40134__$1){
var self__ = this;
var _40135__$1 = this;
return (new cljs.core.async.t40133(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40134__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t40133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40135){
var self__ = this;
var _40135__$1 = this;
return self__.meta40134;
});})(mults,ensure_mult))
;

cljs.core.async.t40133.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t40133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t40133.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t40133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t40133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t40133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t40133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t40133.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40134","meta40134",-1289644284,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t40133.cljs$lang$type = true;

cljs.core.async.t40133.cljs$lang$ctorStr = "cljs.core.async/t40133";

cljs.core.async.t40133.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t40133");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t40133 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t40133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40134){
return (new cljs.core.async.t40133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40134));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t40133(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27278__auto___40259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___40259,mults,ensure_mult,p){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___40259,mults,ensure_mult,p){
return (function (state_40207){
var state_val_40208 = (state_40207[(1)]);
if((state_val_40208 === (7))){
var inst_40203 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
var statearr_40209_40260 = state_40207__$1;
(statearr_40209_40260[(2)] = inst_40203);

(statearr_40209_40260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (20))){
var state_40207__$1 = state_40207;
var statearr_40210_40261 = state_40207__$1;
(statearr_40210_40261[(2)] = null);

(statearr_40210_40261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (1))){
var state_40207__$1 = state_40207;
var statearr_40211_40262 = state_40207__$1;
(statearr_40211_40262[(2)] = null);

(statearr_40211_40262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (24))){
var inst_40186 = (state_40207[(7)]);
var inst_40195 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40186);
var state_40207__$1 = state_40207;
var statearr_40212_40263 = state_40207__$1;
(statearr_40212_40263[(2)] = inst_40195);

(statearr_40212_40263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (4))){
var inst_40138 = (state_40207[(8)]);
var inst_40138__$1 = (state_40207[(2)]);
var inst_40139 = (inst_40138__$1 == null);
var state_40207__$1 = (function (){var statearr_40213 = state_40207;
(statearr_40213[(8)] = inst_40138__$1);

return statearr_40213;
})();
if(cljs.core.truth_(inst_40139)){
var statearr_40214_40264 = state_40207__$1;
(statearr_40214_40264[(1)] = (5));

} else {
var statearr_40215_40265 = state_40207__$1;
(statearr_40215_40265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (15))){
var inst_40180 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
var statearr_40216_40266 = state_40207__$1;
(statearr_40216_40266[(2)] = inst_40180);

(statearr_40216_40266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (21))){
var inst_40200 = (state_40207[(2)]);
var state_40207__$1 = (function (){var statearr_40217 = state_40207;
(statearr_40217[(9)] = inst_40200);

return statearr_40217;
})();
var statearr_40218_40267 = state_40207__$1;
(statearr_40218_40267[(2)] = null);

(statearr_40218_40267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (13))){
var inst_40162 = (state_40207[(10)]);
var inst_40164 = cljs.core.chunked_seq_QMARK_.call(null,inst_40162);
var state_40207__$1 = state_40207;
if(inst_40164){
var statearr_40219_40268 = state_40207__$1;
(statearr_40219_40268[(1)] = (16));

} else {
var statearr_40220_40269 = state_40207__$1;
(statearr_40220_40269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (22))){
var inst_40192 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
if(cljs.core.truth_(inst_40192)){
var statearr_40221_40270 = state_40207__$1;
(statearr_40221_40270[(1)] = (23));

} else {
var statearr_40222_40271 = state_40207__$1;
(statearr_40222_40271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (6))){
var inst_40188 = (state_40207[(11)]);
var inst_40186 = (state_40207[(7)]);
var inst_40138 = (state_40207[(8)]);
var inst_40186__$1 = topic_fn.call(null,inst_40138);
var inst_40187 = cljs.core.deref.call(null,mults);
var inst_40188__$1 = cljs.core.get.call(null,inst_40187,inst_40186__$1);
var state_40207__$1 = (function (){var statearr_40223 = state_40207;
(statearr_40223[(11)] = inst_40188__$1);

(statearr_40223[(7)] = inst_40186__$1);

return statearr_40223;
})();
if(cljs.core.truth_(inst_40188__$1)){
var statearr_40224_40272 = state_40207__$1;
(statearr_40224_40272[(1)] = (19));

} else {
var statearr_40225_40273 = state_40207__$1;
(statearr_40225_40273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (25))){
var inst_40197 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
var statearr_40226_40274 = state_40207__$1;
(statearr_40226_40274[(2)] = inst_40197);

(statearr_40226_40274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (17))){
var inst_40162 = (state_40207[(10)]);
var inst_40171 = cljs.core.first.call(null,inst_40162);
var inst_40172 = cljs.core.async.muxch_STAR_.call(null,inst_40171);
var inst_40173 = cljs.core.async.close_BANG_.call(null,inst_40172);
var inst_40174 = cljs.core.next.call(null,inst_40162);
var inst_40148 = inst_40174;
var inst_40149 = null;
var inst_40150 = (0);
var inst_40151 = (0);
var state_40207__$1 = (function (){var statearr_40227 = state_40207;
(statearr_40227[(12)] = inst_40173);

(statearr_40227[(13)] = inst_40149);

(statearr_40227[(14)] = inst_40151);

(statearr_40227[(15)] = inst_40148);

(statearr_40227[(16)] = inst_40150);

return statearr_40227;
})();
var statearr_40228_40275 = state_40207__$1;
(statearr_40228_40275[(2)] = null);

(statearr_40228_40275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (3))){
var inst_40205 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40207__$1,inst_40205);
} else {
if((state_val_40208 === (12))){
var inst_40182 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
var statearr_40229_40276 = state_40207__$1;
(statearr_40229_40276[(2)] = inst_40182);

(statearr_40229_40276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (2))){
var state_40207__$1 = state_40207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40207__$1,(4),ch);
} else {
if((state_val_40208 === (23))){
var state_40207__$1 = state_40207;
var statearr_40230_40277 = state_40207__$1;
(statearr_40230_40277[(2)] = null);

(statearr_40230_40277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (19))){
var inst_40188 = (state_40207[(11)]);
var inst_40138 = (state_40207[(8)]);
var inst_40190 = cljs.core.async.muxch_STAR_.call(null,inst_40188);
var state_40207__$1 = state_40207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40207__$1,(22),inst_40190,inst_40138);
} else {
if((state_val_40208 === (11))){
var inst_40148 = (state_40207[(15)]);
var inst_40162 = (state_40207[(10)]);
var inst_40162__$1 = cljs.core.seq.call(null,inst_40148);
var state_40207__$1 = (function (){var statearr_40231 = state_40207;
(statearr_40231[(10)] = inst_40162__$1);

return statearr_40231;
})();
if(inst_40162__$1){
var statearr_40232_40278 = state_40207__$1;
(statearr_40232_40278[(1)] = (13));

} else {
var statearr_40233_40279 = state_40207__$1;
(statearr_40233_40279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (9))){
var inst_40184 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
var statearr_40234_40280 = state_40207__$1;
(statearr_40234_40280[(2)] = inst_40184);

(statearr_40234_40280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (5))){
var inst_40145 = cljs.core.deref.call(null,mults);
var inst_40146 = cljs.core.vals.call(null,inst_40145);
var inst_40147 = cljs.core.seq.call(null,inst_40146);
var inst_40148 = inst_40147;
var inst_40149 = null;
var inst_40150 = (0);
var inst_40151 = (0);
var state_40207__$1 = (function (){var statearr_40235 = state_40207;
(statearr_40235[(13)] = inst_40149);

(statearr_40235[(14)] = inst_40151);

(statearr_40235[(15)] = inst_40148);

(statearr_40235[(16)] = inst_40150);

return statearr_40235;
})();
var statearr_40236_40281 = state_40207__$1;
(statearr_40236_40281[(2)] = null);

(statearr_40236_40281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (14))){
var state_40207__$1 = state_40207;
var statearr_40240_40282 = state_40207__$1;
(statearr_40240_40282[(2)] = null);

(statearr_40240_40282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (16))){
var inst_40162 = (state_40207[(10)]);
var inst_40166 = cljs.core.chunk_first.call(null,inst_40162);
var inst_40167 = cljs.core.chunk_rest.call(null,inst_40162);
var inst_40168 = cljs.core.count.call(null,inst_40166);
var inst_40148 = inst_40167;
var inst_40149 = inst_40166;
var inst_40150 = inst_40168;
var inst_40151 = (0);
var state_40207__$1 = (function (){var statearr_40241 = state_40207;
(statearr_40241[(13)] = inst_40149);

(statearr_40241[(14)] = inst_40151);

(statearr_40241[(15)] = inst_40148);

(statearr_40241[(16)] = inst_40150);

return statearr_40241;
})();
var statearr_40242_40283 = state_40207__$1;
(statearr_40242_40283[(2)] = null);

(statearr_40242_40283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (10))){
var inst_40149 = (state_40207[(13)]);
var inst_40151 = (state_40207[(14)]);
var inst_40148 = (state_40207[(15)]);
var inst_40150 = (state_40207[(16)]);
var inst_40156 = cljs.core._nth.call(null,inst_40149,inst_40151);
var inst_40157 = cljs.core.async.muxch_STAR_.call(null,inst_40156);
var inst_40158 = cljs.core.async.close_BANG_.call(null,inst_40157);
var inst_40159 = (inst_40151 + (1));
var tmp40237 = inst_40149;
var tmp40238 = inst_40148;
var tmp40239 = inst_40150;
var inst_40148__$1 = tmp40238;
var inst_40149__$1 = tmp40237;
var inst_40150__$1 = tmp40239;
var inst_40151__$1 = inst_40159;
var state_40207__$1 = (function (){var statearr_40243 = state_40207;
(statearr_40243[(13)] = inst_40149__$1);

(statearr_40243[(14)] = inst_40151__$1);

(statearr_40243[(17)] = inst_40158);

(statearr_40243[(15)] = inst_40148__$1);

(statearr_40243[(16)] = inst_40150__$1);

return statearr_40243;
})();
var statearr_40244_40284 = state_40207__$1;
(statearr_40244_40284[(2)] = null);

(statearr_40244_40284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (18))){
var inst_40177 = (state_40207[(2)]);
var state_40207__$1 = state_40207;
var statearr_40245_40285 = state_40207__$1;
(statearr_40245_40285[(2)] = inst_40177);

(statearr_40245_40285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40208 === (8))){
var inst_40151 = (state_40207[(14)]);
var inst_40150 = (state_40207[(16)]);
var inst_40153 = (inst_40151 < inst_40150);
var inst_40154 = inst_40153;
var state_40207__$1 = state_40207;
if(cljs.core.truth_(inst_40154)){
var statearr_40246_40286 = state_40207__$1;
(statearr_40246_40286[(1)] = (10));

} else {
var statearr_40247_40287 = state_40207__$1;
(statearr_40247_40287[(1)] = (11));

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
});})(c__27278__auto___40259,mults,ensure_mult,p))
;
return ((function (switch__27213__auto__,c__27278__auto___40259,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_40251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40251[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_40251[(1)] = (1));

return statearr_40251;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_40207){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40252){if((e40252 instanceof Object)){
var ex__27217__auto__ = e40252;
var statearr_40253_40288 = state_40207;
(statearr_40253_40288[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40289 = state_40207;
state_40207 = G__40289;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_40207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_40207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___40259,mults,ensure_mult,p))
})();
var state__27280__auto__ = (function (){var statearr_40254 = f__27279__auto__.call(null);
(statearr_40254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___40259);

return statearr_40254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___40259,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args40290 = [];
var len__19923__auto___40293 = arguments.length;
var i__19924__auto___40294 = (0);
while(true){
if((i__19924__auto___40294 < len__19923__auto___40293)){
args40290.push((arguments[i__19924__auto___40294]));

var G__40295 = (i__19924__auto___40294 + (1));
i__19924__auto___40294 = G__40295;
continue;
} else {
}
break;
}

var G__40292 = args40290.length;
switch (G__40292) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40290.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args40297 = [];
var len__19923__auto___40300 = arguments.length;
var i__19924__auto___40301 = (0);
while(true){
if((i__19924__auto___40301 < len__19923__auto___40300)){
args40297.push((arguments[i__19924__auto___40301]));

var G__40302 = (i__19924__auto___40301 + (1));
i__19924__auto___40301 = G__40302;
continue;
} else {
}
break;
}

var G__40299 = args40297.length;
switch (G__40299) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40297.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args40304 = [];
var len__19923__auto___40375 = arguments.length;
var i__19924__auto___40376 = (0);
while(true){
if((i__19924__auto___40376 < len__19923__auto___40375)){
args40304.push((arguments[i__19924__auto___40376]));

var G__40377 = (i__19924__auto___40376 + (1));
i__19924__auto___40376 = G__40377;
continue;
} else {
}
break;
}

var G__40306 = args40304.length;
switch (G__40306) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40304.length)].join('')));

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
var c__27278__auto___40379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___40379,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___40379,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40345){
var state_val_40346 = (state_40345[(1)]);
if((state_val_40346 === (7))){
var state_40345__$1 = state_40345;
var statearr_40347_40380 = state_40345__$1;
(statearr_40347_40380[(2)] = null);

(statearr_40347_40380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (1))){
var state_40345__$1 = state_40345;
var statearr_40348_40381 = state_40345__$1;
(statearr_40348_40381[(2)] = null);

(statearr_40348_40381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (4))){
var inst_40309 = (state_40345[(7)]);
var inst_40311 = (inst_40309 < cnt);
var state_40345__$1 = state_40345;
if(cljs.core.truth_(inst_40311)){
var statearr_40349_40382 = state_40345__$1;
(statearr_40349_40382[(1)] = (6));

} else {
var statearr_40350_40383 = state_40345__$1;
(statearr_40350_40383[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (15))){
var inst_40341 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
var statearr_40351_40384 = state_40345__$1;
(statearr_40351_40384[(2)] = inst_40341);

(statearr_40351_40384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (13))){
var inst_40334 = cljs.core.async.close_BANG_.call(null,out);
var state_40345__$1 = state_40345;
var statearr_40352_40385 = state_40345__$1;
(statearr_40352_40385[(2)] = inst_40334);

(statearr_40352_40385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (6))){
var state_40345__$1 = state_40345;
var statearr_40353_40386 = state_40345__$1;
(statearr_40353_40386[(2)] = null);

(statearr_40353_40386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (3))){
var inst_40343 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40345__$1,inst_40343);
} else {
if((state_val_40346 === (12))){
var inst_40331 = (state_40345[(8)]);
var inst_40331__$1 = (state_40345[(2)]);
var inst_40332 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40331__$1);
var state_40345__$1 = (function (){var statearr_40354 = state_40345;
(statearr_40354[(8)] = inst_40331__$1);

return statearr_40354;
})();
if(cljs.core.truth_(inst_40332)){
var statearr_40355_40387 = state_40345__$1;
(statearr_40355_40387[(1)] = (13));

} else {
var statearr_40356_40388 = state_40345__$1;
(statearr_40356_40388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (2))){
var inst_40308 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40309 = (0);
var state_40345__$1 = (function (){var statearr_40357 = state_40345;
(statearr_40357[(7)] = inst_40309);

(statearr_40357[(9)] = inst_40308);

return statearr_40357;
})();
var statearr_40358_40389 = state_40345__$1;
(statearr_40358_40389[(2)] = null);

(statearr_40358_40389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (11))){
var inst_40309 = (state_40345[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40345,(10),Object,null,(9));
var inst_40318 = chs__$1.call(null,inst_40309);
var inst_40319 = done.call(null,inst_40309);
var inst_40320 = cljs.core.async.take_BANG_.call(null,inst_40318,inst_40319);
var state_40345__$1 = state_40345;
var statearr_40359_40390 = state_40345__$1;
(statearr_40359_40390[(2)] = inst_40320);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (9))){
var inst_40309 = (state_40345[(7)]);
var inst_40322 = (state_40345[(2)]);
var inst_40323 = (inst_40309 + (1));
var inst_40309__$1 = inst_40323;
var state_40345__$1 = (function (){var statearr_40360 = state_40345;
(statearr_40360[(7)] = inst_40309__$1);

(statearr_40360[(10)] = inst_40322);

return statearr_40360;
})();
var statearr_40361_40391 = state_40345__$1;
(statearr_40361_40391[(2)] = null);

(statearr_40361_40391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (5))){
var inst_40329 = (state_40345[(2)]);
var state_40345__$1 = (function (){var statearr_40362 = state_40345;
(statearr_40362[(11)] = inst_40329);

return statearr_40362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40345__$1,(12),dchan);
} else {
if((state_val_40346 === (14))){
var inst_40331 = (state_40345[(8)]);
var inst_40336 = cljs.core.apply.call(null,f,inst_40331);
var state_40345__$1 = state_40345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40345__$1,(16),out,inst_40336);
} else {
if((state_val_40346 === (16))){
var inst_40338 = (state_40345[(2)]);
var state_40345__$1 = (function (){var statearr_40363 = state_40345;
(statearr_40363[(12)] = inst_40338);

return statearr_40363;
})();
var statearr_40364_40392 = state_40345__$1;
(statearr_40364_40392[(2)] = null);

(statearr_40364_40392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (10))){
var inst_40313 = (state_40345[(2)]);
var inst_40314 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40345__$1 = (function (){var statearr_40365 = state_40345;
(statearr_40365[(13)] = inst_40313);

return statearr_40365;
})();
var statearr_40366_40393 = state_40345__$1;
(statearr_40366_40393[(2)] = inst_40314);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (8))){
var inst_40327 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
var statearr_40367_40394 = state_40345__$1;
(statearr_40367_40394[(2)] = inst_40327);

(statearr_40367_40394[(1)] = (5));


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
});})(c__27278__auto___40379,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27213__auto__,c__27278__auto___40379,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_40371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40371[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_40371[(1)] = (1));

return statearr_40371;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_40345){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40372){if((e40372 instanceof Object)){
var ex__27217__auto__ = e40372;
var statearr_40373_40395 = state_40345;
(statearr_40373_40395[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40396 = state_40345;
state_40345 = G__40396;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_40345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_40345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___40379,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27280__auto__ = (function (){var statearr_40374 = f__27279__auto__.call(null);
(statearr_40374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___40379);

return statearr_40374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___40379,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args40398 = [];
var len__19923__auto___40454 = arguments.length;
var i__19924__auto___40455 = (0);
while(true){
if((i__19924__auto___40455 < len__19923__auto___40454)){
args40398.push((arguments[i__19924__auto___40455]));

var G__40456 = (i__19924__auto___40455 + (1));
i__19924__auto___40455 = G__40456;
continue;
} else {
}
break;
}

var G__40400 = args40398.length;
switch (G__40400) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40398.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27278__auto___40458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___40458,out){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___40458,out){
return (function (state_40430){
var state_val_40431 = (state_40430[(1)]);
if((state_val_40431 === (7))){
var inst_40409 = (state_40430[(7)]);
var inst_40410 = (state_40430[(8)]);
var inst_40409__$1 = (state_40430[(2)]);
var inst_40410__$1 = cljs.core.nth.call(null,inst_40409__$1,(0),null);
var inst_40411 = cljs.core.nth.call(null,inst_40409__$1,(1),null);
var inst_40412 = (inst_40410__$1 == null);
var state_40430__$1 = (function (){var statearr_40432 = state_40430;
(statearr_40432[(7)] = inst_40409__$1);

(statearr_40432[(9)] = inst_40411);

(statearr_40432[(8)] = inst_40410__$1);

return statearr_40432;
})();
if(cljs.core.truth_(inst_40412)){
var statearr_40433_40459 = state_40430__$1;
(statearr_40433_40459[(1)] = (8));

} else {
var statearr_40434_40460 = state_40430__$1;
(statearr_40434_40460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40431 === (1))){
var inst_40401 = cljs.core.vec.call(null,chs);
var inst_40402 = inst_40401;
var state_40430__$1 = (function (){var statearr_40435 = state_40430;
(statearr_40435[(10)] = inst_40402);

return statearr_40435;
})();
var statearr_40436_40461 = state_40430__$1;
(statearr_40436_40461[(2)] = null);

(statearr_40436_40461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40431 === (4))){
var inst_40402 = (state_40430[(10)]);
var state_40430__$1 = state_40430;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40430__$1,(7),inst_40402);
} else {
if((state_val_40431 === (6))){
var inst_40426 = (state_40430[(2)]);
var state_40430__$1 = state_40430;
var statearr_40437_40462 = state_40430__$1;
(statearr_40437_40462[(2)] = inst_40426);

(statearr_40437_40462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40431 === (3))){
var inst_40428 = (state_40430[(2)]);
var state_40430__$1 = state_40430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40430__$1,inst_40428);
} else {
if((state_val_40431 === (2))){
var inst_40402 = (state_40430[(10)]);
var inst_40404 = cljs.core.count.call(null,inst_40402);
var inst_40405 = (inst_40404 > (0));
var state_40430__$1 = state_40430;
if(cljs.core.truth_(inst_40405)){
var statearr_40439_40463 = state_40430__$1;
(statearr_40439_40463[(1)] = (4));

} else {
var statearr_40440_40464 = state_40430__$1;
(statearr_40440_40464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40431 === (11))){
var inst_40402 = (state_40430[(10)]);
var inst_40419 = (state_40430[(2)]);
var tmp40438 = inst_40402;
var inst_40402__$1 = tmp40438;
var state_40430__$1 = (function (){var statearr_40441 = state_40430;
(statearr_40441[(10)] = inst_40402__$1);

(statearr_40441[(11)] = inst_40419);

return statearr_40441;
})();
var statearr_40442_40465 = state_40430__$1;
(statearr_40442_40465[(2)] = null);

(statearr_40442_40465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40431 === (9))){
var inst_40410 = (state_40430[(8)]);
var state_40430__$1 = state_40430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40430__$1,(11),out,inst_40410);
} else {
if((state_val_40431 === (5))){
var inst_40424 = cljs.core.async.close_BANG_.call(null,out);
var state_40430__$1 = state_40430;
var statearr_40443_40466 = state_40430__$1;
(statearr_40443_40466[(2)] = inst_40424);

(statearr_40443_40466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40431 === (10))){
var inst_40422 = (state_40430[(2)]);
var state_40430__$1 = state_40430;
var statearr_40444_40467 = state_40430__$1;
(statearr_40444_40467[(2)] = inst_40422);

(statearr_40444_40467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40431 === (8))){
var inst_40402 = (state_40430[(10)]);
var inst_40409 = (state_40430[(7)]);
var inst_40411 = (state_40430[(9)]);
var inst_40410 = (state_40430[(8)]);
var inst_40414 = (function (){var cs = inst_40402;
var vec__40407 = inst_40409;
var v = inst_40410;
var c = inst_40411;
return ((function (cs,vec__40407,v,c,inst_40402,inst_40409,inst_40411,inst_40410,state_val_40431,c__27278__auto___40458,out){
return (function (p1__40397_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40397_SHARP_);
});
;})(cs,vec__40407,v,c,inst_40402,inst_40409,inst_40411,inst_40410,state_val_40431,c__27278__auto___40458,out))
})();
var inst_40415 = cljs.core.filterv.call(null,inst_40414,inst_40402);
var inst_40402__$1 = inst_40415;
var state_40430__$1 = (function (){var statearr_40445 = state_40430;
(statearr_40445[(10)] = inst_40402__$1);

return statearr_40445;
})();
var statearr_40446_40468 = state_40430__$1;
(statearr_40446_40468[(2)] = null);

(statearr_40446_40468[(1)] = (2));


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
});})(c__27278__auto___40458,out))
;
return ((function (switch__27213__auto__,c__27278__auto___40458,out){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_40450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40450[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_40450[(1)] = (1));

return statearr_40450;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_40430){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40451){if((e40451 instanceof Object)){
var ex__27217__auto__ = e40451;
var statearr_40452_40469 = state_40430;
(statearr_40452_40469[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40470 = state_40430;
state_40430 = G__40470;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_40430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_40430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___40458,out))
})();
var state__27280__auto__ = (function (){var statearr_40453 = f__27279__auto__.call(null);
(statearr_40453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___40458);

return statearr_40453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___40458,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args40471 = [];
var len__19923__auto___40520 = arguments.length;
var i__19924__auto___40521 = (0);
while(true){
if((i__19924__auto___40521 < len__19923__auto___40520)){
args40471.push((arguments[i__19924__auto___40521]));

var G__40522 = (i__19924__auto___40521 + (1));
i__19924__auto___40521 = G__40522;
continue;
} else {
}
break;
}

var G__40473 = args40471.length;
switch (G__40473) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40471.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27278__auto___40524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___40524,out){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___40524,out){
return (function (state_40497){
var state_val_40498 = (state_40497[(1)]);
if((state_val_40498 === (7))){
var inst_40479 = (state_40497[(7)]);
var inst_40479__$1 = (state_40497[(2)]);
var inst_40480 = (inst_40479__$1 == null);
var inst_40481 = cljs.core.not.call(null,inst_40480);
var state_40497__$1 = (function (){var statearr_40499 = state_40497;
(statearr_40499[(7)] = inst_40479__$1);

return statearr_40499;
})();
if(inst_40481){
var statearr_40500_40525 = state_40497__$1;
(statearr_40500_40525[(1)] = (8));

} else {
var statearr_40501_40526 = state_40497__$1;
(statearr_40501_40526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (1))){
var inst_40474 = (0);
var state_40497__$1 = (function (){var statearr_40502 = state_40497;
(statearr_40502[(8)] = inst_40474);

return statearr_40502;
})();
var statearr_40503_40527 = state_40497__$1;
(statearr_40503_40527[(2)] = null);

(statearr_40503_40527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (4))){
var state_40497__$1 = state_40497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40497__$1,(7),ch);
} else {
if((state_val_40498 === (6))){
var inst_40492 = (state_40497[(2)]);
var state_40497__$1 = state_40497;
var statearr_40504_40528 = state_40497__$1;
(statearr_40504_40528[(2)] = inst_40492);

(statearr_40504_40528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (3))){
var inst_40494 = (state_40497[(2)]);
var inst_40495 = cljs.core.async.close_BANG_.call(null,out);
var state_40497__$1 = (function (){var statearr_40505 = state_40497;
(statearr_40505[(9)] = inst_40494);

return statearr_40505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40497__$1,inst_40495);
} else {
if((state_val_40498 === (2))){
var inst_40474 = (state_40497[(8)]);
var inst_40476 = (inst_40474 < n);
var state_40497__$1 = state_40497;
if(cljs.core.truth_(inst_40476)){
var statearr_40506_40529 = state_40497__$1;
(statearr_40506_40529[(1)] = (4));

} else {
var statearr_40507_40530 = state_40497__$1;
(statearr_40507_40530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (11))){
var inst_40474 = (state_40497[(8)]);
var inst_40484 = (state_40497[(2)]);
var inst_40485 = (inst_40474 + (1));
var inst_40474__$1 = inst_40485;
var state_40497__$1 = (function (){var statearr_40508 = state_40497;
(statearr_40508[(10)] = inst_40484);

(statearr_40508[(8)] = inst_40474__$1);

return statearr_40508;
})();
var statearr_40509_40531 = state_40497__$1;
(statearr_40509_40531[(2)] = null);

(statearr_40509_40531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (9))){
var state_40497__$1 = state_40497;
var statearr_40510_40532 = state_40497__$1;
(statearr_40510_40532[(2)] = null);

(statearr_40510_40532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (5))){
var state_40497__$1 = state_40497;
var statearr_40511_40533 = state_40497__$1;
(statearr_40511_40533[(2)] = null);

(statearr_40511_40533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (10))){
var inst_40489 = (state_40497[(2)]);
var state_40497__$1 = state_40497;
var statearr_40512_40534 = state_40497__$1;
(statearr_40512_40534[(2)] = inst_40489);

(statearr_40512_40534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40498 === (8))){
var inst_40479 = (state_40497[(7)]);
var state_40497__$1 = state_40497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40497__$1,(11),out,inst_40479);
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
});})(c__27278__auto___40524,out))
;
return ((function (switch__27213__auto__,c__27278__auto___40524,out){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_40516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40516[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_40516[(1)] = (1));

return statearr_40516;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_40497){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40517){if((e40517 instanceof Object)){
var ex__27217__auto__ = e40517;
var statearr_40518_40535 = state_40497;
(statearr_40518_40535[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40536 = state_40497;
state_40497 = G__40536;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_40497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_40497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___40524,out))
})();
var state__27280__auto__ = (function (){var statearr_40519 = f__27279__auto__.call(null);
(statearr_40519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___40524);

return statearr_40519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___40524,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t40544 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40544 = (function (map_LT_,f,ch,meta40545){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40545 = meta40545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40546,meta40545__$1){
var self__ = this;
var _40546__$1 = this;
return (new cljs.core.async.t40544(self__.map_LT_,self__.f,self__.ch,meta40545__$1));
});

cljs.core.async.t40544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40546){
var self__ = this;
var _40546__$1 = this;
return self__.meta40545;
});

cljs.core.async.t40544.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40544.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40544.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t40547 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40547 = (function (map_LT_,f,ch,meta40545,_,fn1,meta40548){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40545 = meta40545;
this._ = _;
this.fn1 = fn1;
this.meta40548 = meta40548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40549,meta40548__$1){
var self__ = this;
var _40549__$1 = this;
return (new cljs.core.async.t40547(self__.map_LT_,self__.f,self__.ch,self__.meta40545,self__._,self__.fn1,meta40548__$1));
});})(___$1))
;

cljs.core.async.t40547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40549){
var self__ = this;
var _40549__$1 = this;
return self__.meta40548;
});})(___$1))
;

cljs.core.async.t40547.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t40547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40537_SHARP_){
return f1.call(null,(((p1__40537_SHARP_ == null))?null:self__.f.call(null,p1__40537_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t40547.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40545","meta40545",812921666,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t40544","cljs.core.async/t40544",1185643244,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40548","meta40548",2027527092,null)], null);
});})(___$1))
;

cljs.core.async.t40547.cljs$lang$type = true;

cljs.core.async.t40547.cljs$lang$ctorStr = "cljs.core.async/t40547";

cljs.core.async.t40547.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t40547");
});})(___$1))
;

cljs.core.async.__GT_t40547 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t40547(map_LT___$1,f__$1,ch__$1,meta40545__$1,___$2,fn1__$1,meta40548){
return (new cljs.core.async.t40547(map_LT___$1,f__$1,ch__$1,meta40545__$1,___$2,fn1__$1,meta40548));
});})(___$1))
;

}

return (new cljs.core.async.t40547(self__.map_LT_,self__.f,self__.ch,self__.meta40545,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18872__auto__ = ret;
if(cljs.core.truth_(and__18872__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18872__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t40544.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t40544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40545","meta40545",812921666,null)], null);
});

cljs.core.async.t40544.cljs$lang$type = true;

cljs.core.async.t40544.cljs$lang$ctorStr = "cljs.core.async/t40544";

cljs.core.async.t40544.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t40544");
});

cljs.core.async.__GT_t40544 = (function cljs$core$async$map_LT__$___GT_t40544(map_LT___$1,f__$1,ch__$1,meta40545){
return (new cljs.core.async.t40544(map_LT___$1,f__$1,ch__$1,meta40545));
});

}

return (new cljs.core.async.t40544(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t40553 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40553 = (function (map_GT_,f,ch,meta40554){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40554 = meta40554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40555,meta40554__$1){
var self__ = this;
var _40555__$1 = this;
return (new cljs.core.async.t40553(self__.map_GT_,self__.f,self__.ch,meta40554__$1));
});

cljs.core.async.t40553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40555){
var self__ = this;
var _40555__$1 = this;
return self__.meta40554;
});

cljs.core.async.t40553.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t40553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40554","meta40554",435715014,null)], null);
});

cljs.core.async.t40553.cljs$lang$type = true;

cljs.core.async.t40553.cljs$lang$ctorStr = "cljs.core.async/t40553";

cljs.core.async.t40553.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t40553");
});

cljs.core.async.__GT_t40553 = (function cljs$core$async$map_GT__$___GT_t40553(map_GT___$1,f__$1,ch__$1,meta40554){
return (new cljs.core.async.t40553(map_GT___$1,f__$1,ch__$1,meta40554));
});

}

return (new cljs.core.async.t40553(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t40559 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40559 = (function (filter_GT_,p,ch,meta40560){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40560 = meta40560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40561,meta40560__$1){
var self__ = this;
var _40561__$1 = this;
return (new cljs.core.async.t40559(self__.filter_GT_,self__.p,self__.ch,meta40560__$1));
});

cljs.core.async.t40559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40561){
var self__ = this;
var _40561__$1 = this;
return self__.meta40560;
});

cljs.core.async.t40559.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40559.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40559.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40559.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40559.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40559.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t40559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40560","meta40560",1984129255,null)], null);
});

cljs.core.async.t40559.cljs$lang$type = true;

cljs.core.async.t40559.cljs$lang$ctorStr = "cljs.core.async/t40559";

cljs.core.async.t40559.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"cljs.core.async/t40559");
});

cljs.core.async.__GT_t40559 = (function cljs$core$async$filter_GT__$___GT_t40559(filter_GT___$1,p__$1,ch__$1,meta40560){
return (new cljs.core.async.t40559(filter_GT___$1,p__$1,ch__$1,meta40560));
});

}

return (new cljs.core.async.t40559(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args40562 = [];
var len__19923__auto___40606 = arguments.length;
var i__19924__auto___40607 = (0);
while(true){
if((i__19924__auto___40607 < len__19923__auto___40606)){
args40562.push((arguments[i__19924__auto___40607]));

var G__40608 = (i__19924__auto___40607 + (1));
i__19924__auto___40607 = G__40608;
continue;
} else {
}
break;
}

var G__40564 = args40562.length;
switch (G__40564) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40562.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27278__auto___40610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___40610,out){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___40610,out){
return (function (state_40585){
var state_val_40586 = (state_40585[(1)]);
if((state_val_40586 === (7))){
var inst_40581 = (state_40585[(2)]);
var state_40585__$1 = state_40585;
var statearr_40587_40611 = state_40585__$1;
(statearr_40587_40611[(2)] = inst_40581);

(statearr_40587_40611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (1))){
var state_40585__$1 = state_40585;
var statearr_40588_40612 = state_40585__$1;
(statearr_40588_40612[(2)] = null);

(statearr_40588_40612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (4))){
var inst_40567 = (state_40585[(7)]);
var inst_40567__$1 = (state_40585[(2)]);
var inst_40568 = (inst_40567__$1 == null);
var state_40585__$1 = (function (){var statearr_40589 = state_40585;
(statearr_40589[(7)] = inst_40567__$1);

return statearr_40589;
})();
if(cljs.core.truth_(inst_40568)){
var statearr_40590_40613 = state_40585__$1;
(statearr_40590_40613[(1)] = (5));

} else {
var statearr_40591_40614 = state_40585__$1;
(statearr_40591_40614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (6))){
var inst_40567 = (state_40585[(7)]);
var inst_40572 = p.call(null,inst_40567);
var state_40585__$1 = state_40585;
if(cljs.core.truth_(inst_40572)){
var statearr_40592_40615 = state_40585__$1;
(statearr_40592_40615[(1)] = (8));

} else {
var statearr_40593_40616 = state_40585__$1;
(statearr_40593_40616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (3))){
var inst_40583 = (state_40585[(2)]);
var state_40585__$1 = state_40585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40585__$1,inst_40583);
} else {
if((state_val_40586 === (2))){
var state_40585__$1 = state_40585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40585__$1,(4),ch);
} else {
if((state_val_40586 === (11))){
var inst_40575 = (state_40585[(2)]);
var state_40585__$1 = state_40585;
var statearr_40594_40617 = state_40585__$1;
(statearr_40594_40617[(2)] = inst_40575);

(statearr_40594_40617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (9))){
var state_40585__$1 = state_40585;
var statearr_40595_40618 = state_40585__$1;
(statearr_40595_40618[(2)] = null);

(statearr_40595_40618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (5))){
var inst_40570 = cljs.core.async.close_BANG_.call(null,out);
var state_40585__$1 = state_40585;
var statearr_40596_40619 = state_40585__$1;
(statearr_40596_40619[(2)] = inst_40570);

(statearr_40596_40619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (10))){
var inst_40578 = (state_40585[(2)]);
var state_40585__$1 = (function (){var statearr_40597 = state_40585;
(statearr_40597[(8)] = inst_40578);

return statearr_40597;
})();
var statearr_40598_40620 = state_40585__$1;
(statearr_40598_40620[(2)] = null);

(statearr_40598_40620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40586 === (8))){
var inst_40567 = (state_40585[(7)]);
var state_40585__$1 = state_40585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40585__$1,(11),out,inst_40567);
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
});})(c__27278__auto___40610,out))
;
return ((function (switch__27213__auto__,c__27278__auto___40610,out){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_40602 = [null,null,null,null,null,null,null,null,null];
(statearr_40602[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_40602[(1)] = (1));

return statearr_40602;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_40585){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40603){if((e40603 instanceof Object)){
var ex__27217__auto__ = e40603;
var statearr_40604_40621 = state_40585;
(statearr_40604_40621[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40622 = state_40585;
state_40585 = G__40622;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_40585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_40585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___40610,out))
})();
var state__27280__auto__ = (function (){var statearr_40605 = f__27279__auto__.call(null);
(statearr_40605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___40610);

return statearr_40605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___40610,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args40623 = [];
var len__19923__auto___40626 = arguments.length;
var i__19924__auto___40627 = (0);
while(true){
if((i__19924__auto___40627 < len__19923__auto___40626)){
args40623.push((arguments[i__19924__auto___40627]));

var G__40628 = (i__19924__auto___40627 + (1));
i__19924__auto___40627 = G__40628;
continue;
} else {
}
break;
}

var G__40625 = args40623.length;
switch (G__40625) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40623.length)].join('')));

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
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__){
return (function (state_40795){
var state_val_40796 = (state_40795[(1)]);
if((state_val_40796 === (7))){
var inst_40791 = (state_40795[(2)]);
var state_40795__$1 = state_40795;
var statearr_40797_40838 = state_40795__$1;
(statearr_40797_40838[(2)] = inst_40791);

(statearr_40797_40838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (20))){
var inst_40761 = (state_40795[(7)]);
var inst_40772 = (state_40795[(2)]);
var inst_40773 = cljs.core.next.call(null,inst_40761);
var inst_40747 = inst_40773;
var inst_40748 = null;
var inst_40749 = (0);
var inst_40750 = (0);
var state_40795__$1 = (function (){var statearr_40798 = state_40795;
(statearr_40798[(8)] = inst_40749);

(statearr_40798[(9)] = inst_40747);

(statearr_40798[(10)] = inst_40748);

(statearr_40798[(11)] = inst_40772);

(statearr_40798[(12)] = inst_40750);

return statearr_40798;
})();
var statearr_40799_40839 = state_40795__$1;
(statearr_40799_40839[(2)] = null);

(statearr_40799_40839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (1))){
var state_40795__$1 = state_40795;
var statearr_40800_40840 = state_40795__$1;
(statearr_40800_40840[(2)] = null);

(statearr_40800_40840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (4))){
var inst_40736 = (state_40795[(13)]);
var inst_40736__$1 = (state_40795[(2)]);
var inst_40737 = (inst_40736__$1 == null);
var state_40795__$1 = (function (){var statearr_40801 = state_40795;
(statearr_40801[(13)] = inst_40736__$1);

return statearr_40801;
})();
if(cljs.core.truth_(inst_40737)){
var statearr_40802_40841 = state_40795__$1;
(statearr_40802_40841[(1)] = (5));

} else {
var statearr_40803_40842 = state_40795__$1;
(statearr_40803_40842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (15))){
var state_40795__$1 = state_40795;
var statearr_40807_40843 = state_40795__$1;
(statearr_40807_40843[(2)] = null);

(statearr_40807_40843[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (21))){
var state_40795__$1 = state_40795;
var statearr_40808_40844 = state_40795__$1;
(statearr_40808_40844[(2)] = null);

(statearr_40808_40844[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (13))){
var inst_40749 = (state_40795[(8)]);
var inst_40747 = (state_40795[(9)]);
var inst_40748 = (state_40795[(10)]);
var inst_40750 = (state_40795[(12)]);
var inst_40757 = (state_40795[(2)]);
var inst_40758 = (inst_40750 + (1));
var tmp40804 = inst_40749;
var tmp40805 = inst_40747;
var tmp40806 = inst_40748;
var inst_40747__$1 = tmp40805;
var inst_40748__$1 = tmp40806;
var inst_40749__$1 = tmp40804;
var inst_40750__$1 = inst_40758;
var state_40795__$1 = (function (){var statearr_40809 = state_40795;
(statearr_40809[(8)] = inst_40749__$1);

(statearr_40809[(9)] = inst_40747__$1);

(statearr_40809[(14)] = inst_40757);

(statearr_40809[(10)] = inst_40748__$1);

(statearr_40809[(12)] = inst_40750__$1);

return statearr_40809;
})();
var statearr_40810_40845 = state_40795__$1;
(statearr_40810_40845[(2)] = null);

(statearr_40810_40845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (22))){
var state_40795__$1 = state_40795;
var statearr_40811_40846 = state_40795__$1;
(statearr_40811_40846[(2)] = null);

(statearr_40811_40846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (6))){
var inst_40736 = (state_40795[(13)]);
var inst_40745 = f.call(null,inst_40736);
var inst_40746 = cljs.core.seq.call(null,inst_40745);
var inst_40747 = inst_40746;
var inst_40748 = null;
var inst_40749 = (0);
var inst_40750 = (0);
var state_40795__$1 = (function (){var statearr_40812 = state_40795;
(statearr_40812[(8)] = inst_40749);

(statearr_40812[(9)] = inst_40747);

(statearr_40812[(10)] = inst_40748);

(statearr_40812[(12)] = inst_40750);

return statearr_40812;
})();
var statearr_40813_40847 = state_40795__$1;
(statearr_40813_40847[(2)] = null);

(statearr_40813_40847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (17))){
var inst_40761 = (state_40795[(7)]);
var inst_40765 = cljs.core.chunk_first.call(null,inst_40761);
var inst_40766 = cljs.core.chunk_rest.call(null,inst_40761);
var inst_40767 = cljs.core.count.call(null,inst_40765);
var inst_40747 = inst_40766;
var inst_40748 = inst_40765;
var inst_40749 = inst_40767;
var inst_40750 = (0);
var state_40795__$1 = (function (){var statearr_40814 = state_40795;
(statearr_40814[(8)] = inst_40749);

(statearr_40814[(9)] = inst_40747);

(statearr_40814[(10)] = inst_40748);

(statearr_40814[(12)] = inst_40750);

return statearr_40814;
})();
var statearr_40815_40848 = state_40795__$1;
(statearr_40815_40848[(2)] = null);

(statearr_40815_40848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (3))){
var inst_40793 = (state_40795[(2)]);
var state_40795__$1 = state_40795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40795__$1,inst_40793);
} else {
if((state_val_40796 === (12))){
var inst_40781 = (state_40795[(2)]);
var state_40795__$1 = state_40795;
var statearr_40816_40849 = state_40795__$1;
(statearr_40816_40849[(2)] = inst_40781);

(statearr_40816_40849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (2))){
var state_40795__$1 = state_40795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40795__$1,(4),in$);
} else {
if((state_val_40796 === (23))){
var inst_40789 = (state_40795[(2)]);
var state_40795__$1 = state_40795;
var statearr_40817_40850 = state_40795__$1;
(statearr_40817_40850[(2)] = inst_40789);

(statearr_40817_40850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (19))){
var inst_40776 = (state_40795[(2)]);
var state_40795__$1 = state_40795;
var statearr_40818_40851 = state_40795__$1;
(statearr_40818_40851[(2)] = inst_40776);

(statearr_40818_40851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (11))){
var inst_40747 = (state_40795[(9)]);
var inst_40761 = (state_40795[(7)]);
var inst_40761__$1 = cljs.core.seq.call(null,inst_40747);
var state_40795__$1 = (function (){var statearr_40819 = state_40795;
(statearr_40819[(7)] = inst_40761__$1);

return statearr_40819;
})();
if(inst_40761__$1){
var statearr_40820_40852 = state_40795__$1;
(statearr_40820_40852[(1)] = (14));

} else {
var statearr_40821_40853 = state_40795__$1;
(statearr_40821_40853[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (9))){
var inst_40783 = (state_40795[(2)]);
var inst_40784 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40795__$1 = (function (){var statearr_40822 = state_40795;
(statearr_40822[(15)] = inst_40783);

return statearr_40822;
})();
if(cljs.core.truth_(inst_40784)){
var statearr_40823_40854 = state_40795__$1;
(statearr_40823_40854[(1)] = (21));

} else {
var statearr_40824_40855 = state_40795__$1;
(statearr_40824_40855[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (5))){
var inst_40739 = cljs.core.async.close_BANG_.call(null,out);
var state_40795__$1 = state_40795;
var statearr_40825_40856 = state_40795__$1;
(statearr_40825_40856[(2)] = inst_40739);

(statearr_40825_40856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (14))){
var inst_40761 = (state_40795[(7)]);
var inst_40763 = cljs.core.chunked_seq_QMARK_.call(null,inst_40761);
var state_40795__$1 = state_40795;
if(inst_40763){
var statearr_40826_40857 = state_40795__$1;
(statearr_40826_40857[(1)] = (17));

} else {
var statearr_40827_40858 = state_40795__$1;
(statearr_40827_40858[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (16))){
var inst_40779 = (state_40795[(2)]);
var state_40795__$1 = state_40795;
var statearr_40828_40859 = state_40795__$1;
(statearr_40828_40859[(2)] = inst_40779);

(statearr_40828_40859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40796 === (10))){
var inst_40748 = (state_40795[(10)]);
var inst_40750 = (state_40795[(12)]);
var inst_40755 = cljs.core._nth.call(null,inst_40748,inst_40750);
var state_40795__$1 = state_40795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40795__$1,(13),out,inst_40755);
} else {
if((state_val_40796 === (18))){
var inst_40761 = (state_40795[(7)]);
var inst_40770 = cljs.core.first.call(null,inst_40761);
var state_40795__$1 = state_40795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40795__$1,(20),out,inst_40770);
} else {
if((state_val_40796 === (8))){
var inst_40749 = (state_40795[(8)]);
var inst_40750 = (state_40795[(12)]);
var inst_40752 = (inst_40750 < inst_40749);
var inst_40753 = inst_40752;
var state_40795__$1 = state_40795;
if(cljs.core.truth_(inst_40753)){
var statearr_40829_40860 = state_40795__$1;
(statearr_40829_40860[(1)] = (10));

} else {
var statearr_40830_40861 = state_40795__$1;
(statearr_40830_40861[(1)] = (11));

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
});})(c__27278__auto__))
;
return ((function (switch__27213__auto__,c__27278__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27214__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27214__auto____0 = (function (){
var statearr_40834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40834[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27214__auto__);

(statearr_40834[(1)] = (1));

return statearr_40834;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27214__auto____1 = (function (state_40795){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40835){if((e40835 instanceof Object)){
var ex__27217__auto__ = e40835;
var statearr_40836_40862 = state_40795;
(statearr_40836_40862[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40863 = state_40795;
state_40795 = G__40863;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27214__auto__ = function(state_40795){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27214__auto____1.call(this,state_40795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27214__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27214__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__))
})();
var state__27280__auto__ = (function (){var statearr_40837 = f__27279__auto__.call(null);
(statearr_40837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_40837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__))
);

return c__27278__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args40864 = [];
var len__19923__auto___40867 = arguments.length;
var i__19924__auto___40868 = (0);
while(true){
if((i__19924__auto___40868 < len__19923__auto___40867)){
args40864.push((arguments[i__19924__auto___40868]));

var G__40869 = (i__19924__auto___40868 + (1));
i__19924__auto___40868 = G__40869;
continue;
} else {
}
break;
}

var G__40866 = args40864.length;
switch (G__40866) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40864.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args40871 = [];
var len__19923__auto___40874 = arguments.length;
var i__19924__auto___40875 = (0);
while(true){
if((i__19924__auto___40875 < len__19923__auto___40874)){
args40871.push((arguments[i__19924__auto___40875]));

var G__40876 = (i__19924__auto___40875 + (1));
i__19924__auto___40875 = G__40876;
continue;
} else {
}
break;
}

var G__40873 = args40871.length;
switch (G__40873) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40871.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var args40878 = [];
var len__19923__auto___40929 = arguments.length;
var i__19924__auto___40930 = (0);
while(true){
if((i__19924__auto___40930 < len__19923__auto___40929)){
args40878.push((arguments[i__19924__auto___40930]));

var G__40931 = (i__19924__auto___40930 + (1));
i__19924__auto___40930 = G__40931;
continue;
} else {
}
break;
}

var G__40880 = args40878.length;
switch (G__40880) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40878.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27278__auto___40933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___40933,out){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___40933,out){
return (function (state_40904){
var state_val_40905 = (state_40904[(1)]);
if((state_val_40905 === (7))){
var inst_40899 = (state_40904[(2)]);
var state_40904__$1 = state_40904;
var statearr_40906_40934 = state_40904__$1;
(statearr_40906_40934[(2)] = inst_40899);

(statearr_40906_40934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40905 === (1))){
var inst_40881 = null;
var state_40904__$1 = (function (){var statearr_40907 = state_40904;
(statearr_40907[(7)] = inst_40881);

return statearr_40907;
})();
var statearr_40908_40935 = state_40904__$1;
(statearr_40908_40935[(2)] = null);

(statearr_40908_40935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40905 === (4))){
var inst_40884 = (state_40904[(8)]);
var inst_40884__$1 = (state_40904[(2)]);
var inst_40885 = (inst_40884__$1 == null);
var inst_40886 = cljs.core.not.call(null,inst_40885);
var state_40904__$1 = (function (){var statearr_40909 = state_40904;
(statearr_40909[(8)] = inst_40884__$1);

return statearr_40909;
})();
if(inst_40886){
var statearr_40910_40936 = state_40904__$1;
(statearr_40910_40936[(1)] = (5));

} else {
var statearr_40911_40937 = state_40904__$1;
(statearr_40911_40937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40905 === (6))){
var state_40904__$1 = state_40904;
var statearr_40912_40938 = state_40904__$1;
(statearr_40912_40938[(2)] = null);

(statearr_40912_40938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40905 === (3))){
var inst_40901 = (state_40904[(2)]);
var inst_40902 = cljs.core.async.close_BANG_.call(null,out);
var state_40904__$1 = (function (){var statearr_40913 = state_40904;
(statearr_40913[(9)] = inst_40901);

return statearr_40913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40904__$1,inst_40902);
} else {
if((state_val_40905 === (2))){
var state_40904__$1 = state_40904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40904__$1,(4),ch);
} else {
if((state_val_40905 === (11))){
var inst_40884 = (state_40904[(8)]);
var inst_40893 = (state_40904[(2)]);
var inst_40881 = inst_40884;
var state_40904__$1 = (function (){var statearr_40914 = state_40904;
(statearr_40914[(7)] = inst_40881);

(statearr_40914[(10)] = inst_40893);

return statearr_40914;
})();
var statearr_40915_40939 = state_40904__$1;
(statearr_40915_40939[(2)] = null);

(statearr_40915_40939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40905 === (9))){
var inst_40884 = (state_40904[(8)]);
var state_40904__$1 = state_40904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40904__$1,(11),out,inst_40884);
} else {
if((state_val_40905 === (5))){
var inst_40881 = (state_40904[(7)]);
var inst_40884 = (state_40904[(8)]);
var inst_40888 = cljs.core._EQ_.call(null,inst_40884,inst_40881);
var state_40904__$1 = state_40904;
if(inst_40888){
var statearr_40917_40940 = state_40904__$1;
(statearr_40917_40940[(1)] = (8));

} else {
var statearr_40918_40941 = state_40904__$1;
(statearr_40918_40941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40905 === (10))){
var inst_40896 = (state_40904[(2)]);
var state_40904__$1 = state_40904;
var statearr_40919_40942 = state_40904__$1;
(statearr_40919_40942[(2)] = inst_40896);

(statearr_40919_40942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40905 === (8))){
var inst_40881 = (state_40904[(7)]);
var tmp40916 = inst_40881;
var inst_40881__$1 = tmp40916;
var state_40904__$1 = (function (){var statearr_40920 = state_40904;
(statearr_40920[(7)] = inst_40881__$1);

return statearr_40920;
})();
var statearr_40921_40943 = state_40904__$1;
(statearr_40921_40943[(2)] = null);

(statearr_40921_40943[(1)] = (2));


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
});})(c__27278__auto___40933,out))
;
return ((function (switch__27213__auto__,c__27278__auto___40933,out){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_40925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40925[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_40925[(1)] = (1));

return statearr_40925;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_40904){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e40926){if((e40926 instanceof Object)){
var ex__27217__auto__ = e40926;
var statearr_40927_40944 = state_40904;
(statearr_40927_40944[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40945 = state_40904;
state_40904 = G__40945;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_40904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_40904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___40933,out))
})();
var state__27280__auto__ = (function (){var statearr_40928 = f__27279__auto__.call(null);
(statearr_40928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___40933);

return statearr_40928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___40933,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args40946 = [];
var len__19923__auto___41016 = arguments.length;
var i__19924__auto___41017 = (0);
while(true){
if((i__19924__auto___41017 < len__19923__auto___41016)){
args40946.push((arguments[i__19924__auto___41017]));

var G__41018 = (i__19924__auto___41017 + (1));
i__19924__auto___41017 = G__41018;
continue;
} else {
}
break;
}

var G__40948 = args40946.length;
switch (G__40948) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40946.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27278__auto___41020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___41020,out){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___41020,out){
return (function (state_40986){
var state_val_40987 = (state_40986[(1)]);
if((state_val_40987 === (7))){
var inst_40982 = (state_40986[(2)]);
var state_40986__$1 = state_40986;
var statearr_40988_41021 = state_40986__$1;
(statearr_40988_41021[(2)] = inst_40982);

(statearr_40988_41021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (1))){
var inst_40949 = (new Array(n));
var inst_40950 = inst_40949;
var inst_40951 = (0);
var state_40986__$1 = (function (){var statearr_40989 = state_40986;
(statearr_40989[(7)] = inst_40950);

(statearr_40989[(8)] = inst_40951);

return statearr_40989;
})();
var statearr_40990_41022 = state_40986__$1;
(statearr_40990_41022[(2)] = null);

(statearr_40990_41022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (4))){
var inst_40954 = (state_40986[(9)]);
var inst_40954__$1 = (state_40986[(2)]);
var inst_40955 = (inst_40954__$1 == null);
var inst_40956 = cljs.core.not.call(null,inst_40955);
var state_40986__$1 = (function (){var statearr_40991 = state_40986;
(statearr_40991[(9)] = inst_40954__$1);

return statearr_40991;
})();
if(inst_40956){
var statearr_40992_41023 = state_40986__$1;
(statearr_40992_41023[(1)] = (5));

} else {
var statearr_40993_41024 = state_40986__$1;
(statearr_40993_41024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (15))){
var inst_40976 = (state_40986[(2)]);
var state_40986__$1 = state_40986;
var statearr_40994_41025 = state_40986__$1;
(statearr_40994_41025[(2)] = inst_40976);

(statearr_40994_41025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (13))){
var state_40986__$1 = state_40986;
var statearr_40995_41026 = state_40986__$1;
(statearr_40995_41026[(2)] = null);

(statearr_40995_41026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (6))){
var inst_40951 = (state_40986[(8)]);
var inst_40972 = (inst_40951 > (0));
var state_40986__$1 = state_40986;
if(cljs.core.truth_(inst_40972)){
var statearr_40996_41027 = state_40986__$1;
(statearr_40996_41027[(1)] = (12));

} else {
var statearr_40997_41028 = state_40986__$1;
(statearr_40997_41028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (3))){
var inst_40984 = (state_40986[(2)]);
var state_40986__$1 = state_40986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40986__$1,inst_40984);
} else {
if((state_val_40987 === (12))){
var inst_40950 = (state_40986[(7)]);
var inst_40974 = cljs.core.vec.call(null,inst_40950);
var state_40986__$1 = state_40986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40986__$1,(15),out,inst_40974);
} else {
if((state_val_40987 === (2))){
var state_40986__$1 = state_40986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40986__$1,(4),ch);
} else {
if((state_val_40987 === (11))){
var inst_40966 = (state_40986[(2)]);
var inst_40967 = (new Array(n));
var inst_40950 = inst_40967;
var inst_40951 = (0);
var state_40986__$1 = (function (){var statearr_40998 = state_40986;
(statearr_40998[(7)] = inst_40950);

(statearr_40998[(8)] = inst_40951);

(statearr_40998[(10)] = inst_40966);

return statearr_40998;
})();
var statearr_40999_41029 = state_40986__$1;
(statearr_40999_41029[(2)] = null);

(statearr_40999_41029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (9))){
var inst_40950 = (state_40986[(7)]);
var inst_40964 = cljs.core.vec.call(null,inst_40950);
var state_40986__$1 = state_40986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40986__$1,(11),out,inst_40964);
} else {
if((state_val_40987 === (5))){
var inst_40950 = (state_40986[(7)]);
var inst_40951 = (state_40986[(8)]);
var inst_40959 = (state_40986[(11)]);
var inst_40954 = (state_40986[(9)]);
var inst_40958 = (inst_40950[inst_40951] = inst_40954);
var inst_40959__$1 = (inst_40951 + (1));
var inst_40960 = (inst_40959__$1 < n);
var state_40986__$1 = (function (){var statearr_41000 = state_40986;
(statearr_41000[(12)] = inst_40958);

(statearr_41000[(11)] = inst_40959__$1);

return statearr_41000;
})();
if(cljs.core.truth_(inst_40960)){
var statearr_41001_41030 = state_40986__$1;
(statearr_41001_41030[(1)] = (8));

} else {
var statearr_41002_41031 = state_40986__$1;
(statearr_41002_41031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (14))){
var inst_40979 = (state_40986[(2)]);
var inst_40980 = cljs.core.async.close_BANG_.call(null,out);
var state_40986__$1 = (function (){var statearr_41004 = state_40986;
(statearr_41004[(13)] = inst_40979);

return statearr_41004;
})();
var statearr_41005_41032 = state_40986__$1;
(statearr_41005_41032[(2)] = inst_40980);

(statearr_41005_41032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (10))){
var inst_40970 = (state_40986[(2)]);
var state_40986__$1 = state_40986;
var statearr_41006_41033 = state_40986__$1;
(statearr_41006_41033[(2)] = inst_40970);

(statearr_41006_41033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40987 === (8))){
var inst_40950 = (state_40986[(7)]);
var inst_40959 = (state_40986[(11)]);
var tmp41003 = inst_40950;
var inst_40950__$1 = tmp41003;
var inst_40951 = inst_40959;
var state_40986__$1 = (function (){var statearr_41007 = state_40986;
(statearr_41007[(7)] = inst_40950__$1);

(statearr_41007[(8)] = inst_40951);

return statearr_41007;
})();
var statearr_41008_41034 = state_40986__$1;
(statearr_41008_41034[(2)] = null);

(statearr_41008_41034[(1)] = (2));


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
});})(c__27278__auto___41020,out))
;
return ((function (switch__27213__auto__,c__27278__auto___41020,out){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_41012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41012[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_41012[(1)] = (1));

return statearr_41012;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_40986){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_40986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e41013){if((e41013 instanceof Object)){
var ex__27217__auto__ = e41013;
var statearr_41014_41035 = state_40986;
(statearr_41014_41035[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41036 = state_40986;
state_40986 = G__41036;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_40986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_40986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___41020,out))
})();
var state__27280__auto__ = (function (){var statearr_41015 = f__27279__auto__.call(null);
(statearr_41015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___41020);

return statearr_41015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___41020,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args41037 = [];
var len__19923__auto___41111 = arguments.length;
var i__19924__auto___41112 = (0);
while(true){
if((i__19924__auto___41112 < len__19923__auto___41111)){
args41037.push((arguments[i__19924__auto___41112]));

var G__41113 = (i__19924__auto___41112 + (1));
i__19924__auto___41112 = G__41113;
continue;
} else {
}
break;
}

var G__41039 = args41037.length;
switch (G__41039) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41037.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27278__auto___41115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___41115,out){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___41115,out){
return (function (state_41081){
var state_val_41082 = (state_41081[(1)]);
if((state_val_41082 === (7))){
var inst_41077 = (state_41081[(2)]);
var state_41081__$1 = state_41081;
var statearr_41083_41116 = state_41081__$1;
(statearr_41083_41116[(2)] = inst_41077);

(statearr_41083_41116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (1))){
var inst_41040 = [];
var inst_41041 = inst_41040;
var inst_41042 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41081__$1 = (function (){var statearr_41084 = state_41081;
(statearr_41084[(7)] = inst_41042);

(statearr_41084[(8)] = inst_41041);

return statearr_41084;
})();
var statearr_41085_41117 = state_41081__$1;
(statearr_41085_41117[(2)] = null);

(statearr_41085_41117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (4))){
var inst_41045 = (state_41081[(9)]);
var inst_41045__$1 = (state_41081[(2)]);
var inst_41046 = (inst_41045__$1 == null);
var inst_41047 = cljs.core.not.call(null,inst_41046);
var state_41081__$1 = (function (){var statearr_41086 = state_41081;
(statearr_41086[(9)] = inst_41045__$1);

return statearr_41086;
})();
if(inst_41047){
var statearr_41087_41118 = state_41081__$1;
(statearr_41087_41118[(1)] = (5));

} else {
var statearr_41088_41119 = state_41081__$1;
(statearr_41088_41119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (15))){
var inst_41071 = (state_41081[(2)]);
var state_41081__$1 = state_41081;
var statearr_41089_41120 = state_41081__$1;
(statearr_41089_41120[(2)] = inst_41071);

(statearr_41089_41120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (13))){
var state_41081__$1 = state_41081;
var statearr_41090_41121 = state_41081__$1;
(statearr_41090_41121[(2)] = null);

(statearr_41090_41121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (6))){
var inst_41041 = (state_41081[(8)]);
var inst_41066 = inst_41041.length;
var inst_41067 = (inst_41066 > (0));
var state_41081__$1 = state_41081;
if(cljs.core.truth_(inst_41067)){
var statearr_41091_41122 = state_41081__$1;
(statearr_41091_41122[(1)] = (12));

} else {
var statearr_41092_41123 = state_41081__$1;
(statearr_41092_41123[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (3))){
var inst_41079 = (state_41081[(2)]);
var state_41081__$1 = state_41081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41081__$1,inst_41079);
} else {
if((state_val_41082 === (12))){
var inst_41041 = (state_41081[(8)]);
var inst_41069 = cljs.core.vec.call(null,inst_41041);
var state_41081__$1 = state_41081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41081__$1,(15),out,inst_41069);
} else {
if((state_val_41082 === (2))){
var state_41081__$1 = state_41081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41081__$1,(4),ch);
} else {
if((state_val_41082 === (11))){
var inst_41045 = (state_41081[(9)]);
var inst_41049 = (state_41081[(10)]);
var inst_41059 = (state_41081[(2)]);
var inst_41060 = [];
var inst_41061 = inst_41060.push(inst_41045);
var inst_41041 = inst_41060;
var inst_41042 = inst_41049;
var state_41081__$1 = (function (){var statearr_41093 = state_41081;
(statearr_41093[(7)] = inst_41042);

(statearr_41093[(8)] = inst_41041);

(statearr_41093[(11)] = inst_41061);

(statearr_41093[(12)] = inst_41059);

return statearr_41093;
})();
var statearr_41094_41124 = state_41081__$1;
(statearr_41094_41124[(2)] = null);

(statearr_41094_41124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (9))){
var inst_41041 = (state_41081[(8)]);
var inst_41057 = cljs.core.vec.call(null,inst_41041);
var state_41081__$1 = state_41081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41081__$1,(11),out,inst_41057);
} else {
if((state_val_41082 === (5))){
var inst_41042 = (state_41081[(7)]);
var inst_41045 = (state_41081[(9)]);
var inst_41049 = (state_41081[(10)]);
var inst_41049__$1 = f.call(null,inst_41045);
var inst_41050 = cljs.core._EQ_.call(null,inst_41049__$1,inst_41042);
var inst_41051 = cljs.core.keyword_identical_QMARK_.call(null,inst_41042,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41052 = (inst_41050) || (inst_41051);
var state_41081__$1 = (function (){var statearr_41095 = state_41081;
(statearr_41095[(10)] = inst_41049__$1);

return statearr_41095;
})();
if(cljs.core.truth_(inst_41052)){
var statearr_41096_41125 = state_41081__$1;
(statearr_41096_41125[(1)] = (8));

} else {
var statearr_41097_41126 = state_41081__$1;
(statearr_41097_41126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (14))){
var inst_41074 = (state_41081[(2)]);
var inst_41075 = cljs.core.async.close_BANG_.call(null,out);
var state_41081__$1 = (function (){var statearr_41099 = state_41081;
(statearr_41099[(13)] = inst_41074);

return statearr_41099;
})();
var statearr_41100_41127 = state_41081__$1;
(statearr_41100_41127[(2)] = inst_41075);

(statearr_41100_41127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (10))){
var inst_41064 = (state_41081[(2)]);
var state_41081__$1 = state_41081;
var statearr_41101_41128 = state_41081__$1;
(statearr_41101_41128[(2)] = inst_41064);

(statearr_41101_41128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (8))){
var inst_41041 = (state_41081[(8)]);
var inst_41045 = (state_41081[(9)]);
var inst_41049 = (state_41081[(10)]);
var inst_41054 = inst_41041.push(inst_41045);
var tmp41098 = inst_41041;
var inst_41041__$1 = tmp41098;
var inst_41042 = inst_41049;
var state_41081__$1 = (function (){var statearr_41102 = state_41081;
(statearr_41102[(7)] = inst_41042);

(statearr_41102[(8)] = inst_41041__$1);

(statearr_41102[(14)] = inst_41054);

return statearr_41102;
})();
var statearr_41103_41129 = state_41081__$1;
(statearr_41103_41129[(2)] = null);

(statearr_41103_41129[(1)] = (2));


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
});})(c__27278__auto___41115,out))
;
return ((function (switch__27213__auto__,c__27278__auto___41115,out){
return (function() {
var cljs$core$async$state_machine__27214__auto__ = null;
var cljs$core$async$state_machine__27214__auto____0 = (function (){
var statearr_41107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41107[(0)] = cljs$core$async$state_machine__27214__auto__);

(statearr_41107[(1)] = (1));

return statearr_41107;
});
var cljs$core$async$state_machine__27214__auto____1 = (function (state_41081){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_41081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e41108){if((e41108 instanceof Object)){
var ex__27217__auto__ = e41108;
var statearr_41109_41130 = state_41081;
(statearr_41109_41130[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41131 = state_41081;
state_41081 = G__41131;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
cljs$core$async$state_machine__27214__auto__ = function(state_41081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27214__auto____1.call(this,state_41081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27214__auto____0;
cljs$core$async$state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27214__auto____1;
return cljs$core$async$state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___41115,out))
})();
var state__27280__auto__ = (function (){var statearr_41110 = f__27279__auto__.call(null);
(statearr_41110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___41115);

return statearr_41110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___41115,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1445816821073