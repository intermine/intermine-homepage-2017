# InterMine Homepage

New design for 2017.

## Dependencies:
The homepage is generated using the static site generator [hugo](https://gohugo.io/). Install this if you want to modify the site.

## Editing content: 

1. Check out the repo
2. Go to the `/content` folder to change the content of pages, or the `/layouts` folder for aesthetic changes. 
4. If you'd like to view the site locally, run `hugo server` and navigate to localhost:1313. While `hugo server` is running, it will automatically build and refresh pages you edit, so long as there are no errors.
3. Edit the page you're interested in. Note that folders in content which have an `_index.md` are list pages and will output the contents of all the other pages in the folder. Folders with `index.md` (no underscore) are just single-page entries rather than list pages.
5. When you're happy with your changes locally, run `hugo`. This will build the site statically into the `docs` folder.
6. Push. Viola, it should be live and hosted on gh-pages (assuming you have gh-pages set up for your repo to serve from `/docs`)
