# Editing

## Insertion

Press `i` key to go into `Insert Mode` (blinking line cursor). It's used for
editing text.

Press `<ESC>` Key to go back to `Normal Mode`.

- `i`: Insert before cursor.
- `I`: Insert before the first non-blank character of a line.
- `a`: Insert after cursor.
- `A`: Insert after the last non-blank character of a line.
- `o`: Insert below a line.
- `O`: Insert above a line.
- `R`: Start replacing from the cursor.

## Single Character Operation

- `x`: Delete the character under the cursor.
- `r{char}`: Replace the character under the cursor.
- `s`: Delete the character under the cursor and switches to insert mode.
- `~`: Switch the case of a single character.

## Undo

- `u`: Undo the last change.

## Operators

Operator is the action you want to perform.

- `d`: Delete.
- `c`: Change.
- `y`: Yank (copy).
- `p`: Put (paste).
- `>`: Shift right.
- `<`: Shift left.
- `g~`: Switch case.
- `gu`: Lowercase.
- `gU`: Uppercase

## Operator with Motion

Use `{operator}{count}{motion}` to perform an action {count} times.

- `d2w`: Delete 2 words.
- `d2j`: Delete 2 lines downwards.
- `dG`: Delete from the cursor to the end of the document.
- `df(`: Delete from the cursor until the first occurrence of the `(` character.
- `ct'`: Change till `'` character (excluding `'`).
- `gU$`: Change to uppercase from the cursor to the end of a line.
- `>7j`: Indent current line and 7 lines below to the right.

## Operator Shorthand

- `dd`: Delete a whole line.
- `D`: Delete from the cursor to the end of a line.
- `cc`: Delete a whole line and switches to insert mode.
- `C`: Delete the text from the cursor to the end of a line and switches to insert mode.
- `yy`: Copy a whole line.
- `P`: Paste before the cursor.
- `>>`: Indent current line to the right.
- `<<`: Indent current line to the left.

## Text Object

- `w`: Word. A sequence of letters, digits and underscores, or a sequence of
  other non-blank characters, separated with white space.
- `s`: Sentence ends at a `.`, `!` or `?` followed by either the end of a line,
  or by a space or tab.
- `p`: Paragraph. A paragraph begins after each empty line.
- ' " `: Quotes.
- `b` or `(` or `)`: Block surrounded by `()`.
- `B` or `{` or `}`: Block surrounded by `{}`.
- `<` or `>`: Block surrounded by `<>`.
- `[` or `]`: Block surrounded by `[]`.
- `t`: Tag.

## Operator with Text Object

Use `{operator}{a|i|s}{text object}` to perform an action with a text object.
`i` stands for `inner`.
`a` stands for `around`.
`s` stands for `surrounding`.

- `diw`: Delete inner word (excluding trailing spaces).
- `daw`: Delete around word (including trailing spaces).
- `dis`: Delete inner sentence (excluding surrounding spaces).
- `das`: Delete a sentence (including surrounding spaces).
- `dip`: Delete a paragraph (excluding spaces around).
- `dap`: Delete a paragraph (including spaces around).
- `di'`: Delete everything inside `'`.
- `da'`: Delete everything inside `'` including `'`.
- `dib`: Delete everything inside `()`.
- `dab`: Delete everything inside `()` including `()`.
- `diB`: Delete everything inside `{}`.
- `daB`: Delete everything inside `{}` including `{}`.
- `di<` or `di>`: Delete everything inside `<>`.
- `da<` or `da>`: Delete everything inside `<>` including `<>`.
- `di[` or `di]`: Delete everything inside `[]`.
- `da[` or `da]`: Delete everything inside `[]` including `[]`.
- `dit`: Delete everything inside an HTML tag.
- `dat`: Delete everything inside an HTML tag including the tag.

## Repeat the Last Change

- `.`: Repeat the last change.
