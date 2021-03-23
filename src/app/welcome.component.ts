import { Component } from "@angular/core";


@Component({

    selector: 'welcome' ,
    template : `
        <h2> Welcome Back </h2>
    `,

    styles: [
        `h2{
            color : blue;
        }
        `

    ]

})

export class WelcomeComponent{

}