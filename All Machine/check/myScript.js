let productData = [
  {
    id: 1,
    name: "apple",
    price: 25,
    quantity: 5
  },
  {
    id: 3,
    name: "orange",
    price: 10,
    quantity: 2
  },
  {
    id: 2,
    name: "banana",
    price: 5,
    quantity: 7
  },
  {
    id: 8,
    name: "kiwi",
    price: 20,
    quantity: 5
  }
];

  productData.map((data, indx) => {
    console.log("data",data)
    // let currDiv = document.getElementById("cart");
    var graph = document.createElement("div");
    graph.id = `product_${data.id}`;
    graph.innerHTML = data.name;
    document.getElementById("cart").appendChild(graph);
  });
  

  function myFunction() {
    productData[0].name = "ak";
    console.log("hi");
  }

  let name = {
    printDetails(): function () {
        console.log("Name: "+this.name+"   Age="+this.age);
    }
}