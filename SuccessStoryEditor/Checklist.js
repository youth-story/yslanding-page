import React, { useState } from 'react';
import './Checklist.css';

function Checklist() {
  const [inputValue, setInputValue] = useState('');
  const [selectedWords, setSelectedWords] = useState([]);
  const [suggestedWords, setSuggestedWords] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const mockSuggestedWords = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
    const filteredWords = mockSuggestedWords.filter((word) =>
      word.toLowerCase().includes(value.toLowerCase())
    );

    // Check if no words are found and display a message
    if (filteredWords.length === 0 && value !== '') {
      filteredWords.push('No such category found');
    }

    setSuggestedWords(filteredWords);
    setShowSuggestions(true);
  };

  const handleSelectWord = (word) => {
    setSelectedWords([...selectedWords, word]);
    setInputValue('');
    setSuggestedWords([]);
    setShowSuggestions(false);
  };

  const handleRemoveWord = (word) => {
    const updatedWords = selectedWords.filter((w) => w !== word);
    setSelectedWords(updatedWords);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Backspace' && inputValue === '') {
      const lastWord = selectedWords[selectedWords.length - 1];
      if (lastWord) {
        handleRemoveWord(lastWord);
      }
    }
  };

  return (
    <div className="checklist-container">
      <div className="input-container">
        <label htmlFor="input-container" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          Category
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Enter Category"
          style={{ backgroundColor: '#F7F7F7' }}
        />
        {showSuggestions && (
          <ul className="suggestion-list">
            {suggestedWords.map((word) => (
              <li key={word} onClick={() => handleSelectWord(word)}>
                {word}
              </li>
            ))}
          </ul>
        )}
        <div className="selected-words">
          <div className="selected-words-container">
            {selectedWords.map((word) => (
              <div key={word} className="selected-word">
                {word}
                <button onClick={() => handleRemoveWord(word)}>&times;</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
