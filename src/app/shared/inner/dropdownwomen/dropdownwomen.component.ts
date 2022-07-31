import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownwomen1',
  templateUrl: './dropdownwomen.component.html',
  styleUrls: ['./dropdownwomen.component.scss']
})
export class DropdownwomenComponent1 implements OnInit {

  womencol1 = [{ name: 'Clothing' }]
  womencol11 = [{ name: 'Women Western & Maternity Wear', lists: ['Top Wears', 'Dresses', 'Jeans', 'Shorts', 'Skirts', 'Jeggings & Tights', 'Trousers & Capris'] }]
  womencol12 = [{ name: 'Lingerie & Sleepwear', lists: ['Bras', 'Pantis', 'Lingerie Sets', 'Night Dresses & Nighties', 'Shapewear', 'Camisoles & Slips'] }]
  womencol13 = [{ name: 'Swim & Beach Wear' }]
  womencol14 = [{ name: 'Party Dresses' }]
  womencol15 = [{ name: 'Sports Wear' }]
  womencol16 = [{ name: 'Winter Wear' }]
  womencol2 = [{ name: 'Ethnic Wear', lists: ['Sarees', 'Kurtas & Kurtis', 'Dress Material', 'Lehenga Choli', 'Blouse', 'Kurta Wear & Salwar Suits', 'Gowns', 'Dupattas'] }]
  womencol21 = [{ name: 'Ethnic Bottom', lists: ['Leggings & Chudidars', 'Palazzos', 'Shararas', 'Salawars & Patiala', 'Dhoti Pants', 'Ethnic Trouser', 'Saree Shapewear & Peticoats'] }]
  womencol3 = [{ name: 'Footwear', lists: ['Leggings & Chudidars', 'Palazzos', 'Shararas', 'Salawars & Patiala', 'Dhoti Pants', 'Ethnic Trouser', 'Saree Shapewear & Peticoats'] }]
  womencol31 = [{ name: 'Sandals', lists: ['Flat', 'Heels', 'Wedges'] }]
  womencol32 = [{ name: 'Shoes', lists: ['Sports Shoes', 'Casual Shoes', 'Boots'] }]
  womencol33 = [{ name: 'Ballerinas' }]
  womencol34 = [{ name: 'Slippers & Flip-Flops' }]
  womencol35 = [{ name: 'Watches' }]
  womencol36 = [{ name: 'Smart Watches' }]
  womencol37 = [{ name: 'Personal Care Appliances', lists: ['Hair Straightners', 'Hair Dryers', 'Epilators'] }]
  womencol4 = [{ name: 'Beauty & Grooming', lists: ['Make Up', 'Skin Care', 'Hair Care', 'Bath & Spa', 'Deodrants & Perfumes'] }]
  womencol41 = [{ name: 'Jewellery', lists: ['Artificial Jewellery', 'Silver Jewellery', 'Precious Jewellery', 'Coins & Bars'] }]
  womencol42 = [{ name: 'Accessories', lists: ['Hand Bags', 'Shoulder Bags', 'Totes', 'Sling Bags', 'Clutches', 'Wallets & Belts', 'Luggage & Travel', 'Sunglasses', 'Frames'] }]
  womencol5 = [{ name: 'Featured', lists: ['Forever 21', 'Accessorize', 'W', 'Pantaloons', 'Chemistry', 'Lakme', 'Nivea', 'Catwalk', 'Titan Raga', 'Divastri', 'Fastrack', 'Rare Roots', 'Anmi', 'Coins & Bars', 'Crocs'] }]
  womencol51 = [{ name: 'Trending Today', lists: ['Ruffles & Frills', 'Pastel Kurtas & Kurtis', 'Designer Net Sarees'] }]


  constructor() { }

  ngOnInit(): void {
  }

}
