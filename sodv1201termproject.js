/* SODV 1201 Introduction to Web Programming 
SODV 1201 Term Project- Co-Worker Office Space 
 Program designed and coded by: SODV 1201 Group 2: Sasha Greene,  Gurleen Kaur, Paul K Kho, Evan Maclean
 Instructor:                   Dima Marachi
 Due       :     Phase 1   : June 2 2022
                 Phase 2   : June 24 2022 
*/

function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}
function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var role = document.Form.role.value;

    var namErr= emailErr = mobileErr =roleErr=true;

    if (name=="")
    {
        printError("nameErr", "PLEASE ENTER YOUR NAME");
        var elem=document.getElementById("name");
        
    }
    else{
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(name)===false){
            printError("nameErr","PLEASE ENTER A VALID NAME");
            var elem=document.getElementById("name");

        }else{
            namErr=false;
            printError("nameErr","");
            var elem=document.getElementById("name");
        }
    }

    
    if (email=="")
    {
        printError("emailErr", "PLEASE ENTER YOUR EMAIL ADDRESS");
        var elem=document.getElementById("email");
        
    }
    else{
        var regex=/^S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","PLEASE ENTER A VALId EMAIL ADDRESS");
            var elem=document.getElementById("email");

        }else{
            namErr=false;
            printError("emailErr","");
            var elem=document.getElementById("email");
        }
    }




    if (mobile-number=="")
    {
        printError("mobileErr", "PLEASE ENTER YOUR MOBILE NUMBER");
        var elem=document.getElementById("name");
        
    }
    else{
        var regex=/^[1-9]\d{9}$/;
        if(regex.test(mobile)=== false){
            printError("mobileErr","PLEASE ENTER A VALID 10 DIGIT MOBILE NUMBER");
            var elem=document.getElementById("mobile");

        }else{
            mobileErr=false;
            printError("mobileErr","");
            var elem=document.getElementById("mobile");
        }
    }

    
    if (role="")
    {
        printError("roleErr", "PLEASE ENTER YOUR ROLE");
        var elem=document.getElementById("ole");
        
    }else{
        printError("roleErr","");
            roleErr=false;
            var elem=document.getElementById("role");
        }
    

        if ((nameErr|| emailErr||mobileErr||roleErr)== true){
            return false;
        }

};

// SODV 1201 Term Project 
// Javascript, Node, API and REST API 

// Home Page Javascript
$(document).ready(function( ) {
    DisplayAllListings();
})

// Page 2 Javascript


// Page 3 Javascript


// Page 4 Javascript

class Listing {
    constructor(listingID, price, term, publicTransit, parking, smoking, squareFeet,  capacity, address, neighbourhood) {
        this.listingID=listingID;
        this.price = price;
        this.term=term;
        this.publicTransit=publicTransit;
        this.parking=parking;
        this.smoking=smoking;
        this.squareFeet=squareFeet;
        this.capacity=capacity;
        this.address=address;
        this.neighbourhood=neighbourhood;

    }
}

let listing1 = new Listing("001", 200, "Daily", true, true, false, 200, 1, "1221 Queen Avenue", "Thornhill" );
let listing2 = new Listing("002", 1200, "Weekly", false, true, false, 600, 4 , "1234 long Street", "Meadowbrook");
let listing3 = new Listing("003", 2000, "Monthly", false, false, false, 1200, 8 , "342 Aron Way", "Big Hills");
let listing4 = new Listing("004", 500, "Weekly", true, true, true, 1000, 6 , "1336 King Street", "Remo");
let listing5 = new Listing("005", 875, "Weekly", true, false, true, 350, 1 , "2201 Brightwell Road", "Central");
let listing6 = new Listing("006", 250, "Daily", true, true, false, 356, 3, "1216 Queen Avenue", "Thornhill" );
let listing7 = new Listing("007", 2200, "Monthly", false, false, false, 900, 6 , "343 Aron Way", "Big Hills");
let listing8 = new Listing("008", 675, "Daily", true, true, false, 600, 6, "1000 Queen Avenue", "Thornhill" );

var listings  = [listing1, listing2, listing3, listing4, listing5, listing6, listing7, listing8];

