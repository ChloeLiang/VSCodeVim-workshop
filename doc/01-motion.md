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

> `WORD`: A sequence of non-blank characters, separated with white space.

- `w`: (word) Move to the beginning of the next word.
- `W`: (WORD) Move to the beginning of the next WORD forwards.
- `b`: (back) Move to the beginning of a word backwards.
- `B`: (back) Move to the beginning of a WORD backwards.
- `e`: (end) Move to the end of a word.
- `ge`: Move to the end of a word backwards.

## Horizontal Navigation

- `0`: Move to the beginning of a line.
- `^`: Move to the first non-blank character of a line.
- **`$`**: Move to the end of a line.
- `t{char}`: Move till character (just before character).
- `f{char}`: Find the character on the current line and move the cursor on it.
  - `;` to go to the next occurrence.
  - `,` to go to the previous occurrence.

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

## Search Navigation

- `/{pattern}`: Search forward in a file.
  - `n`: Move to the next match.
  - `N`: Move to the previous match.
- `?{pattern}`: Search backward in a file.

## Counts

- `{count}{motion}`: Perform a `motion` a `count` number of times. For example,
  - `10j`: Move down by 10 lines
  - `2w`: Move 2 words forward.
  - `2;`: Go to the next second occurrence of a character.
