
const arr: Array<number> = [];
const size: number = Number.parseInt(process.argv[2]);

const SelctionSort = (arr: Array<number>): Array<number> => {
    let input: Array<number> = arr;
    let output: Array<number> = []
    let n = input.length;

    for (let i = 0; i < n; i++) {
        let minIndex = 0;
        for (let j = 1; j < input.length; j++) {
            if (input[j] < input[minIndex]) {
                    minIndex = j;
            }
        }
        output.push(input[minIndex]);
        input.splice(minIndex, 1);
    }
    return output;
}

const InsertionSort = (arr: Array<number>): Array<number> => {
    let input: Array<number> = arr;
    let n = input.length;

    let i, key, j; 
    for (i = 0; i < n; i++) {
        key = input[i];
        j = i - 1;

        while (j >= 0 && input[j] > key) {
            input[j + 1] = input[j];
            j = j - 1;
        }
        input[j + 1] = key;
    }
    return input;
}

const RandomNum = (arrs: Array<number>, size: number) => {
    for (let i = 0; i < size; i++) {        
        let rnd: number = Math.floor(Math.random() * 100000);
        arrs.push(rnd);
    }
}

const WriteArray = (array: Array<number>) => {
    console.log(array.join(','));
}

const Main = () => {
    RandomNum(arr, size);
    console.log("Beginning Sorting ...");
    let startTime = Date.now();
    let result = InsertionSort(arr);
    let endTime = Date.now();
    WriteArray(result);

    console.log(`time: ${endTime - startTime}`);
}

Main();