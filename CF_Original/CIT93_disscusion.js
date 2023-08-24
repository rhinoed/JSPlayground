function houseSizePts(houseSize) {
    
    switch (houseSize){
        case "large":
            hsizePoints = hsizePoints + 10;
        case "medium":
            hsizePoints = hsizePoints + 7;
        case "small":
            hsizePoints = hsizePoints + 4;
        case "apartment": 
            hsizePoints = hsizePoints + 2;
        // you don't have to include the default but it is a good idea to catch any unexpected value
        default:
            hsizePoints = houseSize + 0
    }
    console.log(`based on size of house  ${houseSize} the points would be ${hsizePoints}.`);
}
