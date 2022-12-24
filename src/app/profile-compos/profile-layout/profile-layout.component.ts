import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss'],
})
export class ProfileLayoutComponent implements OnInit, AfterViewInit {
  options = {
    root: null, // default to viewport
    threshold: 0.15,
    rootMargin: '',
  };
  observer = new IntersectionObserver(this.observer_callback, this.options);
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let sections = document.querySelectorAll('.layout-section');
    sections?.forEach((section) => this.observer.observe(section));
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event: Event) {
    if (event.target == document) {
      const verticalOffset =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      // console.log(verticalOffset);
      // console.log(event);
    }
  }

  observer_callback(entries: any[], observer: any) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      console.log(
        `section: ${entry.target.id} - intersecting?: ${entry.isIntersecting}`
      );
    });
  }
}
