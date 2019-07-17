function lastValue(arr) {
  const lastI = arr.length - 1;
  if (lastI < 0) return null;
  return arr[lastI];
}

function shiftAllDuplicates(arr) {
  const x = arr.shift();
  while (arr[0] === x) arr.shift();
  return x;
}

function filterF(A, B) {
  const sortedA = A.slice(0).sort();
  const sortedB = B.slice(0).sort();

  const neo = [];
  const gone = [];
  const stay = [];

  // Compare the leading elements of the sorted arrays to filter results
  while (sortedA.length > 0 && sortedB.length > 0) {
    const compare = sortedA[0].localeCompare(sortedB[0]);

    if (compare === 0) {
      // equal values, the email stays if it is not a duplicate
      const buff = shiftAllDuplicates(sortedA);
      shiftAllDuplicates(sortedB);
      stay.push(buff);
    } else if (compare < 0) {
      // the email was there, but it is now gone. Keep it if it is not a duplicate
      const buff = shiftAllDuplicates(sortedA);
      gone.push(buff);
    } else {
      // The email is new.  Put it on neo if it is not a duplicate
      const buff = shiftAllDuplicates(sortedB);
      neo.push(buff);
    }
  }

  if (sortedA.length > 0) {
    sortedA.forEach(x => {
      if (lastValue(gone) !== x) gone.push(x);
    });
  }

  if (sortedB.length > 0) {
    sortedB.forEach(x => {
      if (lastValue(neo) !== x) neo.push(x);
    });
  }

  return { neo, gone, stay };
}

module.exports = filterF;
