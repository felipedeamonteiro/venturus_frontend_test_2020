/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
// export default function quickSort() {
//   const items = [5, 3, 7, 6, 2, 9];
//   function swap(items, leftIndex, rightIndex) {
//     const temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
//   }
//   function partition(items, left, right) {
//     const pivot = items[Math.floor((right + left) / 2)]; // middle element
//     let i = left; // left pointer
//     let j = right; // right pointer
//     while (i <= j) {
//       while (items[i] < pivot) {
//         i++;
//       }
//       while (items[j] > pivot) {
//         j--;
//       }
//       if (i <= j) {
//         swap(items, i, j); // sawpping two elements
//         i++;
//         j--;
//       }
//     }
//     return i;
//   }

//   function quickSort(items, left, right) {
//     let index;
//     if (items.length > 1) {
//       index = partition(items, left, right); // index returned from partition
//       if (left < index - 1) {
//         // more elements on the left side of the pivot
//         quickSort(items, left, index - 1);
//       }
//       if (index < right) {
//         // more elements on the right side of the pivot
//         quickSort(items, index, right);
//       }
//     }
//     return items;
//   }
//   // first call to quick sort
//   const sortedArray = quickSort(items, 0, items.length - 1);
//   console.log(sortedArray); // prints [2,3,5,6,7,9]
// }
interface MostFrequentElement {
  mostFrequent: string;
  quantity: number;
}

interface LessFrequentElement {
  lessFrequent: string;
  quantity: number;
}

export function mostFrequentElementInArray(
  array: any[],
): MostFrequentElement | null {
  if (array.length === 0) return null;
  const modeMap: any = {};
  let maxEl = array[0].id;
  let maxCount = 1;
  for (let i = 0; i < array.length; i++) {
    const el = array[i].id;
    if (modeMap[el] === null) modeMap[el] === 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return { mostFrequent: maxEl, quantity: maxCount };
}

export function lessFrequentElementInArray(
  array: any[],
): LessFrequentElement | null {
  const result = [
    ...array.reduce(
      (
        r,
        n, // create a map of occurrences
      ) => r.set(n.id, (r.get(n.id) || 0) + 1),
      new Map(),
    ),
  ].reduce((r, v) => (v[1] < r[1] ? v : r)); // get the the item that appear less times

  return { lessFrequent: result[0], quantity: result[1] };
}
