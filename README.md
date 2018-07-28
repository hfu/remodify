# remodify
apply modify.json to NDJSON (again)

# Background
[modify-spec](https://github.com/hfu/modify-spec) is used to modify GeoJSON features for tippecaoe in [pnd](https://github.com/hfu/pnd), which is to export features from PostGIS.

I wanted to separate modify process from PostGIS export part.

# Install
```sh
$ git clone git@github.com:hfu/remodify.git
$ cd remodify
$ npm install
```

# Usage
```sh
$ node index.js somewhere/input.ndjson > somewhere/output.ndjson
```

# See also
- [modify-spec](https://github.com/hfu/modify-spec)
- [pnd](https://github.com/hfu/pnd)
