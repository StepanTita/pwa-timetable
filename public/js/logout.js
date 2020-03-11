auth.onAuthStateChanged(function (user) {
    if (!user) {
        window.location = 'index.html';
    } else {
        db.collection('classes').where("user_id", "==", user.uid)
            .onSnapshot(snapshot => {
                // console.log(user);
                snapshot.docChanges().forEach(change => {
                    // console.log(change.type, change.doc.id, change.doc.data());
                    if (change.type === 'added') {
                        // add the document data to the web page
                        renderClass(change.doc.data(), change.doc.id);
                    }
                    if (change.type === 'removed') {
                        // remove the document data from the web page
                        removeClassUi(change.doc.id);
                    }
                });
            });
    }
}
)

$('#logout').on('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User signed out')
    });
})