import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownmobile1',
  templateUrl: './dropdownmobile.component.html',
  styleUrls: ['./dropdownmobile.component.scss']
})
export class DropdownmobileComponent1 implements OnInit {

  constructor() { }

  col1 = [{ name: 'Mobiles', lists: ['Redmi', 'Mi', 'Xiomi', 'Sansung', 'Infinix', 'Apple', 'Oppo', 'Vivo', 'Honor', 'Asus', 'Poco X2', 'realme Narzo 10', 'Infinix Hot 9', 'IQOO 3', 'Iphone SE', 'Motorola razr', 'reame Narzo 10A', 'Motorola g8 power lite'] }]
  col2 = [{ name: 'Mobile Accessories', lists: ['Mobile Cases', 'Headphones & Headset', 'Power Banks', 'Screen Guards', 'Memory Cards', 'Smart Headphones', 'Mobile Cables', 'Mobile Chargers', 'Mobile Holders'] }]
  col21 = [{ name: 'Smart Wearable Tech', lists: ['Smart Watches', 'Smart Glasses', 'Smart Bands'] }]
  col22 = [{ name: 'Health Care Appliances', lists: ['Bp Monitor', 'Weighing Scale'] }]
  col3 = [{ name: 'Laptops', lists: ['Gaming Laptops'] }]
  col31 = [{ name: 'Desktop PCs' }]
  col32 = [{ name: 'Gaming & Accessories' }]
  col33 = [{ name: 'Computer Accessories', lists: ['External Hardisks', 'Pendrives', 'Laptop Skins and Decal', 'Laptop Bags', 'Mouse'] }]
  col34 = [{ name: 'Computer Peripherals', lists: ['Printers & Ink Cartridges', 'Monitors'] }]
  col35 = [{ name: 'Tablets', lists: ['Apple iPads'] }]
  col4 = [{ name: 'Televisions' }]
  col41 = [{ name: 'Speakers', lists: ['Home Audio Speakers', 'Home Theaters', 'Soundbars', 'Bluetooth Speakers', 'DTH Setup Box'] }]
  col42 = [{ name: 'Smart Home Automation', lists: ['Google Nest'] }]
  col43 = [{ name: 'Camera', lists: ['DSLR & Mirrorless', 'Compact & Bridge Cameras', 'Sport & Action'] }]
  col44 = [{ name: 'Camera Accessories', lists: ['Lens', 'Tripods'] }]
  col45 = [{ name: 'Network Component' }]
  col5 = [{ name: 'Featured', lists: ['Google Assistant Store', 'Laptops on Buyback Guarantee', 'Flipkart Smartbuy', 'Li-Polymer Power Banks', 'Sony PS4 Pro & Slim', 'Apple Products', 'Microsoft Store', 'Lenovo Phab Series', 'Jbl Speakers', 'Smartphone on Buyback Guarantee', 'Philips', 'Dr.Morepen', 'Complete Mobile Protection', 'Mobiles No Cost Emi', 'Huawei Watch Gt 2e Smart Watch'] }]

  ngOnInit(): void {
  }

}
