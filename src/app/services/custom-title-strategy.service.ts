/* Place your angular imports here */
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { Title } from "@angular/platform-browser";

/* Place any other imports here */
import { uppercaseFirstLetter } from "@shared/helpers/uppercase-first-letter.helper";

@Injectable()
export class CustomTitleStrategyService extends TitleStrategy {
  constructor(private readonly _title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    const routeTree = snapshot.url.split("/");
    const lastRouteOnRouteTree = routeTree[routeTree.length - 1];
    const title = lastRouteOnRouteTree.includes("%20") ? lastRouteOnRouteTree.split("%20").join(" ") : uppercaseFirstLetter(lastRouteOnRouteTree);

    if(!title) this._title.setTitle("Food Blog");
    else this._title.setTitle(`Food Blog | ${title}`);
  }
}
