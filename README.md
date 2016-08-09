# Documentation Jekyll Site

Based off the initial Wordpress redesign visible [here](http://velociraptorsystems.com/samples/mvz_tests/arctosdb/) (repo: https://github.com/museum-of-vertebrate-zoology/wp-arctos-theme )


View this at https://arctosdb.github.io/documentation-wiki/

# Creating new files

Save them as `.markdown` files. On GitHub pages, they may not render correctly with a different extension.

# Organization

Different types of writeups are organized into [Jekyll collections](https://jekyllrb.com/docs/collections/), kept in files that begin with [YAML Front matter](https://jekyllrb.com/docs/frontmatter/), like [this sample file](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/bd5b3148c9b098ade2446a192c4d5655aa4a14bb/_documentation/sample.markdown).

Placing the files into the appropriate directory will automatically sort them. They will not be listed if the `title` attribute contains the string "index".

The collection directories are:

- `_documentation`
- `_how_to`


# Creating new collections

To create a collection, do the following:

1. Create a directory with a leading underscore and the name of the collection, replacing spaces with `_`. For example, **My Awesome Collection** becomes the directory `_my_awesome_collection`.
2. In `./_config.yml`, under the `collections` item, add
  ```
  my_awesome_collection:
    output: true
  ```
3. Create an `index.html` file for your new collection, and in the front matter, give it the layout `collection_index`.
