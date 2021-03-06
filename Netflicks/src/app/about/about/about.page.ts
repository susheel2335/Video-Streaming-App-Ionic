import { Component } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  custWindow: any = window;
  emailDetailsShow = false;
  constructor(private aboutService: AboutService) { }

  ionViewWillEnter() {
    this.animate();
    this.moveElementUp();
    this.reportVisit();
  }

  moveElementUp() {
    setTimeout(() => {
      const divElement: HTMLElement = document.getElementById('warpper-div');
      divElement.classList.add('trans-prop');
      this.animateEmailDetails();
    }, 2000);
  }

  animate() {
    this.custWindow.anime.timeline({ loop: true })
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: 'easeInOutExpo',
        duration: 700
      }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: 'easeOutExpo',
        translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + 'em'
      }).add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ['0.5em', 0],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ['-0.5em', 0],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
    // .add({
    //   targets: '.ml15',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: 'easeOutExpo',
    //   delay: 1000
    // });
  }

  animateEmailDetails() {
    setTimeout(() => {
      // this.emailDetailsShow = true;
      this.custWindow.anime.timeline({ loop: false })
        .add({
          targets: '.ml15 .word',
          scale: [14, 1],
          opacity: [0, 1],
          easing: 'easeOutCirc',
          duration: 800,
          delay: (el, i) => 100
        });
    }, 5000);

  }

  reportVisit() {
    this.aboutService.reportVisit().subscribe();
  }

  reportPVisit() {
    this.aboutService.reportPVisit().subscribe();
  }

}
