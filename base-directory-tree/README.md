# Directory Visualization

This shows the directory structure, with only the relevant pieces shown initially. Any files that we have more info on have a note (exposed on hover).

Built with the [Project Explorer CLI](https://github.com/sdras/project-explorer).

## Open directories

You can specify what directories you would like to be open when a user first visits by adding them to the `opened` array in `base-directory-tree/src/store`.

## Comments 

You can add comments for the different files by adding them to the `comments` object in `base-directory-tree/src/store`. You will specify it using the path as the key and the comment as the value, like this:

```
`READMEexample`: `This is an example of how a note is made! You can write the pathname of any file and the note will appear ☺️. You can delete this now.`
```

## Github link

You can point the github logo link to your own repo by updating the `github` string in `base-directory-tree/src/store`.

## Kick off your server
```
yarn
yarn serve
```
