import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  developments = [{
    category: 'TECHNOLOGIES',
    list: [{
      name: 'Angular',
      icon: 'assets/svg/angular.svg'
    }, {
      name: 'Node Js',
      icon: 'assets/svg/nodejs.svg'
    }, {
      name: 'React',
      icon: 'assets/svg/react.svg'
    }, {
      name: 'Electron',
      icon: 'assets/svg/electron.svg'
    }, {
      name: 'Ionic',
      icon: 'assets/svg/ionic.svg'
    }, {
      name: 'Javascript',
      icon: 'assets/svg/javascript.svg'
    }, {
      name: 'Typescript',
      icon: 'assets/svg/typescript.svg'
    }, {
      name: 'Angular',
      icon: 'assets/svg/html5.svg'
    }, {
      name: 'CSS',
      icon: 'assets/svg/css3.svg'
    }, {
      name: 'SCSS',
      icon: 'assets/svg/scss.svg'
    }]
  }, {
    category: 'LIBRARIES',
    list: [{
      name: 'Ngrx',
      icon: 'assets/svg/ngrx.svg'
    }, {
      name: 'Redux',
      icon: 'assets/svg/redux.svg'
    }, {
      name: 'Next',
      icon: 'assets/svg/next.svg'
    }, {
      name: 'Capacitor',
      icon: 'assets/svg/capacitor.svg'
    }, {
      name: 'Bootstrap',
      icon: 'assets/svg/bootstrap.svg'
    }, {
      name: 'Tailwind Css',
      icon: 'assets/svg/tailwind.svg'
    }, {
      name: 'Socket',
      icon: 'assets/svg/socket.svg'
    }, {
      name: 'Salesforce',
      icon: 'assets/svg/salesforce.svg'
    }, {
      name: 'Material',
      icon: 'assets/svg/material.svg'
    }]
  }, {
    category: 'DATABASES',
    list: [{
      name: 'Firestore',
      icon: 'assets/svg/firebase.svg'
    }, {
      name: 'MySql',
      icon: 'assets/svg/mysql.svg'
    }, {
      name: 'MongoDb',
      icon: 'assets/svg/mongodb.svg'
    }, {
      name: 'Redis',
      icon: 'assets/svg/redis.svg'
    }, {
      name: 'Sqlite',
      icon: 'assets/svg/sqlite.svg'
    }]
  }, {
    category: 'CLOUD SERVICES',
    list: [{
      name: 'AWS',
      icon: 'assets/svg/aws.svg'
    }, {
      name: 'Digital Ocean',
      icon: 'assets/svg/digitalocean.svg'
    }, {
      name: 'Azure',
      icon: 'assets/svg/azure.svg'
    }, {
      name: 'Firebase',
      icon: 'assets/svg/firebase.svg'
    }, {
      name: 'Netlify',
      icon: 'assets/svg/netlify.svg'
    }]
  }, {
    category: 'PLATFORMS & TOOLS',
    list: [{
      name: 'Github',
      icon: 'assets/svg/github.svg'
    }, {
      name: 'Gitlab',
      icon: 'assets/svg/gitlab.svg'
    }, {
      name: 'Bitbucket',
      icon: 'assets/svg/bitbucket.svg'
    }, {
      name: 'Docker',
      icon: 'assets/svg/docker.svg'
    }, {
      name: 'Jenkin',
      icon: 'assets/svg/jenkins.svg'
    }, {
      name: 'Cloudfare',
      icon: 'assets/svg/cloudflare.svg'
    }, {
      name: 'SonarQube',
      icon: 'assets/svg/sonarqube.svg'
    }, {
      name: 'Jira',
      icon: 'assets/svg/jira.svg'
    }, {
      name: 'Trello',
      icon: 'assets/svg/trello.svg'
    }, {
      name: 'Scrum',
      icon: 'assets/svg/scrum.svg'
    }, {
      name: 'VS Code',
      icon: 'assets/svg/vs.svg'
    }, {
      name: 'Nginx',
      icon: 'assets/svg/nginx.svg'
    }, {
      name: 'Microsoft Team',
      icon: 'assets/svg/microsoft-teams.svg'
    }]
  }]
  ngOnInit(): void {

  }

}
