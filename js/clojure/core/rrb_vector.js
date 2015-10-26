// Compiled by ClojureScript 1.7.48 {}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(){
var args32207 = [];
var len__19923__auto___32215 = arguments.length;
var i__19924__auto___32216 = (0);
while(true){
if((i__19924__auto___32216 < len__19923__auto___32215)){
args32207.push((arguments[i__19924__auto___32216]));

var G__32217 = (i__19924__auto___32216 + (1));
i__19924__auto___32216 = G__32217;
continue;
} else {
}
break;
}

var G__32214 = args32207.length;
switch (G__32214) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args32207.slice((4)),(0)));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19942__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,vn));
});

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq32208){
var G__32209 = cljs.core.first.call(null,seq32208);
var seq32208__$1 = cljs.core.next.call(null,seq32208);
var G__32210 = cljs.core.first.call(null,seq32208__$1);
var seq32208__$2 = cljs.core.next.call(null,seq32208__$1);
var G__32211 = cljs.core.first.call(null,seq32208__$2);
var seq32208__$3 = cljs.core.next.call(null,seq32208__$2);
var G__32212 = cljs.core.first.call(null,seq32208__$3);
var seq32208__$4 = cljs.core.next.call(null,seq32208__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__32209,G__32210,G__32211,G__32212,seq32208__$4);
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);
/**
 * Returns a new vector containing the elements of the given vector v
 * lying between the start (inclusive) and end (exclusive) indices in
 * logarithmic time. end defaults to end of vector. The resulting
 * vector shares structure with the original, but does not hold on to
 * any elements of the original vector lying outside the given index
 * range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(){
var args32219 = [];
var len__19923__auto___32222 = arguments.length;
var i__19924__auto___32223 = (0);
while(true){
if((i__19924__auto___32223 < len__19923__auto___32222)){
args32219.push((arguments[i__19924__auto___32223]));

var G__32224 = (i__19924__auto___32223 + (1));
i__19924__auto___32223 = G__32224;
continue;
} else {
}
break;
}

var G__32221 = args32219.length;
switch (G__32221) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32219.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;
/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(){
var args32226 = [];
var len__19923__auto___32239 = arguments.length;
var i__19924__auto___32240 = (0);
while(true){
if((i__19924__auto___32240 < len__19923__auto___32239)){
args32226.push((arguments[i__19924__auto___32240]));

var G__32241 = (i__19924__auto___32240 + (1));
i__19924__auto___32240 = G__32241;
continue;
} else {
}
break;
}

var G__32233 = args32226.length;
switch (G__32233) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args32226.slice((4)),(0)));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19942__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__32234 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32234,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__32235 = [null];
(arr__32235[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32235,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__32236 = [null,null];
(arr__32236[(0)] = x1);

(arr__32236[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32236,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__32237 = [null,null,null];
(arr__32237[(0)] = x1);

(arr__32237[(1)] = x2);

(arr__32237[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32237,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__32238 = [null,null,null,null];
(arr__32238[(0)] = x1);

(arr__32238[(1)] = x2);

(arr__32238[(2)] = x3);

(arr__32238[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32238,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq32227){
var G__32228 = cljs.core.first.call(null,seq32227);
var seq32227__$1 = cljs.core.next.call(null,seq32227);
var G__32229 = cljs.core.first.call(null,seq32227__$1);
var seq32227__$2 = cljs.core.next.call(null,seq32227__$1);
var G__32230 = cljs.core.first.call(null,seq32227__$2);
var seq32227__$3 = cljs.core.next.call(null,seq32227__$2);
var G__32231 = cljs.core.first.call(null,seq32227__$3);
var seq32227__$4 = cljs.core.next.call(null,seq32227__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__32228,G__32229,G__32230,G__32231,seq32227__$4);
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);
/**
 * Returns a vector containing the contents of coll.
 * 
 * If coll is a vector, returns an RRB vector using the internal tree
 * of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=rrb_vector.js.map?rel=1445816807196