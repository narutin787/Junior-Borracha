// Importação dos SDKs necessários na versão 10 Modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    doc 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { 
    getStorage, 
    ref, 
    uploadBytes, 
    getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpM5vV24ujCJbjDm3VheJ1y4_WpeZhFvg",
  authDomain: "junior-borracha-veiculos.firebaseapp.com",
  projectId: "junior-borracha-veiculos",
  storageBucket: "junior-borracha-veiculos.firebasestorage.app",
  messagingSenderId: "312637290377",
  appId: "1:312637290377:web:cca377099a17c5547c5358",
  measurementId: "G-WQJ686RL17"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// --- FUNCIONALIDADES DE AUTENTICAÇÃO ---

export const registrarUsuario = (email, senha) => createUserWithEmailAndPassword(auth, email, senha);

export const loginUsuario = (email, senha) => signInWithEmailAndPassword(auth, email, senha);

export const logoutUsuario = () => signOut(auth);

export const observarAutenticacao = (callback) => onAuthStateChanged(auth, callback);

export const getUsuarioAtual = () => auth.currentUser;

// --- FUNCIONALIDADES DE STORAGE (Imagens) ---

export const fazerUploadImagem = async (arquivo) => {
    if (!arquivo) return null;
    const nomeArquivo = `${Date.now()}_${arquivo.name}`;
    const storageRef = ref(storage, `veiculos/${nomeArquivo}`);
    
    const snapshot = await uploadBytes(storageRef, arquivo);
    const url = await getDownloadURL(snapshot.ref);
    return url;
};

// --- FUNCIONALIDADES DE FIRESTORE (Banco de Dados) ---

export const adicionarCarro = async (dadosCarro) => {
    // dadosCarro deve conter: nome, marca, ano, preco, descricao, imagem, userId
    try {
        const docRef = await addDoc(collection(db, "carros"), dadosCarro);
        return docRef.id;
    } catch (error) {
        console.error("Erro ao adicionar carro:", error);
        throw error;
    }
};

export const listarCarros = async () => {
    const querySnapshot = await getDocs(collection(db, "carros"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const excluirCarro = async (carroId) => {
    await deleteDoc(doc(db, "carros", carroId));
};