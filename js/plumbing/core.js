// Compiled by ClojureScript 1.7.48 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(){
var args34104 = [];
var len__19923__auto___34113 = arguments.length;
var i__19924__auto___34114 = (0);
while(true){
if((i__19924__auto___34114 < len__19923__auto___34113)){
args34104.push((arguments[i__19924__auto___34114]));

var G__34115 = (i__19924__auto___34114 + (1));
i__19924__auto___34114 = G__34115;
continue;
} else {
}
break;
}

var G__34112 = args34104.length;
switch (G__34112) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34104.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19942__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq34105){
var G__34106 = cljs.core.first.call(null,seq34105);
var seq34105__$1 = cljs.core.next.call(null,seq34105);
var G__34107 = cljs.core.first.call(null,seq34105__$1);
var seq34105__$2 = cljs.core.next.call(null,seq34105__$1);
var G__34108 = cljs.core.first.call(null,seq34105__$2);
var seq34105__$3 = cljs.core.next.call(null,seq34105__$2);
var G__34109 = cljs.core.first.call(null,seq34105__$3);
var seq34105__$4 = cljs.core.next.call(null,seq34105__$3);
var G__34110 = cljs.core.first.call(null,seq34105__$4);
var seq34105__$5 = cljs.core.next.call(null,seq34105__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__34106,G__34107,G__34108,G__34109,G__34110,seq34105__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__25904__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34125_34131 = cljs.core.seq.call(null,m);
var chunk__34126_34132 = null;
var count__34127_34133 = (0);
var i__34128_34134 = (0);
while(true){
if((i__34128_34134 < count__34127_34133)){
var vec__34129_34135 = cljs.core._nth.call(null,chunk__34126_34132,i__34128_34134);
var k_34136 = cljs.core.nth.call(null,vec__34129_34135,(0),null);
var v_34137 = cljs.core.nth.call(null,vec__34129_34135,(1),null);
var m34124_34138 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34124_34138,k_34136,f.call(null,v_34137)));

var G__34139 = seq__34125_34131;
var G__34140 = chunk__34126_34132;
var G__34141 = count__34127_34133;
var G__34142 = (i__34128_34134 + (1));
seq__34125_34131 = G__34139;
chunk__34126_34132 = G__34140;
count__34127_34133 = G__34141;
i__34128_34134 = G__34142;
continue;
} else {
var temp__4425__auto___34143 = cljs.core.seq.call(null,seq__34125_34131);
if(temp__4425__auto___34143){
var seq__34125_34144__$1 = temp__4425__auto___34143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34125_34144__$1)){
var c__19668__auto___34145 = cljs.core.chunk_first.call(null,seq__34125_34144__$1);
var G__34146 = cljs.core.chunk_rest.call(null,seq__34125_34144__$1);
var G__34147 = c__19668__auto___34145;
var G__34148 = cljs.core.count.call(null,c__19668__auto___34145);
var G__34149 = (0);
seq__34125_34131 = G__34146;
chunk__34126_34132 = G__34147;
count__34127_34133 = G__34148;
i__34128_34134 = G__34149;
continue;
} else {
var vec__34130_34150 = cljs.core.first.call(null,seq__34125_34144__$1);
var k_34151 = cljs.core.nth.call(null,vec__34130_34150,(0),null);
var v_34152 = cljs.core.nth.call(null,vec__34130_34150,(1),null);
var m34124_34153 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34124_34153,k_34151,f.call(null,v_34152)));

var G__34154 = cljs.core.next.call(null,seq__34125_34144__$1);
var G__34155 = null;
var G__34156 = (0);
var G__34157 = (0);
seq__34125_34131 = G__34154;
chunk__34126_34132 = G__34155;
count__34127_34133 = G__34156;
i__34128_34134 = G__34157;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25904__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__25904__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34166_34172 = cljs.core.seq.call(null,m);
var chunk__34167_34173 = null;
var count__34168_34174 = (0);
var i__34169_34175 = (0);
while(true){
if((i__34169_34175 < count__34168_34174)){
var vec__34170_34176 = cljs.core._nth.call(null,chunk__34167_34173,i__34169_34175);
var k_34177 = cljs.core.nth.call(null,vec__34170_34176,(0),null);
var v_34178 = cljs.core.nth.call(null,vec__34170_34176,(1),null);
var m34165_34179 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34165_34179,f.call(null,k_34177),v_34178));

