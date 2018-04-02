// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26678_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26678_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26679 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26680 = null;
var count__26681 = (0);
var i__26682 = (0);
while(true){
if((i__26682 < count__26681)){
var n = cljs.core._nth.call(null,chunk__26680,i__26682);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26683 = seq__26679;
var G__26684 = chunk__26680;
var G__26685 = count__26681;
var G__26686 = (i__26682 + (1));
seq__26679 = G__26683;
chunk__26680 = G__26684;
count__26681 = G__26685;
i__26682 = G__26686;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26679);
if(temp__5457__auto__){
var seq__26679__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26679__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26679__$1);
var G__26687 = cljs.core.chunk_rest.call(null,seq__26679__$1);
var G__26688 = c__4319__auto__;
var G__26689 = cljs.core.count.call(null,c__4319__auto__);
var G__26690 = (0);
seq__26679 = G__26687;
chunk__26680 = G__26688;
count__26681 = G__26689;
i__26682 = G__26690;
continue;
} else {
var n = cljs.core.first.call(null,seq__26679__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26691 = cljs.core.next.call(null,seq__26679__$1);
var G__26692 = null;
var G__26693 = (0);
var G__26694 = (0);
seq__26679 = G__26691;
chunk__26680 = G__26692;
count__26681 = G__26693;
i__26682 = G__26694;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26695){
var vec__26696 = p__26695;
var _ = cljs.core.nth.call(null,vec__26696,(0),null);
var v = cljs.core.nth.call(null,vec__26696,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__26699){
var vec__26700 = p__26699;
var k = cljs.core.nth.call(null,vec__26700,(0),null);
var v = cljs.core.nth.call(null,vec__26700,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26712_26720 = cljs.core.seq.call(null,deps);
var chunk__26713_26721 = null;
var count__26714_26722 = (0);
var i__26715_26723 = (0);
while(true){
if((i__26715_26723 < count__26714_26722)){
var dep_26724 = cljs.core._nth.call(null,chunk__26713_26721,i__26715_26723);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26724;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26724));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26724,(depth + (1)),state);
} else {
}


var G__26725 = seq__26712_26720;
var G__26726 = chunk__26713_26721;
var G__26727 = count__26714_26722;
var G__26728 = (i__26715_26723 + (1));
seq__26712_26720 = G__26725;
chunk__26713_26721 = G__26726;
count__26714_26722 = G__26727;
i__26715_26723 = G__26728;
continue;
} else {
var temp__5457__auto___26729 = cljs.core.seq.call(null,seq__26712_26720);
if(temp__5457__auto___26729){
var seq__26712_26730__$1 = temp__5457__auto___26729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26712_26730__$1)){
var c__4319__auto___26731 = cljs.core.chunk_first.call(null,seq__26712_26730__$1);
var G__26732 = cljs.core.chunk_rest.call(null,seq__26712_26730__$1);
var G__26733 = c__4319__auto___26731;
var G__26734 = cljs.core.count.call(null,c__4319__auto___26731);
var G__26735 = (0);
seq__26712_26720 = G__26732;
chunk__26713_26721 = G__26733;
count__26714_26722 = G__26734;
i__26715_26723 = G__26735;
continue;
} else {
var dep_26736 = cljs.core.first.call(null,seq__26712_26730__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26736;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26736));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26736,(depth + (1)),state);
} else {
}


var G__26737 = cljs.core.next.call(null,seq__26712_26730__$1);
var G__26738 = null;
var G__26739 = (0);
var G__26740 = (0);
seq__26712_26720 = G__26737;
chunk__26713_26721 = G__26738;
count__26714_26722 = G__26739;
i__26715_26723 = G__26740;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26716){
var vec__26717 = p__26716;
var seq__26718 = cljs.core.seq.call(null,vec__26717);
var first__26719 = cljs.core.first.call(null,seq__26718);
var seq__26718__$1 = cljs.core.next.call(null,seq__26718);
var x = first__26719;
var xs = seq__26718__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26717,seq__26718,first__26719,seq__26718__$1,x,xs,get_deps__$1){
return (function (p1__26703_SHARP_){
return clojure.set.difference.call(null,p1__26703_SHARP_,x);
});})(vec__26717,seq__26718,first__26719,seq__26718__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26741 = cljs.core.seq.call(null,provides);
var chunk__26742 = null;
var count__26743 = (0);
var i__26744 = (0);
while(true){
if((i__26744 < count__26743)){
var prov = cljs.core._nth.call(null,chunk__26742,i__26744);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26745_26753 = cljs.core.seq.call(null,requires);
var chunk__26746_26754 = null;
var count__26747_26755 = (0);
var i__26748_26756 = (0);
while(true){
if((i__26748_26756 < count__26747_26755)){
var req_26757 = cljs.core._nth.call(null,chunk__26746_26754,i__26748_26756);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26757,prov);


var G__26758 = seq__26745_26753;
var G__26759 = chunk__26746_26754;
var G__26760 = count__26747_26755;
var G__26761 = (i__26748_26756 + (1));
seq__26745_26753 = G__26758;
chunk__26746_26754 = G__26759;
count__26747_26755 = G__26760;
i__26748_26756 = G__26761;
continue;
} else {
var temp__5457__auto___26762 = cljs.core.seq.call(null,seq__26745_26753);
if(temp__5457__auto___26762){
var seq__26745_26763__$1 = temp__5457__auto___26762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26745_26763__$1)){
var c__4319__auto___26764 = cljs.core.chunk_first.call(null,seq__26745_26763__$1);
var G__26765 = cljs.core.chunk_rest.call(null,seq__26745_26763__$1);
var G__26766 = c__4319__auto___26764;
var G__26767 = cljs.core.count.call(null,c__4319__auto___26764);
var G__26768 = (0);
seq__26745_26753 = G__26765;
chunk__26746_26754 = G__26766;
count__26747_26755 = G__26767;
i__26748_26756 = G__26768;
continue;
} else {
var req_26769 = cljs.core.first.call(null,seq__26745_26763__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26769,prov);


var G__26770 = cljs.core.next.call(null,seq__26745_26763__$1);
var G__26771 = null;
var G__26772 = (0);
var G__26773 = (0);
seq__26745_26753 = G__26770;
chunk__26746_26754 = G__26771;
count__26747_26755 = G__26772;
i__26748_26756 = G__26773;
continue;
}
} else {
}
}
break;
}


