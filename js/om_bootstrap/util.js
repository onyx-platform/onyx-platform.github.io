// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 * the first.  If a key occurs in more than one map, the mapping(s)
 * from the latter (left-to-right) will be combined with the mapping in
 * the result by looking up the proper merge function and in the
 * supplied map of key -> merge-fn and using that for the big merge. If
 * a key doesn't have a merge function, the right value wins (as with
 * merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4423__auto__ = (function (){var and__18872__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__18872__auto__){
return k__GT_fn.call(null,k);
} else {
return and__18872__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__18884__auto__ = m1;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___33543 = schema.utils.use_fn_validation;
var output_schema33538_33544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema33539_33545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker33540_33546 = schema.core.checker.call(null,input_schema33539_33545);
var output_checker33541_33547 = schema.core.checker.call(null,output_schema33538_33544);
/**
 * Inputs: [x :- s/Any]
 * Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___33543,output_schema33538_33544,input_schema33539_33545,input_checker33540_33546,output_checker33541_33547){
return (function om_bootstrap$util$collectify(G__33542){
var validate__20206__auto__ = ufv___33543.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33542], null);
var temp__4425__auto___33549 = input_checker33540_33546.call(null,args__20207__auto___33548);
if(cljs.core.truth_(temp__4425__auto___33549)){
var error__20208__auto___33550 = temp__4425__auto___33549;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33550)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33539_33545,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33548,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33550], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var x = G__33542;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33551 = output_checker33541_33547.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33551)){
var error__20208__auto___33552 = temp__4425__auto___33551;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33538_33544,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33552], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33543,output_schema33538_33544,input_schema33539_33545,input_checker33540_33546,output_checker33541_33547))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema33538_33544,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33539_33545], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 * the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___33558 = schema.utils.use_fn_validation;
var output_schema33553_33559 = schema.core.Bool;
var input_schema33554_33560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33555_33561 = schema.core.checker.call(null,input_schema33554_33560);
var output_checker33556_33562 = schema.core.checker.call(null,output_schema33553_33559);
/**
 * Inputs: [x]
 * Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___33558,output_schema33553_33559,input_schema33554_33560,input_checker33555_33561,output_checker33556_33562){
return (function om_bootstrap$util$om_component_QMARK_(G__33557){
var validate__20206__auto__ = ufv___33558.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33557], null);
var temp__4425__auto___33564 = input_checker33555_33561.call(null,args__20207__auto___33563);
if(cljs.core.truth_(temp__4425__auto___33564)){
var error__20208__auto___33565 = temp__4425__auto___33564;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33565)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33554_33560,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33563,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33565], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var x = G__33557;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33566 = output_checker33556_33562.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33566)){
var error__20208__auto___33567 = temp__4425__auto___33566;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33567)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33553_33559,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33567], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33558,output_schema33553_33559,input_schema33554_33560,input_checker33555_33561,output_checker33556_33562))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33553_33559,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33554_33560], null)));
var ufv___33573 = schema.utils.use_fn_validation;
var output_schema33568_33574 = schema.core.Bool;
var input_schema33569_33575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33570_33576 = schema.core.checker.call(null,input_schema33569_33575);
var output_checker33571_33577 = schema.core.checker.call(null,output_schema33568_33574);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * TODO: Once Om updates its externs to include this file, we can
 * remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___33573,output_schema33568_33574,input_schema33569_33575,input_checker33570_33576,output_checker33571_33577){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__33572){
var validate__20206__auto__ = ufv___33573.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33572], null);
var temp__4425__auto___33579 = input_checker33570_33576.call(null,args__20207__auto___33578);
if(cljs.core.truth_(temp__4425__auto___33579)){
var error__20208__auto___33580 = temp__4425__auto___33579;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__20208__auto___33580)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33569_33575,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33578,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33580], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var child = G__33572;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33581 = output_checker33571_33577.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33581)){
var error__20208__auto___33582 = temp__4425__auto___33581;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__20208__auto___33582)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33568_33574,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33582], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33573,output_schema33568_33574,input_schema33569_33575,input_checker33570_33576,output_checker33571_33577))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33568_33574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33569_33575], null)));
var ufv___33588 = schema.utils.use_fn_validation;
var output_schema33583_33589 = schema.core.Bool;
var input_schema33584_33590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33585_33591 = schema.core.checker.call(null,input_schema33584_33590);
var output_checker33586_33592 = schema.core.checker.call(null,output_schema33583_33589);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * Returns true if the supplied argument is a valid React component,
 * false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___33588,output_schema33583_33589,input_schema33584_33590,input_checker33585_33591,output_checker33586_33592){
return (function om_bootstrap$util$valid_component_QMARK_(G__33587){
var validate__20206__auto__ = ufv___33588.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33587], null);
var temp__4425__auto___33594 = input_checker33585_33591.call(null,args__20207__auto___33593);
if(cljs.core.truth_(temp__4425__auto___33594)){
var error__20208__auto___33595 = temp__4425__auto___33594;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20208__auto___33595)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33584_33590,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33593,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33595], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var child = G__33587;
while(true){
var or__18884__auto__ = typeof child === 'string';
if(or__18884__auto__){
return or__18884__auto__;
} else {
var or__18884__auto____$1 = typeof child === 'number';
if(or__18884__auto____$1){
return or__18884__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33596 = output_checker33586_33592.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33596)){
var error__20208__auto___33597 = temp__4425__auto___33596;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20208__auto___33597)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33583_33589,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33597], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33588,output_schema33583_33589,input_schema33584_33590,input_checker33585_33591,output_checker33586_33592))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33583_33589,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33584_33590], null)));
var ufv___33603 = schema.utils.use_fn_validation;
var output_schema33598_33604 = schema.core.Bool;
var input_schema33599_33605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33600_33606 = schema.core.checker.call(null,input_schema33599_33605);
var output_checker33601_33607 = schema.core.checker.call(null,output_schema33598_33604);
/**
 * Inputs: [children]
 * Returns: s/Bool
 * 
 * Returns true if the supplied sequence contains some valid React component,
 * false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___33603,output_schema33598_33604,input_schema33599_33605,input_checker33600_33606,output_checker33601_33607){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__33602){
var validate__20206__auto__ = ufv___33603.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33602], null);
var temp__4425__auto___33609 = input_checker33600_33606.call(null,args__20207__auto___33608);
if(cljs.core.truth_(temp__4425__auto___33609)){
var error__20208__auto___33610 = temp__4425__auto___33609;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20208__auto___33610)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33599_33605,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33608,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33610], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var children = G__33602;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33611 = output_checker33601_33607.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33611)){
var error__20208__auto___33612 = temp__4425__auto___33611;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20208__auto___33612)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33598_33604,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33612], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33603,output_schema33598_33604,input_schema33599_33605,input_checker33600_33606,output_checker33601_33607))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33598_33604,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33599_33605], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 * function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__18872__auto__ = l;
if(cljs.core.truth_(and__18872__auto__)){
return r;
} else {
return and__18872__auto__;
}
})())){
return (function() { 
var G__33613__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__33613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33614__i = 0, G__33614__a = new Array(arguments.length -  0);
while (G__33614__i < G__33614__a.length) {G__33614__a[G__33614__i] = arguments[G__33614__i + 0]; ++G__33614__i;}
  args = new cljs.core.IndexedSeq(G__33614__a,0);
} 
return G__33613__delegate.call(this,args);};
G__33613.cljs$lang$maxFixedArity = 0;
G__33613.cljs$lang$applyTo = (function (arglist__33615){
var args = cljs.core.seq(arglist__33615);
return G__33613__delegate(args);
});
G__33613.cljs$core$IFn$_invoke$arity$variadic = G__33613__delegate;
return G__33613;
})()
;
} else {
var or__18884__auto__ = l;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 * do a decent job with event handlers as well; currently only
 * handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 * prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__18884__auto__ = l;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 * according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(){
var args__19930__auto__ = [];
var len__19923__auto___33617 = arguments.length;
var i__19924__auto___33618 = (0);
while(true){
if((i__19924__auto___33618 < len__19923__auto___33617)){
args__19930__auto__.push((arguments[i__19924__auto___33618]));

var G__33619 = (i__19924__auto___33618 + (1));
i__19924__auto___33618 = G__33619;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((0) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__19931__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq33616){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33616));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__33628_33632 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__33629_33633 = null;
var count__33630_33634 = (0);
var i__33631_33635 = (0);
while(true){
if((i__33631_33635 < count__33630_33634)){
var k_33636 = cljs.core._nth.call(null,chunk__33629_33633,i__33631_33635);
if(cljs.core.truth_(arr.hasOwnProperty(k_33636))){
(ret[k_33636] = (arr[k_33636]));
} else {
}

var G__33637 = seq__33628_33632;
var G__33638 = chunk__33629_33633;
var G__33639 = count__33630_33634;
var G__33640 = (i__33631_33635 + (1));
seq__33628_33632 = G__33637;
chunk__33629_33633 = G__33638;
count__33630_33634 = G__33639;
i__33631_33635 = G__33640;
continue;
} else {
var temp__4425__auto___33641 = cljs.core.seq.call(null,seq__33628_33632);
if(temp__4425__auto___33641){
var seq__33628_33642__$1 = temp__4425__auto___33641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33628_33642__$1)){
var c__19668__auto___33643 = cljs.core.chunk_first.call(null,seq__33628_33642__$1);
var G__33644 = cljs.core.chunk_rest.call(null,seq__33628_33642__$1);
var G__33645 = c__19668__auto___33643;
var G__33646 = cljs.core.count.call(null,c__19668__auto___33643);
var G__33647 = (0);
seq__33628_33632 = G__33644;
chunk__33629_33633 = G__33645;
count__33630_33634 = G__33646;
i__33631_33635 = G__33647;
continue;
} else {
var k_33648 = cljs.core.first.call(null,seq__33628_33642__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_33648))){
(ret[k_33648] = (arr[k_33648]));
} else {
}

var G__33649 = cljs.core.next.call(null,seq__33628_33642__$1);
var G__33650 = null;
var G__33651 = (0);
var G__33652 = (0);
seq__33628_33632 = G__33649;
chunk__33629_33633 = G__33650;
count__33630_33634 = G__33651;
i__33631_33635 = G__33652;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(){
var args33653 = [];
var len__19923__auto___33656 = arguments.length;
var i__19924__auto___33657 = (0);
while(true){
if((i__19924__auto___33657 < len__19923__auto___33656)){
args33653.push((arguments[i__19924__auto___33657]));

var G__33658 = (i__19924__auto___33657 + (1));
i__19924__auto___33657 = G__33658;
continue;
} else {
}
break;
}

var G__33655 = args33653.length;
switch (G__33655) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33653.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Merges the supplied extra properties into the underlying Om cursor
 * and calls the constructor to clone the React component.
 * 
 * Requires that the supplied child has an Om cursor attached to it!
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 * generated by Om. Merges the supplied properties into the -props
 * field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4425__auto__)){
var children = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 * will have any props provided by extra-props merged in. Props are
 * merged in the same manner as merge-props, so props like :class will
 * be merged intelligently.
 * 
 * extra-props can be a function of the old props that returns new
 * props, OR it can be a map of props.
 * 
 * If the supplied child is an Om component, any supplied extra
 * properties will be merged into the underlying cursor and accessible
 * in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(){
var args33660 = [];
var len__19923__auto___33663 = arguments.length;
var i__19924__auto___33664 = (0);
while(true){
if((i__19924__auto___33664 < len__19923__auto___33663)){
args33660.push((arguments[i__19924__auto___33664]));

var G__33665 = (i__19924__auto___33664 + (1));
i__19924__auto___33664 = G__33665;
continue;
} else {
}
break;
}

var G__33662 = args33660.length;
switch (G__33662) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33660.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map?rel=1445816810551