var G__34180 = seq__34166_34172;
var G__34181 = chunk__34167_34173;
var G__34182 = count__34168_34174;
var G__34183 = (i__34169_34175 + (1));
seq__34166_34172 = G__34180;
chunk__34167_34173 = G__34181;
count__34168_34174 = G__34182;
i__34169_34175 = G__34183;
continue;
} else {
var temp__4425__auto___34184 = cljs.core.seq.call(null,seq__34166_34172);
if(temp__4425__auto___34184){
var seq__34166_34185__$1 = temp__4425__auto___34184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34166_34185__$1)){
var c__19668__auto___34186 = cljs.core.chunk_first.call(null,seq__34166_34185__$1);
var G__34187 = cljs.core.chunk_rest.call(null,seq__34166_34185__$1);
var G__34188 = c__19668__auto___34186;
var G__34189 = cljs.core.count.call(null,c__19668__auto___34186);
var G__34190 = (0);
seq__34166_34172 = G__34187;
chunk__34167_34173 = G__34188;
count__34168_34174 = G__34189;
i__34169_34175 = G__34190;
continue;
} else {
var vec__34171_34191 = cljs.core.first.call(null,seq__34166_34185__$1);
var k_34192 = cljs.core.nth.call(null,vec__34171_34191,(0),null);
var v_34193 = cljs.core.nth.call(null,vec__34171_34191,(1),null);
var m34165_34194 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34165_34194,f.call(null,k_34192),v_34193));

var G__34195 = cljs.core.next.call(null,seq__34166_34185__$1);
var G__34196 = null;
var G__34197 = (0);
var G__34198 = (0);
seq__34166_34172 = G__34195;
chunk__34167_34173 = G__34196;
count__34168_34174 = G__34197;
i__34169_34175 = G__34198;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25904__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__25904__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34205_34209 = cljs.core.seq.call(null,ks);
var chunk__34206_34210 = null;
var count__34207_34211 = (0);
var i__34208_34212 = (0);
while(true){
if((i__34208_34212 < count__34207_34211)){
var k_34213 = cljs.core._nth.call(null,chunk__34206_34210,i__34208_34212);
var m34204_34214 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34204_34214,k_34213,f.call(null,k_34213)));

var G__34215 = seq__34205_34209;
var G__34216 = chunk__34206_34210;
var G__34217 = count__34207_34211;
var G__34218 = (i__34208_34212 + (1));
seq__34205_34209 = G__34215;
chunk__34206_34210 = G__34216;
count__34207_34211 = G__34217;
i__34208_34212 = G__34218;
continue;
} else {
var temp__4425__auto___34219 = cljs.core.seq.call(null,seq__34205_34209);
if(temp__4425__auto___34219){
var seq__34205_34220__$1 = temp__4425__auto___34219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34205_34220__$1)){
var c__19668__auto___34221 = cljs.core.chunk_first.call(null,seq__34205_34220__$1);
var G__34222 = cljs.core.chunk_rest.call(null,seq__34205_34220__$1);
var G__34223 = c__19668__auto___34221;
var G__34224 = cljs.core.count.call(null,c__19668__auto___34221);
var G__34225 = (0);
seq__34205_34209 = G__34222;
chunk__34206_34210 = G__34223;
count__34207_34211 = G__34224;
i__34208_34212 = G__34225;
continue;
} else {
var k_34226 = cljs.core.first.call(null,seq__34205_34220__$1);
var m34204_34227 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34204_34227,k_34226,f.call(null,k_34226)));

var G__34228 = cljs.core.next.call(null,seq__34205_34220__$1);
var G__34229 = null;
var G__34230 = (0);
var G__34231 = (0);
seq__34205_34209 = G__34228;
chunk__34206_34210 = G__34229;
count__34207_34211 = G__34230;
i__34208_34212 = G__34231;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25904__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__25904__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34238_34242 = cljs.core.seq.call(null,vs);
var chunk__34239_34243 = null;
var count__34240_34244 = (0);
var i__34241_34245 = (0);
while(true){
if((i__34241_34245 < count__34240_34244)){
var v_34246 = cljs.core._nth.call(null,chunk__34239_34243,i__34241_34245);
var m34237_34247 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34237_34247,f.call(null,v_34246),v_34246));

