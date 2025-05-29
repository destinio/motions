# Vim Configuration

## Check Installation

```bash
vim --version
```

### Install Vim

```bash
brew install vim
```

## Vimrc

**Add .vimrc to your home directory:

```bash
" Set line numbers
set number               " Show absolute line number on the current line
set relativenumber       " Show relative line numbers elsewhere

" Tabs and indentation
set tabstop=4            " Number of spaces that a <Tab> in the file counts for
set shiftwidth=4         " Number of spaces to use for each auto-indent
set expandtab            " Use spaces instead of tabs
set autoindent           " Copy indent from current line when starting a new one
set smartindent          " Add extra indent after braces, etc.

" Search settings
set ignorecase           " Case-insensitive search
set smartcase            " ... unless the search has capital letters
set incsearch            " Show matches while typing
set hlsearch             " Highlight search matches

" Display settings
set cursorline           " Highlight the current line
set wrap                 " Wrap long lines
set linebreak            " Wrap at word boundaries (for readability)
set scrolloff=8          " Start scrolling 8 lines before edge of screen
set sidescrolloff=8      " Same as above for horizontal scrolling

" UI Enhancements
set showcmd              " Show command in bottom right while typing
set showmode             " Show current mode (e.g., -- INSERT --)
set wildmenu             " Enhanced command-line completion
set wildmode=longest:full,full " Tab completion settings

" File handling
set nobackup             " Don't keep backup files
set nowritebackup        " ...or backup before overwriting a file
set noswapfile           " Disable swap files
set undofile             " Persistent undo even after closing file

" Enable mouse support
set mouse=a              " Enable mouse in all modes

" Clipboard
set clipboard=unnamedplus " Use system clipboard

" Appearance
syntax on                " Enable syntax highlighting
set termguicolors        " Enable 24-bit colors
colorscheme desert       " Set a colorscheme (change if desired)

" Performance
set lazyredraw           " Don't redraw while executing macros, etc.
set ttyfast              " Optimize for fast terminal connections

" Statusline
set laststatus=2         " Always show status line
set ruler                " Show cursor position

" File encoding
set encoding=utf-8       " Default encoding
set fileencoding=utf-8   " Encoding for written files

" Split behavior
set splitright           " Vertical splits open to the right
set splitbelow           " Horizontal splits open below

" Misc
set history=1000         " Command history size

```
