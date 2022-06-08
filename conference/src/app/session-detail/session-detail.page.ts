/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})
export class SessionDetailPage implements OnInit {

  public session: any;
  public speakerList: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if (!this.session) {
      this.session = {
        id: 101,
        title: 'Gates open / Ouverture des portes',
        titleMobile: 'Gates open',
        image: '/images/backgrounds/opening.jpg',
        type: 'break'
      };

      this.speakerList = [
        {
          id: 101,
          name: 'Charlie GERARD',
          featured: true,
          company: 'ThoughtWorks',
          companyLogo: '/images/logos/thoughtworks.png',
          country: 'Australia',
          photoUrl: '/images/speakers/charlie-gerard.png',
          shortBio: 'Hey I’m Charlie, currently Software Developer @ ThoughtWorks in Sydney. I am passionate about Creative Technologies, Creative Coding, Hardware and IoT.',
          bio: 'Hey I’m Charlie, currently Software Developer @ ThoughtWorks in Sydney. I am passionate about Creative Technologies, Creative Coding, Hardware and IoT. When I’m not coding for a client’s project, I am mentoring at General Assembly, building projects using Arduino and other devices, writing tutorials to share what I learn or reading news. You can also check my [portfolio](http://charliegerard.github.io) if you’d like to know more about me :).',
          tags: [
            'IoT'
          ],
          badges: [],
          socials: [
            {
              icon: 'twitter',
              name: 'Twitter',
              link: 'https://twitter.com/devdevcharlie'
            },
            {
              icon: 'github',
              name: 'Github',
              link: 'https://github.com/charliegerard'
            }
          ]
        }
      ];
    }

  }

  public openNotes(id: string): void{
    this.router.navigate(['/notes', id]);
  }

}