# VSCodeVim Workshop

## Installation

In VS Code, install extension `Vim` and reload.

To enable key-repeating execute the following in your Terminal and restart VS Code:

```bash
defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false         # For VS Code
defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false # For VS Code Insider
defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false    # For VS Codium
defaults delete -g ApplePressAndHoldEnabled                                      # If necessary, reset global default
```

Open `System Preferences > Keyboard`, Set `Key Repeat` to `Fast`, and
`Delay Until Repeat` to `Short`. This is to ensure we can move around quickly
by holding down the navigation key.

In VSCode, press `Cmd-Shift-P`. Search and open `Preferences: Open Settings (JSON)`.
In the settings JSON file, add the following:

```json
{
  "vim.useSystemClipboard": true
}
```

`useSystemClipboard` allows us to copy text outside of VSCode and paste it into
VSCode editor using Vim command.

**Optional Settings**:

```json
{
  "vim.insertModeKeyBindings": [
    {
      "before": ["j", "j"],
      "after": ["<Esc>"]
    }
  ]
}
```

`insertModeKeyBindings` allows us to press `jj` to return to normal mode.
