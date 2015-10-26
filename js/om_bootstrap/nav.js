// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('clojure.string');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));

var component_fnk__29701__auto___36084 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema36059 = schema.core.Any;
var input_schema36060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map36058","map36058",-670451447,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker36061 = schema.core.checker.call(null,input_schema36060);
var output_checker36062 = schema.core.checker.call(null,output_schema36059);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function om_bootstrap$nav$constructor36056(G__36063){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36063], null);
var temp__4425__auto___36086 = input_checker36061.call(null,args__20207__auto___36085);
if(cljs.core.truth_(temp__4425__auto___36086)){
var error__20208__auto___36087 = temp__4425__auto___36086;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36056","constructor36056",-952208283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36087)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36060,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36085,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36087], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map36058 = G__36063;
while(true){
if(cljs.core.map_QMARK_.call(null,map36058)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map36058)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map36058,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t36070 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t36070 = (function (owner,constructor36056,G__36063,map36058,input_checker36061,input_schema36060,validate__20206__auto__,output_schema36059,ufv__,output_checker36062,meta36071){
this.owner = owner;
this.constructor36056 = constructor36056;
this.G__36063 = G__36063;
this.map36058 = map36058;
this.input_checker36061 = input_checker36061;
this.input_schema36060 = input_schema36060;
this.validate__20206__auto__ = validate__20206__auto__;
this.output_schema36059 = output_schema36059;
this.ufv__ = ufv__;
this.output_checker36062 = output_checker36062;
this.meta36071 = meta36071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t36070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function (_36072,meta36071__$1){
var self__ = this;
var _36072__$1 = this;
return (new om_bootstrap.nav.t36070(self__.owner,self__.constructor36056,self__.G__36063,self__.map36058,self__.input_checker36061,self__.input_schema36060,self__.validate__20206__auto__,self__.output_schema36059,self__.ufv__,self__.output_checker36062,meta36071__$1));
});})(owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;

om_bootstrap.nav.t36070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function (_36072){
var self__ = this;
var _36072__$1 = this;
return self__.meta36071;
});})(owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;

om_bootstrap.nav.t36070.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t36070.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav-item*";
});})(owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;

om_bootstrap.nav.t36070.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t36070.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__36073 = om.core.get_props.call(null,self__.owner);
var map__36073__$1 = ((((!((map__36073 == null)))?((((map__36073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36073):map__36073);
var opts = cljs.core.get.call(null,map__36073__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__36073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__36074 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__36074,(0),null);
var props = cljs.core.nth.call(null,vec__36074,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__36073,map__36073__$1,opts,children,vec__36074,bs,props,classes,___$1,owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs))){
return null;
} else {
return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else {
return null;
}
});})(map__36073,map__36073__$1,opts,children,vec__36074,bs,props,classes,___$1,owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;

om_bootstrap.nav.t36070.getBasis = ((function (owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36056","constructor36056",-952208283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36063","G__36063",383172135,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map36058","map36058",-670451447,null),new cljs.core.Symbol(null,"input-checker36061","input-checker36061",-1904529493,null),new cljs.core.Symbol(null,"input-schema36060","input-schema36060",-1646622770,null),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),new cljs.core.Symbol(null,"output-schema36059","output-schema36059",-16759598,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-checker36062","output-checker36062",578339071,null),new cljs.core.Symbol(null,"meta36071","meta36071",-682283257,null)], null);
});})(owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;

om_bootstrap.nav.t36070.cljs$lang$type = true;

om_bootstrap.nav.t36070.cljs$lang$ctorStr = "om-bootstrap.nav/t36070";

om_bootstrap.nav.t36070.cljs$lang$ctorPrWriter = ((function (owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.nav/t36070");
});})(owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;

om_bootstrap.nav.__GT_t36070 = ((function (owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062){
return (function om_bootstrap$nav$constructor36056_$___GT_t36070(owner__$1,constructor36056__$1,G__36063__$1,map36058__$1,input_checker36061__$1,input_schema36060__$1,validate__20206__auto____$1,output_schema36059__$1,ufv____$1,output_checker36062__$1,meta36071){
return (new om_bootstrap.nav.t36070(owner__$1,constructor36056__$1,G__36063__$1,map36058__$1,input_checker36061__$1,input_schema36060__$1,validate__20206__auto____$1,output_schema36059__$1,ufv____$1,output_checker36062__$1,meta36071));
});})(owner,validate__20206__auto__,ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
;

}

return (new om_bootstrap.nav.t36070(owner,om_bootstrap$nav$constructor36056,G__36063,map36058,input_checker36061,input_schema36060,validate__20206__auto__,output_schema36059,ufv__,output_checker36062,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36088 = output_checker36062.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36088)){
var error__20208__auto___36089 = temp__4425__auto___36088;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36056","constructor36056",-952208283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36089)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36059,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36089], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema36059,input_schema36060,input_checker36061,output_checker36062))
,schema.core.make_fn_schema.call(null,output_schema36059,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36060], null)));
})();
/**
 * Generates a nav item for use inside of a nav element.
 */
