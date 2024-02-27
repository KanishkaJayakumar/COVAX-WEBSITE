import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    'https://imgs.search.brave.com/9u5i7ECauu2ZtYPBHGzkDZ4Cnlfg4fXuiddX1LuD9FY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYW5kLXB1bmNo/ZWQtZmlnaHQtYXR0/YWNrLWNvcm9uYXZp/cnVzLWNvbmNlcHQt/Y292aWQtMTlfNDg4/MjIwLTYxMzQ2Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn',
   'https://imgs.search.brave.com/QX7DDqU6klOpE6uWcX6tUgdYpESV3QxZ8XHO09T-eTc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b3ZpZC1zdGlsbC1s/aWZlLXdpdGgtdmFj/Y2luZV8yMy0yMTQ5/MDc5NTg1LmpwZz9z/aXplPTYyNiZleHQ9/anBn',
    'https://imgs.search.brave.com/5AXKSaBrN9VeOanJXAFpoBGyXfEDDfNeRhiDoH-DehA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzIxMDQyNjE3MjAy/Ny0xMi1pbmRpYS1j/b3ZpZC1nYWxsZXJ5/LTA0MjAtcmVzdHJp/Y3RlZC5qcGc_cT13/XzE1NzYsY19maWxs',    'https://imgs.search.brave.com/Sgorg1NBbwI6yfwcbv_yljepeKW28dbfxEm6zlcMD6I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZXVwLWVwaWRl/bWlvbG9naXN0LXdp/dGgtY292aWQxOS1z/YW1wbGUtdGVzdC10/dWJlXzYzNzI4NS00/NzI0LmpwZz9zaXpl/PTYyNiZleHQ9anBn',
    'https://imgs.search.brave.com/YK52djOyyTBP8vG59bZ_0XD_SC1Ur3AyUZT0BJuipm4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3NhdHJpcHVyYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDQvY292aWQt/Y2VydGlmaWNhdGUu/anBn',
  ];

  districts = [
    'Tiruvallur', 'Ponneri', 'Poonamallee', 'Avadi', 'Ambattur', 'Tiruttani', 'Pallipattu', 'Gummidipoondi', 'Uthukottai', 'Thiruvallur', 'Minjur', 'Sholavaram', 'Red Hills'
    // Add more districts as needed
  ];
  selectedDistrict: string = '';

  states = [
    'Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'
  ];
  selectedState: string = '';
  pins=[
    '600001', '600002', '600003', '600004', '600005', '600006', '600007', '600008', '600009', '600010', '600011', '600012', '600013', '600014', '600015', '600016', '600017', '600018', '600019', '600020', '600021', '600022', '600023', '600024', '600025', '600026', '600027', '600028', '600029', '600030', '600031', '600032', '600033', '600034', '600035', '600036', '600037', '600038', '600039', '600040', '600041', '600042', '600043', '600044', '600045', '600046', '600047', '600048', '600049', '600050', '600051', '600052', '600053', '600054', '600055', '600056', '600057', '600058', '600059', '600060', '600061', '600062', '600063', '600064', '600065', '600066', '600067', '600068', '600069', '600070', '600071', '600072', '600073', '600074', '600075', '600076', '600077', '600078', '600079', '600080', '600081', '600082', '600083', '600084', '600085', '600086', '600087', '600088', '600089', '600090', '600091', '600092', '600093', '600094', '600095', '600096', '600097', '600098', '600099', '600100'
  ];
  selectedPin: string = '';

}
