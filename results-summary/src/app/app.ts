import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SummaryItem } from './summary.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private dataService = inject(DataService);
  summaryData: SummaryItem[] = [];

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.summaryData = data;
    });
  }
}
