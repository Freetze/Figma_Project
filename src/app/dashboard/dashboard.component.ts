import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = "Let's start a new trip!";
  category = 'city';
  images: string[] = [];
  items = [
    {
      id: 0,
      title: 'New York',
      imgPath:
        'https://images.hdqwalls.com/download/new-york-city-wide-8k-2z-1280x800.jpg',
      date: '12.10-22.10.2022',
    },
    {
      id: 1,
      title: 'Paris',

      imgPath:
        'https://images.hdqwalls.com/download/new-york-city-wide-8k-2z-1280x800.jpg',
      date: '12.10-22.10.2022',
    },
    {
      id: 2,
      title: 'London',

      imgPath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfs9WLzraKTlXU5Iyo5vqDx96d2l9KMtFNjA&usqp=CAU',
      date: '12.10-22.10.2022',
    },
    {
      id: 3,
      title: 'Brussels',

      imgPath:
        'https://images.wallpaperscraft.com/image/single/new_york_city_top_view_87254_1280x720.jpg',
      date: '12.10-22.10.2022',
    },
    {
      id: 4,
      title: 'Hamburg',

      imgPath:
        'https://www.wien.info/resource/image/291996/19x10/1200/630/32081b9260f0797631c083ba4024fb3b/2418BD4EF1E2CEC61AAD60219EA2882C/50852-uno-city.jpg',
      date: '12.10-22.10.2022',
    },
  ];
  successfullModalIsOpen = false;
  constructor() {}

  ngOnInit(): void {
    this.generateImages(this.category);
  }
  generateImages(category: string) {
    let base = 'https://dummyimage.com/600x400/000/fff&text=';
    this.images = [];

    for (let i = 0; i < 4; i++) {
      this.images.push(base + category + i);
    }

    handleImageClick(title: string) {
      this.generateImages(title);
    }
    handleSuccessfullModal() {
      this.successfullModalIsOpen = !this.successfullModalIsOpen;
    }
  }
}
