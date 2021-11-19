# Team 4308's Site

## Development

First, clone the site.

```sh
git clone https://github.com/Team4308/site.git
cd site
```

Then, install dependencies.

```sh
yarn install
```

or, if you like using bad alternatives:

```sh
npm install
```

Finally, start the Tailwind CLI.

```sh
yarn tailwindcss -i styles/components.css -o styles/tailwind.css -w
```

or, again, if you like using bad alternatives:

```sh
npx tailwindcss -i styles/components.css -o styles/tailwind.css -w
```

Edit the `*.html` and `components.css` files to your liking, and Tailwind will keep updating the `tailwind.css` file.
