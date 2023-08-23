import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  backdropVisible = false;

  toggleBackdrop(isVisible: any) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges;
  }

}
