# Visual Mode

- `v`: Character-wise Visual mode.
- `V`: Line-wise visual mode.

Use `{v|V}{motion}{operator}` performs an action on selected text.

- `v%d`: Select a code block and delete it.

```json
{
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters": {
    "batter": [
      { "id": "1001", "type": "Regular" },
      { "id": "1002", "type": "Chocolate" },
      { "id": "1003", "type": "Blueberry" },
      { "id": "1004", "type": "Devil's Food" }
    ]
  },
  "topping": [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ]
}
```

- `:sort`: Sort alphabetically.
- `:sort u`: Sort and remove duplicate lines.
- `:sort!`: Sort in reverse order.
- `:sort! u`: Sort in reverse order and remove duplicate lines.

```css
.block {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
}
```