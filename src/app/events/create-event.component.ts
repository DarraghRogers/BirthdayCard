import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
template:`
<div>
  <h1>HAPPY BIRTHDAY!!!!!!!!</h1>
  <hr>
  <div class="col-md-12 container-birthdaycard">
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
        <img src="/assets/images/pics of grace/FB_IMG_1625781378683.jpg" alt="Darragh and Grace">
        <p>
          <em>Hellooooo my loooooooooveee.</em>
          </p>
          <p>
          Another year has come and gone and I wanted to do something special for you this year.
          This is your very own website dedicated to all things Grace. Im starting it off with your birthday and I hope to continue to
          add to it year on year out.
          </p>
          <p>
          Only a very special person, to me, deserves such a thing.
          </p>
          <p>
          I wanted to tell you how proud I am to be your boyfriend because you are the smartest and funniest person I know, <em>and beautiful ;)</em>
          Its been a very busy year for you and I hope I have made it's passing a litte easier.
          You are amazing for acomplishing your degree and I never doubthed you for a moment.
        </p>
        <p>Here is to the next 30 years of your life, and hopefully you can look back on this for all your future memories.</p>

        <p>I love you so much.</p>

        <p><em><b>Darragh</b></em></p>

        <p></p>
      </div>

      <!-- <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button> -->
  </div>
  </div>
`,
styles: [

]
})
export class CreateEventComponent{
  isDirty:boolean = false;
  canSeeCard = false;
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
