import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[showTodos]'
})
export class ShowDirective {

  @Input() set showTodos(condition : boolean) {
    if(!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef : TemplateRef<any>,
              private viewContainer : ViewContainerRef) { }

}
