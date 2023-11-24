import React, { useState } from 'react';
import FeedbackButton from './components/FeedbackButton';
import FeedbackModal from './components/FeedbackModal';

const AppFeedback: React.FC = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <FeedbackButton text='Give Feedback' onClick={handleButtonClick} />
      { modalVisible &&
        <FeedbackModal
          title='Feedback'
          okText='Save'
          cancelText='Cancel' 
          visible={true} 
          onCancel={handleModalCancel} />
      }
    </div>
  );
};

export default AppFeedback;
