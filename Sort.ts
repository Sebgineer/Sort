
const arr: Array<number> = [];
const size: number = Number.parseInt(process.argv[2]);
const mode: string = process.argv[3];

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

const Merge = (left, right) => {
    let mergeArr = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergeArr.push(left[i++])

        } else {
            mergeArr.push(right[j++])
        }
    }
    return mergeArr.concat(left.slice(i)).concat(right.slice(j));
}

function MergeSort(arr: Array<number>) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    return Merge(
        MergeSort(arr.slice(0, mid)),
        MergeSort(arr.slice(mid))
    )
}

function Swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const Partition = (arr, low, high) => {
 
    let pivot = arr[high];
 
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        if (arr[j] < pivot) {
 
            i++;
            Swap(arr, i, j);
        }
    }
    Swap(arr, i + 1, high);
    return (i + 1);
}
 
const QuickSort = (arr, low, high) => {
    if (low < high) {
 
        let pi = Partition(arr, low, high);
 
        QuickSort(arr, low, pi - 1);
        QuickSort(arr, pi + 1, high);
    }
    return arr;
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
    let startTime: number, endTime: number;
    let result: Array<number>;
    console.log("Beginning Sorting ...");
    switch (mode) {
        case 's':
            startTime = Date.now();
            result = SelctionSort(arr);
            endTime = Date.now();
            break;
        case 'i':
            startTime = Date.now();
            result = InsertionSort(arr);
            endTime = Date.now();
            break;
        case 'm':
            startTime = Date.now();
            result = MergeSort(arr);
            endTime = Date.now();
            break;
        case 'q':
            startTime = Date.now();
            result = QuickSort(arr, 0, size - 1);
            endTime = Date.now();
            break;
        default:
            console.error("no modes have been selected");
            throw "Nope";
    }
    WriteArray(result);
    console.log(`time: ${endTime - startTime}`);
}

Main();