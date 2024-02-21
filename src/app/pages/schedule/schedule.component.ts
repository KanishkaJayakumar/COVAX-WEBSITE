import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterService } from '../../center.service';
import { ImageService } from '../../image.service';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  locations: any[] = [];
  selectedLocation: string = '';
  imageData : any;

  constructor(private http: HttpClient, private router: Router, private centerService : CenterService, private imageService : ImageService) { }


  centers: any[] = [];


  ngOnInit(): void {
    this.centerService.getAllCenters().subscribe(
      (data: any[]) => {
        console.log('Successfully got data');
        this.locations = data;
        console.log(this.locations);
      },
      (error: any) => {
        console.error('Error fetching centers:', error);
      }
    )
  }




  districts = [
    'Tiruvallur', 'Ponneri', 'Poonamallee', 'Avadi', 'Ambattur', 'Tiruttani', 'Pallipattu', 'Gummidipoondi', 'Uthukottai', 'Thiruvallur', 'Minjur', 'Sholavaram', 'Red Hills'
  ];
  selectedDistrict: string = '';

  states = [
    'Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'
  ];
  selectedState: string = '';
  pins = [
    '600001', '600002', '600003', '600004', '600005', '600006', '600007', '600008', '600009', '600010', '600011', '600012', '600013', '600014', '600015', '600016', '600017', '600018', '600019', '600020', '600021', '600022', '600023', '600024', '600025', '600026', '600027', '600028', '600029', '600030', '600031', '600032', '600033', '600034', '600035', '600036', '600037', '600038', '600039', '600040', '600041', '600042', '600043', '600044', '600045', '600046', '600047', '600048', '600049', '600050', '600051', '600052', '600053', '600054', '600055', '600056', '600057', '600058', '600059', '600060', '600061', '600062', '600063', '600064', '600065', '600066', '600067', '600068', '600069', '600070', '600071', '600072', '600073', '600074', '600075', '600076', '600077', '600078', '600079', '600080', '600081', '600082', '600083', '600084', '600085', '600086', '600087', '600088', '600089', '600090', '600091', '600092', '600093', '600094', '600095', '600096', '600097', '600098', '600099', '600100'
  ];
  selectedPin: string = '';

  selectedAgeGroup: string='';
  ageGroups: string[] = ['"1-5"','"5-10"', '"11-20"', '"21-30"', '"31-40"', '"41-50"', '"51-60"', '"61-70"', '"71-80"', '"81-90"', '"91-100"'];

  vaccinationCenters
    = [
      { centername: 'City Health Center', phonenumber: '044-23456789', workinghours: '10 A.M - 4 P.M', centerlocation: 'City1, State1', imageUrl: 'https://imgs.search.brave.com/stdJivmTIzNwJS7C8qqAv6gW53Trkx3VLnzvRErRk3U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MjcwNjQxMy9waG90/by9tb2Rlcm4taG9z/cGl0YWwtYnVpbGRp/bmcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPW9VSUxza210/YVBpQTcxMURQNTNE/RmhPVXZFN3BmZE5l/RUs5Q2Z5eGxHaW89' },
      { centername: 'Community Clinic', phonenumber: '044-23456789', workinghours: '10 A.M - 4 P.M', centerlocation: 'City2, State2', imageUrl: 'https://imgs.search.brave.com/Bq8Qy-b6jrTAw6Y6oOYTSJajPnZ2BAJn5WY3TEPYKC8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/Mzg3Njg0MC9waG90/by9ob3NwaXRhbC1z/aWduLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1yMXMxZUNL/aEs0anByWDRIb2RV/RE9aMzJIX3g1cksw/eElBU3FUeDFsd1Zz/PQ' },
      {
        centername: 'Sunshine Hospital Vaccination Center',
        phonenumber: '044-23456789',
        workinghours: '9 A.M - 5 P.M',
        centerlocation: 'Sunshine City, State3',
        imageUrl: 'https://imgs.search.brave.com/ZfNQOhUJVcMo2qVwKZK23ZffngUnC4eGqZT45_GYpCI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4LzM4/LzFhLzA4MzgxYTYy/ZTY5NzBjYzJiMTE5/NDc5MzFkMjdjZGEz/LmpwZw'
      },
      {
        centername: 'Green Valley Medical Center',
        phonenumber: '044-23456789',
        workinghours: '8:30 A.M - 4:30 P.M',
        centerlocation: 'Green Valley, State4',
        imageUrl: 'https://imgs.search.brave.com/jgylQ6kdEdVwr08VM0m_Co-5i5avi5cPHmeHJGrl2LI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NjEyNzk3L3Bob3Rv/L2Fwb2xsby1ob3Nw/aXRhbC1pbmRpYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WVBGeHlVSVEybDF3/ZkE4QmJGRW1tdTJp/RHpoMmNoV2xZajVE/a1dKZ3RPQT0'
      }, {
        centername: 'Evergreen Health Services',
        phonenumber: '044-23456789',
        workinghours: '9 A.M - 6 P.M',
        centerlocation: 'Evergreen City, State5',
        imageUrl: 'https://imgs.search.brave.com/lHXNinsi_Y8aztfhFf2MHQ489Lvs-qIG8ZOFE7WpMWc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhhLzNi/LzkwLzhhM2I5MGIw/NWRkNmVjMGUwMTVj/ZWFjOWUzNGI2ODMx/LmpwZw'
      },
      {
        centername: 'Pristine Wellness Clinic',
        phonenumber: '044-23456789',
        workinghours: '10 A.M - 5 P.M',
        centerlocation: 'Pristine Town, State6',
        imageUrl: 'https://imgs.search.brave.com/XSR4_PE8X6qCtFPL-bG7_lZWy01xB1h5tSEhUIZfCts/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk0/ODI4NzMzL3Bob3Rv/L2lsbHVtaW5hdGVk/LWRyaXZld2F5LW9m/LWhvc3BpdGFsLWF0/LW5pZ2h0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz10bUt5/WUtUYmwwQlBqOEc4/dDQ4MHZQa0dJRXZz/Uzg1OGFEZElPTjZa/Mlk0PQ'
      },
      {
        centername: 'Serenity Medical Center',
        phonenumber: '044-23456789',
        workinghours: '8 A.M - 4 P.M',
        centerlocation: 'Serenity City, State7',
        imageUrl: 'https://imgs.search.brave.com/fPNy8TULsTUfdpoSt7gA5SlObv7IIqCxaFH6624U5Qo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FlL0Fwb2xsb19Q/cm90b25fQ2FuY2Vy/X0NlbnRyZSxfQ2hl/bm5haS5qcGc'
      },
      {
        centername: 'Health Hub Clinic',
        phonenumber: '044-23456789',
        workinghours: '8:30 A.M - 5:30 P.M',
        centerlocation: 'Health Hub City, State8',
        imageUrl: 'https://imgs.search.brave.com/M4AIHWgPuwZOBUe0pKW45lcpnx4Ikc0N7vIT63tJe34/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYWdh/ZG9uZS5tZWRpYS5j/bGllbnRzLmVsbGlu/Z3RvbmNtcy5jb20v/aW1nL3Bob3Rvcy8y/MDIxLzAxLzA5LzA1/MDhfbG9jX3dmcF9u/dmhfaG9zcGl0YWxf/M190MTE3MF90MTE3/MC5qcGc_NWNjNzE4/NjY1YWI2NzJkYmE5/M2Q1MTFhYjRjNjgy/YmIzNzBlNWY4Ng'
      },
      {
        centername: 'Harmony Healthcare Center',
        phonenumber: '044-23456789',
        workinghours: '9:30 A.M - 6:30 P.M',
        centerlocation: 'Harmony Town, State9',
        imageUrl: 'https://imgs.search.brave.com/ni4OafAHqpM5Z6SO-mfvW9WeIO5uSrzeUDlYtuA2H80/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/MTk0NTQ2MS9waG90/by9tb2Rlcm4taG9z/cGl0YWwtYnVpbGRp/bmcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUZ0b1RrSkIx/QlRhMXl1NHFxSEpO/X1JIQWtaaUI5Wk5K/MEI4THVuVHBSWHM9'
      },
      {
        centername: 'Central Medical Hub',
        phonenumber: '044-23456789',
        workinghours: '10 A.M - 4 P.M',
        centerlocation: 'Central City, State10',
        imageUrl: 'https://imgs.search.brave.com/TBmV9ZPmhjqseizfnfrjNW-Z5DtJuJaP1jdPrBNfDG4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/ODI0MjcvcGhvdG8v/ZW1lcmdlbmN5LXNp/Z25zLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YZ29xRUhV/aEZpSkNoNzRjdzZn/ZnFBSzF3dEdyaEVJ/N0lwWU5nd1QxdjNv/PQ'
      },
      {
        centername: 'Blue Sky Hospital Vaccination Center',
        phonenumber: '044-23456789',
        workinghours: '8 A.M - 5 P.M',
        centerlocation: 'Blue Sky City, State11',
        imageUrl: 'https://imgs.search.brave.com/6i6dlD1s1kPmFQ62bUQS0aXO7sHkfqOJfk8YdD6u0EM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MjcwNjUwNC9waG90/by9tb2Rlcm4taG9z/cGl0YWwtYnVpbGRp/bmcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPURUNllEUlpN/SDVHNWRMLVF2NlZ3/UHBWRHBJRHhKcWtB/WTRHZzBvakdpNTg9'
      }
    ];



  searchTerm: string = '';

  get filteredItems() {
    return this.vaccinationCenters.filter(center =>
    center.centerlocation?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  bookSlot(center: any) {
    this.router.navigate(['/booking'], {
      queryParams: {
        centername: center.centername,
        centerlocation: center.centerlocation, 
      }
    });
  }
}
