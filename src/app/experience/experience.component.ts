import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  lstExperience = [{
    image: 'assets/image/upwork.webp',
    heading: 'UPWORK',
    name: 'Freelance',
    description: 'A Top Rated Freelancer at Upwork, an American freelancing platform and the largest network of independent professionals to get things done, from quick turnarounds to big transformations.',
    url: environment.UPWORK,
  },
  {
    image: 'assets/image/joblist.png',
    heading: 'MYJOBLIST',
    name: 'Full Stack Developer',
    description: 'myJoblist is an employment search engine, that aggrigrates jobs from all over the web. Using myjoblist advanced search engine, Job Seekers can search mulitple job boards at once. Employers can also schedule virtual interviews with Job Seekers, making applying for jobs more flexibilible.',
    url: 'https://myjoblist.com.au',
  },
  {
    image: 'assets/image/billionacts.png',
    heading: 'BILLION ACTS',
    name: 'Frontend Developer',
    description: 'The One Billion Acts of Peace campaign launched in partnership with Google in May 2014 to provide a platform and tools for each of us to be able to create incremental and impactful change in our own backyards. Essentially, it is a platform for communities or organisations to donate to make an impact in one or more of the Billion Acts Issue Areas and work together to achieve it, and it is designed to impact one or more of the Billion Acts Issue Areas that are critical to achieving world peace.',
    url: 'https://www.billionacts.org',
  },
  {
    image: 'assets/image/zenros.png',
    heading: 'ZENROS',
    name: 'Full Stack Developer',
    description: 'Provides solutions for managing guest in-room service. It has guest control panels for lighting scenes, temperature settings, and hotel services. It also provides touch panel responsive systems with features such as do-not-disturb, make-up room, laundry, guest occupancy, curtain control, dimming control, and others. This is the IOT system that is being installed in 5 star hotels such as Marriott and Hilton in countries such as France, Dubai, Qatar, and Iran. It is currently used by more than 20 hotels. For this, we use all IIOT protocols such as OPC/UA, MQTT, and Backnet.',
  },
  {
    image: 'assets/image/somfy.jpg',
    heading: 'SOMFY',
    name: 'Full Stack Developer',
    description: 'Somfy is an international group, present in almost 60 countries and the world leader in the automatic operation of house and building doors and windows. I created an SDN configuration tool for their motorised systems and curtain controls using the Angular Electron framework for a Windows application, and I also used NodeJs and sqlite to store the motor configuration in the system environment.',
  },
  {
    image: 'assets/image/arthdut.png',
    heading: 'ARTHDUT FINANCE',
    name: 'Full Stack Developer',
    description: 'Arthdut Finance app is a platform for Client Profile Creation System-like. Income Tax, GST, Auditing, Appeal clients, etc. Staff Profile Creation and record maintaining system of Every Employee. You can manage all types of bank audit work branch wise with update status branch wise which is done by staff, you can also see the status of work in your office also when Audit work running is out of office like Record Checking, Audit Report Preparing, Finalization of Audit and many more.',
    url: 'https://play.google.com/store/apps/details?id=com.yellosky.arthdut',
  },
  {
    image: 'assets/image/swami.png',
    heading: 'HARIPRAKASH SWAMI LIFESTYE APP',
    name: 'Frontend Developer',
    description: 'The Hari Prakash Swami app contains activities, community-building strategies, and counselling. I created a user interface with a customer-friendly design that allows for swami scheduling options. Live darshan of the Swaminarayan temple, a contact list for the temple, Share your ideas, add notes, use the membership feature, and stream videos and audios.',
    url: 'https://play.google.com/store/apps/details?id=com.disolutions.hariprakashswami',
  },
  {
    image: 'assets/image/cdirect.png',
    heading: 'C-DIRECT',
    name: 'Frontend Developer',
    description: 'You can choose a meal plan on the C-Direct website that works for you. Choose from a weekly meal plan of 4, 6, 10, or 12. Even the meal plan can be modified with each transaction. Choose your personal chef and your preferred meals; depending on your diet, you might be able to filter. Get it delivered and enjoy delicious, freshly prepared food from nearby caterers. Every week, they send the meals of your choice in a nice, cool box and deliver them fresh.',
    url: 'https://apps.apple.com/sg/app/cdirect/id1440732557',
  },
  {
    image: 'assets/image/fexpert.png',
    heading: 'SHOP BRANDING APP',
    name: 'Full Stack Developer',
    description: 'This software aims to create a brand that combines aesthetics, high-quality goods, and consumer mindset. Front- and back-end code has been written to be clear and useful. Create and maintain apps and databases that work well. client-side and server-side architecture created. The front-end application was constructed with attractive visual design.',
    url: 'https://play.google.com/store/apps/details?id=at.cloudfaces.fexpertbulgaria',
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
