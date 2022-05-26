module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPriceDolar = oldCart.totalPriceDolar || 0;
 
    this.add = function(item, id){
        var storedItem = this.items[id];
        if (!storedItem){
            storedItem = this.items[id] = {item: item, qty: 0, dolarprice: 0}
        }
        storedItem.qty++;
        storedItem.dolarprice = storedItem.item.dolarprice * storedItem.qty;
        this.totalQty++;
        this.totalPriceDolar += storedItem.item.dolarprice;
     
        
    };
    this.reduceByOne = function(id){
        this.items[id].qty--;
        this.items[id].dolarprice -= this.items[id].item.dolarprice;
         this.totalQty--;
        this.totalPriceDolar -= this.items[id].item.dolarprice;
 
        if (this.items[id].qty <= 0){
            delete this.items[id];
        }
    };

    this.sumar = function(id){
        this.items[id].qty++;
        this.items[id].dolarprice += this.items[id].item.dolarprice;
         this.totalQty++;
        this.totalPriceDolar += this.items[id].item.dolarprice;
     };
  


    this.removeItem = function(id){
        this.totalQty -= this.items[id].qty;
        this.totalPriceDolar -= this.items[id].dolarprice;
         delete this.items[id];
    };

    this.generateArray = function(){
        var arr = [];
        for (var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    };
};