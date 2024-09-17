//Map
let ages=new Map();
ages.set("praveen",22);
ages.set("kumar",23);

console.log(`praveen age is , ${ages.get("praveen")}`)
console.log( `do you know the vishnu age? , ${ages.has("vishnu")}`)

ages.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  console.log(ages.size)
  ages.delete("kumar");

  for(let[key ,value] of ages){
    console.log(`${key}:${value}`)
  }
  ages.clear();
  console.log(ages.size)

  //polymorphism
   
  class shape{
    drawn(){
       return "this is from general shape";
    }
  }

  class squre extends shape{
    drawn(){
        return'this is from squre shape';
    }
  }

  class circle extends shape{
    drawn(){
         return "this is from circle shape"
    }
  }

  
  let s= new shape();
 console.log(s.drawn());

 s=new circle();
 console.log(s.drawn());