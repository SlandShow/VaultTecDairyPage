import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {EntryService} from './service/client/entry.service';
import {Entry} from './model/Entry';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {SwalDefaults} from '@toverux/ngx-sweetalert2/di';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EntryService]
})
export class AppComponent implements OnInit {

  entries: Array<Entry>;
  entryId: number;
  entry: Entry;
  error: Error;

  constructor(public entryService: EntryService) {
  }

  ngOnInit(): void {
  }

  getAllEntries() {
    this.entries = this.entryService.getAllEntries();
  }

  getEntryById() {
    this.entryService.getEntryById(this.entryId).subscribe(entry => {
      console.log('Current entry from server: ', entry);
      this.error = null;
      this.entry = entry;
    }, error => {
      console.log('Error handling', error);
      this.error = error;
      this.entry = null;
    });
  }


}
