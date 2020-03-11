// enable offline data

db.enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // probably multible tabs open at once
            console.log('persistance failed');
        } else if (err.code == 'unimplemented') {
            // lack of browser support for the feature
            console.log('persistance not available');
        }
    });

// real-time listener
// db.collection('classes').onSnapshot(snapshot => {
//     // console.log(snapshot.docChanges());
//     snapshot.docChanges().forEach(change => {
//         // console.log(change.type, change.doc.id, change.doc.data());
//         if (change.type === 'added') {
//             // add the document data to the web page
//             renderClass(change.doc.data(), change.doc.id);
//         }
//         if (change.type === 'removed') {
//             // remove the document data from the web page
//             removeClassUi(change.doc.id);
//         }
//     });
// });

// db.collection('classes').where("user_id", "==", auth.currentUser.uid)
// .onSnapshot(snapshot => {
//     // console.log(snapshot.docChanges());
//     console.log(auth.currentUser);
//     snapshot.docChanges().forEach(change => {
//         // console.log(change.type, change.doc.id, change.doc.data());
//         if (change.type === 'added') {
//             // add the document data to the web page
//             renderClass(change.doc.data(), change.doc.id);
//         }
//         if (change.type === 'removed') {
//             // remove the document data from the web page
//             removeClassUi(change.doc.id);
//         }
//     });
// });