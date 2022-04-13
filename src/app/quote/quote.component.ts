import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1,new Date(2002,12,8),"Kelvin","Ludwig Wittgenstein","Whereof one cannot speak, thereof one must be silent",45,15,false),
    new Quote(2,new Date(2013,9,4),"Peter","Socrates","The unexamined life is not worth living",20,60,false),
    new Quote(3,new Date(2015,3,30),"Victoria","Mahatma Gandhi","Be the change that you wish to see in the world.",40,10,false),
    new Quote(4,new Date(2016,5,20),"John","Heraclitus","One cannot step twice in the same river",20,60,false),
    new Quote(5,new Date(2020,11,26),"Eunice","Martin Heidegger","He who thinks great thoughts, often makes great errors",20,5,false),
    new Quote(6,new Date(2021,9,3),"Rono","Aristotle","We are what we repeatedly do. Excellence, then, is not an act, but a habit",5,5,false),

  ];

  populars:Quote[]=[
    new Quote(1,new Date(2002,12,8),"Kelvin","Ludwig Wittgenstein","Whereof one cannot speak, thereof one must be silent",45,15,false),
    new Quote(3,new Date(2015,3,30),"Victoria","Mahatma Gandhi","Be the change that you wish to see in the world.",40,10,false),
    new Quote(2,new Date(2013,9,4),"Peter","Socrates","The unexamined life is not worth living",20,60,false),
];


  

addNewQuote(quote: { userName: string; author: string; quote: string; }){
  let quotesLength=this.quotes.length+1;

  let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,0,0,false);

  this.quotes.push(quoteObj);
}
toggleDetails(index: number){
  this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
}

deleteQuote(isDeleted: any,index: number){

  if(isDeleted){
    let remove=confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
    if(remove){
      this.quotes.splice(index,1)
    }
  }

}
upvoteFunc(index:string | number){
    var up=this.quotes[index].upvote+1;
    this.quotes[<any>index].upvote=up;
    
}


downvoteFunc(index: string | number){
  var down=this.quotes[index].downvote+1;
  this.quotes[index].downvote=down;

}

mostPopular(){


this.populars.splice(0,this.populars.length);

var largest=this.quotes[0].upvote;
var number=null;
for (var i=0;i<this.quotes.length;i++){
  number=this.quotes[i].upvote

// largest=Math.max(largest ,number)
}

for (var i=0;i<this.quotes.length;i++){
  
  if(this.quotes[i].upvote===largest){
    this.populars.push(this.quotes[i]);
  }
}



}
constructor() { }

ngOnInit(): void {
}

}