import { getMaxListeners } from 'process';
import { User } from './user';

export const USERS: User[] = [
  { id: 11, e_mail: "dummy@gmail.com", password: "test123",vorname: 'Leo',nachname: 'Rüther', pic_url: 'https://profile-images.xing.com/images/d308643a7b5683654b0db89c81ecd7fd-1/leo-r%C3%BCther.1024x1024.jpg'},
  { id: 12, e_mail: "testuser@t.de", password: "sicheresPasswort",vorname: 'Hans', nachname:'Dampf', pic_url: 'https://alster-klinik.de/wp-content/uploads/2017/06/mann_gesicht_alster-klinik.jpg'}
];
