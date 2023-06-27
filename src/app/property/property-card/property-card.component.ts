import { Component } from "@angular/core";

@Component (
{
    // selector: 'app-property-card',
  //  template:'<h1>hello from new angualr app</h1>',
//   styles : ['h1{font-weight:bold;}']

    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls : ['property-card.component.css']

}
)


export class PropertyCardComponent{

  property: any = {

    "ID" : 1,
    "Name": "Adnan",
    "Department" : "I.T"
    
  }
} 