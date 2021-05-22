# Visual Mode

## Visual + Motion + Operator

Press `v` or `V` key to go into `Visual Mode` (block cursor). It's used for selecting text.

- `v`: Character-wise Visual mode.
- `V`: Line-wise visual mode.

Use `{v|V}{motion}{operator}` to perform an action on selected text.

- `V%d`: Select a code block and delete it.

## Other Commands

- `:sort`: Sort alphabetically.
- `:sort u`: Sort and remove duplicate lines.
- `:sort!`: Sort in reverse order.
- `:sort! u`: Sort in reverse order and remove duplicate lines.
- `u`: Change to lowercase.
- `U`: Change to uppercase.
