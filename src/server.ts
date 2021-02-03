import app from './app';
import colors =  require('colors');

app.listen(3333, () => {
  console.log(colors.green("[OK] Server running..."));
});