import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Card, TextInput, Button, Dropdown, Modal, Spinner, Textarea } from 'flowbite-react';
import { HiOutlinePaperAirplane, HiX } from 'react-icons/hi'; // Import HiX for the close icon
import "../../App.css";
import Gemini from '../../../public/robot (1).png'
// import Gemini from '../../../public/STEM_LOGO_TUTOR.png'

function GeminiChat({ language, handleLanguageChange, onClose }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to STEM Online! How can I assist you today?' },
    { sender: 'bot', text: 'Feel free to ask any questions related to STEM topics.' },
  ]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);

  const typeMessage = (text) => {
    setIsTyping(true);
    let index = 0;
    typingRef.current = setInterval(() => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage.sender === 'bot') {
          lastMessage.text = text.slice(0, index + 20);
        }
        return newMessages;
      });
      index += 1;
      if (index >= text.length) {
        clearInterval(typingRef.current);
        setIsTyping(false);
      }
    }, 50);
  };

  const handleSend = async (event) => {
    event.preventDefault();
    if (prompt.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: prompt }]);
      setLoading(true);
      try {
        const gemini = new GoogleGenerativeAI('AIzaSyD_h8SRy54jyYXns4btKTdFAiHfuMcxb88');
        const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt, { language });
        const response = await result.response;
        const text = await response.text();

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: '' },
        ]);
        typeMessage(text);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setPrompt('');
      }
    }
  };

  useEffect(() => {
    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="bg-[#16A1DF] font-suwannaphum rounded-lg p-4 md:p-5 m-5 md:m-7">
        <div>
          <h1 className="font-suwannaphum text-xl md:text-2xl xl:text-3xl text-center text-white">Welcome chat with STEM</h1>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-sm md:text-md xl:text-lg font-semibold text-white mt-2">
            STEM <br />
            <p className="text-xs md:text-sm xl:text-base font-normal">Online</p>
          </h2>
          <img
            className="w-20 h-12 md:w-24 md:h-14 xl:w-28 xl:h-16 object-cover"
            src="../src/assets/STEM_LOGO_TUTOR.png"
            // src={Gemini}
            alt="STEM Logo"
          />
          <section className="bg-blue-500 text-white p-2 rounded-md font-suwannaphum">
            <Dropdown label={language} inline={true}>
              {/* Your Dropdown Items */}
            </Dropdown>
          </section>
        </div>
      </header>

      <Card className="relative w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] max-w-3xl mx-auto shadow-lg rounded-lg border-gray-300 bg-white font-suwannaphum mb-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <HiX size={24} />
        </button>
        <img
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-cover rounded-full"
          src="../src/assets/STEM_LOGO_TUTOR.png"
            // src={Gemini}
          alt="STEM Logo"
        />
        <div className="overflow-auto h-60 md:h-80 xl:h-96 p-2">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-2`}>
              <div
                className={`p-3 rounded-lg text-sm md:text-base max-w-xs md:max-w-md ${
                  message.sender === 'bot'
                    ? 'bg-gray-100 text-gray-800 border border-gray-300 p-2'
                    : 'bg-blue-200 text-gray-800 border border-gray-500 p-2 mr-4'
                }`}
                style={{ textIndent: message.sender !== 'bot' ? '0' : '0', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-2">
              <div className="p-3 rounded-lg bg-gray-100 text-gray-800 text-sm max-w-xs font-suwannaphum border border-gray-300">
                Typing...
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
          <Textarea
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your message here..."
            disabled={loading}
            className="font-suwannaphum w-full h-10 md:h-12 xl:h-14"
          />
          <Button type="submit" className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 bg-[#16A1DF]" disabled={loading}>
            {loading ? <Spinner size="lg" /> : <HiOutlinePaperAirplane size={27} />}
          </Button>
        </form>
      </Card>
    </>
  );
}

function App() {
  const [showChat, setShowChat] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    setDragStart({ x: e.clientX, y: e.clientY });
    e.dataTransfer.setData('text/plain', '');
  };

  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return; // Ignore invalid drag events
    setImagePosition((prevPosition) => ({
      x: prevPosition.x + (e.clientX - dragStart.x),
      y: prevPosition.y + (e.clientY - dragStart.y),
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    console.log(`Selected language: ${newLanguage}`);
  };

  return (
    <div className="p-4 md:p-6 xl:p-8" style={{ position: 'relative' }}>
      <section
        className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 cursor-pointer absolute"
        style={{ left: `${imagePosition.x}px`, top: `${imagePosition.y}px` }}
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onClick={() => setShowChat(true)}
      >
        <img
          // src="../src/assets/robot (1).png"
          src={Gemini}
          alt="Robot"
          className="w-full h-full ml-10 -mt-5"
        />
      </section>

      <section>
        <Modal show={showChat} onClose={() => setShowChat(false)} size="xl">
          <Modal.Body>
            <GeminiChat
              language={language}
              handleLanguageChange={handleLanguageChange}
              onClose={() => setShowChat(false)}
            />
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
}

export default App;
