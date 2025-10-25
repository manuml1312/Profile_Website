function TypingEffect({ 
  texts = ["Hello World!"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
}) {
  try {
    const [currentText, setCurrentText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [showCursor, setShowCursor] = React.useState(true);

    React.useEffect(() => {
      const currentString = texts[currentIndex];
      let timeout;

      if (!isDeleting && currentText === currentString) {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        timeout = setTimeout(() => {
          setCurrentText(prev => {
            if (isDeleting) {
              return currentString.substring(0, prev.length - 1);
            } else {
              return currentString.substring(0, prev.length + 1);
            }
          });
        }, speed);
      }

      return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

    React.useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }, []);

    return (
      <div className="flex items-center justify-center" data-name="typing-effect" data-file="components/TypingEffect.js">
        <div className="text-xl md:text-2xl text-[var(--text-primary)] flex items-center font-medium">
          <span>{currentText}</span>
          <span className={`ml-1 inline-block w-0.5 h-6 bg-[var(--primary-color)] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TypingEffect component error:', error);
    return null;
  }
}