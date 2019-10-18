import { Component, OnInit,HostBinding } from '@angular/core';

import { ChampionshipService } from '../../services/championship.service';

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.css']
})
export class ChampionshipListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  list: any = [];
  constructor(private championshipService: ChampionshipService) { }

  ngOnInit() {
    this.loadChampionship();
  }

  loadChampionship() {
    this.championshipService.listChampionship()
      .subscribe(
        res => {
          this.list = res;
        },
        err => console.error(err)
      );
  }

  delete(id: string) {
    this.championshipService.deleteChampionship(id)
      .subscribe(
        res => {
          console.log(res);
          this.loadChampionship();
        },
        err => console.error(err)
      )
  }

}
