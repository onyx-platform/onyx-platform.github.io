// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___33676 = schema.utils.use_fn_validation;
var output_schema33669_33677 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema33670_33678 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker33671_33679 = schema.core.checker.call(null,input_schema33670_33678);
var output_checker33672_33680 = schema.core.checker.call(null,output_schema33669_33677);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 * Returns: (s/=> s/Any)
 * 
 * Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680){
return (function om_bootstrap$mixins$event_listener(G__33673,G__33674,G__33675){
var validate__20206__auto__ = ufv___33676.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33673,G__33674,G__33675], null);
var temp__4425__auto___33682 = input_checker33671_33679.call(null,args__20207__auto___33681);
if(cljs.core.truth_(temp__4425__auto___33682)){
var error__20208__auto___33683 = temp__4425__auto___33682;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__20208__auto___33683)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33670_33678,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33681,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33683], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var target = G__33673;
var event_type = G__33674;
var callback = G__33675;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__20206__auto__,ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__20206__auto__,ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__20206__auto__,ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__20206__auto__,ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680))
} else {
return ((function (validate__20206__auto__,ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680){
return (function (){
return null;
});
;})(validate__20206__auto__,ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680))

}
}
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33684 = output_checker33672_33680.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33684)){
var error__20208__auto___33685 = temp__4425__auto___33684;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__20208__auto___33685)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33669_33677,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33685], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33676,output_schema33669_33677,input_schema33670_33678,input_checker33671_33679,output_checker33672_33680))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema33669_33677,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33670_33678], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this33686 = this;
return ((function (this33686){
return (function (owner){
return owner.listeners = [];
});})(this33686))
.call(null,this33686);
}), "componentWillUnmount": (function (){
var this33687 = this;
return ((function (this33687){
return (function (owner){
var seq__33692 = cljs.core.seq.call(null,owner.listeners);
var chunk__33693 = null;
var count__33694 = (0);
var i__33695 = (0);
while(true){
if((i__33695 < count__33694)){
var l = cljs.core._nth.call(null,chunk__33693,i__33695);
l.call(null);

var G__33696 = seq__33692;
var G__33697 = chunk__33693;
var G__33698 = count__33694;
var G__33699 = (i__33695 + (1));
seq__33692 = G__33696;
chunk__33693 = G__33697;
count__33694 = G__33698;
i__33695 = G__33699;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33692);
if(temp__4425__auto__){
var seq__33692__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33692__$1)){
var c__19668__auto__ = cljs.core.chunk_first.call(null,seq__33692__$1);
var G__33700 = cljs.core.chunk_rest.call(null,seq__33692__$1);
var G__33701 = c__19668__auto__;
var G__33702 = cljs.core.count.call(null,c__19668__auto__);
var G__33703 = (0);
seq__33692 = G__33700;
chunk__33693 = G__33701;
count__33694 = G__33702;
i__33695 = G__33703;
continue;
} else {
var l = cljs.core.first.call(null,seq__33692__$1);
l.call(null);

var G__33704 = cljs.core.next.call(null,seq__33692__$1);
var G__33705 = null;
var G__33706 = (0);
var G__33707 = (0);
seq__33692 = G__33704;
chunk__33693 = G__33705;
count__33694 = G__33706;
i__33695 = G__33707;
continue;
}
} else {
return null;
}
}
break;
}
});})(this33687))
.call(null,this33687);
}), "set_listener": (function (target33689,event_type33690,callback33691){
var this33688 = this;
return ((function (this33688){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this33688))
.call(null,this33688,target33689,event_type33690,callback33691);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this33709 = this;
return ((function (this33709){
return (function (owner){
return owner.timeouts = [];
});})(this33709))
.call(null,this33709);
}), "componentWillUnmount": (function (){
var this33710 = this;
return ((function (this33710){
return (function (owner){
return owner.timeouts.map(((function (this33710){
return (function (p1__33708_SHARP_){
return clearTimeout(p1__33708_SHARP_);
});})(this33710))
);
});})(this33710))
.call(null,this33710);
}), "set_timeout": (function (f33712,timeout33713){
var this33711 = this;
return ((function (this33711){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this33711))
.call(null,this33711,f33712,timeout33713);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 * nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__33714 = node__$1.parentNode;
node__$1 = G__33714;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 * `:open?` state to false if the user clicks outside the owning
 * component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 * registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4425__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4425__auto__)){
var listeners = temp__4425__auto__;
var seq__33719_33723 = cljs.core.seq.call(null,listeners);
var chunk__33720_33724 = null;
var count__33721_33725 = (0);
var i__33722_33726 = (0);
while(true){
if((i__33722_33726 < count__33721_33725)){
var l_33727 = cljs.core._nth.call(null,chunk__33720_33724,i__33722_33726);
l_33727.call(null);

var G__33728 = seq__33719_33723;
var G__33729 = chunk__33720_33724;
var G__33730 = count__33721_33725;
var G__33731 = (i__33722_33726 + (1));
seq__33719_33723 = G__33728;
chunk__33720_33724 = G__33729;
count__33721_33725 = G__33730;
i__33722_33726 = G__33731;
continue;
} else {
var temp__4425__auto___33732__$1 = cljs.core.seq.call(null,seq__33719_33723);
if(temp__4425__auto___33732__$1){
var seq__33719_33733__$1 = temp__4425__auto___33732__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33719_33733__$1)){
var c__19668__auto___33734 = cljs.core.chunk_first.call(null,seq__33719_33733__$1);
var G__33735 = cljs.core.chunk_rest.call(null,seq__33719_33733__$1);
var G__33736 = c__19668__auto___33734;
var G__33737 = cljs.core.count.call(null,c__19668__auto___33734);
var G__33738 = (0);
seq__33719_33723 = G__33735;
chunk__33720_33724 = G__33736;
count__33721_33725 = G__33737;
i__33722_33726 = G__33738;
continue;
} else {
var l_33739 = cljs.core.first.call(null,seq__33719_33733__$1);
l_33739.call(null);

var G__33740 = cljs.core.next.call(null,seq__33719_33733__$1);
var G__33741 = null;
var G__33742 = (0);
var G__33743 = (0);
seq__33719_33723 = G__33740;
chunk__33720_33724 = G__33741;
count__33721_33725 = G__33742;
i__33722_33726 = G__33743;
continue;
}
} else {
}
}
break;
}

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 * clicks outside the component's owning dom element OR hits the escape
 * key, the state will jump back to false.
 * 
 * Down the road this may need to register a callback when the state
 * changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this33744 = this;
return ((function (this33744){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this33744))
.call(null,this33744);
}), "componentWillUnmount": (function (){
var this33745 = this;
return ((function (this33745){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this33745))
.call(null,this33745);
}), "isDropdownOpen": (function (){
var this33746 = this;
return ((function (this33746){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this33746))
.call(null,this33746);
}), "setDropdownState": (function (open_QMARK_33748){
var this33747 = this;
return ((function (this33747){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this33747))
.call(null,this33747,open_QMARK_33748);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this33749 = this;
return ((function (this33749){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this33749))
.call(null,this33749);
}), "isPanelCollapsed": (function (){
var this33750 = this;
return ((function (this33750){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this33750))
.call(null,this33750);
}), "toggleCollapsed": (function (){
var this33751 = this;
return ((function (this33751){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this33751))
.call(null,this33751);
})};

//# sourceMappingURL=mixins.js.map?rel=1445816810655