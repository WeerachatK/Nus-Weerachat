import express from "express";
import { collection, addDoc, getDoc, getDocs, doc, setDoc, updateDoc, deleteDoc, where, query } from "firebase/firestore"; 
import{ db } from "../firebase.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    return res.send("it work!!!");
}); 

router.get("/addAdaLoveLace", async (req, res) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      return res.send(`Document written with ID: ${docRef.id}`);
    } catch (e) {
      return res.send(`Error adding document: ${e}`);
    }
  });

  router.get("/all", async (req, res) => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userData = querySnapshot.docs.map(((doc) => doc.data()));
      res.json(userData);
  });

  router.get("/:docID", async (req, res) => {
    const querySnapshot = await getDoc(doc(db, "users", req.params.docID));
    const userData = querySnapshot.data();
    res.json(userData);
});

router.post("/add", async (req, res) => {
    try {
      const body = req.body;
      const docRef = await setDoc(doc(db, "users", body.first + " " + body.last), body);
      return res.send(`Document written with ID: ${body.first}`);
    } catch (e) {
      return res.send(`Error adding document: ${e}`);
    }
});

router.post("/create/:ID", async(req, res) => {
    const body = req.body;
    const userID = req.params.ID;
    await setDoc(doc(db, "users", userID), body);
    return res.send(`Document written with ID: ${userID}`);
}); 

router.patch("/update/:usersDoc", async(req, res) => {
    const body = req.body;
    const userDoc = req.params.usersDoc;
    await updateDoc(doc(db, "users", userDoc), body);
    return res.send(`Document written with ID: ${userDoc}`);
});

router.delete("/delete/:usersDoc", async(req, res) => {
    const userDoc = req.params.usersDoc;
    await deleteDoc(doc(db, "users", userDoc));
    return res.send(`Document written with ID: ${userDoc}`);
});

router.get("/under/:year", async (req, res) => {
    const years = parseInt(req.params.year);
    const querySnapshot = await getDocs(
        query(
            collection(db, "users"), 
            where("born", ">=", years)
            )
    );
    const userData = querySnapshot.docs.map(((doc) => doc.data()));
    res.json(userData);
});

export default router;