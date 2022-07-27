import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownhome',
  templateUrl: './dropdownhome.component.html',
  styleUrls: ['./dropdownhome.component.scss']
})
export class DropdownhomeComponent implements OnInit {

  homecol1 = [{ name: 'Kitchen,Cookwear & Servewear', lists: ['Pans', 'Tawas', 'Pressure Cookers', 'Kitchen Tools', 'Gas Stoves'] }]
  homecol11 = [{ name: 'Tablewear & Dinnerwear', lists: ['Coffee Mugs', 'Dinner Set', 'Barware', 'Kitchen Tools', 'Gas Stoves'] }]
  homecol12 = [{ name: 'Kitchen Storage', lists: ['Water Bottles', 'Lunch Boxes', 'Flasks', 'Caaseroles', 'Kitchen Containers'] }]
  homecol13 = [{ name: 'Cleaning Supplies' }]
  homecol2 = [{ name: 'Furniture Top Offers' }]
  homecol21 = [{ name: 'Bed Room Furniture', lists: ['Beds', 'Matresses', 'Wardrobes'] }]
  homecol22 = [{ name: 'Living Room Furniture', lists: ['Sofa', 'Sofa Beds', 'TV Units', 'Dinning Tables & Chairs', 'Coffee Tables', 'Shoe Racks'] }]
  homecol23 = [{ name: 'Office & Study Room Furniture', lists: ['Kids\' Room Funiture', 'Flasks', 'Caaseroles', 'Kitchen Containers'] }]
  homecol24 = [{ name: 'DIY Furniture', lists: ['Bean Bags', 'Collapsible Wardrobe'] }]
  homecol3 = [{ name: 'Furnishing', lists: ['Bedsheets', 'Curtains', 'Cushioons & Pillows', 'Blankets', 'Bath Towels', 'Kitchen & Table Linen', 'Floor Coverings'] }]
  homecol31 = [{ name: 'Smart Home Automation', lists: ['Smart Security System', 'Smart Door Locks'] }]
  homecol32 = [{ name: 'Home Improvement', lists: ['Tools & Measuring Equipments', 'Home Utilities & Organizers', 'Lawn & Gardening', 'Bathroom & Kitchen Fittings'] }]
  homecol4 = [{ name: 'Home Decor', lists: ['Paintings', 'Clocks', 'Wall Shelves', 'Stickers', 'Showpieces & Figurines'] }]
  homecol41 = [{ name: 'Home Lightning', lists: ['Bulbs', 'Table Lamps', 'Wall Lamps', 'Ceiling Lamps', 'Emergency Lights'] }]
  homecol42 = [{ name: 'Festive Decor & Gifts' }]
  homecol43 = [{ name: 'Pet Supplies', lists: ['Dogs', 'Cats', 'Fish & Aquatics'] }]
  homecol5 = [{ name: 'Durability Certified Furniture' }]
  homecol51 = [{ name: 'Featured' }]
  homecol52 = [{ name: 'Christmas Store', lists: ['Mugs Store'] }]
  homecol53 = [{ name: 'Gardening Store', lists: ['Stainless Steel Store', 'Milton', 'Bombay Dyeing', '@home', 'HomeTown', 'Ajanta', 'Spaces by Welspun', 'Prestige'] }]
  homecol54 = [{ name: 'Perfect Homestore' }]

  constructor() { }

  ngOnInit(): void {
  }

}
