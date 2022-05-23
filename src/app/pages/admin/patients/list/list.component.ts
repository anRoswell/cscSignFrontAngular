import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './../../../../services/api.service';
import { StorageService } from './../../../../services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public data: any;
  public user: any;
  public isLoading: boolean;
  constructor(
    private api: ApiService,
    private storage: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.all('patients').subscribe((users) => {
      this.data = users;
    });

    // this.api.all('profiles').subscribe((profiles) => {
    //   console.log(profiles);
    //   this.storage.save('__profiles', profiles);
    // });
    this.storage.destroy('__user');
  }

  setUser(user: any): void {
    this.user = user;
  }

  goToUser(user: any): void {
    console.log(user);
    this.storage.save('__user', user);
    this.router.navigate([
      '/admin/configuraciones/usuario',
      { action: 'edit', numIdentificacion: user.numIdentificacion },
    ]);
  }

  delete(id: number): void {
    console.log(id);
    this.api.delete(`users/${id}`).subscribe((response) => {
      this.data.map((item) => {
        if (item.id === id) {
          item.status = 0;
        }
      });
    });
  }

  findPatient() {}

  goToHistory(user: any) {
    console.log(user);
    this.storage.save('__user', user);
    this.router.navigate([
      '/admin/patients/history',
      { action: 'history', numIdentificacion: user.numIdentificacion },
    ]);
  }
}
