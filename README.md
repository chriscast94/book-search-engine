# book-search-engine
## Description
This book search engine use Google Books Api to let you search for books based on their title. It returns the results with a title, image of the cover, a description. When signed you can save books you like to your profile or remove them for your profile. This app has been refactored from the orginal which used a RESTful Api to now a GraphQL Api using Apollo Server with GraphQL queries and mutations.

## Installation
Open Github and GitBash
Click on link for Repository "book-search-engine"
Click the green button
Click "Clone with HTTPS" or "Use with SSH"
Go to Git Bash
Change directory to the location you wish to place it to
Type git clone and paste what you copied from the Git Hub repository
Press Enter to create clone

## Usage
Open index.html through VS Code, right click on the page, and click on Open in Default Browser button if open in browser extension is enabled. To view files in the GitHub Repository, click here: https://boiling-headland-30450.herokuapp.com/

Below is a screenshot of the functioning application:
![image](https://user-images.githubusercontent.com/53799375/153527169-af5995cf-87bd-4198-9d98-ec00754039e0.png)

Below are snippets of the live code:
```
 const SearchBooks = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
  const [saveBook] = useMutation(SAVE_BOOK);
```

## Credits
Received help from Bradley Davis (tutor), Prof. Farish, and my classmates
Developed by Christian Castillo

## License
Copyright (c) [2021] [Christian J. Castillo]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
