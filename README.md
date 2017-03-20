This repository holds a webapp example that communicates with an extension using [NW.js](nwjs.io).

It works running the webapp from the command line with `nwjs`.

However, it fails when packaged as described in the [documentation](http://docs.nwjs.io/en/latest/For%20Users/Package%20and%20Distribute/#package-your-app) or using [nwbuild](https://github.com/nwjs/nw-builder). Fails with the following error:

```
Failed to load extension from: .Manifest file is missing or unreadable.
```
