# remodify
Apply modify.json to NDJSON (again)

# Background
[modify-spec](https://github.com/hfu/modify-spec) is used to modify GeoJSON features for tippecaoe in [pnd](https://github.com/hfu/pnd), which is to export features from PostGIS.

I wanted to separate modify process from the PostGIS export part.

# Install
```sh
$ git clone git@github.com:hfu/remodify.git
$ cd remodify
$ npm install
```

# Usage
index.js needs two parameter. The first parameter is the path to the modify.js. The second parameter is the path to the ndjson file. Outout will be to stdout.
```sh
$ cat somewhere/input.ndjson | node index.js somewhere/modify.js > somewhere/output.ndjson
```

# See also
- [modify-spec](https://github.com/hfu/modify-spec)
- [pnd](https://github.com/hfu/pnd)
