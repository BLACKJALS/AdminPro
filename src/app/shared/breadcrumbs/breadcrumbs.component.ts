import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe(data => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
      const metaType: MetaDefinition = {
        name: 'Description',
        content: this.titulo
      };
      this.meta.updateTag(metaType);
    });
  }

  ngOnInit() {
  }
  
  getDataRoute(): Observable<any> {
    return this.router.events.pipe(
      filter( (resp) => resp instanceof ActivationEnd),
      filter( (resp: ActivationEnd) => resp.snapshot.data.titulo !== undefined),
      map((resp: ActivationEnd) => resp.snapshot.data)
    );
  }
}
