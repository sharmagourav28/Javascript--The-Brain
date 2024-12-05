const myObj = {
  isStudy: true,
  isPrint: function () {
    console.log(
      `my name is ${this.name} and i am studuying is ${this.isStudy}`
    );
  },
};

const newObj = Object.create(myObj);
newObj.isStudy = false;
newObj.name = "Gourav";
newObj.isPrint();
