import { Component, OnInit, HostBinding } from '@angular/core';
import { Championship } from 'src/app/models/championship';
import { ChampionshipService } from 'src/app/services/championship.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-championship-form',
  templateUrl: './championship-form.component.html',
  styleUrls: ['./championship-form.component.css']
})
export class ChampionshipFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  championship: Championship = {
    idChampionship: 0,
    nameChampionship: '', 
    costChampionship: 0,
    costYelllowCard: 0,
    costBlueCard: 0,
    costRedCard: 0  
  };

  edit: boolean = false;

  constructor(private championshipService: ChampionshipService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.championshipService.getChampionship(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.championship = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  insertChampionship() {    
    delete this.championship.idChampionship;
    this.championshipService.insertChampionship(this.championship)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/championship']);
        },
        err => console.error(err)
      )
  }

  updateChampionship() {    
    this.championshipService.updateChampionship(this.championship.idChampionship, this.championship)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/championship']);
        },
        err => console.error(err)
      )
  }

}
