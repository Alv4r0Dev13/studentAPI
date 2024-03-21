import app from './app';
const port = process.env.PORT, url = process.env.HOST_URL;

app.listen(port, () => {
  console.log(`\nApp listening on port ${port}\nAccess ${url}`);
});
