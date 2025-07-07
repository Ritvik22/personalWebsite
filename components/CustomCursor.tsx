'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    // Additional hover handlers for different element types
    const onLinkHoverStart = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      setLinkHovered(true);
      
      // Check for data-cursor-text attribute
      const cursorTextAttr = target.getAttribute('data-cursor-text');
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
      }
    };

    const onLinkHoverEnd = () => {
      setLinkHovered(false);
      setCursorText('');
    };

    const onButtonHoverStart = () => {
      setButtonHovered(true);
    };

    const onButtonHoverEnd = () => {
      setButtonHovered(false);
    };

    const onImageHoverStart = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      setImageHovered(true);
      
      // Check for data-cursor-text attribute
      const cursorTextAttr = target.getAttribute('data-cursor-text');
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
      }
    };

    const onImageHoverEnd = () => {
      setImageHovered(false);
      setCursorText('');
    };

    const onTextHoverStart = () => {
      setTextHovered(true);
    };

    const onTextHoverEnd = () => {
      setTextHovered(false);
    };

    addEventListeners();

    // Add hover listeners with more specific selectors
    const links = document.querySelectorAll('a, [data-cursor="link"]');
    const buttons = document.querySelectorAll('button, .button, [data-cursor="button"]');
    const images = document.querySelectorAll('img, .image, [data-cursor="view"]');
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');

    links.forEach(link => {
      link.addEventListener('mouseenter', onLinkHoverStart);
      link.addEventListener('mouseleave', onLinkHoverEnd);
    });

    buttons.forEach(button => {
      button.addEventListener('mouseenter', onButtonHoverStart);
      button.addEventListener('mouseleave', onButtonHoverEnd);
    });

    images.forEach(image => {
      image.addEventListener('mouseenter', onImageHoverStart);
      image.addEventListener('mouseleave', onImageHoverEnd);
    });

    textElements.forEach(text => {
      text.addEventListener('mouseenter', onTextHoverStart);
      text.addEventListener('mouseleave', onTextHoverEnd);
    });

    // Add data-cursor-text attributes to key elements
    document.querySelectorAll('.project-card').forEach(card => {
      card.setAttribute('data-cursor-text', 'View');
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(email => {
      email.setAttribute('data-cursor-text', 'Email');
    });

    document.querySelectorAll('a[href^="https://"]').forEach(link => {
      if (!link.getAttribute('data-cursor-text')) {
        link.setAttribute('data-cursor-text', 'Visit');
      }
    });

    // Add magnetic effect to buttons
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e: any) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const magneticStrength = element.getAttribute('data-magnetic-strength') || 0.5;
        (element as HTMLElement).style.transform = `translate(${x * Number(magneticStrength)}px, ${y * Number(magneticStrength)}px)`;
      });
      
      element.addEventListener('mouseleave', () => {
        (element as HTMLElement).style.transform = 'translate(0px, 0px)';
      });
    });

    return () => {
      removeEventListeners();
      links.forEach(link => {
        link.removeEventListener('mouseenter', onLinkHoverStart);
        link.removeEventListener('mouseleave', onLinkHoverEnd);
      });
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', onButtonHoverStart);
        button.removeEventListener('mouseleave', onButtonHoverEnd);
      });
      images.forEach(image => {
        image.removeEventListener('mouseenter', onImageHoverStart);
        image.removeEventListener('mouseleave', onImageHoverEnd);
      });
      textElements.forEach(text => {
        text.removeEventListener('mouseenter', onTextHoverStart);
        text.removeEventListener('mouseleave', onTextHoverEnd);
      });
    };
  }, []);

  // Determine cursor appearance based on what's being hovered
  const getCursorClass = () => {
    if (clicked) return 'scale-75 bg-primary-400/20';
    if (linkHovered) return 'scale-150 bg-accent-400/20 ring-accent-400';
    if (buttonHovered) return 'scale-125 bg-primary-400/20';
    if (imageHovered) return 'scale-[2] rounded-md border-none bg-black/20';
    if (textHovered) return 'scale-90 opacity-30';
    return '';
  };

  return (
    <>
      <div
        className={`custom-cursor ${hidden ? 'opacity-0' : ''}`}
        style={{
          position: 'fixed',
          left: position.x - 16,
          top: position.y - 16,
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference'
        }}
      >
        <div 
          className={`h-8 w-8 rounded-full border-2 border-primary-400 transition-all duration-150 flex items-center justify-center text-xs font-mono
                     ${getCursorClass()}`}
        >
          {cursorText && (
            <span className="text-white whitespace-nowrap text-center">
              {cursorText}
            </span>
          )}
        </div>
      </div>
      
      <div
        className={`custom-cursor-dot ${hidden ? 'opacity-0' : ''} ${(linkHovered || buttonHovered || imageHovered) ? 'opacity-0' : ''}`}
        style={{
          position: 'fixed',
          left: position.x - 4,
          top: position.y - 4,
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference'
        }}
      >
        <div className="h-2 w-2 rounded-full bg-primary-400" />
      </div>
    </>
  );
};

export default CustomCursor; 