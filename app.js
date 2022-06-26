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
    //!Result: 13 "66603-3823\n785-233-1321\nAttorney"
    //! 58-77 "" as indexes also
    //! ARR OF JUST WORDS
    //? \n and \t are considered their own chars 
    //? \n is one while typing \ n is two 
    

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
    //!Result: 13 ["6","6","6","0","3","-","3","8","2","3","\n","7","8","5","-","2","3","3","-","1","3","2","1","\n","A","t","t","o","r","n","e","y"]
    //! 58-77 [] as indexes also
    //? \n becomes " " when inside arr

    //* Loop through arrOfChars (double arr) 
    //* Within Loop again through actual arr of chars inside each
    //* remove \n \t from each actual arr



    //* remove empty arrs from arrOfChars
    const arrOfCharsEmptyArrsRemoved = arrOfChars.filter(arr => arr.length > 0);
    console.log({arrOfCharsEmptyArrsRemoved});
    //!Result: 13 ["6","6","6","0","3","-","3","8","2","3","\n","7","8","5","-","2","3","3","-","1","3","2","1","\n","A","t","t","o","r","n","e","y"]
    //! 58-77 Now regular indexes



    //* remove \n and \t from each arr of chars
    for(let i = 0; i < arrOfCharsEmptyArrsRemoved.length; i++){ 
        for(let j = 0; j < arrOfCharsEmptyArrsRemoved[i].length; j++){
            if(arrOfCharsEmptyArrsRemoved[i][j] === '\n' || arrOfCharsEmptyArrsRemoved[i][j] === '\t'){
                arrOfCharsEmptyArrsRemoved[i][j] = ' ';
            }
        }
    };
    console.log({arrOfCharsEmptyArrsRemoved});
    //!Result: 13 ["6","6","6","0","3","-","3","8","2","3"," ","7","8","5","-","2","3","3","-","1","3","2","1"," ","A","t","t","o","r","n","e","y"]


    //* loop through each arr of chars and concat them back to strings
    const arrOfCharsJoinedBack = arrOfCharsEmptyArrsRemoved.map(arr => {
        return arr.join('');
    });
    console.log({arrOfCharsJoinedBack});
    //!Result: 13 ["66603-3823 785-233-1321 Attorney"]
    //! 6 ["McKINNEY     "]

    //*Split every string at the spaces
    //to make into individual words 
    const arrOfWordsSplitAtSpaces = arrOfCharsJoinedBack.map(str => str.split(' '));
    console.log({arrOfWordsSplitAtSpaces}); 
    //!Result: 13 ["66603-3823","785-233-1321","Attorney"]
    //! 6 ["McKINNEY", "", "", "", "", ""]


    //* for each arr remove the "" 
    arrOfWordsSplitAtSpaces.map(arr => {
        if(arr.includes('')) {
            //*loop that arr of words
            for(i = 0; i < arr.length; i++){
                //find '' str and remove 
                if(arr[i] === ''){
                    arr.splice(i, 1);
                    //decrement i to account for removed index
                    i--;
                }
            }
        }
    });
    console.log({arrOfWordsSplitAtSpaces});

    //!Result: 11 ["608", "Topeka"]
    //!Result: 13 ["66603-3823","785-233-1321","Attorney"]
    //!Result: 6 ["McKINNEY"]



    //TODO MODULE GRABBING OUT OF 2D ARR TO PLACE INDIVIDUAL WORDS BACK INTO ARR LATER AS THEIR OWN INDEX
    let twoDArr = arrOfWordsSplitAtSpaces;
    let arrOfWordsIWant = []; 

    //*grabbing words out of 2DArr and placing into arr of Objs to later replace that arr
    for(let i = 0; i < twoDArr.length; i++){
        //*words im grabbing from 2D arr and placing in 1D arr
        //? more than 1 word and grab each one later
        //? makes easier oneDArr var
        let oneDArr = twoDArr[i];



        if(oneDArr.length > 1){
            //1 to skip and keep first word
            for(let j = 1; j < oneDArr.length; j++) {
                let obj = {
                    "2Dindex": i,
                    "wordIWant": oneDArr[j]
                };


                //*grab and place in arr
                arrOfWordsIWant.push(obj);
                //*remove extra words from 2D arr
                oneDArr.splice(j, 1);
                j--;
            }
        }
    }
    //* words grabbed out of arr
    console.log({arrOfWordsIWant});
    //!Result: 11 ["608"]
    //!Result: 13 ["66603-3823"]
    //* arr with those words remove (those wanted words to be placed back in later)
    console.log({twoDArr});
    //!Result: word(s) from 11 
    //! {"2Dindex": 11,"wordIWant": "Topeka,"}
    //!Result: word(s) from 13 
    //! {"2Dindex": 13,"wordIWant": "785-233-1321"}
    //! {"2Dindex": 13,"wordIWant": "Attorney"}
    


    //!Right now 
    //?indexes 11: "608"
    //?        12: "Kansas"
    //break
    //?indexes 13: "66603-3823"
    //?        14: "for"
    //!WANT 
    //?indexes 11: "608"
    //?        12: "Topeka"
    //?        13: "Kansas"
    //break (actual indexes change later but for right now psuedo)
    //?indexes 13: "66603-3823"
    //?        14: "785-233-1321"
    //?        15: "Attorney"
    //?        16: "for"
    //* NEXT STEP place them into arr of OG index
    //find all that have same 2Dindex prop and place them in same arr
    //place those arrs in 2dArrWordIWant 
    console.log(arrOfWordsIWant[0]["2Dindex"]);
    console.log(arrOfWordsIWant[1]["2Dindex"]);


    //TODO MODULE NEW ARR GROUPING WORDS WITH SAME ORIGINAL INDEX
    //todo TO PLACE BACK IN LATER AS INDIVIDUAL WORDS
    let twoDArrWordsIWant = [];

    //*loop through wordsIWant arr of objs
    //?LOOP CHECKS FOR 2Dindex value 
    for(let i = 0; i < arrOfWordsIWant.length; i++){

        //*this one arr repeatedly pushed then emptied
        let oneDArrWordsIWant = [];

        //*Grab val for checking rest 
        let twoDindex = arrOfWordsIWant[i]["2Dindex"];
        //? 11 (1) 
        //? 13 (2)

        
        let count = 0;
        //*run loop through all, checking for extras with same twoDindex
        for(j=0; j < arrOfWordsIWant.length; j++) {
        

            //*if matching value AND not already contained in oneDArrWordsIWant
            if(arrOfWordsIWant[j]["2Dindex"] === twoDindex) {

                //used to decrement?
                count++;

                arrOfWordsIWant[j]["count"] = count;
                arrOfWordsIWant[j]["i"] = i;
                arrOfWordsIWant[j]["j"] = j;

                //*push that extra in
                oneDArrWordsIWant.push(arrOfWordsIWant[j]);
                //!increment either i or j to avoid duplicate pushes
                //!Result right now: 
                //!2nd run: [{"2Dindex": 13, "wordIWant": "785-233-1321"},{"2Dindex": 13,"wordIWant": "Attorney"}]
                //!3rd run: [{"2Dindex": 13, "wordIWant": "785-233-1321"},{"2Dindex": 13,"wordIWant": "Attorney"}]
                
                //*if already filled with one then skip the next iteration of i
                //* to avoid duplicate pushes
                if(oneDArrWordsIWant.length > 1) {
                //increment to skip duplicate
                i = i + count - 1;
                }




                //! skipping 2 of the indexes 
                //! gets 25 but skips previous 17 and 24
            }
        }

        //? ?decrement i with count
        // if(count > 1) {
        //     i = i - count;
        // }

        console.log({oneDArrWordsIWant});              
        twoDArrWordsIWant.push(oneDArrWordsIWant);
    }
    
    console.log({twoDArrWordsIWant});








    //? TESTING 
    // let twoDArr = [
    //     ['arr1 item 1'], 
    //     ['arr2 item 1', 'arr2 item 2', 'arr2 item 3'], 
    //     ['arr3 item 1', 'arr3 item 2', 'arr3 item 3', 'arr3 item 4'],
    // ];


    //* Arr of Obj of words I want grabbed from this
    //? [
    //?  {index: i, ['wordj1', 'wordj2', 'wordj3']}]},
    //?  ['wordj1, 'wordj2', 'wordj3'],
    //? ];

    //? arr of objs, each obj has index of twoDArr its grabbing word arr from
    //? obj will have index and that arr of words
    











    //* remove empty strs from each arr of words 
    // const arrOfWordsEmptySpacesRemoved = arrOfWordsSplitAtSpaces.filter(arr => {});


    // //*join the entire thing to get ride of "" indexes
    // let joinedArr = arrOfChars.join('');

    // console.log({"79": joinedArr});
    //!Result: 


    // for(let i = 0; i < arrOfChars.length; i++){
    //     arrOfChars[i] = arrOfChars[i].split(' ');
    // }

    // console.log({arrOfChars});


    //*remove empty spaces 
    // for(let i = 0; i < arrOfChars.length; i++){
    //     arrOfChars[i] = arrOfChars[i].filter(word => word !== '');
    // }
    // console.log({arrOfChars});

    // //*remove empty arrs inside
    // let newArr = arrOfChars.filter(arr => arr.length > 0);

    // console.log({newArr});


    //* nested arr of more than one word
    //* turn into strings
    // for(let i = 0; i < newArr.length; i++){
    //     if(newArr[i].length > 1) {
    //         newArr[i] = newArr[i].join(' ');
    //     }
    // }
    // console.log(newArr);

    // //* turn all into strings 
    // for(let i = 0; i < newArr.length; i++){
    //     newArr[i] = newArr[i].toString();
    // }
    // console.log({newArr});

    // for(let i = 0; i < newArr.length; i++){
    //     if()
    // }
    // console.log({newArr});



    // for(let i = 0; i < arrOfChars.length; i++){
    //     arrOfChars[i] = arrOfChars[i].join(" ");
    // }

    // console.log({arrOfChars});

    // for(let i = 0; i < arrOfChars.length; i++){
    //     arrOfChars[i] = arrOfChars[i].split(' ');
    // }
    // console.log({arrOfChars});


    //*join it together 
    // for(let i = 0; i < arrOfChars.length; i++){
    //     arrOfChars[i] = arrOfChars[i].join('');
    // }

    // console.log(arrOfChars);



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




