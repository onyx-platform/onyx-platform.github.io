// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__18884__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__18884__auto__){
return or__18884__auto__;
} else {
var G__34397 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__34397) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__34400 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__34400) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34404){
var vec__34405 = p__34404;
var k = cljs.core.nth.call(null,vec__34405,(0),null);
var v = cljs.core.nth.call(null,vec__34405,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__18884__auto__ = React.isValidElement;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__34407 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__34407,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__34407,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var args34408 = [];
var len__19923__auto___35033 = arguments.length;
var i__19924__auto___35034 = (0);
while(true){
if((i__19924__auto___35034 < len__19923__auto___35033)){
args34408.push((arguments[i__19924__auto___35034]));

var G__35035 = (i__19924__auto___35034 + (1));
i__19924__auto___35034 = G__35035;
continue;
} else {
}
break;
}

var G__34412 = args34408.length;
switch (G__34412) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34408.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq34409){
var G__34410 = cljs.core.first.call(null,seq34409);
var seq34409__$1 = cljs.core.next.call(null,seq34409);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__34410,seq34409__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var args34413 = [];
var len__19923__auto___35037 = arguments.length;
var i__19924__auto___35038 = (0);
while(true){
if((i__19924__auto___35038 < len__19923__auto___35037)){
args34413.push((arguments[i__19924__auto___35038]));

var G__35039 = (i__19924__auto___35038 + (1));
i__19924__auto___35038 = G__35039;
continue;
} else {
}
break;
}

var G__34417 = args34413.length;
switch (G__34417) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34413.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq34414){
var G__34415 = cljs.core.first.call(null,seq34414);
var seq34414__$1 = cljs.core.next.call(null,seq34414);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__34415,seq34414__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(){
var args34418 = [];
var len__19923__auto___35041 = arguments.length;
var i__19924__auto___35042 = (0);
while(true){
if((i__19924__auto___35042 < len__19923__auto___35041)){
args34418.push((arguments[i__19924__auto___35042]));

var G__35043 = (i__19924__auto___35042 + (1));
i__19924__auto___35042 = G__35043;
continue;
} else {
}
break;
}

var G__34422 = args34418.length;
switch (G__34422) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34418.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq34419){
var G__34420 = cljs.core.first.call(null,seq34419);
var seq34419__$1 = cljs.core.next.call(null,seq34419);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__34420,seq34419__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(){
var args34423 = [];
var len__19923__auto___35045 = arguments.length;
var i__19924__auto___35046 = (0);
while(true){
if((i__19924__auto___35046 < len__19923__auto___35045)){
args34423.push((arguments[i__19924__auto___35046]));

var G__35047 = (i__19924__auto___35046 + (1));
i__19924__auto___35046 = G__35047;
continue;
} else {
}
break;
}

var G__34427 = args34423.length;
switch (G__34427) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34423.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq34424){
var G__34425 = cljs.core.first.call(null,seq34424);
var seq34424__$1 = cljs.core.next.call(null,seq34424);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__34425,seq34424__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(){
var args34428 = [];
var len__19923__auto___35049 = arguments.length;
var i__19924__auto___35050 = (0);
while(true){
if((i__19924__auto___35050 < len__19923__auto___35049)){
args34428.push((arguments[i__19924__auto___35050]));

var G__35051 = (i__19924__auto___35050 + (1));
i__19924__auto___35050 = G__35051;
continue;
} else {
}
break;
}

var G__34432 = args34428.length;
switch (G__34432) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34428.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq34429){
var G__34430 = cljs.core.first.call(null,seq34429);
var seq34429__$1 = cljs.core.next.call(null,seq34429);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__34430,seq34429__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(){
var args34433 = [];
var len__19923__auto___35053 = arguments.length;
var i__19924__auto___35054 = (0);
while(true){
if((i__19924__auto___35054 < len__19923__auto___35053)){
args34433.push((arguments[i__19924__auto___35054]));

var G__35055 = (i__19924__auto___35054 + (1));
i__19924__auto___35054 = G__35055;
continue;
} else {
}
break;
}

var G__34437 = args34433.length;
switch (G__34437) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34433.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq34434){
var G__34435 = cljs.core.first.call(null,seq34434);
var seq34434__$1 = cljs.core.next.call(null,seq34434);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__34435,seq34434__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(){
var args34438 = [];
var len__19923__auto___35057 = arguments.length;
var i__19924__auto___35058 = (0);
while(true){
if((i__19924__auto___35058 < len__19923__auto___35057)){
args34438.push((arguments[i__19924__auto___35058]));

var G__35059 = (i__19924__auto___35058 + (1));
i__19924__auto___35058 = G__35059;
continue;
} else {
}
break;
}

var G__34442 = args34438.length;
switch (G__34442) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34438.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq34439){
var G__34440 = cljs.core.first.call(null,seq34439);
var seq34439__$1 = cljs.core.next.call(null,seq34439);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__34440,seq34439__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(){
var args34443 = [];
var len__19923__auto___35061 = arguments.length;
var i__19924__auto___35062 = (0);
while(true){
if((i__19924__auto___35062 < len__19923__auto___35061)){
args34443.push((arguments[i__19924__auto___35062]));

var G__35063 = (i__19924__auto___35062 + (1));
i__19924__auto___35062 = G__35063;
continue;
} else {
}
break;
}

var G__34447 = args34443.length;
switch (G__34447) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34443.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq34444){
var G__34445 = cljs.core.first.call(null,seq34444);
var seq34444__$1 = cljs.core.next.call(null,seq34444);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__34445,seq34444__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(){
var args34448 = [];
var len__19923__auto___35065 = arguments.length;
var i__19924__auto___35066 = (0);
while(true){
if((i__19924__auto___35066 < len__19923__auto___35065)){
args34448.push((arguments[i__19924__auto___35066]));

var G__35067 = (i__19924__auto___35066 + (1));
i__19924__auto___35066 = G__35067;
continue;
} else {
}
break;
}

var G__34452 = args34448.length;
switch (G__34452) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34448.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq34449){
var G__34450 = cljs.core.first.call(null,seq34449);
var seq34449__$1 = cljs.core.next.call(null,seq34449);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__34450,seq34449__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var args34453 = [];
var len__19923__auto___35069 = arguments.length;
var i__19924__auto___35070 = (0);
while(true){
if((i__19924__auto___35070 < len__19923__auto___35069)){
args34453.push((arguments[i__19924__auto___35070]));

var G__35071 = (i__19924__auto___35070 + (1));
i__19924__auto___35070 = G__35071;
continue;
} else {
}
break;
}

var G__34457 = args34453.length;
switch (G__34457) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34453.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq34454){
var G__34455 = cljs.core.first.call(null,seq34454);
var seq34454__$1 = cljs.core.next.call(null,seq34454);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__34455,seq34454__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var args34458 = [];
var len__19923__auto___35073 = arguments.length;
var i__19924__auto___35074 = (0);
while(true){
if((i__19924__auto___35074 < len__19923__auto___35073)){
args34458.push((arguments[i__19924__auto___35074]));

var G__35075 = (i__19924__auto___35074 + (1));
i__19924__auto___35074 = G__35075;
continue;
} else {
}
break;
}

var G__34462 = args34458.length;
switch (G__34462) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34458.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq34459){
var G__34460 = cljs.core.first.call(null,seq34459);
var seq34459__$1 = cljs.core.next.call(null,seq34459);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__34460,seq34459__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(){
var args34463 = [];
var len__19923__auto___35077 = arguments.length;
var i__19924__auto___35078 = (0);
while(true){
if((i__19924__auto___35078 < len__19923__auto___35077)){
args34463.push((arguments[i__19924__auto___35078]));

var G__35079 = (i__19924__auto___35078 + (1));
i__19924__auto___35078 = G__35079;
continue;
} else {
}
break;
}

var G__34467 = args34463.length;
switch (G__34467) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34463.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq34464){
var G__34465 = cljs.core.first.call(null,seq34464);
var seq34464__$1 = cljs.core.next.call(null,seq34464);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__34465,seq34464__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var args34468 = [];
var len__19923__auto___35081 = arguments.length;
var i__19924__auto___35082 = (0);
while(true){
if((i__19924__auto___35082 < len__19923__auto___35081)){
args34468.push((arguments[i__19924__auto___35082]));

var G__35083 = (i__19924__auto___35082 + (1));
i__19924__auto___35082 = G__35083;
continue;
} else {
}
break;
}

var G__34472 = args34468.length;
switch (G__34472) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34468.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq34469){
var G__34470 = cljs.core.first.call(null,seq34469);
var seq34469__$1 = cljs.core.next.call(null,seq34469);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__34470,seq34469__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(){
var args34473 = [];
var len__19923__auto___35085 = arguments.length;
var i__19924__auto___35086 = (0);
while(true){
if((i__19924__auto___35086 < len__19923__auto___35085)){
args34473.push((arguments[i__19924__auto___35086]));

var G__35087 = (i__19924__auto___35086 + (1));
i__19924__auto___35086 = G__35087;
continue;
} else {
}
break;
}

var G__34477 = args34473.length;
switch (G__34477) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34473.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq34474){
var G__34475 = cljs.core.first.call(null,seq34474);
var seq34474__$1 = cljs.core.next.call(null,seq34474);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__34475,seq34474__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(){
var args34478 = [];
var len__19923__auto___35089 = arguments.length;
var i__19924__auto___35090 = (0);
while(true){
if((i__19924__auto___35090 < len__19923__auto___35089)){
args34478.push((arguments[i__19924__auto___35090]));

var G__35091 = (i__19924__auto___35090 + (1));
i__19924__auto___35090 = G__35091;
continue;
} else {
}
break;
}

var G__34482 = args34478.length;
switch (G__34482) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34478.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq34479){
var G__34480 = cljs.core.first.call(null,seq34479);
var seq34479__$1 = cljs.core.next.call(null,seq34479);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__34480,seq34479__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(){
var args34483 = [];
var len__19923__auto___35093 = arguments.length;
var i__19924__auto___35094 = (0);
while(true){
if((i__19924__auto___35094 < len__19923__auto___35093)){
args34483.push((arguments[i__19924__auto___35094]));

var G__35095 = (i__19924__auto___35094 + (1));
i__19924__auto___35094 = G__35095;
continue;
} else {
}
break;
}

var G__34487 = args34483.length;
switch (G__34487) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34483.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq34484){
var G__34485 = cljs.core.first.call(null,seq34484);
var seq34484__$1 = cljs.core.next.call(null,seq34484);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__34485,seq34484__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var args34488 = [];
var len__19923__auto___35097 = arguments.length;
var i__19924__auto___35098 = (0);
while(true){
if((i__19924__auto___35098 < len__19923__auto___35097)){
args34488.push((arguments[i__19924__auto___35098]));

var G__35099 = (i__19924__auto___35098 + (1));
i__19924__auto___35098 = G__35099;
continue;
} else {
}
break;
}

var G__34492 = args34488.length;
switch (G__34492) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34488.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq34489){
var G__34490 = cljs.core.first.call(null,seq34489);
var seq34489__$1 = cljs.core.next.call(null,seq34489);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__34490,seq34489__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(){
var args34493 = [];
var len__19923__auto___35101 = arguments.length;
var i__19924__auto___35102 = (0);
while(true){
if((i__19924__auto___35102 < len__19923__auto___35101)){
args34493.push((arguments[i__19924__auto___35102]));

var G__35103 = (i__19924__auto___35102 + (1));
i__19924__auto___35102 = G__35103;
continue;
} else {
}
break;
}

var G__34497 = args34493.length;
switch (G__34497) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34493.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq34494){
var G__34495 = cljs.core.first.call(null,seq34494);
var seq34494__$1 = cljs.core.next.call(null,seq34494);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__34495,seq34494__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(){
var args34498 = [];
var len__19923__auto___35105 = arguments.length;
var i__19924__auto___35106 = (0);
while(true){
if((i__19924__auto___35106 < len__19923__auto___35105)){
args34498.push((arguments[i__19924__auto___35106]));

var G__35107 = (i__19924__auto___35106 + (1));
i__19924__auto___35106 = G__35107;
continue;
} else {
}
break;
}

var G__34502 = args34498.length;
switch (G__34502) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34498.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq34499){
var G__34500 = cljs.core.first.call(null,seq34499);
var seq34499__$1 = cljs.core.next.call(null,seq34499);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__34500,seq34499__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(){
var args34503 = [];
var len__19923__auto___35109 = arguments.length;
var i__19924__auto___35110 = (0);
while(true){
if((i__19924__auto___35110 < len__19923__auto___35109)){
args34503.push((arguments[i__19924__auto___35110]));

var G__35111 = (i__19924__auto___35110 + (1));
i__19924__auto___35110 = G__35111;
continue;
} else {
}
break;
}

var G__34507 = args34503.length;
switch (G__34507) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34503.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq34504){
var G__34505 = cljs.core.first.call(null,seq34504);
var seq34504__$1 = cljs.core.next.call(null,seq34504);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__34505,seq34504__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(){
var args34508 = [];
var len__19923__auto___35113 = arguments.length;
var i__19924__auto___35114 = (0);
while(true){
if((i__19924__auto___35114 < len__19923__auto___35113)){
args34508.push((arguments[i__19924__auto___35114]));

var G__35115 = (i__19924__auto___35114 + (1));
i__19924__auto___35114 = G__35115;
continue;
} else {
}
break;
}

var G__34512 = args34508.length;
switch (G__34512) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34508.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq34509){
var G__34510 = cljs.core.first.call(null,seq34509);
var seq34509__$1 = cljs.core.next.call(null,seq34509);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__34510,seq34509__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var args34513 = [];
var len__19923__auto___35117 = arguments.length;
var i__19924__auto___35118 = (0);
while(true){
if((i__19924__auto___35118 < len__19923__auto___35117)){
args34513.push((arguments[i__19924__auto___35118]));

var G__35119 = (i__19924__auto___35118 + (1));
i__19924__auto___35118 = G__35119;
continue;
} else {
}
break;
}

var G__34517 = args34513.length;
switch (G__34517) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34513.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq34514){
var G__34515 = cljs.core.first.call(null,seq34514);
var seq34514__$1 = cljs.core.next.call(null,seq34514);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__34515,seq34514__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(){
var args34518 = [];
var len__19923__auto___35121 = arguments.length;
var i__19924__auto___35122 = (0);
while(true){
if((i__19924__auto___35122 < len__19923__auto___35121)){
args34518.push((arguments[i__19924__auto___35122]));

var G__35123 = (i__19924__auto___35122 + (1));
i__19924__auto___35122 = G__35123;
continue;
} else {
}
break;
}

var G__34522 = args34518.length;
switch (G__34522) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34518.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq34519){
var G__34520 = cljs.core.first.call(null,seq34519);
var seq34519__$1 = cljs.core.next.call(null,seq34519);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__34520,seq34519__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var args34523 = [];
var len__19923__auto___35125 = arguments.length;
var i__19924__auto___35126 = (0);
while(true){
if((i__19924__auto___35126 < len__19923__auto___35125)){
args34523.push((arguments[i__19924__auto___35126]));

var G__35127 = (i__19924__auto___35126 + (1));
i__19924__auto___35126 = G__35127;
continue;
} else {
}
break;
}

var G__34527 = args34523.length;
switch (G__34527) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34523.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq34524){
var G__34525 = cljs.core.first.call(null,seq34524);
var seq34524__$1 = cljs.core.next.call(null,seq34524);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__34525,seq34524__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(){
var args34528 = [];
var len__19923__auto___35129 = arguments.length;
var i__19924__auto___35130 = (0);
while(true){
if((i__19924__auto___35130 < len__19923__auto___35129)){
args34528.push((arguments[i__19924__auto___35130]));

var G__35131 = (i__19924__auto___35130 + (1));
i__19924__auto___35130 = G__35131;
continue;
} else {
}
break;
}

var G__34532 = args34528.length;
switch (G__34532) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34528.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq34529){
var G__34530 = cljs.core.first.call(null,seq34529);
var seq34529__$1 = cljs.core.next.call(null,seq34529);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__34530,seq34529__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(){
var args34533 = [];
var len__19923__auto___35133 = arguments.length;
var i__19924__auto___35134 = (0);
while(true){
if((i__19924__auto___35134 < len__19923__auto___35133)){
args34533.push((arguments[i__19924__auto___35134]));

var G__35135 = (i__19924__auto___35134 + (1));
i__19924__auto___35134 = G__35135;
continue;
} else {
}
break;
}

var G__34537 = args34533.length;
switch (G__34537) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34533.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq34534){
var G__34535 = cljs.core.first.call(null,seq34534);
var seq34534__$1 = cljs.core.next.call(null,seq34534);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__34535,seq34534__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var args34538 = [];
var len__19923__auto___35137 = arguments.length;
var i__19924__auto___35138 = (0);
while(true){
if((i__19924__auto___35138 < len__19923__auto___35137)){
args34538.push((arguments[i__19924__auto___35138]));

var G__35139 = (i__19924__auto___35138 + (1));
i__19924__auto___35138 = G__35139;
continue;
} else {
}
break;
}

var G__34542 = args34538.length;
switch (G__34542) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34538.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq34539){
var G__34540 = cljs.core.first.call(null,seq34539);
var seq34539__$1 = cljs.core.next.call(null,seq34539);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__34540,seq34539__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(){
var args34543 = [];
var len__19923__auto___35141 = arguments.length;
var i__19924__auto___35142 = (0);
while(true){
if((i__19924__auto___35142 < len__19923__auto___35141)){
args34543.push((arguments[i__19924__auto___35142]));

var G__35143 = (i__19924__auto___35142 + (1));
i__19924__auto___35142 = G__35143;
continue;
} else {
}
break;
}

var G__34547 = args34543.length;
switch (G__34547) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34543.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq34544){
var G__34545 = cljs.core.first.call(null,seq34544);
var seq34544__$1 = cljs.core.next.call(null,seq34544);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__34545,seq34544__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(){
var args34548 = [];
var len__19923__auto___35145 = arguments.length;
var i__19924__auto___35146 = (0);
while(true){
if((i__19924__auto___35146 < len__19923__auto___35145)){
args34548.push((arguments[i__19924__auto___35146]));

var G__35147 = (i__19924__auto___35146 + (1));
i__19924__auto___35146 = G__35147;
continue;
} else {
}
break;
}

var G__34552 = args34548.length;
switch (G__34552) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34548.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq34549){
var G__34550 = cljs.core.first.call(null,seq34549);
var seq34549__$1 = cljs.core.next.call(null,seq34549);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__34550,seq34549__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(){
var args34553 = [];
var len__19923__auto___35149 = arguments.length;
var i__19924__auto___35150 = (0);
while(true){
if((i__19924__auto___35150 < len__19923__auto___35149)){
args34553.push((arguments[i__19924__auto___35150]));

var G__35151 = (i__19924__auto___35150 + (1));
i__19924__auto___35150 = G__35151;
continue;
} else {
}
break;
}

var G__34557 = args34553.length;
switch (G__34557) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34553.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq34554){
var G__34555 = cljs.core.first.call(null,seq34554);
var seq34554__$1 = cljs.core.next.call(null,seq34554);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__34555,seq34554__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(){
var args34558 = [];
var len__19923__auto___35153 = arguments.length;
var i__19924__auto___35154 = (0);
while(true){
if((i__19924__auto___35154 < len__19923__auto___35153)){
args34558.push((arguments[i__19924__auto___35154]));

var G__35155 = (i__19924__auto___35154 + (1));
i__19924__auto___35154 = G__35155;
continue;
} else {
}
break;
}

var G__34562 = args34558.length;
switch (G__34562) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34558.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq34559){
var G__34560 = cljs.core.first.call(null,seq34559);
var seq34559__$1 = cljs.core.next.call(null,seq34559);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__34560,seq34559__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(){
var args34563 = [];
var len__19923__auto___35157 = arguments.length;
var i__19924__auto___35158 = (0);
while(true){
if((i__19924__auto___35158 < len__19923__auto___35157)){
args34563.push((arguments[i__19924__auto___35158]));

var G__35159 = (i__19924__auto___35158 + (1));
i__19924__auto___35158 = G__35159;
continue;
} else {
}
break;
}

var G__34567 = args34563.length;
switch (G__34567) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34563.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq34564){
var G__34565 = cljs.core.first.call(null,seq34564);
var seq34564__$1 = cljs.core.next.call(null,seq34564);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__34565,seq34564__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var args34573 = [];
var len__19923__auto___35161 = arguments.length;
var i__19924__auto___35162 = (0);
while(true){
if((i__19924__auto___35162 < len__19923__auto___35161)){
args34573.push((arguments[i__19924__auto___35162]));

var G__35163 = (i__19924__auto___35162 + (1));
i__19924__auto___35162 = G__35163;
continue;
} else {
}
break;
}

var G__34577 = args34573.length;
switch (G__34577) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34573.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq34574){
var G__34575 = cljs.core.first.call(null,seq34574);
var seq34574__$1 = cljs.core.next.call(null,seq34574);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__34575,seq34574__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var args34578 = [];
var len__19923__auto___35165 = arguments.length;
var i__19924__auto___35166 = (0);
while(true){
if((i__19924__auto___35166 < len__19923__auto___35165)){
args34578.push((arguments[i__19924__auto___35166]));

var G__35167 = (i__19924__auto___35166 + (1));
i__19924__auto___35166 = G__35167;
continue;
} else {
}
break;
}

var G__34582 = args34578.length;
switch (G__34582) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34578.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq34579){
var G__34580 = cljs.core.first.call(null,seq34579);
var seq34579__$1 = cljs.core.next.call(null,seq34579);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__34580,seq34579__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(){
var args34583 = [];
var len__19923__auto___35169 = arguments.length;
var i__19924__auto___35170 = (0);
while(true){
if((i__19924__auto___35170 < len__19923__auto___35169)){
args34583.push((arguments[i__19924__auto___35170]));

var G__35171 = (i__19924__auto___35170 + (1));
i__19924__auto___35170 = G__35171;
continue;
} else {
}
break;
}

var G__34587 = args34583.length;
switch (G__34587) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34583.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq34584){
var G__34585 = cljs.core.first.call(null,seq34584);
var seq34584__$1 = cljs.core.next.call(null,seq34584);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__34585,seq34584__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(){
var args34588 = [];
var len__19923__auto___35173 = arguments.length;
var i__19924__auto___35174 = (0);
while(true){
if((i__19924__auto___35174 < len__19923__auto___35173)){
args34588.push((arguments[i__19924__auto___35174]));

var G__35175 = (i__19924__auto___35174 + (1));
i__19924__auto___35174 = G__35175;
continue;
} else {
}
break;
}

var G__34592 = args34588.length;
switch (G__34592) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34588.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq34589){
var G__34590 = cljs.core.first.call(null,seq34589);
var seq34589__$1 = cljs.core.next.call(null,seq34589);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__34590,seq34589__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(){
var args34593 = [];
var len__19923__auto___35177 = arguments.length;
var i__19924__auto___35178 = (0);
while(true){
if((i__19924__auto___35178 < len__19923__auto___35177)){
args34593.push((arguments[i__19924__auto___35178]));

var G__35179 = (i__19924__auto___35178 + (1));
i__19924__auto___35178 = G__35179;
continue;
} else {
}
break;
}

var G__34597 = args34593.length;
switch (G__34597) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34593.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq34594){
var G__34595 = cljs.core.first.call(null,seq34594);
var seq34594__$1 = cljs.core.next.call(null,seq34594);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__34595,seq34594__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(){
var args34598 = [];
var len__19923__auto___35181 = arguments.length;
var i__19924__auto___35182 = (0);
while(true){
if((i__19924__auto___35182 < len__19923__auto___35181)){
args34598.push((arguments[i__19924__auto___35182]));

var G__35183 = (i__19924__auto___35182 + (1));
i__19924__auto___35182 = G__35183;
continue;
} else {
}
break;
}

var G__34602 = args34598.length;
switch (G__34602) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34598.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq34599){
var G__34600 = cljs.core.first.call(null,seq34599);
var seq34599__$1 = cljs.core.next.call(null,seq34599);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__34600,seq34599__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(){
var args34603 = [];
var len__19923__auto___35185 = arguments.length;
var i__19924__auto___35186 = (0);
while(true){
if((i__19924__auto___35186 < len__19923__auto___35185)){
args34603.push((arguments[i__19924__auto___35186]));

var G__35187 = (i__19924__auto___35186 + (1));
i__19924__auto___35186 = G__35187;
continue;
} else {
}
break;
}

var G__34607 = args34603.length;
switch (G__34607) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34603.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq34604){
var G__34605 = cljs.core.first.call(null,seq34604);
var seq34604__$1 = cljs.core.next.call(null,seq34604);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__34605,seq34604__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(){
var args34608 = [];
var len__19923__auto___35189 = arguments.length;
var i__19924__auto___35190 = (0);
while(true){
if((i__19924__auto___35190 < len__19923__auto___35189)){
args34608.push((arguments[i__19924__auto___35190]));

var G__35191 = (i__19924__auto___35190 + (1));
i__19924__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var G__34612 = args34608.length;
switch (G__34612) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34608.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq34609){
var G__34610 = cljs.core.first.call(null,seq34609);
var seq34609__$1 = cljs.core.next.call(null,seq34609);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__34610,seq34609__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(){
var args34613 = [];
var len__19923__auto___35193 = arguments.length;
var i__19924__auto___35194 = (0);
while(true){
if((i__19924__auto___35194 < len__19923__auto___35193)){
args34613.push((arguments[i__19924__auto___35194]));

var G__35195 = (i__19924__auto___35194 + (1));
i__19924__auto___35194 = G__35195;
continue;
} else {
}
break;
}

var G__34617 = args34613.length;
switch (G__34617) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34613.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq34614){
var G__34615 = cljs.core.first.call(null,seq34614);
var seq34614__$1 = cljs.core.next.call(null,seq34614);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__34615,seq34614__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(){
var args34618 = [];
var len__19923__auto___35197 = arguments.length;
var i__19924__auto___35198 = (0);
while(true){
if((i__19924__auto___35198 < len__19923__auto___35197)){
args34618.push((arguments[i__19924__auto___35198]));

var G__35199 = (i__19924__auto___35198 + (1));
i__19924__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var G__34622 = args34618.length;
switch (G__34622) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34618.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq34619){
var G__34620 = cljs.core.first.call(null,seq34619);
var seq34619__$1 = cljs.core.next.call(null,seq34619);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__34620,seq34619__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(){
var args34623 = [];
var len__19923__auto___35201 = arguments.length;
var i__19924__auto___35202 = (0);
while(true){
if((i__19924__auto___35202 < len__19923__auto___35201)){
args34623.push((arguments[i__19924__auto___35202]));

var G__35203 = (i__19924__auto___35202 + (1));
i__19924__auto___35202 = G__35203;
continue;
} else {
}
break;
}

var G__34627 = args34623.length;
switch (G__34627) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34623.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq34624){
var G__34625 = cljs.core.first.call(null,seq34624);
var seq34624__$1 = cljs.core.next.call(null,seq34624);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__34625,seq34624__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(){
var args34628 = [];
var len__19923__auto___35205 = arguments.length;
var i__19924__auto___35206 = (0);
while(true){
if((i__19924__auto___35206 < len__19923__auto___35205)){
args34628.push((arguments[i__19924__auto___35206]));

var G__35207 = (i__19924__auto___35206 + (1));
i__19924__auto___35206 = G__35207;
continue;
} else {
}
break;
}

var G__34632 = args34628.length;
switch (G__34632) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34628.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq34629){
var G__34630 = cljs.core.first.call(null,seq34629);
var seq34629__$1 = cljs.core.next.call(null,seq34629);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__34630,seq34629__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(){
var args34633 = [];
var len__19923__auto___35209 = arguments.length;
var i__19924__auto___35210 = (0);
while(true){
if((i__19924__auto___35210 < len__19923__auto___35209)){
args34633.push((arguments[i__19924__auto___35210]));

var G__35211 = (i__19924__auto___35210 + (1));
i__19924__auto___35210 = G__35211;
continue;
} else {
}
break;
}

var G__34637 = args34633.length;
switch (G__34637) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34633.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq34634){
var G__34635 = cljs.core.first.call(null,seq34634);
var seq34634__$1 = cljs.core.next.call(null,seq34634);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__34635,seq34634__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(){
var args34638 = [];
var len__19923__auto___35213 = arguments.length;
var i__19924__auto___35214 = (0);
while(true){
if((i__19924__auto___35214 < len__19923__auto___35213)){
args34638.push((arguments[i__19924__auto___35214]));

var G__35215 = (i__19924__auto___35214 + (1));
i__19924__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var G__34642 = args34638.length;
switch (G__34642) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34638.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq34639){
var G__34640 = cljs.core.first.call(null,seq34639);
var seq34639__$1 = cljs.core.next.call(null,seq34639);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__34640,seq34639__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(){
var args34643 = [];
var len__19923__auto___35217 = arguments.length;
var i__19924__auto___35218 = (0);
while(true){
if((i__19924__auto___35218 < len__19923__auto___35217)){
args34643.push((arguments[i__19924__auto___35218]));

var G__35219 = (i__19924__auto___35218 + (1));
i__19924__auto___35218 = G__35219;
continue;
} else {
}
break;
}

var G__34647 = args34643.length;
switch (G__34647) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34643.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq34644){
var G__34645 = cljs.core.first.call(null,seq34644);
var seq34644__$1 = cljs.core.next.call(null,seq34644);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__34645,seq34644__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(){
var args34648 = [];
var len__19923__auto___35221 = arguments.length;
var i__19924__auto___35222 = (0);
while(true){
if((i__19924__auto___35222 < len__19923__auto___35221)){
args34648.push((arguments[i__19924__auto___35222]));

var G__35223 = (i__19924__auto___35222 + (1));
i__19924__auto___35222 = G__35223;
continue;
} else {
}
break;
}

var G__34652 = args34648.length;
switch (G__34652) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34648.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq34649){
var G__34650 = cljs.core.first.call(null,seq34649);
var seq34649__$1 = cljs.core.next.call(null,seq34649);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__34650,seq34649__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var args34653 = [];
var len__19923__auto___35225 = arguments.length;
var i__19924__auto___35226 = (0);
while(true){
if((i__19924__auto___35226 < len__19923__auto___35225)){
args34653.push((arguments[i__19924__auto___35226]));

var G__35227 = (i__19924__auto___35226 + (1));
i__19924__auto___35226 = G__35227;
continue;
} else {
}
break;
}

var G__34657 = args34653.length;
switch (G__34657) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34653.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq34654){
var G__34655 = cljs.core.first.call(null,seq34654);
var seq34654__$1 = cljs.core.next.call(null,seq34654);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__34655,seq34654__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(){
var args34658 = [];
var len__19923__auto___35229 = arguments.length;
var i__19924__auto___35230 = (0);
while(true){
if((i__19924__auto___35230 < len__19923__auto___35229)){
args34658.push((arguments[i__19924__auto___35230]));

var G__35231 = (i__19924__auto___35230 + (1));
i__19924__auto___35230 = G__35231;
continue;
} else {
}
break;
}

var G__34662 = args34658.length;
switch (G__34662) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34658.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq34659){
var G__34660 = cljs.core.first.call(null,seq34659);
var seq34659__$1 = cljs.core.next.call(null,seq34659);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__34660,seq34659__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(){
var args34663 = [];
var len__19923__auto___35233 = arguments.length;
var i__19924__auto___35234 = (0);
while(true){
if((i__19924__auto___35234 < len__19923__auto___35233)){
args34663.push((arguments[i__19924__auto___35234]));

var G__35235 = (i__19924__auto___35234 + (1));
i__19924__auto___35234 = G__35235;
continue;
} else {
}
break;
}

var G__34667 = args34663.length;
switch (G__34667) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34663.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq34664){
var G__34665 = cljs.core.first.call(null,seq34664);
var seq34664__$1 = cljs.core.next.call(null,seq34664);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__34665,seq34664__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var args34668 = [];
var len__19923__auto___35237 = arguments.length;
var i__19924__auto___35238 = (0);
while(true){
if((i__19924__auto___35238 < len__19923__auto___35237)){
args34668.push((arguments[i__19924__auto___35238]));

var G__35239 = (i__19924__auto___35238 + (1));
i__19924__auto___35238 = G__35239;
continue;
} else {
}
break;
}

var G__34672 = args34668.length;
switch (G__34672) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34668.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq34669){
var G__34670 = cljs.core.first.call(null,seq34669);
var seq34669__$1 = cljs.core.next.call(null,seq34669);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__34670,seq34669__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var args34673 = [];
var len__19923__auto___35241 = arguments.length;
var i__19924__auto___35242 = (0);
while(true){
if((i__19924__auto___35242 < len__19923__auto___35241)){
args34673.push((arguments[i__19924__auto___35242]));

var G__35243 = (i__19924__auto___35242 + (1));
i__19924__auto___35242 = G__35243;
continue;
} else {
}
break;
}

var G__34677 = args34673.length;
switch (G__34677) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34673.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq34674){
var G__34675 = cljs.core.first.call(null,seq34674);
var seq34674__$1 = cljs.core.next.call(null,seq34674);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__34675,seq34674__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(){
var args34678 = [];
var len__19923__auto___35245 = arguments.length;
var i__19924__auto___35246 = (0);
while(true){
if((i__19924__auto___35246 < len__19923__auto___35245)){
args34678.push((arguments[i__19924__auto___35246]));

var G__35247 = (i__19924__auto___35246 + (1));
i__19924__auto___35246 = G__35247;
continue;
} else {
}
break;
}

var G__34682 = args34678.length;
switch (G__34682) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34678.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq34679){
var G__34680 = cljs.core.first.call(null,seq34679);
var seq34679__$1 = cljs.core.next.call(null,seq34679);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__34680,seq34679__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(){
var args34683 = [];
var len__19923__auto___35249 = arguments.length;
var i__19924__auto___35250 = (0);
while(true){
if((i__19924__auto___35250 < len__19923__auto___35249)){
args34683.push((arguments[i__19924__auto___35250]));

var G__35251 = (i__19924__auto___35250 + (1));
i__19924__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var G__34687 = args34683.length;
switch (G__34687) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34683.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq34684){
var G__34685 = cljs.core.first.call(null,seq34684);
var seq34684__$1 = cljs.core.next.call(null,seq34684);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__34685,seq34684__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(){
var args34688 = [];
var len__19923__auto___35253 = arguments.length;
var i__19924__auto___35254 = (0);
while(true){
if((i__19924__auto___35254 < len__19923__auto___35253)){
args34688.push((arguments[i__19924__auto___35254]));

var G__35255 = (i__19924__auto___35254 + (1));
i__19924__auto___35254 = G__35255;
continue;
} else {
}
break;
}

var G__34692 = args34688.length;
switch (G__34692) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34688.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq34689){
var G__34690 = cljs.core.first.call(null,seq34689);
var seq34689__$1 = cljs.core.next.call(null,seq34689);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__34690,seq34689__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(){
var args34693 = [];
var len__19923__auto___35257 = arguments.length;
var i__19924__auto___35258 = (0);
while(true){
if((i__19924__auto___35258 < len__19923__auto___35257)){
args34693.push((arguments[i__19924__auto___35258]));

var G__35259 = (i__19924__auto___35258 + (1));
i__19924__auto___35258 = G__35259;
continue;
} else {
}
break;
}

var G__34697 = args34693.length;
switch (G__34697) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34693.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq34694){
var G__34695 = cljs.core.first.call(null,seq34694);
var seq34694__$1 = cljs.core.next.call(null,seq34694);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__34695,seq34694__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(){
var args34698 = [];
var len__19923__auto___35261 = arguments.length;
var i__19924__auto___35262 = (0);
while(true){
if((i__19924__auto___35262 < len__19923__auto___35261)){
args34698.push((arguments[i__19924__auto___35262]));

var G__35263 = (i__19924__auto___35262 + (1));
i__19924__auto___35262 = G__35263;
continue;
} else {
}
break;
}

var G__34702 = args34698.length;
switch (G__34702) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34698.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq34699){
var G__34700 = cljs.core.first.call(null,seq34699);
var seq34699__$1 = cljs.core.next.call(null,seq34699);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__34700,seq34699__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(){
var args34703 = [];
var len__19923__auto___35265 = arguments.length;
var i__19924__auto___35266 = (0);
while(true){
if((i__19924__auto___35266 < len__19923__auto___35265)){
args34703.push((arguments[i__19924__auto___35266]));

var G__35267 = (i__19924__auto___35266 + (1));
i__19924__auto___35266 = G__35267;
continue;
} else {
}
break;
}

var G__34707 = args34703.length;
switch (G__34707) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34703.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq34704){
var G__34705 = cljs.core.first.call(null,seq34704);
var seq34704__$1 = cljs.core.next.call(null,seq34704);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__34705,seq34704__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(){
var args34708 = [];
var len__19923__auto___35269 = arguments.length;
var i__19924__auto___35270 = (0);
while(true){
if((i__19924__auto___35270 < len__19923__auto___35269)){
args34708.push((arguments[i__19924__auto___35270]));

var G__35271 = (i__19924__auto___35270 + (1));
i__19924__auto___35270 = G__35271;
continue;
} else {
}
break;
}

var G__34712 = args34708.length;
switch (G__34712) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34708.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq34709){
var G__34710 = cljs.core.first.call(null,seq34709);
var seq34709__$1 = cljs.core.next.call(null,seq34709);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__34710,seq34709__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var args34713 = [];
var len__19923__auto___35273 = arguments.length;
var i__19924__auto___35274 = (0);
while(true){
if((i__19924__auto___35274 < len__19923__auto___35273)){
args34713.push((arguments[i__19924__auto___35274]));

var G__35275 = (i__19924__auto___35274 + (1));
i__19924__auto___35274 = G__35275;
continue;
} else {
}
break;
}

var G__34717 = args34713.length;
switch (G__34717) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34713.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq34714){
var G__34715 = cljs.core.first.call(null,seq34714);
var seq34714__$1 = cljs.core.next.call(null,seq34714);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__34715,seq34714__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(){
var args34718 = [];
var len__19923__auto___35277 = arguments.length;
var i__19924__auto___35278 = (0);
while(true){
if((i__19924__auto___35278 < len__19923__auto___35277)){
args34718.push((arguments[i__19924__auto___35278]));

var G__35279 = (i__19924__auto___35278 + (1));
i__19924__auto___35278 = G__35279;
continue;
} else {
}
break;
}

var G__34722 = args34718.length;
switch (G__34722) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34718.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq34719){
var G__34720 = cljs.core.first.call(null,seq34719);
var seq34719__$1 = cljs.core.next.call(null,seq34719);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__34720,seq34719__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var args34723 = [];
var len__19923__auto___35281 = arguments.length;
var i__19924__auto___35282 = (0);
while(true){
if((i__19924__auto___35282 < len__19923__auto___35281)){
args34723.push((arguments[i__19924__auto___35282]));

var G__35283 = (i__19924__auto___35282 + (1));
i__19924__auto___35282 = G__35283;
continue;
} else {
}
break;
}

var G__34727 = args34723.length;
switch (G__34727) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34723.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq34724){
var G__34725 = cljs.core.first.call(null,seq34724);
var seq34724__$1 = cljs.core.next.call(null,seq34724);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__34725,seq34724__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(){
var args34728 = [];
var len__19923__auto___35285 = arguments.length;
var i__19924__auto___35286 = (0);
while(true){
if((i__19924__auto___35286 < len__19923__auto___35285)){
args34728.push((arguments[i__19924__auto___35286]));

var G__35287 = (i__19924__auto___35286 + (1));
i__19924__auto___35286 = G__35287;
continue;
} else {
}
break;
}

var G__34732 = args34728.length;
switch (G__34732) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34728.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq34729){
var G__34730 = cljs.core.first.call(null,seq34729);
var seq34729__$1 = cljs.core.next.call(null,seq34729);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__34730,seq34729__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(){
var args34733 = [];
var len__19923__auto___35289 = arguments.length;
var i__19924__auto___35290 = (0);
while(true){
if((i__19924__auto___35290 < len__19923__auto___35289)){
args34733.push((arguments[i__19924__auto___35290]));

var G__35291 = (i__19924__auto___35290 + (1));
i__19924__auto___35290 = G__35291;
continue;
} else {
}
break;
}

var G__34737 = args34733.length;
switch (G__34737) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34733.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq34734){
var G__34735 = cljs.core.first.call(null,seq34734);
var seq34734__$1 = cljs.core.next.call(null,seq34734);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__34735,seq34734__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(){
var args34738 = [];
var len__19923__auto___35293 = arguments.length;
var i__19924__auto___35294 = (0);
while(true){
if((i__19924__auto___35294 < len__19923__auto___35293)){
args34738.push((arguments[i__19924__auto___35294]));

var G__35295 = (i__19924__auto___35294 + (1));
i__19924__auto___35294 = G__35295;
continue;
} else {
}
break;
}

var G__34742 = args34738.length;
switch (G__34742) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34738.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq34739){
var G__34740 = cljs.core.first.call(null,seq34739);
var seq34739__$1 = cljs.core.next.call(null,seq34739);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__34740,seq34739__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var args34743 = [];
var len__19923__auto___35297 = arguments.length;
var i__19924__auto___35298 = (0);
while(true){
if((i__19924__auto___35298 < len__19923__auto___35297)){
args34743.push((arguments[i__19924__auto___35298]));

var G__35299 = (i__19924__auto___35298 + (1));
i__19924__auto___35298 = G__35299;
continue;
} else {
}
break;
}

var G__34747 = args34743.length;
switch (G__34747) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34743.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq34744){
var G__34745 = cljs.core.first.call(null,seq34744);
var seq34744__$1 = cljs.core.next.call(null,seq34744);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__34745,seq34744__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(){
var args34748 = [];
var len__19923__auto___35301 = arguments.length;
var i__19924__auto___35302 = (0);
while(true){
if((i__19924__auto___35302 < len__19923__auto___35301)){
args34748.push((arguments[i__19924__auto___35302]));

var G__35303 = (i__19924__auto___35302 + (1));
i__19924__auto___35302 = G__35303;
continue;
} else {
}
break;
}

var G__34752 = args34748.length;
switch (G__34752) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34748.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq34749){
var G__34750 = cljs.core.first.call(null,seq34749);
var seq34749__$1 = cljs.core.next.call(null,seq34749);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__34750,seq34749__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(){
var args34753 = [];
var len__19923__auto___35305 = arguments.length;
var i__19924__auto___35306 = (0);
while(true){
if((i__19924__auto___35306 < len__19923__auto___35305)){
args34753.push((arguments[i__19924__auto___35306]));

var G__35307 = (i__19924__auto___35306 + (1));
i__19924__auto___35306 = G__35307;
continue;
} else {
}
break;
}

var G__34757 = args34753.length;
switch (G__34757) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34753.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq34754){
var G__34755 = cljs.core.first.call(null,seq34754);
var seq34754__$1 = cljs.core.next.call(null,seq34754);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__34755,seq34754__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var args34758 = [];
var len__19923__auto___35309 = arguments.length;
var i__19924__auto___35310 = (0);
while(true){
if((i__19924__auto___35310 < len__19923__auto___35309)){
args34758.push((arguments[i__19924__auto___35310]));

var G__35311 = (i__19924__auto___35310 + (1));
i__19924__auto___35310 = G__35311;
continue;
} else {
}
break;
}

var G__34762 = args34758.length;
switch (G__34762) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34758.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq34759){
var G__34760 = cljs.core.first.call(null,seq34759);
var seq34759__$1 = cljs.core.next.call(null,seq34759);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__34760,seq34759__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(){
var args34763 = [];
var len__19923__auto___35313 = arguments.length;
var i__19924__auto___35314 = (0);
while(true){
if((i__19924__auto___35314 < len__19923__auto___35313)){
args34763.push((arguments[i__19924__auto___35314]));

var G__35315 = (i__19924__auto___35314 + (1));
i__19924__auto___35314 = G__35315;
continue;
} else {
}
break;
}

var G__34767 = args34763.length;
switch (G__34767) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34763.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq34764){
var G__34765 = cljs.core.first.call(null,seq34764);
var seq34764__$1 = cljs.core.next.call(null,seq34764);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__34765,seq34764__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(){
var args34768 = [];
var len__19923__auto___35317 = arguments.length;
var i__19924__auto___35318 = (0);
while(true){
if((i__19924__auto___35318 < len__19923__auto___35317)){
args34768.push((arguments[i__19924__auto___35318]));

var G__35319 = (i__19924__auto___35318 + (1));
i__19924__auto___35318 = G__35319;
continue;
} else {
}
break;
}

var G__34772 = args34768.length;
switch (G__34772) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34768.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq34769){
var G__34770 = cljs.core.first.call(null,seq34769);
var seq34769__$1 = cljs.core.next.call(null,seq34769);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__34770,seq34769__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(){
var args34773 = [];
var len__19923__auto___35321 = arguments.length;
var i__19924__auto___35322 = (0);
while(true){
if((i__19924__auto___35322 < len__19923__auto___35321)){
args34773.push((arguments[i__19924__auto___35322]));

var G__35323 = (i__19924__auto___35322 + (1));
i__19924__auto___35322 = G__35323;
continue;
} else {
}
break;
}

var G__34777 = args34773.length;
switch (G__34777) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34773.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq34774){
var G__34775 = cljs.core.first.call(null,seq34774);
var seq34774__$1 = cljs.core.next.call(null,seq34774);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__34775,seq34774__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(){
var args34778 = [];
var len__19923__auto___35325 = arguments.length;
var i__19924__auto___35326 = (0);
while(true){
if((i__19924__auto___35326 < len__19923__auto___35325)){
args34778.push((arguments[i__19924__auto___35326]));

var G__35327 = (i__19924__auto___35326 + (1));
i__19924__auto___35326 = G__35327;
continue;
} else {
}
break;
}

var G__34782 = args34778.length;
switch (G__34782) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34778.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq34779){
var G__34780 = cljs.core.first.call(null,seq34779);
var seq34779__$1 = cljs.core.next.call(null,seq34779);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__34780,seq34779__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(){
var args34783 = [];
var len__19923__auto___35329 = arguments.length;
var i__19924__auto___35330 = (0);
while(true){
if((i__19924__auto___35330 < len__19923__auto___35329)){
args34783.push((arguments[i__19924__auto___35330]));

var G__35331 = (i__19924__auto___35330 + (1));
i__19924__auto___35330 = G__35331;
continue;
} else {
}
break;
}

var G__34787 = args34783.length;
switch (G__34787) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34783.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq34784){
var G__34785 = cljs.core.first.call(null,seq34784);
var seq34784__$1 = cljs.core.next.call(null,seq34784);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__34785,seq34784__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(){
var args34788 = [];
var len__19923__auto___35333 = arguments.length;
var i__19924__auto___35334 = (0);
while(true){
if((i__19924__auto___35334 < len__19923__auto___35333)){
args34788.push((arguments[i__19924__auto___35334]));

var G__35335 = (i__19924__auto___35334 + (1));
i__19924__auto___35334 = G__35335;
continue;
} else {
}
break;
}

var G__34792 = args34788.length;
switch (G__34792) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34788.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq34789){
var G__34790 = cljs.core.first.call(null,seq34789);
var seq34789__$1 = cljs.core.next.call(null,seq34789);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__34790,seq34789__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(){
var args34793 = [];
var len__19923__auto___35337 = arguments.length;
var i__19924__auto___35338 = (0);
while(true){
if((i__19924__auto___35338 < len__19923__auto___35337)){
args34793.push((arguments[i__19924__auto___35338]));

var G__35339 = (i__19924__auto___35338 + (1));
i__19924__auto___35338 = G__35339;
continue;
} else {
}
break;
}

var G__34797 = args34793.length;
switch (G__34797) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34793.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq34794){
var G__34795 = cljs.core.first.call(null,seq34794);
var seq34794__$1 = cljs.core.next.call(null,seq34794);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__34795,seq34794__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(){
var args34798 = [];
var len__19923__auto___35341 = arguments.length;
var i__19924__auto___35342 = (0);
while(true){
if((i__19924__auto___35342 < len__19923__auto___35341)){
args34798.push((arguments[i__19924__auto___35342]));

var G__35343 = (i__19924__auto___35342 + (1));
i__19924__auto___35342 = G__35343;
continue;
} else {
}
break;
}

var G__34802 = args34798.length;
switch (G__34802) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34798.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq34799){
var G__34800 = cljs.core.first.call(null,seq34799);
var seq34799__$1 = cljs.core.next.call(null,seq34799);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__34800,seq34799__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var args34803 = [];
var len__19923__auto___35345 = arguments.length;
var i__19924__auto___35346 = (0);
while(true){
if((i__19924__auto___35346 < len__19923__auto___35345)){
args34803.push((arguments[i__19924__auto___35346]));

var G__35347 = (i__19924__auto___35346 + (1));
i__19924__auto___35346 = G__35347;
continue;
} else {
}
break;
}

var G__34807 = args34803.length;
switch (G__34807) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34803.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq34804){
var G__34805 = cljs.core.first.call(null,seq34804);
var seq34804__$1 = cljs.core.next.call(null,seq34804);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__34805,seq34804__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(){
var args34808 = [];
var len__19923__auto___35349 = arguments.length;
var i__19924__auto___35350 = (0);
while(true){
if((i__19924__auto___35350 < len__19923__auto___35349)){
args34808.push((arguments[i__19924__auto___35350]));

var G__35351 = (i__19924__auto___35350 + (1));
i__19924__auto___35350 = G__35351;
continue;
} else {
}
break;
}

var G__34812 = args34808.length;
switch (G__34812) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34808.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq34809){
var G__34810 = cljs.core.first.call(null,seq34809);
var seq34809__$1 = cljs.core.next.call(null,seq34809);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__34810,seq34809__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(){
var args34813 = [];
var len__19923__auto___35353 = arguments.length;
var i__19924__auto___35354 = (0);
while(true){
if((i__19924__auto___35354 < len__19923__auto___35353)){
args34813.push((arguments[i__19924__auto___35354]));

var G__35355 = (i__19924__auto___35354 + (1));
i__19924__auto___35354 = G__35355;
continue;
} else {
}
break;
}

var G__34817 = args34813.length;
switch (G__34817) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34813.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq34814){
var G__34815 = cljs.core.first.call(null,seq34814);
var seq34814__$1 = cljs.core.next.call(null,seq34814);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__34815,seq34814__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(){
var args34818 = [];
var len__19923__auto___35357 = arguments.length;
var i__19924__auto___35358 = (0);
while(true){
if((i__19924__auto___35358 < len__19923__auto___35357)){
args34818.push((arguments[i__19924__auto___35358]));

var G__35359 = (i__19924__auto___35358 + (1));
i__19924__auto___35358 = G__35359;
continue;
} else {
}
break;
}

var G__34822 = args34818.length;
switch (G__34822) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34818.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq34819){
var G__34820 = cljs.core.first.call(null,seq34819);
var seq34819__$1 = cljs.core.next.call(null,seq34819);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__34820,seq34819__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(){
var args34823 = [];
var len__19923__auto___35361 = arguments.length;
var i__19924__auto___35362 = (0);
while(true){
if((i__19924__auto___35362 < len__19923__auto___35361)){
args34823.push((arguments[i__19924__auto___35362]));

var G__35363 = (i__19924__auto___35362 + (1));
i__19924__auto___35362 = G__35363;
continue;
} else {
}
break;
}

var G__34827 = args34823.length;
switch (G__34827) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34823.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq34824){
var G__34825 = cljs.core.first.call(null,seq34824);
var seq34824__$1 = cljs.core.next.call(null,seq34824);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__34825,seq34824__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(){
var args34828 = [];
var len__19923__auto___35365 = arguments.length;
var i__19924__auto___35366 = (0);
while(true){
if((i__19924__auto___35366 < len__19923__auto___35365)){
args34828.push((arguments[i__19924__auto___35366]));

var G__35367 = (i__19924__auto___35366 + (1));
i__19924__auto___35366 = G__35367;
continue;
} else {
}
break;
}

var G__34832 = args34828.length;
switch (G__34832) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34828.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq34829){
var G__34830 = cljs.core.first.call(null,seq34829);
var seq34829__$1 = cljs.core.next.call(null,seq34829);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__34830,seq34829__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(){
var args34833 = [];
var len__19923__auto___35369 = arguments.length;
var i__19924__auto___35370 = (0);
while(true){
if((i__19924__auto___35370 < len__19923__auto___35369)){
args34833.push((arguments[i__19924__auto___35370]));

var G__35371 = (i__19924__auto___35370 + (1));
i__19924__auto___35370 = G__35371;
continue;
} else {
}
break;
}

var G__34837 = args34833.length;
switch (G__34837) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34833.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq34834){
var G__34835 = cljs.core.first.call(null,seq34834);
var seq34834__$1 = cljs.core.next.call(null,seq34834);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__34835,seq34834__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(){
var args34838 = [];
var len__19923__auto___35373 = arguments.length;
var i__19924__auto___35374 = (0);
while(true){
if((i__19924__auto___35374 < len__19923__auto___35373)){
args34838.push((arguments[i__19924__auto___35374]));

var G__35375 = (i__19924__auto___35374 + (1));
i__19924__auto___35374 = G__35375;
continue;
} else {
}
break;
}

var G__34842 = args34838.length;
switch (G__34842) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34838.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq34839){
var G__34840 = cljs.core.first.call(null,seq34839);
var seq34839__$1 = cljs.core.next.call(null,seq34839);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__34840,seq34839__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(){
var args34843 = [];
var len__19923__auto___35377 = arguments.length;
var i__19924__auto___35378 = (0);
while(true){
if((i__19924__auto___35378 < len__19923__auto___35377)){
args34843.push((arguments[i__19924__auto___35378]));

var G__35379 = (i__19924__auto___35378 + (1));
i__19924__auto___35378 = G__35379;
continue;
} else {
}
break;
}

var G__34847 = args34843.length;
switch (G__34847) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34843.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq34844){
var G__34845 = cljs.core.first.call(null,seq34844);
var seq34844__$1 = cljs.core.next.call(null,seq34844);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__34845,seq34844__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(){
var args34848 = [];
var len__19923__auto___35381 = arguments.length;
var i__19924__auto___35382 = (0);
while(true){
if((i__19924__auto___35382 < len__19923__auto___35381)){
args34848.push((arguments[i__19924__auto___35382]));

var G__35383 = (i__19924__auto___35382 + (1));
i__19924__auto___35382 = G__35383;
continue;
} else {
}
break;
}

var G__34852 = args34848.length;
switch (G__34852) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34848.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq34849){
var G__34850 = cljs.core.first.call(null,seq34849);
var seq34849__$1 = cljs.core.next.call(null,seq34849);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__34850,seq34849__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(){
var args34853 = [];
var len__19923__auto___35385 = arguments.length;
var i__19924__auto___35386 = (0);
while(true){
if((i__19924__auto___35386 < len__19923__auto___35385)){
args34853.push((arguments[i__19924__auto___35386]));

var G__35387 = (i__19924__auto___35386 + (1));
i__19924__auto___35386 = G__35387;
continue;
} else {
}
break;
}

var G__34857 = args34853.length;
switch (G__34857) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34853.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq34854){
var G__34855 = cljs.core.first.call(null,seq34854);
var seq34854__$1 = cljs.core.next.call(null,seq34854);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__34855,seq34854__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(){
var args34858 = [];
var len__19923__auto___35389 = arguments.length;
var i__19924__auto___35390 = (0);
while(true){
if((i__19924__auto___35390 < len__19923__auto___35389)){
args34858.push((arguments[i__19924__auto___35390]));

var G__35391 = (i__19924__auto___35390 + (1));
i__19924__auto___35390 = G__35391;
continue;
} else {
}
break;
}

var G__34862 = args34858.length;
switch (G__34862) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34858.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq34859){
var G__34860 = cljs.core.first.call(null,seq34859);
var seq34859__$1 = cljs.core.next.call(null,seq34859);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__34860,seq34859__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(){
var args34863 = [];
var len__19923__auto___35393 = arguments.length;
var i__19924__auto___35394 = (0);
while(true){
if((i__19924__auto___35394 < len__19923__auto___35393)){
args34863.push((arguments[i__19924__auto___35394]));

var G__35395 = (i__19924__auto___35394 + (1));
i__19924__auto___35394 = G__35395;
continue;
} else {
}
break;
}

var G__34867 = args34863.length;
switch (G__34867) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34863.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq34864){
var G__34865 = cljs.core.first.call(null,seq34864);
var seq34864__$1 = cljs.core.next.call(null,seq34864);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__34865,seq34864__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(){
var args34868 = [];
var len__19923__auto___35397 = arguments.length;
var i__19924__auto___35398 = (0);
while(true){
if((i__19924__auto___35398 < len__19923__auto___35397)){
args34868.push((arguments[i__19924__auto___35398]));

var G__35399 = (i__19924__auto___35398 + (1));
i__19924__auto___35398 = G__35399;
continue;
} else {
}
break;
}

var G__34872 = args34868.length;
switch (G__34872) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34868.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq34869){
var G__34870 = cljs.core.first.call(null,seq34869);
var seq34869__$1 = cljs.core.next.call(null,seq34869);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__34870,seq34869__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(){
var args34873 = [];
var len__19923__auto___35401 = arguments.length;
var i__19924__auto___35402 = (0);
while(true){
if((i__19924__auto___35402 < len__19923__auto___35401)){
args34873.push((arguments[i__19924__auto___35402]));

var G__35403 = (i__19924__auto___35402 + (1));
i__19924__auto___35402 = G__35403;
continue;
} else {
}
break;
}

var G__34877 = args34873.length;
switch (G__34877) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34873.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq34874){
var G__34875 = cljs.core.first.call(null,seq34874);
var seq34874__$1 = cljs.core.next.call(null,seq34874);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__34875,seq34874__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var args34878 = [];
var len__19923__auto___35405 = arguments.length;
var i__19924__auto___35406 = (0);
while(true){
if((i__19924__auto___35406 < len__19923__auto___35405)){
args34878.push((arguments[i__19924__auto___35406]));

var G__35407 = (i__19924__auto___35406 + (1));
i__19924__auto___35406 = G__35407;
continue;
} else {
}
break;
}

var G__34882 = args34878.length;
switch (G__34882) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34878.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq34879){
var G__34880 = cljs.core.first.call(null,seq34879);
var seq34879__$1 = cljs.core.next.call(null,seq34879);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__34880,seq34879__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(){
var args34883 = [];
var len__19923__auto___35409 = arguments.length;
var i__19924__auto___35410 = (0);
while(true){
if((i__19924__auto___35410 < len__19923__auto___35409)){
args34883.push((arguments[i__19924__auto___35410]));

var G__35411 = (i__19924__auto___35410 + (1));
i__19924__auto___35410 = G__35411;
continue;
} else {
}
break;
}

var G__34887 = args34883.length;
switch (G__34887) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34883.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq34884){
var G__34885 = cljs.core.first.call(null,seq34884);
var seq34884__$1 = cljs.core.next.call(null,seq34884);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__34885,seq34884__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var args34888 = [];
var len__19923__auto___35413 = arguments.length;
var i__19924__auto___35414 = (0);
while(true){
if((i__19924__auto___35414 < len__19923__auto___35413)){
args34888.push((arguments[i__19924__auto___35414]));

var G__35415 = (i__19924__auto___35414 + (1));
i__19924__auto___35414 = G__35415;
continue;
} else {
}
break;
}

var G__34892 = args34888.length;
switch (G__34892) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34888.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq34889){
var G__34890 = cljs.core.first.call(null,seq34889);
var seq34889__$1 = cljs.core.next.call(null,seq34889);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__34890,seq34889__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(){
var args34893 = [];
var len__19923__auto___35417 = arguments.length;
var i__19924__auto___35418 = (0);
while(true){
if((i__19924__auto___35418 < len__19923__auto___35417)){
args34893.push((arguments[i__19924__auto___35418]));

var G__35419 = (i__19924__auto___35418 + (1));
i__19924__auto___35418 = G__35419;
continue;
} else {
}
break;
}

var G__34897 = args34893.length;
switch (G__34897) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34893.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq34894){
var G__34895 = cljs.core.first.call(null,seq34894);
var seq34894__$1 = cljs.core.next.call(null,seq34894);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__34895,seq34894__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(){
var args34898 = [];
var len__19923__auto___35421 = arguments.length;
var i__19924__auto___35422 = (0);
while(true){
if((i__19924__auto___35422 < len__19923__auto___35421)){
args34898.push((arguments[i__19924__auto___35422]));

var G__35423 = (i__19924__auto___35422 + (1));
i__19924__auto___35422 = G__35423;
continue;
} else {
}
break;
}

var G__34902 = args34898.length;
switch (G__34902) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34898.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq34899){
var G__34900 = cljs.core.first.call(null,seq34899);
var seq34899__$1 = cljs.core.next.call(null,seq34899);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__34900,seq34899__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(){
var args34903 = [];
var len__19923__auto___35425 = arguments.length;
var i__19924__auto___35426 = (0);
while(true){
if((i__19924__auto___35426 < len__19923__auto___35425)){
args34903.push((arguments[i__19924__auto___35426]));

var G__35427 = (i__19924__auto___35426 + (1));
i__19924__auto___35426 = G__35427;
continue;
} else {
}
break;
}

var G__34907 = args34903.length;
switch (G__34907) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34903.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq34904){
var G__34905 = cljs.core.first.call(null,seq34904);
var seq34904__$1 = cljs.core.next.call(null,seq34904);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__34905,seq34904__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(){
var args34908 = [];
var len__19923__auto___35429 = arguments.length;
var i__19924__auto___35430 = (0);
while(true){
if((i__19924__auto___35430 < len__19923__auto___35429)){
args34908.push((arguments[i__19924__auto___35430]));

var G__35431 = (i__19924__auto___35430 + (1));
i__19924__auto___35430 = G__35431;
continue;
} else {
}
break;
}

var G__34912 = args34908.length;
switch (G__34912) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34908.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first.call(null,seq34909);
var seq34909__$1 = cljs.core.next.call(null,seq34909);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__34910,seq34909__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(){
var args34913 = [];
var len__19923__auto___35433 = arguments.length;
var i__19924__auto___35434 = (0);
while(true){
if((i__19924__auto___35434 < len__19923__auto___35433)){
args34913.push((arguments[i__19924__auto___35434]));

var G__35435 = (i__19924__auto___35434 + (1));
i__19924__auto___35434 = G__35435;
continue;
} else {
}
break;
}

var G__34917 = args34913.length;
switch (G__34917) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34913.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq34914){
var G__34915 = cljs.core.first.call(null,seq34914);
var seq34914__$1 = cljs.core.next.call(null,seq34914);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__34915,seq34914__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(){
var args34918 = [];
var len__19923__auto___35437 = arguments.length;
var i__19924__auto___35438 = (0);
while(true){
if((i__19924__auto___35438 < len__19923__auto___35437)){
args34918.push((arguments[i__19924__auto___35438]));

var G__35439 = (i__19924__auto___35438 + (1));
i__19924__auto___35438 = G__35439;
continue;
} else {
}
break;
}

var G__34922 = args34918.length;
switch (G__34922) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34918.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq34919){
var G__34920 = cljs.core.first.call(null,seq34919);
var seq34919__$1 = cljs.core.next.call(null,seq34919);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__34920,seq34919__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(){
var args34923 = [];
var len__19923__auto___35441 = arguments.length;
var i__19924__auto___35442 = (0);
while(true){
if((i__19924__auto___35442 < len__19923__auto___35441)){
args34923.push((arguments[i__19924__auto___35442]));

var G__35443 = (i__19924__auto___35442 + (1));
i__19924__auto___35442 = G__35443;
continue;
} else {
}
break;
}

var G__34927 = args34923.length;
switch (G__34927) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34923.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq34924){
var G__34925 = cljs.core.first.call(null,seq34924);
var seq34924__$1 = cljs.core.next.call(null,seq34924);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__34925,seq34924__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(){
var args34928 = [];
var len__19923__auto___35445 = arguments.length;
var i__19924__auto___35446 = (0);
while(true){
if((i__19924__auto___35446 < len__19923__auto___35445)){
args34928.push((arguments[i__19924__auto___35446]));

var G__35447 = (i__19924__auto___35446 + (1));
i__19924__auto___35446 = G__35447;
continue;
} else {
}
break;
}

var G__34932 = args34928.length;
switch (G__34932) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34928.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq34929){
var G__34930 = cljs.core.first.call(null,seq34929);
var seq34929__$1 = cljs.core.next.call(null,seq34929);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__34930,seq34929__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(){
var args34933 = [];
var len__19923__auto___35449 = arguments.length;
var i__19924__auto___35450 = (0);
while(true){
if((i__19924__auto___35450 < len__19923__auto___35449)){
args34933.push((arguments[i__19924__auto___35450]));

var G__35451 = (i__19924__auto___35450 + (1));
i__19924__auto___35450 = G__35451;
continue;
} else {
}
break;
}

var G__34937 = args34933.length;
switch (G__34937) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34933.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq34934){
var G__34935 = cljs.core.first.call(null,seq34934);
var seq34934__$1 = cljs.core.next.call(null,seq34934);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__34935,seq34934__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(){
var args34938 = [];
var len__19923__auto___35453 = arguments.length;
var i__19924__auto___35454 = (0);
while(true){
if((i__19924__auto___35454 < len__19923__auto___35453)){
args34938.push((arguments[i__19924__auto___35454]));

var G__35455 = (i__19924__auto___35454 + (1));
i__19924__auto___35454 = G__35455;
continue;
} else {
}
break;
}

var G__34942 = args34938.length;
switch (G__34942) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34938.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq34939){
var G__34940 = cljs.core.first.call(null,seq34939);
var seq34939__$1 = cljs.core.next.call(null,seq34939);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__34940,seq34939__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var args34943 = [];
var len__19923__auto___35457 = arguments.length;
var i__19924__auto___35458 = (0);
while(true){
if((i__19924__auto___35458 < len__19923__auto___35457)){
args34943.push((arguments[i__19924__auto___35458]));

var G__35459 = (i__19924__auto___35458 + (1));
i__19924__auto___35458 = G__35459;
continue;
} else {
}
break;
}

var G__34947 = args34943.length;
switch (G__34947) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34943.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq34944){
var G__34945 = cljs.core.first.call(null,seq34944);
var seq34944__$1 = cljs.core.next.call(null,seq34944);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__34945,seq34944__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(){
var args34948 = [];
var len__19923__auto___35461 = arguments.length;
var i__19924__auto___35462 = (0);
while(true){
if((i__19924__auto___35462 < len__19923__auto___35461)){
args34948.push((arguments[i__19924__auto___35462]));

var G__35463 = (i__19924__auto___35462 + (1));
i__19924__auto___35462 = G__35463;
continue;
} else {
}
break;
}

var G__34952 = args34948.length;
switch (G__34952) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34948.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq34949){
var G__34950 = cljs.core.first.call(null,seq34949);
var seq34949__$1 = cljs.core.next.call(null,seq34949);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__34950,seq34949__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var args34953 = [];
var len__19923__auto___35465 = arguments.length;
var i__19924__auto___35466 = (0);
while(true){
if((i__19924__auto___35466 < len__19923__auto___35465)){
args34953.push((arguments[i__19924__auto___35466]));

var G__35467 = (i__19924__auto___35466 + (1));
i__19924__auto___35466 = G__35467;
continue;
} else {
}
break;
}

var G__34957 = args34953.length;
switch (G__34957) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34953.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq34954){
var G__34955 = cljs.core.first.call(null,seq34954);
var seq34954__$1 = cljs.core.next.call(null,seq34954);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__34955,seq34954__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(){
var args34958 = [];
var len__19923__auto___35469 = arguments.length;
var i__19924__auto___35470 = (0);
while(true){
if((i__19924__auto___35470 < len__19923__auto___35469)){
args34958.push((arguments[i__19924__auto___35470]));

var G__35471 = (i__19924__auto___35470 + (1));
i__19924__auto___35470 = G__35471;
continue;
} else {
}
break;
}

var G__34962 = args34958.length;
switch (G__34962) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34958.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq34959){
var G__34960 = cljs.core.first.call(null,seq34959);
var seq34959__$1 = cljs.core.next.call(null,seq34959);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__34960,seq34959__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(){
var args34963 = [];
var len__19923__auto___35473 = arguments.length;
var i__19924__auto___35474 = (0);
while(true){
if((i__19924__auto___35474 < len__19923__auto___35473)){
args34963.push((arguments[i__19924__auto___35474]));

var G__35475 = (i__19924__auto___35474 + (1));
i__19924__auto___35474 = G__35475;
continue;
} else {
}
break;
}

var G__34967 = args34963.length;
switch (G__34967) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34963.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq34964){
var G__34965 = cljs.core.first.call(null,seq34964);
var seq34964__$1 = cljs.core.next.call(null,seq34964);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__34965,seq34964__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(){
var args34968 = [];
var len__19923__auto___35477 = arguments.length;
var i__19924__auto___35478 = (0);
while(true){
if((i__19924__auto___35478 < len__19923__auto___35477)){
args34968.push((arguments[i__19924__auto___35478]));

var G__35479 = (i__19924__auto___35478 + (1));
i__19924__auto___35478 = G__35479;
continue;
} else {
}
break;
}

var G__34972 = args34968.length;
switch (G__34972) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34968.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq34969){
var G__34970 = cljs.core.first.call(null,seq34969);
var seq34969__$1 = cljs.core.next.call(null,seq34969);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__34970,seq34969__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var args34973 = [];
var len__19923__auto___35481 = arguments.length;
var i__19924__auto___35482 = (0);
while(true){
if((i__19924__auto___35482 < len__19923__auto___35481)){
args34973.push((arguments[i__19924__auto___35482]));

var G__35483 = (i__19924__auto___35482 + (1));
i__19924__auto___35482 = G__35483;
continue;
} else {
}
break;
}

var G__34977 = args34973.length;
switch (G__34977) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34973.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq34974){
var G__34975 = cljs.core.first.call(null,seq34974);
var seq34974__$1 = cljs.core.next.call(null,seq34974);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__34975,seq34974__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(){
var args34978 = [];
var len__19923__auto___35485 = arguments.length;
var i__19924__auto___35486 = (0);
while(true){
if((i__19924__auto___35486 < len__19923__auto___35485)){
args34978.push((arguments[i__19924__auto___35486]));

var G__35487 = (i__19924__auto___35486 + (1));
i__19924__auto___35486 = G__35487;
continue;
} else {
}
break;
}

var G__34982 = args34978.length;
switch (G__34982) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34978.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq34979){
var G__34980 = cljs.core.first.call(null,seq34979);
var seq34979__$1 = cljs.core.next.call(null,seq34979);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__34980,seq34979__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(){
var args34983 = [];
var len__19923__auto___35489 = arguments.length;
var i__19924__auto___35490 = (0);
while(true){
if((i__19924__auto___35490 < len__19923__auto___35489)){
args34983.push((arguments[i__19924__auto___35490]));

var G__35491 = (i__19924__auto___35490 + (1));
i__19924__auto___35490 = G__35491;
continue;
} else {
}
break;
}

var G__34987 = args34983.length;
switch (G__34987) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34983.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq34984){
var G__34985 = cljs.core.first.call(null,seq34984);
var seq34984__$1 = cljs.core.next.call(null,seq34984);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__34985,seq34984__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(){
var args34988 = [];
var len__19923__auto___35493 = arguments.length;
var i__19924__auto___35494 = (0);
while(true){
if((i__19924__auto___35494 < len__19923__auto___35493)){
args34988.push((arguments[i__19924__auto___35494]));

var G__35495 = (i__19924__auto___35494 + (1));
i__19924__auto___35494 = G__35495;
continue;
} else {
}
break;
}

var G__34992 = args34988.length;
switch (G__34992) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34988.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq34989){
var G__34990 = cljs.core.first.call(null,seq34989);
var seq34989__$1 = cljs.core.next.call(null,seq34989);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__34990,seq34989__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(){
var args34993 = [];
var len__19923__auto___35497 = arguments.length;
var i__19924__auto___35498 = (0);
while(true){
if((i__19924__auto___35498 < len__19923__auto___35497)){
args34993.push((arguments[i__19924__auto___35498]));

var G__35499 = (i__19924__auto___35498 + (1));
i__19924__auto___35498 = G__35499;
continue;
} else {
}
break;
}

var G__34997 = args34993.length;
switch (G__34997) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34993.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq34994){
var G__34995 = cljs.core.first.call(null,seq34994);
var seq34994__$1 = cljs.core.next.call(null,seq34994);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__34995,seq34994__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var args34998 = [];
var len__19923__auto___35501 = arguments.length;
var i__19924__auto___35502 = (0);
while(true){
if((i__19924__auto___35502 < len__19923__auto___35501)){
args34998.push((arguments[i__19924__auto___35502]));

var G__35503 = (i__19924__auto___35502 + (1));
i__19924__auto___35502 = G__35503;
continue;
} else {
}
break;
}

var G__35002 = args34998.length;
switch (G__35002) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34998.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq34999){
var G__35000 = cljs.core.first.call(null,seq34999);
var seq34999__$1 = cljs.core.next.call(null,seq34999);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__35000,seq34999__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var args35003 = [];
var len__19923__auto___35505 = arguments.length;
var i__19924__auto___35506 = (0);
while(true){
if((i__19924__auto___35506 < len__19923__auto___35505)){
args35003.push((arguments[i__19924__auto___35506]));

var G__35507 = (i__19924__auto___35506 + (1));
i__19924__auto___35506 = G__35507;
continue;
} else {
}
break;
}

var G__35007 = args35003.length;
switch (G__35007) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args35003.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq35004){
var G__35005 = cljs.core.first.call(null,seq35004);
var seq35004__$1 = cljs.core.next.call(null,seq35004);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__35005,seq35004__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var args35008 = [];
var len__19923__auto___35509 = arguments.length;
var i__19924__auto___35510 = (0);
while(true){
if((i__19924__auto___35510 < len__19923__auto___35509)){
args35008.push((arguments[i__19924__auto___35510]));

var G__35511 = (i__19924__auto___35510 + (1));
i__19924__auto___35510 = G__35511;
continue;
} else {
}
break;
}

var G__35012 = args35008.length;
switch (G__35012) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args35008.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq35009){
var G__35010 = cljs.core.first.call(null,seq35009);
var seq35009__$1 = cljs.core.next.call(null,seq35009);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__35010,seq35009__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(){
var args35013 = [];
var len__19923__auto___35513 = arguments.length;
var i__19924__auto___35514 = (0);
while(true){
if((i__19924__auto___35514 < len__19923__auto___35513)){
args35013.push((arguments[i__19924__auto___35514]));

var G__35515 = (i__19924__auto___35514 + (1));
i__19924__auto___35514 = G__35515;
continue;
} else {
}
break;
}

var G__35017 = args35013.length;
switch (G__35017) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args35013.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq35014){
var G__35015 = cljs.core.first.call(null,seq35014);
var seq35014__$1 = cljs.core.next.call(null,seq35014);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__35015,seq35014__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var args35018 = [];
var len__19923__auto___35517 = arguments.length;
var i__19924__auto___35518 = (0);
while(true){
if((i__19924__auto___35518 < len__19923__auto___35517)){
args35018.push((arguments[i__19924__auto___35518]));

var G__35519 = (i__19924__auto___35518 + (1));
i__19924__auto___35518 = G__35519;
continue;
} else {
}
break;
}

var G__35022 = args35018.length;
switch (G__35022) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args35018.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq35019){
var G__35020 = cljs.core.first.call(null,seq35019);
var seq35019__$1 = cljs.core.next.call(null,seq35019);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__35020,seq35019__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(){
var args35023 = [];
var len__19923__auto___35521 = arguments.length;
var i__19924__auto___35522 = (0);
while(true){
if((i__19924__auto___35522 < len__19923__auto___35521)){
args35023.push((arguments[i__19924__auto___35522]));

var G__35523 = (i__19924__auto___35522 + (1));
i__19924__auto___35522 = G__35523;
continue;
} else {
}
break;
}

var G__35027 = args35023.length;
switch (G__35027) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args35023.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq35024){
var G__35025 = cljs.core.first.call(null,seq35024);
var seq35024__$1 = cljs.core.next.call(null,seq35024);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__35025,seq35024__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var args35028 = [];
var len__19923__auto___35525 = arguments.length;
var i__19924__auto___35526 = (0);
while(true){
if((i__19924__auto___35526 < len__19923__auto___35525)){
args35028.push((arguments[i__19924__auto___35526]));

var G__35527 = (i__19924__auto___35526 + (1));
i__19924__auto___35526 = G__35527;
continue;
} else {
}
break;
}

var G__35032 = args35028.length;
switch (G__35032) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args35028.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq35029){
var G__35030 = cljs.core.first.call(null,seq35029);
var seq35029__$1 = cljs.core.next.call(null,seq35029);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__35030,seq35029__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(){
var args34568 = [];
var len__19923__auto___35529 = arguments.length;
var i__19924__auto___35530 = (0);
while(true){
if((i__19924__auto___35530 < len__19923__auto___35529)){
args34568.push((arguments[i__19924__auto___35530]));

var G__35531 = (i__19924__auto___35530 + (1));
i__19924__auto___35530 = G__35531;
continue;
} else {
}
break;
}

var G__34572 = args34568.length;
switch (G__34572) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19942__auto__ = (new cljs.core.IndexedSeq(args34568.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19942__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23164__auto__,children__23165__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__23164__auto__,children__23165__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq34569){
var G__34570 = cljs.core.first.call(null,seq34569);
var seq34569__$1 = cljs.core.next.call(null,seq34569);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__34570,seq34569__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1445816812847