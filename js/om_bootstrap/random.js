// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
var ufv___37324 = schema.utils.use_fn_validation;
var output_schema37309_37325 = om_bootstrap.types.Component;
var input_schema37310_37326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker37311_37327 = schema.core.checker.call(null,input_schema37310_37326);
var output_checker37312_37328 = schema.core.checker.call(null,output_schema37309_37325);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___37324,output_schema37309_37325,input_schema37310_37326,input_checker37311_37327,output_checker37312_37328){
return (function om_bootstrap$random$jumbotron(){
var args__19930__auto__ = [];
var len__19923__auto___37335 = arguments.length;
var i__19924__auto___37336 = (0);
while(true){
if((i__19924__auto___37336 < len__19923__auto___37335)){
args__19930__auto__.push((arguments[i__19924__auto___37336]));

var G__37337 = (i__19924__auto___37336 + (1));
i__19924__auto___37336 = G__37337;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37324,output_schema37309_37325,input_schema37310_37326,input_checker37311_37327,output_checker37312_37328))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37324,output_schema37309_37325,input_schema37310_37326,input_checker37311_37327,output_checker37312_37328){
return (function (G__37313,rest37314){
var validate__20206__auto__ = ufv___37324.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37338 = cljs.core.list_STAR_.call(null,G__37313,rest37314);
var temp__4425__auto___37339 = input_checker37311_37327.call(null,args__20207__auto___37338);
if(cljs.core.truth_(temp__4425__auto___37339)){
var error__20208__auto___37340 = temp__4425__auto___37339;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__20208__auto___37340)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37310_37326,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37338,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37340], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37313;
var children = rest37314;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37351 = output_checker37312_37328.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37351)){
var error__20208__auto___37353 = temp__4425__auto___37351;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__20208__auto___37353)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37309_37325,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37353], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37324,output_schema37309_37325,input_schema37310_37326,input_checker37311_37327,output_checker37312_37328))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___37324,output_schema37309_37325,input_schema37310_37326,input_checker37311_37327,output_checker37312_37328){
return (function (seq37316){
var G__37317 = cljs.core.first.call(null,seq37316);
var seq37316__$1 = cljs.core.next.call(null,seq37316);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__37317,seq37316__$1);
});})(ufv___37324,output_schema37309_37325,input_schema37310_37326,input_checker37311_37327,output_checker37312_37328))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema37309_37325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37310_37326], null)));
var ufv___37376 = schema.utils.use_fn_validation;
var output_schema37361_37377 = om_bootstrap.types.Component;
var input_schema37362_37378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker37363_37379 = schema.core.checker.call(null,input_schema37362_37378);
var output_checker37364_37380 = schema.core.checker.call(null,output_schema37361_37377);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___37376,output_schema37361_37377,input_schema37362_37378,input_checker37363_37379,output_checker37364_37380){
return (function om_bootstrap$random$label(){
var args__19930__auto__ = [];
var len__19923__auto___37387 = arguments.length;
var i__19924__auto___37388 = (0);
while(true){
if((i__19924__auto___37388 < len__19923__auto___37387)){
args__19930__auto__.push((arguments[i__19924__auto___37388]));

var G__37389 = (i__19924__auto___37388 + (1));
i__19924__auto___37388 = G__37389;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37376,output_schema37361_37377,input_schema37362_37378,input_checker37363_37379,output_checker37364_37380))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37376,output_schema37361_37377,input_schema37362_37378,input_checker37363_37379,output_checker37364_37380){
return (function (G__37365,rest37366){
var validate__20206__auto__ = ufv___37376.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37395 = cljs.core.list_STAR_.call(null,G__37365,rest37366);
var temp__4425__auto___37397 = input_checker37363_37379.call(null,args__20207__auto___37395);
if(cljs.core.truth_(temp__4425__auto___37397)){
var error__20208__auto___37398 = temp__4425__auto___37397;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__20208__auto___37398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37362_37378,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37395,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37398], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37365;
var children = rest37366;
while(true){
var vec__37374 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__37374,(0),null);
var props = cljs.core.nth.call(null,vec__37374,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37405 = output_checker37364_37380.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37405)){
var error__20208__auto___37406 = temp__4425__auto___37405;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__20208__auto___37406)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37361_37377,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37406], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37376,output_schema37361_37377,input_schema37362_37378,input_checker37363_37379,output_checker37364_37380))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___37376,output_schema37361_37377,input_schema37362_37378,input_checker37363_37379,output_checker37364_37380){
return (function (seq37367){
var G__37368 = cljs.core.first.call(null,seq37367);
var seq37367__$1 = cljs.core.next.call(null,seq37367);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__37368,seq37367__$1);
});})(ufv___37376,output_schema37361_37377,input_schema37362_37378,input_checker37363_37379,output_checker37364_37380))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema37361_37377,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37362_37378], null)));
var ufv___37434 = schema.utils.use_fn_validation;
var output_schema37413_37435 = om_bootstrap.types.Component;
var input_schema37414_37436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker37415_37437 = schema.core.checker.call(null,input_schema37414_37436);
var output_checker37416_37438 = schema.core.checker.call(null,output_schema37413_37435);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___37434,output_schema37413_37435,input_schema37414_37436,input_checker37415_37437,output_checker37416_37438){
return (function om_bootstrap$random$well(){
var args__19930__auto__ = [];
var len__19923__auto___37445 = arguments.length;
var i__19924__auto___37446 = (0);
while(true){
if((i__19924__auto___37446 < len__19923__auto___37445)){
args__19930__auto__.push((arguments[i__19924__auto___37446]));

var G__37447 = (i__19924__auto___37446 + (1));
i__19924__auto___37446 = G__37447;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37434,output_schema37413_37435,input_schema37414_37436,input_checker37415_37437,output_checker37416_37438))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37434,output_schema37413_37435,input_schema37414_37436,input_checker37415_37437,output_checker37416_37438){
return (function (G__37417,rest37418){
var validate__20206__auto__ = ufv___37434.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37448 = cljs.core.list_STAR_.call(null,G__37417,rest37418);
var temp__4425__auto___37449 = input_checker37415_37437.call(null,args__20207__auto___37448);
if(cljs.core.truth_(temp__4425__auto___37449)){
var error__20208__auto___37450 = temp__4425__auto___37449;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__20208__auto___37450)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37414_37436,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37448,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37450], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37417;
var children = rest37418;
while(true){
var vec__37427 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__37427,(0),null);
var props = cljs.core.nth.call(null,vec__37427,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37457 = output_checker37416_37438.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37457)){
var error__20208__auto___37458 = temp__4425__auto___37457;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__20208__auto___37458)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37413_37435,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37458], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37434,output_schema37413_37435,input_schema37414_37436,input_checker37415_37437,output_checker37416_37438))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___37434,output_schema37413_37435,input_schema37414_37436,input_checker37415_37437,output_checker37416_37438){
return (function (seq37423){
var G__37424 = cljs.core.first.call(null,seq37423);
var seq37423__$1 = cljs.core.next.call(null,seq37423);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__37424,seq37423__$1);
});})(ufv___37434,output_schema37413_37435,input_schema37414_37436,input_checker37415_37437,output_checker37416_37438))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema37413_37435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37414_37436], null)));
var ufv___37475 = schema.utils.use_fn_validation;
var output_schema37465_37476 = om_bootstrap.types.Component;
var input_schema37466_37477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker37467_37478 = schema.core.checker.call(null,input_schema37466_37477);
var output_checker37468_37479 = schema.core.checker.call(null,output_schema37465_37476);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A simple shell for an h1 to appropriately space out and segment
 * sections of content on a page. It can utilize the h1’s default small
 * element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___37475,output_schema37465_37476,input_schema37466_37477,input_checker37467_37478,output_checker37468_37479){
return (function om_bootstrap$random$page_header(){
var args__19930__auto__ = [];
var len__19923__auto___37480 = arguments.length;
var i__19924__auto___37481 = (0);
while(true){
if((i__19924__auto___37481 < len__19923__auto___37480)){
args__19930__auto__.push((arguments[i__19924__auto___37481]));

var G__37482 = (i__19924__auto___37481 + (1));
i__19924__auto___37481 = G__37482;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37475,output_schema37465_37476,input_schema37466_37477,input_checker37467_37478,output_checker37468_37479))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37475,output_schema37465_37476,input_schema37466_37477,input_checker37467_37478,output_checker37468_37479){
return (function (G__37469,rest37470){
var validate__20206__auto__ = ufv___37475.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37489 = cljs.core.list_STAR_.call(null,G__37469,rest37470);
var temp__4425__auto___37494 = input_checker37467_37478.call(null,args__20207__auto___37489);
if(cljs.core.truth_(temp__4425__auto___37494)){
var error__20208__auto___37496 = temp__4425__auto___37494;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__20208__auto___37496)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37466_37477,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37489,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37496], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37469;
var children = rest37470;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37498 = output_checker37468_37479.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37498)){
var error__20208__auto___37499 = temp__4425__auto___37498;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__20208__auto___37499)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37465_37476,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37499], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37475,output_schema37465_37476,input_schema37466_37477,input_checker37467_37478,output_checker37468_37479))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___37475,output_schema37465_37476,input_schema37466_37477,input_checker37467_37478,output_checker37468_37479){
return (function (seq37472){
var G__37473 = cljs.core.first.call(null,seq37472);
var seq37472__$1 = cljs.core.next.call(null,seq37472);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__37473,seq37472__$1);
});})(ufv___37475,output_schema37465_37476,input_schema37466_37477,input_checker37467_37478,output_checker37468_37479))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema37465_37476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37466_37477], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___37514 = schema.utils.use_fn_validation;
var output_schema37502_37515 = om_bootstrap.types.Component;
var input_schema37503_37516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker37504_37517 = schema.core.checker.call(null,input_schema37503_37516);
var output_checker37505_37518 = schema.core.checker.call(null,output_schema37502_37515);
/**
 * Inputs: [opts :- ToolTip & children]
 * Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___37514,output_schema37502_37515,input_schema37503_37516,input_checker37504_37517,output_checker37505_37518){
return (function om_bootstrap$random$tooltip(){
var args__19930__auto__ = [];
var len__19923__auto___37519 = arguments.length;
var i__19924__auto___37520 = (0);
while(true){
if((i__19924__auto___37520 < len__19923__auto___37519)){
args__19930__auto__.push((arguments[i__19924__auto___37520]));

var G__37521 = (i__19924__auto___37520 + (1));
i__19924__auto___37520 = G__37521;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37514,output_schema37502_37515,input_schema37503_37516,input_checker37504_37517,output_checker37505_37518))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37514,output_schema37502_37515,input_schema37503_37516,input_checker37504_37517,output_checker37505_37518){
return (function (G__37506,rest37507){
var validate__20206__auto__ = ufv___37514.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37522 = cljs.core.list_STAR_.call(null,G__37506,rest37507);
var temp__4425__auto___37523 = input_checker37504_37517.call(null,args__20207__auto___37522);
if(cljs.core.truth_(temp__4425__auto___37523)){
var error__20208__auto___37524 = temp__4425__auto___37523;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37503_37516,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37522,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37524], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37506;
var children = rest37507;
while(true){
var vec__37512 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__37512,(0),null);
var _ = cljs.core.nth.call(null,vec__37512,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__18884__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "tooltip-arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37530 = output_checker37505_37518.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37530)){
var error__20208__auto___37531 = temp__4425__auto___37530;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37502_37515,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37531], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37514,output_schema37502_37515,input_schema37503_37516,input_checker37504_37517,output_checker37505_37518))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___37514,output_schema37502_37515,input_schema37503_37516,input_checker37504_37517,output_checker37505_37518){
return (function (seq37508){
var G__37509 = cljs.core.first.call(null,seq37508);
var seq37508__$1 = cljs.core.next.call(null,seq37508);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__37509,seq37508__$1);
});})(ufv___37514,output_schema37502_37515,input_schema37503_37516,input_checker37504_37517,output_checker37505_37518))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema37502_37515,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37503_37516], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__29672__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__29672__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__29672__auto__;
})();

var component_fnk__29701__auto___37566 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema37542 = schema.core.Any;
var input_schema37543 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map37540","map37540",-942607553,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker37544 = schema.core.checker.call(null,input_schema37543);
var output_checker37545 = schema.core.checker.call(null,output_schema37542);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function om_bootstrap$random$constructor37538(G__37546){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37546], null);
var temp__4425__auto___37570 = input_checker37544.call(null,args__20207__auto___37569);
if(cljs.core.truth_(temp__4425__auto___37570)){
var error__20208__auto___37571 = temp__4425__auto___37570;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor37538","constructor37538",-824894983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37571)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37543,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37569,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37571], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map37540 = G__37546;
while(true){
if(cljs.core.map_QMARK_.call(null,map37540)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map37540)));
}

var map37541 = plumbing.fnk.schema.safe_get.call(null,map37540,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map37541,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map37541,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map37541,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map37540,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t37551 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.random.t37551 = (function (owner,props,children,input_schema37543,G__37546,validate__20206__auto__,map37541,output_schema37542,output_checker37545,constructor37538,input_checker37544,ufv__,bs,map37540,meta37552){
this.owner = owner;
this.props = props;
this.children = children;
this.input_schema37543 = input_schema37543;
this.G__37546 = G__37546;
this.validate__20206__auto__ = validate__20206__auto__;
this.map37541 = map37541;
this.output_schema37542 = output_schema37542;
this.output_checker37545 = output_checker37545;
this.constructor37538 = constructor37538;
this.input_checker37544 = input_checker37544;
this.ufv__ = ufv__;
this.bs = bs;
this.map37540 = map37540;
this.meta37552 = meta37552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t37551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function (_37553,meta37552__$1){
var self__ = this;
var _37553__$1 = this;
return (new om_bootstrap.random.t37551(self__.owner,self__.props,self__.children,self__.input_schema37543,self__.G__37546,self__.validate__20206__auto__,self__.map37541,self__.output_schema37542,self__.output_checker37545,self__.constructor37538,self__.input_checker37544,self__.ufv__,self__.bs,self__.map37540,meta37552__$1));
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

om_bootstrap.random.t37551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function (_37553){
var self__ = this;
var _37553__$1 = this;
return self__.meta37552;
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

om_bootstrap.random.t37551.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t37551.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

om_bootstrap.random.t37551.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t37551.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__18872__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__18872__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__18872__auto__;
}
})())){
var G__37554 = self__.owner;
G__37554.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__37554;
} else {
return null;
}
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

om_bootstrap.random.t37551.prototype.om$core$IRender$ = true;

om_bootstrap.random.t37551.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function (_){
var self__ = this;
var ___$1 = this;
var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);
var dismiss_button = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(temp__4425__auto__)){
var od = temp__4425__auto__;
return React.DOM.button({"type": "button", "className": "close", "onClick": om_tools.dom.format_opts.call(null,od), "aria-hidden": true},"&times;");
} else {
return null;
}
})();
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

om_bootstrap.random.t37551.getBasis = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema37543","input-schema37543",-1485939223,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__37546","G__37546",696907465,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map37541","map37541",-1933570927,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema37542","output-schema37542",-1202006702,null),new cljs.core.Symbol(null,"output-checker37545","output-checker37545",2103339413,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor37538","constructor37538",-824894983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker37544","input-checker37544",-1583955813,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map37540","map37540",-942607553,null),new cljs.core.Symbol(null,"meta37552","meta37552",1395816400,null)], null);
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

om_bootstrap.random.t37551.cljs$lang$type = true;

om_bootstrap.random.t37551.cljs$lang$ctorStr = "om-bootstrap.random/t37551";

om_bootstrap.random.t37551.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.random/t37551");
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

om_bootstrap.random.__GT_t37551 = ((function (owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545){
return (function om_bootstrap$random$constructor37538_$___GT_t37551(owner__$1,props__$1,children__$1,input_schema37543__$1,G__37546__$1,validate__20206__auto____$1,map37541__$1,output_schema37542__$1,output_checker37545__$1,constructor37538__$1,input_checker37544__$1,ufv____$1,bs__$1,map37540__$1,meta37552){
return (new om_bootstrap.random.t37551(owner__$1,props__$1,children__$1,input_schema37543__$1,G__37546__$1,validate__20206__auto____$1,map37541__$1,output_schema37542__$1,output_checker37545__$1,constructor37538__$1,input_checker37544__$1,ufv____$1,bs__$1,map37540__$1,meta37552));
});})(owner,children,props,bs,map37541,validate__20206__auto__,ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
;

}

return (new om_bootstrap.random.t37551(owner,props,children,input_schema37543,G__37546,validate__20206__auto__,map37541,output_schema37542,output_checker37545,om_bootstrap$random$constructor37538,input_checker37544,ufv__,bs,map37540,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37621 = output_checker37545.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37621)){
var error__20208__auto___37623 = temp__4425__auto___37621;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor37538","constructor37538",-824894983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37623)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37542,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37623], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema37542,input_schema37543,input_checker37544,output_checker37545))
,schema.core.make_fn_schema.call(null,output_schema37542,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37543], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__29701__auto___37566){
return (function om_bootstrap$random$alert_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___37625 = arguments.length;
var i__19924__auto___37626 = (0);
while(true){
if((i__19924__auto___37626 < len__19923__auto___37625)){
args__19930__auto__.push((arguments[i__19924__auto___37626]));

var G__37627 = (i__19924__auto___37626 + (1));
i__19924__auto___37626 = G__37627;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___37566))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___37566){
return (function (data__29702__auto__,owner37537,p__37561){
var vec__37562 = p__37561;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__37562,(0),null);
return component_fnk__29701__auto___37566.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37537,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___37566))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___37566){
return (function (seq37558){
var G__37559 = cljs.core.first.call(null,seq37558);
var seq37558__$1 = cljs.core.next.call(null,seq37558);
var G__37560 = cljs.core.first.call(null,seq37558__$1);
var seq37558__$2 = cljs.core.next.call(null,seq37558__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__37559,G__37560,seq37558__$2);
});})(component_fnk__29701__auto___37566))
;

om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(){
var args37563 = [];
var len__19923__auto___37628 = arguments.length;
var i__19924__auto___37629 = (0);
while(true){
if((i__19924__auto___37629 < len__19923__auto___37628)){
args37563.push((arguments[i__19924__auto___37629]));

var G__37630 = (i__19924__auto___37629 + (1));
i__19924__auto___37629 = G__37630;
continue;
} else {
}
break;
}

var G__37565 = args37563.length;
switch (G__37565) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37563.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__29670__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m37539){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__29670__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m37539));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___37650 = schema.utils.use_fn_validation;
var output_schema37632_37651 = om_bootstrap.types.Component;
var input_schema37633_37652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker37634_37653 = schema.core.checker.call(null,input_schema37633_37652);
var output_checker37635_37654 = schema.core.checker.call(null,output_schema37632_37651);
/**
 * Inputs: [opts :- Alert & children]
 * Returns: t/Component
 * 
 * Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___37650,output_schema37632_37651,input_schema37633_37652,input_checker37634_37653,output_checker37635_37654){
return (function om_bootstrap$random$alert(){
var args__19930__auto__ = [];
var len__19923__auto___37655 = arguments.length;
var i__19924__auto___37664 = (0);
while(true){
if((i__19924__auto___37664 < len__19923__auto___37655)){
args__19930__auto__.push((arguments[i__19924__auto___37664]));

var G__37666 = (i__19924__auto___37664 + (1));
i__19924__auto___37664 = G__37666;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37650,output_schema37632_37651,input_schema37633_37652,input_checker37634_37653,output_checker37635_37654))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37650,output_schema37632_37651,input_schema37633_37652,input_checker37634_37653,output_checker37635_37654){
return (function (G__37637,rest37638){
var validate__20206__auto__ = ufv___37650.get_cell();
if(validate__20206__auto__){
var args__20207__auto___37668 = cljs.core.list_STAR_.call(null,G__37637,rest37638);
var temp__4425__auto___37669 = input_checker37634_37653.call(null,args__20207__auto___37668);
if(temp__4425__auto___37669){
var error__20208__auto___37670 = temp__4425__auto___37669;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__20208__auto___37670)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37633_37652,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37668,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37670], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37637;
var children = rest37638;
while(true){
var vec__37649 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__37649,(0),null);
var props = cljs.core.nth.call(null,vec__37649,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(validate__20206__auto__){
var temp__4425__auto___37680 = output_checker37635_37654.call(null,o__20209__auto__);
if(temp__4425__auto___37680){
var error__20208__auto___37681 = temp__4425__auto___37680;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__20208__auto___37681)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37632_37651,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37681], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37650,output_schema37632_37651,input_schema37633_37652,input_checker37634_37653,output_checker37635_37654))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___37650,output_schema37632_37651,input_schema37633_37652,input_checker37634_37653,output_checker37635_37654){
return (function (seq37645){
var G__37646 = cljs.core.first.call(null,seq37645);
var seq37645__$1 = cljs.core.next.call(null,seq37645);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__37646,seq37645__$1);
});})(ufv___37650,output_schema37632_37651,input_schema37633_37652,input_checker37634_37653,output_checker37635_37654))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema37632_37651,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37633_37652], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___37694 = schema.utils.use_fn_validation;
var output_schema37685_37695 = om_bootstrap.types.Component;
var input_schema37686_37696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker37687_37697 = schema.core.checker.call(null,input_schema37686_37696);
var output_checker37688_37698 = schema.core.checker.call(null,output_schema37685_37695);
/**
 * Inputs: [opts :- Popover & children]
 * Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___37694,output_schema37685_37695,input_schema37686_37696,input_checker37687_37697,output_checker37688_37698){
return (function om_bootstrap$random$popover(){
var args__19930__auto__ = [];
var len__19923__auto___37699 = arguments.length;
var i__19924__auto___37700 = (0);
while(true){
if((i__19924__auto___37700 < len__19923__auto___37699)){
args__19930__auto__.push((arguments[i__19924__auto___37700]));

var G__37701 = (i__19924__auto___37700 + (1));
i__19924__auto___37700 = G__37701;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37694,output_schema37685_37695,input_schema37686_37696,input_checker37687_37697,output_checker37688_37698))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37694,output_schema37685_37695,input_schema37686_37696,input_checker37687_37697,output_checker37688_37698){
return (function (G__37689,rest37690){
var validate__20206__auto__ = ufv___37694.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37702 = cljs.core.list_STAR_.call(null,G__37689,rest37690);
var temp__4425__auto___37703 = input_checker37687_37697.call(null,args__20207__auto___37702);
if(cljs.core.truth_(temp__4425__auto___37703)){
var error__20208__auto___37704 = temp__4425__auto___37703;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37704)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37686_37696,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37702,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37704], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37689;
var children = rest37690;
while(true){
var vec__37693 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__37693,(0),null);
var _ = cljs.core.nth.call(null,vec__37693,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__18884__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var title = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.h3,{"className": "popover-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else {
return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,{"className": "popover-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37708 = output_checker37688_37698.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37708)){
var error__20208__auto___37709 = temp__4425__auto___37708;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37709)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37685_37695,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37709], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37694,output_schema37685_37695,input_schema37686_37696,input_checker37687_37697,output_checker37688_37698))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___37694,output_schema37685_37695,input_schema37686_37696,input_checker37687_37697,output_checker37688_37698){
return (function (seq37691){
var G__37692 = cljs.core.first.call(null,seq37691);
var seq37691__$1 = cljs.core.next.call(null,seq37691);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__37692,seq37691__$1);
});})(ufv___37694,output_schema37685_37695,input_schema37686_37696,input_checker37687_37697,output_checker37688_37698))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema37685_37695,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37686_37696], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___37729 = schema.utils.use_fn_validation;
var output_schema37720_37730 = om_bootstrap.types.Component;
var input_schema37721_37731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker37722_37732 = schema.core.checker.call(null,input_schema37721_37731);
var output_checker37723_37733 = schema.core.checker.call(null,output_schema37720_37730);
/**
 * Inputs: [opts :- Badge & children]
 * Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___37729,output_schema37720_37730,input_schema37721_37731,input_checker37722_37732,output_checker37723_37733){
return (function om_bootstrap$random$badge(){
var args__19930__auto__ = [];
var len__19923__auto___37734 = arguments.length;
var i__19924__auto___37735 = (0);
while(true){
if((i__19924__auto___37735 < len__19923__auto___37734)){
args__19930__auto__.push((arguments[i__19924__auto___37735]));

var G__37736 = (i__19924__auto___37735 + (1));
i__19924__auto___37735 = G__37736;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37729,output_schema37720_37730,input_schema37721_37731,input_checker37722_37732,output_checker37723_37733))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37729,output_schema37720_37730,input_schema37721_37731,input_checker37722_37732,output_checker37723_37733){
return (function (G__37724,rest37725){
var validate__20206__auto__ = ufv___37729.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37737 = cljs.core.list_STAR_.call(null,G__37724,rest37725);
var temp__4425__auto___37738 = input_checker37722_37732.call(null,args__20207__auto___37737);
if(cljs.core.truth_(temp__4425__auto___37738)){
var error__20208__auto___37744 = temp__4425__auto___37738;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37744)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37721_37731,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37737,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37744], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37724;
var children = rest37725;
while(true){
var vec__37728 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__37728,(0),null);
var props = cljs.core.nth.call(null,vec__37728,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37753 = output_checker37723_37733.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37753)){
var error__20208__auto___37755 = temp__4425__auto___37753;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37755)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37720_37730,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37755], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37729,output_schema37720_37730,input_schema37721_37731,input_checker37722_37732,output_checker37723_37733))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___37729,output_schema37720_37730,input_schema37721_37731,input_checker37722_37732,output_checker37723_37733){
return (function (seq37726){
var G__37727 = cljs.core.first.call(null,seq37726);
var seq37726__$1 = cljs.core.next.call(null,seq37726);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__37727,seq37726__$1);
});})(ufv___37729,output_schema37720_37730,input_schema37721_37731,input_checker37722_37732,output_checker37723_37733))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema37720_37730,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37721_37731], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___37769 = schema.utils.use_fn_validation;
var output_schema37757_37770 = om_bootstrap.types.Component;
var input_schema37758_37771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker37759_37772 = schema.core.checker.call(null,input_schema37758_37771);
var output_checker37760_37773 = schema.core.checker.call(null,output_schema37757_37770);
/**
 * Inputs: [opts :- Glyphicon & children]
 * Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___37769,output_schema37757_37770,input_schema37758_37771,input_checker37759_37772,output_checker37760_37773){
return (function om_bootstrap$random$glyphicon(){
var args__19930__auto__ = [];
var len__19923__auto___37777 = arguments.length;
var i__19924__auto___37778 = (0);
while(true){
if((i__19924__auto___37778 < len__19923__auto___37777)){
args__19930__auto__.push((arguments[i__19924__auto___37778]));

var G__37779 = (i__19924__auto___37778 + (1));
i__19924__auto___37778 = G__37779;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37769,output_schema37757_37770,input_schema37758_37771,input_checker37759_37772,output_checker37760_37773))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37769,output_schema37757_37770,input_schema37758_37771,input_checker37759_37772,output_checker37760_37773){
return (function (G__37761,rest37762){
var validate__20206__auto__ = ufv___37769.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37780 = cljs.core.list_STAR_.call(null,G__37761,rest37762);
var temp__4425__auto___37781 = input_checker37759_37772.call(null,args__20207__auto___37780);
if(cljs.core.truth_(temp__4425__auto___37781)){
var error__20208__auto___37782 = temp__4425__auto___37781;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37758_37771,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37780,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37782], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37761;
var children = rest37762;
while(true){
var vec__37768 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__37768,(0),null);
var props = cljs.core.nth.call(null,vec__37768,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37786 = output_checker37760_37773.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37786)){
var error__20208__auto___37787 = temp__4425__auto___37786;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37787)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37757_37770,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37787], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37769,output_schema37757_37770,input_schema37758_37771,input_checker37759_37772,output_checker37760_37773))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___37769,output_schema37757_37770,input_schema37758_37771,input_checker37759_37772,output_checker37760_37773){
return (function (seq37763){
var G__37764 = cljs.core.first.call(null,seq37763);
var seq37763__$1 = cljs.core.next.call(null,seq37763);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__37764,seq37763__$1);
});})(ufv___37769,output_schema37757_37770,input_schema37758_37771,input_checker37759_37772,output_checker37760_37773))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema37757_37770,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37758_37771], null)));

//# sourceMappingURL=random.js.map?rel=1445816818697