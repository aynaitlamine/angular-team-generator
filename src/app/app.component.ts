import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-team-generator';
  newMember = '';
  members: string[] = [];
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  errorMessage = '';

  onInput(member: string) {
    this.newMember = member;
  }

  onClick() {
    if (!this.newMember.length) {
      this.errorMessage = "Name can't be empty";
      return;
    }

    this.errorMessage = '';
    this.members.push(this.newMember);
    this.newMember = '';
  }

  onTeamSizeInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    this.teams = [];
    const allMembers = [...this.members];

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    this.errorMessage = '';

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
