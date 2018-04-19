import { Component, OnInit } from '@angular/core';
import { fadeOutAnimation } from '../../../core/common/route.animation';

@Component({
  selector: 'fury-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  animations: [fadeOutAnimation],
  host: { '[@fadeOutAnimation]': 'true' }
})
export class InboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