om_bootstrap.nav.nav_item_STAR_ = ((function (component_fnk__29701__auto___36084){
return (function om_bootstrap$nav$nav_item_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___36090 = arguments.length;
var i__19924__auto___36091 = (0);
while(true){
if((i__19924__auto___36091 < len__19923__auto___36090)){
args__19930__auto__.push((arguments[i__19924__auto___36091]));

var G__36092 = (i__19924__auto___36091 + (1));
i__19924__auto___36091 = G__36092;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___36084))
;

om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___36084){
return (function (data__29702__auto__,owner36055,p__36079){
var vec__36080 = p__36079;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__36080,(0),null);
return component_fnk__29701__auto___36084.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner36055,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___36084))
;

om_bootstrap.nav.nav_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___36084){
return (function (seq36076){
var G__36077 = cljs.core.first.call(null,seq36076);
var seq36076__$1 = cljs.core.next.call(null,seq36076);
var G__36078 = cljs.core.first.call(null,seq36076__$1);
var seq36076__$2 = cljs.core.next.call(null,seq36076__$1);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36077,G__36078,seq36076__$2);
});})(component_fnk__29701__auto___36084))
;

om_bootstrap.nav.__GT_nav_item_STAR_ = (function om_bootstrap$nav$__GT_nav_item_STAR_(){
var args36081 = [];
var len__19923__auto___36093 = arguments.length;
var i__19924__auto___36094 = (0);
while(true){
if((i__19924__auto___36094 < len__19923__auto___36093)){
args36081.push((arguments[i__19924__auto___36094]));

var G__36095 = (i__19924__auto___36094 + (1));
i__19924__auto___36094 = G__36095;
continue;
} else {
}
break;
}

var G__36083 = args36081.length;
switch (G__36083) {
case 1:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36081.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__29670__auto__);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m36057){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__29670__auto__,m36057);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___36105 = schema.utils.use_fn_validation;
var output_schema36097_36106 = om_bootstrap.types.Component;
var input_schema36098_36107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NavItem","NavItem",926041296,null)], null))),schema.core.Any], null);
var input_checker36099_36108 = schema.core.checker.call(null,input_schema36098_36107);
var output_checker36100_36109 = schema.core.checker.call(null,output_schema36097_36106);
/**
 * Inputs: [opts :- NavItem & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav_item = ((function (ufv___36105,output_schema36097_36106,input_schema36098_36107,input_checker36099_36108,output_checker36100_36109){
return (function om_bootstrap$nav$nav_item(){
var args__19930__auto__ = [];
var len__19923__auto___36110 = arguments.length;
var i__19924__auto___36111 = (0);
while(true){
if((i__19924__auto___36111 < len__19923__auto___36110)){
args__19930__auto__.push((arguments[i__19924__auto___36111]));

var G__36112 = (i__19924__auto___36111 + (1));
i__19924__auto___36111 = G__36112;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___36105,output_schema36097_36106,input_schema36098_36107,input_checker36099_36108,output_checker36100_36109))
;

om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36105,output_schema36097_36106,input_schema36098_36107,input_checker36099_36108,output_checker36100_36109){
return (function (G__36101,rest36102){
var validate__20206__auto__ = ufv___36105.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36113 = cljs.core.list_STAR_.call(null,G__36101,rest36102);
var temp__4425__auto___36114 = input_checker36099_36108.call(null,args__20207__auto___36113);
if(cljs.core.truth_(temp__4425__auto___36114)){
var error__20208__auto___36115 = temp__4425__auto___36114;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36115)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36098_36107,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36113,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36115], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__36101;
var children = rest36102;
while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36116 = output_checker36100_36109.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36116)){
var error__20208__auto___36117 = temp__4425__auto___36116;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36117)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36097_36106,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36117], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___36105,output_schema36097_36106,input_schema36098_36107,input_checker36099_36108,output_checker36100_36109))
;

om_bootstrap.nav.nav_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav_item.cljs$lang$applyTo = ((function (ufv___36105,output_schema36097_36106,input_schema36098_36107,input_checker36099_36108,output_checker36100_36109){
return (function (seq36103){
var G__36104 = cljs.core.first.call(null,seq36103);
var seq36103__$1 = cljs.core.next.call(null,seq36103);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic(G__36104,seq36103__$1);
});})(ufv___36105,output_schema36097_36106,input_schema36098_36107,input_checker36099_36108,output_checker36100_36109))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema36097_36106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36098_36107], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___36124 = schema.utils.use_fn_validation;
var output_schema36118_36125 = schema.core.Bool;
var input_schema36119_36126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child-props","child-props",1099812184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36120_36127 = schema.core.checker.call(null,input_schema36119_36126);
var output_checker36121_36128 = schema.core.checker.call(null,output_schema36118_36125);
/**
 * Inputs: [child-props opts]
 * Returns: s/Bool
 * 
 * Accepts a NavItem's child props and the current options provided to
 * the Nav bar; returns true if the child component should be active,
 * false otherwise.
 */
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___36124,output_schema36118_36125,input_schema36119_36126,input_checker36120_36127,output_checker36121_36128){
return (function om_bootstrap$nav$child_active_QMARK_(G__36122,G__36123){
var validate__20206__auto__ = ufv___36124.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36122,G__36123], null);
var temp__4425__auto___36130 = input_checker36120_36127.call(null,args__20207__auto___36129);
if(cljs.core.truth_(temp__4425__auto___36130)){
var error__20208__auto___36131 = temp__4425__auto___36130;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Accepts a NavItem's child props and the current options provided to\n  the Nav bar; returns true if the child component should be active,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20208__auto___36131)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36119_36126,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36129,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36131], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var child_props = G__36122;
var opts = G__36123;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__18884__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
var or__18884__auto____$1 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
})();
if(cljs.core.truth_(or__18884__auto____$1)){
return or__18884__auto____$1;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36132 = output_checker36121_36128.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36132)){
var error__20208__auto___36133 = temp__4425__auto___36132;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Accepts a NavItem's child props and the current options provided to\n  the Nav bar; returns true if the child component should be active,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20208__auto___36133)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36118_36125,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36133], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___36124,output_schema36118_36125,input_schema36119_36126,input_checker36120_36127,output_checker36121_36128))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema36118_36125,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36119_36126], null)));
var ufv___36139 = schema.utils.use_fn_validation;
var output_schema36134_36140 = schema.core.Any;
var input_schema36135_36141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36136_36142 = schema.core.checker.call(null,input_schema36135_36141);
var output_checker36137_36143 = schema.core.checker.call(null,output_schema36134_36140);
/**
 * Inputs: [opts]
 * 
 * Takes the options supplied to the top level nav and returns a
 * function that will CLONE the inner nav items, transferring all
 * relevant props from the outer code to the inner code.
 */
om_bootstrap.nav.clone_nav_item = ((function (ufv___36139,output_schema36134_36140,input_schema36135_36141,input_checker36136_36142,output_checker36137_36143){
return (function om_bootstrap$nav$clone_nav_item(G__36138){
var validate__20206__auto__ = ufv___36139.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36138], null);
var temp__4425__auto___36145 = input_checker36136_36142.call(null,args__20207__auto___36144);
if(cljs.core.truth_(temp__4425__auto___36145)){
var error__20208__auto___36146 = temp__4425__auto___36145;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes the options supplied to the top level nav and returns a\n  function that will CLONE the inner nav items, transferring all\n  relevant props from the outer code to the inner code."], null)),cljs.core.pr_str.call(null,error__20208__auto___36146)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36135_36141,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36144,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36146], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__36138;
while(true){
var prop_fn = ((function (validate__20206__auto__,ufv___36139,output_schema36134_36140,input_schema36135_36141,input_checker36136_36142,output_checker36137_36143){
return (function om_bootstrap$nav$clone_nav_item_$_prop_fn(props){
var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__20206__auto__,ufv___36139,output_schema36134_36140,input_schema36135_36141,input_checker36136_36142,output_checker36137_36143))
;
return ((function (validate__20206__auto__,ufv___36139,output_schema36134_36140,input_schema36135_36141,input_checker36136_36142,output_checker36137_36143){
return (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__20206__auto__,ufv___36139,output_schema36134_36140,input_schema36135_36141,input_checker36136_36142,output_checker36137_36143))
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36147 = output_checker36137_36143.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36147)){
var error__20208__auto___36148 = temp__4425__auto___36147;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes the options supplied to the top level nav and returns a\n  function that will CLONE the inner nav items, transferring all\n  relevant props from the outer code to the inner code."], null)),cljs.core.pr_str.call(null,error__20208__auto___36148)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36134_36140,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36148], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___36139,output_schema36134_36140,input_schema36135_36141,input_checker36136_36142,output_checker36137_36143))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema36134_36140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36135_36141], null)));

var component_fnk__29701__auto___36178 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema36153 = schema.core.Any;
var input_schema36154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map36152","map36152",-1320495219,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker36155 = schema.core.checker.call(null,input_schema36154);
var output_checker36156 = schema.core.checker.call(null,output_schema36153);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function om_bootstrap$nav$constructor36150(G__36157){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36157], null);
var temp__4425__auto___36180 = input_checker36155.call(null,args__20207__auto___36179);
if(cljs.core.truth_(temp__4425__auto___36180)){
var error__20208__auto___36181 = temp__4425__auto___36180;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36150","constructor36150",-1292972098,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36181)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36154,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36179,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36181], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map36152 = G__36157;
while(true){
if(cljs.core.map_QMARK_.call(null,map36152)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map36152)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map36152,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t36164 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t36164 = (function (owner,G__36157,map36152,input_schema36154,validate__20206__auto__,input_checker36155,output_checker36156,ufv__,output_schema36153,constructor36150,meta36165){
this.owner = owner;
this.G__36157 = G__36157;
this.map36152 = map36152;
this.input_schema36154 = input_schema36154;
this.validate__20206__auto__ = validate__20206__auto__;
this.input_checker36155 = input_checker36155;
this.output_checker36156 = output_checker36156;
this.ufv__ = ufv__;
this.output_schema36153 = output_schema36153;
this.constructor36150 = constructor36150;
this.meta36165 = meta36165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t36164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function (_36166,meta36165__$1){
var self__ = this;
var _36166__$1 = this;
return (new om_bootstrap.nav.t36164(self__.owner,self__.G__36157,self__.map36152,self__.input_schema36154,self__.validate__20206__auto__,self__.input_checker36155,self__.output_checker36156,self__.ufv__,self__.output_schema36153,self__.constructor36150,meta36165__$1));
});})(owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
;

om_bootstrap.nav.t36164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function (_36166){
var self__ = this;
var _36166__$1 = this;
return self__.meta36165;
});})(owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
;

om_bootstrap.nav.t36164.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t36164.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav*";
});})(owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
;

om_bootstrap.nav.t36164.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t36164.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__36167 = om.core.get_props.call(null,self__.owner);
var map__36167__$1 = ((((!((map__36167 == null)))?((((map__36167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36167):map__36167);
var opts = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__36168 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));
var bs = cljs.core.nth.call(null,vec__36168,(0),null);
var props = cljs.core.nth.call(null,vec__36168,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);
var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);
if(cljs.core.truth_((function (){var and__18872__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(and__18872__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return and__18872__auto__;
}
})())){
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else {
return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
;

om_bootstrap.nav.t36164.getBasis = ((function (owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36157","G__36157",1878128618,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map36152","map36152",-1320495219,null),new cljs.core.Symbol(null,"input-schema36154","input-schema36154",-302663729,null),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),new cljs.core.Symbol(null,"input-checker36155","input-checker36155",-816681229,null),new cljs.core.Symbol(null,"output-checker36156","output-checker36156",889709976,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema36153","output-schema36153",-1052474306,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36150","constructor36150",-1292972098,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta36165","meta36165",-482240054,null)], null);
});})(owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
;

om_bootstrap.nav.t36164.cljs$lang$type = true;

om_bootstrap.nav.t36164.cljs$lang$ctorStr = "om-bootstrap.nav/t36164";

om_bootstrap.nav.t36164.cljs$lang$ctorPrWriter = ((function (owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.nav/t36164");
});})(owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
;

om_bootstrap.nav.__GT_t36164 = ((function (owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156){
return (function om_bootstrap$nav$constructor36150_$___GT_t36164(owner__$1,G__36157__$1,map36152__$1,input_schema36154__$1,validate__20206__auto____$1,input_checker36155__$1,output_checker36156__$1,ufv____$1,output_schema36153__$1,constructor36150__$1,meta36165){
return (new om_bootstrap.nav.t36164(owner__$1,G__36157__$1,map36152__$1,input_schema36154__$1,validate__20206__auto____$1,input_checker36155__$1,output_checker36156__$1,ufv____$1,output_schema36153__$1,constructor36150__$1,meta36165));
});})(owner,validate__20206__auto__,ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
;

}

return (new om_bootstrap.nav.t36164(owner,G__36157,map36152,input_schema36154,validate__20206__auto__,input_checker36155,output_checker36156,ufv__,output_schema36153,om_bootstrap$nav$constructor36150,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36182 = output_checker36156.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36182)){
var error__20208__auto___36183 = temp__4425__auto___36182;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36150","constructor36150",-1292972098,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36183)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36153,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36183], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema36153,input_schema36154,input_checker36155,output_checker36156))
,schema.core.make_fn_schema.call(null,output_schema36153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36154], null)));
})();
om_bootstrap.nav.nav_STAR_ = ((function (component_fnk__29701__auto___36178){
return (function om_bootstrap$nav$nav_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___36184 = arguments.length;
var i__19924__auto___36185 = (0);
while(true){
if((i__19924__auto___36185 < len__19923__auto___36184)){
args__19930__auto__.push((arguments[i__19924__auto___36185]));

var G__36186 = (i__19924__auto___36185 + (1));
i__19924__auto___36185 = G__36186;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___36178))
;

om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___36178){
return (function (data__29702__auto__,owner36149,p__36173){
var vec__36174 = p__36173;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__36174,(0),null);
return component_fnk__29701__auto___36178.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner36149,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___36178))
;

om_bootstrap.nav.nav_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___36178){
return (function (seq36170){
var G__36171 = cljs.core.first.call(null,seq36170);
var seq36170__$1 = cljs.core.next.call(null,seq36170);
var G__36172 = cljs.core.first.call(null,seq36170__$1);
var seq36170__$2 = cljs.core.next.call(null,seq36170__$1);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36171,G__36172,seq36170__$2);
});})(component_fnk__29701__auto___36178))
;

om_bootstrap.nav.__GT_nav_STAR_ = (function om_bootstrap$nav$__GT_nav_STAR_(){
var args36175 = [];
var len__19923__auto___36187 = arguments.length;
var i__19924__auto___36188 = (0);
while(true){
if((i__19924__auto___36188 < len__19923__auto___36187)){
args36175.push((arguments[i__19924__auto___36188]));

var G__36189 = (i__19924__auto___36188 + (1));
i__19924__auto___36188 = G__36189;
continue;
} else {
}
break;
}

var G__36177 = args36175.length;
switch (G__36177) {
case 1:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36175.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__29670__auto__);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m36151){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__29670__auto__,m36151);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___36199 = schema.utils.use_fn_validation;
var output_schema36191_36200 = om_bootstrap.types.Component;
var input_schema36192_36201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Nav","Nav",1076204984,null)], null))),schema.core.Any], null);
var input_checker36193_36202 = schema.core.checker.call(null,input_schema36192_36201);
var output_checker36194_36203 = schema.core.checker.call(null,output_schema36191_36200);
/**
 * Inputs: [opts :- Nav & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav = ((function (ufv___36199,output_schema36191_36200,input_schema36192_36201,input_checker36193_36202,output_checker36194_36203){
return (function om_bootstrap$nav$nav(){
var args__19930__auto__ = [];
var len__19923__auto___36204 = arguments.length;
var i__19924__auto___36205 = (0);
while(true){
if((i__19924__auto___36205 < len__19923__auto___36204)){
args__19930__auto__.push((arguments[i__19924__auto___36205]));

var G__36206 = (i__19924__auto___36205 + (1));
i__19924__auto___36205 = G__36206;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___36199,output_schema36191_36200,input_schema36192_36201,input_checker36193_36202,output_checker36194_36203))
;

om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36199,output_schema36191_36200,input_schema36192_36201,input_checker36193_36202,output_checker36194_36203){
return (function (G__36195,rest36196){
var validate__20206__auto__ = ufv___36199.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36207 = cljs.core.list_STAR_.call(null,G__36195,rest36196);
var temp__4425__auto___36208 = input_checker36193_36202.call(null,args__20207__auto___36207);
if(cljs.core.truth_(temp__4425__auto___36208)){
var error__20208__auto___36209 = temp__4425__auto___36208;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36209)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36192_36201,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36207,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36209], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__36195;
var children = rest36196;
while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36210 = output_checker36194_36203.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36210)){
var error__20208__auto___36211 = temp__4425__auto___36210;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36191_36200,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36211], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___36199,output_schema36191_36200,input_schema36192_36201,input_checker36193_36202,output_checker36194_36203))
;

om_bootstrap.nav.nav.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav.cljs$lang$applyTo = ((function (ufv___36199,output_schema36191_36200,input_schema36192_36201,input_checker36193_36202,output_checker36194_36203){
return (function (seq36197){
var G__36198 = cljs.core.first.call(null,seq36197);
var seq36197__$1 = cljs.core.next.call(null,seq36197);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic(G__36198,seq36197__$1);
});})(ufv___36199,output_schema36191_36200,input_schema36192_36201,input_checker36193_36202,output_checker36194_36203))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema36191_36200,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36192_36201], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function om_bootstrap$nav$render_toggle_button(owner,bs){
var handle_toggle = (function (){
var temp__4425__auto___36212 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___36212)){
var f_36213 = temp__4425__auto___36212;
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);

f_36213.call(null);

om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else {
}

return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582)], null),cljs.core.not);
});
var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));
return cljs.core.apply.call(null,React.DOM.button,{"className": "navbar-toggle", "type": "button", "onClick": om_tools.dom.format_opts.call(null,handle_toggle)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__18884__auto__ = tb;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "sr-only", "key": (0)},"Toggle navigation"),React.DOM.span({"className": "icon-bar", "key": (1)}),React.DOM.span({"className": "icon-bar", "key": (2)}),React.DOM.span({"className": "icon-bar", "key": (3)})], null);
}
})()],null))));
});
var ufv___36219 = schema.utils.use_fn_validation;
var output_schema36214_36220 = schema.core.Bool;
var input_schema36215_36221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36216_36222 = schema.core.checker.call(null,input_schema36215_36221);
var output_checker36217_36223 = schema.core.checker.call(null,output_schema36214_36220);
/**
 * Inputs: [bs]
 * Returns: s/Bool
 * 
 * Returns true if any of the necessary properties are in place to
 * render the navbar-header and toggle button.
 */
om_bootstrap.nav.render_header_and_toggle_btn_QMARK_ = ((function (ufv___36219,output_schema36214_36220,input_schema36215_36221,input_checker36216_36222,output_checker36217_36223){
return (function om_bootstrap$nav$render_header_and_toggle_btn_QMARK_(G__36218){
var validate__20206__auto__ = ufv___36219.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36218], null);
var temp__4425__auto___36225 = input_checker36216_36222.call(null,args__20207__auto___36224);
if(cljs.core.truth_(temp__4425__auto___36225)){
var error__20208__auto___36226 = temp__4425__auto___36225;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any of the necessary properties are in place to\n  render the navbar-header and toggle button."], null)),cljs.core.pr_str.call(null,error__20208__auto___36226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36215_36221,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36224,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36226], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var bs = G__36218;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__18884__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
var or__18884__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__18884__auto____$1)){
return or__18884__auto____$1;
} else {
return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36227 = output_checker36217_36223.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36227)){
var error__20208__auto___36228 = temp__4425__auto___36227;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any of the necessary properties are in place to\n  render the navbar-header and toggle button."], null)),cljs.core.pr_str.call(null,error__20208__auto___36228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36214_36220,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36228], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___36219,output_schema36214_36220,input_schema36215_36221,input_checker36216_36222,output_checker36217_36223))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.render_header_and_toggle_btn_QMARK_),schema.core.make_fn_schema.call(null,output_schema36214_36220,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36215_36221], null)));
om_bootstrap.nav.render_header = (function om_bootstrap$nav$render_header(owner,bs){
return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
om_bootstrap.nav.render_navbar_child = (function om_bootstrap$nav$render_navbar_child(owner,child,bs){
var f = (function (props){
var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);
var collapsible_QMARK_ = (function (){var or__18884__auto__ = new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
}
})();
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__18872__auto__ = collapsible_QMARK_;
if(cljs.core.truth_(and__18872__auto__)){
var or__18884__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else {
return and__18872__auto__;
}
})()], null);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});
return om_bootstrap.util.clone_with_props.call(null,child,f);
});

var component_fnk__29701__auto___36256 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema36235 = schema.core.Any;
var input_schema36236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map36233","map36233",2008539920,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker36237 = schema.core.checker.call(null,input_schema36236);
var output_checker36238 = schema.core.checker.call(null,output_schema36235);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function om_bootstrap$nav$constructor36231(G__36239){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36239], null);
var temp__4425__auto___36258 = input_checker36237.call(null,args__20207__auto___36257);
if(cljs.core.truth_(temp__4425__auto___36258)){
var error__20208__auto___36259 = temp__4425__auto___36258;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36231","constructor36231",1045060510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36236,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36257,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36259], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map36233 = G__36239;
while(true){
if(cljs.core.map_QMARK_.call(null,map36233)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map36233)));
}

var map36234 = plumbing.fnk.schema.safe_get.call(null,map36233,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map36234,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map36234,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map36233,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t36244 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t36244 = (function (input_checker36237,owner,output_checker36238,children,validate__20206__auto__,map36233,input_schema36236,G__36239,output_schema36235,map36234,opts,ufv__,constructor36231,meta36245){
this.input_checker36237 = input_checker36237;
this.owner = owner;
this.output_checker36238 = output_checker36238;
this.children = children;
this.validate__20206__auto__ = validate__20206__auto__;
this.map36233 = map36233;
this.input_schema36236 = input_schema36236;
this.G__36239 = G__36239;
this.output_schema36235 = output_schema36235;
this.map36234 = map36234;
this.opts = opts;
this.ufv__ = ufv__;
this.constructor36231 = constructor36231;
this.meta36245 = meta36245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t36244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (_36246,meta36245__$1){
var self__ = this;
var _36246__$1 = this;
return (new om_bootstrap.nav.t36244(self__.input_checker36237,self__.owner,self__.output_checker36238,self__.children,self__.validate__20206__auto__,self__.map36233,self__.input_schema36236,self__.G__36239,self__.output_schema36235,self__.map36234,self__.opts,self__.ufv__,self__.constructor36231,meta36245__$1));
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.t36244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (_36246){
var self__ = this;
var _36246__$1 = this;
return self__.meta36245;
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.t36244.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t36244.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (_){
var self__ = this;
var ___$1 = this;
return "navbar*";
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.t36244.prototype.om$core$IInitState$ = true;

om_bootstrap.nav.t36244.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.t36244.prototype.om$core$IShouldUpdate$ = true;

om_bootstrap.nav.t36244.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (_,___$1,next_state){
var self__ = this;
var ___$2 = this;
return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.t36244.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t36244.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__36247 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function() { 
var G__36260__delegate = function (opts__$1,c){
return om_tools.dom.element.call(null,React.DOM.nav,opts__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__36260 = function (opts__$1,var_args){
var c = null;
if (arguments.length > 1) {
var G__36261__i = 0, G__36261__a = new Array(arguments.length -  1);
while (G__36261__i < G__36261__a.length) {G__36261__a[G__36261__i] = arguments[G__36261__i + 1]; ++G__36261__i;}
  c = new cljs.core.IndexedSeq(G__36261__a,0);
} 
return G__36260__delegate.call(this,opts__$1,c);};
G__36260.cljs$lang$maxFixedArity = 1;
G__36260.cljs$lang$applyTo = (function (arglist__36262){
var opts__$1 = cljs.core.first(arglist__36262);
var c = cljs.core.rest(arglist__36262);
return G__36260__delegate(opts__$1,c);
});
G__36260.cljs$core$IFn$_invoke$arity$variadic = G__36260__delegate;
return G__36260;
})()
;})(___$1,owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
], null));
var bs = cljs.core.nth.call(null,vec__36247,(0),null);
var props = cljs.core.nth.call(null,vec__36247,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__36247,bs,props,classes,___$1,owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (p1__36229_SHARP_){
return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__36229_SHARP_,bs);
});})(vec__36247,bs,props,classes,___$1,owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
,self__.children)],null)))));
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.t36244.getBasis = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker36237","input-checker36237",-986610975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker36238","output-checker36238",207424936,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),new cljs.core.Symbol(null,"map36233","map36233",2008539920,null),new cljs.core.Symbol(null,"input-schema36236","input-schema36236",-1642376204,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36239","G__36239",1296528277,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema36235","output-schema36235",-773381162,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map36234","map36234",1288785752,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36231","constructor36231",1045060510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta36245","meta36245",-1588645322,null)], null);
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.t36244.cljs$lang$type = true;

om_bootstrap.nav.t36244.cljs$lang$ctorStr = "om-bootstrap.nav/t36244";

om_bootstrap.nav.t36244.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.nav/t36244");
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

om_bootstrap.nav.__GT_t36244 = ((function (owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238){
return (function om_bootstrap$nav$constructor36231_$___GT_t36244(input_checker36237__$1,owner__$1,output_checker36238__$1,children__$1,validate__20206__auto____$1,map36233__$1,input_schema36236__$1,G__36239__$1,output_schema36235__$1,map36234__$1,opts__$1,ufv____$1,constructor36231__$1,meta36245){
return (new om_bootstrap.nav.t36244(input_checker36237__$1,owner__$1,output_checker36238__$1,children__$1,validate__20206__auto____$1,map36233__$1,input_schema36236__$1,G__36239__$1,output_schema36235__$1,map36234__$1,opts__$1,ufv____$1,constructor36231__$1,meta36245));
});})(owner,children,opts,map36234,validate__20206__auto__,ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
;

}

return (new om_bootstrap.nav.t36244(input_checker36237,owner,output_checker36238,children,validate__20206__auto__,map36233,input_schema36236,G__36239,output_schema36235,map36234,opts,ufv__,om_bootstrap$nav$constructor36231,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36263 = output_checker36238.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36263)){
var error__20208__auto___36264 = temp__4425__auto___36263;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36231","constructor36231",1045060510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36264)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36235,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36264], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema36235,input_schema36236,input_checker36237,output_checker36238))
,schema.core.make_fn_schema.call(null,output_schema36235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36236], null)));
})();
om_bootstrap.nav.navbar_STAR_ = ((function (component_fnk__29701__auto___36256){
return (function om_bootstrap$nav$navbar_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___36265 = arguments.length;
var i__19924__auto___36266 = (0);
while(true){
if((i__19924__auto___36266 < len__19923__auto___36265)){
args__19930__auto__.push((arguments[i__19924__auto___36266]));

var G__36267 = (i__19924__auto___36266 + (1));
i__19924__auto___36266 = G__36267;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___36256))
;

om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___36256){
return (function (data__29702__auto__,owner36230,p__36251){
var vec__36252 = p__36251;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__36252,(0),null);
return component_fnk__29701__auto___36256.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner36230,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___36256))
;

om_bootstrap.nav.navbar_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.navbar_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___36256){
return (function (seq36248){
var G__36249 = cljs.core.first.call(null,seq36248);
var seq36248__$1 = cljs.core.next.call(null,seq36248);
var G__36250 = cljs.core.first.call(null,seq36248__$1);
var seq36248__$2 = cljs.core.next.call(null,seq36248__$1);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36249,G__36250,seq36248__$2);
});})(component_fnk__29701__auto___36256))
;