var G__26774 = seq__26741;
var G__26775 = chunk__26742;
var G__26776 = count__26743;
var G__26777 = (i__26744 + (1));
seq__26741 = G__26774;
chunk__26742 = G__26775;
count__26743 = G__26776;
i__26744 = G__26777;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26741);
if(temp__5457__auto__){
var seq__26741__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26741__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26741__$1);
var G__26778 = cljs.core.chunk_rest.call(null,seq__26741__$1);
var G__26779 = c__4319__auto__;
var G__26780 = cljs.core.count.call(null,c__4319__auto__);
var G__26781 = (0);
seq__26741 = G__26778;
chunk__26742 = G__26779;
count__26743 = G__26780;
i__26744 = G__26781;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26741__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26749_26782 = cljs.core.seq.call(null,requires);
var chunk__26750_26783 = null;
var count__26751_26784 = (0);
var i__26752_26785 = (0);
while(true){
if((i__26752_26785 < count__26751_26784)){
var req_26786 = cljs.core._nth.call(null,chunk__26750_26783,i__26752_26785);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26786,prov);


var G__26787 = seq__26749_26782;
var G__26788 = chunk__26750_26783;
var G__26789 = count__26751_26784;
var G__26790 = (i__26752_26785 + (1));
seq__26749_26782 = G__26787;
chunk__26750_26783 = G__26788;
count__26751_26784 = G__26789;
i__26752_26785 = G__26790;
continue;
} else {
var temp__5457__auto___26791__$1 = cljs.core.seq.call(null,seq__26749_26782);
if(temp__5457__auto___26791__$1){
var seq__26749_26792__$1 = temp__5457__auto___26791__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26749_26792__$1)){
var c__4319__auto___26793 = cljs.core.chunk_first.call(null,seq__26749_26792__$1);
var G__26794 = cljs.core.chunk_rest.call(null,seq__26749_26792__$1);
var G__26795 = c__4319__auto___26793;
var G__26796 = cljs.core.count.call(null,c__4319__auto___26793);
var G__26797 = (0);
seq__26749_26782 = G__26794;
chunk__26750_26783 = G__26795;
count__26751_26784 = G__26796;
i__26752_26785 = G__26797;
continue;
} else {
var req_26798 = cljs.core.first.call(null,seq__26749_26792__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26798,prov);


var G__26799 = cljs.core.next.call(null,seq__26749_26792__$1);
var G__26800 = null;
var G__26801 = (0);
var G__26802 = (0);
seq__26749_26782 = G__26799;
chunk__26750_26783 = G__26800;
count__26751_26784 = G__26801;
i__26752_26785 = G__26802;
continue;
}
} else {
}
}
break;
}


