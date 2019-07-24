import { Component, OnInit,Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {
  // @Input('expanded') expanded;
  // @Input('expandHeight') expandedHeight;
  @Input('product') product;

  currentHeight: number = 0;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  // ngAfterViewInit(){
  //   console.log(this.expanded);
  //   console.log(this.expandedHeight);
  // }

  async buyItem(product){
    let toast = await this.toastCtrl.create({
      message: `added to the cart: ${product.name}`
    });
    toast.present();
  }

}
