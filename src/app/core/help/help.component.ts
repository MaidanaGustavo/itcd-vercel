import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'itcd-help',
    templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

    loading: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    baixarArquivo(chave: string, titulo: string) {
        this.loading = true;
      alert("Download Help!");
    }

}
