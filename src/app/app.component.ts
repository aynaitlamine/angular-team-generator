import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-team-generator';
  newMemberName: string = '';
  members: string[] = [];

  onInput(member: string) {
    if (member != '') {
      this.newMemberName = member;
    }
  }

  addMember() {
    this.members.push(this.newMemberName);
    console.log(this.members);
  }
}
