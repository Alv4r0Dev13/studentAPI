import app from './app';
const port = 3001;

app.listen(port, () => {
  console.log(`\nApp listening on port ${port}\nAccess http://localhost:${port}`);
});
