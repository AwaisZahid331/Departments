import React, { useState } from 'react';

const VoiceSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      setSearchTerm(event.results[0][0].transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search here..."
      />
      <button onClick={startListening}>
        {isListening ? 'Listening...' : 'Search by Voice'}
      </button>
      <p>Search Term: {searchTerm}</p>
    </div>
  );
};

export default VoiceSearch;