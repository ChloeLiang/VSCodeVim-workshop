/**
 * Task: Delete the extra character t.
 * x - Delete a character.
 */
console.log('testt');

/**
 * Task: Swap the two lines.
 * dd - Delete a line.
 * p - Paste a line below.
 * P - Paste a line above.
 */
console.log('test 1');
console.log('test 2');

// Combine d operator with motion.

/**
 * Task: Delete 3 lines.
 * d2j - Delete current line and 2 lines below.
 */
console.log('test');
console.log('test');
console.log('test');

function findDuplicate(arr) {
  /**
   * Task: Delete the word "test".
   * dw - Delete word.
   */
  const text = 'test';

  /**
   * Task: Delete && true && true.
   * t& - Move the cursor just before &.
   * dt) - Delete till ).
   */
  if (arr.length <= 0 && true && true) {
    return -1;
  }

  let start = 1;
  let end = arr.length - 1;

  /**
   * Task: Delete this if block.
   * d} - Delete everything until the next empty line.
   */
  if (true) {
    console.log('test');
    console.log('test');
    console.log('test');
    console.log('test');
    console.log('test');
  }

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    const count = countRage(arr, start, middle);
    if (start === end) {
      if (count > 1) {
        return start;
      }
      return -1;
    }

    if (count > middle - start + 1) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
}

// Combine d operator with text object (w, t, p, (), {}, [], <>).
// d{i|a}{text object}

function findDuplicateInPlace(arr) {
  /**
   * Task: Delete the second "test".
   * daw - Delete around word.
   */
  console.log('This is a test test.');

  /**
   * Task: Delete everything inside the single quote.
   * di' - Delete inner single quote.
   */
  const text = 'Delete everything inside the single quote';

  /**
   * Task: Delete everything inside <p>.
   * dit - Delete inner tag.
   */
  const html = '<p>This is a paragraph <a href="url">link</a></p>';

  /**
   * Task: Delete everything inside the array.
   * di[ - Delete inner [].
   */
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  /**
   * Task: Delete everything inside the for loop.
   * diB: Delete inner block.
   * u: Undo.
   */
  for (let i = 0; i < arr.length; i++) {
    /**
     * Task: Delete everything inside the if statement.
     * dib: Delete inner bracket.
     */
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return false;
    }

    while (arr[i] !== i) {
      const temp = arr[i];
      if (arr[i] === arr[temp]) {
        return arr[i];
      }
      arr[i] = arr[temp];
      arr[temp] = temp;
    }
  }

  /**
   * Task: Delete this for loop.
   * f{: Move cursor to {.
   * V: Select a line.
   * %: Move to the matching }.
   * d: Delete selected text.
   */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return false;
    }

    while (arr[i] !== i) {
      const temp = arr[i];
      if (arr[i] === arr[temp]) {
        return arr[i];
      }
      arr[i] = arr[temp];
      arr[temp] = temp;
    }
  }
  return false;
}

// Vim Surround
// https://github.com/tpope/vim-surround

/**
 * Task: Delete single quote.
 * ds' - Delete surrounding single quote.
 */
const number = '12345';
