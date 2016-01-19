// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.diagram2');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
goog.require('pga2d.clifford');
goog.require('pga2d.canvas');
cljs.core.enable_console_print_BANG_.call(null);
var g_25649 = pga2d.clifford.ga.call(null,(0));
var cv_25650 = pga2d.canvas.canvas.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var render_25651 = pga2d.canvas.canvas_render.call(null,cv_25650,g_25649);
var N_25652 = g_25649.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var A0_25653 = pga2d.grassmann.point.call(null,(-1),(1),(1));
var A1_25654 = pga2d.grassmann.point.call(null,.6,.2,(1));
var P_25655 = pga2d.grassmann.point.call(null,(0),(-1),(1));
var m0_25656 = pga2d.grassmann.join.call(null,P_25655,A0_25653);
var m1_25657 = pga2d.grassmann.join.call(null,A1_25654,P_25655);
var m0_25658__$1 = N_25652.call(null,m0_25656);
var m1_25659__$1 = N_25652.call(null,m1_25657);
var a_25660 = pga2d.grassmann.join.call(null,A0_25653,A1_25654);
var Am_25661 = N_25652.call(null,pga2d.grassmann.add.call(null,A0_25653,A1_25654));
var tmp_25662 = g_25649.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,Am_25661,a_25660);
var r_25663 = N_25652.call(null,pga2d.grassmann.grade.call(null,tmp_25662,(1)));
var c_25664 = N_25652.call(null,pga2d.grassmann.add.call(null,m0_25658__$1,pga2d.grassmann.times.call(null,m1_25659__$1,(-1))));
var C_25665 = N_25652.call(null,pga2d.grassmann.wedge.call(null,r_25663,c_25664));
var s_25666 = N_25652.call(null,pga2d.grassmann.join.call(null,A0_25653,C_25665));
var h_25667 = N_25652.call(null,g_25649.call(null,new cljs.core.Keyword(null,"gp","gp",-1879258781)).call(null,r_25663,s_25666));
cv_25650.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959)).call(null,"#000000");

render_25651.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m0_25658__$1,m1_25659__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffff00"], null));

render_25651.call(null,a_25660,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000ff"], null));

render_25651.call(null,r_25663,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ffff"], null));

render_25651.call(null,c_25664,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#00ff00"], null));

render_25651.call(null,s_25666,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000"], null));

var seq__25645_25668 = cljs.core.seq.call(null,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),cljs.core.range.call(null,0.0,1.0,(1.0 / 15.0)))));
var chunk__25646_25669 = null;
var count__25647_25670 = (0);
var i__25648_25671 = (0);
while(true){
if((i__25648_25671 < count__25647_25670)){
var param1_25672 = cljs.core._nth.call(null,chunk__25646_25669,i__25648_25671);
var rotor_25673 = g_25649.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,param1_25672,h_25667);
render_25651.call(null,pga2d.grassmann.chop.call(null,g_25649.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_25673).call(null,m0_25658__$1),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_25651.call(null,pga2d.grassmann.chop.call(null,g_25649.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_25673).call(null,A0_25653),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__25674 = seq__25645_25668;
var G__25675 = chunk__25646_25669;
var G__25676 = count__25647_25670;
var G__25677 = (i__25648_25671 + (1));
seq__25645_25668 = G__25674;
chunk__25646_25669 = G__25675;
count__25647_25670 = G__25676;
i__25648_25671 = G__25677;
continue;
} else {
var temp__4425__auto___25678 = cljs.core.seq.call(null,seq__25645_25668);
if(temp__4425__auto___25678){
var seq__25645_25679__$1 = temp__4425__auto___25678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25645_25679__$1)){
var c__17655__auto___25680 = cljs.core.chunk_first.call(null,seq__25645_25679__$1);
var G__25681 = cljs.core.chunk_rest.call(null,seq__25645_25679__$1);
var G__25682 = c__17655__auto___25680;
var G__25683 = cljs.core.count.call(null,c__17655__auto___25680);
var G__25684 = (0);
seq__25645_25668 = G__25681;
chunk__25646_25669 = G__25682;
count__25647_25670 = G__25683;
i__25648_25671 = G__25684;
continue;
} else {
var param1_25685 = cljs.core.first.call(null,seq__25645_25679__$1);
var rotor_25686 = g_25649.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262)).call(null,param1_25685,h_25667);
render_25651.call(null,pga2d.grassmann.chop.call(null,g_25649.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_25686).call(null,m0_25658__$1),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,0,0.4)"], null));

render_25651.call(null,pga2d.grassmann.chop.call(null,g_25649.call(null,new cljs.core.Keyword(null,"sandwich","sandwich",1338727993)).call(null,rotor_25686).call(null,A0_25653),1.0E-10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255,255,255,0.5)"], null));

var G__25687 = cljs.core.next.call(null,seq__25645_25679__$1);
var G__25688 = null;
var G__25689 = (0);
var G__25690 = (0);
seq__25645_25668 = G__25687;
chunk__25646_25669 = G__25688;
count__25647_25670 = G__25689;
i__25648_25671 = G__25690;
continue;
}
} else {
}
}
break;
}

render_25651.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0_25653,A1_25654], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_25651.call(null,Am_25661,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_25651.call(null,C_25665,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null));

render_25651.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000ff"], null));

//# sourceMappingURL=diagram2.js.map?rel=1453219521641