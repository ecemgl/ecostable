import React, { useState } from 'react';
import { Modal, Input, message } from 'antd';
import axios from 'axios';

const ENDPOINT = 'https://table-backend-66d5c7c9614a.herokuapp.com/api/feedback';

interface FeedbackModalProps {
  title: string;
  okText: string;
  cancelText: string;
  visible: boolean;
  onCancel: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ visible, onCancel, title, okText, cancelText  }) => {
  const [feedback, setFeedback] = useState('');
  const handleSave = async () => {
    try {
        const response = await axios.post( ENDPOINT, { feedback });  
        setFeedback('');
        onCancel();
        message.success(response.data.message);
      } catch (error) {
        message.error('Error saving feedback. Please try again.');
      }
  };

  return (
    <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      onOk={handleSave}
      okText={okText}
      cancelText={cancelText}
    >
      <Input.TextArea
        placeholder="Type your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
    </Modal>
  );
};

export default FeedbackModal;
