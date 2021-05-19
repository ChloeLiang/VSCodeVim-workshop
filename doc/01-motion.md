# Motion

## Basic Navigation

By default, Vim starts in `Normal Mode` (blinking block cursor). You can move
cursor and execute command in this mode.

These 4 keys behave like arrow keys:

- `h`: Move cursor to the left by one character.
- `j`: Move cursor downwards by one line.
- `k`: Move cursor upwards by one line.
- `l`: Move cursor to the right by one character.

## Word Navigation

> `word`: A sequence of letters, digits and underscores, or a sequence of
> other non-blank characters, separated with white space. An empty line is
> also considered to be a word.

- `w`: (word) Move to the beginning of the next word.

```txt
^
my_var_1
w

^
function add() { }
w        w  w  w w

^
197.18.123.23
w  ww ww  ww

^
property: value;
w       w w    w
```

> `WORD`: A sequence of non-blank characters, separated with white space.

- `W`: (WORD) Move to the beginning of the next WORD forwards.

```txt
^
my_var_1
W

^
function add() { }
W        W     W W

^
197.18.123.23
W

^
property: value;
W         W
```

- `b`: (back) Move to the beginning of a word backwards.

```txt
b
my_var_1
       ^

b        b  b  b b
function add() { }
                 ^
b  bb bb  bb
197.18.123.23
            ^
b       b b    b
property: value;
               ^
```

- `B`: (back) Move to the beginning of a WORD backwards.

```txt
B
my_var_1
       ^

B        B     B B
function add() { }
                 ^
B
197.18.123.23
            ^
B         B
property: value;
               ^
```

- `e`: (end) Move to the end of a word.

```txt
^
my_var_1
       e

^
function add() { }
       e   e e e e

^
197.18.123.23
  ee ee  ee e

^
property: value;
       ee     ee
```

- `E`: (end) Move to the end of a WORD.

```txt
^
my_var_1
       E

^
function add() { }
       E     E E E

^
197.18.123.23
            E

^
property: value;
        E      E
```

- `ge`: Move to the end of a word backwards.

```txt
       *
my_var_1
       ^
       *   * * * *
function add() { }
                 ^
  ** **  ** *
197.18.123.23
            ^
       **     **
property: value;
               ^
```

## Horizontal Navigation

- `0`: Move to the beginning of a line.
- `^`: Move to the first non-blank character of a line.
- `$`: Move to the end of a line.
- `t{char}`: Move till character (just before character).
- `f{char}`: Find the character on the current line and move the cursor on it.
  - `;` to go to the next occurrence.
  - `,` to go to the previous occurrence.

**Exercise 1**:

Navigate the following code.

```js
// Try 'f(', 'f{'.
function add(a, b) {
  // 0 goes to the beginning. ^ goes to r
  return a + b;
}

// Try f, and repeat the search using ; or ,
const list = [1, 2, 3, 4, 5];
```

## Vertical Navigation

- `+`: Go to the first non blank character of the next line.
- `}`: Move to the next empty line.
- `{`: Move to the previous empty line.
- `CTRL-D`: (Down) Move down half a page.
- `CTRL-U`: (Up) Move up half a page.
- `CTRL-F`: (Forward) Move down a full page.
- `CTRL-B`: (Backward) Move up a full page.
- `H`: (High) Go to the first line of the screen.
- `M`: (Middle) Go to the middle line of the screen.
- `L`: (Low) Go to the last line of the screen.
- `gg`: Go to the top of the file.
- `G` Go to the bottom of the file.
- `{line}G`: Go to a specific line.

## Special Navigation

- `%`: Go to matching `({[]})`.
- `m{char}`: Mark line.
  - `'{char}` Go to the marked line.

**Exercise 2**:

Navigate the code.

```js
// Try ma, gg, and 'a.
// Try f{ and %.
const enqueue = (item) => {
  const queue = [];
  queue.push(item);
  return queue;
};
```

## Search Navigation

- `/{pattern}`: Search forward in a file.
  - `n`: Move to the next match.
  - `N`: Move to the previous match.
- `?{pattern}`: Search backward in a file.

**Exercise 3**:

Search "Move" and navigate each occurrence.

## Counts

- `{count}{motion}`: Perform a `motion` a `count` number of times. For example,
  - `10j`: Move down by 10 lines
  - `2w`: Move 2 words forward.
  - `2;`: Go to the next second occurrence of a character.
