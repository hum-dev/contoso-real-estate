import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"],
  standalone: true,
  imports: [RouterModule, CardComponent, CommonModule],
})
export class CardListComponent implements OnInit {
  @Input() listings: Listing[] = [];

  @Output() onBookmarkToggle: EventEmitter<Listing>;
  noresults: string = "There are no listings right now. Come back again soon!";

  constructor() {
    this.onBookmarkToggle = new EventEmitter<Listing>();
  }

  ngOnInit() {}

  onBookmark(listing: Listing) {
    this.onBookmarkToggle.emit(listing);
  }
}