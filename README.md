## What are Vim motions?

### What they are not!
- They are not "VIM"

## What are they?
- They are a set of commands that allow you to navigate and manipulate text in a file.
- They are not limited to Vim, but are also available in other editors like VSCode or pretty much any editor that supports Vim keybindings.
- They can be applied to any text object, including lines, words, paragraphs, and more.

## Normal mode vs Insert mode
- Normal mode is the default mode in when using Vim Motions. In this mode, you can use motions to navigate and manipulate text.
- Insert mode is the mode where you can type text. You can enter insert mode by pressing `i` in normal mode. You can return to normal mode by pressing `Esc`.
- There are other modes like visual mode, but we will not cover them here.

## How do I go between modes?
- `i` - enter insert mode 
- `esc` - return to normal mode
- there are other ways to enter insert mode, but we will not cover them here.
- there are other ways to enter normal mode, but we will not cover them here.
- Visual mode is a mode where you can select text. You can enter visual mode by pressing `v` in normal mode. 

## Why use Vim motions?

Vim uses mnemonic motions—single-character commands where the key often stands for the action it performs. For example:

- `w` for “word”
- `f` for “find” (or “forward to character”)
- `b` for “back a word”

The keystrokes are intuitive once you know the mnemonic behind them, letting you navigate text semantically.

## I'm Stuck!

### Macros (recording @q)
- Macros are a way to record a sequence of commands and play them back later.
- `qq` - Macros :|
- `q` - record a macro
- `@q` - play the macro
- `q` - stop recording the macro

## H, J, K, L - no so nemonic
- `h` - move left
- `j` - move down
- `k` - move up
- `l` - move right

### Why?
- `h`, `j`, `k`, `l` are the home row keys. They are easy to reach and allow for fast navigation without moving your hands away from the home row.
- well see that `a`, `s`, `d`, `f` and many other keys are used for other commands.


## Left and right motions

### Small jumps
- `h` - move left
- `l` - move right

### Medium jumps
- `w` - move to the beginning of the next word
- `W` - move to the beginning of the next WORD
- `e` - move to the end of the current word
- `E` - move to the end of the current WORD
- `b` - move to the beginning of the previous word
- `B` - move to the beginning of the previous WORD

### Big jumps

- `0` - move to the beginning of the line
- `^` - move to the first non-blank character of the line
- `$` - move to the end of the line

### `f` and `F` - find forward and backward
- `f<char>` - move to the next occurrence of `<char>` in the line
- `F<char>` - move to the previous occurrence of `<char>` in the line
- `t<char>` - move to the character before the next occurrence of `<char>` in the line
- `T<char>` - move to the character after the previous occurrence of `<char>` in the line

#### Repeat last find
- `;` - repeat the last `f`, `F`, `t`, or `T` command
- `,` - repeat the last `f`, `F`, `t`, or `T` command in the opposite direction

## Side Quest - Counts
- You can prefix any motion with a number to repeat it that many times.
- For example, `3w` will move the cursor three words forward.

## Up and down motions

### Small jumps
- `j` - move down one line
- `k` - move up one line

### Medium jumps
- `Ctrl + d` - move down half a screen
- `Ctrl + u` - move up half a screen

### Big jumps
- `gg` - move to the top of the file
- `G` - move to the bottom of the file
- `M` - move to the middle of the file
- `H` - move to the top of the screen
- `L` - move to the bottom of the screen

#### Tricky
- `zt` - move the current line to the top of the screen
- `zz` - move the current line to the center of the screen
- `zb` - move the current line to the bottom of the screen
- `<count>%` - move to the line number that is a percentage of the file. 

#### Side Quest - `:` - command mode
- `:` - enter command mode
- `<enter>` - execute the command

### Line numbers
- `:n` - move to line number `n`

## Jump motions
- `Ctrl + o` - jump to the previous location in the jump list
- `Ctrl + i` - jump to the next location in the jump list

## Operator motions
- `d` - delete
- `c` - change
- `y` - yank (copy)
- `v` - visual mode (select text)

## Operators with motions
- `{operator} {motion}` - apply an operator to a motion
- `dw` - delete the next word
- `cw` - change the next word
- `yw` - yank the next word
- `vw` - select the next word

- Non letter motions (objects)
- `(` - move to the beginning of the current sentence
- `)` - move to the end of the current sentence
- `{` - move to the beginning of the current paragraph
- `}` - move to the end of the current paragraph
- `[` - move to the beginning of the current block
- `]` - move to the end of the current block
- `%` - move to the matching parenthesis, bracket, or brace

## In and Around (Nonletter motions)
- `{operator} {modifier} {object}`

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

## Text objects
- `iw` - inner word
- `aw` - a word
- `is` - inner sentence
- `as` - a sentence
- `ip` - inner paragraph
- `ap` - a paragraph
- `i(` - inner parentheses
- `a(` - a parentheses

## Putting it all together
- `{operator} {modifier} {text object}`
- `daw` - delete a word
- `dap` - delete a paragraph - `dp` - also works
- `ci"` - change inside quotes
- `yi(` - yank inside parentheses

## `d{a|i}w` vs `dw`
- `daw` - delete a word and the space after it
- `dw` - delete a word but not the space after it

## Those are the core motions
- There are many more motions, but these are the most common ones.
- You can combine them in many ways to create powerful commands.

## So what about VIM?
- Vim is a text editor that uses these motions as its core navigation and editing commands.

## Moving around with search

### Main search commands
- `/` - search forward
- `?` - search backward
- `*` - search for the word under the cursor
- `#` - search for the word under the cursor in the opposite direction

### Repeat search
- `n` - repeat the last search in the same direction
- `N` - repeat the last search in the opposite direction

## Search and replace
- `:s/<search>/<replace>/g` - search and replace in the current line
- `:%s/<search>/<replace>/g` - search and replace in the entire file
- vis

#### Side quest - regex
- vim supports regex in search and replace commands.

### Confirmation
- `:%s/<search>/<replace>/gc` - search and replace in the entire file with confirmation

## Visual mode
- `v` - enter visual mode
- `V` - enter visual line mode
- `Ctrl + v` - enter visual block mode
- `o` - move the cursor to the other end of the selection

### Yanking and pasting
- `y` - yank (copy) the selected text
- `d` - delete the selected text
- `p` - paste the yanked or deleted text after the cursor
- `P` - paste the yanked or deleted text before the cursor

### `'<,'>` - visual range when using commands
- `'<,'>s/<search>/<replace>/g` - search and replace in the selected text

## Start editing

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

## Editing multiple lines

### Visual block mode
- `Ctrl + v` - enter visual block mode
- `I` - insert text at the beginning of the selected block
- `A` - insert text at the end of the selected block
- `d` - delete the selected block
- `y` - yank the selected block
- `p` - paste the yanked or deleted block
- `r<char>` - replace the selected block with `<char>`
- `c` - change the selected block
- `x` - delete the selected block

## Registers
- registers are a way to store yanked or deleted text for later use.
- the default register is the unnamed register, which stores the last yanked or deleted text. `"`.
- To yank or delete text to a specific register, use the `"` key followed by the register name.
















## Links
- https://vimdoc.sourceforge.net/htmldoc/motion.html
- https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/moving-blazingly-fast-with-the-core-vim-motions/
