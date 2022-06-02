import { Hero } from '../hero';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clicked.emit("lnwza007")
  }
}
