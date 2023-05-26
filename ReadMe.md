# Comics Stash

## Features

- Vite
  - html minification, MJS template
  - importing SVGs as react components
  - CSS / preprocessors / modules [support](https://vitejs.dev/guide/features.html#css)
- React
- Eslint: airbnb config, prettier integration, import & props sorting

## Usage

1. Install the dependencies:

   ```sh
   npm i
   ```

2. Run the Frontend
   ```sh
   cd frontend
   npm run dev
   ```
3. Run the server

   ```sh
   cd server
   node server.mjs
   ```

4. Update Environment Variables

   - Create .env file
     -- Update Variable: COMIC_BASE_URL:
     -- Add Your Comic Vine API: COMIC_API_KEY:
     -- Update MongoDB Location: MONGODB_URL:
   - Place in Server Folder
