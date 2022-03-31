import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth, firebase } from './services/firebase';

export const AuthContext = createContext({} as AuthContextType);



type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => void;
}




function App() {
  const [user, setUser] = useState<User>()

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    auth.signInWithPopup(provider).then(result => {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user
  
        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.'); 
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })
  }
  
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle  }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
