// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___33447 = schema.utils.use_fn_validation;
var output_schema33442_33448 = schema.core.Any;
var input_schema33443_33449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker33444_33450 = schema.core.checker.call(null,input_schema33443_33449);
var output_checker33445_33451 = schema.core.checker.call(null,output_schema33442_33448);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 * Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___33447,output_schema33442_33448,input_schema33443_33449,input_checker33444_33450,output_checker33445_33451){
return (function om_bootstrap$types$schema_keys(G__33446){
var validate__20206__auto__ = ufv___33447.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33446], null);
var temp__4425__auto___33453 = input_checker33444_33450.call(null,args__20207__auto___33452);
if(cljs.core.truth_(temp__4425__auto___33453)){
var error__20208__auto___33454 = temp__4425__auto___33453;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__20208__auto___33454)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33443_33449,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33452,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33454], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var schema__$1 = G__33446;
while(true){
return cljs.core.map.call(null,((function (validate__20206__auto__,ufv___33447,output_schema33442_33448,input_schema33443_33449,input_checker33444_33450,output_checker33445_33451){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__20206__auto__,ufv___33447,output_schema33442_33448,input_schema33443_33449,input_checker33444_33450,output_checker33445_33451))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33455 = output_checker33445_33451.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33455)){
var error__20208__auto___33456 = temp__4425__auto___33455;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__20208__auto___33456)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33442_33448,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33456], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33447,output_schema33442_33448,input_schema33443_33449,input_checker33444_33450,output_checker33445_33451))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema33442_33448,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33443_33449], null)));
var ufv___33462 = schema.utils.use_fn_validation;
var output_schema33457_33463 = schema.core.Any;
var input_schema33458_33464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33459_33465 = schema.core.checker.call(null,input_schema33458_33464);
var output_checker33460_33466 = schema.core.checker.call(null,output_schema33457_33463);
/**
 * Inputs: [schema]
 * 
 * Returns a map schema that accepts the supplied map schema, plus any
 * other optional keys that show up in the map. Such a schema can only
 * enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___33462,output_schema33457_33463,input_schema33458_33464,input_checker33459_33465,output_checker33460_33466){
return (function om_bootstrap$types$at_least(G__33461){
var validate__20206__auto__ = ufv___33462.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33467 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33461], null);
var temp__4425__auto___33468 = input_checker33459_33465.call(null,args__20207__auto___33467);
if(cljs.core.truth_(temp__4425__auto___33468)){
var error__20208__auto___33469 = temp__4425__auto___33468;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__20208__auto___33469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33458_33464,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33467,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33469], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var schema__$1 = G__33461;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33470 = output_checker33460_33466.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33470)){
var error__20208__auto___33471 = temp__4425__auto___33470;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__20208__auto___33471)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33457_33463,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33471], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33462,output_schema33457_33463,input_schema33458_33464,input_checker33459_33465,output_checker33460_33466))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema33457_33463,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33458_33464], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
 * Map of keyword to the proper bootstrap class name.
 */
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
 * Map of style keywords -> styles.
 */
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
 * Applies all default bootstrap options to the supplied schema. If
 * the incoming schema has one of the the keys from BootstrapClass,
 * that wins (even if it's required).
 */
om_bootstrap.types.bootstrap = (function om_bootstrap$types$bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___33487 = schema.utils.use_fn_validation;
var output_schema33472_33488 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema33473_33489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema33478_33490 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33474_33491 = schema.core.checker.call(null,input_schema33473_33489);
var output_checker33475_33492 = schema.core.checker.call(null,output_schema33472_33488);
var input_checker33479_33493 = schema.core.checker.call(null,input_schema33478_33490);
var output_checker33480_33494 = schema.core.checker.call(null,output_schema33472_33488);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 * Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 * Returns two maps; the first is all of the schema options, the
 * second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___33487,output_schema33472_33488,input_schema33473_33489,input_schema33478_33490,input_checker33474_33491,output_checker33475_33492,input_checker33479_33493,output_checker33480_33494){
return (function om_bootstrap$types$separate(){
var args33484 = [];
var len__19923__auto___33495 = arguments.length;
var i__19924__auto___33496 = (0);
while(true){
if((i__19924__auto___33496 < len__19923__auto___33495)){
args33484.push((arguments[i__19924__auto___33496]));

var G__33497 = (i__19924__auto___33496 + (1));
i__19924__auto___33496 = G__33497;
continue;
} else {
}
break;
}

var G__33486 = args33484.length;
switch (G__33486) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33484.length)].join('')));

}
});})(ufv___33487,output_schema33472_33488,input_schema33473_33489,input_schema33478_33490,input_checker33474_33491,output_checker33475_33492,input_checker33479_33493,output_checker33480_33494))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___33487,output_schema33472_33488,input_schema33473_33489,input_schema33478_33490,input_checker33474_33491,output_checker33475_33492,input_checker33479_33493,output_checker33480_33494){
return (function (G__33476,G__33477){
var validate__20206__auto__ = ufv___33487.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33476,G__33477], null);
var temp__4425__auto___33500 = input_checker33474_33491.call(null,args__20207__auto___33499);
if(cljs.core.truth_(temp__4425__auto___33500)){
var error__20208__auto___33501 = temp__4425__auto___33500;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20208__auto___33501)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33473_33489,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33499,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33501], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var schema__$1 = G__33476;
var opts = G__33477;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33502 = output_checker33475_33492.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33502)){
var error__20208__auto___33503 = temp__4425__auto___33502;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20208__auto___33503)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33472_33488,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33503], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33487,output_schema33472_33488,input_schema33473_33489,input_schema33478_33490,input_checker33474_33491,output_checker33475_33492,input_checker33479_33493,output_checker33480_33494))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___33487,output_schema33472_33488,input_schema33473_33489,input_schema33478_33490,input_checker33474_33491,output_checker33475_33492,input_checker33479_33493,output_checker33480_33494){
return (function (G__33481,G__33482,G__33483){
var validate__20206__auto__ = ufv___33487.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33504 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33481,G__33482,G__33483], null);
var temp__4425__auto___33505 = input_checker33479_33493.call(null,args__20207__auto___33504);
if(cljs.core.truth_(temp__4425__auto___33505)){
var error__20208__auto___33506 = temp__4425__auto___33505;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20208__auto___33506)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33478_33490,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33504,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33506], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var schema__$1 = G__33481;
var opts = G__33482;
var defaults = G__33483;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33507 = output_checker33480_33494.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33507)){
var error__20208__auto___33508 = temp__4425__auto___33507;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20208__auto___33508)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33472_33488,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33508], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33487,output_schema33472_33488,input_schema33473_33489,input_schema33478_33490,input_checker33474_33491,output_checker33475_33492,input_checker33479_33493,output_checker33480_33494))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema33472_33488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33473_33489,input_schema33478_33490], null)));
var ufv___33526 = schema.utils.use_fn_validation;
var output_schema33509_33527 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema33510_33528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker33511_33529 = schema.core.checker.call(null,input_schema33510_33528);
var output_checker33512_33530 = schema.core.checker.call(null,output_schema33509_33527);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 * Returns: {s/Str s/Bool}
 * 
 * Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___33526,output_schema33509_33527,input_schema33510_33528,input_checker33511_33529,output_checker33512_33530){
return (function om_bootstrap$types$bs_class_set(G__33513){
var validate__20206__auto__ = ufv___33526.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33513], null);
var temp__4425__auto___33532 = input_checker33511_33529.call(null,args__20207__auto___33531);
if(cljs.core.truth_(temp__4425__auto___33532)){
var error__20208__auto___33533 = temp__4425__auto___33532;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__20208__auto___33533)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33510_33528,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33531,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33533], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var G__33521 = G__33513;
var map__33522 = G__33521;
var map__33522__$1 = ((((!((map__33522 == null)))?((((map__33522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33522):map__33522);
var bs_class = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__33521__$1 = G__33521;
while(true){
var map__33524 = G__33521__$1;
var map__33524__$1 = ((((!((map__33524 == null)))?((((map__33524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33524):map__33524);
var bs_class__$1 = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var temp__4423__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var klass = temp__4423__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4425__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var size = temp__4425__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var style = temp__4425__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33534 = output_checker33512_33530.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33534)){
var error__20208__auto___33535 = temp__4425__auto___33534;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__20208__auto___33535)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33509_33527,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33535], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33526,output_schema33509_33527,input_schema33510_33528,input_checker33511_33529,output_checker33512_33530))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema33509_33527,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33510_33528], null)));

//# sourceMappingURL=types.js.map?rel=1445816810372