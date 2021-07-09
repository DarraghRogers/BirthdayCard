import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
template:`
  <h1>HAPPY BIRTHDAY!!!!!!!!</h1>
  <hr>
  <div class="col-md-6">
    <h3>This card is for Grace's eyes ONLY!</h3>
    <p>If you can answer this question correctly, you can then see your virtual Birthday Card</p>
    <br/>
    <p>What did you write on Darragh's whiteboard, he needs a perscription for?</p>
    <input type="text" #answer>
    <br/>
    <button type="button" class="btn btn-primary" (click)="getAnswer(answer)">Submit</button>
      <br/>
      <br/>
      <div *ngIf="this.canSeeCard">
        <h1>Yayyyyy!! Its your Birthday!!!!!!!!!!</h1>
        <p>
          <em>Hellooooo my loooooooooveee.</em>
          </p>
          <p>
          Another year has come and gone and I wanted to do something special for you this year.
          This is your very own website dedicated to all things Grace. Im starting it off with your birthday and I hope to continue to
          add to it year on year out.
          </p>
          <p>
          Only a very special person to me deserves such a thing.
          </p>
          <p>
          I wanted to tell you how proud I am to be your boyfriend because you are the smartest and funniest person I know, <em>and beautiful ;)</em>
        </p>

        <p></p>
      </div>

      <!-- <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button> -->
  </div>
`,
styles: [

]
})
export class CreateEventComponent{
  isDirty:boolean = false;
  canSeeCard = true;
  cardAnswer = "bolixitis";
  constructor(private router: Router){

  }

  getAnswer(ans){

    if(ans.value === this.cardAnswer){
      console.log(ans.value);
      this.canSeeCard = true;
    }
  }

  cancel(){
    this.router.navigate(['/events']);
  }
}
