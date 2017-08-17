import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('paragraph') paragraph: ElementRef;
  // content child is nothing but the template reference variable of the content passed from parent component
  // and accessed in the child component using ng-content directive
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  public ngOnInit() {
    console.log('ngOnInit called !');
    // ngOnInit life cycle hook dosnt have access to view child property
    console.log('Text content', this.paragraph.nativeElement.textContent);
    console.log('Child Content on ngOnInit', this.contentParagraph.nativeElement.textContent);
  }

  public ngOnChanges(changes: SimpleChanges) {
    // called input property bound to this component changes, here 'element' property changes
    console.log(changes);
  }

  public ngDoCheck() {
    // called when any change deduction occurs (just like digest loop cycle in angular js)
    // change deduction will occur when any event like click occurs, data received from a web service
    // so that it will update the view with new value if any
    console.log('ngDoCheck called');
  }

  public ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    // ngAfterContentInit doesnt have access to view child property
    // only content child property can be accessed
    // git change
    console.log('Text content on AfterContentInit', this.paragraph.nativeElement.textContent);
    console.log('Child Content on ngAfterContentInit', this.contentParagraph.nativeElement.textContent);
  }

  public ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    // will have access to view child as well as content child
    console.log('Text content', this.paragraph.nativeElement.textContent);
    console.log('Child Content on ngAfterViewInit', this.contentParagraph.nativeElement.textContent);
  }

  public ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
