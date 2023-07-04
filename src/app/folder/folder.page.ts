import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  // public folder!: string;
  // private activatedRoute = inject(ActivatedRoute);
  public appPages = [
    { title: 'Overview', url: '/folder/overview', icon: 'mail' },
    { title: 'Reports', url: '/folder/reports', icon: 'paper-plane' },
    { title: 'Card', url: '/folder/card', icon: 'card' },
    { title: 'Support', url: '/folder/support', icon: 'call' },    
  ];  
  constructor() {}

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