var G__26803 = cljs.core.next.call(null,seq__26741__$1);
var G__26804 = null;
var G__26805 = (0);
var G__26806 = (0);
seq__26741 = G__26803;
chunk__26742 = G__26804;
count__26743 = G__26805;
i__26744 = G__26806;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26807_26811 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26808_26812 = null;
var count__26809_26813 = (0);
var i__26810_26814 = (0);
while(true){
if((i__26810_26814 < count__26809_26813)){
var ns_26815 = cljs.core._nth.call(null,chunk__26808_26812,i__26810_26814);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26815);


var G__26816 = seq__26807_26811;
var G__26817 = chunk__26808_26812;
var G__26818 = count__26809_26813;
var G__26819 = (i__26810_26814 + (1));
seq__26807_26811 = G__26816;
chunk__26808_26812 = G__26817;
count__26809_26813 = G__26818;
i__26810_26814 = G__26819;
continue;
} else {
var temp__5457__auto___26820 = cljs.core.seq.call(null,seq__26807_26811);
if(temp__5457__auto___26820){
var seq__26807_26821__$1 = temp__5457__auto___26820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26807_26821__$1)){
var c__4319__auto___26822 = cljs.core.chunk_first.call(null,seq__26807_26821__$1);
var G__26823 = cljs.core.chunk_rest.call(null,seq__26807_26821__$1);
var G__26824 = c__4319__auto___26822;
var G__26825 = cljs.core.count.call(null,c__4319__auto___26822);
var G__26826 = (0);
seq__26807_26811 = G__26823;
chunk__26808_26812 = G__26824;
count__26809_26813 = G__26825;
i__26810_26814 = G__26826;
continue;
} else {
var ns_26827 = cljs.core.first.call(null,seq__26807_26821__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26827);


var G__26828 = cljs.core.next.call(null,seq__26807_26821__$1);
var G__26829 = null;
var G__26830 = (0);
var G__26831 = (0);
seq__26807_26811 = G__26828;
chunk__26808_26812 = G__26829;
count__26809_26813 = G__26830;
i__26810_26814 = G__26831;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26832__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26833__i = 0, G__26833__a = new Array(arguments.length -  0);
while (G__26833__i < G__26833__a.length) {G__26833__a[G__26833__i] = arguments[G__26833__i + 0]; ++G__26833__i;}
  args = new cljs.core.IndexedSeq(G__26833__a,0,null);
} 
return G__26832__delegate.call(this,args);};
G__26832.cljs$lang$maxFixedArity = 0;
G__26832.cljs$lang$applyTo = (function (arglist__26834){
var args = cljs.core.seq(arglist__26834);
return G__26832__delegate(args);
});
G__26832.cljs$core$IFn$_invoke$arity$variadic = G__26832__delegate;
return G__26832;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__26835_SHARP_,p2__26836_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26835_SHARP_)].join('')),p2__26836_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__26837_SHARP_,p2__26838_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26837_SHARP_)].join(''),p2__26838_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26839 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26839.addCallback(((function (G__26839){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26839))
);

G__26839.addErrback(((function (G__26839){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26839))
);

return G__26839;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26840){if((e26840 instanceof Error)){
var e = e26840;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26840;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26841){if((e26841 instanceof Error)){
var e = e26841;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26841;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26842 = cljs.core._EQ_;
var expr__26843 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26842.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26843))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26842.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26843))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26842.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26843))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26842,expr__26843){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26842,expr__26843))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26845,callback){
var map__26846 = p__26845;
var map__26846__$1 = ((((!((map__26846 == null)))?(((((map__26846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26846):map__26846);
var file_msg = map__26846__$1;
var request_url = cljs.core.get.call(null,map__26846__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26846,map__26846__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26846,map__26846__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__){
return (function (state_26884){
var state_val_26885 = (state_26884[(1)]);
if((state_val_26885 === (7))){
var inst_26880 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26886_26912 = state_26884__$1;
(statearr_26886_26912[(2)] = inst_26880);

(statearr_26886_26912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (1))){
var state_26884__$1 = state_26884;
var statearr_26887_26913 = state_26884__$1;
(statearr_26887_26913[(2)] = null);

(statearr_26887_26913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (4))){
var inst_26850 = (state_26884[(7)]);
var inst_26850__$1 = (state_26884[(2)]);
var state_26884__$1 = (function (){var statearr_26888 = state_26884;
(statearr_26888[(7)] = inst_26850__$1);

return statearr_26888;
})();
if(cljs.core.truth_(inst_26850__$1)){
var statearr_26889_26914 = state_26884__$1;
(statearr_26889_26914[(1)] = (5));

} else {
var statearr_26890_26915 = state_26884__$1;
(statearr_26890_26915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (15))){
var inst_26863 = (state_26884[(8)]);
var inst_26865 = (state_26884[(9)]);
var inst_26867 = inst_26865.call(null,inst_26863);
var state_26884__$1 = state_26884;
var statearr_26891_26916 = state_26884__$1;
(statearr_26891_26916[(2)] = inst_26867);

(statearr_26891_26916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (13))){
var inst_26874 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26892_26917 = state_26884__$1;
(statearr_26892_26917[(2)] = inst_26874);

(statearr_26892_26917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (6))){
var state_26884__$1 = state_26884;
var statearr_26893_26918 = state_26884__$1;
(statearr_26893_26918[(2)] = null);

(statearr_26893_26918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (17))){
var inst_26871 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26894_26919 = state_26884__$1;
(statearr_26894_26919[(2)] = inst_26871);

(statearr_26894_26919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (3))){
var inst_26882 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26884__$1,inst_26882);
} else {
if((state_val_26885 === (12))){
var state_26884__$1 = state_26884;
var statearr_26895_26920 = state_26884__$1;
(statearr_26895_26920[(2)] = null);

(statearr_26895_26920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (2))){
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26885 === (11))){
var inst_26855 = (state_26884[(10)]);
var inst_26861 = figwheel.client.file_reloading.blocking_load.call(null,inst_26855);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(14),inst_26861);
} else {
if((state_val_26885 === (9))){
var inst_26855 = (state_26884[(10)]);
var state_26884__$1 = state_26884;
if(cljs.core.truth_(inst_26855)){
var statearr_26896_26921 = state_26884__$1;
(statearr_26896_26921[(1)] = (11));

} else {
var statearr_26897_26922 = state_26884__$1;
(statearr_26897_26922[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (5))){
var inst_26850 = (state_26884[(7)]);
var inst_26856 = (state_26884[(11)]);
var inst_26855 = cljs.core.nth.call(null,inst_26850,(0),null);
var inst_26856__$1 = cljs.core.nth.call(null,inst_26850,(1),null);
var state_26884__$1 = (function (){var statearr_26898 = state_26884;
(statearr_26898[(10)] = inst_26855);

(statearr_26898[(11)] = inst_26856__$1);

return statearr_26898;
})();
if(cljs.core.truth_(inst_26856__$1)){
var statearr_26899_26923 = state_26884__$1;
(statearr_26899_26923[(1)] = (8));

} else {
var statearr_26900_26924 = state_26884__$1;
(statearr_26900_26924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (14))){
var inst_26855 = (state_26884[(10)]);
var inst_26865 = (state_26884[(9)]);
var inst_26863 = (state_26884[(2)]);
var inst_26864 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26865__$1 = cljs.core.get.call(null,inst_26864,inst_26855);
var state_26884__$1 = (function (){var statearr_26901 = state_26884;
(statearr_26901[(8)] = inst_26863);

(statearr_26901[(9)] = inst_26865__$1);

return statearr_26901;
})();
if(cljs.core.truth_(inst_26865__$1)){
var statearr_26902_26925 = state_26884__$1;
(statearr_26902_26925[(1)] = (15));

} else {
var statearr_26903_26926 = state_26884__$1;
(statearr_26903_26926[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (16))){
var inst_26863 = (state_26884[(8)]);
var inst_26869 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26863);
var state_26884__$1 = state_26884;
var statearr_26904_26927 = state_26884__$1;
(statearr_26904_26927[(2)] = inst_26869);

(statearr_26904_26927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (10))){
var inst_26876 = (state_26884[(2)]);
var state_26884__$1 = (function (){var statearr_26905 = state_26884;
(statearr_26905[(12)] = inst_26876);

return statearr_26905;
})();
var statearr_26906_26928 = state_26884__$1;
(statearr_26906_26928[(2)] = null);

(statearr_26906_26928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (8))){
var inst_26856 = (state_26884[(11)]);
var inst_26858 = eval(inst_26856);
var state_26884__$1 = state_26884;
var statearr_26907_26929 = state_26884__$1;
(statearr_26907_26929[(2)] = inst_26858);

(statearr_26907_26929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23411__auto__))
;
return ((function (switch__22892__auto__,c__23411__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22893__auto__ = null;
var figwheel$client$file_reloading$state_machine__22893__auto____0 = (function (){
var statearr_26908 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26908[(0)] = figwheel$client$file_reloading$state_machine__22893__auto__);

(statearr_26908[(1)] = (1));

return statearr_26908;
});
var figwheel$client$file_reloading$state_machine__22893__auto____1 = (function (state_26884){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_26884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e26909){if((e26909 instanceof Object)){
var ex__22896__auto__ = e26909;
var statearr_26910_26930 = state_26884;
(statearr_26910_26930[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26931 = state_26884;
state_26884 = G__26931;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22893__auto__ = function(state_26884){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22893__auto____1.call(this,state_26884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22893__auto____0;
figwheel$client$file_reloading$state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22893__auto____1;
return figwheel$client$file_reloading$state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__))
})();
var state__23413__auto__ = (function (){var statearr_26911 = f__23412__auto__.call(null);
(statearr_26911[(6)] = c__23411__auto__);

return statearr_26911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__))
);

return c__23411__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26933 = arguments.length;
switch (G__26933) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26935,callback){
var map__26936 = p__26935;
var map__26936__$1 = ((((!((map__26936 == null)))?(((((map__26936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26936):map__26936);
var file_msg = map__26936__$1;
var namespace = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26936,map__26936__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26936,map__26936__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26938){
var map__26939 = p__26938;
var map__26939__$1 = ((((!((map__26939 == null)))?(((((map__26939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26939):map__26939);
var file_msg = map__26939__$1;
var namespace = cljs.core.get.call(null,map__26939__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26941){
var map__26942 = p__26941;
var map__26942__$1 = ((((!((map__26942 == null)))?(((((map__26942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26942):map__26942);
var file_msg = map__26942__$1;
var namespace = cljs.core.get.call(null,map__26942__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26944,callback){
var map__26945 = p__26944;
var map__26945__$1 = ((((!((map__26945 == null)))?(((((map__26945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26945):map__26945);
var file_msg = map__26945__$1;
var request_url = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23411__auto___26995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___26995,out){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___26995,out){
return (function (state_26980){
var state_val_26981 = (state_26980[(1)]);
if((state_val_26981 === (1))){
var inst_26954 = cljs.core.seq.call(null,files);
var inst_26955 = cljs.core.first.call(null,inst_26954);
var inst_26956 = cljs.core.next.call(null,inst_26954);
var inst_26957 = files;
var state_26980__$1 = (function (){var statearr_26982 = state_26980;
(statearr_26982[(7)] = inst_26956);

(statearr_26982[(8)] = inst_26955);

(statearr_26982[(9)] = inst_26957);

return statearr_26982;
})();
var statearr_26983_26996 = state_26980__$1;
(statearr_26983_26996[(2)] = null);

(statearr_26983_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (2))){
var inst_26963 = (state_26980[(10)]);
var inst_26957 = (state_26980[(9)]);
var inst_26962 = cljs.core.seq.call(null,inst_26957);
var inst_26963__$1 = cljs.core.first.call(null,inst_26962);
var inst_26964 = cljs.core.next.call(null,inst_26962);
var inst_26965 = (inst_26963__$1 == null);
var inst_26966 = cljs.core.not.call(null,inst_26965);
var state_26980__$1 = (function (){var statearr_26984 = state_26980;
(statearr_26984[(11)] = inst_26964);

(statearr_26984[(10)] = inst_26963__$1);

return statearr_26984;
})();
if(inst_26966){
var statearr_26985_26997 = state_26980__$1;
(statearr_26985_26997[(1)] = (4));

} else {
var statearr_26986_26998 = state_26980__$1;
(statearr_26986_26998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (3))){
var inst_26978 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26980__$1,inst_26978);
} else {
if((state_val_26981 === (4))){
var inst_26963 = (state_26980[(10)]);
var inst_26968 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26963);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26980__$1,(7),inst_26968);
} else {
if((state_val_26981 === (5))){
var inst_26974 = cljs.core.async.close_BANG_.call(null,out);
var state_26980__$1 = state_26980;
var statearr_26987_26999 = state_26980__$1;
(statearr_26987_26999[(2)] = inst_26974);

(statearr_26987_26999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (6))){
var inst_26976 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26988_27000 = state_26980__$1;
(statearr_26988_27000[(2)] = inst_26976);

(statearr_26988_27000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (7))){
var inst_26964 = (state_26980[(11)]);
var inst_26970 = (state_26980[(2)]);
var inst_26971 = cljs.core.async.put_BANG_.call(null,out,inst_26970);
var inst_26957 = inst_26964;
var state_26980__$1 = (function (){var statearr_26989 = state_26980;
(statearr_26989[(12)] = inst_26971);

(statearr_26989[(9)] = inst_26957);

return statearr_26989;
})();
var statearr_26990_27001 = state_26980__$1;
(statearr_26990_27001[(2)] = null);

(statearr_26990_27001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23411__auto___26995,out))
;
return ((function (switch__22892__auto__,c__23411__auto___26995,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto____0 = (function (){
var statearr_26991 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26991[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto__);

(statearr_26991[(1)] = (1));

return statearr_26991;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto____1 = (function (state_26980){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_26980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e26992){if((e26992 instanceof Object)){
var ex__22896__auto__ = e26992;
var statearr_26993_27002 = state_26980;
(statearr_26993_27002[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27003 = state_26980;
state_26980 = G__27003;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto__ = function(state_26980){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto____1.call(this,state_26980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___26995,out))
})();
var state__23413__auto__ = (function (){var statearr_26994 = f__23412__auto__.call(null);
(statearr_26994[(6)] = c__23411__auto___26995);

return statearr_26994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___26995,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27004,opts){
var map__27005 = p__27004;
var map__27005__$1 = ((((!((map__27005 == null)))?(((((map__27005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);
var eval_body = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27007){var e = e27007;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27008_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27008_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27009){
var vec__27010 = p__27009;
var k = cljs.core.nth.call(null,vec__27010,(0),null);
var v = cljs.core.nth.call(null,vec__27010,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27013){
var vec__27014 = p__27013;
var k = cljs.core.nth.call(null,vec__27014,(0),null);
var v = cljs.core.nth.call(null,vec__27014,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27020,p__27021){
var map__27022 = p__27020;
var map__27022__$1 = ((((!((map__27022 == null)))?(((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var opts = map__27022__$1;
var before_jsload = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27023 = p__27021;
var map__27023__$1 = ((((!((map__27023 == null)))?(((((map__27023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27023):map__27023);
var msg = map__27023__$1;
var files = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27177){
var state_val_27178 = (state_27177[(1)]);
if((state_val_27178 === (7))){
var inst_27037 = (state_27177[(7)]);
var inst_27039 = (state_27177[(8)]);
var inst_27038 = (state_27177[(9)]);
var inst_27040 = (state_27177[(10)]);
var inst_27045 = cljs.core._nth.call(null,inst_27038,inst_27040);
var inst_27046 = figwheel.client.file_reloading.eval_body.call(null,inst_27045,opts);
var inst_27047 = (inst_27040 + (1));
var tmp27179 = inst_27037;
var tmp27180 = inst_27039;
var tmp27181 = inst_27038;
var inst_27037__$1 = tmp27179;
var inst_27038__$1 = tmp27181;
var inst_27039__$1 = tmp27180;
var inst_27040__$1 = inst_27047;
var state_27177__$1 = (function (){var statearr_27182 = state_27177;
(statearr_27182[(7)] = inst_27037__$1);

(statearr_27182[(8)] = inst_27039__$1);

(statearr_27182[(9)] = inst_27038__$1);

(statearr_27182[(11)] = inst_27046);

(statearr_27182[(10)] = inst_27040__$1);

return statearr_27182;
})();
var statearr_27183_27266 = state_27177__$1;
(statearr_27183_27266[(2)] = null);

(statearr_27183_27266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (20))){
var inst_27080 = (state_27177[(12)]);
var inst_27088 = figwheel.client.file_reloading.sort_files.call(null,inst_27080);
var state_27177__$1 = state_27177;
var statearr_27184_27267 = state_27177__$1;
(statearr_27184_27267[(2)] = inst_27088);

(statearr_27184_27267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (27))){
var state_27177__$1 = state_27177;
var statearr_27185_27268 = state_27177__$1;
(statearr_27185_27268[(2)] = null);

(statearr_27185_27268[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (1))){
var inst_27029 = (state_27177[(13)]);
var inst_27026 = before_jsload.call(null,files);
var inst_27027 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27028 = (function (){return ((function (inst_27029,inst_27026,inst_27027,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27017_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27017_SHARP_);
});
;})(inst_27029,inst_27026,inst_27027,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27029__$1 = cljs.core.filter.call(null,inst_27028,files);
var inst_27030 = cljs.core.not_empty.call(null,inst_27029__$1);
var state_27177__$1 = (function (){var statearr_27186 = state_27177;
(statearr_27186[(14)] = inst_27026);

(statearr_27186[(15)] = inst_27027);

(statearr_27186[(13)] = inst_27029__$1);

return statearr_27186;
})();
if(cljs.core.truth_(inst_27030)){
var statearr_27187_27269 = state_27177__$1;
(statearr_27187_27269[(1)] = (2));

} else {
var statearr_27188_27270 = state_27177__$1;
(statearr_27188_27270[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (24))){
var state_27177__$1 = state_27177;
var statearr_27189_27271 = state_27177__$1;
(statearr_27189_27271[(2)] = null);

(statearr_27189_27271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (39))){
var inst_27130 = (state_27177[(16)]);
var state_27177__$1 = state_27177;
var statearr_27190_27272 = state_27177__$1;
(statearr_27190_27272[(2)] = inst_27130);

(statearr_27190_27272[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (46))){
var inst_27172 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
var statearr_27191_27273 = state_27177__$1;
(statearr_27191_27273[(2)] = inst_27172);

(statearr_27191_27273[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (4))){
var inst_27074 = (state_27177[(2)]);
var inst_27075 = cljs.core.List.EMPTY;
var inst_27076 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27075);
var inst_27077 = (function (){return ((function (inst_27074,inst_27075,inst_27076,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27018_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27018_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27018_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27018_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27074,inst_27075,inst_27076,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27078 = cljs.core.filter.call(null,inst_27077,files);
var inst_27079 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27080 = cljs.core.concat.call(null,inst_27078,inst_27079);
var state_27177__$1 = (function (){var statearr_27192 = state_27177;
(statearr_27192[(17)] = inst_27076);

(statearr_27192[(12)] = inst_27080);

(statearr_27192[(18)] = inst_27074);

return statearr_27192;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27193_27274 = state_27177__$1;
(statearr_27193_27274[(1)] = (16));

} else {
var statearr_27194_27275 = state_27177__$1;
(statearr_27194_27275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (15))){
var inst_27064 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
var statearr_27195_27276 = state_27177__$1;
(statearr_27195_27276[(2)] = inst_27064);

(statearr_27195_27276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (21))){
var inst_27090 = (state_27177[(19)]);
var inst_27090__$1 = (state_27177[(2)]);
var inst_27091 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27090__$1);
var state_27177__$1 = (function (){var statearr_27196 = state_27177;
(statearr_27196[(19)] = inst_27090__$1);

return statearr_27196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27177__$1,(22),inst_27091);
} else {
if((state_val_27178 === (31))){
var inst_27175 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27177__$1,inst_27175);
} else {
if((state_val_27178 === (32))){
var inst_27130 = (state_27177[(16)]);
var inst_27135 = inst_27130.cljs$lang$protocol_mask$partition0$;
var inst_27136 = (inst_27135 & (64));
var inst_27137 = inst_27130.cljs$core$ISeq$;
var inst_27138 = (cljs.core.PROTOCOL_SENTINEL === inst_27137);
var inst_27139 = ((inst_27136) || (inst_27138));
var state_27177__$1 = state_27177;
if(cljs.core.truth_(inst_27139)){
var statearr_27197_27277 = state_27177__$1;
(statearr_27197_27277[(1)] = (35));

} else {
var statearr_27198_27278 = state_27177__$1;
(statearr_27198_27278[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (40))){
var inst_27152 = (state_27177[(20)]);
var inst_27151 = (state_27177[(2)]);
var inst_27152__$1 = cljs.core.get.call(null,inst_27151,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27153 = cljs.core.get.call(null,inst_27151,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27154 = cljs.core.not_empty.call(null,inst_27152__$1);
var state_27177__$1 = (function (){var statearr_27199 = state_27177;
(statearr_27199[(20)] = inst_27152__$1);

(statearr_27199[(21)] = inst_27153);

return statearr_27199;
})();
if(cljs.core.truth_(inst_27154)){
var statearr_27200_27279 = state_27177__$1;
(statearr_27200_27279[(1)] = (41));

} else {
var statearr_27201_27280 = state_27177__$1;
(statearr_27201_27280[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (33))){
var state_27177__$1 = state_27177;
var statearr_27202_27281 = state_27177__$1;
(statearr_27202_27281[(2)] = false);

(statearr_27202_27281[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (13))){
var inst_27050 = (state_27177[(22)]);
var inst_27054 = cljs.core.chunk_first.call(null,inst_27050);
var inst_27055 = cljs.core.chunk_rest.call(null,inst_27050);
var inst_27056 = cljs.core.count.call(null,inst_27054);
var inst_27037 = inst_27055;
var inst_27038 = inst_27054;
var inst_27039 = inst_27056;
var inst_27040 = (0);
var state_27177__$1 = (function (){var statearr_27203 = state_27177;
(statearr_27203[(7)] = inst_27037);

(statearr_27203[(8)] = inst_27039);

(statearr_27203[(9)] = inst_27038);

(statearr_27203[(10)] = inst_27040);

return statearr_27203;
})();
var statearr_27204_27282 = state_27177__$1;
(statearr_27204_27282[(2)] = null);

(statearr_27204_27282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (22))){
var inst_27094 = (state_27177[(23)]);
var inst_27098 = (state_27177[(24)]);
var inst_27090 = (state_27177[(19)]);
var inst_27093 = (state_27177[(25)]);
var inst_27093__$1 = (state_27177[(2)]);
var inst_27094__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27093__$1);
var inst_27095 = (function (){var all_files = inst_27090;
var res_SINGLEQUOTE_ = inst_27093__$1;
var res = inst_27094__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27094,inst_27098,inst_27090,inst_27093,inst_27093__$1,inst_27094__$1,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27019_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27019_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27094,inst_27098,inst_27090,inst_27093,inst_27093__$1,inst_27094__$1,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27096 = cljs.core.filter.call(null,inst_27095,inst_27093__$1);
var inst_27097 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27098__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27097);
var inst_27099 = cljs.core.not_empty.call(null,inst_27098__$1);
var state_27177__$1 = (function (){var statearr_27205 = state_27177;
(statearr_27205[(23)] = inst_27094__$1);

(statearr_27205[(26)] = inst_27096);

(statearr_27205[(24)] = inst_27098__$1);

(statearr_27205[(25)] = inst_27093__$1);

return statearr_27205;
})();
if(cljs.core.truth_(inst_27099)){
var statearr_27206_27283 = state_27177__$1;
(statearr_27206_27283[(1)] = (23));

} else {
var statearr_27207_27284 = state_27177__$1;
(statearr_27207_27284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (36))){
var state_27177__$1 = state_27177;
var statearr_27208_27285 = state_27177__$1;
(statearr_27208_27285[(2)] = false);

(statearr_27208_27285[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (41))){
var inst_27152 = (state_27177[(20)]);
var inst_27156 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27157 = cljs.core.map.call(null,inst_27156,inst_27152);
var inst_27158 = cljs.core.pr_str.call(null,inst_27157);
var inst_27159 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27158)].join('');
var inst_27160 = figwheel.client.utils.log.call(null,inst_27159);
var state_27177__$1 = state_27177;
var statearr_27209_27286 = state_27177__$1;
(statearr_27209_27286[(2)] = inst_27160);

(statearr_27209_27286[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (43))){
var inst_27153 = (state_27177[(21)]);
var inst_27163 = (state_27177[(2)]);
var inst_27164 = cljs.core.not_empty.call(null,inst_27153);
var state_27177__$1 = (function (){var statearr_27210 = state_27177;
(statearr_27210[(27)] = inst_27163);

return statearr_27210;
})();
if(cljs.core.truth_(inst_27164)){
var statearr_27211_27287 = state_27177__$1;
(statearr_27211_27287[(1)] = (44));

} else {
var statearr_27212_27288 = state_27177__$1;
(statearr_27212_27288[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (29))){
var inst_27094 = (state_27177[(23)]);
var inst_27130 = (state_27177[(16)]);
var inst_27096 = (state_27177[(26)]);
var inst_27098 = (state_27177[(24)]);
var inst_27090 = (state_27177[(19)]);
var inst_27093 = (state_27177[(25)]);
var inst_27126 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27129 = (function (){var all_files = inst_27090;
var res_SINGLEQUOTE_ = inst_27093;
var res = inst_27094;
var files_not_loaded = inst_27096;
var dependencies_that_loaded = inst_27098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27130,inst_27096,inst_27098,inst_27090,inst_27093,inst_27126,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27128){
var map__27213 = p__27128;
var map__27213__$1 = ((((!((map__27213 == null)))?(((((map__27213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27213):map__27213);
var namespace = cljs.core.get.call(null,map__27213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27130,inst_27096,inst_27098,inst_27090,inst_27093,inst_27126,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27130__$1 = cljs.core.group_by.call(null,inst_27129,inst_27096);
var inst_27132 = (inst_27130__$1 == null);
var inst_27133 = cljs.core.not.call(null,inst_27132);
var state_27177__$1 = (function (){var statearr_27215 = state_27177;
(statearr_27215[(16)] = inst_27130__$1);

(statearr_27215[(28)] = inst_27126);

return statearr_27215;
})();
if(inst_27133){
var statearr_27216_27289 = state_27177__$1;
(statearr_27216_27289[(1)] = (32));

} else {
var statearr_27217_27290 = state_27177__$1;
(statearr_27217_27290[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (44))){
var inst_27153 = (state_27177[(21)]);
var inst_27166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27153);
var inst_27167 = cljs.core.pr_str.call(null,inst_27166);
var inst_27168 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27167)].join('');
var inst_27169 = figwheel.client.utils.log.call(null,inst_27168);
var state_27177__$1 = state_27177;
var statearr_27218_27291 = state_27177__$1;
(statearr_27218_27291[(2)] = inst_27169);

(statearr_27218_27291[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (6))){
var inst_27071 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
var statearr_27219_27292 = state_27177__$1;
(statearr_27219_27292[(2)] = inst_27071);

(statearr_27219_27292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (28))){
var inst_27096 = (state_27177[(26)]);
var inst_27123 = (state_27177[(2)]);
var inst_27124 = cljs.core.not_empty.call(null,inst_27096);
var state_27177__$1 = (function (){var statearr_27220 = state_27177;
(statearr_27220[(29)] = inst_27123);

return statearr_27220;
})();
if(cljs.core.truth_(inst_27124)){
var statearr_27221_27293 = state_27177__$1;
(statearr_27221_27293[(1)] = (29));

} else {
var statearr_27222_27294 = state_27177__$1;
(statearr_27222_27294[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (25))){
var inst_27094 = (state_27177[(23)]);
var inst_27110 = (state_27177[(2)]);
var inst_27111 = cljs.core.not_empty.call(null,inst_27094);
var state_27177__$1 = (function (){var statearr_27223 = state_27177;
(statearr_27223[(30)] = inst_27110);

return statearr_27223;
})();
if(cljs.core.truth_(inst_27111)){
var statearr_27224_27295 = state_27177__$1;
(statearr_27224_27295[(1)] = (26));

} else {
var statearr_27225_27296 = state_27177__$1;
(statearr_27225_27296[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (34))){
var inst_27146 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
if(cljs.core.truth_(inst_27146)){
var statearr_27226_27297 = state_27177__$1;
(statearr_27226_27297[(1)] = (38));

} else {
var statearr_27227_27298 = state_27177__$1;
(statearr_27227_27298[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (17))){
var state_27177__$1 = state_27177;
var statearr_27228_27299 = state_27177__$1;
(statearr_27228_27299[(2)] = recompile_dependents);

(statearr_27228_27299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (3))){
var state_27177__$1 = state_27177;
var statearr_27229_27300 = state_27177__$1;
(statearr_27229_27300[(2)] = null);

(statearr_27229_27300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (12))){
var inst_27067 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
var statearr_27230_27301 = state_27177__$1;
(statearr_27230_27301[(2)] = inst_27067);

(statearr_27230_27301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (2))){
var inst_27029 = (state_27177[(13)]);
var inst_27036 = cljs.core.seq.call(null,inst_27029);
var inst_27037 = inst_27036;
var inst_27038 = null;
var inst_27039 = (0);
var inst_27040 = (0);
var state_27177__$1 = (function (){var statearr_27231 = state_27177;
(statearr_27231[(7)] = inst_27037);

(statearr_27231[(8)] = inst_27039);

(statearr_27231[(9)] = inst_27038);

(statearr_27231[(10)] = inst_27040);

return statearr_27231;
})();
var statearr_27232_27302 = state_27177__$1;
(statearr_27232_27302[(2)] = null);

(statearr_27232_27302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (23))){
var inst_27094 = (state_27177[(23)]);
var inst_27096 = (state_27177[(26)]);
var inst_27098 = (state_27177[(24)]);
var inst_27090 = (state_27177[(19)]);
var inst_27093 = (state_27177[(25)]);
var inst_27101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27103 = (function (){var all_files = inst_27090;
var res_SINGLEQUOTE_ = inst_27093;
var res = inst_27094;
var files_not_loaded = inst_27096;
var dependencies_that_loaded = inst_27098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27096,inst_27098,inst_27090,inst_27093,inst_27101,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27102){
var map__27233 = p__27102;
var map__27233__$1 = ((((!((map__27233 == null)))?(((((map__27233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27233):map__27233);
var request_url = cljs.core.get.call(null,map__27233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27096,inst_27098,inst_27090,inst_27093,inst_27101,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27104 = cljs.core.reverse.call(null,inst_27098);
var inst_27105 = cljs.core.map.call(null,inst_27103,inst_27104);
var inst_27106 = cljs.core.pr_str.call(null,inst_27105);
var inst_27107 = figwheel.client.utils.log.call(null,inst_27106);
var state_27177__$1 = (function (){var statearr_27235 = state_27177;
(statearr_27235[(31)] = inst_27101);

return statearr_27235;
})();
var statearr_27236_27303 = state_27177__$1;
(statearr_27236_27303[(2)] = inst_27107);

(statearr_27236_27303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (35))){
var state_27177__$1 = state_27177;
var statearr_27237_27304 = state_27177__$1;
(statearr_27237_27304[(2)] = true);

(statearr_27237_27304[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (19))){
var inst_27080 = (state_27177[(12)]);
var inst_27086 = figwheel.client.file_reloading.expand_files.call(null,inst_27080);
var state_27177__$1 = state_27177;
var statearr_27238_27305 = state_27177__$1;
(statearr_27238_27305[(2)] = inst_27086);

(statearr_27238_27305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (11))){
var state_27177__$1 = state_27177;
var statearr_27239_27306 = state_27177__$1;
(statearr_27239_27306[(2)] = null);

(statearr_27239_27306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (9))){
var inst_27069 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
var statearr_27240_27307 = state_27177__$1;
(statearr_27240_27307[(2)] = inst_27069);

(statearr_27240_27307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (5))){
var inst_27039 = (state_27177[(8)]);
var inst_27040 = (state_27177[(10)]);
var inst_27042 = (inst_27040 < inst_27039);
var inst_27043 = inst_27042;
var state_27177__$1 = state_27177;
if(cljs.core.truth_(inst_27043)){
var statearr_27241_27308 = state_27177__$1;
(statearr_27241_27308[(1)] = (7));

} else {
var statearr_27242_27309 = state_27177__$1;
(statearr_27242_27309[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (14))){
var inst_27050 = (state_27177[(22)]);
var inst_27059 = cljs.core.first.call(null,inst_27050);
var inst_27060 = figwheel.client.file_reloading.eval_body.call(null,inst_27059,opts);
var inst_27061 = cljs.core.next.call(null,inst_27050);
var inst_27037 = inst_27061;
var inst_27038 = null;
var inst_27039 = (0);
var inst_27040 = (0);
var state_27177__$1 = (function (){var statearr_27243 = state_27177;
(statearr_27243[(7)] = inst_27037);

(statearr_27243[(8)] = inst_27039);

(statearr_27243[(9)] = inst_27038);

(statearr_27243[(32)] = inst_27060);

(statearr_27243[(10)] = inst_27040);

return statearr_27243;
})();
var statearr_27244_27310 = state_27177__$1;
(statearr_27244_27310[(2)] = null);

(statearr_27244_27310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (45))){
var state_27177__$1 = state_27177;
var statearr_27245_27311 = state_27177__$1;
(statearr_27245_27311[(2)] = null);

(statearr_27245_27311[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (26))){
var inst_27094 = (state_27177[(23)]);
var inst_27096 = (state_27177[(26)]);
var inst_27098 = (state_27177[(24)]);
var inst_27090 = (state_27177[(19)]);
var inst_27093 = (state_27177[(25)]);
var inst_27113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27115 = (function (){var all_files = inst_27090;
var res_SINGLEQUOTE_ = inst_27093;
var res = inst_27094;
var files_not_loaded = inst_27096;
var dependencies_that_loaded = inst_27098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27096,inst_27098,inst_27090,inst_27093,inst_27113,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27114){
var map__27246 = p__27114;
var map__27246__$1 = ((((!((map__27246 == null)))?(((((map__27246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27246):map__27246);
var namespace = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27096,inst_27098,inst_27090,inst_27093,inst_27113,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27116 = cljs.core.map.call(null,inst_27115,inst_27094);
var inst_27117 = cljs.core.pr_str.call(null,inst_27116);
var inst_27118 = figwheel.client.utils.log.call(null,inst_27117);
var inst_27119 = (function (){var all_files = inst_27090;
var res_SINGLEQUOTE_ = inst_27093;
var res = inst_27094;
var files_not_loaded = inst_27096;
var dependencies_that_loaded = inst_27098;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27096,inst_27098,inst_27090,inst_27093,inst_27113,inst_27115,inst_27116,inst_27117,inst_27118,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27094,inst_27096,inst_27098,inst_27090,inst_27093,inst_27113,inst_27115,inst_27116,inst_27117,inst_27118,state_val_27178,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27120 = setTimeout(inst_27119,(10));
var state_27177__$1 = (function (){var statearr_27248 = state_27177;
(statearr_27248[(33)] = inst_27113);

(statearr_27248[(34)] = inst_27118);

return statearr_27248;
})();
var statearr_27249_27312 = state_27177__$1;
(statearr_27249_27312[(2)] = inst_27120);

(statearr_27249_27312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (16))){
var state_27177__$1 = state_27177;
var statearr_27250_27313 = state_27177__$1;
(statearr_27250_27313[(2)] = reload_dependents);

(statearr_27250_27313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (38))){
var inst_27130 = (state_27177[(16)]);
var inst_27148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27130);
var state_27177__$1 = state_27177;
var statearr_27251_27314 = state_27177__$1;
(statearr_27251_27314[(2)] = inst_27148);

(statearr_27251_27314[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (30))){
var state_27177__$1 = state_27177;
var statearr_27252_27315 = state_27177__$1;
(statearr_27252_27315[(2)] = null);

(statearr_27252_27315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (10))){
var inst_27050 = (state_27177[(22)]);
var inst_27052 = cljs.core.chunked_seq_QMARK_.call(null,inst_27050);
var state_27177__$1 = state_27177;
if(inst_27052){
var statearr_27253_27316 = state_27177__$1;
(statearr_27253_27316[(1)] = (13));

} else {
var statearr_27254_27317 = state_27177__$1;
(statearr_27254_27317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (18))){
var inst_27084 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
if(cljs.core.truth_(inst_27084)){
var statearr_27255_27318 = state_27177__$1;
(statearr_27255_27318[(1)] = (19));

} else {
var statearr_27256_27319 = state_27177__$1;
(statearr_27256_27319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (42))){
var state_27177__$1 = state_27177;
var statearr_27257_27320 = state_27177__$1;
(statearr_27257_27320[(2)] = null);

(statearr_27257_27320[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (37))){
var inst_27143 = (state_27177[(2)]);
var state_27177__$1 = state_27177;
var statearr_27258_27321 = state_27177__$1;
(statearr_27258_27321[(2)] = inst_27143);

(statearr_27258_27321[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27178 === (8))){
var inst_27050 = (state_27177[(22)]);
var inst_27037 = (state_27177[(7)]);
var inst_27050__$1 = cljs.core.seq.call(null,inst_27037);
var state_27177__$1 = (function (){var statearr_27259 = state_27177;
(statearr_27259[(22)] = inst_27050__$1);

return statearr_27259;
})();
if(inst_27050__$1){
var statearr_27260_27322 = state_27177__$1;
(statearr_27260_27322[(1)] = (10));

} else {
var statearr_27261_27323 = state_27177__$1;
(statearr_27261_27323[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22892__auto__,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto____0 = (function (){
var statearr_27262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27262[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto__);

(statearr_27262[(1)] = (1));

return statearr_27262;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto____1 = (function (state_27177){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_27177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e27263){if((e27263 instanceof Object)){
var ex__22896__auto__ = e27263;
var statearr_27264_27324 = state_27177;
(statearr_27264_27324[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27325 = state_27177;
state_27177 = G__27325;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto__ = function(state_27177){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto____1.call(this,state_27177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23413__auto__ = (function (){var statearr_27265 = f__23412__auto__.call(null);
(statearr_27265[(6)] = c__23411__auto__);

return statearr_27265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__,map__27022,map__27022__$1,opts,before_jsload,on_jsload,reload_dependents,map__27023,map__27023__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23411__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27328,link){
var map__27329 = p__27328;
var map__27329__$1 = ((((!((map__27329 == null)))?(((((map__27329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27329):map__27329);
var file = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__27329,map__27329__$1,file){
return (function (p1__27326_SHARP_,p2__27327_SHARP_){
if(cljs.core._EQ_.call(null,p1__27326_SHARP_,p2__27327_SHARP_)){
return p1__27326_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__27329,map__27329__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27332){
var map__27333 = p__27332;
var map__27333__$1 = ((((!((map__27333 == null)))?(((((map__27333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27333):map__27333);
var match_length = cljs.core.get.call(null,map__27333__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27333__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27331_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27331_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27335_SHARP_,p2__27336_SHARP_){
return cljs.core.assoc.call(null,p1__27335_SHARP_,cljs.core.get.call(null,p2__27336_SHARP_,key),p2__27336_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27337 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27337);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27337);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27338,p__27339){
var map__27340 = p__27338;
var map__27340__$1 = ((((!((map__27340 == null)))?(((((map__27340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27340):map__27340);
var on_cssload = cljs.core.get.call(null,map__27340__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27341 = p__27339;
var map__27341__$1 = ((((!((map__27341 == null)))?(((((map__27341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27341):map__27341);
var files_msg = map__27341__$1;
var files = cljs.core.get.call(null,map__27341__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1522701091953
