// 单一
enum Color  { 
    RED,
    GREEN,
    BLUE
}
enum Size { 
    SMALL,
    MEDIUM,
    LARGE
}

class Product {
    public name: string;
    public size: Size;
    public color: Color;
    
    
    constructor(name:string,size:Size,color:Color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    // to do a filter function bt criteria 
}

let p1 = new Product("apple", Size.SMALL, Color.RED);
let p2 = new Product("orange", Size.SMALL, Color.GREEN);
let p3 = new Product("house", Size.LARGE, Color.BLUE);
let p4 = new Product("water", Size.MEDIUM, Color.GREEN);
let p5 = new Product("car", Size.MEDIUM, Color.BLUE);
let products = [p1, p2, p3, p4, p5];

class SizeSpecification{
    public size: Size;
    constructor(size:Size){
        this.size = size;
    }

    isSatisfied(item:Product) { 
        return item.size = this.size;
    }
}

class ColorSpecification { 
    public color:Color
    constructor(color:Color) {
        this.color = color;
    }
     isSatisfied(item:Product) { 
        return item.color = this.color;
    }
}

class BetterFliter { 
    // 不带入具体数据，只是表明形态
    filter(items:Product[],spec:ColorSpecification| SizeSpecification) { 
        return items.filter(x=>spec.isSatisfied(x))
    }
}

const bf = new BetterFliter();
console.log("sss");
for (let p of bf.filter(products, new ColorSpecification(Color.RED))) { 
    console.log("sss");
}