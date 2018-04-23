import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contact: Contact = {
    id: 1,
    firstName: 'Hinh',
    lastName: 'Duong',
    phone: '1234567890',
    email: 'hinhdx@gemvietnam.com'
  }

  contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Hinh',
      lastName: 'Duong Xuan',
      phone: '1234567890',
      email: 'hinhdx@gemvietnam.com',
    },
    {
      id: 1,
      firstName: 'Sy',
      lastName: 'Nguyen Van',
      phone: '0934908042',
      email: 'synv@gemvietnam.com'
    },
    {
      id: 1,
      firstName: 'Binh',
      lastName: 'Nguyen Thanh',
      phone: '0914980141',
      email: 'binhnt@gemvietnam.com'
    },
    {
      id: 1,
      firstName: 'Dung',
      lastName: 'Nguyen Ba',
      phone: '0964970140',
      email: 'dungnb@gemvietnam.com'
    }
  ];

  constructor() { }

  ngOnInit() {
    // console.log(this.contacts);
  }

}
