//4 modules
// 1. cutting up the accounting into substrings 
// 2. Finding information within substrings 
// 3. formmatting the information into object for all entries 
// 4. totalling the information
// 5. displaying the information



const submitBtn = document.querySelector('#submit');
const textarea = document.querySelector('#textarea');
const output = document.querySelector('#output');
const datesOutput = document.querySelector('#datesOutput');


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



    //TODO MODULES CLEANUP/FORMAT ENTIRE DOCUMENT
    //TODO Gives back entire document cleaned up and formatted back into one string
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
    //! 6 ["SMITH     "]

    //*Split every string at the spaces
    //to make into individual words 
    const arrOfWordsSplitAtSpaces = arrOfCharsJoinedBack.map(str => str.split(' '));
    console.log({arrOfWordsSplitAtSpaces}); 
    //!Result: 13 ["66603-3823","785-233-1321","Attorney"]
    //! 6 ["SMITH", "", "", "", "", ""]


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

    //*remove empty []'s
    let arrRemovedEmptyArrs = arrOfWordsSplitAtSpaces.filter(arr => arr.length > 0);
    console.log({arrRemovedEmptyArrs});

    //!Result: 11 ["608", "Topeka"]
    //!Result: 13 ["66603-3823","785-233-1321","Attorney"]
    //!Result: 6 ["SMITH"]


    //*REWORK HERE
    //*2DArr 
    arrRemovedEmptyArrs.forEach((arr, i) => {
        //['john'] -> 'john' 
        if(arr.length === 1){
            arrRemovedEmptyArrs[i] = arr.join("");
        } else {
            //['john', 'smith'] -> 'john smith'
            arrRemovedEmptyArrs[i] = arr.join(" ");
        }
    });

    console.log(arrRemovedEmptyArrs);

    let fullCleanAcctingDoc = arrRemovedEmptyArrs.join(" ");
    console.log({fullCleanAcctingDoc});


    let actualArrOfWords = fullCleanAcctingDoc.split(' ');
    console.log({actualArrOfWords});


    //*End rework
    output.innerHTML = fullCleanAcctingDoc;

    //!WORKS now have arr of all individual words AND entire document in string clean format 
    //!GOT arr of every single word 
    //!NEXT STEP: break into substrs for receipt and disbursements
    //!Identify receipt and disbursements entries

    //*Endpoint words 
    const endpointWords = ['RECEIPTS', 'DISBURSEMENTS', 'Balance'];

    //*0 for first endpoint
    //*endpoints indexes of the arr of words NOT of the actual document string
    const endpointsIndex = [0]; 
    

    //? 2 options: find substr indexes within the one string
    //? or find substr indexes within the arr of strings
    //*find index of endpoint words
    actualArrOfWords.forEach((word, index) => {
        for(let i = 0; i < endpointWords.length; i++) {
            if(word.includes(endpointWords[i])) {
                endpointsIndex.push(index);
                console.log(word);
            }
        }

    });
    //*last endpoint
    endpointsIndex.push(actualArrOfWords.length);
    console.log(endpointsIndex);



    //!REWORK WITH ENPOINTSINDEX dynamic instead of hard indexes
    //!Result: [0, 62, 163, 505, endIndex];

    //*Destructure endpointsIndexes
    let [introIndex, receiptIndex, disbursementIndex, balanceIndex, docEndIndex] = endpointsIndex;

    console.log({introIndex, receiptIndex, disbursementIndex, balanceIndex, docEndIndex});

    //? have to do backwards/descending indexs
    //*break arr into sub arrs using endpoints
    //!endStr
    let endSubstrArr = [];
    for(let i = balanceIndex; i < actualArrOfWords.length; i++) {
        endSubstrArr.push(actualArrOfWords[i]);
    }
    //*create a str with different method 
    let endStr = actualArrOfWords.splice(balanceIndex, actualArrOfWords.length).join(" ");
    console.log({endSubstrArr});
    console.log({endStr});
    //!disbursements Str
    let disbursementSubstrArr = [];
    for(let i = disbursementIndex; i < balanceIndex; i++) {
        disbursementSubstrArr.push(actualArrOfWords[i]);
    }
    let disbursementStr = actualArrOfWords.splice(disbursementIndex, balanceIndex).join(" ");
    console.log({disbursementStr});
    //!receipts Str
    let receiptSubstrArr = [];
    for(let i = receiptIndex; i < disbursementIndex; i++) {
        receiptSubstrArr.push(actualArrOfWords[i]);
    }
    let receiptStr = actualArrOfWords.splice(receiptIndex, disbursementIndex).join(" ");
    console.log({receiptStr});
    //!intro Str
    let introSubstrArr = [];
    for(let i = introIndex; i < receiptIndex; i++) {
        introSubstrArr.push(actualArrOfWords[i]);
    }
    //cut the intro str
    let introStr = actualArrOfWords.splice(introIndex, receiptIndex).join(" ");
    console.log({introStr});

    //!now have all the substrs in arrs
    //!and the as strs
    let allSubstrs = [introStr, receiptStr, disbursementStr, endStr];
    let allSubstrArrOfWords = [introSubstrArr, receiptSubstrArr, disbursementSubstrArr, endSubstrArr];
    console.log(allSubstrs);
    console.log(allSubstrArrOfWords);


    //TODO MODULE: create logic for grabbing the data
    //*Finding date and amount
    //*Date will be easier
    //date will ONLY have format "00-00-00"
    //Meaning any other dates will be description

    //*check if string is a date 
    function dateCheck(substrArr) {
        let datesArr = [];

        substrArr.forEach((word) => {
            let isDateCheckList = [];

            //*convert word str to arr
            let wordArr = word.split("");
            wordArr.forEach((char, i)=>{
                // console.log(i);
                //if index is 0 
                if(i === 0) {
                    //if char is 0-9
                    if(isFinite(char)) {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                }
                //if index is 1
                if(i === 1) {
                    //if char is 0-9
                    if(isFinite(char)) {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                }
                //if index is 2
                if(i === 2) {
                    //if char is "-"
                    if(char === "-") {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                }
                //if index is 3
                if(i === 3) {
                    //if char is 0-9
                    if(isFinite(char)) {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                    
                }
                //if index is 4
                if(i === 4) {
                    //if char is 0-9
                    if(isFinite(char)) {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                }
                //if index is 5
                if(i === 5) {
                    //if char is "-"
                    if(char === "-") {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                }
                //if index is 6
                if(i === 6) {
                    //if char is 0-9
                    if(isFinite(char)) {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                }
                //if index is 7
                if(i === 7) {
                    //if char is 0-9
                    if(isFinite(char)) {
                        isDateCheckList.push(true);
                    } else {
                        isDateCheckList.push(false);
                    }
                }
                //if is does not include a false (all are true)
                if(!isDateCheckList.includes(false) && isDateCheckList.length === 8) {
                // console.log(isDateCheckList);
                console.log(word);
                datesArr.push(word);
                }
            });
        });
        console.log(datesArr);
        return datesArr;
    };

    let receiptsDates = dateCheck(receiptSubstrArr);
    let disbursementsDates = dateCheck(disbursementSubstrArr);

    console.log(receiptsDates);
    console.log(disbursementsDates);

    //!Code for making sure we grabbed all dates
    //*DISPLAY dates on list to check all there 
    //*start of UL string
    let ULhtml = `<ul>`;
    disbursementsDates.forEach((date) => {
        ULhtml += `<li>${date}</li>`;
    });

    //*add end to UL string
    ULhtml += `</ul>`;

    //*display UL string
    datesOutput.innerHTML = ULhtml;

    //TODO use same logic for final DISPLAY 
    
    //TODO find each entry corresponding to dates


    //find one entry using date 
    //find indexes of date 
    //compare substrs to receiptsDates
    //if actualArrOfWords has a date in receiptsDates
    //grab the entry


    let entryReceiptDatesObjsArr = [];
    let entryDisbursementDatesObjsArr = [];


    //* just used to continue indexOf search
    //!is not actually the prevReceipt, actually is the index of the next word after the date
    let prevReceiptIndex = 0;
    //*Find indexes of all dates
    for(i=0; i<receiptsDates.length; i++) {
        if(receiptSubstrArr.includes(receiptsDates[i])) {
            //*create obj with date and index within the receiptsSubstr
            let entryDate = receiptsDates[i];
            let entryDateIndex = receiptSubstrArr.indexOf(receiptsDates[i], prevReceiptIndex);


            //*Checks that
            //*Set it to the index for the next run
            //? 0 then 5 then 9 etc.
            //? +1 for it to search after for sure, otherwise repeats
            prevReceiptIndex = entryDateIndex + 1;

            let entryObj = {
                date: entryDate,
                index: entryDateIndex,
                receipt: "receipt"
            }

            entryReceiptDatesObjsArr.push(entryObj);
        }
    }

    console.log(entryReceiptDatesObjsArr);

    let prevDisbursementIndex = 0;

    for(i=0; i<disbursementsDates.length; i++) {
        if(disbursementSubstrArr.includes(disbursementsDates[i])) {
            //*create obj with date and index within the receiptsSubstr
            let entryDate = disbursementsDates[i];

            //*set index to correct index of date found.
            //*prevIndex is the index of the last date found
                                                                    //search after prevIndex ran through
            let entryDateIndex = disbursementSubstrArr.indexOf(disbursementsDates[i], prevDisbursementIndex);

            //*Checks that
            //*Set it to the index for the next run
            //? 0 then 5 then 9 etc.
            //? +1 for it to search after for sure, otherwise repeats
            prevDisbursementIndex = entryDateIndex + 1;

            let entryObj = {
                date: entryDate,
                index: entryDateIndex,
                disbursement: "disbursement"
            }

            entryDisbursementDatesObjsArr.push(entryObj);
        }
    }
    console.log(entryDisbursementDatesObjsArr);



    //!END OF EVENT LISTENER
});




