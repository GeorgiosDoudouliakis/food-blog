"use strict";(self.webpackChunkfood_blog=self.webpackChunkfood_blog||[]).push([[812],{9812:(L,d,i)=>{i.r(d),i.d(d,{CountriesModule:()=>T});var a=i(6895),c=i(2001),p=i(8505),t=i(8256),l=i(4004),f=i(529);let u=(()=>{class n{constructor(e){this._http=e}getCountriesList(){return this._http.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list").pipe((0,l.U)(e=>e.meals),(0,l.U)(e=>e.filter(o=>"Unknown"!==o.strArea)))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var g=i(605);let C=(()=>{class n{constructor(e,o){this._elRef=e,this._renderer=o}ngAfterViewInit(){this.arrow=this._elRef.nativeElement.querySelector("span")}onMouseOver(){this._renderer.setStyle(this.arrow,"transform","translateX(8px)")}onMouseOut(){this._renderer.removeStyle(this.arrow,"transform")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["","cardHover",""]],hostBindings:function(e,o){1&e&&t.NdJ("mouseover",function(){return o.onMouseOver()})("mouseout",function(){return o.onMouseOut()})}}),n})(),y=(()=>{class n{constructor(e){this._router=e}navigateToCountryMeals(e){this._router.navigateByUrl(`/countries/${e.toLowerCase()}`)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-country-card"]],inputs:{country:"country"},decls:9,vars:5,consts:[["role","link","cardHover","",1,"card",3,"click"],[1,"country-flag-name-container"],[1,"country-flag-container"],["width","60","height","60",1,"img-responsive",3,"src","alt"],[1,"py-1"]],template:function(e,o){1&e&&(t.TgZ(0,"article",0),t.NdJ("click",function(){return o.navigateToCountryMeals(o.country.strArea)}),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.ALo(4,"lowercase"),t.qZA(),t.TgZ(5,"h3",4),t._uU(6),t.qZA()(),t.TgZ(7,"span"),t._uU(8,"\xbb"),t.qZA()()),2&e&&(t.xp6(3),t.MGl("src","/assets/images/countries/",t.lcZ(4,3,o.country.strArea),"_flag.jpg",t.LSH)("alt","",o.country.strArea," flag"),t.xp6(3),t.Oqu(o.country.strArea))},dependencies:[C,a.i8],styles:['@font-face{font-family:LatoRegular;src:url(Lato-Regular.4291f48c2ea51320.ttf)}@font-face{font-family:LatoRegular;src:url(Lato-Regular.4291f48c2ea51320.ttf)}.container[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.p-1[_ngcontent-%COMP%]{padding:1rem}.py-1[_ngcontent-%COMP%]{padding:1rem 0}.py-2[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr);grid-auto-rows:auto;gap:20px 25px}@media (min-width: 600px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (min-width: 1024px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.btn-primary[_ngcontent-%COMP%]{border:1px solid #F2712C}.btn-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;padding:.3rem .8rem;color:#fff;background:#24292d;transition:.4s ease-in-out}.btn-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#F2712C;color:#24292d}.btn-secondary[_ngcontent-%COMP%]{font-size:1rem;color:#24292d;background:#F2712C;padding:.3rem .8rem;border:1px solid #F2712C;transition:.4s ease-in-out}.btn-secondary[_ngcontent-%COMP%]:hover{color:#fff;background:#24292d}.card[_ngcontent-%COMP%]{background:#2f363b}.card.meal-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:relative;height:80px;padding-left:1rem;padding-right:1rem;cursor:pointer}.card.meal-card[_ngcontent-%COMP%]:hover:after{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;font-size:1rem;position:absolute;top:0;left:0;content:"SHOW RECIPE";width:100%;height:100%;background:#F2712C;color:#fff;letter-spacing:.1rem}.img-responsive[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}[_nghost-%COMP%]{cursor:pointer}.card[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:0}.country-flag-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:initial;align-items:center}.country-flag-container[_ngcontent-%COMP%]{width:60px;height:60px}h3[_ngcontent-%COMP%]{margin-left:1rem;color:#fff}span[_ngcontent-%COMP%]{font-size:2rem;padding-right:1rem;color:#f2712c;transition:.4s ease-in-out}'],changeDetection:0}),n})();function h(n,r){1&n&&t._UZ(0,"app-country-card",5),2&n&&t.Q6J("country",r.$implicit)}function v(n,r){if(1&n&&(t.TgZ(0,"section",3),t.YNc(1,h,1,1,"app-country-card",4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.countries)}}function M(n,r){1&n&&t._UZ(0,"app-loader")}let O=(()=>{class n{constructor(e){this.countriesListService=e,this.countries=[],this.loading=!0}ngOnInit(){this._countriesSub$=this.countriesListService.getCountriesList().pipe((0,p.b)(e=>this.countries=e),(0,p.b)(()=>this.loading=!1)).subscribe()}ngOnDestroy(){this._countriesSub$&&this._countriesSub$.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-countries"]],decls:6,vars:2,consts:[[1,"container","py-2"],["class","grid",4,"ngIf","ngIfElse"],["loadingTpl",""],[1,"grid"],[3,"country",4,"ngFor","ngForOf"],[3,"country"]],template:function(e,o){if(1&e&&(t.TgZ(0,"section",0)(1,"h2"),t._uU(2,"COUNTRIES"),t.qZA(),t.YNc(3,v,2,1,"section",1),t.YNc(4,M,1,0,"ng-template",null,2,t.W1O),t.qZA()),2&e){const s=t.MAs(5);t.xp6(3),t.Q6J("ngIf",!o.loading)("ngIfElse",s)}},dependencies:[a.sg,a.O5,g.R,y],styles:['@font-face{font-family:LatoRegular;src:url(Lato-Regular.4291f48c2ea51320.ttf)}.container[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.p-1[_ngcontent-%COMP%]{padding:1rem}.py-1[_ngcontent-%COMP%]{padding:1rem 0}.py-2[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr);grid-auto-rows:auto;gap:20px 25px}@media (min-width: 600px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (min-width: 1024px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.btn-primary[_ngcontent-%COMP%]{border:1px solid #F2712C}.btn-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;padding:.3rem .8rem;color:#fff;background:#24292d;transition:.4s ease-in-out}.btn-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#F2712C;color:#24292d}.btn-secondary[_ngcontent-%COMP%]{font-size:1rem;color:#24292d;background:#F2712C;padding:.3rem .8rem;border:1px solid #F2712C;transition:.4s ease-in-out}.btn-secondary[_ngcontent-%COMP%]:hover{color:#fff;background:#24292d}.card[_ngcontent-%COMP%]{background:#2f363b}.card.meal-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:relative;height:80px;padding-left:1rem;padding-right:1rem;cursor:pointer}.card.meal-card[_ngcontent-%COMP%]:hover:after{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;font-size:1rem;position:absolute;top:0;left:0;content:"SHOW RECIPE";width:100%;height:100%;background:#F2712C;color:#fff;letter-spacing:.1rem}.img-responsive[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}']}),n})();var P=i(3565),w=i(5879),x=i(311);let m=(()=>{class n extends x.m{getMeals(e){return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e}`).pipe((0,l.U)(o=>o.meals))}}return n.\u0275fac=function(){let r;return function(o){return(r||(r=t.n5z(n)))(o||n)}}(),n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var b=i(6683);let _=(()=>{class n extends P.M{constructor(e,o){super(e),this.route=e,this.service=o,this.mealsType=w.M.COUNTRY}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.gz),t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-country-meals"]],features:[t.qOj],decls:1,vars:3,consts:[[3,"meals","loading","title"]],template:function(e,o){1&e&&t._UZ(0,"app-meals",0),2&e&&t.Q6J("meals",o.meals)("loading",o.loading)("title",o.title)},dependencies:[b.R]}),n})();var F=i(3042);const S=[{path:"",component:O},{path:":country",component:_},{path:":country/:meal",loadChildren:()=>i.e(728).then(i.bind(i,8728)).then(({MealModule:n})=>n)}];let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[u,m],imports:[c.Bz.forChild(S),a.ez,F.N,g.R,c.Bz]}),n})()}}]);