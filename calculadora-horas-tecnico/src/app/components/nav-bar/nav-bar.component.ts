import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
  }
  ConsultaTecnico(termino: string){
    this.router.navigate(['ConsultaTecnico',termino])
  }

  RegistrarServicioTecnico(termino: string){
    this.router.navigate(['RegistrarServicioTecnico',termino])
  }

}
