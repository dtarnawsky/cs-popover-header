import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-viewer',
  templateUrl: './generic-viewer.component.html',
  styleUrls: ['./generic-viewer.component.scss'],
})
export class GenericViewerComponent implements OnInit {
  public title: 'This is the title';

  constructor() { }

  ngOnInit() {}

}