var G__34248 = seq__34238_34242;
var G__34249 = chunk__34239_34243;
var G__34250 = count__34240_34244;
var G__34251 = (i__34241_34245 + (1));
seq__34238_34242 = G__34248;
chunk__34239_34243 = G__34249;
count__34240_34244 = G__34250;
i__34241_34245 = G__34251;
continue;
} else {
var temp__4425__auto___34252 = cljs.core.seq.call(null,seq__34238_34242);
if(temp__4425__auto___34252){
var seq__34238_34253__$1 = temp__4425__auto___34252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34238_34253__$1)){
var c__19668__auto___34254 = cljs.core.chunk_first.call(null,seq__34238_34253__$1);
var G__34255 = cljs.core.chunk_rest.call(null,seq__34238_34253__$1);
var G__34256 = c__19668__auto___34254;
var G__34257 = cljs.core.count.call(null,c__19668__auto___34254);
var G__34258 = (0);
seq__34238_34242 = G__34255;
chunk__34239_34243 = G__34256;
count__34240_34244 = G__34257;
i__34241_34245 = G__34258;
continue;
} else {
var v_34259 = cljs.core.first.call(null,seq__34238_34253__$1);
var m34237_34260 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34237_34260,f.call(null,v_34259),v_34259));

var G__34261 = cljs.core.next.call(null,seq__34238_34253__$1);
var G__34262 = null;
var G__34263 = (0);
var G__34264 = (0);
seq__34238_34242 = G__34261;
chunk__34239_34243 = G__34262;
count__34240_34244 = G__34263;
i__34241_34245 = G__34264;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25904__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__34265){
var vec__34267 = p__34265;
var k = cljs.core.nth.call(null,vec__34267,(0),null);
var ks = cljs.core.nthnext.call(null,vec__34267,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__18872__auto__ = ks;
if(cljs.core.truth_(and__18872__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__18872__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__25904__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34276_34282 = cljs.core.seq.call(null,x);
var chunk__34277_34283 = null;
var count__34278_34284 = (0);
var i__34279_34285 = (0);
while(true){
if((i__34279_34285 < count__34278_34284)){
var vec__34280_34286 = cljs.core._nth.call(null,chunk__34277_34283,i__34279_34285);
var k_34287 = cljs.core.nth.call(null,vec__34280_34286,(0),null);
var v_34288 = cljs.core.nth.call(null,vec__34280_34286,(1),null);
var m34275_34289 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34275_34289,((typeof k_34287 === 'string')?cljs.core.keyword.call(null,k_34287):k_34287),plumbing$core$keywordize_map.call(null,v_34288)));

var G__34290 = seq__34276_34282;
var G__34291 = chunk__34277_34283;
var G__34292 = count__34278_34284;
var G__34293 = (i__34279_34285 + (1));
seq__34276_34282 = G__34290;
chunk__34277_34283 = G__34291;
count__34278_34284 = G__34292;
i__34279_34285 = G__34293;
continue;
} else {
var temp__4425__auto___34294 = cljs.core.seq.call(null,seq__34276_34282);
if(temp__4425__auto___34294){
var seq__34276_34295__$1 = temp__4425__auto___34294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34276_34295__$1)){
var c__19668__auto___34296 = cljs.core.chunk_first.call(null,seq__34276_34295__$1);
var G__34297 = cljs.core.chunk_rest.call(null,seq__34276_34295__$1);
var G__34298 = c__19668__auto___34296;
var G__34299 = cljs.core.count.call(null,c__19668__auto___34296);
var G__34300 = (0);
seq__34276_34282 = G__34297;
chunk__34277_34283 = G__34298;
count__34278_34284 = G__34299;
i__34279_34285 = G__34300;
continue;
} else {
var vec__34281_34301 = cljs.core.first.call(null,seq__34276_34295__$1);
var k_34302 = cljs.core.nth.call(null,vec__34281_34301,(0),null);
var v_34303 = cljs.core.nth.call(null,vec__34281_34301,(1),null);
var m34275_34304 = cljs.core.deref.call(null,m_atom__25904__auto__);
cljs.core.reset_BANG_.call(null,m_atom__25904__auto__,cljs.core.assoc_BANG_.call(null,m34275_34304,((typeof k_34302 === 'string')?cljs.core.keyword.call(null,k_34302):k_34302),plumbing$core$keywordize_map.call(null,v_34303)));

var G__34305 = cljs.core.next.call(null,seq__34276_34295__$1);
var G__34306 = null;
var G__34307 = (0);
var G__34308 = (0);
seq__34276_34282 = G__34305;
chunk__34277_34283 = G__34306;
count__34278_34284 = G__34307;
i__34279_34285 = G__34308;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25904__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__25985__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__25985__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__34309 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__34310 = cljs.core.next.call(null,ks);
m = G__34309;
ks = G__34310;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var args__19930__auto__ = [];
var len__19923__auto___34321 = arguments.length;
var i__19924__auto___34322 = (0);
while(true){
if((i__19924__auto___34322 < len__19923__auto___34321)){
args__19930__auto__.push((arguments[i__19924__auto___34322]));

var G__34323 = (i__19924__auto___34322 + (1));
i__19924__auto___34322 = G__34323;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__18884__auto__ = m;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__19637__auto__ = (function plumbing$core$iter__34313(s__34314){
return (new cljs.core.LazySeq(null,(function (){
var s__34314__$1 = s__34314;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34314__$1);
if(temp__4425__auto__){
var s__34314__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34314__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__34314__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__34316 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__34315 = (0);
while(true){
if((i__34315 < size__19636__auto__)){
var vec__34319 = cljs.core._nth.call(null,c__19635__auto__,i__34315);
var k = cljs.core.nth.call(null,vec__34319,(0),null);
var v = cljs.core.nth.call(null,vec__34319,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__34316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34324 = (i__34315 + (1));
i__34315 = G__34324;
continue;
} else {
var G__34325 = (i__34315 + (1));
i__34315 = G__34325;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34316),plumbing$core$iter__34313.call(null,cljs.core.chunk_rest.call(null,s__34314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34316),null);
}
} else {
var vec__34320 = cljs.core.first.call(null,s__34314__$2);
var k = cljs.core.nth.call(null,vec__34320,(0),null);
var v = cljs.core.nth.call(null,vec__34320,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__34313.call(null,cljs.core.rest.call(null,s__34314__$2)));
} else {
var G__34326 = cljs.core.rest.call(null,s__34314__$2);
s__34314__$1 = G__34326;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19637__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq34311){
var G__34312 = cljs.core.first.call(null,seq34311);
var seq34311__$1 = cljs.core.next.call(null,seq34311);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__34312,seq34311__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var args__19930__auto__ = [];
var len__19923__auto___34331 = arguments.length;
var i__19924__auto___34332 = (0);
while(true){
if((i__19924__auto___34332 < len__19923__auto___34331)){
args__19930__auto__.push((arguments[i__19924__auto___34332]));

var G__34333 = (i__19924__auto___34332 + (1));
i__19924__auto___34332 = G__34333;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((3) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19931__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq34327){
var G__34328 = cljs.core.first.call(null,seq34327);
var seq34327__$1 = cljs.core.next.call(null,seq34327);
var G__34329 = cljs.core.first.call(null,seq34327__$1);
var seq34327__$2 = cljs.core.next.call(null,seq34327__$1);
var G__34330 = cljs.core.first.call(null,seq34327__$2);
var seq34327__$3 = cljs.core.next.call(null,seq34327__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__34328,G__34329,G__34330,seq34327__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var args34334 = [];
var len__19923__auto___34337 = arguments.length;
var i__19924__auto___34338 = (0);
while(true){
if((i__19924__auto___34338 < len__19923__auto___34337)){
args34334.push((arguments[i__19924__auto___34338]));

var G__34339 = (i__19924__auto___34338 + (1));
i__19924__auto___34338 = G__34339;
continue;
} else {
}
break;
}

var G__34336 = args34334.length;
switch (G__34336) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34334.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__19637__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__34345(s__34346){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__34346__$1 = s__34346;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34346__$1);
if(temp__4425__auto__){
var s__34346__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34346__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__34346__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__34348 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__34347 = (0);
while(true){
if((i__34347 < size__19636__auto__)){
var x = cljs.core._nth.call(null,c__19635__auto__,i__34347);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__34348,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__34349 = (i__34347 + (1));
i__34347 = G__34349;
continue;
} else {
var G__34350 = (i__34347 + (1));
i__34347 = G__34350;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34348),plumbing$core$distinct_by_$_iter__34345.call(null,cljs.core.chunk_rest.call(null,s__34346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34348),null);
}
} else {
var x = cljs.core.first.call(null,s__34346__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__34345.call(null,cljs.core.rest.call(null,s__34346__$2)));
} else {
var G__34351 = cljs.core.rest.call(null,s__34346__$2);
s__34346__$1 = G__34351;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__19637__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var args__19930__auto__ = [];
var len__19923__auto___34353 = arguments.length;
var i__19924__auto___34354 = (0);
while(true){
if((i__19924__auto___34354 < len__19923__auto___34353)){
args__19930__auto__.push((arguments[i__19924__auto___34354]));

var G__34355 = (i__19924__auto___34354 + (1));
i__19924__auto___34354 = G__34355;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((0) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__19931__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq34352){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34352));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var args34356 = [];
var len__19923__auto___34362 = arguments.length;
var i__19924__auto___34363 = (0);
while(true){
if((i__19924__auto___34363 < len__19923__auto___34362)){
args34356.push((arguments[i__19924__auto___34363]));

var G__34364 = (i__19924__auto___34363 + (1));
i__19924__auto___34363 = G__34364;
continue;
} else {
}
break;
}

var G__34361 = args34356.length;
switch (G__34361) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34356.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19942__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__34366 = plumbing.core.conj_when.call(null,coll,x);
var G__34367 = cljs.core.first.call(null,xs);
var G__34368 = cljs.core.next.call(null,xs);
coll = G__34366;
x = G__34367;
xs = G__34368;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq34357){
var G__34358 = cljs.core.first.call(null,seq34357);
var seq34357__$1 = cljs.core.next.call(null,seq34357);
var G__34359 = cljs.core.first.call(null,seq34357__$1);
var seq34357__$2 = cljs.core.next.call(null,seq34357__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__34358,G__34359,seq34357__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var args34370 = [];
var len__19923__auto___34376 = arguments.length;
var i__19924__auto___34377 = (0);
while(true){
if((i__19924__auto___34377 < len__19923__auto___34376)){
args34370.push((arguments[i__19924__auto___34377]));

var G__34378 = (i__19924__auto___34377 + (1));
i__19924__auto___34377 = G__34378;
continue;
} else {
}
break;
}

var G__34375 = args34370.length;
switch (G__34375) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34370.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19942__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__34369_SHARP_){
return cljs.core.apply.call(null,f,p1__34369_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq34371){
var G__34372 = cljs.core.first.call(null,seq34371);
var seq34371__$1 = cljs.core.next.call(null,seq34371);
var G__34373 = cljs.core.first.call(null,seq34371__$1);
var seq34371__$2 = cljs.core.next.call(null,seq34371__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34372,G__34373,seq34371__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var args34380 = [];
var len__19923__auto___34386 = arguments.length;
var i__19924__auto___34387 = (0);
while(true){
if((i__19924__auto___34387 < len__19923__auto___34386)){
args34380.push((arguments[i__19924__auto___34387]));

var G__34388 = (i__19924__auto___34387 + (1));
i__19924__auto___34387 = G__34388;
continue;
} else {
}
break;
}

var G__34385 = args34380.length;
switch (G__34385) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34380.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19942__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq34381){
var G__34382 = cljs.core.first.call(null,seq34381);
var seq34381__$1 = cljs.core.next.call(null,seq34381);
var G__34383 = cljs.core.first.call(null,seq34381__$1);
var seq34381__$2 = cljs.core.next.call(null,seq34381__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__34382,G__34383,seq34381__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map?rel=1445816811612