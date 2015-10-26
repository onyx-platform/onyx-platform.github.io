// Compiled by ClojureScript 1.7.48 {}
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
var seq__42224_42238 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42225_42239 = null;
var count__42226_42240 = (0);
var i__42227_42241 = (0);
while(true){
if((i__42227_42241 < count__42226_42240)){
var f_42242 = cljs.core._nth.call(null,chunk__42225_42239,i__42227_42241);
cljs.core.println.call(null,"  ",f_42242);

var G__42243 = seq__42224_42238;
var G__42244 = chunk__42225_42239;
var G__42245 = count__42226_42240;
var G__42246 = (i__42227_42241 + (1));
seq__42224_42238 = G__42243;
chunk__42225_42239 = G__42244;
count__42226_42240 = G__42245;
i__42227_42241 = G__42246;
continue;
} else {
var temp__4425__auto___42247 = cljs.core.seq.call(null,seq__42224_42238);
if(temp__4425__auto___42247){
var seq__42224_42248__$1 = temp__4425__auto___42247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42224_42248__$1)){
var c__19668__auto___42249 = cljs.core.chunk_first.call(null,seq__42224_42248__$1);
var G__42250 = cljs.core.chunk_rest.call(null,seq__42224_42248__$1);
var G__42251 = c__19668__auto___42249;
var G__42252 = cljs.core.count.call(null,c__19668__auto___42249);
var G__42253 = (0);
seq__42224_42238 = G__42250;
chunk__42225_42239 = G__42251;
count__42226_42240 = G__42252;
i__42227_42241 = G__42253;
continue;
} else {
var f_42254 = cljs.core.first.call(null,seq__42224_42248__$1);
cljs.core.println.call(null,"  ",f_42254);

var G__42255 = cljs.core.next.call(null,seq__42224_42248__$1);
var G__42256 = null;
var G__42257 = (0);
var G__42258 = (0);
seq__42224_42238 = G__42255;
chunk__42225_42239 = G__42256;
count__42226_42240 = G__42257;
i__42227_42241 = G__42258;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42259 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18884__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42259);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42259)))?cljs.core.second.call(null,arglists_42259):arglists_42259));
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
var seq__42228 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42229 = null;
var count__42230 = (0);
var i__42231 = (0);
while(true){
if((i__42231 < count__42230)){
var vec__42232 = cljs.core._nth.call(null,chunk__42229,i__42231);
var name = cljs.core.nth.call(null,vec__42232,(0),null);
var map__42233 = cljs.core.nth.call(null,vec__42232,(1),null);
var map__42233__$1 = ((((!((map__42233 == null)))?((((map__42233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42233):map__42233);
var doc = cljs.core.get.call(null,map__42233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__42233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__42260 = seq__42228;
var G__42261 = chunk__42229;
var G__42262 = count__42230;
var G__42263 = (i__42231 + (1));
seq__42228 = G__42260;
chunk__42229 = G__42261;
count__42230 = G__42262;
i__42231 = G__42263;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42228);
if(temp__4425__auto__){
var seq__42228__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42228__$1)){
var c__19668__auto__ = cljs.core.chunk_first.call(null,seq__42228__$1);
var G__42264 = cljs.core.chunk_rest.call(null,seq__42228__$1);
var G__42265 = c__19668__auto__;
var G__42266 = cljs.core.count.call(null,c__19668__auto__);
var G__42267 = (0);
seq__42228 = G__42264;
chunk__42229 = G__42265;
count__42230 = G__42266;
i__42231 = G__42267;
continue;
} else {
var vec__42235 = cljs.core.first.call(null,seq__42228__$1);
var name = cljs.core.nth.call(null,vec__42235,(0),null);
var map__42236 = cljs.core.nth.call(null,vec__42235,(1),null);
var map__42236__$1 = ((((!((map__42236 == null)))?((((map__42236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42236):map__42236);
var doc = cljs.core.get.call(null,map__42236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__42236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__42268 = cljs.core.next.call(null,seq__42228__$1);
var G__42269 = null;
var G__42270 = (0);
var G__42271 = (0);
seq__42228 = G__42268;
chunk__42229 = G__42269;
count__42230 = G__42270;
i__42231 = G__42271;
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

//# sourceMappingURL=repl.js.map?rel=1445816822840