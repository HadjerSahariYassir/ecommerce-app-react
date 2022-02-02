import firebase  from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();
//way1 to access to specific doc
firestore.collection('users').doc('4GyVdS6vsxc5Bjxz0UTZ').collection('cartItems').doc('fG8esktgS7JHSnmTFmSM');
//way2 to get thr document
firestore.doc('/users/4GyVdS6vsxc5Bjxz0UTZ/cartItems/fG8esktgS7JHSnmTFmSM/');
//way 3 to get specific collection
firestore.collection('/users/4GyVdS6vsxc5Bjxz0UTZ/cartItems');
