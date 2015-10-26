// Compiled by ClojureScript 1.7.48 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__24513__24514__auto__){
if(!((p1__24513__24514__auto__ == null))){
if((false) || (p1__24513__24514__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__24513__24514__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__24513__24514__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__24513__24514__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__33770_SHARP_){
return (cljs.core.val.call(null,p1__33770_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__33772 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__33772,(0),null);
var v = cljs.core.nth.call(null,vec__33772,(1),null);
var p = vec__33772;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___33778 = schema.utils.use_fn_validation;
var output_schema33773_33779 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema33774_33780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33775_33781 = schema.core.checker.call(null,input_schema33774_33780);
var output_checker33776_33782 = schema.core.checker.call(null,output_schema33773_33779);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___33778,output_schema33773_33779,input_schema33774_33780,input_checker33775_33781,output_checker33776_33782){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__33777){
var validate__20206__auto__ = ufv___33778.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33777], null);
var temp__4425__auto___33784 = input_checker33775_33781.call(null,args__20207__auto___33783);
if(cljs.core.truth_(temp__4425__auto___33784)){
var error__20208__auto___33785 = temp__4425__auto___33784;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__20208__auto___33785)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33774_33780,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33783,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33785], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var k = G__33777;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33786 = output_checker33776_33782.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33786)){
var error__20208__auto___33787 = temp__4425__auto___33786;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__20208__auto___33787)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33773_33779,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33787], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33778,output_schema33773_33779,input_schema33774_33780,input_checker33775_33781,output_checker33776_33782))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema33773_33779,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33774_33780], null)));
var ufv___33793 = schema.utils.use_fn_validation;
var output_schema33788_33794 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema33789_33795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33790_33796 = schema.core.checker.call(null,input_schema33789_33795);
var output_checker33791_33797 = schema.core.checker.call(null,output_schema33788_33794);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___33793,output_schema33788_33794,input_schema33789_33795,input_checker33790_33796,output_checker33791_33797){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__33792){
var validate__20206__auto__ = ufv___33793.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33792], null);
var temp__4425__auto___33799 = input_checker33790_33796.call(null,args__20207__auto___33798);
if(cljs.core.truth_(temp__4425__auto___33799)){
var error__20208__auto___33800 = temp__4425__auto___33799;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__20208__auto___33800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33789_33795,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33798,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33800], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var s = G__33792;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33801 = output_checker33791_33797.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33801)){
var error__20208__auto___33802 = temp__4425__auto___33801;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__20208__auto___33802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33788_33794,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33802], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33793,output_schema33788_33794,input_schema33789_33795,input_checker33790_33796,output_checker33791_33797))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema33788_33794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33789_33795], null)));
var ufv___33808 = schema.utils.use_fn_validation;
var output_schema33803_33809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema33804_33810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker33805_33811 = schema.core.checker.call(null,input_schema33804_33810);
var output_checker33806_33812 = schema.core.checker.call(null,output_schema33803_33809);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___33808,output_schema33803_33809,input_schema33804_33810,input_checker33805_33811,output_checker33806_33812){
return (function plumbing$fnk$schema$split_schema_keys(G__33807){
var validate__20206__auto__ = ufv___33808.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33807], null);
var temp__4425__auto___33814 = input_checker33805_33811.call(null,args__20207__auto___33813);
if(cljs.core.truth_(temp__4425__auto___33814)){
var error__20208__auto___33815 = temp__4425__auto___33814;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__20208__auto___33815)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33804_33810,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33813,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33815], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var s = G__33807;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33816 = output_checker33806_33812.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33816)){
var error__20208__auto___33817 = temp__4425__auto___33816;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__20208__auto___33817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33803_33809,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33817], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33808,output_schema33803_33809,input_schema33804_33810,input_checker33805_33811,output_checker33806_33812))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema33803_33809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33804_33810], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var args__19930__auto__ = [];
var len__19923__auto___33825 = arguments.length;
var i__19924__auto___33826 = (0);
while(true){
if((i__19924__auto___33826 < len__19923__auto___33825)){
args__19930__auto__.push((arguments[i__19924__auto___33826]));

var G__33827 = (i__19924__auto___33826 + (1));
i__19924__auto___33826 = G__33827;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((3) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19931__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__33822){
var vec__33823 = p__33822;
var k = cljs.core.nth.call(null,vec__33823,(0),null);
var v = cljs.core.nth.call(null,vec__33823,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33824 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__33824,(0),null);
var ov = cljs.core.nth.call(null,vec__33824,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq33818){
var G__33819 = cljs.core.first.call(null,seq33818);
var seq33818__$1 = cljs.core.next.call(null,seq33818);
var G__33820 = cljs.core.first.call(null,seq33818__$1);
var seq33818__$2 = cljs.core.next.call(null,seq33818__$1);
var G__33821 = cljs.core.first.call(null,seq33818__$2);
var seq33818__$3 = cljs.core.next.call(null,seq33818__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__33819,G__33820,G__33821,seq33818__$3);
});
var ufv___33835 = schema.utils.use_fn_validation;
var output_schema33829_33836 = plumbing.fnk.schema.InputSchema;
var input_schema33830_33837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker33831_33838 = schema.core.checker.call(null,input_schema33830_33837);
var output_checker33832_33839 = schema.core.checker.call(null,output_schema33829_33836);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839){
return (function plumbing$fnk$schema$union_input_schemata(G__33833,G__33834){
var validate__20206__auto__ = ufv___33835.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33833,G__33834], null);
var temp__4425__auto___33841 = input_checker33831_33838.call(null,args__20207__auto___33840);
if(cljs.core.truth_(temp__4425__auto___33841)){
var error__20208__auto___33842 = temp__4425__auto___33841;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__20208__auto___33842)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33830_33837,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33840,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33842], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var i1 = G__33833;
var i2 = G__33834;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__20206__auto__,ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839){
return (function (p1__33828_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__33828_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__33828_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__20206__auto__,ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839))
,((function (validate__20206__auto__,ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__20206__auto__,ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839))
,((function (validate__20206__auto__,ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__18872__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__18872__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__18872__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__20206__auto__,ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33843 = output_checker33832_33839.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33843)){
var error__20208__auto___33844 = temp__4425__auto___33843;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__20208__auto___33844)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33829_33836,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33844], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33835,output_schema33829_33836,input_schema33830_33837,input_checker33831_33838,output_checker33832_33839))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema33829_33836,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33830_33837], null)));
var ufv___33850 = schema.utils.use_fn_validation;
var output_schema33845_33851 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema33846_33852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker33847_33853 = schema.core.checker.call(null,input_schema33846_33852);
var output_checker33848_33854 = schema.core.checker.call(null,output_schema33845_33851);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___33850,output_schema33845_33851,input_schema33846_33852,input_checker33847_33853,output_checker33848_33854){
return (function plumbing$fnk$schema$required_toplevel_keys(G__33849){
var validate__20206__auto__ = ufv___33850.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33849], null);
var temp__4425__auto___33856 = input_checker33847_33853.call(null,args__20207__auto___33855);
if(cljs.core.truth_(temp__4425__auto___33856)){
var error__20208__auto___33857 = temp__4425__auto___33856;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__20208__auto___33857)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33846_33852,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33855,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33857], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var input_schema = G__33849;
while(true){
return cljs.core.keep.call(null,((function (validate__20206__auto__,ufv___33850,output_schema33845_33851,input_schema33846_33852,input_checker33847_33853,output_checker33848_33854){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__20206__auto__,ufv___33850,output_schema33845_33851,input_schema33846_33852,input_checker33847_33853,output_checker33848_33854))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33858 = output_checker33848_33854.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33858)){
var error__20208__auto___33859 = temp__4425__auto___33858;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__20208__auto___33859)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33845_33851,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33859], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33850,output_schema33845_33851,input_schema33846_33852,input_checker33847_33853,output_checker33848_33854))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema33845_33851,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33846_33852], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19637__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__33868(s__33869){
return (new cljs.core.LazySeq(null,(function (){
var s__33869__$1 = s__33869;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33869__$1);
if(temp__4425__auto__){
var s__33869__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33869__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__33869__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__33871 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__33870 = (0);
while(true){
if((i__33870 < size__19636__auto__)){
var vec__33874 = cljs.core._nth.call(null,c__19635__auto__,i__33870);
var k = cljs.core.nth.call(null,vec__33874,(0),null);
var v = cljs.core.nth.call(null,vec__33874,(1),null);
cljs.core.chunk_append.call(null,b__33871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__33876 = (i__33870 + (1));
i__33870 = G__33876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33871),plumbing$fnk$schema$guess_expr_output_schema_$_iter__33868.call(null,cljs.core.chunk_rest.call(null,s__33869__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33871),null);
}
} else {
var vec__33875 = cljs.core.first.call(null,s__33869__$2);
var k = cljs.core.nth.call(null,vec__33875,(0),null);
var v = cljs.core.nth.call(null,vec__33875,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__33868.call(null,cljs.core.rest.call(null,s__33869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19637__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19637__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__33885(s__33886){
return (new cljs.core.LazySeq(null,(function (){
var s__33886__$1 = s__33886;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33886__$1);
if(temp__4425__auto__){
var s__33886__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33886__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__33886__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__33888 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__33887 = (0);
while(true){
if((i__33887 < size__19636__auto__)){
var vec__33891 = cljs.core._nth.call(null,c__19635__auto__,i__33887);
var k = cljs.core.nth.call(null,vec__33891,(0),null);
var v = cljs.core.nth.call(null,vec__33891,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__18884__auto__ = required_QMARK_;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__33888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__33893 = (i__33887 + (1));
i__33887 = G__33893;
continue;
} else {
var G__33894 = (i__33887 + (1));
i__33887 = G__33894;
continue;
}
} else {
var G__33895 = (i__33887 + (1));
i__33887 = G__33895;
continue;
}
} else {
var G__33896 = (i__33887 + (1));
i__33887 = G__33896;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33888),plumbing$fnk$schema$schema_diff_$_iter__33885.call(null,cljs.core.chunk_rest.call(null,s__33886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33888),null);
}
} else {
var vec__33892 = cljs.core.first.call(null,s__33886__$2);
var k = cljs.core.nth.call(null,vec__33892,(0),null);
var v = cljs.core.nth.call(null,vec__33892,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__18884__auto__ = required_QMARK_;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__33885.call(null,cljs.core.rest.call(null,s__33886__$2)));
} else {
var G__33897 = cljs.core.rest.call(null,s__33886__$2);
s__33886__$1 = G__33897;
continue;
}
} else {
var G__33898 = cljs.core.rest.call(null,s__33886__$2);
s__33886__$1 = G__33898;
continue;
}
} else {
var G__33899 = cljs.core.rest.call(null,s__33886__$2);
s__33886__$1 = G__33899;
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
return iter__19637__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___33922 = schema.utils.use_fn_validation;
var output_schema33900_33923 = schema.core.Any;
var input_schema33901_33924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker33902_33925 = schema.core.checker.call(null,input_schema33901_33924);
var output_checker33903_33926 = schema.core.checker.call(null,output_schema33900_33923);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___33922,output_schema33900_33923,input_schema33901_33924,input_checker33902_33925,output_checker33903_33926){
return (function plumbing$fnk$schema$compose_schemata(G__33904,G__33905){
var validate__20206__auto__ = true;
if(validate__20206__auto__){
var args__20207__auto___33927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33904,G__33905], null);
var temp__4425__auto___33928 = input_checker33902_33925.call(null,args__20207__auto___33927);
if(cljs.core.truth_(temp__4425__auto___33928)){
var error__20208__auto___33929 = temp__4425__auto___33928;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__20208__auto___33929)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33901_33924,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33927,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33929], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var G__33916 = G__33904;
var vec__33918 = G__33916;
var i2 = cljs.core.nth.call(null,vec__33918,(0),null);
var o2 = cljs.core.nth.call(null,vec__33918,(1),null);
var G__33917 = G__33905;
var vec__33919 = G__33917;
var i1 = cljs.core.nth.call(null,vec__33919,(0),null);
var o1 = cljs.core.nth.call(null,vec__33919,(1),null);
var G__33916__$1 = G__33916;
var G__33917__$1 = G__33917;
while(true){
var vec__33920 = G__33916__$1;
var i2__$1 = cljs.core.nth.call(null,vec__33920,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__33920,(1),null);
var vec__33921 = G__33917__$1;
var i1__$1 = cljs.core.nth.call(null,vec__33921,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__33921,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__20206__auto__){
var temp__4425__auto___33930 = output_checker33903_33926.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33930)){
var error__20208__auto___33931 = temp__4425__auto___33930;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__20208__auto___33931)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33900_33923,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33931], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33922,output_schema33900_33923,input_schema33901_33924,input_checker33902_33925,output_checker33903_33926))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema33900_33923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33901_33924], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___34010 = schema.utils.use_fn_validation;
var output_schema33932_34011 = schema.core.Any;
var input_schema33933_34012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker33934_34013 = schema.core.checker.call(null,input_schema33933_34012);
var output_checker33935_34014 = schema.core.checker.call(null,output_schema33932_34011);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014){
return (function plumbing$fnk$schema$split_schema(G__33936,G__33937){
var validate__20206__auto__ = ufv___34010.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___34015 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33936,G__33937], null);
var temp__4425__auto___34016 = input_checker33934_34013.call(null,args__20207__auto___34015);
if(cljs.core.truth_(temp__4425__auto___34016)){
var error__20208__auto___34017 = temp__4425__auto___34016;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__20208__auto___34017)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33933_34012,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___34015,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___34017], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var s = G__33936;
var ks = G__33937;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__19637__auto__ = ((function (ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014){
return (function plumbing$fnk$schema$split_schema_$_iter__33974(s__33975){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014){
return (function (){
var s__33975__$1 = s__33975;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33975__$1);
if(temp__4425__auto__){
var s__33975__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33975__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__33975__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__33977 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__33976 = (0);
while(true){
if((i__33976 < size__19636__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__19635__auto__,i__33976);
cljs.core.chunk_append.call(null,b__33977,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19637__auto__ = ((function (i__33976,in_QMARK_,c__19635__auto__,size__19636__auto__,b__33977,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014){
return (function plumbing$fnk$schema$split_schema_$_iter__33974_$_iter__33994(s__33995){
return (new cljs.core.LazySeq(null,((function (i__33976,in_QMARK_,c__19635__auto__,size__19636__auto__,b__33977,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014){
return (function (){
var s__33995__$1 = s__33995;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__33995__$1);
if(temp__4425__auto____$1){
var s__33995__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33995__$2)){
var c__19635__auto____$1 = cljs.core.chunk_first.call(null,s__33995__$2);
var size__19636__auto____$1 = cljs.core.count.call(null,c__19635__auto____$1);
var b__33997 = cljs.core.chunk_buffer.call(null,size__19636__auto____$1);
if((function (){var i__33996 = (0);
while(true){
if((i__33996 < size__19636__auto____$1)){
var vec__34000 = cljs.core._nth.call(null,c__19635__auto____$1,i__33996);
var k = cljs.core.nth.call(null,vec__34000,(0),null);
var v = cljs.core.nth.call(null,vec__34000,(1),null);
if(cljs.core.truth_((function (){var and__18872__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__18872__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__18872__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__33997,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34018 = (i__33996 + (1));
i__33996 = G__34018;
continue;
} else {
var G__34019 = (i__33996 + (1));
i__33996 = G__34019;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33997),plumbing$fnk$schema$split_schema_$_iter__33974_$_iter__33994.call(null,cljs.core.chunk_rest.call(null,s__33995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33997),null);
}
} else {
var vec__34001 = cljs.core.first.call(null,s__33995__$2);
var k = cljs.core.nth.call(null,vec__34001,(0),null);
var v = cljs.core.nth.call(null,vec__34001,(1),null);
if(cljs.core.truth_((function (){var and__18872__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__18872__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__18872__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__33974_$_iter__33994.call(null,cljs.core.rest.call(null,s__33995__$2)));
} else {
var G__34020 = cljs.core.rest.call(null,s__33995__$2);
s__33995__$1 = G__34020;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__33976,in_QMARK_,c__19635__auto__,size__19636__auto__,b__33977,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014))
,null,null));
});})(i__33976,in_QMARK_,c__19635__auto__,size__19636__auto__,b__33977,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014))
;
return iter__19637__auto__.call(null,s);
})()));

var G__34021 = (i__33976 + (1));
i__33976 = G__34021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33977),plumbing$fnk$schema$split_schema_$_iter__33974.call(null,cljs.core.chunk_rest.call(null,s__33975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33977),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__33975__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19637__auto__ = ((function (in_QMARK_,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014){
return (function plumbing$fnk$schema$split_schema_$_iter__33974_$_iter__34002(s__34003){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014){
return (function (){
var s__34003__$1 = s__34003;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34003__$1);
if(temp__4425__auto____$1){
var s__34003__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34003__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__34003__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__34005 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__34004 = (0);
while(true){
if((i__34004 < size__19636__auto__)){
var vec__34008 = cljs.core._nth.call(null,c__19635__auto__,i__34004);
var k = cljs.core.nth.call(null,vec__34008,(0),null);
var v = cljs.core.nth.call(null,vec__34008,(1),null);
if(cljs.core.truth_((function (){var and__18872__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__18872__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__18872__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__34005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34022 = (i__34004 + (1));
i__34004 = G__34022;
continue;
} else {
var G__34023 = (i__34004 + (1));
i__34004 = G__34023;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34005),plumbing$fnk$schema$split_schema_$_iter__33974_$_iter__34002.call(null,cljs.core.chunk_rest.call(null,s__34003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34005),null);
}
} else {
var vec__34009 = cljs.core.first.call(null,s__34003__$2);
var k = cljs.core.nth.call(null,vec__34009,(0),null);
var v = cljs.core.nth.call(null,vec__34009,(1),null);
if(cljs.core.truth_((function (){var and__18872__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__18872__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__18872__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__33974_$_iter__34002.call(null,cljs.core.rest.call(null,s__34003__$2)));
} else {
var G__34024 = cljs.core.rest.call(null,s__34003__$2);
s__34003__$1 = G__34024;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014))
,null,null));
});})(in_QMARK_,s__33975__$2,temp__4425__auto__,ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014))
;
return iter__19637__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__33974.call(null,cljs.core.rest.call(null,s__33975__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014))
,null,null));
});})(ks__$1,validate__20206__auto__,ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014))
;
return iter__19637__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___34025 = output_checker33935_34014.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___34025)){
var error__20208__auto___34026 = temp__4425__auto___34025;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__20208__auto___34026)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33932_34011,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___34026], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___34010,output_schema33932_34011,input_schema33933_34012,input_checker33934_34013,output_checker33935_34014))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema33932_34011,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33933_34012], null)));
var ufv___34057 = schema.utils.use_fn_validation;
var output_schema34027_34058 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema34028_34059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker34029_34060 = schema.core.checker.call(null,input_schema34028_34059);
var output_checker34030_34061 = schema.core.checker.call(null,output_schema34027_34058);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___34057,output_schema34027_34058,input_schema34028_34059,input_checker34029_34060,output_checker34030_34061){
return (function plumbing$fnk$schema$sequence_schemata(G__34031,G__34032){
var validate__20206__auto__ = ufv___34057.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___34062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34031,G__34032], null);
var temp__4425__auto___34063 = input_checker34029_34060.call(null,args__20207__auto___34062);
if(cljs.core.truth_(temp__4425__auto___34063)){
var error__20208__auto___34064 = temp__4425__auto___34063;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__20208__auto___34064)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34028_34059,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___34062,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___34064], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var G__34048 = G__34031;
var vec__34050 = G__34048;
var i1 = cljs.core.nth.call(null,vec__34050,(0),null);
var o1 = cljs.core.nth.call(null,vec__34050,(1),null);
var G__34049 = G__34032;
var vec__34051 = G__34049;
var k = cljs.core.nth.call(null,vec__34051,(0),null);
var vec__34052 = cljs.core.nth.call(null,vec__34051,(1),null);
var i2 = cljs.core.nth.call(null,vec__34052,(0),null);
var o2 = cljs.core.nth.call(null,vec__34052,(1),null);
var G__34048__$1 = G__34048;
var G__34049__$1 = G__34049;
while(true){
var vec__34053 = G__34048__$1;
var i1__$1 = cljs.core.nth.call(null,vec__34053,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__34053,(1),null);
var vec__34054 = G__34049__$1;
var k__$1 = cljs.core.nth.call(null,vec__34054,(0),null);
var vec__34055 = cljs.core.nth.call(null,vec__34054,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__34055,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__34055,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__34056 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__34056,(0),null);
var unused = cljs.core.nth.call(null,vec__34056,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___34065 = output_checker34030_34061.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___34065)){
var error__20208__auto___34066 = temp__4425__auto___34065;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__20208__auto___34066)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34027_34058,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___34066], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___34057,output_schema34027_34058,input_schema34028_34059,input_checker34029_34060,output_checker34030_34061))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema34027_34058,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34028_34059], null)));

//# sourceMappingURL=schema.js.map?rel=1445816811114