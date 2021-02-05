import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Park',
      url:
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Stadium',
      url:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Cafe',
      url:
        'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Park',
      url:
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Stadium',
      url:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Cafe',
      url:
        'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Park',
      url:
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Stadium',
      url:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Cafe',
      url:
        'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Park',
      url:
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Stadium',
      url:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Cafe',
      url:
        'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Park',
      url:
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Stadium',
      url:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Cafe',
      url:
        'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Park',
      url:
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Stadium',
      url:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Cafe',
      url:
        'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
