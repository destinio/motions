# Vim Motions

## 🏃‍➡️ What are Vim motions?

### ❌ What they are not!
- They are not "VIM"
- VIM is an IDE
- Don't need to know how to setup, configure or use Vim to use Vim motions.
- Don't have to know where a file explorer is or how to open a file.

### 🤔 What are they?
- They are a set of commands that allow you to navigate and manipulate text in a file.
- They are not limited to Vim but are also available in other editors like VSCode or any editor that supports Vim keybindings.
- They can be applied to any text object, including lines, words, paragraphs, objects like `{}` and `[]` and more.

## 🤷‍♂️ So, Why Vim motions?
- Vim motions are a powerful way to navigate and manipulate text in a file.
- Less time using the mouse and more time using the keyboard.
- Vim leans heavily on **mnemonics** for motion and action commands, where single-character keys often represent the action they perform or the object they act upon. For example:
- `w` for "word," `b` for "back a word," and `f` for "find" (or "forward to character").
- `daw` for "delete a word" and `ci(` for "change inside parentheses."

### Resources
[README](/resources.md)

## ⚙️ Set up

### Use VIM keybindings in IDEs

[VSCode](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

```bash
code --profile-temp .
```

[JetBrains](https://plugins.jetbrains.com/plugin/164-ideavim)

```bash
# not sure
```

### Use VIM
```bash
echo "set number" > ~/.vimrc
```

```bash
vim .
```

🚀 **Let's get moving!**

---

## ␛ Modes

### Normal mode vs Insert mode
- Normal mode is the default mode when using Vim motions. 
  - In this mode, you can use motions to navigate and manipulate text.
  - Think of this mode as a layer on top or your keyboard where every key is a command.

- Insert mode is the mode where you can edit text. 
  - You can enter insert mode by pressing `i` in normal mode. You can return to normal mode by pressing `Esc`.

- Visual mode is a mode where you can select text.
  - You can enter visual mode by pressing `v` in normal mode. You can return to normal mode by pressing `Esc`.


```json
"vim.statusBarColorControl": false
```


### How do I go between modes?
- `i` - enter [i]nsert mode (insert before the cursor)
- `a` - enter [a]ppend mode (insert after the cursor)
- `Esc` - return to normal mode

#### Other modes
- `v` - enter [v]isual mode (select text)

## 🆘 I'm Stuck!

**Most of the time `<Esc>` will get you out of a mode and back to normal mode**

### Macros (recording @q)
- Macros are a way to record a sequence of commands and play them back later.
- `qq` - start recording a macro
- `q` - stop recording the macro

### VIM Users
- `:q` - quit Vim
- `:q!` - quit Vim without saving - force quit

## 🏃‍♂️ Let's get moving!

### H, J, K, L - not so mnemonic
- `h` - move left
- `j` - move down
- `k` - move up
- `l` - move right

#### Why?
- `h`, `j`, `k`, `l` are the home row keys. They are easy to reach and allow for fast navigation without moving your hands away from the home row.
- We will see that `a`, `s`, `d`, `f`, and many other keys are used for other commands.

### ↔️ Left and right motions

#### Small jumps
- `h` - move left
- `l` - move right

#### Medium jumps
- `w` - move to the beginning of the next word
- `W` - move to the beginning of the next WORD
- `e` - move to the end of the current word
- `E` - move to the end of the current WORD
- `b` - move to the beginning of the previous word
- `B` - move to the beginning of the previous WORD

---
#### 🧙‍♂️ Side Quest - `>>` - Indenting
- `>>` - indent the current line
- `<<` - unindent the current line
---

#### Big jumps

- `$` - move to the end of the line
- `0` - move to the beginning of the line
- `^` - move to the first non-blank character of the line

#### `f` and `F` - find forward and backward
- `f<char>` - move to the next occurrence of `<char>` in the line
- `F<char>` - move to the previous occurrence of `<char>` in the line
- `t<char>` - move to the character before the next occurrence of `<char>` in the line
- `T<char>` - move to the character after the previous occurrence of `<char>` in the line

#### Repeat last find
- `;` - repeat the last `f`, `F`, `t`, or `T` command
- `,` - repeat the last `f`, `F`, `t`, or `T` command in the opposite direction

### ↕️ Up and down motions

#### Small jumps
- `j` - move down one line
- `k` - move up one line

#### Medium jumps
- `Ctrl + d` - move down half a screen
- `Ctrl + u` - move up half a screen

#### Big jumps
- `gg` - move to the top of the file
- `G` - move to the bottom of the file
- `M` - move to the middle of the file
- `H` - move to the top of the screen
- `L` - move to the bottom of the screen
- `*` - search for the word under the cursor and move to the next occurrence
- `#` - search for the word under the cursor and move to the previous occurrence 

#### Tricky
- `zt` - move the current line to the top of the screen
- `zz` - move the current line to the center of the screen
- `zb` - move the current line to the bottom of the screen
- `<count>%` - move to the line number that is a percentage of the file. 

---
#### 🧙‍♂️ Side Quest - `:` - command mode
- `:` - enter command mode
- `<enter>` - execute the command
---
#### Line numbers
- `:n` - move to line number `n`

### Other motions

#### Jump motions
- `Ctrl + o` - jump to the previous location in the jump list
- `Ctrl + i` - jump to the next location in the jump list

#### Non letter motions (objects)
- `%` - move to the matching parenthesis, bracket, or brace

## ✍️ Let's Edit some text!

### Insert mode
- `i` - insert text before the cursor
- `a` - insert text after the cursor
- `I` - insert text at the beginning of the line
- `A` - insert text at the end of the line
- `o` - open a new line below the current line and enter insert mode
- `O` - open a new line above the current line and enter insert mode
- `r<char>` - replace the character under the cursor with `<char>`

### Undo and redo
- `u` - undo the last change
- `Ctrl + r` - redo the last undone change

### Operators
- `d` - delete
- `c` - change
- `y` - yank (copy)
- `v` - visual mode (select text)

### Delete
- `x` - delete the character under the cursor
- `X` - delete the character before the cursor
- `dd` - delete the current line
- `D` - delete from the cursor to the end of the line

### Copy and paste
- `yy` - yank (copy) the current line
- `Y` - yank (copy) from the cursor to the end of the line
- `p` - paste the yanked or deleted text after the cursor
- `P` - paste the yanked or deleted text before the cursor

** Delete and yank both store the text in a register, so you can paste it later.**

### Operators with motions and objects
- `{operator} {motion|object}` - apply an operator to a motion

### Operators with motions
- `dj` - delete down
- `dk` - delete up
- `dw` - delete the next word
- `cw` - change the next word
- `yw` - yank the next word
- `vw` - select the next word


## 🔄 In and Around
- `{operator} {modifier} {object}`
- Example: `di"` - delete inside quotes

### Inside
- `di` - delete inside
- `ci` - change inside
- `yi` - yank inside
- `vi` - select inside

### Around
- `da` - delete around
- `ca` - change around
- `ya` - yank around
- `va` - select around

### Text objects
- `iw` - inner word
- `aw` - a word
- `is` - inner sentence
- `as` - a sentence
- `ip` - inner paragraph
- `ap` - a paragraph
- `i(` - inner parentheses
- `a(` - a parentheses

### Putting it all together
- `{operator} {modifier} {text object}`
- `daw` - delete a word
- `dap` - delete a paragraph - `dp` - also works
- `ci"` - change inside quotes
- `yi(` - yank inside parentheses

### `d{a|i}w` vs `dw`
- `daw` - delete a word and the space after it
- `dw` - delete a word but not the space after it

---
#### 🧙‍♂️ Side Quest - Counts
- You can prefix any motion with a number to repeat it that many times.
- For example, `3w` will move the cursor three words forward.
- `10j` will move the cursor ten lines down.
- Relative line numbers are a great way to see how far you are from the current line.
```json
// VSCode settings
{
  "editor.lineNumbers": "relative",
}
```

```bash
echo "set relativenumber" >> ~/.vimrc
```
---

## Repeating actions (:flex: Beast Mode)
- `.` - repeat the last action

## Those are the core motions
- There are many more motions, but these are the most common ones.
- You can combine them in many ways to create powerful commands.

## So what about VIM?
- Vim is a text editor that uses these motions as its core navigation and editing commands.

### 🔍 Moving around with search

#### Main search commands
- `/` - search forward
- `?` - search backward
- `*` - search for the word under the cursor
- `#` - search for the word under the cursor in the opposite direction

#### Repeat search
- `n` - repeat the last search in the same direction
- `N` - repeat the last search in the opposite direction

### Search and replace
- `:s/<search>/<replace>/g` - search and replace in the current line
- `:%s/<search>/<replace>/g` - search and replace in the entire file

---
#### 🧙‍♂️ Side Quest - regex
- vim supports regex in search and replace commands.
---
#### Confirmation
- `:%s/<search>/<replace>/gc` - search and replace in the entire file with confirmation

### Visual mode
- `v` - enter visual mode
- `V` - enter visual line mode
- `Ctrl + v` - enter visual block mode
- `o` - move the cursor to the other end of the selection

#### Yanking and pasting
- `y` - yank (copy) the selected text
- `d` - delete the selected text
- `p` - paste the yanked or deleted text after the cursor
- `P` - paste the yanked or deleted text before the cursor

#### `'<,'>` - visual range when using commands
- `'<,'>s/<search>/<replace>/g` - search and replace in the selected text


### Editing multiple lines

#### Visual block mode
- `Ctrl + v` - enter visual block mode
- `I` - insert text at the beginning of the selected block
- `A` - insert text at the end of the selected block
- `d` - delete the selected block
- `y` - yank the selected block
- `p` - paste the yanked or deleted block
- `r<char>` - replace the selected block with `<char>`
- `c` - change the selected block
- `x` - delete the selected block

## 📋 Registers
- registers are a way to store yanked or deleted text for later use.
- the default register is the unnamed register, which stores the last yanked or deleted text. `"`.
- To yank or delete text to a specific register, use the `"` key followed by the register name.

