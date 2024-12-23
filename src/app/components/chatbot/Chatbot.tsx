'use client';

import { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import styles from './Chatbot.module.css';

// Definimos los tipos para los mensajes del chat
type ChatMessage = {
    sender: 'user' | 'bot';
    text: string;
};

const Chatbot: React.FC = () => {
   
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false); // Estado para el efecto "Escribiendo..."
    const [isThinking, setIsThinking] = useState(false); // Estado para el efecto "Pensando..."
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

    // Agregar mensaje inicial al historial (solo una vez)
    useEffect(() => {
        if (chatHistory.length === 0) {
            setChatHistory([
                { sender: 'bot', text: 'Hola, ¿en qué podemos asesorarte hoy?' }
            ]);
        }
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);

        // Reiniciar el temporizador de "Escribiendo..."
        if (typingTimeout) clearTimeout(typingTimeout);

        setIsTyping(true); // Mostrar "Escribiendo..." mientras el usuario escribe

        // Configurar el temporizador para desactivar "Escribiendo..." después de 1.5 segundos
        const timeout = setTimeout(() => {
            setIsTyping(false);
        }, 1000);

        setTypingTimeout(timeout);
    };

    const sendMessage = async () => {
        const url = 'https://chatbotsdialog.vercel.app'; // URL del chatbot
        if (!message.trim()) return;

        const userMessage: ChatMessage = { sender: 'user', text: message };
        setChatHistory((prev) => [...prev, userMessage]);
        setIsTyping(false); // Ocultar "Escribiendo..." al enviar el mensaje

        // Mostrar "Pensando..."
        setIsThinking(true);

        // Limpiar el temporizador de "Escribiendo..."
        if (typingTimeout) clearTimeout(typingTimeout);

        try {
            const res = await fetch(`${url}/api/df_query`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: message }),
            });

            const data = await res.json();

            // Agregar respuesta del bot al historial
            const botMessage: ChatMessage = { sender: 'bot', text: data.responseText };
            setChatHistory((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            setChatHistory((prev) => [
                ...prev,
                { sender: 'bot', text: 'Hubo un error procesando tu mensaje.' }
            ]);
        } finally {
            // Ocultar "Pensando..." cuando el bot responde
            setIsThinking(false);
        }

        setMessage('');
    };

    return (
        <div className={`${styles.chatbot} ${isOpen ? styles.open : ''}`}>
            <div className={styles.header} onClick={toggleChat}>
                {isOpen ? (
                    'Cerrar Chat'
                ) : (
                    <div className={styles.openChat}>
                        <FaRobot size={20} /> <span>Abrir Chat</span>
                    </div>
                )}
            </div>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHistory}>
                        {chatHistory.map((msg, index) => (
                            <div
                                key={index}
                                className={
                                    msg.sender === 'user'
                                        ? styles.userMessage
                                        : styles.botMessage
                                }
                            >
                                {msg.text}
                            </div>
                        ))}
                        {isTyping && (
                            <div className={styles.botMessage}>
                                <em>Escribiendo...</em>
                            </div>
                        )}
                        {isThinking && (
                            <div className={styles.botMessage}>
                                <em>Pensando...</em>
                            </div>
                        )}
                    </div>
                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            value={message}
                            onChange={handleInputChange}
                            placeholder="Escribe un mensaje..."
                        />
                        <button onClick={sendMessage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width="24px"
                                height="24px"
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