function DisplayAllListings(){
    document.getElementById("display_listings").innerHTML="";
    for(var i = 0; i<listings.length;i++){
        document.getElementById("display_listings").innerHTML+=
        "Listing ID: "+listings[i].listingID+": "+
        "<br>Price: "+listings[i].price +
        "<br>Term: "+listings[i].term+
        "<br>Public Transit:"+listings[i].publicTransit+
        "<br>Parking: "+listings[i].parking+
        "<br>Smoking: "+listings[i].smoking+
        "<br>Square Feet: "+listings[i].squareFeet+
        "<br>Capacity: "+listings[i].capacity+
        "<br>Address: "+listings[i].address+
        "<br>Neighbourhood: "+listings[i].neighbourhood+"<br><br>";
    }
}


function Delist(){
    var listingID = document.getElementById("delist_input_id");
    var index = listings.indexOf(listingID);
    listings.splice(index, 1);
    console.log(listings);
    DisplayAllListings();
}
function ApplyFilters(){
    var filteredlistings=[];
    var filterTransit = document.getElementById("public_transit_filter").checked;
    var filterSmoking = document.getElementById("smoking_filter").checked;
    var filterParking = document.getElementById("parking_filter").checked;
    var filterTerm = document.getElementById("lease_terms_filter").value;
    var filterPriceMax = document.getElementById("filter_price_max").value;
    var filterPriceMin = document.getElementById("filter_price_min").value;
    var filterSquareFeetMax= document.getElementById("filter_square_feet_max").value;
    var filterSquareFeetMin= document.getElementById("filter_square_feet_min").value;
    var filterCapacityMax= document.getElementById("filter_capacity_max").value;
    var filterCapacityMin= document.getElementById("filter_capacity_min").value;
    var filterAddress= document.getElementById("filter_address").value;
    var filterNeighbourhood= document.getElementById("filter_neighbourhood").value;
    //loop through all available listings

   console.log(filterTerm);
   console.log(listings[1].term);

    for(var i=0; i<listings.length; i++){

        var filterOut=false;
        //check if meets all filter criteria, then display.
        
        if(listings[i].publicTransit!=filterTransit){
            filterOut=true;
        }
        
        if(listings[i].smoking!=filterSmoking){
            filterOut=true;
        }
        if(listings[i].parking!=filterParking){
            filterOut=true;
        }
        if(listings[i].term!=filterTerm){
            filterOut=true;
        }
        if(listings[i].price<filterPriceMin){
            filterOut=true;
        }
        if(listings[i].price>filterPriceMax){
            filterOut=true;
        }
        if(listings[i].capacity<filterCapacityMin){
            filterOut=true;
        }
        if(listings[i].capacity>filterCapacityMax){
            filterOut=true;
        }
        if(listings[i].squareFeet<filterSquareFeetMin){
            filterOut=true;
        }
        if(listings[i].squareFeet>filterSquareFeetMax){
            filterOut=true;
        }
        if(listings[i].neighbourhood!=filterNeighbourhood){
            filterOut=true;
        }
        
        if(!listings[i].address.includes(filterAddress)){
            filterOut=true;
        }


        if(filterOut){

        }else{

            filteredlistings.push(listings[i]);
        }
        
    }
    

    console.log(filteredlistings);
    //display filtered listings
    document.getElementById("display_listings").innerHTML="";
    for(var i = 0; i<filteredlistings.length;i++){
        document.getElementById("display_listings").innerHTML+=
        "Listing ID: "+filteredlistings[i].listingID+": "+
        "<br>Price: "+filteredlistings[i].price +
        "<br>Term: "+filteredlistings[i].term+
        "<br>Public Transit:"+filteredlistings[i].publicTransit+
        "<br>Parking: "+filteredlistings[i].parking+
        "<br>Smoking: "+filteredlistings[i].smoking+
        "<br>Square Feet: "+filteredlistings[i].squareFeet+
        "<br>Capacity: "+filteredlistings[i].capacity+
        "<br>Address: "+filteredlistings[i].address+
        "<br>Neighbourhood: "+filteredlistings[i].neighbourhood+"<br><br>";
    }
   // constructor(price, term, publicTransit, parking, smoking, squareFeet,  capacity, address, neighbourhood) {
}





