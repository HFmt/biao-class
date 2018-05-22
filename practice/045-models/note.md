 ES6 

 class A {
     constructor(max_id){
         this.id = max_id || 0
     }
 }

 继承：
  
class B extends A {
    constructor(max_id){
        super(max_id)
    }
}