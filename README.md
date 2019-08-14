[![Build Status](https://travis-ci.org/intermine/intermine-homepage-2017.svg?branch=master)](https://travis-ci.org/intermine/intermine-homepage-2017)

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
6. Push.

### Deploying

Anything on [intermine/intermine-homepage-2017](https://github.com/intermine/intermine-homepage-2017) master branch will automatically be deployed to InterMine.org, with the help of Travis CI. The code repo for intermine.org content is [intermine/intermine.github.io](https://github.com/intermine/intermine.github.io)

## Updating Publications

Publication info at http://www.intermine.org/publications is drawn from the Zotero API.
To update the site's list of publications:

1. Join our [Zotero group](https://www.zotero.org/groups/2117194/intermine/items/) if you haven't already.
2. Add the publication you're looking for to our lists - make sure to put it in the correct collection folder! (Don't type it all in to the website - use the [web plugin](https://www.zotero.org/support/getting_stuff_into_your_library)).
3. To update the website, simply check this project out and run `hugo` to re-generate the publication list.
4. Follow the deploying step above.

## Icons

Many of the icons shown are from the [Smashing Magazine Ballicons 3](https://www.smashingmagazine.com/2017/03/free-sparkly-icons-ballicons-eps-svg/) free set.
