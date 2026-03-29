import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { auditTime } from 'rxjs';
import Typed from 'typed.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  @ViewChild('myVideo') video!: ElementRef;
  @ViewChild('typingText') typingText!: ElementRef;
  ngAfterViewInit() {
    this.playMutedVideo();
    this.autoText();
    AOS.init({
      duration: 1200,
      once: true,
      offset: 0,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  autoText(): void {
    const options = {
      strings: [`Welcome to the sizzling world of Street Burger, where the burger rulebook is
                    being rewritten.
                    Having
                    flipped the script on traditional burgers, Street Burger has revolutionized the burger scene to
                    tune
                    up
                    a menu that is bound to shift your taste buds into overdrive. Each uniquely crafted burger at
                    Street
                    Burger is meant to ignite your taste buds with the thrilling fusion of top-notch ingredients,
                    daring
                    creativity, and a dash of Sri Lankan charm.`],
      typeSpeed: 20,
      backSpeed: 80,
      backDelay: 1000,
      loop: true
    };

    new Typed(this.typingText.nativeElement, options);
  }

  playMutedVideo(): void {
    setTimeout(() => {
      this.video.nativeElement.muted = true;
      this.video?.nativeElement?.play();
    }, 0);
  }

}
