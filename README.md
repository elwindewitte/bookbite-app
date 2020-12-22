# Bookbite
## About the project
This is platform ment for young people to encorage them to consume more literature. We focused on the reading experience of books, and made a platform where they can both read books with more focus, as well as create their own lists and share with others. This is merely a prototype, so it re-enacts full functionality.

- Team: Silverpoint
- Members: Ashana, Wessel, Lisa, Gabriella, Elwin
- Client: [KB (Koninklijke Bibliotheek/Royal Dutch Library)](https://www.kb.nl/en)
- Date: September 7, 2020 through January 29, 2021
- University: [RUAS (Rotterdam University of Applied Sciences)](https://www.rotterdamuas.com/)
- Study program: [CMD (Communication and Multimedia Design)](https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/communication-and-multimedia-design/voltijd/)
- Course: Minor IUXD (Interface and User Experience Design)

## Code instructions
### Languages used
- `.njk` for layouts
- `.md` for data on pages (used in layouts)
- `.html` for general page structure
- `.css` for styling
- `.js` for interactivity

### Frameworks/tools used
- [Node.js](https://nodejs.org/en/)
- [Eleventy](https://www.11ty.dev/)
- [Netlify](https://www.netlify.com/)

### Before coding
- Install [Node.js](https://nodejs.org/en/)
- Install [Git](https://git-scm.com/)
- Install [VSCode](https://code.visualstudio.com/download)
- Install [Github Desktop](https://desktop.github.com/)
- Set terminal in VSCode to _Git Bash_
- Install [_Nunjucks_](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks) extension for proper `.njk` code formatting
- (Optional) Install [_vscode-icons_](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) extension for proper icons
- Follow the [instructions](https://www.11ty.dev/docs/getting-started/) from Eleventy

### Eleventy
- Run: `npx @11ty/eleventy`
- Start server: `npx @11ty/eleventy --serve`

### Know errors
`Error: template names must be a string: undefined`
Fix: just set the template in the include between quotes

## Using the code base
### Looking up books in a specific collection for an on-page-list
To include an on-page-list for books, you can add this piece of code:
```nunjucks
{%- set listName = "Alle 'Harry Potter' boeken" -%}
{%- set listFilter = "serieHarryPotter" -%}
{%- set listContent = collections.book -%}
{%- include "onPageListBook.njk" -%}
```
Variables you can change:
- `listName` gives the `on-page-list` a proper header, can change it to whatever string you want
- `listFilter` allows you to specify a certain tag to filter the items on. Must be a string if you want to look up a certain tag, but can be a variable when you want to use meta data. For example; if you're on the book detail page, you might want to look up books with the same `genreTag`.
- `listContent` allows you to specify the collection you want to show.

`{%- include "onPageListBook.njk" -%}` actually includes the template for the on-page-list specifically for books, but can be set to `onPageListBookshelf` and `onPageListAuthors` to change to bookshelves and authors accordingly. Collection must be set in the same way. #}
