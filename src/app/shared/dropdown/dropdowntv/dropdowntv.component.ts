import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowntv',
  templateUrl: './dropdowntv.component.html',
  styleUrls: ['./dropdowntv.component.scss']
})
export class DropdowntvComponent implements OnInit {

  tvcol = [{ name: 'Television' }]
  tvcol1 = [{ name: 'New Launches' }]
  tvcol12 = [{ name: 'Smart & Ultra HD' }]
  tvcol13 = [{ name: 'Top Brands', lists: ['Mi', 'Vu', 'Flipkart Smartbuy', 'Thompson', 'Samsung', 'iFFALCON by TCL', 'Nokia', 'LG', 'Realme', 'Motorola', 'Philips', 'Dr.Morepen', 'Complete Mobile Protection', 'Mobiles No Cost Emi', 'Huawei Watch Gt 2e Smart Watch'] }]
  tvcol14 = [{ name: 'Shop By Screen Size', lists: ['24 & Below', '28-32', 'F39-43'] }]
  tvcol2 = [{ name: 'Washing Machine', lists: ['Full Automatic Frontload', 'Semi-Automatic Topload', 'Full Automatic Topload'] }]
  tvcol21 = [{ name: 'Air Conditioners', lists: ['Inverter Ac', 'Split ACs', 'Window ACs'] }]
  tvcol22 = [{ name: 'Shop By Brands', lists: ['LG', 'Hitachi', 'Carrier'] }]
  tvcol23 = [{ name: 'Refrigarator', lists: ['Single Door', 'Double Door', 'Triple Door', 'Side By Side', 'Convertible'] }]
  tvcol3 = [{ name: 'Kitchen Appliances', lists: ['Micro Ovens', 'Oven Toaster Grills(OTG)', 'Juicer/Mixer/Grinder', 'Electric Kettles', 'Induction Cooktops', 'Chimneys', 'Hand Blenders', 'Sandwich Maker', 'Pop Up Toasters', 'Electric Cookers', 'Wet Grinders', 'Food Processor', 'Coffee Makers', 'Dish Washers'] }]
  tvcol31 = [{ name: 'Healthy Living Appliances' }]
  tvcol4 = [{ name: 'Small Home Appliances', lists: ['Irons', 'Water Purifiers', 'Fans', 'Air Coolers', 'Inverters', 'Vacuum Cleaners', 'Sewing Machines', 'Voltage Stabiizers', 'Water Geysers', 'Immersion Rods'] }]
  tvcol41 = [{ name: 'Top Brand', lists: ['Livpure', 'Philips', 'Bajaj', 'IFB', 'Eureka Forbes', 'Kaffs'] }]
  tvcol5 = [{ name: 'Buying Guides', lists: ['Televisions', 'Washing Machines', 'Refrigerators', 'Air Conditioners', 'Water Purifiers', 'Air Purifiers', 'Chimneys', 'Water Geysers'] }]
  tvcol51 = [{ name: 'New Launches', lists: ['Coocaa Smart TV', 'Nokia 4K Android TV', 'Mi 4A Pro Android TV', 'MarQ FHD Smart TV', 'LG Refrigerators', 'Thompson 4k Smart TV', 'Whirpool Refrigerators', 'Kodak LED TVs'] }]

  constructor() { }

  ngOnInit(): void {
  }

}
