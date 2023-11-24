import React from 'react';
import { Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

interface FeedbackButtonProps {
  text: string;
  onClick: () => void;
}

const FeedbackButton: React.FC<FeedbackButtonProps> = ({ text, onClick }) => {
  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  };

  return (
    <Button data-testid="feedback-button" type="primary" shape="default" icon={<MessageOutlined />} size="large" onClick={onClick} style={buttonStyle} >
      {text}
    </Button>
  );
};

export default FeedbackButton;
