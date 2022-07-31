import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownmen',
  templateUrl: './dropdownmen.component.html',
  styleUrls: ['./dropdownmen.component.scss']
})
export class DropdownmenComponent implements OnInit {


  mencol1 = [{ name: 'Footwear',namelink:'/footwear', lists: ['Sport Shoes', 'Casual Shoes Formal Shoes', 'Sandals & FLoater', 'Flip-Flops', 'Loafer', 'Boots', 'Running Shoes', 'Sneakers'],
 listlink:['/sportshoes', '/casualshoes', '/formalshoes', '/sandals&floater', '/flipflops', '/loafer',] }]
  mencol12 = [{ name: 'Mens Grooming',namelink:'/mensgrooming', lists: ['Deodrants', 'Perfumes', 'Bed Care & Grooming', 'Shaving & Aftershave', 'Sexual Wellness'],
listlink:['/deodrants','/perfume', '/bedcaregrooming','/shavingaftershave'] }]
  mencol2 = [{ name: 'Clothing' }]
  mencol21 = [{ name: 'Top Wear', lists: ['Deodrants', 'Perfumes', 'Bed Care & Grooming', 'Shaving & Aftershave', 'Sexual Wellness'] }]
  mencol22 = [{ name: 'Bottom Wear', lists: ['Deodrants', 'Perfumes', 'Bed Care & Grooming', 'Shaving & Aftershave', 'Sexual Wellness'] }]
  mencol23 = [{ name: 'Suits,Blazers & Waistcoats', lists: ['Deodrants', 'Perfumes', 'Bed Care & Grooming', 'Shaving & Aftershave', 'Sexual Wellness'] }]
  mencol24 = [{ name: 'Ties,Socks,Caps & More' }]
  mencol25 = [{ name: 'Fabrics' }]
  mencol3 = [{ name: 'Winter Wear', lists: ['Sweatshirts', 'Jackets', 'Sweaters', 'Tracksuits'] }]
  mencol31 = [{ name: 'Ethnic Wear', lists: ['Kurtas', 'Ethnic Wear', 'Sherwanis', 'Ethnic Pyjama', 'Dhoti', 'Lungi'] }]
  mencol32 = [{ name: 'Inner & Loungewear', lists: ['Briefs & Trucks', 'Vests', 'Boxers', 'Pyjamas & Lounge Pants', 'Thermal', 'Night Suits'] }]
  mencol33 = [{ name: 'Raincoats & Windcheaters' }]
  mencol4 = [{ name: 'Watches', lists: ['Fastrack', 'Casio', 'Titan', 'Fossil', 'Sonata'] }]
  mencol41 = [{ name: 'Accessories', lists: ['Backpacks', 'Wallet', 'Belts', 'Sunglasses', 'Luggage & Travel', 'Frames', 'Jewellery'] }]
  mencol42 = [{ name: 'Sports & Fitness Store' }]
  mencol5 = [{ name: 'Smart Watches' }]
  mencol51 = [{ name: 'Samrt Bands' }]
  mencol52 = [{ name: 'Personal Care & Appliances', lists: ['Trimmers', 'Shavers', 'Grooming Kits'] }]
  mencol53 = [{ name: 'Featured', lists: ['Watches Store', 'Footwear Club', 'Bags & Wallets', 'T-Shirts Store', 'Adidas', 'Beardo', 'Reebok', 'Sketchers', 'Nike'] }]
  constructor() { }

  ngOnInit(): void {
  }

}
