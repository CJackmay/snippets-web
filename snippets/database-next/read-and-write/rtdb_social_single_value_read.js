// This snippet file was generated by processing the source file:
// ./database-next/read-and-write.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_social_single_value_read_modular]
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

const userId = auth.currentUser.uid;
return db.ref('/users/' + userId).once('value').then((snapshot) => {
  const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});
// [END rtdb_social_single_value_read_modular]