om_bootstrap.nav.__GT_navbar_STAR_ = (function om_bootstrap$nav$__GT_navbar_STAR_(){
var args36253 = [];
var len__19923__auto___36268 = arguments.length;
var i__19924__auto___36269 = (0);
while(true){
if((i__19924__auto___36269 < len__19923__auto___36268)){
args36253.push((arguments[i__19924__auto___36269]));

var G__36270 = (i__19924__auto___36269 + (1));
i__19924__auto___36269 = G__36270;
continue;
} else {
}
break;
}

var G__36255 = args36253.length;
switch (G__36255) {
case 1:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36253.length)].join('')));

}
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__29670__auto__);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m36232){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__29670__auto__,m36232);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___36280 = schema.utils.use_fn_validation;
var output_schema36272_36281 = schema.core.Any;
var input_schema36273_36282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NavBar","NavBar",-375065540,null)], null))),schema.core.Any], null);
var input_checker36274_36283 = schema.core.checker.call(null,input_schema36273_36282);
var output_checker36275_36284 = schema.core.checker.call(null,output_schema36272_36281);
/**
 * Inputs: [opts :- NavBar & children]
 */
om_bootstrap.nav.navbar = ((function (ufv___36280,output_schema36272_36281,input_schema36273_36282,input_checker36274_36283,output_checker36275_36284){
return (function om_bootstrap$nav$navbar(){
var args__19930__auto__ = [];
var len__19923__auto___36285 = arguments.length;
var i__19924__auto___36286 = (0);
while(true){
if((i__19924__auto___36286 < len__19923__auto___36285)){
args__19930__auto__.push((arguments[i__19924__auto___36286]));

var G__36287 = (i__19924__auto___36286 + (1));
i__19924__auto___36286 = G__36287;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___36280,output_schema36272_36281,input_schema36273_36282,input_checker36274_36283,output_checker36275_36284))
;

om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36280,output_schema36272_36281,input_schema36273_36282,input_checker36274_36283,output_checker36275_36284){
return (function (G__36276,rest36277){
var validate__20206__auto__ = ufv___36280.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___36288 = cljs.core.list_STAR_.call(null,G__36276,rest36277);
var temp__4425__auto___36289 = input_checker36274_36283.call(null,args__20207__auto___36288);
if(cljs.core.truth_(temp__4425__auto___36289)){
var error__20208__auto___36290 = temp__4425__auto___36289;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36290)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36273_36282,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___36288,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36290], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__36276;
var children = rest36277;
while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___36291 = output_checker36275_36284.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___36291)){
var error__20208__auto___36292 = temp__4425__auto___36291;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___36292)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36272_36281,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___36292], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___36280,output_schema36272_36281,input_schema36273_36282,input_checker36274_36283,output_checker36275_36284))
;

om_bootstrap.nav.navbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.navbar.cljs$lang$applyTo = ((function (ufv___36280,output_schema36272_36281,input_schema36273_36282,input_checker36274_36283,output_checker36275_36284){
return (function (seq36278){
var G__36279 = cljs.core.first.call(null,seq36278);
var seq36278__$1 = cljs.core.next.call(null,seq36278);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic(G__36279,seq36278__$1);
});})(ufv___36280,output_schema36272_36281,input_schema36273_36282,input_checker36274_36283,output_checker36275_36284))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema36272_36281,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36273_36282], null)));

//# sourceMappingURL=nav.js.map?rel=1445816815689