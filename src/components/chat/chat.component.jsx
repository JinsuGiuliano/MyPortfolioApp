import { useState } from 'react';

export default function GradioPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = {
    position: 'fixed',
    bottom: '14px',
    right: '20px',
    backgroundColor: '#031427ff',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.4)',
    zIndex: 1050,
    animation: 'bounce 3s ease'
  };

  const modalStyle = {
    position: 'fixed',
    bottom: '270px',
    right: '20px',
    width: '400px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1050
  };

  const modalContentStyle = {
    maxWidth: '800px',
    maxHeight: '80vh',
    width: '100%'
  };

  const gradioContainerStyle = {
    height: '400px',
    width: '100%'
  };

  return (
    <>
      {/* Floating button in bottom right */}
      <button
        onClick={() => setIsOpen(isOpen => !isOpen)}
        className="btn btn-primary rounded shadow"
        style={buttonStyle}
      >
       ✨ My AI Assistant 💬 
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div style={modalStyle}>
          <div className="position-relative" style={modalContentStyle}>            
            {/* Gradio embed */}
            <div style={gradioContainerStyle}>
              <gradio-app src="https://gustavogiulianojinsu-personal-ai-chat.hf.space"></gradio-app>
            </div>
          </div>
        </div>
      )}
    </>
  );
}