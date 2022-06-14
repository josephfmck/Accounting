//4 modules
// 1. cutting up the accounting into substrings 
// 2. Finding information within substrings 
// 3. formmatting the information into object for all entries 
// 4. totalling the information
// 5. displaying the information



const submitBtn = document.querySelector('#submit');
const textarea = document.querySelector('#textarea');



//* add local storage funcitonality

//* create event listener for main funcitonality 
submitBtn.addEventListener( 'click', (e) => {
    //form event so prevent default
    e.preventDefault();

debugger

    //* grab accting 
    //*full accounting
    const accountingInput = textarea.value;
    console.log(accountingInput);

    //break entire into arr of words
    const arrOfWords = accountingInput.split(' ');
    console.log({arrOfWords});
    

    //*Endpoint words 
    const endpointWords = ['RECEIPTS', 'DISBURMENTS', 'Balance'];

    //*0 for first endpoint
    const endpointsIndex = [0]; 

    //*need to remove \n \t 
    //*remove \n \t from each word
    //loop through words
    //if word has \n \t then split it at \n \t 

    //break arr of words into arr of chars
    const arrOfChars = arrOfWords.map(word => word.split(''));

    console.log({arrOfChars});



    //* Loop through arrOfChars (double arr) 
    //* Within Loop again through actual arr of chars inside each
    //* remove \n \t from each actual arr

    for(let i = 0; i < arrOfChars.length; i++){ 
        for(let j = 0; j < arrOfChars[i].length; j++){
            if(arrOfChars[i][j] === '\n' || arrOfChars[i][j] === '\t'){
                arrOfChars[i][j] = ' ';
            }
        }
    };

    console.log(arrOfChars);


    // [
    //     "6","6","6","0","3","-","3","8","2","3","","7","8","5","-","2","3","3","-","1","3","2","1","","A","t","t","o","r","n","e","y"
    // ]
    //split it at the " "

    for(let i = 0; i < arrOfChars.length; i++){
        arrOfChars[i] = arrOfChars[i].join('');
    }

    console.log({arrOfChars});


    for(let i = 0; i < arrOfChars.length; i++){
        arrOfChars[i] = arrOfChars[i].split(' ');
    }

    console.log({arrOfChars});


    //*join it together 
    // for(let i = 0; i < arrOfChars.length; i++){
    //     arrOfChars[i] = arrOfChars[i].join('');
    // }

    // console.log(arrOfChars);

    //*remove empty arrs inside
    // let newArr = arrOfChars.filter(arr => arr.length > 0);

    // console.log({newArr});

    //*join each arr of chars back into a word
    // for(let i = 0; i < newArr.length; i++) {
    //     newArr[i] = newArr[i].join('');
    // }

    // console.log({newArr});













    // do same for "" created by \n \t replacement
    // for(let i = 0; i < arrOfChars.length; i++){
    //     if(arrOfChars[i].length === 0) {
    //         console.log("hit");
    //     }
    // };
    // console.log({arrOfChars});

    //remove empty arrs 

    //join back together 




    // for( let i = 0; i < arrOfWords.length; i++) {
    //     //*split word into chars
    //     let arrOfChars = arrOfWords[i].split('');




        // //if word has it inside
        // if(arr2[i].includes('\n')) {
        //     //split word where the \n is 
        //     arr2[i] = arr2[i].replace('\n', '');
        // } 

        // if(arr2[i].includes('\t')) {
        //     //remove \t
        //     arr2[i] = arr2[i].replace('\t', '');
        // }


        //loop through that words chars, find \t \n
    //     for(let j = 0; j < arr2[i].length; j++) {
    //         //*to find \n if "\" AND next index "n"
    //         if(arr2[i][j] === "\/" && arr2[i][j] === "n") {
    //             //replace \ with ''
    //             arr2[i] = arr2[i].replace('\/', '');
    //             //replace n with ''
    //             arr2[i+1] = arr2[i+1].replace('n', '');
    //         }
    //     }
    // }

   // console.log({arr});




    //*find index of endpoint words 
    // for( let i = 0; i < arr.length; i++){
    //     if(arr[i] === 'RECEIPTS') {
    //         console.log("hit");
    //         console.log({"RECEIPTS": i});
    //         //find the index and the word in obj 

    //         //!doesnt hit since \n and \t involved

    //     }
    // }


//* split into substrings, find information 
//* format information into object


//*output information 

});




