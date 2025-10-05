import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class Hobbies implements AfterViewInit{

   constructor(@Inject(PLATFORM_ID) private platformId: object) {}

   ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.waitForInstagramScript();
    }
  }

  waitForInstagramScript(): void {
    const interval = setInterval(() => {
      const w = window as any;
      if (w.instgrm?.Embeds?.process) {
        w.instgrm.Embeds.process();
        clearInterval(interval); // Prevent multiple calls
      }
    }, 200);
  }

}

